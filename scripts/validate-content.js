#!/usr/bin/env node

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');
const contentRoots = [
  'articles',
  'questions',
  'tutorials',
  'getting-started',
  'quicktips',
  'pages',
  'nav',
  'techniques',
];

const allowedStatuses = new Set(['draft', 'review', 'published', 'notreviewed', 'obsolete']);

const fullScanAllowlist = new Set([
  'articles/ruby/index.en.html',
]);

const cli = parseArguments(process.argv.slice(2));
const issues = [];
const pageCount = { scanned: 0, validated: 0 };
const translationCount = { validated: 0 };
const translationsCache = new Map();
const reportedTranslationFiles = new Set();
const targetIdsCache = new Map();
const todayIso = formatToday();

if (cli.help) {
  printUsage();
  process.exit(0);
}

if (cli.errors.length > 0) {
  for (const error of cli.errors) {
    console.error(error);
  }
  console.error('');
  printUsage();
  process.exit(1);
}

if (cli.files.length > 0) {
  validateRequestedFiles(cli.files);
} else {
  for (const root of contentRoots) {
    walkDirectory(path.join(repoRoot, root), { skipFullScanAllowlist: true });
  }
}

if (issues.length > 0) {
  console.error(
    `Found ${issues.length} issue(s) across ${pageCount.validated} content page(s) and ${translationCount.validated} translation file(s).`
  );
  const grouped = groupByFile(issues);
  for (const [relativePath, fileIssues] of grouped) {
    console.error(`\n${relativePath}`);
    for (const issue of fileIssues) {
      console.error(`  - ${formatIssue(issue)}`);
    }
  }
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${pageCount.validated} content page(s) and ${translationCount.validated} translation file(s); no issues found.`
  );
}

function parseArguments(args) {
  const files = [];
  const errors = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '--help' || arg === '-h') {
      return { help: true, files: [], errors: [] };
    }

    if (arg === '--files') {
      const values = [];
      index += 1;

      while (index < args.length && !args[index].startsWith('--')) {
        values.push(...splitFileList(args[index]));
        index += 1;
      }

      index -= 1;
      if (values.length === 0) {
        errors.push('`--files` requires at least one path.');
        continue;
      }

      files.push(...values);
      continue;
    }

    if (arg.startsWith('--files=')) {
      const values = splitFileList(arg.slice('--files='.length));
      if (values.length === 0) {
        errors.push('`--files` requires at least one path.');
        continue;
      }

      files.push(...values);
      continue;
    }

    errors.push(`Unknown argument \`${arg}\`.`);
  }

  return {
    help: false,
    files: [...new Set(files)],
    errors,
  };
}

function splitFileList(value) {
  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function printUsage() {
  console.error('Usage: node scripts/validate-content.js [--files path[,path...]]');
  console.error('       node scripts/validate-content.js [--files path1 path2 ...]');
}

function walkDirectory(directory, options = {}) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walkDirectory(fullPath, options);
      continue;
    }
    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== '.html') {
      continue;
    }
    if (options.skipFullScanAllowlist && isFullScanAllowlisted(fullPath)) {
      continue;
    }
    pageCount.scanned += 1;
    validatePage(fullPath);
  }
}

function isFullScanAllowlisted(absolutePath) {
  return fullScanAllowlist.has(toPosix(path.relative(repoRoot, absolutePath)));
}

function validateRequestedFiles(requestedPaths) {
  for (const requestedPath of requestedPaths) {
    const absolutePath = path.resolve(repoRoot, requestedPath);
    const relativePath = displayPathFor(requestedPath, absolutePath);

    if (!isWithinRepo(absolutePath)) {
      addIssue(relativePath, 'Requested path is outside the repository root.');
      continue;
    }

    if (!fs.existsSync(absolutePath)) {
      addIssue(relativePath, 'Requested path does not exist.');
      continue;
    }

    const stats = fs.statSync(absolutePath);
    if (stats.isDirectory()) {
      walkDirectory(absolutePath);
      continue;
    }

    if (!stats.isFile()) {
      addIssue(relativePath, 'Requested path is not a regular file.');
      continue;
    }

    const baseName = path.basename(absolutePath).toLowerCase();
    const extension = path.extname(baseName);

    if (extension === '.html') {
      pageCount.scanned += 1;
      validatePage(absolutePath);
      continue;
    }

    if (baseName === 'translations.js') {
      validateTranslationsFile(absolutePath);
      continue;
    }

    addIssue(relativePath, 'Requested file is not a content HTML page or `translations.js` file.');
  }
}

function validatePage(absolutePath) {
  const html = fs.readFileSync(absolutePath, 'utf8');
  if (!looksLikeContentPage(html)) {
    return;
  }

  pageCount.validated += 1;
  const relativePath = toPosix(path.relative(repoRoot, absolutePath));
  const htmlContext = createTextContext(html);
  const htmlLang = extractHtmlLang(html, htmlContext);
  const metadata = extractMetadata(html, htmlContext);
  const parsedName = parsePageFilename(path.basename(relativePath));

  if (!htmlLang) {
    addIssue(relativePath, 'Missing `<html lang="...">` declaration.');
  } else if (parsedName.language && parsedName.language !== htmlLang.value) {
    addIssue(
      relativePath,
      `Filename language suffix \`${parsedName.language}\` does not match \`<html lang="${htmlLang.value}">\`.`,
      htmlLang.line
    );
  } else if (!parsedName.language && htmlLang.value !== 'en') {
    addIssue(
      relativePath,
      `Non-English page uses \`<html lang="${htmlLang.value}">\` but the filename does not have a recognizable language suffix.`,
      htmlLang.line
    );
  }

  validateMetadata(relativePath, metadata, parsedName, htmlLang);
  validateDates(relativePath, metadata);
  validateBoilerplate(relativePath, absolutePath, html, htmlLang, htmlContext);
  validateLocalAssets(relativePath, absolutePath, html, htmlContext);
  validateLinks(relativePath, absolutePath, html, htmlContext);
  validateTranslations(relativePath, absolutePath, html, htmlContext);
}

function looksLikeContentPage(html) {
  return /var\s+f\s*=\s*\{\s*\}/i.test(html) && /\bf\.filename\s*=/i.test(html);
}

function extractHtmlLang(html, textContext) {
  const regex = /<html\b[^>]*\blang\s*=\s*["']([^"']+)["']/i;
  const match = regex.exec(html);
  if (!match) {
    return null;
  }

  return {
    value: match[1].trim().toLowerCase(),
    line: textContext.lineNumberAt(match.index),
  };
}

function extractMetadata(html, textContext) {
  const regex = /<script\b[^>]*>([\s\S]*?\bvar\s+f\s*=\s*\{\s*\}[\s\S]*?)<\/script>/i;
  const match = regex.exec(html);
  const block = match ? match[1] : '';
  const blockIndex = match ? match.index + match[0].indexOf(block) : -1;

  return {
    directory: parseStringAssignment(block, 'directory', blockIndex, textContext),
    filename: parseStringAssignment(block, 'filename', blockIndex, textContext),
    path: parseStringAssignment(block, 'path', blockIndex, textContext),
    authors: parseStringLiteralAssignment(block, 'authors', blockIndex, textContext),
    translators: parseStringLiteralAssignment(block, 'translators', blockIndex, textContext),
    status: parseStringLiteralAssignment(block, 'status', blockIndex, textContext),
    firstPubDate: parseSimpleStringValue(block, 'firstPubDate', blockIndex, textContext),
    thisVersionDate: parseObjectDateValue(block, 'thisVersion', blockIndex, textContext),
    lastSubstUpdateDate: parseObjectDateValue(block, 'lastSubstUpdate', blockIndex, textContext),
  };
}

function parseStringAssignment(block, fieldName, blockIndex, textContext) {
  const lineRegex = new RegExp(`^.*\\bf\\.${escapeRegExp(fieldName)}\\s*=.*$`, 'm');
  const lineMatch = lineRegex.exec(block);
  const line = lineMatch ? textContext.lineNumberAt(blockIndex + lineMatch.index) : null;

  if (!lineMatch) {
    return { ok: false, reason: `Missing \`f.${fieldName}\` assignment.` };
  }

  const withoutComment = lineMatch[0].replace(/\/\/.*$/, '').trim();
  const match = withoutComment.match(
    new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*(.+?)\\s*;?$`)
  );

  if (!match) {
    return { ok: false, reason: `Could not parse \`f.${fieldName}\`.`, line };
  }

  try {
    return { ok: true, value: parseStringExpression(match[1]), line };
  } catch (error) {
    return { ok: false, reason: `Could not parse \`f.${fieldName}\`: ${error.message}`, line };
  }
}

function parseStringExpression(expression) {
  const parts = expression
    .split('+')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    throw new Error('empty string expression');
  }

  return parts
    .map((part) => {
      const quote = part[0];
      if ((quote !== '\'' && quote !== '"') || part[part.length - 1] !== quote) {
        throw new Error(`unsupported token ${part}`);
      }
      return part.slice(1, -1);
    })
    .join('');
}

function parseStringLiteralAssignment(block, fieldName, blockIndex, textContext) {
  const lineRegex = new RegExp(`^.*\\bf\\.${escapeRegExp(fieldName)}\\s*=.*$`, 'm');
  const lineMatch = lineRegex.exec(block);
  const line = lineMatch ? textContext.lineNumberAt(blockIndex + lineMatch.index) : null;

  if (!lineMatch) {
    return { ok: false, value: null, reason: `Missing \`f.${fieldName}\` assignment.` };
  }

  const assignmentRegex = new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*`);
  const assignmentMatch = assignmentRegex.exec(lineMatch[0]);
  const valueStart = assignmentMatch ? assignmentMatch.index + assignmentMatch[0].length : -1;
  const quote = valueStart >= 0 ? lineMatch[0][valueStart] : '';

  if (quote !== '\'' && quote !== '"') {
    return { ok: false, value: null, reason: `Could not parse \`f.${fieldName}\`.`, line };
  }

  let value = '';
  let escaped = false;
  for (let index = valueStart + 1; index < lineMatch[0].length; index += 1) {
    const character = lineMatch[0][index];

    if (escaped) {
      value += character;
      escaped = false;
      continue;
    }

    if (character === '\\') {
      escaped = true;
      continue;
    }

    if (character === quote) {
      return { ok: true, value, line };
    }

    value += character;
  }

  return { ok: false, value: null, reason: `Could not parse \`f.${fieldName}\`.`, line };
}

function parseSimpleStringValue(block, fieldName, blockIndex, textContext) {
  const regex = new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*['"]([^'"]+)['"]`);
  const match = regex.exec(block);
  if (!match) {
    return { value: null, line: null };
  }

  return {
    value: match[1],
    line: textContext.lineNumberAt(blockIndex + match.index),
  };
}

function parseObjectDateValue(block, fieldName, blockIndex, textContext) {
  const regex = new RegExp(
    `\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*\\{[\\s\\S]*?\\bdate\\s*:\\s*['"]([^'"]+)['"]`
  );
  const match = regex.exec(block);
  if (!match) {
    return { value: null, line: null };
  }

  const dateOffset = match[0].search(/\bdate\s*:/);
  return {
    value: match[1],
    line: textContext.lineNumberAt(blockIndex + match.index + Math.max(dateOffset, 0)),
  };
}

function parsePageFilename(fileName) {
  const htmlStem = fileName.replace(/\.html$/i, '');
  const match = htmlStem.match(/^(.*)\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)$/i);
  if (!match) {
    return { stem: htmlStem, language: null };
  }
  return { stem: match[1], language: match[2].toLowerCase() };
}

function validateMetadata(relativePath, metadata, parsedName, htmlLang) {
  const actualDirectory = actualDirectoryFor(relativePath);
  const actualFilename = parsedName.stem;
  const actualPath = pathToRepoRoot(relativePath);

  assertStringField(relativePath, metadata.directory, 'f.directory', actualDirectory);
  assertStringField(relativePath, metadata.filename, 'f.filename', actualFilename);
  assertStringField(relativePath, metadata.path, 'f.path', actualPath);
  validateStatus(relativePath, metadata.status);
  validateCreditMetadata(relativePath, metadata, parsedName, htmlLang);
}

function assertStringField(relativePath, parsedField, label, expected) {
  if (!parsedField.ok) {
    addIssue(relativePath, parsedField.reason, parsedField.line);
    return;
  }
  if (parsedField.value !== expected) {
    addIssue(
      relativePath,
      `${label} is \`${parsedField.value}\`, expected \`${expected}\`.`,
      parsedField.line
    );
  }
}

function validateStatus(relativePath, status) {
  if (!status.ok) {
    addIssue(relativePath, status.reason, status.line);
    return;
  }

  if (!allowedStatuses.has(status.value)) {
    addIssue(
      relativePath,
      `f.status must be one of ${[...allowedStatuses].map((value) => `\`${value}\``).join(', ')}; found \`${status.value}\`.`,
      status.line
    );
  }
}

function validateCreditMetadata(relativePath, metadata, parsedName, htmlLang) {
  const pageLanguage = parsedName.language || (htmlLang ? htmlLang.value : null);

  if (pageLanguage === 'en') {
    assertNonEmptyStringField(
      relativePath,
      metadata.authors,
      'English content pages must provide `f.authors`.'
    );
  }

  if (parsedName.language && parsedName.language !== 'en') {
    assertNonEmptyStringField(
      relativePath,
      metadata.translators,
      'Translated content pages must provide `f.translators`.'
    );
  }
}

function assertNonEmptyStringField(relativePath, parsedField, message) {
  if (!parsedField.ok) {
    addIssue(relativePath, parsedField.reason, parsedField.line);
    return;
  }

  if (parsedField.value.trim() === '') {
    addIssue(relativePath, message, parsedField.line);
  }
}

function actualDirectoryFor(relativePath) {
  const directory = path.posix.dirname(relativePath);
  return directory === '.' ? '' : `${directory}/`;
}

function pathToRepoRoot(relativePath) {
  const directory = path.posix.dirname(relativePath);
  if (directory === '.') {
    return '';
  }

  const depth = directory.split('/').length;
  return '../'.repeat(depth);
}

function validateDates(relativePath, metadata) {
  validateDate(relativePath, 'f.firstPubDate', metadata.firstPubDate);
  validateDate(relativePath, 'f.thisVersion.date', metadata.thisVersionDate);
  if (metadata.lastSubstUpdateDate.value) {
    validateDate(relativePath, 'f.lastSubstUpdate.date', metadata.lastSubstUpdateDate);
  }
}

function validateDate(relativePath, label, field) {
  if (!field.value) {
    addIssue(relativePath, `Missing ${label}.`, field.line);
    return;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(field.value)) {
    addIssue(relativePath, `${label} must use YYYY-MM-DD; found \`${field.value}\`.`, field.line);
    return;
  }

  const [year, month, day] = field.value.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  const isRealDate =
    utcDate.getUTCFullYear() === year &&
    utcDate.getUTCMonth() === month - 1 &&
    utcDate.getUTCDate() === day;

  if (!isRealDate) {
    addIssue(relativePath, `${label} is not a real calendar date: \`${field.value}\`.`, field.line);
    return;
  }

  if (field.value > todayIso) {
    addIssue(
      relativePath,
      `${label} is in the future: \`${field.value}\` > \`${todayIso}\`.`,
      field.line
    );
  }
}

function validateBoilerplate(relativePath, absolutePath, html, htmlLang, textContext) {
  const tags = extractTags(stripHtmlComments(html), 'script', textContext);
  const matches = [];

  for (const tag of tags) {
    const attributes = parseAttributes(tag.markup);
    if (!attributes.src) {
      continue;
    }
    const match = attributes.src.match(/(?:^|\/)boilerplate-([a-z0-9-]+)\.js$/i);
    if (match) {
      matches.push({ language: match[1].toLowerCase(), line: tag.line });
    }
  }

  if (matches.length === 0) {
    addIssue(relativePath, 'Missing `boilerplate-<lang>.js` script reference.');
    return;
  }

  if (!htmlLang) {
    return;
  }

  const uniqueMatches = [...new Set(matches.map((match) => match.language))];
  if (uniqueMatches.length > 1) {
    addIssue(
      relativePath,
      `Multiple boilerplate languages referenced: ${uniqueMatches.map((lang) => `\`${lang}\``).join(', ')}.`,
      matches.map((match) => match.line)
    );
  }

  if (!uniqueMatches.includes(htmlLang.value)) {
    addIssue(
      relativePath,
      `Boilerplate script language ${uniqueMatches.map((lang) => `\`${lang}\``).join(', ')} does not match \`<html lang="${htmlLang.value}">\`.`,
      collectLineNumbers(htmlLang.line, matches.map((match) => match.line))
    );
  }
}

function validateLocalAssets(relativePath, absolutePath, html, textContext) {
  const commentFreeHtml = stripHtmlComments(html);
  const assets = [];
  const references = new Map();

  for (const tag of extractTags(commentFreeHtml, 'script', textContext)) {
    const attributes = parseAttributes(tag.markup);
    if (attributes.src) {
      assets.push({ kind: 'script', ref: attributes.src, line: tag.line });
    }
  }

  for (const tag of extractTags(commentFreeHtml, 'img', textContext)) {
    const attributes = parseAttributes(tag.markup);
    if (attributes.src) {
      assets.push({ kind: 'image', ref: attributes.src, line: tag.line });
    }
  }

  for (const tag of extractTags(commentFreeHtml, 'link', textContext)) {
    const attributes = parseAttributes(tag.markup);
    if (!attributes.href || !attributes.rel) {
      continue;
    }
    const relTokens = attributes.rel.toLowerCase().split(/\s+/);
    if (relTokens.includes('stylesheet')) {
      assets.push({ kind: 'stylesheet', ref: attributes.href, line: tag.line });
    }
  }

  for (const asset of assets) {
    const resolved = resolveLocalReference(asset.ref, absolutePath);
    if (!resolved) {
      continue;
    }

    const dedupeKey = `${asset.kind}\u0000${resolved.absolutePath}`;
    const entry = references.get(dedupeKey) || {
      kind: asset.kind,
      ref: asset.ref,
      resolved,
      lines: [],
    };
    entry.lines.push(asset.line);
    references.set(dedupeKey, entry);
  }

  for (const asset of references.values()) {
    if (!fs.existsSync(asset.resolved.absolutePath)) {
      addIssue(
        relativePath,
        `Missing ${asset.kind} file referenced by \`${asset.ref}\` (${asset.resolved.relativePath}).`,
        asset.lines
      );
    }
  }
}

function validateLinks(relativePath, absolutePath, html, textContext) {
  const commentFreeHtml = stripHtmlComments(html);
  const ids = extractIds(commentFreeHtml);
  const localReferences = new Map();

  for (const tag of extractTags(commentFreeHtml, 'a', textContext)) {
    const attributes = parseAttributes(tag.markup);
    if (!attributes.href) {
      continue;
    }

    const fragment = samePageFragment(attributes.href);
    if (fragment && !ids.has(fragment)) {
      addIssue(
        relativePath,
        `Anchor link \`#${fragment}\` does not match any \`id\` in this page.`,
        tag.line
      );
    }

    const htmlReference = localInternalReference(attributes.href);
    if (!htmlReference) {
      continue;
    }

    const resolved = path.resolve(path.dirname(absolutePath), htmlReference);

    // The key uses a null separator so foo.html and foo.html#bar are tracked separately
    const key = `${resolved}\u0000${fragment || ''}`;
    const entry = localReferences.get(key) || {
      ref: attributes.href,
      resolvedPath: resolved,
      relativePath: toPosix(path.relative(repoRoot, resolved)),
      fragment,
      lines: [],
    };
    entry.lines.push(tag.line);
    localReferences.set(key, entry);
  }

  for (const reference of localReferences.values()) {
    if (!isInsideRepo(reference.resolvedPath)) {
      continue;
    }

    if (!fs.existsSync(reference.resolvedPath)) {
      addIssue(
        relativePath,
        `Missing local HTML file referenced by \`${reference.ref}\` (${reference.relativePath}).`,
        reference.lines
      );
      continue;
    }

    if (reference.fragment) {
      const targetIds = loadTargetFileIds(reference.resolvedPath);
      if (targetIds && !targetIds.has(reference.fragment)) {
        addIssue(
          relativePath,
          `Anchor link \`${reference.ref}\` targets \`#${reference.fragment}\`, which does not match any \`id\` in \`${reference.relativePath}\`.`,
          reference.lines
        );
      }
    }
  }
}

function extractIds(html) {
  const ids = new Set();
  const regex = /<[a-z][\w:-]*\b[^>]*>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const attributes = parseAttributes(match[0]);
    if (attributes.id) {
      ids.add(attributes.id);
    }
  }

  return ids;
}

function samePageFragment(reference) {
  const trimmed = reference.trim();
  if (!trimmed.startsWith('#')) {
    return null;
  }

  const fragment = trimmed.slice(1);
  if (!fragment || fragment === '_' || fragment.startsWith('!')) {
    return null;
  }

  return decodeReferenceFragment(fragment);
}

function localInternalReference(reference) {
  const localPath = localRelativePath(reference);
  if (!localPath) {
    return null;
  }

  if (!/\.html?$/i.test(localPath)) {
    return null;
  }

  return localPath;
}

function loadTargetFileIds(absolutePath) {
  const normalized = path.resolve(absolutePath);
  const cached = targetIdsCache.get(normalized);
  if (cached) {
    return cached;
  }

  if (!fs.existsSync(normalized)) {
    targetIdsCache.set(normalized, null);
    return null;
  }

  const html = fs.readFileSync(normalized, 'utf8');
  const ids = extractIds(stripHtmlComments(html));
  targetIdsCache.set(normalized, ids);
  return ids;
}

// For relative href outside the repo
function isInsideRepo(absolutePath) {
  const relativePath = path.relative(repoRoot, absolutePath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function validateTranslations(relativePath, absolutePath, html, textContext) {
  const commentFreeHtml = stripHtmlComments(html);
  const translationsScripts = new Set();

  for (const tag of extractTags(commentFreeHtml, 'script', textContext)) {
    const attributes = parseAttributes(tag.markup);
    if (!attributes.src) {
      continue;
    }

    const localPath = localRelativePath(attributes.src);
    if (!localPath || !/translations\.js$/i.test(localPath)) {
      continue;
    }

    const resolved = resolveLocalReference(attributes.src, absolutePath);
    if (!resolved) {
      continue;
    }

    translationsScripts.add(resolved.absolutePath);
  }

  for (const translationsPath of translationsScripts) {
    if (!fs.existsSync(translationsPath)) {
      continue;
    }
    validateTranslationsFile(translationsPath);
  }
}

function validateTranslationsFile(absolutePath) {
  const normalizedPath = path.resolve(absolutePath);
  if (reportedTranslationFiles.has(normalizedPath)) {
    return;
  }
  reportedTranslationFiles.add(normalizedPath);
  translationCount.validated += 1;

  const translationsRelative = toPosix(path.relative(repoRoot, normalizedPath));
  const cachedIssues = loadAndValidateTranslations(normalizedPath);
  for (const issue of cachedIssues) {
    addIssue(translationsRelative, issue.message, issue.lines);
  }
}

function loadAndValidateTranslations(absolutePath) {
  const cached = translationsCache.get(absolutePath);
  if (cached) {
    return cached;
  }

  const fileIssues = [];
  const source = fs.readFileSync(absolutePath, 'utf8');
  const textContext = createTextContext(source);
  const sandbox = {};

  try {
    vm.runInNewContext(source, sandbox, { filename: absolutePath });
  } catch (error) {
    fileIssues.push({ message: `could not be evaluated (${error.message})`, lines: [] });
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  const trans = sandbox.trans;
  if (!trans || typeof trans !== 'object') {
    fileIssues.push({ message: 'does not define `trans`.', lines: [] });
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  if (!Array.isArray(trans.versions)) {
    fileIssues.push({
      message: '`trans.versions` is missing or is not an array.',
      lines: collectLineNumbers(findLineNumber(source, textContext, /\btrans\.versions\b/)),
    });
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  const versions = new Set(trans.versions.map((value) => String(value)));
  for (const [key, value] of Object.entries(trans)) {
    if (!key.endsWith('translations') || key === 'versions') {
      continue;
    }

    if (!Array.isArray(value)) {
      fileIssues.push({
        message: `\`trans.${key}\` is not an array.`,
        lines: collectLineNumbers(
          findLineNumber(source, textContext, new RegExp(`\\btrans\\.${escapeRegExp(key)}\\b`))
        ),
      });
      continue;
    }

    if (key === 'unlinkedtranslations') {
      continue;
    }

    const extras = value.filter((entry) => !versions.has(String(entry)));
    if (extras.length > 0) {
      fileIssues.push({
        message: `\`trans.${key}\` contains values not listed in \`trans.versions\`: ${extras
          .map((entry) => `\`${entry}\``)
          .join(', ')}.`,
        lines: collectLineNumbers(
          findLineNumber(source, textContext, new RegExp(`\\btrans\\.${escapeRegExp(key)}\\b`))
        ),
      });
    }
  }

  translationsCache.set(absolutePath, fileIssues);
  return fileIssues;
}

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, (comment) => comment.replace(/[^\r\n]/g, ' '));
}

function extractTags(html, tagName, textContext) {
  const matches = [];
  const regex = new RegExp(`<${tagName}\\b[^>]*>`, 'gi');
  let match;

  while ((match = regex.exec(html)) !== null) {
    matches.push({
      markup: match[0],
      line: textContext ? textContext.lineNumberAt(match.index) : null,
    });
  }

  return matches;
}

function parseAttributes(tagMarkup) {
  const attributes = {};
  const regex = /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let match;
  while ((match = regex.exec(tagMarkup)) !== null) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    attributes[key] = value;
  }
  return attributes;
}

function resolveLocalReference(reference, pagePath) {
  const cleaned = cleanReference(reference);
  if (!cleaned) {
    return null;
  }

  if (cleaned.startsWith('/International/')) {
    return null;
  }

  const localPath = localRelativePath(reference);
  if (!localPath) {
    return null;
  }

  if (localPath.startsWith('/')) {
    const absolutePath = path.join(repoRoot, localPath.slice(1));
    return {
      absolutePath,
      relativePath: toPosix(path.relative(repoRoot, absolutePath)),
    };
  }

  const absolutePath = path.resolve(path.dirname(pagePath), localPath);
  return {
    absolutePath,
    relativePath: toPosix(path.relative(repoRoot, absolutePath)),
  };
}

function localRelativePath(reference) {
  const cleaned = cleanReference(reference);
  if (!cleaned) {
    return null;
  }

  if (/^(?:https?:)?\/\//i.test(cleaned)) {
    return null;
  }

  if (/^(?:data|mailto|javascript|tel):/i.test(cleaned)) {
    return null;
  }

  if (cleaned.startsWith('/International/')) {
    return null;
  }

  if (cleaned.startsWith('/')) {
    return null;
  }

  return decodeReferencePath(cleaned);
}

function cleanReference(reference) {
  const trimmed = reference.trim();
  if (!trimmed || trimmed.startsWith('#')) {
    return null;
  }

  const cleaned = trimmed.split('#')[0].split('?')[0];
  return cleaned || null;
}

function decodeReferencePath(referencePath) {
  try {
    return decodeURI(referencePath);
  } catch {
    return referencePath;
  }
}

function decodeReferenceFragment(fragment) {
  try {
    return decodeURIComponent(fragment);
  } catch {
    return fragment;
  }
}

function addIssue(relativePath, message, lines) {
  issues.push({ relativePath, message, lines: collectLineNumbers(lines) });
}

function groupByFile(fileIssues) {
  const grouped = new Map();
  const sorted = [...fileIssues].sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  for (const issue of sorted) {
    const bucket = grouped.get(issue.relativePath) || [];
    bucket.push(issue);
    grouped.set(issue.relativePath, bucket);
  }
  return grouped;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function isWithinRepo(absolutePath) {
  const relativePath = path.relative(repoRoot, absolutePath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function displayPathFor(requestedPath, absolutePath) {
  const relativePath = path.relative(repoRoot, absolutePath);
  if (relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath))) {
    return toPosix(relativePath || requestedPath);
  }
  return toPosix(requestedPath);
}

function createTextContext(source) {
  const lineStarts = [0];
  for (let index = 0; index < source.length; index += 1) {
    if (source[index] === '\n') {
      lineStarts.push(index + 1);
    }
  }

  return {
    lineNumberAt(index) {
      if (!Number.isInteger(index) || index < 0) {
        return null;
      }

      let low = 0;
      let high = lineStarts.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (lineStarts[mid] <= index) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      return high + 1;
    },
  };
}

function collectLineNumbers(...values) {
  return [...new Set(values.flat().filter((value) => Number.isInteger(value) && value > 0))].sort(
    (a, b) => a - b
  );
}

function findLineNumber(source, textContext, regex) {
  const match = regex.exec(source);
  return match ? textContext.lineNumberAt(match.index) : null;
}

function formatIssue(issue) {
  const location = formatIssueLocation(issue.lines);
  return location ? `${location}: ${issue.message}` : issue.message;
}

function formatIssueLocation(lines) {
  if (!lines || lines.length === 0) {
    return '';
  }

  if (lines.length === 1) {
    return `line ${lines[0]}`;
  }

  return `lines ${lines.join(', ')}`;
}

function formatToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
