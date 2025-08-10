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
  'ar':'阿拉伯语',
  'bg':'保加利亚语',
  'da':'丹麦语',
  'de':'德语',
  'el':'希腊语',
  'en':'英语',
  'es':'西班牙语',
  'fr':'法语',
  'gl':'加利西亚语',
  'he':'希伯来语',
  'hi':'印地语',
  'hu':'匈牙利语',
  'it':'意大利语',
  'ja':'日语',
  'ko':'韩语',
  'nl':'荷兰语',
  'pes':'波斯语',
  'pl':'波兰语',
  'pt':'葡萄牙语',
  'pt-br':'巴西葡萄牙语',
  'ro':'罗马尼亚语',
  'ru':'俄语',
  'sv':'瑞典语',
  'th':'泰语',
  'tr':'土耳其语',
  'uk':'乌克兰语',
  'vi':'越南语',
  'zh-hans':'简体中文',
  'zh-hant':'繁体中文'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "您可以让浏览器设置cookie，以继续使用您选择的语言浏览W3C国际化标准计划（如果有该语言的翻译的话）。请问您想设置cookie吗？"

// items in top right beige column
s.worldMap = "世界地图"  // title text for image, top right
s.searchI18nSite = "国际化站点搜索" // placeholder text for search box, top right
s.translationDisclaimer = `本文档译自其他语种。如有任何偏差或错误，请以<a href="${ f.filename }.en">最新英文原文</a>为准。如下所示，原文版权属于 W3C。`  // text appears only on translated pages

s.articles = "文章" // used in breadcrumbs, top right of page
s.tests="测试" // used at the end of breadcrumbs for test related pages
s.home = "主页" // start of breadcrumbs
s.onThisPage = "目录"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="文章相关" // title in the right column near the top of the page
s.status_draft="此篇文章为未经公开审阅的拟定草稿。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_review="此篇文章目前正供公开审阅，请发送您的宝贵意见到 <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20$filename'>www-international@w3.org</a><span class='noprint'> (<a href='https://lists.w3.org/Archives/Public/www-international/'>订阅</a>)</span>."
s.status_published="此篇文章已由 W3C 国际化工作组（W3C Internationalization Working Group）审阅，并经过公开审阅以尽可能的确保文章的正确性。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_notreviewed="此篇文章尚未经过公开审阅。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_obsolete="这篇文章现已过时，不会继续维护，且信息可能不准确。有关更多最新信息，请参阅<a href='http://www.w3.org/International/'>国际化标准计划主页</a>。"


// top left of page
s.gotoW3cHome = "访问 W3C 主页"  // title text for W3C logo
s.gotoI18nHome = "访问国际化标准计划主页" // title text for i18n banner
s.internationalizationTitle = "国际化"  // the word above the orange line
s.worldwide = "缔造真正全球通行的万维网"  // the words below the orange line
s.techniques = "学习"  // site links link text, top left
s.taskBasedIndex = "学习国际化的技术和需求。"  // title text for s.techniques
s.resources = "发现"  // site links link text, top left
s.informationResources = "在此网站上查找信息。"  // title text for s.resources
s.ask = "提问"  // site links link text, top left
s.askI18nActivity = "寻求帮助或信息。"  // title text for s.ask
s.news = "关注"  // site links link text, top left
s.newsFiltersAndFeeds = "关注 W3C 国际化的工作。"  // title text for s.news
s.groups = "参与" // site links link text, top left
s.groupsThatMakeUp = "参与 W3C 国际化工作。" // title text for s.groups
s.about = "关于" // site links link text, top left
s.aboutI18nActivity = "关于 W3C 国际化。" // title text for s.about


// document status information, below main heading
s.intendedAudience = "目标读者:"  // preface to audience description (being faded out)
s.lastChanged = "最后一次更新 "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "告诉我们您的想法（用英语）。"  // text content
s.sendAComment = "将您的评论发送给我们" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "作者：" // followed by name of author(s)
s.previousAuthors = "前作者：" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "修改：" // person's name appears after colon
s.translatedBy = "翻译：" // person's name appears after colon
s.acknowledgements = "还要感谢以下人员的贡献或反馈：" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `翻译以格林尼治标准时间 ${ dt.enVersion } 的英语内容为准，并于格林尼治标准时间 ${ dt.thisVersionPlain } 作最新修改。`
s.translation_updated="更新译本:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `有关文档更新的历史记录，请参阅主要更新的<a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">新闻源</a>，以及自2016年1月以来所有更改的 <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Git 提交列表</a>。`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>注意：</strong>在此文件翻译以后<a href="${ f.filename }.en.php">英文版本</a> 已有改变。这些更改已合并到此页面中，因此您可能会看到一些英文段落，直到翻译更新为止。`
s.unlinkedTranslation = `<strong>警告：</strong>本文的英文原文自翻译以来进行了实质性修改，建议您在此版本更新之前阅读<a href="${ f.filename }.en">英文版本</a>。`
s.githubRedirect = `<strong>注意！</strong> &nbsp; 这只是本文的编辑草案，所有链接和收藏都应指向 <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>W3C 网站上的版本</a>。` // used for github-based versions of published articles


s.new="新"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="更新：" // same as New


// strings to promote consistency in article content
s.question = "问题"  // heading
s.questionAlt = "问题"  // title text for s.question
s.questionLink = "问题"  // 
s.skipToAnswer = "[跳转到答案]"  // link text
s.background = "背景" // heading
s.backgroundAlt = "背景信息" // title text for s.background
s.backgroundLink = "背景"
s.answer = "答案" // heading
s.answerAlt = "答案" // title text for s.answer
s.answerLink = "答案"
s.byTheWay = "其他信息" // heading
s.byTheWayAlt = "其他有用信息" // title text for s.byTheWay
s.byTheWayLink = "其他信息"
s.furtherReading = "深入阅读" // heading
s.furtherReadingAlt = "深入阅读" // title text for s.byTheWay
s.furtherReadingLink = "深入阅读"
s.quickanswer = "简约回复" // heading
s.longeranswer = "详情" // heading that follows 'Quick answer'
s.additionalinfo = "更多信息" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "复制"
s.copied = "已复制！"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "订阅 RSS 提要"  
s.newResourcesAlt = "每当首次发布一个新的资源时通知您。"
s.newResources = "新的资源"
s.homePageNewsAlt = "主页上显示的所有新闻条目。."
s.homePageNews = "主页新闻"
s.followOurNews = "关注我们的新闻源。"

// obsolete in most recent articles — used to be in footer
s.validXHTML = "正确的 XHTML 1.0!"
s.validCSS = "正确的 CSS!"
s.codedInUtf8 = "UTF-8 编码!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N 活动主页"
s.moreResourcesOfThisType = "更多本类资源"
s.accessKeyN = `快捷键及跳转页面导航。<a href="#contentstart">跳转到正文开始。</a>`
s.examplesInAnotherScript = "本文档包括其他语言/字符示例。"
s.relatedLinks = "相关链接"
s.techIndexText = "技术索引"
s.topicIndexText = ""
s.i18nActivityHomePage = "国际化标准计划主页。"
s.topicIndexForInformation = "站内搜索"
s.topics = "搜索"



/*

MISSING TRANSLATIONS




*/