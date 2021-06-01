// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Арабски',
  'bg':'Български',
  'da':'Датски',
  'de':'Немски',
  'el':'Гръцки',
  'en':'Английски',
  'es':'Испански',
  'fr':'Френски',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Унгарски',
  'it':'Италиански',
  'ja':'Японски',
  'ko':'Корейски',
  'nl':'Холандски',
  'pl':'Полски',
  'pt':'Португалски',
  'pt-br':'Португалски (BR)',
  'ro':'Румънски',
  'ru':'Руски',
  'sv':'Шведски',
  'th':'Таи',
  'tr':'Турски',
  'uk':'Украински',
  'vi':'Виетнамски',
  'zh-hans':'Китайски (опростен)',
  'zh-hant':'Китайски (традиционен)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Начална страница"
s.moreResourcesOfThisType = "Още ресурси от този тип."
s.accessKeyN = 'Код за достъп n прескача към<a href="#internal-links" accesskey="n">навигацията във страницата</a>. <a href="#contentstart">Отиди в началото на съдържанието.</a>'
s.examplesInAnotherScript = "Този документ съдържа и примери написани на дург език/скрипт."
s.worldMap = "Карта на света"
s.searchI18nSite = "Търсене в сайта I18n" 
s.translationDisclaimer = 'Този превод на документа е осигурен от доброволец. В случай на несъответствие или грешки, <a href="'+f.filename+'.en">последният Английски оригинал</a> следва да бъде считан за достоверен.<a href="#copyright">Оригиналното авторско право</a> принадлежи на W3C, както е означено по-долу.'
s.translator = "Преводач:"
s.relatedLinks = "Линкове по темата"
s.articles = "Статии" // used in breadcrumbs, top right of page 
s.topicIndexText = "Topic index"
s.techIndexText = "Techniques index"
s.gotoW3cHome = "Начлана страница на W3C"
s.gotoI18nHome = "Нчална страница на операциите по интернационализация"
s.internationalizationTitle = "Интернационализация"
s.worldwide = "Да създадем световно-достъпна Word Wide Web!"
s.i18nActivityHomePage = "Нчална страница на операциите по интернационализация."
s.home = "Начало"
s.contactI18nActivity = "Помощ от W3C Интернационализация."
s.contact = "Контакт"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask" // Top navigation choice
s.groupsThatMakeUp = "Участие в работата на W3C Интернационализация."
s.groups = "Участие"
s.topicIndexForInformation = "Търсене в сайта."
s.topics = "Търсене"
s.taskBasedIndex = "Научете за техниките и изискванията за интернационализация."
s.techniques = "Научете"
s.informationResources = "Намерете информация в сайта."
s.resources = "Намерете"
s.newsFiltersAndFeeds = "Следвайте работата на W3C Интернационализация."
s.news = "Следвайте"
s.onThisPage = "на тази страница"
s.questionAlt = "Въпроси"
s.questionLink = "Въпрос"
s.question = "Въпрос"
s.backgroundAlt = "Основна информация"
s.backgroundLink = "Основа"
s.background = "Основа"
s.answer = "Отговор" // heading
s.answerAlt = "Отговор"
s.answerLink = "Отговор"
s.byTheWayAlt = "Допълнителна полезна информация"
s.byTheWayLink = "Междо другото"
s.byTheWay = "Междо другото"
s.furtherReadingAlt = "Странична информация"
s.furtherReadingLink = "Странична информация"
s.furtherReading = "Странична информация"
s.intendedAudience = "Аудитория:"
s.skipToAnswer = "[Отиди на отговора]"
s.tellUsWhatYouThink = "Изкажете своето мнение (на Английски)."
s.sendAComment = "Изпрати коментар"
s.subscribeToRSS = "Абонирай се за RSS фиид."
s.newResourcesAlt = "Нотифицира ви всеки път когато има нов публикация."
s.newResources = "Нови ресурси"
s.homePageNewsAlt = "Всички новини от началната страница."
s.homePageNews = "Новините от началната страница"
s.followOurNews = "Абонирай се за нашият новинарски фиид."
s.sentenceDelimiter = "."

s.author = "Автор:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Редактирано от:" // person's name appears after colon
s.translatedBy = "Преводач:"
s.validXHTML = "Валиден XHTML 1.0!"
s.validCSS = "Валиден CSS!"
s.codedInUtf8 = "Енкодинк UTF-8!"

s.translatedFromEnglishVer = "Превод от Английско съдържание от дата "+dt.enVersion+". Последна ревизия на преведената версия: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'За история на промените в документа, виж <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">новинарски фиид</a> за съществени промени, и <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">списък с промени в Github</a> за всички промени след Януари 2016.'
s.untranslatedChanges = '<strong>Забележка:</strong> Направени са промени в <a href="'+f.filename+'.en">Английският оригинал</a> спрямо последния превод. Промените са вмъкнати в тази страница и затова някои пасажи може все още да бъдат на Английски докато превода не бъде актуализиран.'
s.unlinkedTranslation = '<strong>Предупреждение:</strong> Значителни промени са направени в Английския оригинал откакто този документ последно е преведен. Съветваме ви да прочетете <a href="'+f.filename+'">на друг език</a> докато този превод не бъде актуализиран.'
s.new="Ново"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Актуализирано" // same as New
s.translation_updated="Преводът е актуализиран на:" // date appears after colon 

s.aboutThisArticle="Относно тази статия" // title in the right column near the top of the page
s.status_draft="Тази статия е чернова и не е преминала през публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_review="Тази страница е налична за публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_published="Тази страница е одобрена от W3C Internationalization Working Group и е преминала през публична оценка с цел да бъде максимално точна. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_notreviewed="Тази страница е публикувана без да е преминала през публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_obsolete="Тази страница не е актуална. Тя вече не се обновява и може да е неточна. За по-актуална информация, вижте the <a href='http://www.w3.org/International/'>Internationalization Activity начална страница</a>."
s.tests="Тестове" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Бърз отговор" // heading
s.longeranswer = "Детайли" // heading that follows 'Quick answer'
s.additionalinfo = "Допълнителна информация" // heading that sometimes follows 'Details'
s.acknowledgements = "Благодарности на следните хора чиито статии или коментари бяха включени:" // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg = "Ако разрешите браузъра да запише бисквитка, ще продължите да виждате W3C Internationalization Activity страниците (където са налични) на избрания от вас език. Искате ли да запишете бисквиткат?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "