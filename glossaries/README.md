# Translator glossaries

This directory stores per-language glossaries that translators can use to keep recurring terminology consistent across pages in this repository.

## Active glossaries

- [Simplified Chinese](zh-hans.md)

## File naming

- Keep one glossary file per target language.
- Use the same lowercase language-tag style already used in repo filenames, such as `zh-hans`, `ja`, or `pt-br`.
- Name each glossary file `glossaries/<lang>.md`.
- Only create a language file when there is an active translator or reviewer ready to maintain it.

## How to create a new glossary

1. Copy `glossaries/_template.md` to `glossaries/<lang>.md`.
2. Replace the placeholder title and guidance text.
3. Write the glossary's headings, guidance, notes, and non-English columns in the target language. Keep the English term column in English.
4. Add terms to the tables below using one row per English term sense.
5. Keep notes short so the file stays readable and can be parsed later if needed.

## Required sections in each language glossary

Each `glossaries/<lang>.md` file should contain these sections, written in the target language:

1. A title for the language glossary
2. A short "How to use this glossary" section
3. A preferred terms table
4. A terms under discussion table

## Entry rules

If a term is not settled yet, add it to `## Terms under discussion` instead of forcing a final answer.

## Pull request workflow

- Check the glossary before translating or reviewing a page.
- If a PR introduces a new recurring term, update the glossary in the same PR.
- If a PR intentionally deviates from a `preferred` term for contextual reasons, explain that in a short `Glossary notes` section in the PR description or review thread.
- When a disputed term is resolved, move it from `## Terms under discussion` to `## Preferred terms`.

## Future automation

The structure in this directory is intentionally strict so the project can later add validation or export without changing the authoring model.
