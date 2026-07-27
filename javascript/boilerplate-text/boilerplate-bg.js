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
  'ar':'Арабски',
  'bg':'Български',
  'da':'Датски',
  'de':'Немски',
  'el':'Гръцки',
  'en':'Английски',
  'es':'Испански',
  'fr':'Френски',
  'gl':'Галисийски',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Унгарски',
  'it':'Италиански',
  'ja':'Японски',
  'ko':'Корейски',
  'nl':'Холандски',
  'pes':'Persian',
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
  'zh-hant':'Китайски (традиционен)'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Ако разрешите браузъра да запише бисквитка, ще продължите да виждате W3C Internationalization Activity страниците (където са налични) на избрания от вас език. Искате ли да запишете бисквиткат?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Карта на света"  // title text for image, top right
s.searchI18nSite = "Търсене в сайта I18n" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `Този превод на документа е осигурен от доброволец. В случай на несъответствие или грешки, <a href="${ s.englishOriginal }">последният Английски оригинал</a> следва да бъде считан за достоверен.<a href="#copyright">Оригиналното авторско право</a> принадлежи на W3C, както е означено по-долу.`  // text appears only on translated pages

s.articles = "Статии" // used in breadcrumbs, top right of page
s.tests="Тестове" // used at the end of breadcrumbs for test related pages
s.home = "Начало" // start of breadcrumbs
s.onThisPage = "на тази страница"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Относно тази статия" // title in the right column near the top of the page
s.status_draft="Тази статия е чернова и не е преминала през публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_review="Тази страница е налична за публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_published="Тази страница е одобрена от W3C Internationalization Working Group и е преминала през публична оценка с цел да бъде максимално точна. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_notreviewed="Тази страница е публикувана без да е преминала през публична оценка. Ако имате коментари, моля изпратете ги като използвате <a href='#survey'>линка в дъното на тази страница</a>."
s.status_obsolete="Тази страница не е актуална. Тя вече не се обновява и може да е неточна. За по-актуална информация, вижте the <a href='http://www.w3.org/International/'>Internationalization Activity начална страница</a>."


// top left of page
s.gotoW3cHome = "Начлана страница на W3C"  // title text for W3C logo
s.gotoI18nHome = "Нчална страница на операциите по интернационализация" // title text for i18n banner
s.internationalizationTitle = "Интернационализация"  // the word above the orange line
s.worldwide = "Да създадем световно-достъпна Word Wide Web!"  // the words below the orange line
s.techniques = "Научете"  // site links link text, top left
s.taskBasedIndex = "Научете за техниките и изискванията за интернационализация."  // title text for s.techniques
s.resources = "Намерете"  // site links link text, top left
s.informationResources = "Намерете информация в сайта."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Следвайте"  // site links link text, top left
s.newsFiltersAndFeeds = "Следвайте работата на W3C Интернационализация."  // title text for s.news
s.groups = "Участие" // site links link text, top left
s.groupsThatMakeUp = "Участие в работата на W3C Интернационализация." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Аудитория: "  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Изкажете своето мнение (на Английски)."  // text content
s.sendAComment = "Изпрати коментар" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Автор: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Редактирано от: " // person's name appears after colon
s.translatedBy = "Преводач: " // person's name appears after colon
s.acknowledgements = "Благодарности на следните хора чиито статии или коментари бяха включени: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Превод от Английско съдържание от дата ${ dt.enVersion }. Последна ревизия на преведената версия ${ dt.thisVersionPlain } GMT`
s.translation_updated="Преводът е актуализиран на: " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `За история на промените в документа, виж <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">новинарски фиид</a> за съществени промени, и <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">списък с промени в Github</a> за всички промени след Януари 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Забележка:</strong> Направени са промени в <a href="${ s.englishOriginal }">Английският оригинал</a> спрямо последния превод. Промените са вмъкнати в тази страница и затова някои пасажи може все още да бъдат на Английски докато превода не бъде актуализиран.`
s.unlinkedTranslation = `<strong>Предупреждение:</strong> Значителни промени са направени в Английския оригинал откакто този документ последно е преведен. Съветваме ви да прочетете <a href="${ f.filename }">на друг език</a> докато този превод не бъде актуализиран.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>, rather than to this page.` // used for github-based versions of published articles


s.new="Ново"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Актуализирано" // same as New


// strings to promote consistency in article content
s.question = "Въпрос"  // heading
s.questionAlt = "Въпроси"  // title text for s.question
s.questionLink = "Въпрос"  // 
s.skipToAnswer = "[Отиди на отговора]"  // link text
s.background = "Основа" // heading
s.backgroundAlt = "Основна информация" // title text for s.background
s.backgroundLink = "Основа"
s.answer = "Отговор" // heading
s.answerAlt = "Отговор" // title text for s.answer
s.answerLink = "Отговор"
s.byTheWay = "Междо другото" // heading
s.byTheWayAlt = "Допълнителна полезна информация" // title text for s.byTheWay
s.byTheWayLink = "Междо другото"
s.furtherReading = "Странична информация" // heading
s.furtherReadingAlt = "Странична информация" // title text for s.byTheWay
s.furtherReadingLink = "Странична информация"
s.quickanswer = "Бърз отговор" // heading
s.longeranswer = "Детайли" // heading that follows 'Quick answer'
s.additionalinfo = "Допълнителна информация" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Абонирай се за RSS фиид."  
s.newResourcesAlt = "Нотифицира ви всеки път когато има нов публикация."
s.newResources = "Нови ресурси"
s.homePageNewsAlt = "Всички новини от началната страница."
s.homePageNews = "Новините от началната страница"
s.followOurNews = "Абонирай се за нашият новинарски фиид."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Валиден XHTML 1.0!"
s.validCSS = "Валиден CSS!"
s.codedInUtf8 = "Енкодинк UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N Начална страница"
s.moreResourcesOfThisType = "Още ресурси от този тип."
s.accessKeyN = `Код за достъп n прескача към<a href="#internal-links" accesskey="n">навигацията във страницата</a>. <a href="#contentstart">Отиди в началото на съдържанието.</a>`
s.examplesInAnotherScript = "Този документ съдържа и примери написани на дург език/скрипт."
s.relatedLinks = "Линкове по темата"
s.techIndexText = "Techniques index"
s.topicIndexText = "Topic index"
s.i18nActivityHomePage = "Нчална страница на операциите по интернационализация."
s.topicIndexForInformation = "Търсене в сайта."
s.topics = "Търсене"


/*

MISSING TRANSLATIONS

check all top left links !

s.ask
s.askI18nActivity
s.about 
s.aboutI18nActivity 
s.lastChanged 
s.previousAuthors 
s.githubRedirect 

'pes':'Persian',


*/
