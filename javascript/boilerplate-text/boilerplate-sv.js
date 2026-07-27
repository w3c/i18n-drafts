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
  'ar':'Arabiska',
  'bg':'Bulgariska',
  'da':'Danska',
  'de':'Tyska',
  'el':'Grekiska',
  'en':'Engelska',
  'es':'Spanska',
  'fr':'Franska',
  'gl':'Galiciska',
  'he':'Hebreiska',
  'hi':'Hindi',
  'hu':'Ungerska',
  'it':'Italienska',
  'ja':'Japanska',
  'ko':'Koreanska',
  'nl':'Nederländska',
  'pes':'Persiska',
  'pl':'Polska',
  'pt':'Portugisiska',
  'pt-br':'Portugisiska',
  'ro':'Rumänska',
  'ru':'Ryska',
  'sv':'Svenska',
  'th':'Thailändska',
  'tr':'Turkiska',
  'uk':'Ukrainska',
  'vi':'Vietnamesiska',
  'zh-hans':'Förenklad kinesiska',
  'zh-hant':'Traditionell kinesiska'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Om du tillåter webbläsaren att spara en kaka (cookie), så kommer du i fortsättningen att se sidor från W3C Internationalization Activity i det språk du valt (när sådana översättningar finns). Vill du spara kakan?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Världskarta"  // title text for image, top right
s.searchI18nSite = "Sök på I18n:s webbplats" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `Detta dokument är en översättning av ett engelskt original, utfört av frivilliga. Om det finns tveksamheter eller fel i detta dokument, så är <a href="${ s.englishOriginal }">senaste version av det engelska originalet</a> den auktoritativa versionen. <a href="#copyright">Copyright</a> tillhör W3C, enligt nedan.`  // text appears only on translated pages

s.articles = "Artiklar" // used in breadcrumbs, top right of page
s.tests="" // used at the end of breadcrumbs for test related pages
s.home = "Hemsidan" // start of breadcrumbs
s.onThisPage = "På denna sida"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Om denna artikel" // title in the right column near the top of the page
s.status_draft="Denna artikel är ett utkast som ännu inte genomgått en öppen granskning. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_review="Denna artikel är nu publicerad för öppen granskning. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_published="Denna artikel har granskats av W3C:s arbetsgrupp för internationalisering, och har genomgått öppen granskning, för att säkerställa att den är så korrekt som möjligt. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_notreviewed="Denna artikel publicerades utan att ha blivit granskad. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_obsolete="Detta dokument är föråldrat. Det vidmakthålles inte längre och innehåller troligen felaktiheter. Mer aktuell information kan du finna på <a href='http://www.w3.org/International/'>Internationaliseringsarbetets hemsida</a>."


// top left of page
s.gotoW3cHome = "Gå till W3C:s hemsida"  // title text for W3C logo
s.gotoI18nHome = "Gå till W3C:s hemsida om internationalisering" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Tekniker"  // site links link text, top left
s.taskBasedIndex = "Uppgiftsorienterat index över i18n-tekniker."  // title text for s.techniques
s.resources = "Resurser"  // site links link text, top left
s.informationResources = "Informationsresurser på internationaliseringens webbplats."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Nyheter"  // site links link text, top left
s.newsFiltersAndFeeds = "Information om nyhetsfilter och RSS-kanaler för W3C:s internationaliseringsarbete."  // title text for s.news
s.groups = "Grupper" // site links link text, top left
s.groupsThatMakeUp = "Arbetsgrupper inom internationaliseringsaktiviteten." // title text for s.groups
s.about = "Om" // site links link text, top left
s.aboutI18nActivity = "Om internationaliseringsaktiviteten." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Avsedd läsarkrets:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Tala om för oss vad du tycker."  // text content
s.sendAComment = "Sänd oss en kommentar" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Av: " // followed by name of author(s)
s.previousAuthors = "Tidigare av: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Ändrad av: " // person's name appears after colon
s.translatedBy = "Översättare: " // person's name appears after colon
s.acknowledgements = "Även tack till följande personer som bidragit eller gett kommentarer: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Översatt från engelskt innehåll skapat/ändrat ${ dt.enVersion }. Översättningen senast ändrad ${ dt.thisVersionPlain } GMT`
s.translation_updated="Översättning uppdaterad:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Om du vill se en logg över hur dokumentet ändrats, titta på <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">nyhetstråden</a> där viktiga ändringar noterats, och <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">listan över inlägg i Github</a> för alla ändringar gjords sedan januari 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Obs:</strong> Det  <a href="${ s.englishOriginal }">engelska originaldokumentet</a> har ändrats sedan det översattes. De ändringarna har lagts in i denna sida, så du kan råka se vissa delar formulerade i engelska, till dess att översättningen uppdaterats.`
s.unlinkedTranslation = `<strong>Varning:</strong> Viktiga ändringar har gjorts i det engelska originalet efter att denna översättning gjordes. Vi rekommenderar att du läser <a href="${ f.filename }">en version i ett annat språk</a> i väntan på att denna översättning blir uppdaterad.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Ny"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Uppdaterad" // same as New


// strings to promote consistency in article content
s.question = "Fråga"  // heading
s.questionAlt = "Fråga"  // title text for s.question
s.questionLink = "Fråga"  // 
s.skipToAnswer = "[Hoppa till svaret]"  // link text
s.background = "Bakgrundsinformation" // heading
s.backgroundAlt = "Bakgrundsinformation" // title text for s.background
s.backgroundLink = "Bakgrundsinformation"
s.answer = "Svar" // heading
s.answerAlt = "Svar" // title text for s.answer
s.answerLink = "Svar"
s.byTheWay = "Nyttig information" // heading
s.byTheWayAlt = "Mer nyttig information" // title text for s.byTheWay
s.byTheWayLink = "Nyttig information"
s.furtherReading = "Mer att läsa" // heading
s.furtherReadingAlt = "Mer att läsa" // title text for s.byTheWay
s.furtherReadingLink = "Mer att läsa"
s.quickanswer = "Snabbt svar" // heading
s.longeranswer = "Detaljer" // heading that follows 'Quick answer'
s.additionalinfo = "Ytterligare information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Prenumerera på en RSS-kanal."  
s.newResourcesAlt = "Informerar dig när en ny resurs publiceras för första gången."
s.newResources = "Nya resurser"
s.homePageNewsAlt = "Alla nyhetsnotiser som visas på hemsidan."
s.homePageNews = "Nyheter på hemsidan"
s.followOurNews = "Följ våra nyhetsflöden."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Kodad i UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N-aktivitetens hemsida"
s.moreResourcesOfThisType = "Fler resurser av denna typ."
s.accessKeyN = `Använd accesskey 'n' för att hoppa till de interna navigationslänkarna i dokumentet. <a href="#contentstart">Hoppa till början av innehållet.</a>`
s.examplesInAnotherScript = "Detta dokument innehåller exempel uttryckta i andra språk/skript."
s.relatedLinks = "Näraliggande länkar"
s.techIndexText = "Index över tekniker"
s.topicIndexText = "Index över ämnen"
s.i18nActivityHomePage = "Internationaliseringsaktivitetens hemsida."
s.topicIndexForInformation = "Ämnesorienterat index över information på denna webbplats."
s.topics = "Ämnen"



/*

MISSING TRANSLATIONS

check all top left links !

worldwide
ask
askI18nActivity
about
aboutI18nActivity
lastChanged




*/