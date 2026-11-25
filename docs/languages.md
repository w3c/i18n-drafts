# Language registry

`data/languages.json` is the single source of truth for the languages this site supports. The language tables that used to be maintained by hand in several files are generated from it.

## Why

Adding a language used to mean editing the same 29-entry table in six page templates, a cookie
message in seven places, and a UI string table in 28 boilerplate files, and copies drifted in many cases.

## Registry fields

Each entry in `languages` has:

| Field | Required | Meaning |
| --- | --- | --- |
| `tag` | yes | Lowercase BCP 47 tag matching the filename suffix (`pt-br`, `zh-hans`) |
| `endonym` | yes | The language's own name, shown in the language switcher. May contain HTML entities (`&#xA0;`) |
| `englishName` | yes | English name, used for `s.currLang` placeholders and generated UI text |
| `dir` | no | `rtl` for right-to-left scripts; omitted means `ltr` |
| `cookieMessage` | no | Text of the "remember this language" confirm dialog. Falls back to the default language |

`defaultLanguage` must name an entry that has a `cookieMessage`; that message is the fallback for
languages that have not been translated yet.

The order of `languages` is the order used in every generated table. Keep it sorted by tag.

## Generated files

Running `npm run languages:generate` using [Node.js](https://nodejs.org/en/download) rewrites these, preserving everything outside the generated block:

- `g.nativeText` in the six files under `javascript/doc-structure/`
- `var cn` (the cookie-message table) in `javascript/doc-structure/article-dt.js`
- `s.cookieMsg` in every `javascript/boilerplate-text/boilerplate-*.js`
- missing keys in `s.currLang` in every boilerplate file (existing translations are never rewritten)

Each generated block starts with a `// generated from data/languages.json` comment. Do not edit those blocks by hand; `npm run languages:check` fails when they no longer match the registry.

`s.currLang` values stay in the boilerplate files because they are translations, not structure. The generator only inserts missing keys, using the English name as a placeholder, and the check reports any key that is not in the registry.

## Commands

```bash
npm run languages:generate  # Rewrite the generated tables
npm run languages:check     # Fail if a generated table is stale or the registry is inconsistent
npm run languages:rtl-set   # Print the rtlSet line for International/articlelist-data/translations.js
npm run test:unit           # Unit tests for the generator
```

## Adding a language

1. Add an entry to `data/languages.json`.
2. Add `boilerplate-<tag>.js`. Start from a copy of `boilerplate-en.js` and translate it; leave the
   generated cookie-message block alone.
3. Run `npm run languages:generate`, then `npm run languages:check`.
4. Work through what the generator cannot know:
   - `rtlSet` in `International/articlelist-data/translations.js` — copy the output of
     `npm run languages:rtl-set`
   - the language entry in `International/articlelist.<tag>.html` and the article titles in
     `International/articlelist-data/translations.js` (both live on CVS)
   - the `:root[lang=<tag>] body` font stack in `style/article-2022.css` and
     `style/sitepage-2022.css` — needed only when the script needs a different font, and it should be
     checked in a browser
5. Regenerate before copying to CVS: the doc-structure files are mirrored there and their content must match.

## What the check reports

Errors, which fail CI:

- a generated table is stale
- a boilerplate file exists for a language that is not in the registry
- a boilerplate `s.currLang` has a key that is not in the registry
- malformed registry entries (duplicate tags, unknown fields, missing names)

Warnings, which do not fail CI:

- `cookieMessage` is still the English text
- a language has no boilerplate file
- a boilerplate `s.currLang` was missing a key, so the English name was generated as a placeholder
  and still needs translating
