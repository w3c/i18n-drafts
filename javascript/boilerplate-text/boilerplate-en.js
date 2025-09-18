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
'ar':'Arabic',
'bg':'Bulgarian',
'da':'Danish',
'de':'German',
'el':'Greek',
'en':'English',
'es':'Spanish',
'fr':'French',
'gl':'Galician',
'he':'Hebrew',
'hi':'Hindi',
'hu':'Hungarian',
'it':'Italian',
'ja':'Japanese',
'ko':'Korean',
'nl':'Dutch',
'pes':'Persian',
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
// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "World map"  // title text for image, top right
s.searchI18nSite = "I18n site search" // placeholder text for search box, top right
s.translationDisclaimer = `This document is a translation provided by a volunteer. In the case of any discrepancy or errors, the <a href="${ f.filename }.en">latest English original</a> should be considered authoritative. Original copyright belongs to W3C, as shown below.`  // text appears only on translated pages
s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Home" // start of breadcrumbs
s.onThisPage = "On this page"  // TOC heading


// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible.</p><p>If you have comments, please <a id='linktoGHissues' href='#survey'>let us know</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='https://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "Go to W3C Home Page"  // title text for W3C logo
s.gotoI18nHome = "Go to Internationalization Activity Home Page" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Learn"  // site links link text, top left
s.taskBasedIndex = "Learn techniques and requirements for internationalization."  // title text for s.techniques
s.resources = "Find"  // site links link text, top left
s.informationResources = "Find information on this site."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Follow"  // site links link text, top left
s.newsFiltersAndFeeds = "Follow the work at W3C Internationalization."  // title text for s.news
s.groups = "Participate" // site links link text, top left
s.groupsThatMakeUp = "Participate in W3C Internationalization work." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Intended audience: "  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Tell us what you think."  // text content
s.sendAComment = "Leave a comment" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "By: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Changed by: " // person's name appears after colon
s.translatedBy = "Translator: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Translated from English content dated ${ dt.enVersion }. Translated version last changed ${ dt.thisVersionPlain } GMT`
s.translation_updated="Translation updated: " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="https://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`
//s.supercededTranslation = "<strong>Avertissement :</strong> Ceci est une version dépassée de ce document! Il est recommandé de lire <a href=""+g.betterfilename+".en">la dernière version</a> et si vous le pouvez, de modifier le marque-page ou le lien qui vous a redirigé ici."


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Note:</strong> Changes have been made to <a href="${ f.filename }.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }">a version in another language</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>, rather than to this page.` // used for github-based versions of published articles


s.new="New"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Updated" // same as New


// strings to promote consistency in article content
s.question = "Question"  // heading
s.questionAlt = "Question"  // title text for s.question
s.questionLink = "Question"  // 
s.skipToAnswer = "[Skip to the answer]"  // link text
s.background = "Background" // heading
s.backgroundAlt = "Background information" // title text for s.background
s.backgroundLink = "Background"
s.answer = "Answer" // heading
s.answerAlt = "Answer" // title text for s.answer
s.answerLink = "Answer"
s.byTheWay = "By the way" // heading
s.byTheWayAlt = "Additional useful information" // title text for s.byTheWay
s.byTheWayLink = "By the way"
s.furtherReading = "Further reading" // heading
s.furtherReadingAlt = "Further reading" // title text for s.byTheWay
s.furtherReadingLink = "Further reading"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Subscribe to an RSS feed."  
s.newResourcesAlt = "Notifies you each time a new resource is published for the first time."
s.newResources = "New resources"
s.homePageNewsAlt = "All news items shown on the home page."
s.homePageNews = "Home page news"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Encoded in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N Activity Home"
s.moreResourcesOfThisType = "More resources of this type."
s.accessKeyN = `Accesskey n skips to <a href="#internal-links" accesskey="n">in-page navigation</a>. <a href="#contentstart">Skip to the content start.</a>`
s.examplesInAnotherScript = "This document contains examples in another language/script."
s.relatedLinks = "Related links"
s.techIndexText = "Techniques index"
s.topicIndexText = "Topic index"
s.i18nActivityHomePage = "Internationalization Activity home page."
s.topicIndexForInformation = "Search this site."
s.topics = "Search"
