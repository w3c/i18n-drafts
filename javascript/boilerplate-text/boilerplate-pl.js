// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
'ar':'Arabic',
'bg':'Bulgarian',
'de':'German',
'da':'Danish',
'el':'Greek',
'en':'English',
'es':'Spanish',
'fr':'French',
'he':'Hebrew',
'hi':'Hindi',
'hu':'Hungarian',
'it':'Italian',
'ja':'Japanese',
'ko':'Korean',
'nl':'Dutch',
'pl':'Polish',
'pt':'Portuguese',
'pt-br':'Brazilian Portuguese',
'ro':'Romanian',
'ru':'Russian',
'sv':'Swedish',
'th':'Thai',
'tr':'Turkish',
'uk':'Ukrainian',
'vi':'Vietnamese',
'zh-hans':'Simplified Chinese',
'zh-hant':'Traditional Chinese'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Strona Główna Działalności I18N"
s.moreResourcesOfThisType = "Więcej źródeł tego typu."
s.accessKeyN = 'Klucz dostępu n przeskakuje w nawigacji strony. <a href="//contentstart">Przejdź do początku.</a>'
s.examplesInAnotherScript = "Dokument ten zawiera przykłady w innym języku/skrypcie."
s.worldMap = "Mapa świata"
s.searchI18nSite = "Wyszukiwanie na stronie I18n" 
s.translationDisclaimer = 'Ten dokument jest tłumaczeniem. W przypadku rozbieżności i błędów <a href="'+f.filename+'.en">aktualna wersja angielska</a> powinna być uznana za autorytatywną. <a href="//copyright">Pierwotne prawa autorskie</a> należą do W3C jak wykazano poniżej.'
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
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Zmodyfikowano przez:" // person's name appears after colon
s.translatedBy = "Tłumacz:"
s.validXHTML = "Ważny XHTML 1.0!"
s.validCSS = "Ważne CSS!"
s.codedInUtf8 = "Zakodowano w UTF-8!"

s.translatedFromEnglishVer = "Angielska wersja dokumentu z dnia $enVersion. Tłumaczenie wykonano dnia $thisVersionPlain GMT"

s.historyOfDocumentChanges ='Historia zmian dokumentu <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> w blogu i18n.'
s.untranslatedChanges = '<strong>Uwaga:</strong> Wprowadzono zmiany do <a href="'+f.filename+'.en">oryginalnej wersji angielskiej</a> od czasu wykonania tłumaczenia. <span class="searchkey"><<a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Dostępna lista zmian.</a></span>'
s.new="Nowość"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Nowa wersja" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_review="This article is currently out for public review. Please send comments to <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>subscribe</a>)</span>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_notreviewed="This article was published without public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
