// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'アラビア語',
  'bg':'ブルガリア語',
  'da':'デンマーク語',
  'de':'ドイツ語',
  'el':'ギリシャ語',
  'en':'英語',
  'es':'スペイン語',
  'fr':'フランス語',
  'he':'ヘブライ語',
  'hi':'ヒンディー語',
  'hu':'ハンガリー語',
  'it':'イタリア語',
  'ja':'日本語',
  'ko':'韓国語',
  'nl':'オランダ語',
  'pl':'ポーランド語',
  'pt':'ポルトガル語',
  'pt-br':'ポルトガル語',
  'ro':'ルーマニア語',
  'ru':'ロシア語',
  'sv':'スウェーデン語',
  'th':'タイ語',
  'tr':'トルコ語',
  'uk':'ウクライナ語',
  'vi':'ベトナム語',
  'zh-hans':'簡体中国語',
  'zh-hant':'繁体中国語',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N アクティビティ ホーム"
s.moreResourcesOfThisType = "この技術に関連する他のリソース"
s.accessKeyN = 'アクセスキー n により、<a href="#internal-links" accesskey="n">ページ内ナビゲーション</a>へスキップします。<a href="#contentstart">文章の開始までスキップします。</a>'
s.examplesInAnotherScript = "この文書には、他の言語で書かれた例やスクリプトが存在します。"
s.worldMap = "世界地図"
s.searchI18nSite = "I18n サイト検索" 
s.translationDisclaimer = 'This document is a translation provided by a volunteer. In the case of any discrepancy or errors, the <a href="'+f.filename+'.en">latest English original</a> should be considered authoritative.<a href="#copyright">Original copyright</a> belongs to W3C, as shown below.'
s.translator = "訳者:"
s.relatedLinks = "関連するリンク"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "トピックインデックス"
s.techIndexText = "技術インデックス"
s.gotoW3cHome = "W3C のホームページへ"
s.gotoI18nHome = "国際化アクティビティのホームページへ"
s.internationalizationTitle = "国際化"
s.i18nActivityHomePage = "国際化アクティビティ ホームページ"
s.home = "ホーム"
s.aboutI18nActivity = "国際化アクティビティについて"
s.about = "アクティビティ"
s.groupsThatMakeUp = "国際化アクティビティを構成するグループ一覧"
s.groups = "グループ"
s.topicIndexForInformation = "サイト内情報のトピックインデックス"
s.topics = "トピック"
s.taskBasedIndex = "i18n 技術に関するタスクベースのインデックス"
s.techniques = "技術"
s.informationResources = "国際化サイトに関する情報"
s.resources = "リソース"
s.newsFiltersAndFeeds = "W3C 国際化アクティビティの RSS フィードおよび、ニュースフィルタに関する情報"
s.news = "ニュース"
s.onThisPage = "このページ内"
s.questionAlt = "質問"
s.questionLink = "質問"
s.question = "質問"
s.backgroundAlt = "歴史的な背景"
s.backgroundLink = "背景"
s.background = "背景"
s.answer = "回答" // heading
s.answerAlt = "回答"
s.answerLink = "回答"
s.byTheWayAlt = "他に役立つ情報"
s.byTheWayLink = "ところで"
s.byTheWay = "ところで"
s.furtherReadingAlt = "さらなる情報"
s.furtherReadingLink = "さらなる情報"
s.furtherReading = "さらなる情報"
s.intendedAudience = "想定する読者:"
s.skipToAnswer = "[回答にスキップする]"
s.tellUsWhatYouThink = "ご意見をお聞かせください(英語でお願いします)."
s.sendAComment = "コメントを送る"
s.subscribeToRSS = "RSSフィードを購読する"
s.newResourcesAlt = "(ホームページ上のニュースのうち)初めて公開される新しいリソースのみ通知します"
s.newResources = "新しいリソース"
s.homePageNewsAlt = "ホームページ上に表示されるすべてのニュースを購読します"
s.homePageNews = "ホームページニュース"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "作成者:" // followed by name of author(s)
s.previousAuthors = "前回の作成者:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "更新者:" // person's name appears after colon
s.translatedBy = "訳者:"
s.validXHTML = "Valid な XHTML 1.0 です!"
s.validCSS = "Valid な CSS です!"
s.codedInUtf8 = "UTF-8 でエンコードされています!"

s.translatedFromEnglishVer = dt.enVersion+" GMT に英文コンテンツから翻訳されました。翻訳内容の最終更新は "+dt.thisVersionPlain+" GMT に行われました。"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="この記事について" // title in the right column near the top of the page
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "要約的な回答" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
