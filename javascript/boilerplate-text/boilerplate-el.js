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
  'ar':'Αραβικά',
  'bg':'Βουλγαρικά',
  'da':'Δανικά',
  'de':'Γερμανικά',
  'el':'Ελληνικά',
  'en':'Αγγλικά',
  'es':'Ισπανικά',
  'fr':'Γαλλικά',
  'gl':'Γαλικιανά',
  'he':'Εβραϊκά',
  'hi':'Χίντι',
  'hu':'Ουγγρικά',
  'it':'Ιταλικά',
  'ja':'Ιαπωνικά',
  'ko':'Κορεατικά',
  'nl':'Ολλανδικά',
  'pes':'Persian',
  'pl':'Πολωνικά',
  'pt':'Πορτογαλικά',
  'pt-br':'Πορτογαλικά',
  'ro':'Ρουμανικά',
  'ru':'Ρωσικά',
  'sv':'Σουηδικά',
  'th':'Ταϊλανδικά',
  'tr':'Τουρκικά',
  'uk':'Ουκρανικά',
  'vi':'Βιετναμεζικά',
  'zh-hans':'Κινεζικά Απλοποιημένα',
  'zh-hant':'Κινεζικά Παραδοσιακά'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// items in top right beige column
s.worldMap = "Παγκόσμιος χάρτης"  // title text for image, top right
s.searchI18nSite = "Αναζήτηση ιστοχώρου I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Το παρόν έγγραφο είναι μετάφραση. Σε περίπτωση τυχόν ασυμφωνιών ή σφαλμάτων, επίσημο θα πρέπει να θεωρηθεί <a href="${ f.filename }.en">το πιο πρόσφατο αγγλικό πρωτότυπο</a>. Τα <a href="#copyright">πρωτότυπα πνευματικά δικαιώματα</a> ανήκουν στην W3C, όπως περιγράφεται παρακάτω.`  // text appears only on translated pages

s.articles = "Άρθρα" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Home" // start of breadcrumbs
s.onThisPage = "σε αυτήν τη σελίδα"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible.</p><p>If you have comments, please <a id='linktoGHissues' href='#survey'>let us know</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='https://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "Μετάβαση στην αρχική σελίδα W3C"  // title text for W3C logo
s.gotoI18nHome = "Μετάβαση στην αρχική σελίδα της Δραστηριότητας Διεθνοποίησης" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Κάνοντας τον Παγκόσμιο Ιστό πραγματικά Παγκόσμιο"  // the words below the orange line
s.techniques = "Τεχνικές"  // site links link text, top left
s.taskBasedIndex = "Ευρετήριο που βασίζεται σε εργασίες των τεχνικών i18n."  // title text for s.techniques
s.resources = "Πόροι"  // site links link text, top left
s.informationResources = "Πόροι πληροφοριών σχετικά με τον ιστοχώρο Διεθνοποίησης."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Ειδήσεις"  // site links link text, top left
s.newsFiltersAndFeeds = "Πληροφορίες σχετικά με φίλτρα ειδήσεων και τροφοδοσίες RSS για τη Διεθνοποίηση W3C."  // title text for s.news
s.groups = "Ομάδες" // site links link text, top left
s.groupsThatMakeUp = "Ομάδες που απαρτίζουν τη Δραστηριότητα Διεθνοποίησης." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Προοριζόμενο κοινό: "  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Πείτε μας τη γνώμη σας (στα Αγγλικά)."  // text content
s.sendAComment = "Στείλτε μας το σχόλιό σας" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Συγγραφέας: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Τροποποιήθηκε από: " // person's name appears after colon
s.translatedBy = "Μεταφραστής: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Μεταφράστηκε από το αγγλικό περιεχόμενο την ημερομηνία ${ dt.enVersion }. Τελευταία αλλαγή της μεταφρασμένης έκδοσης ${ dt.thisVersionPlain } GMT`
s.translation_updated="Ενημέρωση της μετάφρασης: " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="https://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Σημείωση:</strong> Έχουν γίνει αλλαγές στο <a href="${ f.filename }.en">αγγλικό πρωτότυπο</a> από τη μετάφραση αυτού του εγγράφου. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }">a version in another language</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>, rather than to this page.` // used for github-based versions of published articles


s.new="Νέο"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Ενημερώθηκε" // same as New


// strings to promote consistency in article content
s.question = "Ερώτηση"  // heading
s.questionAlt = "Ερώτηση"  // title text for s.question
s.questionLink = "Ερώτηση"  // 
s.skipToAnswer = "[Μετάβαση στην απάντηση]"  // link text
s.background = "Υπόβαθρο" // heading
s.backgroundAlt = "Πληροφορίες υπόβαθρου" // title text for s.background
s.backgroundLink = "Υπόβαθρο"
s.answer = "Απάντηση" // heading
s.answerAlt = "Απάντηση" // title text for s.answer
s.answerLink = "Απάντηση"
s.byTheWay = "Παρεμπιπτόντως" // heading
s.byTheWayAlt = "Πρόσθετες χρήσιμες πληροφορίες" // title text for s.byTheWay
s.byTheWayLink = "Παρεμπιπτόντως"
s.furtherReading = "Περαιτέρω μελέτη" // heading
s.furtherReadingAlt = "Περαιτέρω μελέτη" // title text for s.byTheWay
s.furtherReadingLink = "Περαιτέρω μελέτη"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Εγγραφή σε Τροφοδότη Ειδήσεων RSS."  
s.newResourcesAlt = "Σας Ενημερώνει για την πρώτη έκδοση μιας νέας πληροφορίας."
s.newResources = "Νέο υλικό πληροφόρησης"
s.homePageNewsAlt = "Όλες οι νέες ειδήσεις παρουσιάζονται στην κεντρική σελίδα."
s.homePageNews = "Κεντρική σελίδα Νέων"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Έγκυρο XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Κωδικοποιημένο σε UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Αρχική σελίδα δραστηριοτήτων I18N"
s.moreResourcesOfThisType = "Περισσότεροι πόροι αυτού του τύπου."
s.accessKeyN = `Το Accesskey n μεταβαίνει στην πλοήγηση εντός σελίδας. <a href="#contentstart">Μετάβαση στην έναρξη περιεχομένου</a>`
s.examplesInAnotherScript = "Το έγγραφο αυτό περιέχει παραδείγματα σε άλλη γλώσσα/κείμενο."
s.relatedLinks = "Σχετικοί σύνδεσμοι"
s.techIndexText = "Ευρετήριο τεχνικών"
s.topicIndexText = "Ευρετήριο θεμάτων"
s.i18nActivityHomePage = "Αρχική σελίδα Δραστηριότητας Διεθνοποίησης."
s.topicIndexForInformation = "Ευρετήριο θεμάτων για πληροφορίες σχετικά με αυτόν τον ιστοχώρο."
s.topics = "θεμάτων"



/*

MISSING TRANSLATIONS

check all top left links !

s.cookieMsg
s.tests
s.aboutThisArticle
s.status_draft
s.status_review
s.status_published
s.status_notreviewed
s.status_obsolete
s.ask
s.askI18nActivity
s.about
s.aboutI18nActivity
s.lastChanged
s.previousAuthors
s.acknowledgements
s.historyOfDocumentChanges
s.untranslatedChanges
s.unlinkedTranslation
s.githubRedirect
s.quickanswer
s.longeranswer
s.additionalinfo



'pes':'Persian',


*/