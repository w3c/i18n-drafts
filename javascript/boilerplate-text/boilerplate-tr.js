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
  'ar':'Arapça',
  'bg':'Bulgarca',
  'da':'Danca',
  'de':'Almanca',
  'el':'Yunanca',
  'en':'İngilizce',
  'es':'İspanyolca',
  'fr':'Fransızca',
  'gl':'Galiçyaca',
  'he':'İbranice',
  'hi':'Hintçe',
  'hu':'Macarca',
  'it':'İtalyanca',
  'ja':'Japonca',
  'ko':'Korece',
  'nl':'Hollanda Dili',
  'pes':'Farsça',
  'pl':'Polonya Dili',
  'pt':'Portekizce',
  'pt-br':'Portekizce',
  'ro':'Romence',
  'ru':'Rusça',
  'sv':'İsveççe',
  'th':'Tay Dili',
  'tr':'Türkçe',
  'uk':'Ukraynaca',
  'vi':'Vietnamca',
  'zh-hans':'Basitleştirilmiş Çince',
  'zh-hant':'Geleneksel Çince'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// items in top right beige column
s.worldMap = "Dünya haritası"  // title text for image, top right
s.searchI18nSite = "I18n sitesinde ara" // placeholder text for search box, top right
s.translationDisclaimer = `Bu belge bir çeviridir. Herhangi bir tutarsızlık veya hata durumunda, <a href="${ f.filename }.en">en son tarihli İngilizce orijinal belge</a> esas alınmalıdır. <a href="#copyright">Orijinal belgenin telif hakkı</a> aşağıdaki belirtildiği gibi W3C'ye aittir.`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Home" // start of breadcrumbs
s.onThisPage = "bu sayfadakiler"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "W3C ana sayfasına git"  // title text for W3C logo
s.gotoI18nHome = "Internationalization Activity ana sayfasına git" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Techniques"  // site links link text, top left
s.taskBasedIndex = "I18n yöntemleriyle ilgili görevleri gösteren dizin."  // title text for s.techniques
s.resources = "Resources"  // site links link text, top left
s.informationResources = "Çeviri sitesiyle ilgili bilgi kaynakları."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "News"  // site links link text, top left
s.newsFiltersAndFeeds = "W3C çevirisi için haber filtreleri ve RSS akışlarıyla ilgili bilgiler."  // title text for s.news
s.groups = "Groups" // site links link text, top left
s.groupsThatMakeUp = "Çeviri etkinliğine katılan gruplar." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Intended audience:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Lütfen bize görüşlerinizi bildirin (İngilizce)."  // text content
s.sendAComment = "Yorum gönderin" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Yazan: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Değiştiren: " // person's name appears after colon
s.translatedBy = "Çeviren: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `${ dt.enVersion } tarihli İngilizce içerikten çevrilmiştir. Çeviri en son ${ dt.thisVersionPlain } GMT tarihinde değiştirilmiştir`
s.translation_updated="Translation updated:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Note:</strong> Changes have been made to <a href="${ f.filename }.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }.en">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="New"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Updated" // same as New


// strings to promote consistency in article content
s.question = "Soru"  // heading
s.questionAlt = "Soru"  // title text for s.question
s.questionLink = "Soru"  // 
s.skipToAnswer = "[Yanıta git]"  // link text
s.background = "İlgili bilgiler" // heading
s.backgroundAlt = "İlgili bilgiler" // title text for s.background
s.backgroundLink = "İlgili bilgiler"
s.answer = "Yanıt" // heading
s.answerAlt = "Yanıt" // title text for s.answer
s.answerLink = "Yanıt"
s.byTheWay = "Aklınızda bulunsun" // heading
s.byTheWayAlt = "İşinize yarayacak ek bilgiler" // title text for s.byTheWay
s.byTheWayLink = "Aklınızda bulunsun"
s.furtherReading = "Ek kaynaklar" // heading
s.furtherReadingAlt = "Ek kaynaklar" // title text for s.byTheWay
s.furtherReadingLink = "Ek kaynaklar"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Bir RSS akışına abone olun."  
s.newResourcesAlt = "Yeni bir kaynak yayımlandığında sizi haberdar eder."
s.newResources = "Yeni kaynaklar"
s.homePageNewsAlt = "Ana sayfada yer alan tüm haberler."
s.homePageNews = "Ana sayfadaki haberler"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Geçerli XHTML 1.0!"
s.validCSS = "Geçerli CSS!"
s.codedInUtf8 = "UTF-8 ile kodlanmış!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N Activity Ana Sayfası"
s.moreResourcesOfThisType = "Bu türdeki diğer kaynaklar."
s.accessKeyN = `Sayfada gezinmek için n erişim tuşunu kullanın. <a href="#contentstart">İçeriğin başına git.</a>`
s.examplesInAnotherScript = "Bu belge başka bir dilde yazılmış örnekler içerir."
s.relatedLinks = "İlgili bağlantılar"
s.techIndexText = "Yöntemler dizini"
s.topicIndexText = "Konu dizini"
s.i18nActivityHomePage = "Internationalization Activity ana sayfası."
s.topicIndexForInformation = "Bu siteyle ilgili bilgilerin konu dizini."
s.topics = "Topics"



/*

MISSING TRANSLATIONS

check all top left links !

articles
tests
home
aboutThisArticle
status_review
status_published
status_notreviewed
status_obsolete
internationalizationTitle
worldwide
techniques
resources

worldwide
ask
askI18nActivity
news
about
aboutI18nActivity
lastChanged
groups
previousAuthors
acknowledgements
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
new
updated
quickanswer
longeranswer
additionalinfo
followOurNews
topics



*/