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
  'ar':'Arabă',
  'bg':'Bulgară',
  'da':'Daneză',
  'de':'Germană',
  'el':'Greacă',
  'en':'Engleză',
  'es':'Spaniolă',
  'fr':'Franceză',
  'gl':'Galiciană',
  'he':'Ebraică',
  'hi':'Hindi',
  'hu':'Maghiară',
  'it':'Italiană',
  'ja':'Japoneză',
  'ko':'Coreeană',
  'nl':'Olandeză',
  'pes':'Persană',
  'pl':'Poloneză',
  'pt':'Portugheză',
  'pt-br':'Portugheză',
  'ro':'Română',
  'ru':'Rusă',
  'sv':'Suedeză',
  'th':'Thailandeză',
  'tr':'Turcă',
  'uk':'Ucraineană',
  'vi':'Vietnameză',
  'zh-hans':'Chineză simplificată',
  'zh-hant':'Chineză tradițională'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// items in top right beige column
s.worldMap = "Harta lumii"  // title text for image, top right
s.searchI18nSite = "Cauta in site-ul I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Acest document e o traducere. In caz ca apare vreo eroare sau discrepanta, <a href="${ f.filename }.en">ultima versiune in Engleza</a> este cea autoritativa. <a href="#copyright">Copyright-ul original</a> apartine W3C, dupa cum e aratat mai jos.`  // text appears only on translated pages

s.articles = "Articole" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Acasa" // start of breadcrumbs
s.onThisPage = "Pe aceasta pagina"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "Pagina principala a W3C"  // title text for W3C logo
s.gotoI18nHome = "Pagina principala a activitatii de Internationalizare" // title text for i18n banner
s.internationalizationTitle = "Internationalizare"  // the word above the orange line
s.worldwide = "Facem World Wide Web pentru întreaga lume!"  // the words below the orange line
s.techniques = "Tehnici"  // site links link text, top left
s.taskBasedIndex = "Cuprinsul tehnicilor de internationalizare."  // title text for s.techniques
s.resources = "Resurse"  // site links link text, top left
s.informationResources = "Alte informatii pe site-ul Internationalizarii."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Noutati"  // site links link text, top left
s.newsFiltersAndFeeds = "Informatii despre filtre noi si RSS feeds pentru Internationalizarea W3C."  // title text for s.news
s.groups = "Grupuri" // site links link text, top left
s.groupsThatMakeUp = "Grupuri care constituie Activitatea de Internationalizare." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Cititorii vizati:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Spune-ne părerea ta."  // text content
s.sendAComment = "Trimite un comentariu" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Autor: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificat de: " // person's name appears after colon
s.translatedBy = "Traducator: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Tradus din engleza: ${ dt.enVersion }. Ultima modificare a traducerii: ${ dt.thisVersionPlain } GMT`
s.translation_updated="Translation updated:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Nota:</strong> Au fost efectuate modificari asupra  <a href="${ f.filename }.en">versiunii originale in Engleza</a> dupa ce a fost tradus. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }.en">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Nou"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Actualizat" // same as New


// strings to promote consistency in article content
s.question = "Intrebare"  // heading
s.questionAlt = "Intrebare"  // title text for s.question
s.questionLink = "Intrebare"  // 
s.skipToAnswer = "[Sari direct la raspuns]"  // link text
s.background = "Introducere" // heading
s.backgroundAlt = "Informatii introductive" // title text for s.background
s.backgroundLink = "Introducere"
s.answer = "Raspuns" // heading
s.answerAlt = "Raspuns" // title text for s.answer
s.answerLink = "Raspuns"
s.byTheWay = "Apropo" // heading
s.byTheWayAlt = "Alte informatii utile" // title text for s.byTheWay
s.byTheWayLink = "Apropo"
s.furtherReading = "Alte materiale" // heading
s.furtherReadingAlt = "Alte materiale" // title text for s.byTheWay
s.furtherReadingLink = "Alte materiale"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Abonează-te la RSS feed."  
s.newResourcesAlt = "Te informează de fiecare dată când noi resurse sunt publicate pentru prima dată."
s.newResources = "Resurse noi"
s.homePageNewsAlt = "Toate noutăţile prezentate pe prima pagina."
s.homePageNews = "Noutăţi prima pagină"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 Valid!"
s.validCSS = "CSS Valid!"
s.codedInUtf8 = "Incodat cu UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Pagina de start a activitatii I18N"
s.moreResourcesOfThisType = "Mai multe resurse de acest tip"
s.accessKeyN = `Cheia de acces n sare la<a href="#internal-links" accesskey="n">nagigarea in pagina</a>. <a href="#contentstart">Sari la inceputul continutului.</a>`
s.examplesInAnotherScript = "Acest document contine exemple in alta limba/script."
s.relatedLinks = "Alte linkuri"
s.techIndexText = "Indexul tehnicilor"
s.topicIndexText = "Indexul subiectelor"
s.i18nActivityHomePage = "Pagina principala a Activitatii de Internationalizare."
s.topicIndexForInformation = "Cuprinsul informatiilor din acest site."
s.topics = "Subiecte"



/*

MISSING TRANSLATIONS

check all top left links !

cookieMsg
aboutThisArticle
status_draft
status_review
status_published
status_notreviewed
status_obsolete
worldwide
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
previousAuthors
acknowledgements
translation_updated
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
followOurNews



*/