# Testing for i18n issues

## Question

**How to test for internationalization issues?**

The most reliable path to quality is through systematic verification and adherence to established protocols. Skipping i18n testing, or deferring it to the final stages of development, constitutes a significant risk to the product.

Internationalization is not a feature to be appended at the end of a development cycle. It is a foundational requirement. When testing is delayed, defects become more expensive to fix. A systematic i18n testing protocol, integrated into your development process, ensures that architectural limitations are identified when they are still economical to fix.

## Pseudolocalization

Pseudolocalization is the most efficient preliminary screening method. You can transform your source strings to simulate the characteristics of target locales without requiring actual translation. Implement the following transformations in your build pipeline:

### String expansion

Expand strings by 30–40% to simulate German, Finnish, or other verbose languages. This immediately exposes hard-coded string length assumptions, UI truncation issues, and buffer overflows in legacy backend systems.

### Diacritical testing

Inject diacritics systematically (e.g., transforming "Account Settings" into "Åççôûñţ Šéţţîñĝš"). This serves multiple diagnostic purposes, like sorting, searching, and text transforms.

### Supplemental character and grapheme cluster validation

Modern applications should handle the full Unicode spectrum. Your pseudolocalization should test grapheme cluster boundaries. For example, if your text truncation logic splits 👨‍👩‍👧‍👦 (family: man, woman, girl, boy) incorrectly, you have a user-facing defect.

You should also test characters outside the [Basic Multilingual Plane (BMP)](https://www.w3.org/TR/i18n-glossary/#dfn-basic-multilingual-plane), such as CJK Extension B characters or historical scripts, to verify that your database schemas support four-byte UTF-8 and that your JavaScript does not split surrogate pairs.

## Layout and rendering verification

You can conduct manual or automated layout inspections.

For [right-to-left (RTL)](https://www.w3.org/TR/i18n-glossary/#dfn-right-to-left) scripts such as Arabic or Hebrew, verify that directional layouts flip correctly. For example, navigation menus should align right.

Test that punctuation marks like periods and parentheses render at the correct end of strings when embedded in RTL contexts.

Test layout integrity at 200% zoom levels, as required by [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/resize-text), with localized content.

## Functional and cultural validation

You should also verify functional correctness, like ensuring that postal code and telephone validators accept the formats of your target markets.

Test that locale-specific formats (DD/MM/YYYY versus MM/DD/YYYY) and that separators (comma vs. period for decimals) are processed correctly.

Verify that your database queries and JavaScript operations use the correct collation rules. Swedish 'å', 'ä', and 'ö' should sort after 'z', not with 'a'.

## Conclusion

By implementing pseudolocalization early, verifying layout behavior, and validating functional operations with real-world data, you build systems that are respectful of global users, and can prevent costly failures in production.

## Further reading

- [Text size in translation](https://www.w3.org/International/articles/article-text-size)
- [Address formats around the world](https://www.w3.org/International/questions/qa-address-formats)
- Related links, Authoring web pages
  - [Styling &amp; layout](https://www.w3.org/International/techniques/authoring-html#style)
