// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arab',
  'bg':'Bolgár',
  'da':'Dán',
  'de':'Német',
  'el':'Görög',
  'en':'Angol',
  'es':'Spanyol',
  'fr':'Francia',
  'he':'Héber',
  'hi':'Hindi',
  'hu':'Magyar',
  'it':'Olasz',
  'ja':'Japán',
  'ko':'Koreai',
  'nl':'Holland',
  'pl':'Lengyel',
  'pt':'Portugál',
  'pt-br':'Brazíliai Portugál',
  'ro':'Román',
  'ru':'Orosz',
  'sv':'Svéd',
  'th':'Thai',
  'tr':'Török',
  'uk':'Ukrán',
  'vi':'Vietnámi',
  'zh-hans':'Egyszerűsített kínai',
  'zh-hant':'Hagyományos kínai'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Tevékenység Kezdőoldala"
s.moreResourcesOfThisType = "Több ehhez hasonló forrás."
s.accessKeyN = 'Az n billentyű átugrik az <a href="#internal-links" accesskey="n">oldal navigációhoz</a>. <a href="#contentstart">Ugrás a szöveg elejére.</a>'
s.examplesInAnotherScript = "Ez a dokumentum más nyelvű példákat tartalmaz."
s.worldMap = "Világtérkép"
s.searchI18nSite = "Keresés az I18n oldalán" 
s.translationDisclaimer = 'Ez a dokumentum egy fordítás. Bármilyen ellentmondás vagy hiba esetén a <a href="'+f.filename+'.en">legfrissebb angol nyelvű eredeti változatot</a> kell mérvadónak tekinteni. <a href="#copyright">A szerzői jog</a> a W3C tulajdonát képezi, amint az alább látható.'
s.translator = "Fordító:"
s.relatedLinks = "Kapcsolódó linkek"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Témák"
s.techIndexText = "Módszerek"
s.gotoW3cHome = "Tovább a W3C Kezdőoldalára"
s.gotoI18nHome = "Tovább az Internacionalizációs Tevékenység Kezdőoldalára"
s.internationalizationTitle = "Internacionalizációs Tevékenység"
s.i18nActivityHomePage = "Internacionalizációs Tevékenység Kezdőoldala."
s.home = "Kezdőoldal"
s.aboutI18nActivity = "Az Internacionalizációs Tevékenységünkről."
s.about = "Magunkról"
s.groupsThatMakeUp = "Csoportok akik az Internacionalizációs Tevékenységgel foglalkoznak."
s.groups = "Csoportok"
s.topicIndexForInformation = "Témák névmutatója az oldalon található információkhoz."
s.topics = "Témák"
s.taskBasedIndex = "Feladat alapú névmutató az i18n módszerekhez."
s.techniques = "Módszerek"
s.informationResources = "Információs források az oldalon."
s.resources = "Források"
s.newsFiltersAndFeeds = "Információk a hírszűrőkről és RSS feed-ekről"
s.news = "Hírek"
s.onThisPage = "Ezen az oldalon"
s.questionAlt = "Kérdés"
s.questionLink = "Kérdés"
s.question = "Kérdés"
s.backgroundAlt = "Háttérinformáció"
s.backgroundLink = "Háttér"
s.background = "Háttér"
s.answer = "Válasz" // heading
s.answerAlt = "Válasz"
s.answerLink = "Válasz"
s.byTheWayAlt = "Hasznos kiegészítő információ"
s.byTheWayLink = "Mellesleg"
s.byTheWay = "Mellesleg"
s.furtherReadingAlt = "További olvasnivaló"
s.furtherReadingLink = "További olvasnivaló"
s.furtherReading = "További olvasnivaló"
s.intendedAudience = "Célközönség:"
s.skipToAnswer = "[Ugrás a válaszhoz]"
s.tellUsWhatYouThink = "Mondja el nekünk mit gondol!"
s.sendAComment = "Küldjön kommentet"
s.subscribeToRSS = "Feliratkozás RSS Feed-re."
s.newResourcesAlt = "Értesíti Önt amikor első alkalommal lett új forrás publikálva."
s.newResources = "Új források"
s.homePageNewsAlt = "Minden hír a kezdőoldalon."
s.homePageNews = "Kezdőoldal hírek"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Szerző:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Módosítás:" // person's name appears after colon
s.translatedBy = "Fordító:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "UTF-8-ben kódolva!"

s.translatedFromEnglishVer = "Angolról fordítva: "+dt.enVersion+". A lefordított verzió utolsó módosítása: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Megjegyzés:</strong> Változások történtek <a href="'+f.filename+'.en.php">az eredeti angol változatban</a> amióta a dokumentum le lett fordítva. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
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
