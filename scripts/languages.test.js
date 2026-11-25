'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const {
  buildRtlSet,
  findBlockRange,
  planChanges,
  renderCookieTableBlock,
  renderNativeTextBlock,
  replaceCookieMessage,
  replaceGeneratedBlock,
  syncCurrLangBlock,
  validateRegistry,
} = require('./languages.js');

function makeRegistry(overrides = {}) {
  return {
    defaultLanguage: 'en',
    languages: [
      { tag: 'en', endonym: 'English', englishName: 'English', cookieMessage: 'English message' },
      { tag: 'fr', endonym: 'Français', englishName: 'French', cookieMessage: 'Message français' },
      { tag: 'he', endonym: 'עברית', englishName: 'Hebrew', dir: 'rtl', cookieMessage: 'הודעה' },
    ],
    ...overrides,
  };
}

test('validateRegistry accepts a well-formed registry', () => {
  assert.deepEqual(validateRegistry(makeRegistry()), []);
});

test('validateRegistry rejects duplicate tags, unknown properties, and bad values', () => {
  const registry = makeRegistry({
    languages: [
      { tag: 'en', endonym: 'English', englishName: 'English', cookieMessage: 'x' },
      { tag: 'en', endonym: 'English again', englishName: 'English', extra: true },
      { tag: 'FR', endonym: '', englishName: 'French', dir: 'sideways' },
    ],
  });

  const errors = validateRegistry(registry);

  assert.ok(errors.some((message) => message.includes('"en" is duplicated')));
  assert.ok(errors.some((message) => message.includes('unknown property "extra"')));
  assert.ok(errors.some((message) => message.includes('must be a lowercase language tag')));
  assert.ok(errors.some((message) => message.includes('endonym must be a non-empty string')));
  assert.ok(errors.some((message) => message.includes('dir must be "ltr" or "rtl"')));
});

test('validateRegistry requires the default language to have a cookie message', () => {
  const errors = validateRegistry(
    makeRegistry({
      languages: [{ tag: 'en', endonym: 'English', englishName: 'English' }],
    })
  );

  assert.ok(errors.some((message) => message.includes('needs a cookieMessage')));
});

test('renderNativeTextBlock lists every language and escapes single quotes', () => {
  const block = renderNativeTextBlock([
    { tag: 'en', endonym: "English's" },
    { tag: 'pt-br', endonym: 'Português&#xA0;BR' },
  ]);

  assert.equal(block, "g.nativeText = {\n'en':'English\\'s',\n'pt-br':'Português&#xA0;BR'\n}");
});

test('renderCookieTableBlock falls back to the default language and keeps NBSP visible', () => {
  const registry = makeRegistry({
    languages: [
      { tag: 'en', endonym: 'English', englishName: 'English', cookieMessage: 'Say "yes"\u00a0now' },
      { tag: 'fr', endonym: 'Français', englishName: 'French' },
    ],
  });

  const block = renderCookieTableBlock(registry);

  assert.ok(block.includes('en:"Say \\"yes\\"\\u00A0now"'));
  assert.ok(block.includes('fr:"Say \\"yes\\"\\u00A0now"'));
});

test('replaceGeneratedBlock rewrites a table in place and stays stable on a second pass', () => {
  const source = "var g = { }\n\ng.nativeText = {\n'old':'Old'\n}\n\n// next\n";
  const rendered = renderNativeTextBlock([{ tag: 'en', endonym: 'English' }]);

  const first = replaceGeneratedBlock(source, 'g.nativeText', rendered, '// generated');
  assert.ok(first.source.includes('// generated\ng.nativeText = {'));
  assert.ok(first.source.includes("'en':'English'"));
  assert.ok(!first.source.includes('Old'));
  assert.ok(first.source.endsWith('\n\n// next\n'));

  const second = replaceGeneratedBlock(first.source, 'g.nativeText', rendered, '// generated');
  assert.equal(second.source, first.source);
});

test('findBlockRange does not end the block inside a string', () => {
  const source = "g.nativeText = {\n'x':'a}b',\n'y':'c'\n}\nafter";
  const range = findBlockRange(source, 'g.nativeText');

  assert.equal(source.slice(range.blockStart, range.blockEnd), "{\n'x':'a}b',\n'y':'c'\n}");
});

test('syncCurrLangBlock adds a missing language and keeps existing translations', () => {
  const source = "s.currLang = {\n  'en':'Inglés',\n  'fr':'Francés'\n}\n";
  const languages = [
    { tag: 'en', englishName: 'English' },
    { tag: 'fr', englishName: 'French' },
    { tag: 'de', englishName: 'German' },
  ];

  const result = syncCurrLangBlock(source, languages);

  assert.deepEqual(result.missing, ['de']);
  assert.equal(
    result.source,
    "s.currLang = {\n  'en':'Inglés',\n  'fr':'Francés',\n  'de':'German'\n}\n"
  );
});

test('syncCurrLangBlock reports languages that are no longer in the registry', () => {
  const source = "s.currLang = {\n'en':'English',\n'xx':'Old'\n}\n";
  const result = syncCurrLangBlock(source, [{ tag: 'en', englishName: 'English' }]);

  assert.deepEqual(result.missing, []);
  assert.deepEqual(result.unknown, ['xx']);
  assert.equal(result.source, source);
});

test('replaceCookieMessage drops the manual copy instruction', () => {
  const source = [
    '// cookie message, appears when changing languages',
    '// this text needs to be copied to javascript/doc-structure/article-dt.js',
    's.cookieMsg = "old"',
    '',
  ].join('\n');

  const result = replaceCookieMessage(source, 'Say "hi"');

  assert.equal(
    result.source,
    [
      '// cookie message, appears when changing languages',
      '// generated from data/languages.json by `npm run languages:generate` — edit the cookieMessage there',
      's.cookieMsg = "Say \\"hi\\""',
      '',
    ].join('\n')
  );
});

test('buildRtlSet lists right-to-left languages in registry order', () => {
  assert.equal(buildRtlSet(makeRegistry()), "rtlSet = ['he']");
});

test('planChanges regenerates every generated artifact and is idempotent', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-drafts-languages-'));
  const registry = makeRegistry();

  for (const relativePath of [
    'javascript/doc-structure/article.js',
    'javascript/doc-structure/article_new.js',
    'javascript/doc-structure/article-2022.js',
    'javascript/doc-structure/sitepage.js',
    'javascript/doc-structure/sitepage_2021.js',
    'javascript/doc-structure/sitepage-2022.js',
  ]) {
    writeFixture(root, relativePath, "var g = { }\n\ng.nativeText = {\n'fr':'Français'\n}\n");
  }

  writeFixture(
    root,
    'javascript/doc-structure/article-dt.js',
    'var cn = {\n\tfr:"Ancien message"\n\t}\n'
  );
  writeFixture(
    root,
    'javascript/boilerplate-text/boilerplate-en.js',
    [
      "var s = { }",
      's.currLang = {',
      "'en':'English',",
      "'fr':'French',",
      "'he':'Hebrew'",
      '}',
      '// this text needs to be copied to javascript/doc-structure/article-dt.js',
      's.cookieMsg = "old"',
      '',
    ].join('\n')
  );
  writeFixture(
    root,
    'javascript/boilerplate-text/boilerplate-fr.js',
    [
      'var s = { }',
      's.currLang = {',
      "'en':'Anglais',",
      "'fr':'Français',",
      "'he':'Hébreu'",
      '}',
      's.cookieMsg = "old"',
      '',
    ].join('\n')
  );
  writeFixture(
    root,
    'javascript/boilerplate-text/boilerplate-he.js',
    [
      'var s = { }',
      's.currLang = {',
      "'en':'אנגלית',",
      "'fr':'צרפתית',",
      "'he':'עברית'",
      '}',
      's.cookieMsg = "old"',
      '',
    ].join('\n')
  );

  const first = planChanges({ root, registry });

  assert.deepEqual(first.errors, []);
  assert.deepEqual(first.warnings, []);
  assert.equal(first.changes.length, 10);

  for (const change of first.changes) {
    fs.writeFileSync(path.join(root, change.relativePath), change.nextText, 'utf8');
  }

  const second = planChanges({ root, registry });

  assert.deepEqual(second.changes, []);
  assert.deepEqual(second.errors, []);
});

function writeFixture(root, relativePath, content) {
  const absolutePath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, content, 'utf8');
}
