// translate the text between <<<eot and eot  or between quotes
// text following double slashes (such as this line) provides comments for the translator
// never add any text alongside the eot delimiters - not even spaces !
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

//if (isset($xhtmlversion)) { // this is only true for pre-HTML5 pages
//	$datearray = explode(' ',$lastSubstUpdate)
//	$enVersion = $datearray[0]
//	}


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Activity Home"
s.moreResourcesOfThisType = "More resources of this type."
s.accessKeyN = 'Accesskey n skips to <a href="#internal-links" accesskey="n">in-page navigation</a>. <a href="#contentstart">Skip to the content start.</a>'
s.examplesInAnotherScript = "This document contains examples in another language/script."
s.worldMap = "World map"
s.searchI18nSite = "I18n site search:" 
s.translationDisclaimer = 'This document is a translation. In the case of any discrepancy or errors, the <a href="'+f.filename+'.en.php">latest English original</a> should be considered authoritative.<a href="#copyright">Original copyright</a> belongs to W3C, as shown below.'
s.translator = "Translator:"
s.relatedLinks = "Related links"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Topic index"
s.techIndexText = "Techniques index"
s.gotoW3cHome = "Go to W3C Home Page"
s.gotoI18nHome = "Go to Internationalization Activity Home Page"
s.internationalizationTitle = "Internationalization"
s.i18nActivityHomePage = "Internationalization Activity home page."
s.home = "Home"
s.aboutI18nActivity = "About the Internationalization Activity."
s.about = "About"
s.groupsThatMakeUp = "Groups that make up the Internationalization Activity."
s.groups = "Groups"
s.topicIndexForInformation = "Topic index for information on this site."
s.topics = "Topics"
s.taskBasedIndex = "Task-based index of i18n techniques."
s.techniques = "Techniques"
s.informationResources = "Information resources on the Internationalization site."
s.resources = "Resources"
s.newsFiltersAndFeeds = "Information about news filters and RSS feeds for W3C Internationalization."
s.news = "News"
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

s.historyOfDocumentChanges = 'For the history of document changes, search for <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> in the i18n blog.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="/International/'+f.directory+f.filename+'.en.php">the English original</a> since this document was translated. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">See the change log.</a></span>'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_review="This article is currently out for public review. Please send comments to <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>subscribe</a>)</span>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.status_notreviewed="This article was published without public review. If there are things that need addressing, please send us feedback using the link near the bottom of the page."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
