// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Арабский',
  'bg':'Болгарский',
  'da':'Датский',
  'de':'Немецкий',
  'el':'Греческий',
  'en':'Английский',
  'es':'Испанский',
  'fr':'Французский',
  'he':'Иврит',
  'hi':'Хинди',
  'hu':'Венгерский',
  'it':'Итальянский',
  'ja':'Японский',
  'ko':'Корейский',
  'nl':'Голландский',
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

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Процесс перехода на главную страницу I18N"
s.moreResourcesOfThisType = "Больше ресурсов данного типа."
s.accessKeyN ='Ускоряющая клавиша n предназначена для пропусков при навигации по страницам. <a href="#contentstart">Пропуск для перехода на начало контента.</a>'
s.examplesInAnotherScript = "Настоящий документ содержит примеры на других языках/скриптах."
s.worldMap = "Карта мира"
s.searchI18nSite = "Поиск веб-сайта I18n" 
s.translationDisclaimer ='Данный документ является переводом. В случае каких-либо несоответствий и ошибок <a href="'+f.filename+'.en">последняя версия документа на английском языке</a> должна рассматриваться в качестве официальной. <a href="#copyright">Первоначальное авторское право</a> принадлежит W3C, как то указано ниже.'
s.translator = "Переводчик:"
s.relatedLinks = "Связанные ссылки"
s.articles = "Статьи"
s.topicIndexText = "Алфавитный указатель тематических разделов"
s.techIndexText = "Алфавитный указатель технологий"
s.gotoW3cHome = "Перейти на главную страницу W3C"
s.gotoI18nHome = "Перейти на главную страницу операций интернационализации"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Сделаем Всемирную паутину действительно всемирной!"
s.i18nActivityHomePage = "Главная страница операций интернационализации."
s.home = "Главная"
s.contactI18nActivity = "Сведения об операциях интернационализации."
s.contact = "Контакты"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Группы, задействованные для выполнения операций интернационализации."
s.groups = "Присоединиться"
s.topicIndexForInformation = "Алфавитный указатель тематических разделов данного веб-сайта."
s.topics = "Темы"
s.taskBasedIndex = "Алфавитный указатель технологий i18n, построенный на основе их задач."
s.techniques = "Изучить"
s.informationResources = "Информационные ресурсы о данном веб-сайте интернационализации."
s.resources = "Найти"
s.newsFiltersAndFeeds = "Информация о новостных фильтрах и исходных материалах, использующихся для интернационализации W3C."
s.news = "Подписаться"
s.onThisPage = "на данной странице"
s.questionAlt = "Вопрос"
s.questionLink = "Вопрос"
s.question = "Вопрос"
s.backgroundAlt = "Вводная информация"
s.backgroundLink = "Вводная информация"
s.background = "Вводная информация"
s.answer = "Ответ" // heading
s.answerAlt = "Ответ"
s.answerLink = "Ответ"
s.byTheWayAlt = "Дополнительные полезные сведения"
s.byTheWayLink = "Кстати говоря"
s.byTheWay = "Кстати говоря"
s.furtherReadingAlt = "Дополнительные материалы"
s.furtherReadingLink = "Дополнительные материалы"
s.furtherReading = "Дополнительные материалы"
s.intendedAudience = "Предполагаемая аудитория:"
s.skipToAnswer = "[Перейти к ответу]"
s.tellUsWhatYouThink = "Выскажите своё мнение (по-английски)."
s.sendAComment = "Напишите нам"
s.subscribeToRSS = "Подпишитесь на ленту новостей RSS."
s.newResourcesAlt = "Уведомляет вас о новых публикациях при первом их появлении."
s.newResources = "Новые публикации"
s.homePageNewsAlt = "Все новости, показываемые на главной странице."
s.homePageNews = "Новости главной страницы"
s.followOurNews = "Следите за нашей новостной лентой."
s.sentenceDelimiter = "."

s.author = "Автор:" // followed by name of author(s)
s.previousAuthors = "Предыдущий автор:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Изменения внес:" // person's name appears after colon
s.translatedBy = "Переводчик:"
s.validXHTML = "Допустимый XHTML 1.0!"
s.validCSS = "Допустимый CSS!"
s.codedInUtf8 = "Кодировка UTF-8!"

s.translatedFromEnglishVer = "Перевод с английского: "+dt.enVersion+". Последнее внесение изменений в перевод: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Вы можете отслеживать историю изменений документа здесь: <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">новостная лента</a> (существенные изменения) или <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">список Github коммитов</a> (все правки с января 2016).'
s.untranslatedChanges = '<strong>Внимание:</strong> <a href="'+f.filename+'.en">Оригинал на английском языке</a> был изменен после того, как был создан данный перевод. Изменения были добавлены к текущей странице, так что вы можете видеть некоторые блоки текста на английском языке до тех пор, пока не будет обновлен перевод.'
s.unlinkedTranslation = '<strong>Предупреждение:</strong> Оригинал на английском языке существенно измененился с того момента, как документ был переводен. Рекомендуется читать <a href="'+f.filename+'.en">версию на английском языке</a> до тех пор, пока перевод не будет обновлен.'
s.new="Новое"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Обновленое" // same as New
s.translation_updated="Обновление перевода:" // date appears after colon 

s.aboutThisArticle="Об этой статье" // title in the right column near the top of the page
s.status_draft="Эта статья представляет собой проект, который еще не прошел публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>.."
s.status_review="Эта статья в настоящее время проходит публичное обозрение. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_published="Эта статья рассмотрена Рабочей Группой W3C Интернационализации и прошла публичное обозрение, чтобы сделать ее как можно более точной. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_notreviewed="Эта статья была опубликована без публичного обозрения. Если есть вещи, которые нужно исправить, пожалуйста, отправьте нам ваши отзывы с помощью <a href='#survey'>ссылки внизу страницы</a>."
s.status_obsolete="Эта статья устарела. Она больше не поддерживается и может быть неточной. Для получения более актуальной информации, смотрите <a href='http://www.w3.org/International/'>Главную страницу Internationalization Activity</a>."
s.tests="Тесты" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Быстрый ответ" // heading
s.longeranswer = "Подробный ответ" // heading
s.additionalinfo = "Дополнительная информация" // heading that sometimes follows 'Details'
s.acknowledgements = "Спасибо также следующим людям, чей вклад или отзывы были включены:" // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg = "Если вы разрешите браузеру установить cookie, вы будете видеть страницы W3C Internationalization Activity на выбранном вами языке (там, где это доступно). Установить cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>Внимание!</strong> &nbsp; Это только редакторский черновик статьи. Все ссылки и закладки должны вести на <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>версию, размещенную на W3C сайте</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "