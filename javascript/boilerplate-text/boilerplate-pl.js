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
s.translationDisclaimer = 'Ten document jest tłumaczeniem zapewnionym przez wolontariusza. W przypadku nieścisłości lubbłędów <a href="'+f.filename+'.en">ostatni angielski oryginał</a> powinien być brany pod uwagę.<a href="#copyright">Oryginalne prawa autorskie</a> Należą do W3C, jak wskazano poniżej.'
s.translator = "Tłumacz:"
s.relatedLinks = "Linki Pokrewne"
s.articles = "Artykuły" // used in breadcrumbs, top right of page 
s.topicIndexText = "Spis tematów"
s.techIndexText = "Spis technik"
s.gotoW3cHome = "Przejdź do Strony Głównej W3C"
s.gotoI18nHome = "Przejdź do Strony Głównej Działalności Internacjonalizacji"
s.internationalizationTitle = "Internacjonalizacja"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Strona Główna Działalności Internacjonalizacji."
s.home = "Strona Główna"
s.contactI18nActivity = "O Działalności Internacjonalizacji."
s.contact = "O nas"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
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
s.byTheWayAlt = "Dodatkowe informacje"
s.byTheWayLink = "Dodatkowe informacje"
s.byTheWay = "Dodatkowe informacje"
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
s.followOurNews = "Śledź nasz kanał wiadomości."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Zmodyfikowano przez:" // person's name appears after colon
s.translatedBy = "Tłumacz:"
s.validXHTML = "Ważny XHTML 1.0!"
s.validCSS = "Ważne CSS!"
s.codedInUtf8 = "Zakodowano w UTF-8!"

s.translatedFromEnglishVer = "Angielska wersja dokumentu z dnia "+dt.enVersion+". Tłumaczenie wykonano dnia "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Aby przesledzić historię zmian dokumentu zobacz <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">kanał wiadomości</a> dla większych zmian, oraz <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'..en.html">listę na Github</a> dla wszystkich zmian od stycznia 2016.'
s.untranslatedChanges = '<strong>Uwaga:</strong> Wprowadzono zmiany do <a href="'+f.filename+'.en">angielskiego oryginału</a> od kiedy dokument został przetłumaczony. Zmiany zostały tu wpisane dlatego możesz widzieć fragmenty w języku angielskim dopóki nie uaktualnimy tłumaczenia.'
s.unlinkedTranslation = '<strong>Uwaga:</strong> Wprowadzono istotne zmiany do dokumentu po wykonaniu tłumaczenia. Doradza się przeczytanie <a href="'+f.filename+'.en">angielskiej wersji</a> dopóki tłumaczenie nie zostanie zaktualizowane.'
s.new="Nowość"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Nowa wersja" // same as New
s.translation_updated="Tłumaczenie uaktualnione:" // date appears after colon 

s.aboutThisArticle="O tym artykule" // title in the right column near the top of the page
s.status_draft="Ten artykuł to szkic, który nie był jeszcze podany publicznej ocenie. Jeśli masz jakieś uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_review="Artykuł podlega obecnie publicznej ocenie. Jeśli masz jakieś uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_published="Ten artykuł został oceniony przez Grupę Internacjonalizacji W3C i był poddany publicznej ocenie w cell zachowania najwyższej jakości. Jeśli masz jakieś uwagi wyślij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_notreviewed="Ten artykuł został opublikowany bez publicznej oceny. Jeśli masz jakieś uwagi wyślij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_obsolete="Ten artykuł jest już przestarzały. Nie jest już aktualizowany i może zawierać błędy. Aby uzyskać bardziej aktualne informacje zobacz <a href='http://www.w3.org/International/'>stronę główną internacjonalizacji</a>."
s.tests="Testy" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Krótka odpowiedź" // heading
s.longeranswer = "Szczegóły" // heading
s.additionalinfo = "Dodatkowe informacje" // heading that sometimes follows 'Details'
s.acknowledgements = "Dziękujemy także osobom, które wniosły wkład:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Jeśli pozwolisz przeglądarce ustawić plik cookie będziesz kontynuować przeglądanie (tam gdzie to możliwe) stron Internaconalizacji W3C w języku, który wybierzesz. Czy chcesz ustawić plik cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "