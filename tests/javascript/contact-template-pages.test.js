const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '../..');
const sharedScriptPattern = /<script src="\.\.\/javascript\/templates\/contact-templates\.js"><\/script>/;

function readPage(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function assertPageUsesVariant(relativePath, variantName) {
  const html = readPage(relativePath);

  assert.match(html, sharedScriptPattern, `${relativePath} should load the shared contact template script`);
  assert.match(html, /<div id="contactList"><\/div>/, `${relativePath} should provide a render target`);
  assert.match(
    html,
    new RegExp(`contactTemplates\\.render\\('contactList', '${escapeRegExp(variantName)}'\\)`),
    `${relativePath} should render ${variantName}`
  );
  assert.doesNotMatch(
    html,
    /<li><a href="mailto:addisoni18n@gmail\.com">Addison Phillips \(addisoni18n @ gmail\.com\)<\/a>/,
    `${relativePath} should not keep hard-coded contact list items`
  );
}

test('about and ask pages use shared contact templates', () => {
  assertPageUsesVariant('nav/about.html', 'about-en');
  assertPageUsesVariant('nav/about.zh-hans.html', 'about-zh-hans');
  assertPageUsesVariant('nav/ask.html', 'about-en');
});

test('language enablement pages use shared contact templates', () => {
  assertPageUsesVariant('nav/languagedev.html', 'languagedev-en');
  assertPageUsesVariant('nav/languagedev.zh-hans.html', 'languagedev-zh-hans');
});

test('legacy and participation pages use shared contact templates', () => {
  assertPageUsesVariant('nav/sitemap.html', 'legacy-en');
  assertPageUsesVariant('pages/languagedev_participation.html', 'participation-en');
  assertPageUsesVariant('pages/languagedev_participation.zh-hans.html', 'participation-zh-hans');
  assertPageUsesVariant('getting-started/languagedev_participation.html', 'legacy-en');
});
