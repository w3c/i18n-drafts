# i18n-drafts
A place to edit articles, tutorials, and the like for the /International subtree of the W3C site.  Also, captures issues and comments.

Note that this is only a temporary location for articles, etc., while they are being edited and approved. The canonical location for the resulting pages is under https://www.w3.org/International/.

To view a page as HTML, go to https://w3c.github.io/i18n-drafts/ and add the appropriate path to the file you want to view. You'll need to provide the filename plus language extension as a minimum, eg. https://w3c.github.io/i18n-drafts/articles/vertical-text.en

### File Naming

Content files follow the pattern: `{filename}.{language}.html`

Examples:
- `qa-link-lang.en.html` (English)
- `qa-link-lang.de.html` (German translation)

Each content file has a companion `{filename}-data/` directory containing `translations.js` and supporting files.

For the meaning of the metadata stored in those `translations.js` files, see [`docs/translations-js.md`](docs/translations-js.md).

### Translations

If you want to translate one or more of these resources, see the [Translation instructions](https://www.w3.org/International/i18n-drafts/pages/translation) page.

For recurring terminology, use the per-language glossary framework in [glossaries/README.md](glossaries/README.md). Create a new glossary by copying [glossaries/_template.md](glossaries/_template.md) to `glossaries/<lang>.md`, and update the glossary in the same PR when you add or revise a recurring term.

### Contributing

Editors should be familiar with and use the following:

- [GitHub guidelines for working with i18n documents](https://www.w3.org/International/i18n-activity/guidelines/github)
- [Editorial guidelines for working with i18n documents](https://www.w3.org/International/i18n-activity/guidelines/editing)

### Validation

If you don't already have Node.js, install it first:

1. Go to https://nodejs.org/en/download
2. Install the current LTS release for your platform.

Then run the metadata and asset checks with:

```bash
npm test
```

To validate only specific files, pass them through to the script:

```bash
npm test -- --files questions/qa-link-lang.en.html tutorials/tutorial-char-enc/index.ro.html
```

The validator checks page filename language suffixes, key `f.*` metadata fields, date formats, local script/image/stylesheet references, `boilerplate-<lang>.js`, and companion `translations.js` consistency.
