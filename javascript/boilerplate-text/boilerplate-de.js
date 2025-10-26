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
  'ar':'Arabisch',
  'bg':'Bulgarisch',
  'da':'Dänisch',
  'de':'Deutsch',
  'el':'Griechisch',
  'en':'Englisch',
  'es':'Spanisch',
  'fr':'Französisch',
  'gl':'Galicisch',
  'he':'Hebräisch',
  'hi':'Hindi',
  'hu':'Ungarisch',
  'it':'Italienisch',
  'ja':'Japanisch',
  'ko':'Koreanisch',
  'nl':'Niederländisch',
  'pes':'Persian',
  'pl':'Polnisch',
  'pt':'Portugiesisch',
  'pt-br':'Brasilianisches Portugiesisch',
  'ro':'Rumänisch',
  'ru':'Russisch',
  'sv':'Schwedisch',
  'th':'Thai',
  'tr':'Türkisch',
  'uk':'Ukrainisch',
  'vi':'Vietnamesisch',
  'zh-hans':'Vereinfachtes Chinesisch',
  'zh-hant':'Traditionelles Chinesisch'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Wenn Sie der Verwendung eines Cookies zustimmen, werden Ihnen die Seiten der W3C-Internationalisierungstätigkeit (sofern verfügbar) in Ihrer gewählten Sprache angezeigt. Möchten Sie den Cookie setzen?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Weltkarte"  // title text for image, top right
s.searchI18nSite = "I18n-Suche" // placeholder text for search box, top right
s.translationDisclaimer = `Dieses Dokument ist eine ehrenamtlich angefertigte Übersetzung. Im Falle von Abweichungen oder Fehlern sollte das <a href="${ f.filename }.en">aktuelle englische Original</a> als maßgeblich angenommen werden. Das W3C besitzt das <a href="#copyright">Copyright am Original</a>, wie unten beschrieben.`  // text appears only on translated pages

s.articles = "Artikel" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Startseite" // start of breadcrumbs
s.onThisPage = "Auf dieser Seite"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Über diesen Artikel" // title in the right column near the top of the page
s.status_draft="Dieser Artikel ist ein Entwurf und wurde noch nicht öffentlich diskutiert. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_review="Dieser Artikel wird zur Zeit gerade öffentlich diskutiert. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_published="Dieser Artikel wurde von der Arbeits&shygruppe Inter&shynationali&shysierung des W3C geprüft und öffentlich diskutiert, damit er so korrekt wie möglich ist. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_notreviewed="Dieser Artikel wurde ohne vorherige öffentliche Diskussion veröffentlicht. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_obsolete="Dieser Artikel ist veraltet. Er wird nicht mehr gepflegt und ist womöglich stellenweise falsch. Aktuelle Informationen finden Sie auf der <a href='http://www.w3.org/International/'>Startseite der Internationalisierungstätigkeit</a>."


// top left of page
s.gotoW3cHome = "Zur W3C-Startseite"  // title text for W3C logo
s.gotoI18nHome = "Zur Startseite der Internationalisierungstätigkeit" // title text for i18n banner
s.internationalizationTitle = "Internationalisierung"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Lerne"  // site links link text, top left
s.taskBasedIndex = "Lerne die Techniken und Anforderungen für die Internationalisierung."  // title text for s.techniques
s.resources = "Finde"  // site links link text, top left
s.informationResources = "Finde Informationen auf dieser Seite."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Folge"  // site links link text, top left
s.newsFiltersAndFeeds = "Folge der Arbeit von W3C-Internationalisierung."  // title text for s.news
s.groups = "Mach mit" // site links link text, top left
s.groupsThatMakeUp = "Mach mit bei der Internationalisierung." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Zielgruppe: "  // preface to audience description (being faded out)
s.lastChanged = "Letzte Aktualisierung "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Sagen Sie uns, was Sie denken."  // text content
s.sendAComment = "Senden Sie uns Anmerkungen" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Autor: " // followed by name of author(s)
s.previousAuthors = "Vorheriger Autor: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Geändert von: " // person's name appears after colon
s.translatedBy = "Übersetzer: " // person's name appears after colon
s.acknowledgements = "Vielen Dank für die Beiträge und Kommentare zu diesem Artikel an: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Übersetzung der englischen Version vom ${ dt.enVersion }. Letzte Änderung der übersetzten Version am ${ dt.thisVersionPlain } UTC`
s.translation_updated="Übersetzung aktualisiert am " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Zur Änderungshistorie dieser Seite siehe <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">Newsfeed</a> für wesentliche Änderungen und <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github-Commit-Liste</a> für alle Änderungen am englischen Original ab Januar 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Hinweis:</strong> Das  <a href="${ f.filename }.en">englische Original</a> wurde nach dieser Übersetzung aktualisiert. Die Änderungen wurden in diese Seite übernommen, so dass evtl. einige Abschnitte auf englisch erscheinen, bis die Übersetzung aktualisiert wird.`
s.unlinkedTranslation = `<strong>Achtung:</strong> Das englische Original wurde nach dieser Übersetzung in wesentlichen Punkten aktualisiert. Wir raten Ihnen, die <a href="${ f.filename }">englische Version</a> zu lesen, bis die Übersetzung aktualisiert wird.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>, rather than to this page.` // used for github-based versions of published articles


s.new="Neu"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Aktualisiert" // same as New


// strings to promote consistency in article content
s.question = "Frage"  // heading
s.questionAlt = "Frage"  // title text for s.question
s.questionLink = "Frage"  // 
s.skipToAnswer = "[Zur Antwort springen]"  // link text
s.background = "Hintergrund" // heading
s.backgroundAlt = "Hintergrundinformationen" // title text for s.background
s.backgroundLink = "Hintergrund"
s.answer = "Antwort" // heading
s.answerAlt = "Antwort" // title text for s.answer
s.answerLink = "Antwort"
s.byTheWay = "Übrigens" // heading
s.byTheWayAlt = "Weitere nützliche Informationen" // title text for s.byTheWay
s.byTheWayLink = "Übrigens"
s.furtherReading = "Literaturhinweise" // heading
s.furtherReadingAlt = "Literaturhinweise" // title text for s.byTheWay
s.furtherReadingLink = "Literaturhinweise"
s.quickanswer = "Kurze Antwort" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Weitere Informationen" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Abonnieren Sie unseren RSS-Feed."  
s.newResourcesAlt = "Sie werden benachrichtigt, wenn ein neues Dokument zum ersten Mal veröffentlicht wird."
s.newResources = "Neue Ressourcen"
s.homePageNewsAlt = "Alle Nachrichten, die auf der Startseite gezeigt werden."
s.homePageNews = "News auf der Startseite"
s.followOurNews = "Folgen Sie unserem Newsfeed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valides XHTML 1.0!"
s.validCSS = "Valides CSS!"
s.codedInUtf8 = "Kodiert in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Startseite der I18n-Tätigkeit"
s.moreResourcesOfThisType = "Weitere Ressourcen diesen Typs."
s.accessKeyN = `Accesskey n springt zur Seitennavigation. <a href="#contentstart">Springe zum Inhalt.</a>`
s.examplesInAnotherScript = "Dieses Dokument enthält Beispiele in einer anderen Sprache/Schrift."
s.relatedLinks = "Verwandte Links"
s.techIndexText = "Technikenverzeichnis"
s.topicIndexText = "Themenverzeichnis"
s.i18nActivityHomePage = "Startseite der Internationalisierungstätigkeit."
s.topicIndexForInformation = "Suche auf dieser Seite."
s.topics = "Suche"



/*

MISSING TRANSLATIONS

check all top left links !
s.ask 
s.askI18nActivity
s.about
s.aboutI18nActivity

s.worldwide 
s.githubRedirect 

'pes':'Persian',


*/