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
  'ar':'Arab',
  'bg':'Bolgár',
  'da':'Dán',
  'de':'Német',
  'el':'Görög',
  'en':'Angol',
  'es':'Spanyol',
  'fr':'Francia',
  'gl':'Galiciai',
  'he':'Héber',
  'hi':'Hindi',
  'hu':'Magyar',
  'it':'Olasz',
  'ja':'Japán',
  'ko':'Koreai',
  'nl':'Holland',
  'pes':'Perzsa',
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

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Amennyiben hozzájárul egy süti elfogadásához, a W3C Nemzetköziesítés Fejlesztési Tevékenység lapjait az ön által választott nyelven is el tudja érni (amennyiben rendelkezésre állnak). Hozzájárul a süti használatához?"

// items in top right beige column
s.worldMap = "Világtérkép"  // title text for image, top right
s.searchI18nSite = "Keresés a Nemzetköziesítés oldalán" // placeholder text for search box, top right
s.translationDisclaimer = `A dokumentumot önkéntesek fordították. Eltérések vagy hibák esetén a <a href="${ f.filename }.en">legfrissebb, angol eredeti</a> a meghatározó. <a href="#copyright">Az eredeti szerzői jog</a> tulajdonosa a W3C, további részletek alább találhatók.`  // text appears only on translated pages

s.articles = "Cikkek" // used in breadcrumbs, top right of page
s.tests="Tesztek" // used at the end of breadcrumbs for test related pages
s.home = "Kezdőoldal" // start of breadcrumbs
s.onThisPage = "Ezen az oldalon"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Továbbiak a cikkről" // title in the right column near the top of the page
s.status_draft ="A cikk jelenleg egy tervezet, amely még nem lett nyilvánosan elbírálva. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_review ="A cikk jelenleg nyilvános elbírálás alatt áll. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_published="Annak érdekében, hogy a tartalom a lehető legpontosabb legyen, a cikket a W3C Nemzetköziesítési Munkacsoportja elbírálta, és nyilvános bírálaton is átment. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_notreviewed="Ezt cikket nyilvános elbírálás nélkül publikáljuk. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_obsolete="Ez a cikk mára már elavult. Új verziói már nem készülnek, és valószínűleg pontatlanságokat tartalmaz. Frissebb információkért forduljon a <a href='http://www.w3.org/International/'>W3C Nemzetköziesítés Fejlesztési Tevékenység honlapjához.</a>."


// top left of page
s.gotoW3cHome = "Tovább a W3C Kezdőoldalára"  // title text for W3C logo
s.gotoI18nHome = "Tovább az Nemzetköziesítés Fejlesztési Tevékenység Kezdőoldalára" // title text for i18n banner
s.internationalizationTitle = "Nemzetköziesítési Tevékenység"  // the word above the orange line
s.worldwide = "Hogy a Világháló valóban az egész világé lehessen!"  // the words below the orange line
s.techniques = "Módszerek"  // site links link text, top left
s.taskBasedIndex = "A nemzetköziesítés technikáinak és követelményeinek megtanulásához."  // title text for s.techniques
s.resources = "Források"  // site links link text, top left
s.informationResources = "Információs források a lapokon."  // title text for s.resources
s.ask = "Kérdések"  // site links link text, top left
s.askI18nActivity = "Segítség és további információk."  // title text for s.ask
s.news = "Hírek"  // site links link text, top left
s.newsFiltersAndFeeds = "A W3C Nemzetköziesítési Tevékenység követése"  // title text for s.news
s.groups = "Részvétel" // site links link text, top left
s.groupsThatMakeUp = "Részvétel a W3C Nemzetköziesítési Tevékenységének munkálataiban." // title text for s.groups
s.about = "Rólunk" // site links link text, top left
s.aboutI18nActivity = "A W3C Nemzetköziesítési Tevékenységéről." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Célközönség:"  // preface to audience description (being faded out)
s.lastChanged = "Legutolsó módosítás:"  // preface to date of last change"


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Ossza meg velünk a gondolatait."  // text content
s.sendAComment = "Tegyen megjegyzést" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Szerző: " // followed by name of author(s)
s.previousAuthors = "Előző szerző: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Módosította: " // person's name appears after colon
s.translatedBy = "Fordította: " // person's name appears after colon
s.acknowledgements = "Közreműködésükért és átvett megjegyzéseikért köszönjük: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Angolról fordítva: ${ dt.enVersion }. A fordítás utolsó módosítása: ${ dt.thisVersionPlain } GMT`
s.translation_updated="Az új fordítás dátuma:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Amennyiben a dokumentum előzetes változataira kíváncsi, ezek elérhetők a <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">hírlevelünkön</a>, a 2016 Január óta bekövetkezett változásokról pedig a <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">GitHub „<span lang="en">commit</span>” lista</a> a megfelelő forrás.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Megjegyzés:</strong> A fordítás megjelenése óta <a href="${ f.filename }.en">az eredeti angol változat</a> megváltozott. A változásokat átvezettük a dokumentumba, úgyhogy egyes részek, az új fordítás véglegesítéséig, angolul szerepelnek.`
s.unlinkedTranslation = `<strong>Figyelmeztetés:</strong> A fordítás megjelenése óta az eredeti angol változat jelentősen megváltozott. Tanácsoljuk, hogy az új fordítás véglegesítéséig olvasson egy <a href="${ f.filename }">más nyelvű, rendelkezésre álló változatot</a>.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; Ez a cikknek csak a szerkesztői vázlata. A cikk végleges változata a <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>W3C honlapján található</a>.` // used for github-based versions of published article used for github-based versions of published articles


s.new="Új"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Új verzió" // same as New


// strings to promote consistency in article content
s.question = "Kérdés"  // heading
s.questionAlt = "Kérdés"  // title text for s.question
s.questionLink = "Kérdés"  // 
s.skipToAnswer = "[Ugrás a válaszhoz]"  // link text
s.background = "Háttér" // heading
s.backgroundAlt = "Háttérinformáció" // title text for s.background
s.backgroundLink = "Háttér"
s.answer = "Válasz" // heading
s.answerAlt = "Válasz" // title text for s.answer
s.answerLink = "Válasz"
s.byTheWay = "Mellesleg" // heading
s.byTheWayAlt = "Hasznos kiegészítő információ" // title text for s.byTheWay
s.byTheWayLink = "Mellesleg"
s.furtherReading = "További olvasnivaló" // heading
s.furtherReadingAlt = "További olvasnivaló" // title text for s.byTheWay
s.furtherReadingLink = "További olvasnivaló"
s.quickanswer = "Gyors válasz" // heading
s.longeranswer = "Részletek" // heading that follows 'Quick answer'
s.additionalinfo = "További információ" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Feliratkozás az RSS csatornára."  
s.newResourcesAlt = "Értesítés egy új forrás megjelenéséről."
s.newResources = "Új források"
s.homePageNewsAlt = "Minden hír a kezdőoldalon."
s.homePageNews = "Kezdőoldal hírek"
s.followOurNews = "Kövesse hírlevelünket."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Érvényes XHTML 1.0!"
s.validCSS = "Érvényes CSS!"
s.codedInUtf8 = "UTF-8-ban kódolva!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "A Nemzetköziesítési Tevékenység Kezdőoldala"
s.moreResourcesOfThisType = "Több, ilyen jellegű forrás."
s.accessKeyN = `Az n billentyű az <a href="#internal-links" accesskey="n">oldal navigációra</a> ugrik. <a href="#contentstart">Ugrás a szöveg elejére.</a>`
s.examplesInAnotherScript = "Ez a dokumentum más nyelvű példákat tartalmaz."
s.relatedLinks = "Kapcsolódó linkek"
s.techIndexText = "Módszerek"
s.topicIndexText = "Témák"
s.i18nActivityHomePage = "Nemzetköziesítési Tevékenység Kezdőoldala."
s.topicIndexForInformation = "Névmutató a lapokhoz."
s.topics = "Témák"



/*

MISSING TRANSLATIONS

check all top left links !




*/
