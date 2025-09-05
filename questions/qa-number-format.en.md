# Number, currency, and unit formatting

## Question

**How do I use JavaScript to dynamically format numbers, currencies, and units for different locales?**

The formats used by numbers, including specialized formatting such as currencies and units, varies dramatically across cultures, regions, and languages. A seemingly innocuous error can lead to misunderstanding or mistakes.

## Answer

Hardcoding formats is a brittle and unsustainable approach. Fortunately, the web platform provides robust, standards-based solutions to navigate this complex landscape. This article will guide you, step-by-step, through leveraging JavaScript's built-in `Intl` object to effortlessly adapt your web pages to varying international number, currency, and unit formats.

### The core problem: why is formatting so complex?

Before diving into solutions, let's unpack the nuances that make international number, currency, and unit formatting a non-trivial task:

#### Decimal separators

Many regions, like the US and UK, use a period as the decimal separator (e.g., `1,234.56`). Conversely, much of Europe and South America use a comma (e.g., `1.234,56`).

In rare cases, a currency symbol can even act as a decimal separator, like the [Cape Verdean escudo](https://en.wikipedia.org/wiki/Cape_Verdean_escudo).

#### Digit grouping

The grouping separator varies. It can be a **comma (`,`)**, a **period (`.`)**, or a **space (` `)**.

Grouping patterns also differ. **3-digit grouping** (e.g., `1,234,567`) is common, but some regions, like India, use a **2-digit grouping** beyond the hundreds (e.g., `12,34,567`). Some specialized formats might use 4-digit grouping.

#### Numbering systems

While [European digits](https://www.w3.org/TR/i18n-glossary/#dfn-european-digits) (0-9) are globally prevalent, many cultures prefer their native numeral systems. For instance, 12,345 might be `١٢٬٣٤٥` in Arabic or `๑๒,๓๔๕` in Thai.

#### Currency symbol display

**Symbol vs. Code vs. Name:** Currencies can be displayed in several ways:

- **Compact symbols:** Like "€", "£", "¥", "$"
- **Medium/disambiguated symbols:** Multi-character symbols that clarify the specific currency (e.g., `CA$`, `US$`, `MX$`)
- **Contextual symbol variations:** Different symbols used in different contexts (e.g., `¥` vs. `円` for Japanese yen)
- **ISO 4217 codes:** Three-letter standardized codes (e.g., `EUR`, `GBP`, `JPY`)
- **Full names:** Complete currency names (e.g., `US Dollar`, `Japanese Yen`)

**Placement and spacing:** The symbol can appear before the number (e.g., `$100.00`) or after (e.g., `1,000 ₫`). From these two examples, we can also see that some currencies use no space between the symbol and number, while others include a space.

**Ambiguity:** The same symbol might represent multiple currencies (e.g., `$` for US Dollar, Canadian Dollar, Mexican Peso, etc.).

### The `Intl.NumberFormat` object

The `Intl.NumberFormat` object in JavaScript automatically handles locale-specific decimal and grouping separators, currency symbols, and other numerical conventions.

#### Formatting general numbers with `Intl.NumberFormat`

At its simplest, `Intl.NumberFormat` allows you to format a number according to a specified locale.

```javascript
const number = 1234567.89;

// For a US English user:
const usFormatter = new Intl.NumberFormat('en-US');
console.log(`US English: ${usFormatter.format(number)}`); // Output: US English: 1,234,567.89

// For a German user:
const deFormatter = new Intl.NumberFormat('de-DE');
console.log(`German: ${deFormatter.format(number)}`); // Output: German: 1.234.567,89

// For an Indian English user (notice the grouping):
const enINFormatter = new Intl.NumberFormat('en-IN');
console.log(`Indian English: ${enINFormatter.format(number)}`); // Output: Indian English: 12,34,567.89
```

The `options` object in `new Intl.NumberFormat(locales, options)` is where the magic happens.

`minimumFractionDigits` and `maximumFractionDigits` control the number of decimal places. `useGrouping` is a Boolean to enable or disable digit grouping.

```javascript
const pi = 3.14159265;

// Enforcing specific precision:
const preciseFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 5,
    maximumFractionDigits: 5,
});
console.log(`${preciseFormatter.format(pi)}`); // Output: 3.14159

// No grouping
const noGroupingFormatter = new Intl.NumberFormat('en-US', {
    useGrouping: false,
});
console.log(`No grouping: ${noGroupingFormatter.format(1234567)}`); // Output: No grouping: 1234567
```

#### `Intl.NumberFormat` for currencies

You can specify the `style: 'currency'` and the `currency` code (using ISO 4217 standard).

```javascript
const price = 500.75;

// US Dollar
const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
console.log(`US Dollar: ${usdFormatter.format(price)}`);        // Output: US Dollar: $500.75

// Euro for Germany
const eurDeFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
});
console.log(`Euro (Germany): ${eurDeFormatter.format(price)}`); // Output: Euro (Germany): 500,75 €

// Japanese Yen (no fractional digits by default):
const jpyFormatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
});
console.log(`Japanese Yen: ${jpyFormatter.format(price)}`); // Output: Japanese Yen: ￥501 (automatically rounds and uses no decimals)

// Vietnamese Dong (no fractional digits by default):
const vndFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
console.log(`Vietnamese Dong: ${vndFormatter.format(12000)}`); // Output: Vietnamese Dong: 12.000 ₫
```

`Intl.NumberFormat` automatically handles the correct number of fractional digits for a given currency. You can override this with `minimumFractionDigits` and `maximumFractionDigits` if needed.

#### Formatting units with `Intl.NumberFormat`

`Intl.NumberFormat` can also format numbers with units:

```javascript
const distance = 1000;
const storage = 5;

// Meters
const meterFormatter = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'meter', // Standard unit identifier
    unitDisplay: 'long', // 'long', 'short', or 'narrow'
});
console.log(`US Meters (long): ${meterFormatter.format(distance)}`); // Output: US Meters (long): 1,000 meters

const meterShortFormatter = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'meter',
    unitDisplay: 'short',
});
console.log(`US Meters (short): ${meterShortFormatter.format(distance)}`); // Output: US Meters (short): 1,000 m

// Kilobytes for French locale:
const kbFrFormatter = new Intl.NumberFormat('fr-FR', {
    style: 'unit',
    unit: 'kilobyte',
    unitDisplay: 'long',
});
console.log(`French Kilobytes: ${kbFrFormatter.format(storage)}`); // Output: French Kilobytes: 5 kilooctets
```

You can find a list of standard unit identifiers (e.g., `meter`, `kilogram`, `liter`, `kilobyte`, `percent`, `hour`) in the [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier).

### Choosing the right locale

Typically, you'll want to format number, currency, and unit according to the language of the web page. This can be determined from the `lang` attribute on the HTML element ([which should be set appropriately](https://www.w3.org/International/questions/qa-html-language-declarations)):

```javascript
// Get the page's language from the HTML lang attribute
const pageLocale = document.documentElement.lang || 'en-US'; // Fallback to 'en-US'
const formatter = new Intl.NumberFormat(pageLocale, { style: 'currency', currency: 'USD' });
console.log(`${formatter.format(627.92)}`);
```

Occasionally, you may want to override the page locale with a specific locale, such as when creating internationalization tutorials or displaying content in multiple languages:

```javascript
// Force a specific locale regardless of page language
const tutorialFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(`German example: ${tutorialFormatter.format(199.99)}`); // Output: 199,99 €
```

In some cases, you might want to use the user's preferred language:

```javascript
// Use the user's preferred language
const browserLocale = navigator.language || 'en-US';
const formatter = new Intl.NumberFormat(browserLocale, { style: 'currency', currency: 'USD' });
console.log(`${formatter.format(627.92)}`);
```

## Further reading

* [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/)