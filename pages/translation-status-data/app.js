(function () {
  'use strict';

  var data = window.translationStatus;
  if (!data || !Array.isArray(data.pages)) {
    return;
  }

  // Pages that are not ready to be translated are left out of the lists.
  var READY_STATUSES = ['published', 'notreviewed'];
  var pages = data.pages.filter(function (page) {
    return READY_STATUSES.indexOf(page.status) !== -1;
  });

  var TYPE_ORDER = [
    'Article',
    'Tutorial',
    'Question',
    'Technique',
    'Getting started',
    'Quick tip',
    'Page',
    'Site page',
  ];

  var LANGUAGE_NAMES = window.g && g.nativeText ? g.nativeText : {};
  var languages = Object.keys(LANGUAGE_NAMES)
    .filter(function (code) {
      return code !== 'en';
    })
    .map(function (code) {
      return { code: code, name: decodeText(LANGUAGE_NAMES[code]) };
    });

  // A translation may exist for a language that the page templates don't list yet.
  var knownLanguages = new Set(
    languages.map(function (language) {
      return language.code;
    })
  );
  data.pages.forEach(function (page) {
    Object.keys(page.translated || {}).forEach(function (code) {
      if (!knownLanguages.has(code)) {
        knownLanguages.add(code);
        languages.push({ code: code, name: code });
      }
    });
  });

  var select = document.getElementById('tstatus-language');
  var summary = document.getElementById('tstatus-summary');
  var updatesContainer = document.getElementById('tstatus-updates');
  var missingContainer = document.getElementById('tstatus-missing');
  var coverageContainer = document.getElementById('tstatus-coverage');
  var generatedNote = document.getElementById('tstatus-generated');

  var state = { language: '' };

  if (!select || !summary || !updatesContainer || !missingContainer || !coverageContainer) {
    return;
  }

  fillLanguagePicker();
  renderCoverage();
  showGeneratedDate();

  var initialLanguage = languageFromUrl() || languageFromCookie() || languageFromBrowser();
  if (initialLanguage) {
    state.language = initialLanguage;
    select.value = initialLanguage;
  }
  render();

  select.addEventListener('change', function () {
    state.language = select.value;
    updateUrl();
    render();
  });

  coverageContainer.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-language]');
    if (!link) {
      return;
    }
    event.preventDefault();
    state.language = link.getAttribute('data-language');
    select.value = state.language;
    updateUrl();
    render();
    summary.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------------------------------------------------------------------------

  function fillLanguagePicker() {
    languages.forEach(function (language) {
      var stats = statsFor(language.code);
      var option = document.createElement('option');
      option.value = language.code;
      option.textContent =
        language.name + ' — ' + stats.translated + ' of ' + pages.length + ' pages translated';
      select.appendChild(option);
    });
  }

  function render() {
    var language = state.language;
    var languageName = nameOf(language);

    if (!language) {
      summary.textContent = 'Choose a language to see which pages need translating.';
      updatesContainer.textContent = '';
      missingContainer.textContent = '';
      return;
    }

    var stats = statsFor(language);

    summary.textContent =
      languageName +
      ': ' +
      stats.translated +
      ' of ' +
      pages.length +
      ' pages translated (' +
      stats.updates +
      ' may need updating), ' +
      stats.missing +
      ' not yet translated.';

    renderUpdates(language);
    renderMissing(language);
  }

  function renderUpdates(language) {
    var rows = [];

    pages.forEach(function (page) {
      var translation = page.translated && page.translated[language];
      if (!translation) {
        return;
      }

      var reason = updateReason(page, language);
      if (!reason) {
        return;
      }

      rows.push({ page: page, translation: translation, reason: reason });
    });

    rows.sort(function (left, right) {
      if (left.reason !== right.reason) {
        return left.reason === 'flagged' ? -1 : 1;
      }
      return (left.translation.updated || '').localeCompare(right.translation.updated || '');
    });

    updatesContainer.textContent = '';

    if (rows.length === 0) {
      updatesContainer.appendChild(
        note('No translations for this language are currently listed as needing an update.')
      );
      return;
    }

    var table = createTable(['Page', 'Translation last edited', 'English last updated', 'Why']);
    var tbody = table.tBodies[0];

    rows.forEach(function (row) {
      var tr = document.createElement('tr');
      tr.appendChild(pageCell(row.page, row.translation.href));
      tr.appendChild(dateCell(row.translation.updated));
      tr.appendChild(dateCell(row.page.updated));
      tr.appendChild(
        cell(
          row.reason === 'flagged'
            ? 'Flagged as out of date'
            : 'English source changed since the translation was edited'
        )
      );
      tbody.appendChild(tr);
    });

    updatesContainer.appendChild(scrollable(table));
  }

  function renderMissing(language) {
    var groups = new Map();

    pages.forEach(function (page) {
      if (page.translated && page.translated[language]) {
        return;
      }
      if (!groups.has(page.type)) {
        groups.set(page.type, []);
      }
      groups.get(page.type).push(page);
    });

    missingContainer.textContent = '';

    if (groups.size === 0) {
      missingContainer.appendChild(
        note('Every listed page has been translated into ' + nameOf(language) + '.')
      );
      return;
    }

    sortedTypes(groups).forEach(function (type) {
      var typePages = groups.get(type).sort(function (left, right) {
        return left.title.localeCompare(right.title);
      });

      var heading = document.createElement('h3');
      heading.textContent = type + ' (' + typePages.length + ')';
      missingContainer.appendChild(heading);

      var table = createTable(['Page', 'English last updated']);
      var tbody = table.tBodies[0];

      typePages.forEach(function (page) {
        var tr = document.createElement('tr');
        var archived = page.archived && page.archived[language];
        tr.appendChild(pageCell(page, page.href, archived ? 'archived translation exists' : ''));
        tr.appendChild(dateCell(page.updated));
        tbody.appendChild(tr);
      });

      missingContainer.appendChild(scrollable(table));
    });
  }

  function renderCoverage() {
    coverageContainer.textContent = '';

    var table = createTable(['Language', 'Translated', 'May need updating', 'Not translated']);
    var thead = table.tHead;
    table.classList.add('tstatus-coverage');

    for (var index = 1; index < thead.rows[0].cells.length; index += 1) {
      thead.rows[0].cells[index].className = 'tstatus-number';
    }

    var tbody = table.tBodies[0];
    var rows = languages
      .map(function (language) {
        return { language: language, stats: statsFor(language.code) };
      })
      .sort(function (left, right) {
        return (
          right.stats.translated - left.stats.translated ||
          left.language.name.localeCompare(right.language.name)
        );
      });

    rows.forEach(function (row) {
      var tr = document.createElement('tr');

      var nameCell = document.createElement('td');
      var link = document.createElement('a');
      link.href = '?lang=' + encodeURIComponent(row.language.code);
      link.setAttribute('data-language', row.language.code);
      link.lang = row.language.code;
      link.dir = 'auto';
      link.textContent = row.language.name;
      nameCell.appendChild(link);
      tr.appendChild(nameCell);

      [row.stats.translated, row.stats.updates, row.stats.missing].forEach(function (value) {
        var numberCell = cell(String(value));
        numberCell.className = 'tstatus-number';
        tr.appendChild(numberCell);
      });

      tbody.appendChild(tr);
    });

    coverageContainer.appendChild(scrollable(table));
  }

  function showGeneratedDate() {
    if (!generatedNote) {
      return;
    }

    var generated = data.generated || '';
    generatedNote.textContent =
      'This list was generated from the i18n-drafts repository on ' + generated + '.';
  }

  // ---------------------------------------------------------------------------

  function statsFor(language) {
    var stats = { translated: 0, updates: 0, missing: 0 };

    pages.forEach(function (page) {
      if (page.translated && page.translated[language]) {
        stats.translated += 1;
        if (updateReason(page, language)) {
          stats.updates += 1;
        }
      } else {
        stats.missing += 1;
      }
    });

    return stats;
  }

  function updateReason(page, language) {
    var translation = page.translated && page.translated[language];
    if (!translation) {
      return '';
    }

    if (page.outOfDate && page.outOfDate.indexOf(language) !== -1) {
      return 'flagged';
    }

    if (page.updated && translation.updated && translation.updated < page.updated) {
      return 'changed';
    }

    return '';
  }

  function sortedTypes(groups) {
    return Array.from(groups.keys()).sort(function (left, right) {
      var leftIndex = TYPE_ORDER.indexOf(left);
      var rightIndex = TYPE_ORDER.indexOf(right);
      if (leftIndex === -1) {
        leftIndex = TYPE_ORDER.length;
      }
      if (rightIndex === -1) {
        rightIndex = TYPE_ORDER.length;
      }
      return leftIndex - rightIndex || left.localeCompare(right);
    });
  }

  function createTable(headers) {
    var table = document.createElement('table');
    table.className = 'tstatus-table';

    var thead = document.createElement('thead');
    var headRow = document.createElement('tr');
    headers.forEach(function (header) {
      var th = document.createElement('th');
      th.scope = 'col';
      th.textContent = header;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    table.appendChild(document.createElement('tbody'));

    return table;
  }

  function scrollable(table) {
    var wrapper = document.createElement('div');
    wrapper.className = 'tstatus-scroll';
    wrapper.appendChild(table);
    return wrapper;
  }

  function pageCell(page, href, extra) {
    var td = document.createElement('td');
    var link = document.createElement('a');
    link.href = href;
    link.textContent = page.title || page.id;
    td.appendChild(link);

    if (href !== page.href) {
      td.appendChild(document.createTextNode(' '));
      var source = document.createElement('a');
      source.className = 'tstatus-source';
      source.href = page.href;
      source.textContent = 'English source';
      td.appendChild(source);
    }

    if (extra) {
      td.appendChild(document.createTextNode(' '));
      var badge = document.createElement('span');
      badge.className = 'tstatus-badge';
      badge.textContent = extra;
      td.appendChild(badge);
    }

    return td;
  }

  function dateCell(date) {
    var td = document.createElement('td');
    if (!date) {
      td.textContent = '—';
      return td;
    }

    var time = document.createElement('time');
    time.dateTime = date;
    time.textContent = date;
    td.appendChild(time);
    return td;
  }

  function cell(text) {
    var td = document.createElement('td');
    td.textContent = text;
    return td;
  }

  function note(text) {
    var paragraph = document.createElement('p');
    paragraph.className = 'tstatus-empty';
    paragraph.textContent = text;
    return paragraph;
  }

  // ---------------------------------------------------------------------------

  function nameOf(language) {
    var match = languages.filter(function (item) {
      return item.code === language;
    })[0];
    return match ? match.name : language;
  }

  function languageFromUrl() {
    var match = window.location.search.match(/[?&]lang=([^&]+)/);
    if (!match) {
      return '';
    }

    var requested = decodeURIComponent(match[1]).toLowerCase();
    return isOffered(requested) ? requested : '';
  }

  function languageFromCookie() {
    var match = document.cookie.match(/(?:^|;\s*)w3ci18nlang=([^;]+)/);
    if (!match) {
      return '';
    }

    var requested = decodeURIComponent(match[1]).toLowerCase();
    return isOffered(requested) ? requested : '';
  }

  function languageFromBrowser() {
    var requested = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    if (!requested) {
      return '';
    }

    requested = String(requested).toLowerCase();

    var candidates = [requested, requested.split('-')[0]];
    candidates.push(regionalCandidate(requested));

    for (var index = 0; index < candidates.length; index += 1) {
      if (candidates[index] && isOffered(candidates[index])) {
        return candidates[index];
      }
    }

    return '';
  }

  function regionalCandidate(requested) {
    if (requested === 'zh' || /^zh-(cn|sg|my)$/.test(requested)) {
      return 'zh-hans';
    }
    if (/^zh-(tw|hk|mo)$/.test(requested)) {
      return 'zh-hant';
    }
    if (/^zh-(hans|hant)\b/.test(requested)) {
      return requested.indexOf('hant') !== -1 ? 'zh-hant' : 'zh-hans';
    }
    if (requested === 'pt' || requested === 'pt-br' || /^pt-/.test(requested)) {
      return requested === 'pt-br' ? 'pt-br' : 'pt';
    }
    if (/^(fa|pes)$/.test(requested)) {
      return 'pes';
    }
    if (requested === 'iw') {
      return 'he';
    }
    return '';
  }

  function isOffered(language) {
    return languages.some(function (item) {
      return item.code === language;
    });
  }

  function updateUrl() {
    try {
      var url = state.language ? '?lang=' + encodeURIComponent(state.language) : window.location.pathname;
      window.history.replaceState(null, '', url);
    } catch (error) {
      // Ignore browsers that refuse the change, such as file:// views.
    }
  }

  function decodeText(text) {
    return String(text).replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, function (entity, body) {
      if (body[0] === '#') {
        var isHex = body[1] === 'x' || body[1] === 'X';
        var code = parseInt(isHex ? body.slice(2) : body.slice(1), isHex ? 16 : 10);
        return isNaN(code) ? entity : String.fromCodePoint(code);
      }
      var named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
      return named[body.toLowerCase()] || entity;
    });
  }
})();
