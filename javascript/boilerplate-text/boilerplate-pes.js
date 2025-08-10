// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.suppStylesheets = ''

s.rtlAttribute = "dir='rtl'"
s.ltrAttribute = "dir='ltr'"
s.rlm = "‏"

// TRANSLATE THE FOLLOWING
// but do not translate anything inside ${...} – but do move those items where needed to fit the syntax of the translation


// used when changing the language of the page
// do not translate the abbreviation at the start of the line, just translate the language name

s.currLang = {
  'ar':'عربی',
  'bg':'بلغاری',
  'da':'دانمارکی',
  'de':'آلمانی',
  'el':'یونانی',
  'en':'انگلیسی',
  'es':'اسپانیایی',
  'fr':'فرانسوی',
  'gl':'گالیسیایی',
  'he':'عبری',
  'hi':'هندی',
  'hu':'مجاری',
  'it':'ایتالیایی',
  'ja':'ژاپنی',
  'ko':'کره‌ای',
  'nl':'هلندی',
  'pes':'فارسی',
  'pl':'لهستانی',
  'pt':'پرتغالی',
  'pt-br':'پرتغالی برزیلی',
  'ro':'رومانیایی',
  'ru':'روسی',
  'sv':'سوئدی',
  'th':'تایلندی',
  'tr':'ترکی',
  'uk':'اوکراینی',
  'vi':'ویتنامی',
  'zh-hans':'چینی ساده‌شده',
  'zh-hant':'چینی سنتی'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "اگر اجازه دهید مرورگر یک کوکی تنظیم کند، همچنان برگه‌های فعالیت بین‌المللی‌سازی W3C (در صورت موجود بودن) را به زبانی که انتخاب کرده‌اید مشاهده خواهید کرد. آیا می‌خواهید کوکی تنظیم شود؟"

// items in top right beige column
s.worldMap = "نقشه جهان"  // title text for image, top right
s.searchI18nSite = "جستجو در وبگاه I18n" // placeholder text for search box, top right
s.translationDisclaimer = `این سند ترجمه‌ای است که توسط یک داوطلب ارائه شده است. در صورت هرگونه اختلاف یا خطا، <a href="${ f.filename }.en">نسخه‌ی انگلیسی اصلی</a> به‌عنوان منبع معتبر در نظر گرفته شود. حق نشر اصلی متعلق به W3C است، همانطور که در پایین برگه نشان داده شده است.`  // text appears only on translated pages

s.articles = "مقاله‌ها" // used in breadcrumbs, top right of page
s.tests="آزمون‌ها" // used at the end of breadcrumbs for test related pages
s.home = "صفحه اصلی" // start of breadcrumbs
s.onThisPage = "در این برگه"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="درباره‌ی این مقاله" // title in the right column near the top of the page
s.status_draft="این مقاله یک پیش‌نویس است که هنوز مورد بررسی عمومی قرار نگرفته است. اگر دیدگاه‌ی دارید، لطفا از <a href='#survey'>پیوند پایین این برگه</a> استفاده کنید."
s.status_review="این مقاله در حال حاضر برای بررسی عمومی منتشر شده است. اگر دیدگاه‌ی دارید، لطفا از <a href='#survey'>پیوند پایین این برگه</a> استفاده کنید."
s.status_published="این مقاله توسط گروه کاری بین‌المللی‌سازی W3C بررسی شده و از طریق بررسی عمومی به دقیق‌ترین شکل ممکن بهبود یافته است.</p><p>اگر دیدگاه‌ی دارید، لطفا <a id='linktoGHissues' href='#survey'>به ما اطلاع دهید</a>."
s.status_notreviewed="این مقاله بدون بررسی عمومی منتشر شده است. اگر دیدگاه‌ی دارید، لطفا از <a href='#survey'>پیوند پایین این برگه</a> استفاده کنید."
s.status_obsolete="این مقاله اکنون منسوخ شده است و دیگر نگهداری نمی‌شود و احتمالا اطلاعات نادرستی دارد. برای اطلاعات جدیدتر، به <a href='https://www.w3.org/International/'>برگه‌ی فعالیت بین‌المللی‌سازی W3C</a> مراجعه کنید."


// top left of page
s.gotoW3cHome = "رفتن به صفحه‌ی اصلی W3C"  // title text for W3C logo
s.gotoI18nHome = "رفتن به صفحه‌ی اصلی فعالیت بین‌المللی‌سازی" // title text for i18n banner
s.internationalizationTitle = "بین‌المللی‌سازی"  // the word above the orange line
s.worldwide = "جهانی‌سازی وب جهان‌گستر!"  // the words below the orange line
s.techniques = "یادگیری"  // site links link text, top left
s.taskBasedIndex = "یادگیری تکنیک‌ها و الزامات بین‌المللی‌سازی."  // title text for s.techniques
s.resources = "یافتن"  // site links link text, top left
s.informationResources = "یافتن اطلاعات در این وبگاه."  // title text for s.resources
s.ask = "پرسش"  // site links link text, top left
s.askI18nActivity = "درخواست کمک یا اطلاعات."  // title text for s.ask
s.news = "پی‌گیری"  // site links link text, top left
s.newsFiltersAndFeeds = "پی‌گیری کردن فعالیت بین‌المللی‌سازی W3C."  // title text for s.news
s.groups = "مشارکت" // site links link text, top left
s.groupsThatMakeUp = "مشارکت در فعالیت بین‌المللی‌سازی W3C." // title text for s.groups
s.about = "درباره" // site links link text, top left
s.aboutI18nActivity = "درباره‌ی فعالیت بین‌المللی‌سازی W3C." // title text for s.about


// document status information, below main heading
s.intendedAudience = "مخاطب مورد نظر: "  // preface to audience description (being faded out)
s.lastChanged = "آخرین تغییر "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "دیدگاه خود را با ما در میان بگذارید."  // text content
s.sendAComment = "ارسال دیدگاه" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "نویسنده: " // followed by name of author(s)
s.previousAuthors = "نویسندگان قبلی: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "تغییر داده شده توسط: " // person's name appears after colon
s.translatedBy = "مترجم: " // person's name appears after colon
s.acknowledgements = "همچنین از افراد زیر که بازخورد یا مشارکت‌شان در نظر گرفته شده است، تشکر می‌کنیم: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `ترجمه‌ شده از محتوای انگلیسی به تاریخ ${ dt.enVersion }. نسخه‌ی ترجمه‌شده آخرین بار تغییر یافته در ${ dt.thisVersionPlain } به وقت گرینویچ`
s.translation_updated="ترجمه به‌روز شده: " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `برای مشاهده تاریخچه تغییرات سند، به <a href="https://www.w3.org/blog/International/tag/${ f.searchString }/">خوراک خبری</a> برای تغییرات اساسی و <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">فهرست تغییرات در گیت‌هاب</a> برای تمامی تغییرات از دی ماه ۱۳۹۴ مراجعه کنید.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>توجه:</strong> تغییراتی در <a href="${ f.filename }.en">نسخه‌ی انگلیسی اصلی</a> ایجاد شده است از زمان ترجمه‌ی این سند. این تغییرات در این برگه اعمال شده‌اند، بنابراین ممکن است برخی قسمت‌ها را به زبان انگلیسی ببینید تا زمانی که ترجمه به‌روزرسانی شود.`
s.unlinkedTranslation = `<strong>هشدار:</strong> تغییرات اساسی در نسخه‌ی انگلیسی اصلی از زمان ترجمه‌ی این سند ایجاد شده است. توصیه می‌شود تا زمان به‌روزرسانی این ترجمه، <a href="${ f.filename }">نسخه‌ای به زبان دیگر</a> را مطالعه کنید.`
s.githubRedirect = `<strong>توجه!</strong> &nbsp; این تنها پیش‌نویس ویرایشی این مقاله است. تمام پیوندها و نشانک‌ها باید به <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>نسخه‌ی موجود در وبگاه W3C</a> اشاره داشته باشند، نه به این برگه.` // used for github-based versions of published articles


s.new="جدید"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="به‌روزرسانی‌شده" // same as New


// strings to promote consistency in article content
s.question = "سوال"  // heading
s.questionAlt = "سوال"  // title text for s.question
s.questionLink = "سوال"  // 
s.skipToAnswer = "[رفتن به پاسخ]"  // link text
s.background = "زمینه" // heading
s.backgroundAlt = "اطلاعات زمینه‌ای" // title text for s.background
s.backgroundLink = "زمینه"
s.answer = "پاسخ" // heading
s.answerAlt = "پاسخ" // title text for s.answer
s.answerLink = "پاسخ"
s.byTheWay = "اتفاقا" // heading
s.byTheWayAlt = "اطلاعات مفید اضافی" // title text for s.byTheWay
s.byTheWayLink = "اتفاقا"
s.furtherReading = "مطالعه‌ی بیشتر" // heading
s.furtherReadingAlt = "مطالعه‌ی بیشتر" // title text for s.byTheWay
s.furtherReadingLink = "مطالعه‌ی بیشتر"
s.quickanswer = "پاسخ سریع" // heading
s.longeranswer = "جزئیات" // heading that follows 'Quick answer'
s.additionalinfo = "اطلاعات اضافی" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "اشتراک در خوراک RSS."  
s.newResourcesAlt = "هر بار که یک منبع جدید برای اولین بار منتشر شود، شما را از این طریق مطلع می‌کنیم."
s.newResources = "منابع جدید"
s.homePageNewsAlt = "تمام اخبار نمایش داده‌شده در صفحه‌ی اصلی."
s.homePageNews = "اخبار صفحه‌ی اصلی"
s.followOurNews = "خوراک خبری ما را پی‌گیری کنید."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 معتبر!"
s.validCSS = "CSS معتبر!"
s.codedInUtf8 = "کدگذاری‌شده در UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "صفحه‌ی اصلی فعالیت بین‌المللی‌سازی"
s.moreResourcesOfThisType = "منابع بیشتر از این نوع."
s.accessKeyN = `کلید دسترسی n به <a href="#internal-links" accesskey="n">پیمایش درون‌برگه‌ای</a> می‌رود. <a href="#contentstart">رفتن به ابتدای محتوا.</a>`
s.examplesInAnotherScript = "این سند شامل مثال‌هایی به زبان/نگارش دیگر است."
s.relatedLinks = "پیوندهای مرتبط"
s.techIndexText = "فهرست تکنیک‌ها"
s.topicIndexText = "فهرست موضوع"
s.i18nActivityHomePage = "صفحه‌ی اصلی فعالیت بین‌المللی‌سازی."
s.topicIndexForInformation = "جستجو در این وبگاه."
s.topics = "جستجو"
