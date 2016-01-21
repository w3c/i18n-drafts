// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Арабська',
  'bg':'Болгарська',
  'da':'Данська',
  'de':'Німецька',
  'el':'Грецька',
  'en':'Англійська',
  'es':'Іспанська',
  'fr':'Французька',
  'he':'Іврит',
  'hi':'Гінді',
  'hu':'Угорська',
  'it':'Італійська',
  'ja':'Японська',
  'ko':'Корейська',
  'nl':'Голландська',
  'pl':'Польська',
  'pt':'Портуґальська',
  'pt-br':'Портуґальська',
  'ro':'Румунська',
  'ru':'Російська',
  'sv':'Шведська',
  'th':'Тайська',
  'tr':'Турецька',
  'uk':'Українська',
  'vi':'Вʼєтнамська',
  'zh-hans':'Китайський спрощений',
  'zh-hant':'Китайський традиційна',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""




// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Процес переходу на головну сторінку I18N"
s.moreResourcesOfThisType = "Більше ресурсів даного типу."
s.accessKeyN = 'Прискорююча кнопка n назначена для пропусків при навігації по сторінкам. <a href="//contentstart">Пропуск для переходу на початок контента.</a>'
s.examplesInAnotherScript = "Дійсний документ має приклади іншими мовами/скриптами."
s.worldMap = "Карта світу"
s.searchI18nSite = "Пошук веб-сайту I18n" 
s.translationDisclaimer = 'Даний документ є перекладом. У випадку будь-яких невідповідностей і помилок <a href="'+f.filename+'.en">остання версія документу англійською мовою</a> повинна розглядатися як офіційна. <a href="//copyright">Першопочаткове авторське право</a> належить W3C, як це вказано нижче.'
s.translator = "Перекладач:"
s.relatedLinks = "Посилання"
s.articles = "Статті" // used in breadcrumbs, top right of page 
s.topicIndexText = "Topic index"
s.techIndexText = "Techniques index"
s.gotoW3cHome = "Перейти на головну сторінку W3C"
s.gotoI18nHome = "Перейти на головну сторінку операцій інтернаціонализації"
s.internationalizationTitle = "Інтернаціоналізація"
s.i18nActivityHomePage = "Головна сторінка операцій інтернаціоналізації."
s.home = "Home"
s.aboutI18nActivity = "Дані про операції інтернаціоналазації."
s.about = "Дані"
s.groupsThatMakeUp = "Групи, задіяні для виконання операцій інтернаціоналізації."
s.groups = "Групи"
s.topicIndexForInformation = "Алфавітний показник тематичних розділів даного веб-сайту."
s.topics = "Теми"
s.taskBasedIndex = "Алфавітний показник технологій i18n, побудований на основі їхніх завдань."
s.techniques = "Технології"
s.informationResources = "Інформаційні ресурси про даний веб-сайт інтернационализації."
s.resources = "Ресурси"
s.newsFiltersAndFeeds = "Інформація про фільтри новин та вихідні матеріали, які використовуються для інтернаціоналізації W3C."
s.news = "Новини"
s.onThisPage = "на даній сторінці"
s.questionAlt = "Питання"
s.questionLink = "Питання"
s.question = "Питання"
s.backgroundAlt = "Ввідна інформація"
s.backgroundLink = "Ввідна інформація"
s.background = "Ввідна інформація"
s.answer = "Відповідь" // heading
s.answerAlt = "Відповідь"
s.answerLink = "Відповідь"
s.byTheWayAlt = "Додаткові корисні матеріали"
s.byTheWayLink = "Доречі"
s.byTheWay = "Доречі"
s.furtherReadingAlt = "Додаткові матеріали"
s.furtherReadingLink = "Додаткові матеріали"
s.furtherReading = "Додаткові матеріали"
s.intendedAudience = "Аудиторія:"
s.skipToAnswer = "[Перейти до відповіді]"
s.tellUsWhatYouThink = "Розкажіть нам про те, що Ви думаєте."
s.sendAComment = "Надішліть нам коментар"
s.subscribeToRSS = "Підписатися на RSS джерело."
s.newResourcesAlt = "Notifies you each time a new resource is published for the first time."
s.newResources = "Нові джерела"
s.homePageNewsAlt = "All news items shown on the home page."
s.homePageNews = "Новини головної сторінки"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Автор:" // followed by name of author(s)
s.previousAuthors = "Попередній автор:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Змінено:" // person's name appears after colon
s.translatedBy = "Перекладач:"
s.validXHTML = "Допустимий XHTML 1.0!"
s.validCSS = "Допустимий CSS!"
s.codedInUtf8 = "Кодування UTF-8!"

s.translatedFromEnglishVer = "Переклад Англійського контенту від "+dt.enVersion+". Переклад останнього оновлення "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Для перегляду історії внесення змін до перекладу натисність <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> в блоге i18n.'
s.untranslatedChanges = '<strong>Примітка:</strong> Зміни були внесені до <a href="'+f.filename+'.en.php">написаного англійською мовою оригіналу</a>, так як цей документ був переведений. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Дивіться журнал змін.</a></span>'
s.new="Нове"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Оновлене" // same as New
s.translation_updated="Оновлення перекладу:" // date appears after colon 

s.aboutThisArticle="Про цю статтю" // title in the right column near the top of the page
s.status_draft="Ця стаття являє собою проект, який ще не пройшов публічний огляд. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки за допомогою посилання внизу сторінки."
s.status_review="Ця стаття в даний час проходить публічний огляд. Будь ласка, надсилайте коментарі: <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>підписатися</a>)</span>."
s.status_published="Ця стаття розглянута Робочою Групою W3C Інтернаціоналізації і пройшла публічний огляд, щоб зробити її якомога більш точною. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки за допомогою посилання внизу сторінки."
s.status_notreviewed="Ця стаття була опублікована без публічного огляду. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки за допомогою посилання внизу сторінки."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Швидка відповідь" // heading
s.longeranswer = "Детальна відповідь" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
