// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Tiếng A-rập',
  'bg':'Tiếng Bun-ga-ri',
  'da':'Tiếng Đan Mạch',
  'de':'Tiếng Đức',
  'el':'Tiếng Hy Lạp',
  'en':'Tiếng Anh',
  'es':'Tiếng Tây Ban Nha',
  'fr':'Tiếng Pháp',
  'he':'Tiếng Hê-brơ',
  'hi':'Tiếng Hin-đi',
  'hu':'Tiếng Hung-ga-ri',
  'it':'Tiếng Ý',
  'ja':'Tiếng Nhật',
  'ko':'Tiếng Hàn Quốc',
  'nl':'Tiếng Hà Lan',
  'pl':'Tiếng Ba Lan',
  'pt':'Tiếng Bồ Đào Nha',
  'pt-br':'Tiếng Bồ Đào Nha',
  'ro':'Tiếng Ru-ma-ni',
  'ru':'Tiếng Nga',
  'sv':'Tiếng Thụy Điển',
  'th':'Tiếng Thái',
  'tr':'Tiếng Thổ Nhĩ Kỳ',
  'uk':'Tiếng U-crai-na',
  'vi':'Tiếng Anh',
  'zh-hans':'Tiếng Trung Quốc (Giản thế)',
  'zh-hant':'Tiếng Trung Quốc (Phồn thế)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Trang Chủ Hoạt Động I18N"
s.moreResourcesOfThisType = "Thêm nguồn thông tin về dạng này."
s.accessKeyN = 'Phím truy cập và bỏ qua khi điều hướng trang. <a href="#contentstart">Bỏ qua để đến phần bắt đầu nội dung.</a>'
s.examplesInAnotherScript = "Tài liệu này bao gồm các ví dụ bằng các thứ tiếng/chữ viết khác."
s.worldMap = "Bản đồ thế giới"
s.searchI18nSite = "Tìm kiếm trên trang I18n" 
s.translationDisclaimer = 'TTài liệu này là một bản dịch. Trong trường hợp xảy ra bất kỳ sự không nhất quán hoặc có lỗi thì <a href="'+f.filename+'.en">bản tiếng Anh gốc mới nhất</a> được coi là bản chính thức. <a href="#copyright">Bản quyền gốc</a> thuộc về W3C, như được chỉ ra dưới đây.'
s.translator = "Người dịch:"
s.relatedLinks = "Các liên kết liên quan"
s.articles = "Các bài báo" // used in breadcrumbs, top right of page 
s.topicIndexText = "Chỉ mục theo chủ đề"
s.techIndexText = "Chỉ mục theo kỹ thuật"
s.gotoW3cHome = "Đi đến Trang Chủ W3C"
s.gotoI18nHome = "Đi đến Trang Chủ Hoạt Động Quốc Tế Hóa"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Trang chủ Hoạt Động Quốc Tế Hóa."
s.home = "Home"
s.contactI18nActivity = "Thông tin về Hoạt Động Quốc Tế Hóa."
s.contact = "Thông tin"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Các nhóm tạo nên Hoạt Động Quốc Tế Hóa."
s.groups = "Các nhóm"
s.topicIndexForInformation = "Chỉ mục theo chủ đề đối với thông tin trên trang web này."
s.topics = "Các chủ đề"
s.taskBasedIndex = "Chỉ mục theo nhiệm vụ đối với các kỹ thuật i18n."
s.techniques = "Các kỹ thuật"
s.informationResources = "Các nguồn thông tin về trang web Quốc Tế Hóa."
s.resources = "Các nguồn thông tin"
s.newsFiltersAndFeeds = "Thông tin về các bộ lọc tin thức và các nguồn tiếp tin RSS (RSS feed) về hoạt động Quốc Tế Hóa W3C."
s.news = "Tin tức"
s.onThisPage = "Trên trang này"
s.questionAlt = "Câu hỏi"
s.questionLink = "Câu hỏi"
s.question = "Câu hỏi"
s.backgroundAlt = "Thông tin cơ sở"
s.backgroundLink = "Cơ sở"
s.background = "Cơ sở"
s.answer = "Trả lời" // heading
s.answerAlt = "Trả lời"
s.answerLink = "Trả lời"
s.byTheWayAlt = "Thông tin hữu ích phụ"
s.byTheWayLink = "Nhân thể"
s.byTheWay = "Nhân thể"
s.furtherReadingAlt = "Đọc thêm"
s.furtherReadingLink = "Đọc thêm"
s.furtherReading = "Đọc thêm"
s.intendedAudience = "Khán thính giả đích:"
s.skipToAnswer = "[Bỏ qua để đến câu trả lời]"
s.tellUsWhatYouThink = "Hãy cho chúng tôi biết ý kiến của bạn (xin viết bằng tiếng Anh)."
s.sendAComment = "Gửi lời nhận xét cho chúng tôi"
s.subscribeToRSS = "Đăng ký đọc tin RSS."
s.newResourcesAlt = "Thông báo cho bạn biết mỗi khi có nguồn tin mới được xuất bản lần đầu tiên."
s.newResources = "Những nguồn tin mới"
s.homePageNewsAlt = "Tất cả những mục tin tức được hiển thị trên trang chủ."
s.homePageNews = "Các tin tức từ trang chủ"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Tác giả:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Được thay đổi bởi:" // person's name appears after colon
s.translatedBy = "Người dịch:"
s.validXHTML = "Đúng theo tiêu chuẩn XHTML 1.0!"
s.validCSS = "CSS hợp lệ!"
s.codedInUtf8 = "Được mã hóa theo UTF-8!"

s.translatedFromEnglishVer = "Được dịch từ bản tiếng Anh vào ngày "+dt.enVersion+". Phiên bản dịch mới nhất được thay đổi vào "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Lưu ý:</strong> Đã thay đổi <a href="/International/$directory$filename.en.php">bản gốc tiếng Anh</a> vì tài liệu này đã được chuyển ngữ. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Mới"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Đã cập nhật" // same as New
s.translation_updated="Đã cập nhật bản dịch:" // date appears after colon 

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