// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'阿拉伯文',
  'bg':'保加利亚文',
  'da':'丹麦文',
  'de':'德文',
  'el':'希腊文',
  'en':'英文',
  'es':'西班牙文',
  'fr':'法文',
  'he':'希伯来文',
  'hi':'印地文',
  'hu':'匈牙利文',
  'it':'意大利文',
  'ja':'日文',
  'ko':'韩文',
  'nl':'荷兰文',
  'pl':'波兰文',
  'pt':'葡萄牙文',
  'pt-br':'葡萄牙文',
  'ro':'罗马尼亚文',
  'ru':'俄文',
  'sv':'瑞典文',
  'th':'泰文',
  'tr':'土耳其文',
  'uk':'乌克兰文',
  'vi':'越南文',
  'zh-hans':'中文（简体）',
  'zh-hant':'中文（繁体）',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N 活动主页"
s.moreResourcesOfThisType = "更多本类资源"
s.accessKeyN = '快捷键及跳转页面导航。<a href="#contentstart">跳转到正文开始。</a>'
s.examplesInAnotherScript = "本文档包括其它语言/字符示例。"
s.worldMap = "世界地图"
s.searchI18nSite = "国际化站点搜索" 
s.translationDisclaimer = '本文档译自其它语种。如有任何偏差或错误的话，请以<a href="'+f.filename+'.en">最新英文原文</a>为准。如下所示，<a href="#copyright">原文版权</a>属于 W3C。.'
s.translator = "翻译:"
s.relatedLinks = "相关链接"
s.articles = "文章" // used in breadcrumbs, top right of page 
s.topicIndexText = ""
s.techIndexText = "技术索引"
s.gotoW3cHome = "访问 W3C 主页"
s.gotoI18nHome = "访问国际化活动主页"
s.internationalizationTitle = "国际化"
s.i18nActivityHomePage = "国际化活动主页。"
s.home = "主页"
s.aboutI18nActivity = "关于国际化活动。"
s.about = "关于"
s.groupsThatMakeUp = "国际化活动成员组。"
s.groups = "成员组"
s.topicIndexForInformation = "本站信息主题索引。"
s.topics = "主题"
s.taskBasedIndex = "国际化技术按照任务分类的索引。"
s.techniques = "技术"
s.informationResources = "国际化网站上的信息资源。"
s.resources = "资源"
s.newsFiltersAndFeeds = "有关 W3C 国际化新闻过滤器及 RSS 种子的信息。"
s.news = "新闻"
s.onThisPage = "本页面"
s.questionAlt = "问题"
s.questionLink = "问题"
s.question = "问题"
s.backgroundAlt = "背景信息"
s.backgroundLink = "背景"
s.background = "背景"
s.answer = "答案" // heading
s.answerAlt = "答案"
s.answerLink = "答案"
s.byTheWayAlt = "其它有用信息"
s.byTheWayLink = "其它信息"
s.byTheWay = "其它信息"
s.furtherReadingAlt = "深入阅读"
s.furtherReadingLink = "深入阅读"
s.furtherReading = "深入阅读"
s.intendedAudience = "目标读者:"
s.skipToAnswer = "[跳转到答案]"
s.tellUsWhatYouThink = "告诉我们您的想法（用英语）。"
s.sendAComment = "将您的评论发送给我们"
s.subscribeToRSS = "订阅 RSS 提要"
s.newResourcesAlt = "每当首次发布一个新的资源时通知您。"
s.newResources = "新的资源"
s.homePageNewsAlt = "主页上显示的所有新闻条目。."
s.homePageNews = "主页新闻"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "作者：" // followed by name of author(s)
s.previousAuthors = "前作者：" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "修改：" // person's name appears after colon
s.translatedBy = "翻译:"
s.validXHTML = "正确的 XHTML 1.0!"
s.validCSS = "正确的 CSS!"
s.codedInUtf8 = "UTF-8 编码!"

s.translatedFromEnglishVer = "翻译以格林尼治标准时间 "+dt.enVersion+" 的英语内容为准，并于格林尼治标准时间 "+dt.thisVersionPlain+" 作最新修改。"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>注意:</strong> 在此文件翻译以后<a href="'+f.filename+'.en.php">英文版本</a> 已有改变。 The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="新"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="已更新" // same as New
s.translation_updated="更新译本:" // date appears after colon 

s.aboutThisArticle="文章相关" // title in the right column near the top of the page
s.status_draft="此篇文章为未经公开审阅的拟定草稿。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_review="此篇文章目前正供公开审阅，请发送您的宝贵意见到 <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20$filename'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>订阅</a>)</span>."
s.status_published="此篇文章已由W3C国际工作组（W3C Internationalization Working Group）审阅，并经过公开审阅以尽可能的确保文章的正确性。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_notreviewed="此篇文章尚未经过公开审阅。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="测试" // used at the end of breadcrumbs for test related pages
s.quickanswer = "简约回复" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
