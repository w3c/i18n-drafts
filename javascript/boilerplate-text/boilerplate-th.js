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
  'ar':'อาหรับ',
  'bg':'บัลแกเรีย',
  'da':'เดนมาร์ก',
  'de':'เยอรมัน',
  'el':'กรีก',
  'en':'อังกฤษ',
  'es':'สเปน',
  'fr':'ฝรั่งเศส',
  'gl':'กาลิเซีย',
  'he':'ฮิบรู',
  'hi':'ฮินดี',
  'hu':'ฮังการี',
  'it':'อิตาลี',
  'ja':'ญี่ปุ่น',
  'ko':'เกาหลี',
  'nl':'ดัตช์',
  'pes':'เปอร์เซีย',
  'pl':'โปแลนด์',
  'pt':'โปรตุเกส',
  'pt-br':'โปรตุเกส',
  'ro':'โรมัน',
  'ru':'รัสเซีย',
  'sv':'สวีเดน',
  'th':'ไทย',
  'tr':'ตุรกี',
  'uk':'ยูเครน',
  'vi':'เวียดนาม',
  'zh-hans':'จีนประยุกต์',
  'zh-hant':'จีนดั้งเดิม'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "แผนที่โลก"  // title text for image, top right
s.searchI18nSite = "I18n ค้นหาไซด์" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `เอกสารฉบับนี้เป็นเอกสารฉบับแปลในกรณีที่มีข้อมูลไม่ตรงกันหรือมีข้อบกพร่อง <a href="${ s.englishOriginal }">เอกสารดั้งเดิมฉบับภาษาอังกฤษ</a> จะถือว่าเป็นฉบับที่เป็นทางการ <a href="#copyright">ลิขสิทธิ์ดั้งเดิม</a> เป็นของ W3C, ดังที่แสดงไว้ข้างล่าง`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "หน้าแรก" // start of breadcrumbs
s.onThisPage = "ในหน้านี้"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "ไปยังหน้าโฮมเพจของW3C"  // title text for W3C logo
s.gotoI18nHome = "ไปยังหน้า Internationalization Activity" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "การทําให้ World Wide Web แพร่หลายไปทั่วโลกอย่างแท้จริง"  // the words below the orange line
s.techniques = "เทคนิค"  // site links link text, top left
s.taskBasedIndex = "เทคนิค i18n จัดแบ่งตามประเภทงาน"  // title text for s.techniques
s.resources = "ฐานข้อมูล"  // site links link text, top left
s.informationResources = "ฐานข้อมูลบนหน้าเวบระหว่างประเทศ"  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "ข่าวสาร"  // site links link text, top left
s.newsFiltersAndFeeds = "ข่าวสารเกี่ยวกับฟิวเตอร์และ  RSS feeds สำหรับ W3C ระหว่างประเทศ"  // title text for s.news
s.groups = "กลุ่ม" // site links link text, top left
s.groupsThatMakeUp = "กลุ่มผู้สร้างการงานระหว่างประเทศ" // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "กลุ่มเป้าหมาย:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "บอกเราด้วยว่าคุณคิดอย่างไร (ภาษาอังกฤษ)"  // text content
s.sendAComment = "ส่งข้อคิดเห็นถึงเรา" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = " "  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "ผู้แต่ง: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "ปรับปรุงโดย: " // person's name appears after colon
s.translatedBy = "ผู้แปล: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `แปลมาจากบทความภาษาอังกฤษลงวันที่ ${ dt.enVersion }. เวอร์ชั่นแปลฉบับที่เปลี่ยนแปลงลครั้งล่าสุด ${ dt.thisVersionPlain } GMT`
s.translation_updated="Translation updated:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Note:</strong> Changes have been made to <a href="${ s.englishOriginal }">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ s.englishOriginal }">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="New"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Updated" // same as New


// strings to promote consistency in article content
s.question = "คำถาม"  // heading
s.questionAlt = "คำถาม"  // title text for s.question
s.questionLink = "คำถาม"  // 
s.skipToAnswer = "[ข้ามไปยังคำตอบ]"  // link text
s.background = "พื้นหลัง" // heading
s.backgroundAlt = "พื้นหลัง" // title text for s.background
s.backgroundLink = "พื้นหลัง"
s.answer = "คำตอบ" // heading
s.answerAlt = "คำตอบ" // title text for s.answer
s.answerLink = "คำตอบ"
s.byTheWay = "นอกจากนี้" // heading
s.byTheWayAlt = "ข้อมูลที่เป็นประโยชน์อื่นๆ" // title text for s.byTheWay
s.byTheWayLink = "นอกจากนี้"
s.furtherReading = "อ่านเพิ่มเติม" // heading
s.furtherReadingAlt = "อ่านเพิ่มเติม" // title text for s.byTheWay
s.furtherReadingLink = "อ่านเพิ่มเติม"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "ลงทะเบียนรับข่าวสาร RSS ฟีด"  
s.newResourcesAlt = "แจ้งเว็บใหม่ในแต่ละครั้งเพื่อลงตีพิมพ์สำหรับครั้งแรก"
s.newResources = "เว็บใหม่"
s.homePageNewsAlt = "รายการข่าวทั้งหมดแสดงในโฮมเพจ"
s.homePageNews = "โฮมเพจรายงานข่าว"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0!ที่อ่านค่าได้"
s.validCSS = "CSS! ที่อ่านค่าได้"
s.codedInUtf8 = "ได้รับการแปลงโคดเป็น UTF-8! แล้ว"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N หน้า Activity"
s.moreResourcesOfThisType = "ข้อมูลเพิ่มเติมประเภทดังกล่าว."
s.accessKeyN = `Accesskey n ใช้เพื่อข้ามไปยัง <a href="#internal-links" accesskey="n">หน้าในของ navigation</a>. <a href="#contentstart">ข้ามไปยังส่วนเริ่มต้นของเนื้อหา</a>`
s.examplesInAnotherScript = "เอกสารนี้ประกอบไปด้วยตัวอย่างในภาษาอื่น/script."
s.relatedLinks = "ลิงคฺ์ที่เกี่ยวข้อง"
s.techIndexText = "สารบัญทางเทคนิค"
s.topicIndexText = "สารบัญตามหัวข้อ"
s.i18nActivityHomePage = "หน้า Internationalization Activity"
s.topicIndexForInformation = "หัวข้อสำหรับข้อมูลในเวบนี้"
s.topics = "หัวข้อ"



/*

MISSING TRANSLATIONS

check all top left links !

cookieMsg
articles
tests
s.aboutThisArticle
s.status_draft
s.status_review
s.status_published
s.status_notreviewed
s.status_obsolete
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
previousAuthors
acknowledgements
translation_updated
historyOfDocumentChanges
s.untranslatedChanges
s.unlinkedTranslation
s.githubRedirect
new
updated
s.quickanswer
s.longeranswer
s.additionalinfo
followOurNews



*/