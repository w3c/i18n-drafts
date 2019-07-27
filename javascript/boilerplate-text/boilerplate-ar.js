// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'العربية',
  'bg':'البلغارية',
  'da':'الدانماركية',
  'de':'الألمانية',
  'el':'اليونانية',
  'en':'الانجليزية',
  'es':'الأسبانية',
  'fr':'الفرنسية',
  'he':'العبرية',
  'hi':'الهندية',
  'hu':'الهنغارية',
  'it':'الايطالية',
  'ja':'اليابانية',
  'ko':'الكورية',
  'nl':'الهولندية',
  'pl':'البولندية',
  'pt':'البرتغالية',
  'pt-br':'البرتغالية',
  'ro':'الرومانية',
  'ru':'الروسية',
  'sv':'السويدية',
  'th':'التايلاندية',
  'tr':'التركية',
  'uk':'الأوكرانية',
  'vi':'الفيتنامية',
  'zh-hans':'الصينية المبسطة',
  'zh-hant':'الصينية التقليدية'
}

s.suppStylesheets = ''

s.rtlAttribute = " dir='rtl' "
s.ltrAttribute = " dir='ltr' "
s.rlm = "‏"



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "الصفحة الرئيسية لنشاط I18N"
s.moreResourcesOfThisType = "المزيد من هذا النوع من الموارد."
s.accessKeyN = 'مفتاح الوصول n يتخطى إلى التصفح داخل الصفحة. <a href="#contentstart">تخطي إلى بداية المحتوى</a>'
s.examplesInAnotherScript = "تتضمن هذه الوثيقة أمثلة بلغات/أبجديات أخرى."
s.worldMap = "خريطة العالم"
s.searchI18nSite = "بحث موقع I18n" 
s.translationDisclaimer = 'هذه الوثيقة ترجمة للأصل. في حالة وجود تعارض أو أخطاء، تكون   <a href="'+f.filename+'.en">أحدث نسخة من المستند الإنجليزي الأصلي</a> هي التي يُعتد بها. <a href="#copyright">حقوق النسخ الأصلية</a> مملوكة بواسطة W3C، كما هو موضح بأدناه.'
s.translator = "المترجم:"
s.relatedLinks = "روابط متعلقة"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "فهرس الموضوعات"
s.techIndexText = "فهرس الأساليب"
s.gotoW3cHome = "صفحة W3C الرئيسية"
s.gotoI18nHome = "اذهب إلى الصفحة الرئيسية للتدويل"
s.internationalizationTitle = "التدويل"
s.i18nActivityHomePage = "الصفحة الرئيسية لمجال التدويل."
s.home = "الصفحة الرئيسية"
s.aboutI18nActivity = "حول نشاط التدويل."
s.about = "حول"
s.groupsThatMakeUp = "المجموعات المكونة لنشاط التدويل."
s.groups = "المجموعات"
s.topicIndexForInformation = "فهرس الموضوعات للحصول على معلومات حول هذا الموقع"
s.topics = "الموضوعات"
s.taskBasedIndex = "فهرس مهام أساليب التدويل"
s.techniques = "الأساليب"
s.informationResources = "مصادر معلومات حول موقع التدويل."
s.resources = "المصادر"
s.newsFiltersAndFeeds = "معلومات حول مرشحات الأخبار وتغذيات RSS حول تدويل W3C."
s.news = "الأخبار"
s.onThisPage = "في هذه الصفحة"
s.questionAlt = "السؤال"
s.questionLink = "السؤال"
s.question = "السؤال"
s.backgroundAlt = "معلومات الخلفية"
s.backgroundLink = "الخلفية"
s.background = "الخلفية"
s.answer = "الإجابة" // heading
s.answerAlt = "الإجابة"
s.answerLink = "الإجابة"
s.byTheWayAlt = "معلومات إضافية مفيدة"
s.byTheWayLink = "معلومات إضافية"
s.byTheWay = "معلومات إضافية"
s.furtherReadingAlt = "لمزيد من القراءة"
s.furtherReadingLink = "لمزيد من القراءة"
s.furtherReading = "لمزيد من القراءة"
s.intendedAudience = "الجمهور المستهدف:"
s.skipToAnswer = "[تخطي إلى الإجابة]"
s.tellUsWhatYouThink = "قل لنا رأيك (بالانجليزية)."
s.sendAComment = "ابعث تعليق."
s.subscribeToRSS = "الإنضمام إلى خدمة RSS."
s.newResourcesAlt = "الإشعار بكل الموارد الجديدة تنشر للمرة الاولى.‏"
s.newResources = "موارد جديدة."
s.homePageNewsAlt = "كل الأخبار الواردة في الصفحة الرئيسية.‏"
s.homePageNews = "الصفحة الرئيسية للأخبار."
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "By:‏" // followed by name of author(s)
s.previousAuthors = "Previously by:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Changed by:" // person's name appears after colon
s.translatedBy = "المترجم:"
s.validXHTML = "XHTML 1.0 سليم!"
s.validCSS = "CSS سليم!"
s.codedInUtf8 = "بترميز UTF-8!"

s.translatedFromEnglishVer = "مترجم عن محتوى مكتوب باللغة الإنجليزية بتاريخ "+dt.enVersion+". تغيرت النسخة المترجمة لأخر مرة في "+dt.thisVersionPlain+" بتوقيت جرينيتش"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="نبذة عن هذه المقالة" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles
