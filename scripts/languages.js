#!/usr/bin/env node

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const registryRelativePath = 'data/languages.json';
const cookieTableRelativePath = 'javascript/doc-structure/article-dt.js';
const boilerplateDirectory = 'javascript/boilerplate-text';

const docStructureFiles = [
  'javascript/doc-structure/article.js',
  'javascript/doc-structure/article_new.js',
  'javascript/doc-structure/article-2022.js',
  'javascript/doc-structure/sitepage.js',
  'javascript/doc-structure/sitepage_2021.js',
  'javascript/doc-structure/sitepage-2022.js',
];

const generatedNote =
  '// generated from data/languages.json by `npm run languages:generate` — do not edit here';
const generatedCookieNote =
  '// generated from data/languages.json by `npm run languages:generate` — edit the cookieMessage there';

const allowedProperties = new Set(['tag', 'endonym', 'englishName', 'dir', 'cookieMessage']);
const languageTagPattern = /^[a-z]{2,3}(-[a-z0-9]{2,8})*$/;

function main(argv) {
  const cli = parseArguments(argv);

  if (cli.help) {
    printUsage();
    return 0;
  }

  if (cli.error) {
    console.error(cli.error);
    console.error('');
    printUsage();
    return 1;
  }

  let registry;
  try {
    registry = loadRegistry(repoRoot, registryRelativePath);
  } catch (error) {
    console.error(`${registryRelativePath}: ${error.message}`);
    return 1;
  }

  const registryErrors = validateRegistry(registry);

  if (registryErrors.length > 0) {
    for (const message of registryErrors) console.error(`${registryRelativePath}: ${message}`);
    console.error('');
    console.error(`Found ${registryErrors.length} issue(s) in ${registryRelativePath}.`);
    return 1;
  }

  if (cli.command === 'rtl-set') {
    console.log(buildRtlSet(registry));
    return 0;
  }

  const plan = planChanges({ root: repoRoot, registry });

  if (cli.command === 'check') {
    reportCheck(plan);
    return plan.changes.length > 0 || plan.errors.length > 0 ? 1 : 0;
  }

  for (const change of plan.changes) {
    fs.writeFileSync(path.join(repoRoot, change.relativePath), change.nextText, 'utf8');
  }

  for (const change of plan.changes) {
    console.log(`updated  ${change.relativePath}`);
  }

  for (const warning of plan.warnings) {
    console.log(`warning  ${warning}`);
  }

  for (const error of plan.errors) {
    console.error(`error    ${error}`);
  }

  const languageCount = registry.languages.length;
  const boilerplateCount = listBoilerplateFiles(repoRoot).length;
  console.log(
    plan.changes.length === 0
      ? `No changes needed for ${languageCount} language(s) and ${boilerplateCount} boilerplate file(s).`
      : `Regenerated ${plan.changes.length} file(s) from ${registryRelativePath}.`
  );

  return plan.errors.length > 0 ? 1 : 0;
}

function parseArguments(args) {
  const cli = { command: 'generate', help: false, error: '' };
  for (const argument of args) {
    if (argument === '--help' || argument === '-h') {
      cli.help = true;
      continue;
    }
    if (argument === 'generate' || argument === '--generate') {
      cli.command = 'generate';
      continue;
    }
    if (argument === 'check' || argument === '--check') {
      cli.command = 'check';
      continue;
    }
    if (argument === 'rtl-set' || argument === '--rtl-set') {
      cli.command = 'rtl-set';
      continue;
    }
    cli.error = `Unknown argument: ${argument}`;
  }
  return cli;
}

function printUsage() {
  console.log(`Usage: node scripts/languages.js <command>

Commands:
  generate   Rewrite the language tables generated from data/languages.json (default)
  check      Fail if the generated tables are stale or the registry is inconsistent
  rtl-set    Print the rtlSet snippet that International/articlelist-data/translations.js needs

Options:
  -h, --help  Show this message`);
}

function loadRegistry(root, relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing ${relativePath}`);
  }
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

function validateRegistry(registry) {
  const errors = [];
  if (!registry || typeof registry !== 'object' || Array.isArray(registry)) {
    return ['registry must be a JSON object'];
  }

  for (const key of Object.keys(registry)) {
    if (key !== 'defaultLanguage' && key !== 'languages') {
      errors.push(`unknown top-level property "${key}"`);
    }
  }

  if (!Array.isArray(registry.languages) || registry.languages.length === 0) {
    return errors.concat('"languages" must be a non-empty array');
  }

  const seen = new Set();
  registry.languages.forEach((language, index) => {
    const where = `languages[${index}]`;
    if (!language || typeof language !== 'object' || Array.isArray(language)) {
      errors.push(`${where} must be an object`);
      return;
    }

    for (const key of Object.keys(language)) {
      if (!allowedProperties.has(key)) {
        errors.push(`${where} has unknown property "${key}"`);
      }
    }

    if (typeof language.tag !== 'string' || !languageTagPattern.test(language.tag)) {
      errors.push(`${where}.tag must be a lowercase language tag such as "pt-br"`);
    } else if (seen.has(language.tag)) {
      errors.push(`${where}.tag "${language.tag}" is duplicated`);
    } else {
      seen.add(language.tag);
    }

    for (const field of ['endonym', 'englishName']) {
      if (typeof language[field] !== 'string' || language[field].trim() === '') {
        errors.push(`${where}.${field} must be a non-empty string`);
      }
    }

    if (language.dir !== undefined && language.dir !== 'ltr' && language.dir !== 'rtl') {
      errors.push(`${where}.dir must be "ltr" or "rtl"`);
    }

    if (language.cookieMessage !== undefined && typeof language.cookieMessage !== 'string') {
      errors.push(`${where}.cookieMessage must be a string`);
    }
  });

  if (typeof registry.defaultLanguage !== 'string' || !seen.has(registry.defaultLanguage)) {
    errors.push('"defaultLanguage" must name one of the languages in the list');
  } else {
    const fallback = registry.languages.find((language) => language.tag === registry.defaultLanguage);
    if (typeof fallback.cookieMessage !== 'string' || fallback.cookieMessage.trim() === '') {
      errors.push(`the default language "${registry.defaultLanguage}" needs a cookieMessage to fall back to`);
    }
  }

  return errors;
}

function planChanges({ root, registry }) {
  const changes = [];
  const errors = [];
  const warnings = [];
  const languages = registry.languages;

  for (const relativePath of docStructureFiles) {
    const source = readRepoFile(root, relativePath, errors);
    if (source === null) continue;

    const replaced = replaceGeneratedBlock(source, 'g.nativeText', renderNativeTextBlock(languages), generatedNote);
    if (replaced.range === null) {
      errors.push(`${relativePath}: could not find the g.nativeText table`);
      continue;
    }
    recordChange(changes, relativePath, source, replaced.source);
  }

  const cookieTableSource = readRepoFile(root, cookieTableRelativePath, errors);
  if (cookieTableSource !== null) {
    const replaced = replaceGeneratedBlock(
      cookieTableSource,
      'var cn = ',
      renderCookieTableBlock(registry),
      generatedNote
    );
    if (replaced.range === null) {
      errors.push(`${cookieTableRelativePath}: could not find the var cn table`);
    } else {
      recordChange(changes, cookieTableRelativePath, cookieTableSource, replaced.source);
    }
  }

  const boilerplateFiles = listBoilerplateFiles(root);
  const boilerplateTags = new Set(boilerplateFiles.map((file) => file.tag));

  for (const language of languages) {
    if (!boilerplateTags.has(language.tag)) {
      warnings.push(
        `${relativeTagPath(language.tag)}: no UI strings for "${language.tag}"; pages in this language will show English UI text`
      );
    }
  }

  for (const { relativePath, tag } of boilerplateFiles) {
    if (!languages.some((language) => language.tag === tag)) {
      errors.push(`${relativePath}: language "${tag}" is not in ${registryRelativePath}`);
      continue;
    }

    const source = readRepoFile(root, relativePath, errors);
    if (source === null) continue;

    let next = source;
    const cookieResult = replaceCookieMessage(next, cookieMessageFor(registry, tag));
    if (cookieResult.range === null) {
      errors.push(`${relativePath}: could not find the s.cookieMsg assignment`);
    } else {
      next = cookieResult.source;
    }

    const currLangResult = syncCurrLangBlock(next, languages);
    if (currLangResult.range === null) {
      errors.push(`${relativePath}: could not find the s.currLang table`);
    } else {
      next = currLangResult.source;
      for (const missing of currLangResult.missing) {
        warnings.push(
          `${relativePath}: s.currLang has no entry for "${missing}"; the English name is used as a placeholder`
        );
      }
      for (const unknown of currLangResult.unknown) {
        errors.push(`${relativePath}: s.currLang has "${unknown}", which is not in ${registryRelativePath}`);
      }
    }

    recordChange(changes, relativePath, source, next);
  }

  const untranslatedCookies = languages
    .filter((language) => language.tag !== registry.defaultLanguage)
    .filter((language) => cookieMessageFor(registry, language.tag) === cookieMessageFor(registry, registry.defaultLanguage))
    .map((language) => language.tag);

  if (untranslatedCookies.length > 0) {
    warnings.push(
      `${registryRelativePath}: cookieMessage is still the English text for ${untranslatedCookies.join(', ')}`
    );
  }

  return { changes, errors, warnings };
}

function readRepoFile(root, relativePath, errors) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`${relativePath}: file is missing`);
    return null;
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

function recordChange(changes, relativePath, previous, next) {
  if (previous !== next) {
    changes.push({ relativePath, nextText: next });
  }
}

function reportCheck(plan) {
  for (const change of plan.changes) {
    console.error(`${change.relativePath}: generated content is stale (run npm run languages:generate)`);
  }
  for (const warning of plan.warnings) {
    console.log(`warning  ${warning}`);
  }
  for (const error of plan.errors) {
    console.error(`error    ${error}`);
  }

  if (plan.changes.length === 0 && plan.errors.length === 0) {
    console.log(`Language tables are in sync with ${registryRelativePath}.`);
  }
}

function relativeTagPath(tag) {
  return `${boilerplateDirectory}/boilerplate-${tag}.js`;
}

function listBoilerplateFiles(root) {
  const absoluteDirectory = path.join(root, boilerplateDirectory);
  return fs
    .readdirSync(absoluteDirectory)
    .filter((fileName) => /^boilerplate-[a-z0-9-]+\.js$/.test(fileName))
    .sort()
    .map((fileName) => ({
      tag: fileName.replace(/^boilerplate-/, '').replace(/\.js$/, ''),
      relativePath: `${boilerplateDirectory}/${fileName}`,
    }));
}

function cookieMessageFor(registry, tag) {
  const language = registry.languages.find((entry) => entry.tag === tag);
  if (!language) return '';
  if (language.cookieMessage !== undefined) return language.cookieMessage;
  return registry.languages.find((entry) => entry.tag === registry.defaultLanguage).cookieMessage || '';
}

function buildRtlSet(registry) {
  const tags = registry.languages
    .filter((language) => language.dir === 'rtl')
    .map((language) => `'${language.tag}'`);
  return `rtlSet = [${tags.join(', ')}]`;
}

function renderNativeTextBlock(languages) {
  const lines = ['g.nativeText = {'];
  languages.forEach((language, index) => {
    const comma = index === languages.length - 1 ? '' : ',';
    lines.push(`'${language.tag}':${toSingleQuoted(language.endonym)}${comma}`);
  });
  lines.push('}');
  return lines.join('\n');
}

function renderCookieTableBlock(registry) {
  const languages = registry.languages;
  const lines = ['var cn = {'];
  languages.forEach((language, index) => {
    const comma = index === languages.length - 1 ? '' : ',';
    const message = cookieMessageFor(registry, language.tag);
    lines.push(`\t${toObjectKey(language.tag)}:${toDoubleQuoted(message)}${comma}`);
  });
  lines.push('\t}');
  return lines.join('\n');
}

function toObjectKey(tag) {
  return /^[A-Za-z_$][\w$]*$/.test(tag) ? tag : `'${tag}'`;
}

function toSingleQuoted(value) {
  return `'${escapeJs(value, "'")}'`;
}

function toDoubleQuoted(value) {
  return `"${escapeJs(value, '"')}"`;
}

function escapeJs(value, quote) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(new RegExp(quote, 'g'), `\\${quote}`)
    .replace(/\u00a0/g, '\\u00A0')
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
}

function replaceGeneratedBlock(source, marker, renderedBlock, note) {
  const range = findBlockRange(source, marker);
  if (range === null) return { source, range: null };

  let start = range.start;
  const noteIndex = source.lastIndexOf(note, range.start);
  if (noteIndex !== -1 && source.slice(noteIndex + note.length, range.start).trim() === '') {
    start = noteIndex;
  }

  return {
    source: `${source.slice(0, start)}${note}\n${renderedBlock}${source.slice(range.blockEnd)}`,
    range,
  };
}

function replaceCookieMessage(source, message) {
  const assignment = /^([ \t]*)s\.cookieMsg[ \t]*=[ \t]*"(?:\\.|[^"])*"[ \t]*$/m.exec(source);
  if (assignment === null) return { source, range: null };

  const instruction = /^[ \t]*\/\/[ \t]*this text needs to be copied[^\n]*\n?/m.exec(source);
  const rendered = `${assignment[1]}s.cookieMsg = ${toDoubleQuoted(message)}`;
  const tail = source.slice(assignment.index + assignment[0].length);

  if (instruction !== null) {
    return {
      source: `${source.slice(0, instruction.index)}${generatedCookieNote}\n${rendered}${tail}`,
      range: assignment,
    };
  }

  if (!source.slice(0, assignment.index).includes(generatedCookieNote)) {
    return {
      source: `${source.slice(0, assignment.index)}${generatedCookieNote}\n${rendered}${tail}`,
      range: assignment,
    };
  }

  return {
    source: `${source.slice(0, assignment.index)}${rendered}${tail}`,
    range: assignment,
  };
}

function syncCurrLangBlock(source, languages) {
  const range = findBlockRange(source, 's.currLang');
  if (range === null) return { source, range: null, missing: [], unknown: [] };

  const blockText = source.slice(range.blockStart, range.blockEnd);
  const entries = [];
  const pattern = /^[ \t]*(?:'([^']+)'|"([^"]+)"|([A-Za-z][\w-]*))[ \t]*:[ \t]*(?:'(?:\\.|[^'])*'|"(?:\\.|[^"])*")[ \t]*,?[ \t]*$/gm;
  for (const match of blockText.matchAll(pattern)) {
    entries.push({ tag: match[1] || match[2] || match[3], line: match[0] });
  }

  const existing = new Set(entries.map((entry) => entry.tag));
  const known = new Set(languages.map((language) => language.tag));
  const missing = languages.map((language) => language.tag).filter((tag) => !existing.has(tag));
  const unknown = [...existing].filter((tag) => !known.has(tag)).sort();

  if (missing.length === 0) {
    return { source, range, missing, unknown };
  }

  const indent = entries.length > 0 ? /^[ \t]*/.exec(entries[0].line)[0] : '';
  const quote = entries.length > 0 && entries[0].line.includes('":') ? '"' : "'";
  const quotedKeys = entries.length > 0 && /^[ \t]*['"]/.test(entries[0].line);
  const lines = entries.map((entry) => entry.line.replace(/\s*$/, '').replace(/,\s*$/, ''));

  const added = missing.map((tag) => {
    const language = languages.find((entry) => entry.tag === tag);
    const value = quote === '"' ? toDoubleQuoted(language.englishName) : toSingleQuoted(language.englishName);
    const key = quotedKeys ? `${quote}${tag}${quote}` : toObjectKey(tag);
    return `${indent}${key}:${value}`;
  });

  const closingIndentMatch = /\n([ \t]*)\}$/.exec(blockText);
  const closingIndent = closingIndentMatch === null ? '' : closingIndentMatch[1];

  const body = [...lines, ...added].join(',\n');
  const rebuilt = `{\n${body}\n${closingIndent}}`;
  return {
    source: source.slice(0, range.blockStart) + rebuilt + source.slice(range.blockEnd),
    range,
    missing,
    unknown,
  };
}

function findBlockRange(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return null;

  const openIndex = source.indexOf('{', markerIndex + marker.length - 1);
  if (openIndex === -1) return null;

  let depth = 0;
  let quote = null;
  for (let index = openIndex; index < source.length; index += 1) {
    const character = source[index];
    if (quote !== null) {
      if (character === '\\') {
        index += 1;
        continue;
      }
      if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (character === '{') depth += 1;
    if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return { start: markerIndex, blockStart: openIndex, blockEnd: index + 1 };
      }
    }
  }

  return null;
}

module.exports = {
  buildRtlSet,
  findBlockRange,
  loadRegistry,
  planChanges,
  renderCookieTableBlock,
  renderNativeTextBlock,
  replaceCookieMessage,
  replaceGeneratedBlock,
  syncCurrLangBlock,
  validateRegistry,
};

if (require.main === module) {
  process.exit(main(process.argv.slice(2)));
}
