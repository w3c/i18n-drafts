## Guide to the ECMAScript Internationalization API

For years, developers relied on JavaScript libraries, string manipulation, or server-side logic to ensure that users around the world see dates, numbers, and text formatted in a way that is natural and correct for them. These solutions, while functional, often added significant weight to web pages and created maintenance challenges.

Fortunately, modern browsers now have a built-in, standardized solution: the **ECMAScript Internationalization API**, available globally in JavaScript via the `Intl` object. This API provides a native way to handle locale- and culture-sensitive data and operations, ensuring your application speaks your user's language correctly and efficiently.

This article will serve as a practical overview of the most essential parts of the `Intl` API, providing actionable examples you can use to internationalize your web applications today.

### The Core Concept: Locales and Options

Before diving into specific formatters, it's important to understand the two fundamental arguments that nearly every `Intl` constructor takes:

1.  **`locales`**: A string representing a language tag (following the BCP 47 standard), such as `'en-US'` (American English), `'fr-FR'` (French in France), or simply `'ja'` (Japanese). You can also provide an array of locales, like `['fr-CA', 'fr-FR']`, and the browser will use the first one it supports. If omitted, the browser's default locale will be used.
2.  **`options`**: An object that allows you to customize the formatting behavior. This is where the real power of the API lies, enabling you to specify everything from currency symbols to date styles.

### 1. Formatting Dates and Times with `Intl.DateTimeFormat`

One of the most common i18n tasks is displaying dates and times. A date like "10/12/2025" can mean October 12th in the US but December 10th in much of Europe. `Intl.DateTimeFormat` solves this ambiguity effortlessly.

The basic usage is simple. You create a formatter instance and then call its `.format()` method.

```javascript
const eventDate = new Date();

// For a user in the United States
const usFormatter = new Intl.DateTimeFormat('en-US');
console.log(usFormatter.format(eventDate));
// Output: 10/26/2025

// For a user in Germany
const deFormatter = new Intl.DateTimeFormat('de-DE');
console.log(deFormatter.format(eventDate));
// Output: 26.10.2025
```

#### Fine-Grained Control with Options

You can achieve much more detailed and readable formats using the `options` object. The modern approach uses `dateStyle` and `timeStyle`.

```javascript
const options = {
  dateStyle: 'full',
  timeStyle: 'long',
};

const formatter = new Intl.DateTimeFormat('fr-FR', options);
console.log(formatter.format(eventDate));
// Output: jeudi 26 octobre 2025 à 10:30:00 UTC
```

You can also specify time zones, a critical feature for global applications.

```javascript
const japanFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Tokyo',
});

console.log(japanFormatter.format(eventDate));
// Sample Output: 2025年10月27日 (Note the date may change due to timezone)
```

### 2. Handling Numbers, Currencies, and Units with `Intl.NumberFormat`

Numbers are formatted differently across the world. For example, the decimal separator can be a period or a comma. `Intl.NumberFormat` handles this seamlessly.

```javascript
const largeNumber = 1234567.89;

// United States
console.log(new Intl.NumberFormat('en-US').format(largeNumber));
// Output: 1,234,567.89

// Germany
console.log(new Intl.NumberFormat('de-DE').format(largeNumber));
// Output: 1.234.567,89
```

#### Currency Formatting

Formatting currency correctly is crucial for e-commerce. It involves more than just a symbol; the position of the symbol and spacing are locale-dependent. `Intl.NumberFormat` requires the `style` to be `'currency'` and an ISO 4217 currency code.

```javascript
const price = 99.95;

// US Dollars
console.log(new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(price)); // Output: $99.95

// Euros for a German customer
console.log(new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
}).format(price)); // Output: 99,95 €

// Euros for an Irish customer
console.log(new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR'
}).format(price)); // Output: €99.95
```

#### Unit and Compact Formatting

The API also supports unit formatting and compact notation for large numbers.

```javascript
// Unit formatting
console.log(new Intl.NumberFormat('en-GB', {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(100)); // Output: 100 km/h

// Compact notation
console.log(new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short'
}).format(2500000)); // Output: 2.5M
```

### 3. Locale-Aware Sorting with `Intl.Collator`

If you've ever tried to sort an array of strings in a language with accents, you know that JavaScript's default `Array.prototype.sort()` can fail. It sorts based on [code points](https://www.w3.org/TR/i18n-glossary/#dfn-code-point), which often leads to incorrect alphabetical order.

`Intl.Collator` provides a locale-sensitive string comparison function.

```javascript
const names = ['Émilie', 'Zoe', 'Elodie', 'Stéphane'];

// Default sort (incorrect for French)
console.log([...names].sort());
// Output: [ 'Elodie', 'Stéphane', 'Zoe', 'Émilie' ]

// Using Intl.Collator for French
const collator = new Intl.Collator('fr');
console.log(names.sort(collator.compare));
// Output: [ 'Elodie', 'Émilie', 'Stéphane', 'Zoe' ]
```

You can even use options for case-insensitive sorting or to correctly sort strings containing numbers (like "Chapter 2" vs. "Chapter 10").

```javascript
const files = ['item 10', 'item 2'];
const numericCollator = new Intl.Collator(undefined, { numeric: true });
console.log(files.sort(numericCollator.compare));
// Output: [ 'item 2', 'item 10' ]
```

In this example, by using `undefined`, we are effectively saying: "I don't want to force a specific locale for sorting. Please use the user's default locale, but make sure to apply the `numeric: true` option to it."

This makes the code robust and user-friendly. It adapts to the user automatically, providing locale-correct sorting while still giving us the specific sorting behavior (numeric) that we need.

### 4. Relative Time (`Intl.RelativeTimeFormat`)

This API is perfect for creating human-readable strings like "2 days ago" or "in 3 months".

```javascript
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-1, 'day')); // "yesterday"
console.log(rtf.format(2, 'week'));  // "in 2 weeks"
console.log(rtf.format(3, 'month')); // "in 3 months"

const rtf_es = new Intl.RelativeTimeFormat('es');
console.log(rtf_es.format(-1, 'day')); // "hace 1 día"
```

The `numeric` option in `Intl.RelativeTimeFormat` can have two values:

1.  `always` (default): Always use a number.
2.  `auto`: Use a word (like "yesterday" or "tomorrow") if the locale has a special term for that relative time. Otherwise, fall back to using a number.

### By the way

This article only scratches the surface. The `Intl` API also includes `Intl.PluralRules` (for plural-sensitive formatting), `Intl.ListFormat` (for "A, B, and C"), `Intl.DisplayNames` (for translating region or language names), and more.

By embracing the ECMAScript Internationalization API, you move localization logic from bulky libraries into the browser's native engine. You write less code and provide a more correct and performant experience for users worldwide.

## Further reading

- [BCP 47](https://www.rfc-editor.org/info/bcp47)
- [The Intl Object](https://tc39.es/ecma402/#intl-object)
