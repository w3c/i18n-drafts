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
s.i18nActivityHome = "I18N Activity Home"
s.moreResourcesOfThisType = "More resources of this type."
s.accessKeyN = 'Accesskey n skips to <a href="#internal-links" accesskey="n">in-page navigation</a>. <a href="#contentstart">Skip to the content start.</a>'
s.examplesInAnotherScript = "This document contains examples in another language/script."
s.worldMap = "World map"
s.searchI18nSite = "I18n site search:" 
s.translationDisclaimer = 'This document is a translation provided by a volunteer. In the case of any discrepancy or errors, the <a href="'+f.filename+'.en">latest English original</a> should be considered authoritative.<a href="#copyright">Original copyright</a> belongs to W3C, as shown below.'
s.translator = "Translator:"
s.relatedLinks = "Related links"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Topic index"
s.techIndexText = "Techniques index"
s.gotoW3cHome = "Go to W3C Home Page"
s.gotoI18nHome = "Go to Internationalization Activity Home Page"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Internationalization Activity home page."
s.home = "Home"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Participate in W3C Internationalization work."
s.groups = "Participate"
s.topicIndexForInformation = "Search this site."
s.topics = "Search"
s.taskBasedIndex = "Learn techniques and requirements for internationalization."
s.techniques = "Learn"
s.informationResources = "Find information on this site."
s.resources = "Find"
s.newsFiltersAndFeeds = "Follow the work at W3C Internationalization."
s.news = "Follow"
s.onThisPage = "On this page"
s.questionAlt = "Question"
s.questionLink = "Question"
s.question = "Question"
s.backgroundAlt = "Background information"
s.backgroundLink = "Background"
s.background = "Background"
s.answerAlt = "Answer"
s.answerLink = "Answer"
s.answer = "Answer" // heading
s.byTheWayAlt = "Additional useful information"
s.byTheWayLink = "By the way"
s.byTheWay = "By the way"
s.furtherReadingAlt = "Further reading"
s.furtherReadingLink = "Further reading"
s.furtherReading = "Further reading"
s.intendedAudience = "Intended audience:"
s.skipToAnswer = "[Skip to the answer]"
s.tellUsWhatYouThink = "Tell us what you think."
s.sendAComment = "Leave a comment"
s.subscribeToRSS = "Subscribe to an RSS feed."
s.newResourcesAlt = "Notifies you each time a new resource is published for the first time."
s.newResources = "New resources"
s.homePageNewsAlt = "All news items shown on the home page."
s.homePageNews = "Home page news"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "By:" // followed by name of author(s)
s.previousAuthors = "Previously by:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Changed by:" // person's name appears after colon
s.translatedBy = "Translator:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Encoded in UTF-8!"

s.translatedFromEnglishVer = "Translated from English content dated "+dt.enVersion+". Translated version last changed "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'">a version in another language</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible.</p><p>If you have comments, please <a id='linktoGHissues' href='#survey'>let us know</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
//s.supercededTranslation = '<strong>Avertissement :</strong> Ceci est une version dépassée de ce document! Il est recommandé de lire <a href="'+g.betterfilename+'.en">la dernière version</a> et si vous le pouvez, de modifier le marque-page ou le lien qui vous a redirigé ici.'
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>, rather than to this page." // used for github-based versions of published articles

s.lastChanged = "Last changed "