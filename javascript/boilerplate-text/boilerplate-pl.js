// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabski',
  'bg':'Bułgarski',
  'da':'Duński',
  'de':'Niemiecki',
  'el':'Grecki',
  'en':'Angielski',
  'es':'Hiszpański',
  'fr':'Francuski',
  'he':'Hebrajski',
  'hi':'Hindi',
  'hu':'Węgierski',
  'it':'Włoski',
  'ja':'Japoński',
  'ko':'Koreański',
  'nl':'Niderlandzki',
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
  'zh-hant':'Chiński (tradycyjny)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Strona Główna Działalności I18N"
s.moreResourcesOfThisType = "Więcej źródeł tego typu."
s.accessKeyN = 'Klucz dostępu n przeskakuje w nawigacji strony. <a href="#contentstart">Przejdź do początku.</a>'
s.examplesInAnotherScript = "Dokument ten zawiera przykłady w innym języku/skrypcie."
s.worldMap = "Mapa świata"
s.searchI18nSite = "Wyszukiwanie na stronie I18n" 
s.translationDisclaimer = 'Ten dokument jest tłumaczeniem. W przypadku rozbieżności i błędów <a href="'+f.filename+'.en">aktualna wersja angielska</a> powinna być uznana za autorytatywną. <a href="#copyright">Pierwotne prawa autorskie</a> należą do W3C jak wykazano poniżej.'
s.translator = "Tłumacz:"
s.relatedLinks = "Linki Pokrewne"
s.articles = "Artykuły" // used in breadcrumbs, top right of page 
s.topicIndexText = "Spis tematów"
s.techIndexText = "Spis technik"
s.gotoW3cHome = "Przejdź do Strony Głównej W3C"
s.gotoI18nHome = "Przejdź do Strony Głównej Działalności Internacjonalizacji"
s.internationalizationTitle = "Internacjonalizacja"
s.i18nActivityHomePage = "Strona Główna Działalności Internacjonalizacji."
s.home = "Strona Główna"
s.aboutI18nActivity = "O Działalności Internacjonalizacji."
s.about = "O nas"
s.groupsThatMakeUp = "Grupy, które tworzą Działalność Internacjonalizacji."
s.groups = "Grupy"
s.topicIndexForInformation = "Spis tematów na temat informacji na tej witrynie."
s.topics = "Tematy"
s.taskBasedIndex = "Spis technik i18n."
s.techniques = "Techniki"
s.informationResources = "Źródła informacyjne na stronach Internacjonalizacji."
s.resources = "Źródła"
s.newsFiltersAndFeeds = "Informacje na temat filtrów wiadomości i przesyłek RSS do Internacjonalizacji."
s.news = "Wiadomości"
s.onThisPage = "Na tej stronie"
s.questionAlt = "Pytania"
s.questionLink = "Pytania"
s.question = "Pytania"
s.backgroundAlt = "Informacje wyjaśniające"
s.backgroundLink = "Tło informacyjne"
s.background = "Tło informacyjne"
s.answer = "Odpowiedź" // heading
s.answerAlt = "Odpowiedź"
s.answerLink = "Odpowiedź"
s.byTheWayAlt = "Dodadkowe informacje"
s.byTheWayLink = "Dodadkowe informacje"
s.byTheWay = "Dodadkowe informacje"
s.furtherReadingAlt = "Warto przeczytać"
s.furtherReadingLink = "Warto przeczytać"
s.furtherReading = "Warto przeczytać"
s.intendedAudience = "Potencjalni odbiorcy:"
s.skipToAnswer = "[Przejdź do odpowiedzi]"
s.tellUsWhatYouThink = "Powiedz nam co myślisz (po angielsku)."
s.sendAComment = "Wyślij komentarz"
s.subscribeToRSS = "Prenumeruj kanał RSS."
s.newResourcesAlt = "Poinformuje Państwa za każdym razem kiedy nowe źródło jest dostępne."
s.newResources = "Nowe źródła"
s.homePageNewsAlt = "Wszystkie wiadomości ze strony głównej."
s.homePageNews = "Wiadomość ze strony głównej"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Zmodyfikowano przez:" // person's name appears after colon
s.translatedBy = "Tłumacz:"
s.validXHTML = "Ważny XHTML 1.0!"
s.validCSS = "Ważne CSS!"
s.codedInUtf8 = "Zakodowano w UTF-8!"

s.translatedFromEnglishVer = "Angielska wersja dokumentu z dnia "+dt.enVersion+". Tłumaczenie wykonano dnia "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Uwaga:</strong> Wprowadzono zmiany do <a href="'+f.filename+'.en">oryginalnej wersji angielskiej</a> od czasu wykonania tłumaczenia. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Nowość"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Nowa wersja" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
