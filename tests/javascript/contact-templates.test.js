const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const templatePath = path.resolve(__dirname, '../../javascript/templates/contact-templates.js');

function loadTemplates() {
  const source = fs.readFileSync(templatePath, 'utf8');
  const targets = new Map();
  const sandbox = {
    document: {
      getElementById(id) {
        return targets.get(id) || null;
      },
    },
  };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: templatePath });

  return {
    contactTemplates: sandbox.contactTemplates,
    targets,
  };
}

test('defines the expected contact variants', () => {
  const { contactTemplates } = loadTemplates();

  assert.ok(contactTemplates);
  assert.deepEqual(Object.keys(contactTemplates.variants).sort(), [
    'about-en',
    'about-zh-hans',
    'languagedev-en',
    'languagedev-zh-hans',
    'legacy-en',
    'participation-en',
    'participation-zh-hans',
  ]);
});

test('renders requested English and Chinese variants into the target element', () => {
  const { contactTemplates, targets } = loadTemplates();
  const target = { innerHTML: '' };
  targets.set('contactList', target);

  contactTemplates.render('contactList', 'about-en');
  assert.match(target.innerHTML, /Addison Phillips/);
  assert.match(target.innerHTML, /Activity Lead; Staff Contact for Core Working Group/);

  contactTemplates.render('contactList', 'participation-zh-hans');
  assert.match(target.innerHTML, /薛富侨/);
  assert.match(target.innerHTML, /国际化专家/);
});

test('ignores missing targets and unknown variants', () => {
  const { contactTemplates, targets } = loadTemplates();

  assert.doesNotThrow(() => contactTemplates.render('missing', 'about-en'));

  const target = { innerHTML: '' };
  targets.set('contactList', target);
  contactTemplates.render('contactList', 'unknown-variant');

  assert.equal(target.innerHTML, '');
});
