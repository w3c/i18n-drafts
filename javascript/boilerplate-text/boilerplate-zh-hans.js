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
s.worldwide = "缔造真正全球通行的万维网"
s.i18nActivityHomePage = "国际化活动主页。"
s.home = "主页"
s.contactI18nActivity = "从 W3C 国际化获得帮助。"
s.contact = "联系我们"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "参与 W3C 国际化工作。"
s.groups = "参与"
s.topicIndexForInformation = "站内搜索"
s.topics = "搜索"
s.taskBasedIndex = "学习国际化的技术和需求。"
s.techniques = "学习"
s.informationResources = "在此网站上查找信息。"
s.resources = "发现"
s.newsFiltersAndFeeds = "关注 W3C 国际化的工作。"
s.news = "关注"
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
s.followOurNews = "关注我们的新闻源。"
s.sentenceDelimiter = "."

s.author = "作者：" // followed by name of author(s)
s.previousAuthors = "前作者：" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "修改：" // person's name appears after colon
s.translatedBy = "翻译:"
s.validXHTML = "正确的 XHTML 1.0!"
s.validCSS = "正确的 CSS!"
s.codedInUtf8 = "UTF-8 编码!"

s.translatedFromEnglishVer = "翻译以格林尼治标准时间 "+dt.enVersion+" 的英语内容为准，并于格林尼治标准时间 "+dt.thisVersionPlain+" 作最新修改。"

s.historyOfDocumentChanges = '有关文档更新的历史记录，请参阅主要更新的<a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">新闻源</a>，以及自2016年1月以来所有更改的 <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Git 提交列表</a>。'
s.untranslatedChanges = '<strong>注意：</strong>在此文件翻译以后<a href="'+f.filename+'.en.php">英文版本</a> 已有改变。这些更改已合并到此页面中，因此您可能会看到一些英文段落，直到翻译更新为止。'
s.unlinkedTranslation = '<strong>警告：</strong>本文的英文原文自翻译以来进行了实质性修改，建议您在此版本更新之前阅读<a href="'+f.filename+'.en">英文版本</a>。'
s.new="新"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="已更新" // same as New
s.translation_updated="更新译本:" // date appears after colon 

s.aboutThisArticle="文章相关" // title in the right column near the top of the page
s.status_draft="此篇文章为未经公开审阅的拟定草稿。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_review="此篇文章目前正供公开审阅，请发送您的宝贵意见到 <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20$filename'>www-international@w3.org</a><span class='noprint'> (<a href='https://lists.w3.org/Archives/Public/www-international/'>订阅</a>)</span>."
s.status_published="此篇文章已由 W3C 国际化工作组（W3C Internationalization Working Group）审阅，并经过公开审阅以尽可能的确保文章的正确性。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_notreviewed="此篇文章尚未经过公开审阅。如有信息需要及时补充或订正，请您使用页面下的网络链接及时反馈给我们。"
s.status_obsolete="这篇文章现已过时，不会继续维护，且信息可能不准确。有关更多最新信息，请参阅<a href='http://www.w3.org/International/'>国际化活动主页</a>。"
s.tests="测试" // used at the end of breadcrumbs for test related pages
s.quickanswer = "简约回复" // heading
s.longeranswer = "详情" // heading that follows 'Quick answer'
s.additionalinfo = "更多信息" // heading that sometimes follows 'Details'
s.acknowledgements = "还要感谢以下人员的贡献或反馈：" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "您可以让浏览器设置cookie，以继续使用您选择的语言浏览 W3C 国际化活动页面（如果有该语言的翻译的话）。请问您想设置cookie吗？" // this text is to be copied to another location
s.githubRedirect = "<strong>注意！</strong> &nbsp; 这只是本文的编辑草案，所有链接和收藏都应指向 <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>W3C 网站上的版本</a>。" // used for github-based versions of published articles

s.lastChanged = "最后一次更新 "