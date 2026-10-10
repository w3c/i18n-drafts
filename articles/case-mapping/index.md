# Transforming text case

## Introduction

Many of the world's scripts distinguish between **uppercase** and **lowercase** letterforms. Latin, Greek, Cyrillic, Armenian, and some other scripts are *bicameral*—they maintain this two-case system. Some other scripts are *unicameral* and have no concept of case at all.

This article explores the nuances of case transformation.

## Locale-invariant case mapping

JavaScript provides two basic methods for case conversion:

```javascript
const greeting = "Hello, World!";
console.log(greeting.toLowerCase());  // "hello, world!"
console.log(greeting.toUpperCase());  // "HELLO, WORLD!"
```

These methods apply the Unicode Default Case Conversion algorithm. They use a one-to-one mapping defined in the Unicode Character Database and do not consider the user's language or locale. For most English text, this is adequate. But for a surprising number of languages, including some languages using the Latin script, it is not.

## Locale-sensitive case mapping

To address language-specific rules, JavaScript provides:

- `String.prototype.toLocaleLowerCase([locale])`
- `String.prototype.toLocaleUpperCase([locale])`

These methods accept an optional locale argument (a BCP 47 language tag or an array of such tags) and apply case conversion rules appropriate for that locale.

```javascript
const text = "İSTANBUL";
console.log(text.toLocaleLowerCase('tr'));  // "istanbul"
console.log(text.toLocaleLowerCase('en'));  // "i̇stanbul" (incorrect for Turkish)
```

When no locale argument is provided, the browser's current locale is used. **The best practice is to always pass an explicit locale** to ensure consistent, predictable behavior.

## Why locale matters

### The Turkish/Azerbaijani "i" problem

This is perhaps the most famous case-mapping pitfall. In most Latin-script languages, "I" is uppercase and "i" is lowercase.

But in **Turkish** and **Azerbaijani**, there are *four* distinct letters:

| Uppercase | Lowercase | Description |
|-----------|-----------|-------------|
| İ (U+0130) | i (U+0069) | Latin I **with** dot above |
| I (U+0049) | ı (U+0131) | Latin I **without** dot |

This means:

```javascript
// English behavior
"I".toLowerCase();        // "i"  ok for English
"i".toUpperCase();        // "I"  ok for English

// Turkish behavior — using locale-aware methods
"I".toLocaleLowerCase('tr');    // "ı"   (dotless i)
"İ".toLocaleLowerCase('tr');   // "i"   (dotted i)
"i".toLocaleUpperCase('tr');    // "İ"  (dotted I)
"ı".toLocaleUpperCase('tr');    // "I"   (dotless I)
```

Using `toLowerCase()` instead of `toLocaleLowerCase('tr')` for Turkish text can produce failed string comparisons and a poor user experience. For example, a login system that lowercases usernames without considering locale may lock Turkish users out of their own accounts.

### The German Eszett (ß)

The German lowercase letter **ß** (U+00DF, "sharp s" or "Eszett") traditionally had no uppercase form. Its uppercase mapping was **SS**:

```javascript
"straße".toLocaleUpperCase('de');  // "STRASSE"
```

This is a **one-to-many** mapping. Note that in 2017, the Council for German Orthography officially recognized **ẞ** (U+1E9E, capital sharp s) as a valid uppercase form. However, the traditional mapping to "SS" remains the standard default in Unicode case mapping, and usage of ẞ varies by style guide and context.

### Greek

In **Modern Greek** (monotonic orthography), accented vowels lose their accent (tonos) when transformed to uppercase:

```javascript
const greek = "Ελληνικά";
console.log(greek.toLocaleUpperCase('el'));  // "ΕΛΛΗΝΙΚΑ" (no accent on Α)
```

The lowercase **ά** (alpha with tonos) maps to uppercase **Α** (alpha without tonos). This is a **many-to-one** mapping and means that **round-tripping is lossy**—you cannot reliably recover the original lowercase form by uppercasing and then lowercasing:

```javascript
const original = "Ελληνικά";
const roundTripped = original
  .toLocaleUpperCase('el')
  .toLocaleLowerCase('el');
// roundTripped === "ελληνικα" — the accent is permanently lost
```

There is one notable exception: the **disjunctive eta** (ή) retains its accent when the word ή (meaning "or") is written in all-caps: **Ή**.

## Locale-aware case-insensitive comparison

A common use case is case-insensitive string comparison:

```javascript
function caseInsensitiveEquals(a, b, locale) {
  return a.toLocaleLowerCase(locale) === b.toLocaleLowerCase(locale);
}

// Turkish-aware comparison
caseInsensitiveEquals("IĞDIR", "ığdır", "tr");  // true ✓
caseInsensitiveEquals("IĞDIR", "ığdır", "en");  // false ✗ (wrong locale!)
```

For general-purpose comparison where locale-specific collation rules (sorting order, accent handling) matter, use `Intl.Collator`.

```javascript
const collator = new Intl.Collator('de', { sensitivity: 'base' });
console.log(collator.compare('Straße', 'STRASSE'));  // 0 (equal)
```

## Further reading

- [Character Model for the World Wide Web: String Matching](https://www.w3.org/TR/charmod-norm/)
- [Guide to the ECMAScript Internationalization API](https://www.w3.org/International/articles/intl/index)
- [MDN: String.prototype.toLocaleLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
- [Unicode Standard, Chapter 3: Default Case Algorithms](https://www.unicode.org/versions/latest/core-spec/chapter-3/#G33992)
