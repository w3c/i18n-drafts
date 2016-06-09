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
s.followOurNews = "Bądź na bieżąco."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Zmodyfikowano przez:" // person's name appears after colon
s.translatedBy = "Tłumacz:"
s.validXHTML = "Ważny XHTML 1.0!"
s.validCSS = "Ważne CSS!"
s.codedInUtf8 = "Zakodowano w UTF-8!"

s.translatedFromEnglishVer = "Angielska wersja dokumentu z dnia "+dt.enVersion+". Tłumaczenie wykonano dnia "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Aby zobaczyć histeorię zmian dokumentu sprawdź <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">kanały informacyjne</a> dla większych zmian, oraz <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">listę Github</a> dla zmian od stycznia 2016.'
s.untranslatedChanges = '<strong>Uwaga:</strong> Wprowadzono zmiany do <a href="'+f.filename+'.en">oryginalnej wersji angielskiej</a> od czasu wykonania tłumaczenia. Wprowadzono zmiany w dokumencie więc możesz widzieć fragmenty po angielsku dopóki tekst nie zostanie przetłumaczony.'
s.unlinkedTranslation = '<strong>Uwaga:</strong> Wprowadzono istotne zmiany do dokumentu po wykonaniu tłumaczenia. Doradza się przeczytanie <a href="'+f.filename+'.en">angielskiej wersji</a> dopóki tłumaczenie nie zostanie zaktualizowane.'
s.new="Nowość"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Nowa wersja" // same as New
s.translation_updated="Tłumaczenie uaktualnione:" // date appears after colon 

s.aboutThisArticle="O tymartykule" // title in the right column near the top of the page
s.status_draft="Ten artykuł do szkic, który nie podległ jeszcze publicznej recenzji. Jeśli masz uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_review="Ten artykuł podlega obecnie publicznej ocenie. Jeśli masz jakieś uwagi prześlij je używając <a href='#survey'>odnośnika na dole strony</a>."
s.status_published="Ten artykuł został już oceniony przez grupę roboczą internacjonalizacji W3C i został oceniony publicznie w celu zapewnienia jak największej wartości tekstu. Jeśli chcesz przesłać komentarz skorzystaj z <a href='#survey'>odnośnika na dole strony</a>."
s.status_notreviewed="Ten artykuł został opublikowany bez publicznej oceny. Jeśli chcesz przesłac komentarz skorzystaj z <a href='#survey'>odnośnika na dole strony</a>."
s.status_obsolete="Artykuł jest obecnie przestarzały. Już nie jest uaktualniany i najprawdopodobniej zawiera błędy. Jeśli szukasz świeższych informacji sprawdź <a href='http://www.w3.org/International/'>stronę główną aktywności Internacjonalizacji</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Szybka odpowiedź" // heading
s.longeranswer = "Dłuższa odpowiedź" // heading
s.additionalinfo = "Dodatkowe informacje" // heading that sometimes follows 'Details'
s.acknowledgements = "Podziekowania dla osób, których wkład lub komentarze zostały ujęte:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Jeśli pozwolisz przeglądarce ustawić plik cookie będziesz kontynuować przeglądanie (tam gdzie to możliwe) stron Internaconalizacji W3C w języku, który wybierzesz. Czy chcesz ustawić plik cookie?" // this text is to be copied to another location

