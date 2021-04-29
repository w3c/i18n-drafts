// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'ערבית',
  'bg':'בולגרית',
  'da':'דנית',
  'de':'גרמנית',
  'el':'יוונית',
  'en':'אנגלית',
  'es':'ספרדית',
  'fr':'צרפתית',
  'he':'עברית',
  'hi':'הינדי',
  'hu':'הונגרית',
  'it':'איטלקית',
  'ja':'יפנית',
  'ko':'קוריאנית',
  'nl':'הולנדית',
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
  'zh-hant':'סינית מסורתית',
}

s.suppStylesheets = ''

s.rtlAttribute = " dir='rtl' "
s.ltrAttribute = " dir='ltr' "
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "דף הבית של פעילות ה-I18N"
s.moreResourcesOfThisType = "שאר המשאבים בנושא."
s.accessKeyN = 'בעזרת מקש n, ניתן לדלג במהלך הניווט על הדף. <a href="#contentstart">דלג לתחילת התוכן</a>'
s.examplesInAnotherScript = "המסמך מכיל דוגמאות בשפה ו/או סקריפט אחרים."
s.worldMap = "מפת העולם"
s.searchI18nSite = "חיפוש באתר I18n" 
s.translationDisclaimer = 'המסמך הינו תרגום. במקרה של טעויות או אי התאמות כלשהן עם המסמך המקורי, <a href="'+f.filename+'.en">המקור האחרון באנגלית</a> יחשב כאמין יותר.'
s.translator = "המתרגם:"
s.relatedLinks = "הקישורים הרלוונטיים"
s.articles = "מאמרים" // used in breadcrumbs, top right of page 
s.topicIndexText = "אינדקס נושאים"
s.techIndexText = "אינדקס טכניקות"
s.gotoW3cHome = "עבור לדף הבית של W3C"
s.gotoI18nHome = "עבור לדף הבית של דומיין האדריכלות"
s.internationalizationTitle = "בינאום"
s.worldwide = "ליצור מהרשת רשת כלל עולמית באמת!"
s.i18nActivityHomePage = "דף הבית של פעילות הבינאום."
s.home = "דף הבית"
s.contactI18nActivity = "אודות פעילות הבינאום."
s.contact = "אודות"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "קבוצות העוסקות בפעילות הבינאום."
s.groups = "קבוצות"
s.topicIndexForInformation = "אינדקס הנושאים באתר."
s.topics = "הנושאים"
s.taskBasedIndex = "אינדקס המבוסס על משימות של טכניקות ה-I18N."
s.techniques = "טכניקות"
s.informationResources = "משאבי מידע אודות הבינאום."
s.resources = "משאבים"
s.newsFiltersAndFeeds = "מידע על מסנני החדשות וערוצי ה-RSS עבור פעילות הבינאום של W3C."
s.news = "חדשות"
s.onThisPage = "קישורים בדף"
s.questionAlt = "שאלה"
s.questionLink = "שאלה"
s.question = "שאלה"
s.backgroundAlt = "מידת רקע"
s.backgroundLink = "רקע"
s.background = "רקע"
s.answer = "תשובה" // heading
s.answerAlt = "תשובה"
s.answerLink = "תשובה"
s.byTheWayAlt = "מידע שימושי נוסף"
s.byTheWayLink = "דרך אגב"
s.byTheWay = "דרך אגב"
s.furtherReadingAlt = "קריאה מתקדמת"
s.furtherReadingLink = "קריאה מתקדמת"
s.furtherReading = "קריאה מתקדמת"
s.intendedAudience = "קהל יעד:"
s.skipToAnswer = "[דלג לתשובה]"
s.tellUsWhatYouThink = "אמור לנו מה דעתך (באנגלית)."
s.sendAComment = "שלח לנו הערה"
s.subscribeToRSS = "הירשם להזנת RSS."
s.newResourcesAlt = "קבל הודעה בכל פעם שמשאב חדש מפורסם לראשונה.‏."
s.newResources = "משאבים חדשים"
s.homePageNewsAlt = "כל החדשות המוצגות בדף הבית.‏."
s.homePageNews = "חדשות דף הבית"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "המחבר:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "שונה על-ידי:" // person's name appears after colon
s.translatedBy = "המתרגם:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Encoded in UTF-8!"

s.translatedFromEnglishVer = "התוכן פורסם לראשונה "+dt.enVersion+". עדכון מהותי ראשון "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="חדש"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="מעודכן" // same as New
s.translation_updated="תרגום עודכן:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "