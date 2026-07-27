'use strict';

const fs = require('node:fs');
const path = require('node:path');

const contentRoots = new Set([
  'articles',
  'questions',
  'tutorials',
  'getting-started',
  'quicktips',
  'pages',
  'nav',
  'techniques',
]);

function findSingleLanguageWarnings({ repoRoot, changedFiles }) {
  const grouped = new Map();

  for (const file of changedFiles) {
    const parsed = parseLocalizedContentHtml(file);
    if (!parsed) {
      continue;
    }

    const bucket = grouped.get(parsed.base) || [];
    bucket.push(parsed);
    grouped.set(parsed.base, bucket);
  }

  const warnings = [];

  for (const [base, entries] of grouped) {
    const changedLanguages = [...new Set(entries.map((entry) => entry.language))].sort();
    if (changedLanguages.length !== 1) {
      continue;
    }

    const siblingLanguages = listSiblingLanguages({
      repoRoot,
      directory: entries[0].directory,
      fileNameBase: entries[0].fileNameBase,
    });
    const missingSiblingLanguages = siblingLanguages.filter(
      (language) => !changedLanguages.includes(language)
    );

    if (missingSiblingLanguages.length === 0) {
      continue;
    }

    warnings.push({
      base,
      changedFile: entries[0].relativePath,
      changedLanguages,
      missingSiblingLanguages,
    });
  }

  return warnings.sort((left, right) => left.changedFile.localeCompare(right.changedFile));
}

function emitLanguageCoverageWarnings({ warnings, summaryPath, log = console.log }) {
  if (!Array.isArray(warnings) || warnings.length === 0) {
    return;
  }

  for (const warning of warnings) {
    log(`::warning file=${warning.changedFile}::${formatWarningMessage(warning)}`);
  }

  if (summaryPath) {
    fs.appendFileSync(summaryPath, renderJobSummary(warnings), 'utf8');
  }
}

function renderJobSummary(warnings) {
  const lines = [
    '## Language coverage reminders',
    '',
    'These are soft warnings only. If the single-language change was intentional, no action is needed.',
    '',
  ];

  for (const warning of warnings) {
    lines.push(`- ${formatWarningMessage(warning)}`);
  }

  lines.push('');
  return `${lines.join('\n')}\n`;
}

function formatWarningMessage(warning) {
  return `PR updates \`${warning.changedFile}\` only. Other language versions exist: ${warning.missingSiblingLanguages
    .map((language) => `\`${language}\``)
    .join(', ')}. If this was intentional, no action is needed.`;
}

function parseLocalizedContentHtml(relativePath) {
  const normalized = toPosix(relativePath).replace(/^\.\//, '');
  const segments = normalized.split('/');

  if (!contentRoots.has(segments[0])) {
    return null;
  }

  if (!normalized.endsWith('.html')) {
    return null;
  }

  const fileName = path.posix.basename(normalized);
  const match = fileName.match(/^(.*)\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\.html$/i);
  if (!match) {
    return null;
  }

  const directory = path.posix.dirname(normalized);
  const fileNameBase = match[1];

  return {
    relativePath: normalized,
    directory,
    fileNameBase,
    language: match[2].toLowerCase(),
    base: path.posix.join(directory, fileNameBase),
  };
}

function listSiblingLanguages({ repoRoot, directory, fileNameBase }) {
  const absoluteDirectory = path.join(repoRoot, ...directory.split('/'));
  if (!fs.existsSync(absoluteDirectory)) {
    return [];
  }

  const matcher = new RegExp(
    `^${escapeRegExp(fileNameBase)}\\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\\.html$`,
    'i'
  );

  return fs
    .readdirSync(absoluteDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name.match(matcher))
    .filter(Boolean)
    .map((match) => match[1].toLowerCase())
    .sort();
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
  findSingleLanguageWarnings,
  emitLanguageCoverageWarnings,
};
