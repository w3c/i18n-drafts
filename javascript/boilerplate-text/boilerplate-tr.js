// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arapça',
  'bg':'Bulgarca',
  'da':'Danca',
  'de':'Almanca',
  'el':'Yunanca',
  'en':'İngilizce',
  'es':'İspanyolca',
  'fr':'Fransızca',
  'he':'İbranice',
  'hi':'Hintçe',
  'hu':'Macarca',
  'it':'İtalyanca',
  'ja':'Japonca',
  'ko':'Korece',
  'nl':'Hollanda Dili',
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
  'zh-hant':'Geleneksel Çince',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Activity Ana Sayfası"
s.moreResourcesOfThisType = "Bu türdeki diğer kaynaklar."
s.accessKeyN = 'Sayfada gezinmek için n erişim tuşunu kullanın. <a href="#contentstart">İçeriğin başına git.</a>'
s.examplesInAnotherScript = "Bu belge başka bir dilde yazılmış örnekler içerir."
s.worldMap = "Dünya haritası"
s.searchI18nSite = "I18n sitesinde ara" 
s.translationDisclaimer = 'Bu belge bir çeviridir. Herhangi bir tutarsızlık veya hata durumunda, <a href="'+f.filename+'.en">en son tarihli İngilizce orijinal belge</a> esas alınmalıdır. <a href="#copyright">Orijinal belgenin telif hakkı</a> aşağıdaki belirtildiği gibi W3C\'ye aittir.'
s.translator = "Çeviren:"
s.relatedLinks = "İlgili bağlantılar"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Konu dizini"
s.techIndexText = "Yöntemler dizini"
s.gotoW3cHome = "W3C ana sayfasına git"
s.gotoI18nHome = "Internationalization Activity ana sayfasına git"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Internationalization Activity ana sayfası."
s.home = "Home"
s.contactI18nActivity = "Çeviri etkinliği ile ilgili bilgiler."
s.contact = "Contact"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Çeviri etkinliğine katılan gruplar."
s.groups = "Groups"
s.topicIndexForInformation = "Bu siteyle ilgili bilgilerin konu dizini."
s.topics = "Topics"
s.taskBasedIndex = "I18n yöntemleriyle ilgili görevleri gösteren dizin."
s.techniques = "Techniques"
s.informationResources = "Çeviri sitesiyle ilgili bilgi kaynakları."
s.resources = "Resources"
s.newsFiltersAndFeeds = "W3C çevirisi için haber filtreleri ve RSS akışlarıyla ilgili bilgiler."
s.news = "News"
s.onThisPage = "bu sayfadakiler"
s.questionAlt = "Soru"
s.questionLink = "Soru"
s.question = "Soru"
s.backgroundAlt = "İlgili bilgiler"
s.backgroundLink = "İlgili bilgiler"
s.background = "İlgili bilgiler"
s.answer = "Yanıt" // heading
s.answerAlt = "Yanıt"
s.answerLink = "Yanıt"
s.byTheWayAlt = "İşinize yarayacak ek bilgiler"
s.byTheWayLink = "Aklınızda bulunsun"
s.byTheWay = "Aklınızda bulunsun"
s.furtherReadingAlt = "Ek kaynaklar"
s.furtherReadingLink = "Ek kaynaklar"
s.furtherReading = "Ek kaynaklar"
s.intendedAudience = "Intended audience:"
s.skipToAnswer = "[Yanıta git]"
s.tellUsWhatYouThink = "Lütfen bize görüşlerinizi bildirin (İngilizce)."
s.sendAComment = "Yorum gönderin"
s.subscribeToRSS = "Bir RSS akışına abone olun."
s.newResourcesAlt = "Yeni bir kaynak yayımlandığında sizi haberdar eder."
s.newResources = "Yeni kaynaklar"
s.homePageNewsAlt = "Ana sayfada yer alan tüm haberler."
s.homePageNews = "Ana sayfadaki haberler"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Yazan:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Değiştiren:" // person's name appears after colon
s.translatedBy = "Çeviren:"
s.validXHTML = "Geçerli XHTML 1.0!"
s.validCSS = "Geçerli CSS!"
s.codedInUtf8 = "UTF-8 ile kodlanmış!"

s.translatedFromEnglishVer = dt.enVersion+" tarihli İngilizce içerikten çevrilmiştir. Çeviri en son "+dt.thisVersionPlain+" GMT tarihinde değiştirilmiştir"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

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