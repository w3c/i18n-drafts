// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
'ar':'Arabic',
'bg':'Bulgarian',
'de':'German',
'da':'Danish',
'el':'Greek',
'en':'English',
'es':'Spanish',
'fr':'French',
'he':'Hebrew',
'hi':'Hindi',
'hu':'Hungarian',
'it':'Italian',
'ja':'Japanese',
'ko':'Korean',
'nl':'Dutch',
'pl':'Polish',
'pt':'Portuguese',
'pt-br':'Brazilian Portuguese',
'ro':'Romanian',
'ru':'Russian',
'sv':'Swedish',
'th':'Thai',
'tr':'Turkish',
'uk':'Ukrainian',
'vi':'Vietnamese',
'zh-hans':'Simplified Chinese',
'zh-hant':'Traditional Chinese'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N アクティビティ ホーム"
s.moreResourcesOfThisType = "この技術に関連する他のリソース"
s.accessKeyN = 'アクセスキー n により、<a href="//internal-links" accesskey="n">ページ内ナビゲーション</a>へスキップします。<a href="//contentstart">文章の開始までスキップします。</a>'
s.examplesInAnotherScript = "この文書には、他の言語で書かれた例やスクリプトが存在します。"
s.worldMap = "世界地図"
s.searchI18nSite = "I18n サイト検索" 
s.translationDisclaimer = 'この文書は翻訳版です。エラーや訳の食い違いがある場合は、<a href="'+f.filename+'.en">英語で書かれた最新版のオリジナル文書</a>を信頼するようにしてください。<a href="//copyright">オリジナル文書の著作権</a>は W3C および、次に記す人間や団体に帰属します。'
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
s.sentenceDelimiter = "."

s.author = "作成者:" // followed by name of author(s)
s.previousAuthors = "前回の作成者:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "更新者:" // person's name appears after colon
s.translatedBy = "訳者:"
s.validXHTML = "Valid な XHTML 1.0 です!"
s.validCSS = "Valid な CSS です!"
s.codedInUtf8 = "UTF-8 でエンコードされています!"

s.translatedFromEnglishVer = "$enVersion GMT に英文コンテンツから翻訳されました。翻訳内容の最終更新は $thisVersionPlain GMT に行われました。"

s.historyOfDocumentChanges ='この文書の更新履歴は i18n ブログから<span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span>を検索してください。'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">See the change log.</a></span>'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="この記事について" // title in the right column near the top of the page
s.status_draft="この記事は、公開レビュー前の草案です。対処すべき部分がある場合は、ページ下部近くにあるリンクからフィードバックを送ってください。"
s.status_review="この記事は現在公開レビュー中です。 <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>subscribe</a>)までコメントをお願いします。</span>."
s.status_published="この記事は、W3C 国際ワーキンググループによりレビューが行われていると同時に、できる限り正確なものにするため公開レビューも行われています。対処すべき部分がある場合は、ページ下部近くにあるリンクからフィードバックを送ってください。"
s.status_notreviewed="この記事は公開レビューなしで正式公開されました。対処すべき部分がある場合は、ページ下部近くにあるリンクからフィードバックを送ってください。"
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "要約的な回答" // heading
s.longeranswer = "詳細な回答" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
