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
s.translationDisclaimer = 'A dokumentumot önkéntesek fordították. Különbségek vagy hibák esetén a <a href="'+f.filename+'.en">legfrissebb, angol eredeti</a> a meghatározó. <a href="#copyright">Az eredeti szerzői jog</a> tulajdonosa a W3C, további részletek alább találhatók.'
s.translator = "Fordító:"
s.relatedLinks = "Kapcsolódó linkek"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Témák"
s.techIndexText = "Módszerek"
s.gotoW3cHome = "Tovább a W3C Kezdőoldalára"
s.gotoI18nHome = "Tovább az Internacionalizációs Tevékenység Kezdőoldalára"
s.internationalizationTitle = "Internacionalizációs Tevékenység"
s.worldwide = "Hogy a Világháló valóban az egész világé lehessen!"
s.i18nActivityHomePage = "Internacionalizációs Tevékenység Kezdőoldala."
s.home = "Kezdőoldal"
s.contactI18nActivity = "Az Internacionalizációs Tevékenységünkről."
s.contact = "Magunkról"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
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
s.followOurNews = "Kövesse hírlevelünket."
s.sentenceDelimiter = "."

s.author = "Szerző:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Módosítás:" // person's name appears after colon
s.translatedBy = "Fordító:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "UTF-8-ben kódolva!"

s.translatedFromEnglishVer = "Angolról fordítva: "+dt.enVersion+". A lefordított verzió utolsó módosítása: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Amennyiben a dokumentum volt változataira kíváncsi, ezek az információk elérhetők a <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">hírlevelünkön</a>, a 2016 Január óta bekövetkezett változásokról pedig a <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">GitHub „<span lang="en">commit</span>” lista</a> a megfelelő forrás.'
s.untranslatedChanges = '<strong>Megjegyzés:</strong> A fordítás megjelenése óta változások történtek <a href="'+f.filename+'.en">az eredeti angol változatban</a>. A változásokat átvezettük a dokumentumba, úgyhogy egyes részek, az új fordítás véglegesítéséig, angolul szerepelnek.'
s.unlinkedTranslation = '<strong>Figyelmeztetés:</strong> A fordítás megjelenése óta jelentős változások történtek az eredeti angol változatban. Tanácsoljuk, hogy az új fordítás véglegesítéséig <a href="'+f.filename+'">egy más nyelven rendelkezésre álló változatot</a> olvasson.'
s.new="Új"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Új verzió" // same as New
s.translation_updated="Az új verzió dátuma:" // date appears after colon 

s.aboutThisArticle="Továbbiak a cikkről" // title in the right column near the top of the page
s.status_draft="A cikk jelenleg egy tervezet, amely még nem ment át nyilvános bírálaton. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_review="A cikk jelenleg nyilvános elbírálás alatt áll. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_published="Annak érdekében, hogy a tartalom a lehető legpontosabb legyen, a cikket a W3C Nemzetköziesítési Munkacsoportja elbírálta, és átment nyilvános bírálaton is. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_notreviewed="Ezt cikket nyilvános elbírálás nélkül publikáljuk. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_obsolete="Ez a cikk mára már elavult. Új verziói már nem készülnek, és valószínűleg pontatlanságokat tartalmaz. Frissebb információkért forduljon a <a href='http://www.w3.org/International/'>W3C Nemzetköziesítés Fejlesztési Tevékenység honlapjához.</a>."
s.tests="Teszt" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Gyors válasz" // heading
s.longeranswer = "Részletek" // heading
s.additionalinfo = "További információ" // heading that sometimes follows 'Details'
s.acknowledgements = "Közreműködésükért és átvett megjegyzéseikért köszönjük:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Amennyiben hozzájárul ahhoz, hogy a böngészője elfogadjon egy sütit, a W3C Nemzetköziesítés Fejlesztési Tevékenység lapjait, ha rendelkezésre állnak, az ön által választott nyelven tudja elérni. Hozzájárul a süti használatához?" // this text is to be copied to another location
//s.supercededTranslation = '<strong>Figyelmeztetés:</strong> Ez a dokumentumnak egy lejárt verziója! Olvassa inkább a <a href="'+g.filename+f.clang+'">legfrissebb verziót</a> és, ha lehetséges, változtassa meg azt a linket vagy könyvjelzőt amelynek révén ide jött.'
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "