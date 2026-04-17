# `translations.js` metadata

Each translatable resource has a companion `translations.js` file in its `*-data/` directory.

These files describe which language versions exist, which ones should be linked to publicly, and which status message a translation should show when it is opened.

## Fields

### `trans.versions`

This is the list of current live versions.

These are the "good" translations: the versions we want people to see and the versions that should appear in the page's language switcher.

In the page templates, the language switcher is built from `trans.versions` only. That means a language that is not in `trans.versions` is not offered in the visible list of translations.

Relevant code:

- `javascript/doc-structure/article-2022.js`
- `javascript/doc-structure/sitepage-2022.js`
- older template variants in the same directory follow the same pattern

### `trans.outofdatetranslations`

This is for translations that are somewhat out of date, but not so obsolete that they should be withdrawn.

These translations should still be listed in `trans.versions`.

This field **does affect rendering**. If the current page language is listed in `trans.outofdatetranslations`, the templates add the out-of-date warning banner (`s.untranslatedChanges`). This is the lighter warning that says the English original has changed and that some passages may still appear in English until the translation is updated.

### `trans.updatedtranslations`

This is for translations that should show a "translation updated" notice.

These translations should also be listed in `trans.versions`.

Current code behaviour: this field **does affect rendering**. If the current page language is listed in `trans.updatedtranslations`, the templates add the updated banner (`s.translation_updated`) and show the translation's `f.thisVersion` date.

### `trans.unlinkedtranslations`

Use it for very old or inaccurate translations that we do not want to serve publicly, but do want to remember once existed.

There is no separate UI notice on other pages saying "there are unlinked translations over there". The visible translation links come from `trans.versions`, so `trans.unlinkedtranslations` is only a record of buried translations.

They should normally **not** be in `trans.versions`.

If someone lands directly on one of these pages, the templates show the stronger warning banner (`s.unlinkedTranslation`). But the page is not advertised by the normal language-switcher UI unless that language is also listed in `trans.versions`.

## Practical rules

- `trans.versions` = live, linked, public versions
- `trans.outofdatetranslations` = still live, but somewhat stale; should also be in `trans.versions`
- `trans.updatedtranslations` = live translations that should show an update notice; should also be in `trans.versions`
- `trans.unlinkedtranslations` = archived / buried translations; normally should not be in `trans.versions`

## Status precedence in the templates

The template logic checks the current page language in this order:

1. `trans.outofdatetranslations`
2. `trans.unlinkedtranslations`
3. `trans.updatedtranslations`

So if a language appears in more than one of those lists, the first matching state wins.
