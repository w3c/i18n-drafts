# A Practical Guide to `Intl.Segmenter`

JavaScript developers have long reached for `String.prototype.split('')` when they want to break text into characters. That approach looks simple, but it is not correct for much of the world's writing systems.

The reason is straightforward. A JavaScript string is a sequence of [UTF-16](https://www.w3.org/TR/i18n-glossary/#dfn-utf-16) [code units](https://www.w3.org/TR/i18n-glossary/#dfn-code-unit), not a sequence of user-perceived characters. What users see as one character may be made from multiple code units or [code points](https://www.w3.org/TR/i18n-glossary/#dfn-unicode-code-point).

`Intl.Segmenter` provides a better approach. It gives you language-sensitive text segmentation for graphemes, words, and sentences.

This article walks through `Intl.Segmenter` step by step and shows how to use it in code.

## Why `split('')` is not enough

Consider this:

```js
const text = "👩🏽‍💻";
console.log(text.split(''));
```

You might expect a single item. Instead, you get several pieces, because the emoji is composed of multiple code units.

The same problem appears with combining marks and many scripts:

```js
const text = "á"; // "a" + combining acute accent
console.log(text.split(''));
```

Visually, this looks like one character. Internally, it is more than one unit.

For users, what matters is often the [grapheme cluster](https://www.w3.org/TR/i18n-glossary/#dfn-grapheme-cluster).

## What `Intl.Segmenter` does

`Intl.Segmenter` lets you split text according to linguistic boundaries. It supports three granularities:

* `grapheme` for grapheme clusters
* `word` for words
* `sentence` for sentences

It is locale-aware, which is important for word boundaries in languages such as Japanese, Chinese, and Thai, where spaces may not separate words in the way English readers expect.

## Creating a segmenter

Start by creating an `Intl.Segmenter` instance:

```js
const segmenter = new Intl.Segmenter("en", {
  granularity: "grapheme"
});
```

The first argument is the locale, which is a BCP 47 language tag. The second is an options object.

You can also omit the locale:

```js
const segmenter = new Intl.Segmenter(undefined, {
  granularity: "word"
});
```

That uses the runtime's default locale.

## Segmenting graphemes

Let us begin with grapheme segmentation:

```js
const text = "A👩🏽‍💻áZ";

const segmenter = new Intl.Segmenter("en", {
  granularity: "grapheme"
});

const segments = segmenter.segment(text);

for (const item of segments) {
  console.log(item.segment);
}
```

Output:

```js
A
👩🏽‍💻
á
Z
```

### Turning segments into an array

The result of `segment()` is iterable. If you want an array of segments:

```js
const chars = [...segmenter.segment(text)].map(x => x.segment);
console.log(chars);
```

Output:

```js
["A", "👩🏽‍💻", "á", "Z"]
```

## Segmenting words

Let's look at words:

```js
const text = "The quick brown fox jumps.";

const segmenter = new Intl.Segmenter("en", {
  granularity: "word"
});

for (const item of segmenter.segment(text)) {
  console.log(item.segment, item.isWordLike);
}
```

Typical output includes both words and punctuation or spaces, with `isWordLike` helping distinguish actual words.

For example:

```js
The true
  false
quick true
  false
brown true
  false
fox true
  false
jumps true
. false
```

When segmenting by words, the iterator returns more than just words. It also returns separators and punctuation. The `isWordLike` property helps filter the meaningful word tokens.

```js
const words = [...segmenter.segment(text)]
  .filter(x => x.isWordLike)
  .map(x => x.segment);

console.log(words);
```

Output:

```js
["The", "quick", "brown", "fox", "jumps"]
```

## Why word segmentation matters

In English, splitting on spaces often looks good enough:

```js
text.split(/\s+/);
```

But that assumption fails for many languages.

Consider Japanese:

```js
const text = "私は学生です";
```

There are no spaces between words here. A space-based split will treat the entire string as one unit, but `Intl.Segmenter` can do better:

```js
const segmenter = new Intl.Segmenter("ja", {
  granularity: "word"
});

for (const item of segmenter.segment(text)) {
  console.log(item.segment, item.isWordLike);
}
```

This is one of the most compelling uses of `Intl.Segmenter`. It allows applications to tokenize text in a way that is far more appropriate for the writing system involved.

The same is true for Thai and other scripts where word boundaries are not simply marked by spaces.

## Segmenting sentences

Sentence segmentation is also available:

```js
const text = "Hello world. How are you? I am fine.";

const segmenter = new Intl.Segmenter("en", {
  granularity: "sentence"
});

for (const item of segmenter.segment(text)) {
  console.log(item.segment);
}
```

Output:

```js
Hello world.
How are you?
I am fine.
```

## Understanding the segment objects

Each item returned by the iterator is an object with useful metadata. For example:

```js
const text = "Hello, world!";
const segmenter = new Intl.Segmenter("en", {
  granularity: "word"
});

for (const item of segmenter.segment(text)) {
  console.log(item);
}
```

A segment object can include:

* `segment`: the text of the segment
* `index`: the starting position in the original string
* `input`: the original input string
* `isWordLike`: whether the segment resembles a word, for word granularity

That `index` value is particularly useful when you need to align segmented text with the original string.

## A simple fallback pattern

If you need a fallback for environments where `Intl.Segmenter` is unavailable, be clear about the tradeoff. A fallback based on `split('')` is only an approximation:

```js
function segmentGraphemes(text, locale = undefined) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter(locale, {
      granularity: "grapheme"
    });
    return [...segmenter.segment(text)].map(x => x.segment);
  }

  // Approximation only
  return text.split('');
}
```

## When `Intl.Segmenter` is the right tool

Use `Intl.Segmenter` when your code needs language-aware boundaries, especially for:

* text editors
* counters and validators
* search preprocessing
* highlighting and annotation
* educational and reading tools

## Further reading

- [Guide to the ECMAScript Internationalization API](https://www.w3.org/International/articles/intl/index)
- [Segmenter Objects in ECMA-402](https://tc39.es/ecma402/#segmenter-objects)
