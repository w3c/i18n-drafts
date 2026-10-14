'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const {
  findSingleLanguageWarnings,
  emitLanguageCoverageWarnings,
} = require('./pr-language-coverage-warning.js');

function makeTempRepo() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-drafts-warning-'));
}

function writeFile(root, relativePath) {
  const absolutePath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, '<!doctype html>\n', 'utf8');
}

test('warns when exactly one language file changed and sibling languages exist', () => {
  const repoRoot = makeTempRepo();
  writeFile(repoRoot, 'articles/http-charset/index.en.html');
  writeFile(repoRoot, 'articles/http-charset/index.es.html');
  writeFile(repoRoot, 'articles/http-charset/index.fr.html');

  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles: ['articles/http-charset/index.en.html'],
  });

  assert.deepEqual(warnings, [
    {
      base: 'articles/http-charset/index',
      changedFile: 'articles/http-charset/index.en.html',
      changedLanguages: ['en'],
      missingSiblingLanguages: ['es', 'fr'],
    },
  ]);
});

test('does not warn when two language files for the same base changed', () => {
  const repoRoot = makeTempRepo();
  writeFile(repoRoot, 'articles/http-charset/index.en.html');
  writeFile(repoRoot, 'articles/http-charset/index.es.html');
  writeFile(repoRoot, 'articles/http-charset/index.fr.html');

  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles: [
      'articles/http-charset/index.en.html',
      'articles/http-charset/index.es.html',
    ],
  });

  assert.deepEqual(warnings, []);
});

test('does not warn when no sibling language files exist', () => {
  const repoRoot = makeTempRepo();
  writeFile(repoRoot, 'articles/vertical-text/index.en.html');

  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles: ['articles/vertical-text/index.en.html'],
  });

  assert.deepEqual(warnings, []);
});

test('ignores non-html files and unrelated paths', () => {
  const repoRoot = makeTempRepo();
  writeFile(repoRoot, 'articles/http-charset/index.en.html');
  writeFile(repoRoot, 'articles/http-charset/index.es.html');
  writeFile(repoRoot, 'pages/translation.en.html');

  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles: [
      'articles/http-charset/index-data/translations.js',
      'README.md',
      'pages/translation.en.html',
    ],
  });

  assert.deepEqual(warnings, []);
});

test('emits GitHub warnings and appends a job summary section', () => {
  const repoRoot = makeTempRepo();
  const summaryPath = path.join(repoRoot, 'summary.md');
  const logs = [];

  emitLanguageCoverageWarnings({
    warnings: [
      {
        base: 'articles/http-charset/index',
        changedFile: 'articles/http-charset/index.en.html',
        changedLanguages: ['en'],
        missingSiblingLanguages: ['es', 'fr'],
      },
    ],
    summaryPath,
    log: (line) => logs.push(line),
  });

  assert.equal(
    logs[0],
    '::warning file=articles/http-charset/index.en.html::PR updates `articles/http-charset/index.en.html` only. Other language versions exist: `es`, `fr`. If this was intentional, no action is needed.'
  );
  assert.match(fs.readFileSync(summaryPath, 'utf8'), /## Language coverage reminders/);
  assert.match(fs.readFileSync(summaryPath, 'utf8'), /articles\/http-charset\/index\.en\.html/);
});

test('warns only for qualifying bases in a mixed PR', () => {
  const repoRoot = makeTempRepo();
  writeFile(repoRoot, 'articles/http-charset/index.en.html');
  writeFile(repoRoot, 'articles/http-charset/index.es.html');
  writeFile(repoRoot, 'articles/http-charset/index.fr.html');
  writeFile(repoRoot, 'questions/qa-bidi-space.en.html');
  writeFile(repoRoot, 'questions/qa-bidi-space.sv.html');

  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles: [
      'articles/http-charset/index.en.html',
      'questions/qa-bidi-space.en.html',
      'questions/qa-bidi-space.sv.html',
    ],
  });

  assert.deepEqual(warnings, [
    {
      base: 'articles/http-charset/index',
      changedFile: 'articles/http-charset/index.en.html',
      changedLanguages: ['en'],
      missingSiblingLanguages: ['es', 'fr'],
    },
  ]);
});
