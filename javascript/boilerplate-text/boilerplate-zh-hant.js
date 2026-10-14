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
  'ar':'阿拉伯文',
  'bg':'保加利亞文',
  'da':'丹麥文',
  'de':'德文',
  'el':'希臘文',
  'en':'英文',
  'es':'西班牙文',
  'fr':'法文',
  'gl':'加利西亞文',
  'he':'希伯來文',
  'hi':'北印度文',
  'hu':'匈牙利文',
  'it':'義大利文',
  'ja':'日文',
  'ko':'韓文',
  'nl':'荷蘭文',
  'pes':'波斯語',
  'pl':'波蘭文',
  'pt':'葡萄牙文',
  'pt-br':'葡萄牙文',
  'ro':'羅馬尼亞文',
  'ru':'俄文',
  'sv':'瑞典文',
  'th':'泰文',
  'tr':'土耳其文',
  'uk':'烏克蘭文',
  'vi':'越南語',
  'zh-hans':'簡體中文',
  'zh-hant':'繁體中文'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "若您允許瀏覽器設定 Cookie，日後在造訪時（若該語言版本可用），W3C 國際化活動相關頁面將會持續以您所選擇的語言顯示。請問您是否要設定這個 Cookie？"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "世界地圖"  // title text for image, top right
s.searchI18nSite = "I18n 網站搜尋" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `此文件為翻譯。如有不同或錯誤<a href="${ s.englishOriginal }">應將最新的英文原文</a>作為標準依據，原始版權屬於 W3C，文件内容翻譯如下所示。`  // text appears only on translated pages

s.articles = "文章" // used in breadcrumbs, top right of page
s.tests="測試頁面" // used at the end of breadcrumbs for test related pages
s.home = "首頁" // start of breadcrumbs
s.onThisPage = "在此頁"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="關於本文" // title in the right column near the top of the page
s.status_draft="本篇文章為草稿版本，尚未經過公開審查。若您有任何建議，歡迎透過本頁面下方的<a href='#survey'>意見回饋連結</a>惠賜意見。"
s.status_review="本篇文章目前正進行公開審查。若您有任何建議，歡迎透過本頁面下方的<a href='#survey'>意見回饋連結</a>惠賜意見。"
s.status_published="本篇文章已由 W3C 國際化工作小組審查，並經過公開徵詢意見，以確保內容的準確性。若您有任何建議，歡迎透過本頁面下方的<a href='#survey'>意見回饋連結</a>惠賜意見。"
s.status_notreviewed="本篇文章於未經公開審查的情況下發布。若您有任何建議，歡迎透過本頁面下方的<a href='#survey'>意見回饋連結</a>惠賜意見。"
s.status_obsolete="本篇文章現已過時，並且不再維護，內容可能已不具時效性或不夠正確。欲查閱最新資訊，請參見 <a href='http://www.w3.org/International/'>W3C 國際化活動首頁</a>。"


// top left of page
s.gotoW3cHome = "回到 W3C 主頁"  // title text for W3C logo
s.gotoI18nHome = "回到國際化活動主頁" // title text for i18n banner
s.internationalizationTitle = "國際化"  // the word above the orange line
s.worldwide = "締造真正全球通行的全球資訊網"  // the words below the orange line
s.techniques = "技術"  // site links link text, top left
s.taskBasedIndex = "i18n 技術專案索引"  // title text for s.techniques
s.resources = "資源"  // site links link text, top left
s.informationResources = "國際化網站資訊"  // title text for s.resources
s.ask = "詢問"  // site links link text, top left
s.askI18nActivity = "如需協助或進一步資訊，請隨時提出您的問題"  // title text for s.ask
s.news = "新聞"  // site links link text, top left
s.newsFiltersAndFeeds = "關於 W3C 國際化新聞過濾和 RSS feeds 的内容"  // title text for s.news
s.groups = "小組" // site links link text, top left
s.groupsThatMakeUp = "國際化活動小組" // title text for s.groups
s.about = "關於我們" // site links link text, top left
s.aboutI18nActivity = "關於 W3C 國際化" // title text for s.about


// document status information, below main heading
s.intendedAudience = "目標讀者："  // preface to audience description (being faded out)
s.lastChanged = "上次修改"


// bottom right comment and news feed box
s.tellUsWhatYouThink = "給我們回饋意見 (英文)."  // text content
s.sendAComment = "提出您的意見" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "作者：" // followed by name of author(s)
s.previousAuthors = "前任作者：" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "修改：" // person's name appears after colon
s.translatedBy = "翻譯：" // person's name appears after colon
s.acknowledgements = "同時感謝以下人士的貢獻與回饋，這些意見已納入本文內容中：" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `從 ${ dt.enVersion } 英文文件翻譯而來。翻譯版本 ${ dt.thisVersionPlain } GMT`
s.translation_updated="更新譯本:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `如需查閱本文件的修改歷程，請參考以下資源：重大變更請見<a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">新聞動態</a>，自 2016 年 1 月以來的所有變更則請見<a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">GitHub 交付記錄</a>`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>注意：</strong>本文件翻譯完成後，<a href="${ s.englishOriginal }">英文版本</a>已有更新。這些變更已暫時呈現於本頁，因此在翻譯更新前，您可能會看到部分段落以原文表示。`
s.unlinkedTranslation = `<strong>警告：</strong>自本文件翻譯完成後，英文原文已進行過重大修改。
建議您在翻譯更新之前，優先參閱<a href="${ s.englishOriginal }">英文版本</a>。`
s.githubRedirect = `<strong>注意！</strong> 本頁僅為本文的編輯草稿版本。所有連結與書籤應導向<a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'> W3C 官方網站上的版本</a>。` // used for github-based versions of published articles


s.new="新"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="更新：" // same as New


// strings to promote consistency in article content
s.question = "問題"  // heading
s.questionAlt = "問題資訊"  // title text for s.question
s.questionLink = "問題連結"  // 
s.skipToAnswer = "跳至答案"  // link text
s.background = "背景" // heading
s.backgroundAlt = "背景資訊" // title text for s.background
s.backgroundLink = "背景連結"
s.answer = "回答" // heading
s.answerAlt = "回答資訊" // title text for s.answer
s.answerLink = "回答連結"
s.byTheWay = "其他" // heading
s.byTheWayAlt = "其他資訊" // title text for s.byTheWay
s.byTheWayLink = "其他連結"
s.furtherReading = "閲讀更多" // heading
s.furtherReadingAlt = "更多閲讀資訊" // title text for s.byTheWay
s.furtherReadingLink = "更多閲讀連結"
s.quickanswer = "快速回答" // heading
s.longeranswer = "細節" // heading that follows 'Quick answer'
s.additionalinfo = "附加資訊" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "訂閲 RSS feed."  
s.newResourcesAlt = "有新資源發表時通知您"
s.newResources = "新資源"
s.homePageNewsAlt = "在首頁顯示的所有新聞資訊"
s.homePageNews = "首頁新聞 "
s.followOurNews = "追蹤我們的新資訊"

// obsolete in most recent articles — used to be in footer
s.validXHTML = "有效的 XHTML 1.0!"
s.validCSS = "有效的 CSS!"
s.codedInUtf8 = "UTF-8! 編碼"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N 活動首頁"
s.moreResourcesOfThisType = "更多相關資源"
s.accessKeyN = `按下 n 鍵可快速前往 <a href="#internal-links" accesskey="n">內頁導覽</a>，或<a href="#contentstart">跳至主要內容</a>。`
s.examplesInAnotherScript = "此文件包含其他語言/程式案例"
s.relatedLinks = "相關連結"
s.techIndexText = "技術索引"
s.topicIndexText = "内容索引"
s.i18nActivityHomePage = "國際化活動首頁."
s.topicIndexForInformation = "此網站資訊内容索引"
s.topics = "主題"



/*

MISSING TRANSLATIONS

cookieMsg
tests
status_draft
status_review
status_published
status_notreviewed
status_obsolete

ask
askI18nActivity
about
aboutI18nActivity
lastChanged
acknowledgements
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
quickanswer
longeranswer
additionalinfo
followOurNews



*/