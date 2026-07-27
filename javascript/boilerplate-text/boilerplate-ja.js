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
  'ar':'アラビア語',
  'bg':'ブルガリア語',
  'da':'デンマーク語',
  'de':'ドイツ語',
  'el':'ギリシャ語',
  'en':'英語',
  'es':'スペイン語',
  'fr':'フランス語',
  'gl':'ガリシア語',
  'he':'ヘブライ語',
  'hi':'ヒンディー語',
  'hu':'ハンガリー語',
  'it':'イタリア語',
  'ja':'日本語',
  'ko':'韓国語',
  'nl':'オランダ語',
  'pes':'ペルシア語',
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
  'zh-hant':'繁体中国語'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "ブラウザーのクッキーを許可すると、W3C 国際化アクティビティのページを(もしあるなら)選択した言語で続けて表示します。クッキーを設定しますか？"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "世界地図"  // title text for image, top right
s.searchI18nSite = "I18n サイト内検索:" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `この文書はボランティアによる翻訳版です。エラーや訳の食い違いがある場合は、<a href="${ s.englishOriginal }">英語で書かれた最新版のオリジナル文書</a>を信頼するようにしてください。<a href="#copyright">オリジナル文書の著作権</a>は W3C および、次に記す人間や団体に帰属します。`  // text appears only on translated pages

s.articles = "記事" // used in breadcrumbs, top right of page
s.tests="テスト" // used at the end of breadcrumbs for test related pages
s.home = "ホーム" // start of breadcrumbs
s.onThisPage = "このページ内"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="この記事について" // title in the right column near the top of the page
s.status_draft="この記事は、公開レビュー前の草案です。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_review="この記事は現在公開レビュー中です。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_published="この記事には、W3C 国際ワーキンググループによるレビュー及びできる限り正確にするための公開レビューが行われました。</p><p>コメントがありましたら<a id='linktoGHissues' href='#survey'>ご指摘ください</a>。"
s.status_notreviewed="この記事は公開レビューなしで公開されました。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_obsolete="この記事は廃止されました。もはや保守されることはなく、不正確です。最新の情報については、<a href='http://www.w3.org/International/'>W3C 国際化アクティビティのホームページ</a>を参照してください。"


// top left of page
s.gotoW3cHome = "W3C のホームページへ"  // title text for W3C logo
s.gotoI18nHome = "国際化アクティビティのホームページへ" // title text for i18n banner
s.internationalizationTitle = "国際化"  // the word above the orange line
s.worldwide = "ワールド・ワイド・ウェブを世界中に広げましょう"  // the words below the orange line
s.techniques = "学習"  // site links link text, top left
s.taskBasedIndex = "i18n に関する技術や要求について学習する"  // title text for s.techniques
s.resources = "探す"  // site links link text, top left
s.informationResources = "このサイトで情報を探す"  // title text for s.resources
s.ask = "相談"  // site links link text, top left
s.askI18nActivity = "国際化アクティビティに相談する"  // title text for s.ask
s.news = "追跡"  // site links link text, top left
s.newsFiltersAndFeeds = "W3C 国際化の更新情報をフォローする"  // title text for s.news
s.groups = "参加" // site links link text, top left
s.groupsThatMakeUp = "国際化アクティビティに参加する" // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "W3C 国際化アクティビティについて" // title text for s.about


// document status information, below main heading
s.intendedAudience = "想定する読者:"  // preface to audience description (being faded out)
s.lastChanged = "最終更新 "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "ご意見をお聞かせください(英語でお願いします)"  // text content
s.sendAComment = "コメントを送る" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "作成者:" // followed by name of author(s)
s.previousAuthors = "前回の作成者:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "更新者:" // person's name appears after colon
s.translatedBy = "訳者:" // person's name appears after colon
s.acknowledgements = "この文書へ貢献またはフィードバックを送ってくださった以下の方々に感謝します:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `${ dt.enVersion } (UTC) 版の英文コンテンツから翻訳されました。翻訳文書の最終更新は ${ dt.thisVersionPlain } GMT に行われました。`
s.translation_updated="翻訳更新日時:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `文書の更新履歴については、実質的な変更については<a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">ニュースフィード</a>を、2016年1月以降の完全な変更履歴については<a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">GitHubのコミット</a>を、それぞれ参照してください。`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>注意:</strong> この文書が翻訳された後に<a href="${ s.englishOriginal }">オリジナルである英語版</a>へ変更が加えられています。変更がこの翻訳に取り込まれており、翻訳の更新まで一部分が英語で表示されている可能性があります。。`
s.unlinkedTranslation = `<strong>警告:</strong> この文書が翻訳された後に英語版に本質的な変更が加えられています。翻訳が更新されるまで、<a href="${ f.filename }">他の言語の版</a>を参照することを推奨します。`
s.githubRedirect = `<strong>注意!</strong> &nbsp; これは文書の著者ドラフト版です。リンクを張る場合は、このページではなく<a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>W3C サイトのバージョン</a>に向けてください。` // used for github-based versions of published articles


s.new="新着"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="更新" // same as New


// strings to promote consistency in article content
s.question = "質問"  // heading
s.questionAlt = "質問"  // title text for s.question
s.questionLink = "質問"  // 
s.skipToAnswer = "[回答にスキップする]"  // link text
s.background = "背景" // heading
s.backgroundAlt = "背景情報" // title text for s.background
s.backgroundLink = "背景"
s.answer = "回答" // heading
s.answerAlt = "回答" // title text for s.answer
s.answerLink = "回答"
s.byTheWay = "ところで" // heading
s.byTheWayAlt = "他に役立つ情報" // title text for s.byTheWay
s.byTheWayLink = "ところで"
s.furtherReading = "さらなる情報" // heading
s.furtherReadingAlt = "さらなる情報" // title text for s.byTheWay
s.furtherReadingLink = "さらなる情報"
s.quickanswer = "端的な回答" // heading
s.longeranswer = "詳細な回答" // heading that follows 'Quick answer'
s.additionalinfo = "補足情報" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "RSSフィードを購読する"  
s.newResourcesAlt = "(ホームページ上のニュースのうち)初めて公開される新しいリソースのみ通知します"
s.newResources = "新しいリソース"
s.homePageNewsAlt = "ホームページ上に表示されるすべてのニュースを購読します"
s.homePageNews = "ホームページニュース"
s.followOurNews = "最新ニュースをフォロー"

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valid な XHTML 1.0 です!"
s.validCSS = "Valid な CSS です!"
s.codedInUtf8 = "UTF-8 でエンコードされています!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N アクティビティ ホーム"
s.moreResourcesOfThisType = "この技術に関連する他のリソース"
s.accessKeyN = `アクセスキー n により、<a href="#internal-links" accesskey="n">ページ内ナビゲーション</a>へスキップします。<a href="#contentstart">文章の開始までスキップします。</a>`
s.examplesInAnotherScript = "この文書には、他の言語や文字で書かれた例が含まれます。"
s.relatedLinks = "関連するリンク"
s.techIndexText = "技術インデックス"
s.topicIndexText = "トピックインデックス"
s.i18nActivityHomePage = "国際化アクティビティ ホームページ"
s.topicIndexForInformation = "サイト内を検索する"
s.topics = "検索"



/*

MISSING TRANSLATIONS





*/