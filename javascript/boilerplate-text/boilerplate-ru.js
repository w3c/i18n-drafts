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
  'ar':'Арабский',
  'bg':'Болгарский',
  'da':'Датский',
  'de':'Немецкий',
  'el':'Греческий',
  'en':'Английский',
  'es':'Испанский',
  'fr':'Французский',
  'gl':'Галисийский',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Венгерский',
  'it':'Итальянский',
  'ja':'Японский',
  'ko':'Корейский',
  'nl':'Голландский',
  'pes':'Персидский',
  'pl':'Польский',
  'pt':'Португальский',
  'pt-br':'Португальский',
  'ro':'Румынский',
  'ru':'Русский',
  'sv':'Шведский',
  'th':'Тайский',
  'tr':'Турецкий',
  'uk':'Украинский',
  'vi':'Вьетнамский',
  'zh-hans':'Упрощенный китайский',
  'zh-hant':'Традиционный китайский'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Если вы разрешите браузеру установить cookie, вы будете видеть страницы W3C Internationalization Activity на выбранном вами языке (там, где это доступно). Установить cookie?"

// items in top right beige column
s.worldMap = "Карта мира"  // title text for image, top right
s.searchI18nSite = "Поиск веб-сайта I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Данный документ является переводом. В случае каких-либо несоответствий и ошибок <a href="${ f.filename }.en">последняя версия документа на английском языке</a> должна рассматриваться в качестве официальной. <a href="#copyright">Первоначальное авторское право</a> принадлежит W3C, как то указано ниже.`  // text appears only on translated pages

s.articles = "Статьи" // used in breadcrumbs, top right of page
s.tests="Тесты" // used at the end of breadcrumbs for test related pages
s.home = "Главная" // start of breadcrumbs
s.onThisPage = "на данной странице"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Об этой статье" // title in the right column near the top of the page
s.status_draft="Эта статья представляет собой проект, который еще не прошел публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>.."
s.status_review="Эта статья в настоящее время проходит публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_published="Эта статья рассмотрена Рабочей Группой W3C Интернационализации и прошла публичное обозрение, чтобы сделать ее как можно более точной. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_notreviewed="Эта статья была опубликована без публичного обозрения. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_obsolete="Эта статья устарела. Она больше не поддерживается и может быть неточной. Для получения более актуальной информации, смотрите <a href='http://www.w3.org/International/'>Главную страницу Internationalization Activity</a>."


// top left of page
s.gotoW3cHome = "Перейти на главную страницу W3C"  // title text for W3C logo
s.gotoI18nHome = "Перейти на главную страницу операций интернационализации" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Сделаем Всемирную паутину действительно всемирной!"  // the words below the orange line
s.techniques = "Изучить"  // site links link text, top left
s.taskBasedIndex = "Алфавитный указатель технологий i18n, построенный на основе их задач."  // title text for s.techniques
s.resources = "Найти"  // site links link text, top left
s.informationResources = "Информационные ресурсы о данном веб-сайте интернационализации."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Подписаться"  // site links link text, top left
s.newsFiltersAndFeeds = "Информация о новостных фильтрах и исходных материалах, использующихся для интернационализации W3C."  // title text for s.news
s.groups = "Присоединиться" // site links link text, top left
s.groupsThatMakeUp = "Группы, задействованные для выполнения операций интернационализации." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Предполагаемая аудитория:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Выскажите своё мнение (по-английски)."  // text content
s.sendAComment = "Напишите нам" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Автор: " // followed by name of author(s)
s.previousAuthors = "Предыдущий автор: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Изменения внес: " // person's name appears after colon
s.translatedBy = "Переводчик: " // person's name appears after colon
s.acknowledgements = "Спасибо также следующим людям, чей вклад или отзывы были включены: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Перевод с английского: ${ dt.enVersion }. Последнее внесение изменений в перевод: ${ dt.thisVersionPlain } GMT`
s.translation_updated="Обновление перевода:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Вы можете отслеживать историю изменений документа здесь: <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">новостная лента</a> (существенные изменения) или <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">список Github коммитов</a> (все правки с января 2016).`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Внимание:</strong> <a href="${ f.filename }.en">Оригинал на английском языке</a> был изменен после того, как был создан данный перевод. Изменения были добавлены к текущей странице, так что вы можете видеть некоторые блоки текста на английском языке до тех пор, пока не будет обновлен перевод.`
s.unlinkedTranslation = `<strong>Предупреждение:</strong> Оригинал на английском языке существенно измененился с того момента, как документ был переводен. Рекомендуется читать <a href="${ f.filename }.en">версию на английском языке</a> до тех пор, пока перевод не будет обновлен.`
s.githubRedirect = `<strong>Внимание!</strong> &nbsp; Это только редакторский черновик статьи. Все ссылки и закладки должны вести на <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>версию, размещенную на W3C сайте</a>.` // used for github-based versions of published articles


s.new="Новое"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Обновленое" // same as New


// strings to promote consistency in article content
s.question = "Вопрос"  // heading
s.questionAlt = "Вопрос"  // title text for s.question
s.questionLink = "Вопрос"  // 
s.skipToAnswer = "[Перейти к ответу]"  // link text
s.background = "Вводная информация" // heading
s.backgroundAlt = "Вводная информация" // title text for s.background
s.backgroundLink = "Вводная информация"
s.answer = "Ответ" // heading
s.answerAlt = "Ответ" // title text for s.answer
s.answerLink = "Ответ"
s.byTheWay = "Кстати говоря" // heading
s.byTheWayAlt = "Дополнительные полезные сведения" // title text for s.byTheWay
s.byTheWayLink = "Кстати говоря"
s.furtherReading = "Дополнительные материалы" // heading
s.furtherReadingAlt = "Дополнительные материалы" // title text for s.byTheWay
s.furtherReadingLink = "Дополнительные материалы"
s.quickanswer = "Быстрый ответ" // heading
s.longeranswer = "Подробный ответ" // heading that follows 'Quick answer'
s.additionalinfo = "Дополнительная информация" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Подпишитесь на ленту новостей RSS."  
s.newResourcesAlt = "Уведомляет вас о новых публикациях при первом их появлении."
s.newResources = "Новые публикации"
s.homePageNewsAlt = "Все новости, показываемые на главной странице."
s.homePageNews = "Новости главной страницы"
s.followOurNews = "Следите за нашей новостной лентой."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Допустимый XHTML 1.0!"
s.validCSS = "Допустимый CSS!"
s.codedInUtf8 = "Кодировка UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Процесс перехода на главную страницу I18N"
s.moreResourcesOfThisType = "Больше ресурсов данного типа."
s.accessKeyN = `Ускоряющая клавиша n предназначена для пропусков при навигации по страницам. <a href="#contentstart">Пропуск для перехода на начало контента.</a>`
s.examplesInAnotherScript = "Настоящий документ содержит примеры на других языках/скриптах."
s.relatedLinks = "Связанные ссылки"
s.techIndexText = "Алфавитный указатель технологий"
s.topicIndexText = "Алфавитный указатель тематических разделов"
s.i18nActivityHomePage = "Главная страница операций интернационализации."
s.topicIndexForInformation = "Алфавитный указатель тематических разделов данного веб-сайта."
s.topics = "Темы"



/*

MISSING TRANSLATIONS

check all top left links !

ask
askI18nActivity
about
aboutI18nActivity
lastChanged




*/