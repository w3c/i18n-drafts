# How to trim text correctly

Intended audience: Content authors

Every line of text in CSS sits inside a line box. The line box's height comes from the font's ascent and descent metrics plus *half-leading*, which is the extra space `line-height` adds equally above and below the text. Fonts deliberately make ascent and descent generous so that accented capitals, descenders and stacked diacritics fit.

The result is that the visible top of a block of text (for example, the top of the capital letters) almost never lines up with the top of its box. This causes three familiar problems:

- A button label that is mathematically centered looks too low.
- The visible gap between a heading and the paragraph below it is larger than the `margin` you set.
- Text next to an icon or image never lines up with it exactly.

Developers used to fix this with negative margins tuned by eye for one particular font. That fix breaks when the font changes, fails to load, or is replaced by a fallback font. `text-box` fixes the problem using the font's own metrics, so the result adapts to whichever font is actually rendered.

## The properties

### `text-box-trim`: which sides to trim

| Value | Effect on a block container |
|---|---|
| `none` | No trimming |
| `trim-start` | Trims the block-start side of the **first formatted line** |
| `trim-end` | Trims the block-end side of the **last formatted line** |
| `trim-both` | Does both |

### `text-box-edge`: where to cut

The first keyword sets the **over** edge. The second sets the **under** edge.

| Over-edge keywords | Meaning |
|---|---|
| `text` | The font's text-over metric (ascent). |
| `cap` | Cap height (OpenType `sCapHeight`). |
| `ex` | x-height (OpenType `sxHeight`). |
| `ideographic` | Ideographic over edge, the CJK em box (OpenType `idtp`). |
| `ideographic-ink` | Ideographic ink over edge (OpenType `icft`). |

| Under-edge keywords | Meaning |
|---|---|
| `text` | The font's text-under metric (descent). |
| `alphabetic` | The alphabetic baseline. |
| `ideographic` | Ideographic under edge (OpenType `ideo`). |
| `ideographic-ink` | Ideographic ink under edge (OpenType `icfb`). |

The initial value is `auto`. Browsers currently treat it as `text`.

### `text-box`: the shorthand

```css
text-box: normal; /* trim: none, edge: auto */
text-box: trim-both cap alphabetic; /* explicit */
text-box: cap alphabetic; /* trim omitted, so it becomes trim-both */
```

When you leave out the trim value, the shorthand sets it to `trim-both`, **not** to the initial value `none`, and this is intentional.

## Recommended patterns

**Visually centered button or badge (Latin UI):**

```css
.button {
  display: inline-flex;
  align-items: center;
  padding: 0.75em 1.25em;
}
.button > .label {
  text-box: trim-both cap alphabetic;
}
```

Notice that the trim is on the label, not on the flex container, because trimming does not pass into flex items.

**Predictable heading-to-body spacing:**

```css
.prose :is(h1, h2, h3, p) {
  text-box: trim-both cap alphabetic;
}
.prose h2 { margin-block: 2rem 1rem; }
```

The margins you specify now match the visible gaps much more closely.

**Japanese heading aligned with an image edge:**

```css
.media-title:lang(ja) {
  text-box: trim-start ideographic-ink ideographic-ink;
}
```

## Further reading

- Language enablement index
  - [Baselines, line-height, etc.](https://www.w3.org/TR/typography/#baselines)
- CSS specification
  - [text-box-trim](https://drafts.csswg.org/css-inline-3/#text-box-trim) • [text-box-edge](https://drafts.csswg.org/css-inline-3/#text-box-edge)
- MDN
  - [text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim) • [text-box-edge](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-edge)
