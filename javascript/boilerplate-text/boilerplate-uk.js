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
  'ar':'Арабська',
  'bg':'Болгарська',
  'da':'Данська',
  'de':'Німецька',
  'el':'Грецька',
  'en':'Англійська',
  'es':'Іспанська',
  'fr':'Французька',
  'gl':'Галісійська',
  'he':'Іврит',
  'hi':'Гінді',
  'hu':'Угорська',
  'it':'Італійська',
  'ja':'Японська',
  'ko':'Корейська',
  'nl':'Голландська',
  'pes':'Перська',
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
  'zh-hant':'Китайський традиційна'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Якщо ви дозволите браузер встановити куки, ви будете продовжувати бачити сторінки W3C Інтернаціоналізація активність (за наявності) на мові, який ви обрали. Ви хочете, щоб встановити печиво?"

// items in top right beige column
s.worldMap = "Карта світу"  // title text for image, top right
s.searchI18nSite = "Пошук веб-сайту I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Даний документ є перекладом. У випадку будь-яких невідповідностей і помилок <a href="${ f.filename }.en">остання версія документу англійською мовою</a> повинна розглядатися як офіційна. <a href="#copyright">Першопочаткове авторське право</a> належить W3C, як це вказано нижче.`  // text appears only on translated pages

s.articles = "Статті" // used in breadcrumbs, top right of page
s.tests="" // used at the end of breadcrumbs for test related pages
s.home = "Home" // start of breadcrumbs
s.onThisPage = "на даній сторінці"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Про цю статтю" // title in the right column near the top of the page
s.status_draft="Ця стаття являє собою проект, який ще не пройшов публічний огляд. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки <a href='#survey'>за допомогою посилання внизу сторінки</a>."
s.status_review="Ця стаття в даний час проходить публічний огляд. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки <a href='#survey'>за допомогою посилання внизу сторінки</a>."
s.status_published="Ця стаття розглянута Робочою Групою W3C Інтернаціоналізації і пройшла публічний огляд, щоб зробити її якомога більш точною. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки <a href='#survey'>за допомогою посилання внизу сторінки</a>."
s.status_notreviewed="Ця стаття була опублікована без публічного огляду. Якщо є речі, які потрібно виправити, будь ласка, відправте нам ваші відгуки <a href='#survey'>за допомогою посилання внизу сторінки</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "Перейти на головну сторінку W3C"  // title text for W3C logo
s.gotoI18nHome = "Перейти на головну сторінку операцій інтернаціонализації" // title text for i18n banner
s.internationalizationTitle = "Інтернаціоналізація"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Технології"  // site links link text, top left
s.taskBasedIndex = "Алфавітний показник технологій i18n, побудований на основі їхніх завдань."  // title text for s.techniques
s.resources = "Ресурси"  // site links link text, top left
s.informationResources = "Інформаційні ресурси про даний веб-сайт інтернационализації."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Новини"  // site links link text, top left
s.newsFiltersAndFeeds = "Інформація про фільтри новин та вихідні матеріали, які використовуються для інтернаціоналізації W3C."  // title text for s.news
s.groups = "Групи" // site links link text, top left
s.groupsThatMakeUp = "Групи, задіяні для виконання операцій інтернаціоналізації." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Аудиторія:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Розкажіть нам про те, що Ви думаєте."  // text content
s.sendAComment = "Надішліть нам коментар" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Автор: " // followed by name of author(s)
s.previousAuthors = "Попередній автор: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Змінено: " // person's name appears after colon
s.translatedBy = "Перекладач: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Переклад Англійського контенту від ${ dt.enVersion }. Переклад останнього оновлення ${ dt.thisVersionPlain } GMT`
s.translation_updated="Оновлення перекладу:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Примітка:</strong> Зміни були внесені до <a href="${ f.filename }.en.php">написаного англійською мовою оригіналу</a>, так як цей документ був переведений. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }.en">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Нове"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Оновлене" // same as New


// strings to promote consistency in article content
s.question = "Питання"  // heading
s.questionAlt = "Питання"  // title text for s.question
s.questionLink = "Питання"  // 
s.skipToAnswer = "[Перейти до відповіді]"  // link text
s.background = "Ввідна інформація" // heading
s.backgroundAlt = "Ввідна інформація" // title text for s.background
s.backgroundLink = "Ввідна інформація"
s.answer = "Відповідь" // heading
s.answerAlt = "Відповідь" // title text for s.answer
s.answerLink = "Відповідь"
s.byTheWay = "Доречі" // heading
s.byTheWayAlt = "Додаткові корисні матеріали" // title text for s.byTheWay
s.byTheWayLink = "Доречі"
s.furtherReading = "Додаткові матеріали" // heading
s.furtherReadingAlt = "Додаткові матеріали" // title text for s.byTheWay
s.furtherReadingLink = "Додаткові матеріали"
s.quickanswer = "Швидка відповідь" // heading
s.longeranswer = "Детальна відповідь" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Підписатися на RSS джерело."  
s.newResourcesAlt = "Notifies you each time a new resource is published for the first time."
s.newResources = "Нові джерела"
s.homePageNewsAlt = "All news items shown on the home page."
s.homePageNews = "Новини головної сторінки"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Допустимий XHTML 1.0!"
s.validCSS = "Допустимий CSS!"
s.codedInUtf8 = "Кодування UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Процес переходу на головну сторінку I18N"
s.moreResourcesOfThisType = "Більше ресурсів даного типу."
s.accessKeyN = `Прискорююча кнопка n назначена для пропусків при навігації по сторінкам. <a href="#contentstart">Пропуск для переходу на початок контента.</a>`
s.examplesInAnotherScript = "Дійсний документ має приклади іншими мовами/скриптами."
s.relatedLinks = "Посилання"
s.techIndexText = "Techniques index"
s.topicIndexText = "Topic index"
s.i18nActivityHomePage = "Головна сторінка операцій інтернаціоналізації."
s.topicIndexForInformation = "Алфавітний показник тематичних розділів даного веб-сайту."
s.topics = "Теми"



/*

MISSING TRANSLATIONS

check all top left links !


tests
status_obsolete
worldwide

ask 
askI18nActivity
about
aboutI18nActivity
lastChanged
worldwide 
githubRedirect 
acknowledgements
historyOfDocumentChanges
additionalinfo
techIndexText
topicIndexText
*/