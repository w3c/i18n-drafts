#!/usr/bin/env node

'use strict';

const { spawnSync } = require('node:child_process');
const path = require('node:path');

const {
  findSingleLanguageWarnings,
  emitLanguageCoverageWarnings,
} = require('./pr-language-coverage-warning');

const repoRoot = path.resolve(__dirname, '..');
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

const cli = parseArguments(process.argv.slice(2));

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

const changedFiles = getChangedFiles(cli).filter(isRelevantPath);
const isPullRequest = process.env.GITHUB_EVENT_NAME === 'pull_request';

if (isPullRequest) {
  const warnings = findSingleLanguageWarnings({
    repoRoot,
    changedFiles,
  });

  emitLanguageCoverageWarnings({
    warnings,
    summaryPath: process.env.GITHUB_STEP_SUMMARY || '',
  });
}

if (changedFiles.length === 0) {
  console.log('No changed content HTML or translations.js files to validate.');
  process.exit(0);
}

console.log(`Validating ${changedFiles.length} changed file(s):`);
for (const file of changedFiles) {
  console.log(`- ${file}`);
}

const validateResult = spawnSync(
  process.execPath,
  [path.join(repoRoot, 'scripts', 'validate-content.js'), '--files', ...changedFiles],
  {
    cwd: repoRoot,
    stdio: 'inherit',
  }
);

if (typeof validateResult.status === 'number') {
  process.exit(validateResult.status);
}

if (validateResult.error) {
  console.error(validateResult.error.message);
}

process.exit(1);

function parseArguments(args) {
  const options = {
    base: 'HEAD^',
    head: 'HEAD',
    staged: false,
    help: false,
    errors: [],
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
      return options;
    }

    if (arg === '--staged') {
      options.staged = true;
      continue;
    }

    if (arg === '--base') {
      index += 1;
      if (index >= args.length) {
        options.errors.push('`--base` requires a revision value.');
        break;
      }
      options.base = args[index];
      continue;
    }

    if (arg.startsWith('--base=')) {
      options.base = arg.slice('--base='.length);
      if (!options.base) options.errors.push('`--base` requires a revision value.');
      continue;
    }

    if (arg === '--head') {
      index += 1;
      if (index >= args.length) {
        options.errors.push('`--head` requires a revision value.');
        break;
      }
      options.head = args[index];
      continue;
    }

    if (arg.startsWith('--head=')) {
      options.head = arg.slice('--head='.length);
      if (!options.head) options.errors.push('`--head` requires a revision value.');
      continue;
    }

    options.errors.push(`Unknown argument \`${arg}\`.`);
  }

  if (options.staged && hasExplicitRange(args)) {
    options.errors.push('`--staged` cannot be combined with `--base` or `--head`.');
  }

  return options;
}

function hasExplicitRange(args) {
  return args.some((arg) => arg === '--base' || arg.startsWith('--base=') || arg === '--head' || arg.startsWith('--head='));
}

function printUsage() {
  console.error('Usage: node scripts/validate-changed-files.js [--base <rev>] [--head <rev>]');
  console.error('       node scripts/validate-changed-files.js --staged');
}

function getChangedFiles(cli) {
  const args = cli.staged
    ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']
    : ['diff', '--name-only', '--diff-filter=ACMR', '-z', cli.base, cli.head];

  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    if (result.stderr) {
      process.stderr.write(result.stderr);
    }
    process.exit(result.status || 1);
  }

  return result.stdout
    .split('\0')
    .map((file) => normalizeToPosix(file))
    .filter(Boolean);
}

function isRelevantPath(file) {
  const normalized = file.replace(/^\.\/+/, '');
  const segments = normalized.split('/');
  const root = segments[0];

  if (!contentRoots.has(root)) {
    return false;
  }

  if (normalized.endsWith('.html')) {
    return true;
  }

  return path.posix.basename(normalized) === 'translations.js';
}

function normalizeToPosix(file) {
  return file.split(path.sep).join('/');
}
