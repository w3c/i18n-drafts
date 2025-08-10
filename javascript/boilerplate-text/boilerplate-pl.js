// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""

// TRANSLATE THE FOLLOWING
// but do not translate anything inside ${...} – but do move those items where needed to fit the syntax of the translation


// used when changing the language of the page
// do not translate the abbreviation at the start of the line, just translate the language name

s.currLang = {
  'ar':'Arabski',
  'bg':'Bułgarski',
  'da':'Duński',
  'de':'Niemiecki',
  'el':'Grecki',
  'en':'Angielski',
  'es':'Hiszpański',
  'fr':'Francuski',
  'gl':'Galicyjski',
  'he':'Hebrajski',
  'hi':'Hindi',
  'hu':'Węgierski',
  'it':'Włoski',
  'ja':'Japoński',
  'ko':'Koreański',
  'nl':'Niderlandzki',
  'pes':'Perski',
  'pl':'Polski',
  'pt':'Portugalski',
  'pt-br':'Portugalski',
  'ro':'Rumuński',
  'ru':'Rosyjski',
  'sv':'Szwedzki',
  'th':'Tajski',
  'tr':'Turecki',
  'uk':'Ukraiński',
  'vi':'Wietnamski',
  'zh-hans':'Chiński (uproszczony)',
  'zh-hant':'Chiński (tradycyjny)'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Jeśli pozwolisz przeglądarce ustawić plik cookie będziesz kontynuować przeglądanie (tam gdzie to możliwe) stron Internaconalizacji W3C w języku, który wybierzesz. Czy chcesz ustawić plik cookie?"

// items in top right beige column
s.worldMap = "Mapa świata"  // title text for image, top right
s.searchI18nSite = "Wyszukiwanie na stronie I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Ten document jest tłumaczeniem zapewnionym przez wolontariusza. W przypadku nieścisłości lubbłędów <a href="${ f.filename }.en">ostatni angielski oryginał</a> powinien być brany pod uwagę.<a href="#copyright">Oryginalne prawa autorskie</a> Należą do W3C, jak wskazano poniżej.`  // text appears only on translated pages

s.articles = "Artykuły" // used in breadcrumbs, top right of page
s.tests="Testy" // used at the end of breadcrumbs for test related pages
s.home = "Strona Główna" // start of breadcrumbs
s.onThisPage = "Na tej stronie"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="O tym artykule" // title in the right column near the top of the page
s.status_draft="Ten artykuł to szkic, który nie był jeszcze podany publicznej ocenie. Jeśli masz jakieś uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_review="Artykuł podlega obecnie publicznej ocenie. Jeśli masz jakieś uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_published="Ten artykuł został oceniony przez Grupę Internacjonalizacji W3C i był poddany publicznej ocenie w cell zachowania najwyższej jakości. Jeśli masz jakieś uwagi wyślij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_notreviewed="Ten artykuł został opublikowany bez publicznej oceny. Jeśli masz jakieś uwagi wyślij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_obsolete="Ten artykuł jest już przestarzały. Nie jest już aktualizowany i może zawierać błędy. Aby uzyskać bardziej aktualne informacje zobacz <a href='http://www.w3.org/International/'>stronę główną internacjonalizacji</a>."


// top left of page
s.gotoW3cHome = "Przejdź do Strony Głównej W3C"  // title text for W3C logo
s.gotoI18nHome = "Przejdź do Strony Głównej Działalności Internacjonalizacji" // title text for i18n banner
s.internationalizationTitle = "Internacjonalizacja"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Techniki"  // site links link text, top left
s.taskBasedIndex = "Spis technik i18n."  // title text for s.techniques
s.resources = "Źródła"  // site links link text, top left
s.informationResources = "Źródła informacyjne na stronach Internacjonalizacji."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Wiadomości"  // site links link text, top left
s.newsFiltersAndFeeds = "Informacje na temat filtrów wiadomości i przesyłek RSS do Internacjonalizacji."  // title text for s.news
s.groups = "Grupy" // site links link text, top left
s.groupsThatMakeUp = "Grupy, które tworzą Działalność Internacjonalizacji." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Potencjalni odbiorcy:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Powiedz nam co myślisz (po angielsku)."  // text content
s.sendAComment = "Wyślij komentarz" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Autor: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Zmodyfikowano przez: " // person's name appears after colon
s.translatedBy = "Tłumacz: " // person's name appears after colon
s.acknowledgements = "Dziękujemy także osobom, które wniosły wkład: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Angielska wersja dokumentu z dnia ${ dt.enVersion }. Tłumaczenie wykonano dnia ${ dt.thisVersionPlain } GMT`
s.translation_updated="Tłumaczenie uaktualnione:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Aby przesledzić historię zmian dokumentu zobacz <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">kanał wiadomości</a> dla większych zmian, oraz <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }..en.html">listę na Github</a> dla wszystkich zmian od stycznia 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Uwaga:</strong> Wprowadzono zmiany do <a href="${ f.filename }.en">angielskiego oryginału</a> od kiedy dokument został przetłumaczony. Zmiany zostały tu wpisane dlatego możesz widzieć fragmenty w języku angielskim dopóki nie uaktualnimy tłumaczenia.`
s.unlinkedTranslation = `<strong>Uwaga:</strong> Wprowadzono istotne zmiany do dokumentu po wykonaniu tłumaczenia. Doradza się przeczytanie <a href="${ f.filename }.en">angielskiej wersji</a> dopóki tłumaczenie nie zostanie zaktualizowane.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Nowość"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Nowa wersja" // same as New


// strings to promote consistency in article content
s.question = "Pytania"  // heading
s.questionAlt = "Pytania"  // title text for s.question
s.questionLink = "Pytania"  // 
s.skipToAnswer = "[Przejdź do odpowiedzi]"  // link text
s.background = "Tło informacyjne" // heading
s.backgroundAlt = "Informacje wyjaśniające" // title text for s.background
s.backgroundLink = "Tło informacyjne"
s.answer = "Odpowiedź" // heading
s.answerAlt = "Odpowiedź" // title text for s.answer
s.answerLink = "Odpowiedź"
s.byTheWay = "Dodatkowe informacje" // heading
s.byTheWayAlt = "Dodatkowe informacje" // title text for s.byTheWay
s.byTheWayLink = "Dodatkowe informacje"
s.furtherReading = "Warto przeczytać" // heading
s.furtherReadingAlt = "Warto przeczytać" // title text for s.byTheWay
s.furtherReadingLink = "Warto przeczytać"
s.quickanswer = "Krótka odpowiedź" // heading
s.longeranswer = "Szczegóły" // heading that follows 'Quick answer'
s.additionalinfo = "Dodatkowe informacje" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Prenumeruj kanał RSS."  
s.newResourcesAlt = "Poinformuje Państwa za każdym razem kiedy nowe źródło jest dostępne."
s.newResources = "Nowe źródła"
s.homePageNewsAlt = "Wszystkie wiadomości ze strony głównej."
s.homePageNews = "Wiadomość ze strony głównej"
s.followOurNews = "Śledź nasz kanał wiadomości."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Ważny XHTML 1.0!"
s.validCSS = "Ważne CSS!"
s.codedInUtf8 = "Zakodowano w UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Strona Główna Działalności I18N"
s.moreResourcesOfThisType = "Więcej źródeł tego typu."
s.accessKeyN = `Klucz dostępu n przeskakuje w nawigacji strony. <a href="#contentstart">Przejdź do początku.</a>`
s.examplesInAnotherScript = "Dokument ten zawiera przykłady w innym języku/skrypcie."
s.relatedLinks = "Linki Pokrewne"
s.techIndexText = "Spis technik"
s.topicIndexText = "Spis tematów"
s.i18nActivityHomePage = "Strona Główna Działalności Internacjonalizacji."
s.topicIndexForInformation = "Spis tematów na temat informacji na tej witrynie."
s.topics = "Tematy"



/*

MISSING TRANSLATIONS

check all top left links !

worldwide
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
author
previousAuthors
acknowledgements
githubRedirect




*/