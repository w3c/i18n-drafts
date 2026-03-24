## The `u` Extension in Language Tags

## Question

How do I use the `u` extension in language tags?

If you work with locales, formatting, sorting, calendars, or user preferences, the BCP 47 `u` extension is a very useful part in a language tag. It lets you start with a normal language tag such as `en-US` or `de-DE` and then add Unicode locale preferences in a standard, interoperable way.

The `u` extension is registered with IANA under the singleton `u`, and the Unicode Consortium is its maintaining authority. The actual valid keys and values come from Unicode CLDR data.

The `u` extension answers questions like these:

* Which calendar should I use?
* Which collation should I use for sorting?
* Should the locale prefer a 12-hour or 24-hour clock?
* Which numbering system should I use?

## Answer

### Start with the base language tag

In [BCP 47](https://www.rfc-editor.org/info/bcp47), an extension must come after the primary language, and after any script, region, or variant subtags. It also must come before private-use subtags.

So you start with a normal tag such as `de-DE` or `th-TH`.

Then you add `-u-` and the Unicode locale subtags after it, like:

* `de-DE-u-co-phonebk`
* `th-TH-u-ca-buddhist`
* `en-u-hc-h12`

### Know the shape of a `u` extension

For example, in:

```text
en-u-hc-h23
```

* `en` is the language,
* `u` starts the Unicode locale extension,
* `hc` is the key,
* `h23` is the type.

A key names a setting, and a type gives the value for that setting. For example, `co` means collation, `ca` means calendar, and `hc` means hour cycle.

So:

* `de-DE-u-co-phonebk` means German in Germany, using phonebook collation.
* `th-TH-u-ca-buddhist` means Thai in Thailand, using the Buddhist calendar.
* `en-u-hc-h12` means English, preferring a 12-hour clock.

[Unicode Locale Data Markup Language (LDML)](https://www.unicode.org/reports/tr35/tr35.html#Unicode_Locale_Extension_Data_Files) notes that the complete set of valid keys and types is defined in CLDR’s `common/bcp47` data files.

## Further reading

- Getting started? [Language on the Web](https://www.w3.org/International/getting-started/language)
- Related links, Authoring web pages
  - [Language](https://www.w3.org/International/techniques/authoring-html#language)
  - [Choosing language tags](https://www.w3.org/International/techniques/authoring-html#langvalues)
- [BCP 47](https://www.rfc-editor.org/info/bcp47)
- [Unicode Locale Data Markup Language (LDML)](https://www.unicode.org/reports/tr35/)