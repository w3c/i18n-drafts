// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.suppStylesheets = ''

s.rtlAttribute = " dir='rtl' "
s.ltrAttribute = " dir='ltr' "
s.rlm = ""

// TRANSLATE THE FOLLOWING
// but do not translate anything inside ${...} – but do move those items where needed to fit the syntax of the translation


// used when changing the language of the page
// do not translate the abbreviation at the start of the line, just translate the language name

s.currLang = {
  'ar':'ערבית',
  'bg':'בולגרית',
  'da':'דנית',
  'de':'גרמנית',
  'el':'יוונית',
  'en':'אנגלית',
  'es':'ספרדית',
  'fr':'צרפתית',
  'gl':'גליציאנית',
  'he':'עברית',
  'hi':'הינדי',
  'hu':'הונגרית',
  'it':'איטלקית',
  'ja':'יפנית',
  'ko':'קוריאנית',
  'nl':'הולנדית',
  'pes':'פרסית',
  'pl':'פולנית',
  'pt':'פורטוגזית',
  'pt-br':'פורטוגזית',
  'ro':'רומנית',
  'ru':'רוסית',
  'sv':'שוודית',
  'th':'תאי',
  'tr':'טורקית',
  'uk':'אוקראינית',
  'vi':'ויאטנמית',
  'zh-hans':'סינית (מפושטת)',
  'zh-hant':'סינית מסורתית'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// items in top right beige column
s.worldMap = "מפת העולם"  // title text for image, top right
s.searchI18nSite = "חיפוש באתר I18n" // placeholder text for search box, top right
s.translationDisclaimer = `המסמך הינו תרגום. במקרה של טעויות או אי התאמות כלשהן עם המסמך המקורי, <a href="${ f.filename }.en">המקור האחרון באנגלית</a> יחשב כאמין יותר.`  // text appears only on translated pages

s.articles = "מאמרים" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "דף הבית" // start of breadcrumbs
s.onThisPage = "קישורים בדף"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "עבור לדף הבית של W3C"  // title text for W3C logo
s.gotoI18nHome = "עבור לדף הבית של דומיין האדריכלות" // title text for i18n banner
s.internationalizationTitle = "בינאום"  // the word above the orange line
s.worldwide = "ליצור מהרשת רשת כלל עולמית באמת!"  // the words below the orange line
s.techniques = "טכניקות"  // site links link text, top left
s.taskBasedIndex = "אינדקס המבוסס על משימות של טכניקות ה-I18N."  // title text for s.techniques
s.resources = "משאבים"  // site links link text, top left
s.informationResources = "משאבי מידע אודות הבינאום."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "חדשות"  // site links link text, top left
s.newsFiltersAndFeeds = "מידע על מסנני החדשות וערוצי ה-RSS עבור פעילות הבינאום של W3C."  // title text for s.news
s.groups = "קבוצות" // site links link text, top left
s.groupsThatMakeUp = "קבוצות העוסקות בפעילות הבינאום." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "קהל יעד:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "אמור לנו מה דעתך (באנגלית)."  // text content
s.sendAComment = "שלח לנו הערה" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "המחבר: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "שונה על-ידי: " // person's name appears after colon
s.translatedBy = "המתרגם: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `התוכן פורסם לראשונה ${ dt.enVersion }. עדכון מהותי ראשון ${ dt.thisVersionPlain } GMT`
s.translation_updated="תרגום עודכן:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Note:</strong> Changes have been made to <a href="${ f.filename }.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }.en">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="חדש"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="מעודכן" // same as New


// strings to promote consistency in article content
s.question = "שאלה"  // heading
s.questionAlt = "שאלה"  // title text for s.question
s.questionLink = "שאלה"  // 
s.skipToAnswer = "[דלג לתשובה]"  // link text
s.background = "רקע" // heading
s.backgroundAlt = "מידת רקע" // title text for s.background
s.backgroundLink = "רקע"
s.answer = "תשובה" // heading
s.answerAlt = "תשובה" // title text for s.answer
s.answerLink = "תשובה"
s.byTheWay = "דרך אגב" // heading
s.byTheWayAlt = "מידע שימושי נוסף" // title text for s.byTheWay
s.byTheWayLink = "דרך אגב"
s.furtherReading = "קריאה מתקדמת" // heading
s.furtherReadingAlt = "קריאה מתקדמת" // title text for s.byTheWay
s.furtherReadingLink = "קריאה מתקדמת"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "הירשם להזנת RSS."  
s.newResourcesAlt = "קבל הודעה בכל פעם שמשאב חדש מפורסם לראשונה.‏."
s.newResources = "משאבים חדשים"
s.homePageNewsAlt = "כל החדשות המוצגות בדף הבית.‏."
s.homePageNews = "חדשות דף הבית"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Encoded in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "דף הבית של פעילות ה-I18N"
s.moreResourcesOfThisType = "שאר המשאבים בנושא."
s.accessKeyN = `בעזרת מקש n, ניתן לדלג במהלך הניווט על הדף. <a href="#contentstart">דלג לתחילת התוכן</a>`
s.examplesInAnotherScript = "המסמך מכיל דוגמאות בשפה ו/או סקריפט אחרים."
s.relatedLinks = "הקישורים הרלוונטיים"
s.techIndexText = "אינדקס טכניקות"
s.topicIndexText = "אינדקס נושאים"
s.i18nActivityHomePage = "דף הבית של פעילות הבינאום."
s.topicIndexForInformation = "אינדקס הנושאים באתר."
s.topics = "הנושאים"



/*

MISSING TRANSLATIONS

check all top left links !

cookieMsg
tests
aboutThisArticle
status_draft
status_review
status_published
status_notreviewed
status_obsolete
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
previousAuthors
acknowledgements
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
quickanswer
longeranswer
additionalinfo
followOurNews
validXHTML
validCSS
codedInUtf8




*/