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
s.accessKeyN = 'مفتاح الوصول n ينتقل<a href="#contentstart">إلى بداية المحتوى</a>'
s.examplesInAnotherScript = "تتضمن هذه الوثيقة أمثلة بلغات/أبجديات أخرى."
s.worldMap = "خريطة العالم"
s.searchI18nSite = "بحث موقع I18N" 
s.translationDisclaimer = 'هذه الوثيقة ترجمة للأصل. في حالة وجود تعارض أو أخطاء، تكون <a href="'+f.filename+'.en">أحدث نسخة المستند الإنجليزي الأصلي</a> هي الموثوقة. <a href="#copyright">حقوق الطبع والنشر الأصلية</a> بملك W3C، كما هو موضح بأسفله.'
s.translator = "المترجم:"
s.relatedLinks = "روابط متعلقة"
s.articles = "مقالات" // used in breadcrumbs, top right of page 
s.topicIndexText = "فهرس المواضيع."
s.techIndexText = "فهرس  التقنيات"
s.gotoW3cHome = "صفحة W3C الرئيسية"
s.gotoI18nHome = "اذهب إلى الصفحة الرئيسية للتدويل"
s.internationalizationTitle = "التدويل"
s.worldwide = "جعل شبكة الويب العالميّة عالميّة حقًّا!"
s.i18nActivityHomePage = "الصفحة الرئيسية لنشاط التدويل."
s.home = "الصفحة الرئيسية"
s.contactI18nActivity = "الحصول على مساعدة في التدويل عند W3C."
s.contact = "الاتصال"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "شارك في عمل W3C في التدويل ."
s.groups = "شارك"
s.topicIndexForInformation = "ابحث في هذا الموقع"
s.topics = "ابحث"
s.taskBasedIndex = "تعلم التقنيات ومتطلبات التدويل."
s.techniques = "تعلم"
s.informationResources = "العثور على معلومات على هذا الموقع."
s.resources = "العثور"
s.newsFiltersAndFeeds = "تابع العمل في تدويل عند W3C"
s.news = "تابع"
s.onThisPage = "في هذه الصفحة"
s.questionAlt = "السؤال"
s.questionLink = "السؤال"
s.question = "السؤال"
s.backgroundAlt = "معلومات خلفية"
s.backgroundLink = "روابط خلفية"
s.background = "خلفي"
s.answer = "الإجابة" // heading
s.answerAlt = "الإجابة"
s.answerLink = "الإجابة"
s.byTheWayAlt = "معلومات إضافية مفيدة"
s.byTheWayLink = "معلومات إضافية"
s.byTheWay = "معلومات إضافية"
s.furtherReadingAlt = "مزيد من القراءة"
s.furtherReadingLink = "مزيد من القراءة"
s.furtherReading = "مزيد من القراءة"
s.intendedAudience = "الجمهور المستهدف:"
s.skipToAnswer = "[انتقل إلى الإجابة]"
s.tellUsWhatYouThink = "قل لنا رأيك."
s.sendAComment = "ابعث تعليق."
s.subscribeToRSS = "الإنضمام إلى خدمة RSS."
s.newResourcesAlt = "الإشعار بكل الموارد الجديدة تنشر للمرة الاولى."
s.newResources = "موارد جديدة."
s.homePageNewsAlt = "كل الأخبار الواردة في الصفحة الرئيسية."
s.homePageNews = "الصفحة الرئيسية للأخبار."
s.followOurNews = "تابع مجرى أخبارنا"
s.sentenceDelimiter = "."

s.author = "كتبه:‏" // followed by name of author(s)
s.previousAuthors = "كتبت سابقا من قبل:‏" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "غيرت من قبل:‏" // person's name appears after colon
s.translatedBy = "المترجم:"
s.validXHTML = "XHTML 1.0 سليم!"
s.validCSS = "CSS سليم!"
s.codedInUtf8 = "بترميز UTF-8!"

s.translatedFromEnglishVer = "مترجم عن محتوى مكتوب باللغة الإنجليزية بتاريخ "+dt.enVersion+". تغيرت النسخة المترجمة لأخر مرة في "+dt.thisVersionPlain+" بتوقيت جرينيتش"

s.historyOfDocumentChanges = 'لمعرفة تاريخ التغييرات في الوثيقة يرجى مراجعة <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">موجز الأخبار</a> لمعرفة التغييرات الجوهرية، و<a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">قائمة التعهدات «commits» على Github</a>  للاطلاع على جميع التغييرات التي تمت منذ يناير 2016.'
s.untranslatedChanges = '<strong>ملاحظة:</strong> تم إجراء تغييرات على <a href="'+f.filename+'.en">النص الأصلي بالإنجليزية</a> منذ ترجمته. تم دمج التغييرات في هذه الصفحة ، وقد يتم عرض بعض الفقرات باللغة الإنجليزية حتى يتم تحديث الترجمة.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="جديد"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="محدث" // same as New
s.translation_updated="تم تحديث الترجمة:" // date appears after colon 

s.aboutThisArticle="نبذة عن هذا المقال" // title in the right column near the top of the page
s.status_draft="هذا المقال عبارة عن مسودة لم يتم اقتراحها بعد لمراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_review="هذا المقال  متاح حاليًا لمراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_published="تمت مراجعة هذا المقال من قِبل مجموعة عمل التدويل لدى W3C وخضع لمراجعة العامة لجعلها دقيقة قدر الإمكان.</p><p>إذا كان لديك تعليقات، فيرجى <a href='#survey'>إعلامنا</a>."
s.status_notreviewed="تم نشر هذا المقال دون مراجعة عامة. إذا كانت هناك تعليقات، فيرجى إرسالها باستخدام <a href='#survey'>الرابط بالقرب من أسفل هذه الصفحة</a>."
s.status_obsolete="هاه المقال قديم الآن. لم تعد صيانته ومن المحتمل أن يكون غير دقيق. لمزيد من المعلومات الحديثة، انظر <a href='http://www.w3.org/International/'>الصفحة الرئيسية لنشاط التدويل</a>."
s.tests="اختبارات" // used at the end of breadcrumbs for test related pages
s.quickanswer = "جواب سريع" // heading
s.longeranswer = "تفاصيل" // heading
s.additionalinfo = "معلومات إضافية" // heading that sometimes follows 'Details'
s.acknowledgements = "شكرًا أيضًا للأشخاص التاليين لمساهماتهم أو تعليقاتهم:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "إذا سمحت للمتصفح بتعيين ملف تعريف الارتباط (Cookies)، فستستمر في مشاهدة صفحات نشاط التدويل W3C (إن وجدت) باللغة التي اخترتها. هل ترغب في إنشاء ملف تعريف الارتباط?" // this text is to be copied to another location
s.githubRedirect = "<strong>ملاحظة!</strong> &nbsp; هذه مسودة المحرر لهذا المقال. يجب أن تشير جميع الروابط والإشارات إلى <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>الإصدار الموجود على موقع W3C</a>." // used for github-based versions of published articles


s.lastChanged = "آخر تعديل "
