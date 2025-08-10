// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.suppStylesheets = ''

s.rtlAttribute = " dir='rtl' "
s.ltrAttribute = " dir='ltr' "
s.rlm = "‏"

// TRANSLATE THE FOLLOWING
// but do not translate anything inside ${...} – but do move those items where needed to fit the syntax of the translation


// used when changing the language of the page
// do not translate the abbreviation at the start of the line, just translate the language name

s.currLang = {
  'ar':'العربية',
  'bg':'البلغارية',
  'da':'الدانماركية',
  'de':'الألمانية',
  'el':'اليونانية',
  'en':'الانجليزية',
  'es':'الأسبانية',
  'fr':'الفرنسية',
  'gl':'الجاليكية',
  'he':'العبرية',
  'hi':'الهندية',
  'hu':'الهنغارية',
  'it':'الايطالية',
  'ja':'اليابانية',
  'ko':'الكورية',
  'nl':'الهولندية',
  'pes':'الفارسية',
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

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "إذا سمحت للمتصفح بتعيين ملف تعريف الارتباط (Cookies)، فستستمر في مشاهدة صفحات نشاط التدويل W3C (إن وجدت) باللغة التي اخترتها. هل ترغب في إنشاء ملف تعريف الارتباط?"

// items in top right beige column
s.worldMap = "خريطة العالم"  // title text for image, top right
s.searchI18nSite = "بحث موقع I18N" // placeholder text for search box, top right
s.translationDisclaimer = `هذه الوثيقة ترجمة للأصل. في حالة وجود تعارض أو أخطاء، تكون <a href="${ f.filename }.en">أحدث نسخة المستند الإنجليزي الأصلي</a> هي الموثوقة. <a href="#copyright">حقوق الطبع والنشر الأصلية</a> بملك W3C، كما هو موضح بأسفله.`  // text appears only on translated pages

s.articles = "مقالات" // used in breadcrumbs, top right of page
s.tests="اختبارات" // used at the end of breadcrumbs for test related pages
s.home = "الصفحة الرئيسية" // start of breadcrumbs
s.onThisPage = "في هذه الصفحة"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="نبذة عن هذا المقال" // title in the right column near the top of the page
s.status_draft="هذا المقال عبارة عن مسودة لم يتم اقتراحها بعد لمراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_review="هذا المقال  متاح حاليًا لمراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_published="تمت مراجعة هذا المقال من قِبل مجموعة عمل التدويل لدى W3C وخضع لمراجعة العامة لجعلها دقيقة قدر الإمكان.</p><p>إذا كان لديك تعليقات، فيرجى <a href='#survey'>إعلامنا</a>."
s.status_notreviewed="تم نشر هذا المقال دون مراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_obsolete="هاه المقال قديم الآن. لم تعد صيانته ومن المحتمل أن يكون غير دقيق. لمزيد من المعلومات الحديثة، انظر <a href='http://www.w3.org/International/'>الصفحة الرئيسية لنشاط التدويل</a>."


// top left of page
s.gotoW3cHome = "صفحة W3C الرئيسية"  // title text for W3C logo
s.gotoI18nHome = "اذهب إلى الصفحة الرئيسية للتدويل" // title text for i18n banner
s.internationalizationTitle = "التدويل"  // the word above the orange line
s.worldwide = "جعل شبكة الويب العالميّة عالميّة حقًّا!"  // the words below the orange line
s.techniques = "تعلم"  // site links link text, top left
s.taskBasedIndex = "تعلم التقنيات ومتطلبات التدويل."  // title text for s.techniques
s.resources = "العثور"  // site links link text, top left
s.informationResources = "العثور على معلومات على هذا الموقع."  // title text for s.resources
s.ask = "اطلب"  // site links link text, top left
s.askI18nActivity = "اطلب المساعدة أو المعلومات."  // title text for s.ask
s.news = "تابع"  // site links link text, top left
s.newsFiltersAndFeeds = "تابع العمل في تدويل عند W3C"  // title text for s.news
s.groups = "شارك" // site links link text, top left
s.groupsThatMakeUp = "شارك في عمل W3C في التدويل ." // title text for s.groups
s.about = "بشأن" // site links link text, top left
s.aboutI18nActivity = "عن التدويل في W3C." // title text for s.about


// document status information, below main heading
s.intendedAudience = "الجمهور المستهدف:"  // preface to audience description (being faded out)
s.lastChanged = "آخر تعديل "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "قل لنا رأيك."  // text content
s.sendAComment = "ابعث تعليق." // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "كتبه:‏ " // followed by name of author(s)
s.previousAuthors = "كتبت سابقا من قبل:‏ " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "غيرت من قبل:‏ " // person's name appears after colon
s.translatedBy = "المترجم: " // person's name appears after colon
s.acknowledgements = "شكرًا أيضًا للأشخاص التاليين لمساهماتهم أو تعليقاتهم: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `مترجم عن محتوى مكتوب باللغة الإنجليزية بتاريخ ${ dt.enVersion }. تغيرت النسخة المترجمة لأخر مرة في ${ dt.thisVersionPlain } بتوقيت جرينيتش`
s.translation_updated="تم تحديث الترجمة:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `لمعرفة تاريخ التغييرات في الوثيقة يرجى مراجعة <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">موجز الأخبار</a> لمعرفة التغييرات الجوهرية، و<a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">قائمة التعهدات «commits» على Github</a>  للاطلاع على جميع التغييرات التي تمت منذ يناير 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>ملاحظة:</strong> تم إجراء تغييرات على <a href="${ f.filename }.en">النص الأصلي بالإنجليزية</a> منذ ترجمته. تم دمج التغييرات في هذه الصفحة ، وقد يتم عرض بعض الفقرات باللغة الإنجليزية حتى يتم تحديث الترجمة.`
s.unlinkedTranslation = `<strong>انتباه:</strong> تم إجراء تغييرات مادية على النسخة الأصلية الإنجليزية منذ ترجمة هذه الوثيقة. يُنصح بقراءة <a href="${ f.filename }.en">النسخة الإنجليزية</a> حتى يتم تحديث هذه الترجمة.`
s.githubRedirect = `<strong>ملاحظة!</strong> &nbsp; هذه مسودة المحرر لهذا المقال. يجب أن تشير جميع الروابط والإشارات إلى <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>الإصدار الموجود على موقع W3C</a>.` // used for github-based versions of published articles


s.new="جديد"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="محدث" // same as New


// strings to promote consistency in article content
s.question = "السؤال"  // heading
s.questionAlt = "السؤال"  // title text for s.question
s.questionLink = "السؤال"  // 
s.skipToAnswer = "[انتقل إلى الإجابة]"  // link text
s.background = "خلفي" // heading
s.backgroundAlt = "معلومات خلفية" // title text for s.background
s.backgroundLink = "روابط خلفية"
s.answer = "الإجابة" // heading
s.answerAlt = "الإجابة" // title text for s.answer
s.answerLink = "الإجابة"
s.byTheWay = "معلومات إضافية" // heading
s.byTheWayAlt = "معلومات إضافية مفيدة" // title text for s.byTheWay
s.byTheWayLink = "معلومات إضافية"
s.furtherReading = "مزيد من القراءة" // heading
s.furtherReadingAlt = "مزيد من القراءة" // title text for s.byTheWay
s.furtherReadingLink = "مزيد من القراءة"
s.quickanswer = "جواب سريع" // heading
s.longeranswer = "تفاصيل" // heading that follows 'Quick answer'
s.additionalinfo = "معلومات إضافية" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "الإنضمام إلى خدمة RSS."  
s.newResourcesAlt = "الإشعار بكل الموارد الجديدة تنشر للمرة الاولى."
s.newResources = "موارد جديدة."
s.homePageNewsAlt = "كل الأخبار الواردة في الصفحة الرئيسية."
s.homePageNews = "الصفحة الرئيسية للأخبار."
s.followOurNews = "تابع مجرى أخبارنا"

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 سليم!"
s.validCSS = "CSS سليم!"
s.codedInUtf8 = "بترميز UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "الصفحة الرئيسية لنشاط I18N"
s.moreResourcesOfThisType = "المزيد من هذا النوع من الموارد."
s.accessKeyN = `مفتاح الوصول n ينتقل<a href="#contentstart">إلى بداية المحتوى</a>`
s.examplesInAnotherScript = "تتضمن هذه الوثيقة أمثلة بلغات/أبجديات أخرى."
s.relatedLinks = "روابط متعلقة"
s.techIndexText = "فهرس المواضيع."
s.topicIndexText = "فهرس  التقنيات"
s.i18nActivityHomePage = "الصفحة الرئيسية لنشاط التدويل."
s.topicIndexForInformation = "ابحث في هذا الموقع"
s.topics = "ابحث"
