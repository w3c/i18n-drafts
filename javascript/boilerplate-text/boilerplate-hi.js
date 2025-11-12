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
  'ar':'अरबी',
  'bg':'बल्गेरियाई',
  'da':'डैनीश',
  'de':'ज़र्मन',
  'el':'ग्रीक',
  'en':'अंग्रेजी',
  'es':'स्पेनिश',
  'fr':'फ्रेंच',
  'gl':'गैलिशियन',
  'he':'हीब्रू',
  'hi':'हिन्दी',
  'hu':'हंगेरी',
  'it':'इतालवी',
  'ja':'जापानी',
  'ko':'कोरीयन्',
  'nl':'डच्',
  'pes':'फ़ारसी',
  'pl':'पॉलिश',
  'pt':'पुर्तगाली',
  'pt-br':'पुर्तगाली (ब्राज़ील)',
  'ro':'रोमानियाई',
  'ru':'रूसी',
  'sv':'स्विडिश',
  'th':'थाई',
  'tr':'तुर्की',
  'uk':'यूक्रेनी',
  'vi':'वियेतनामी',
  'zh-hans':'चीनी (सरलीकृत)',
  'zh-hant':'चीनी (पारम्परिक)'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "यदि आप ब्राउज़र के द्वारा कुकी सेट करते हैं, तो आप अपने द्वारा चुनी गई भाषा में W3C अंतर्राष्ट्रीयकरण गतिविधि पृष्ठ (जहाँ उपलब्ध हो) देखना जारी रखेंगे। क्या आप कुकी सेट करना चाहते हैं?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "दुनिया के नक्शे"  // title text for image, top right
s.searchI18nSite = "I18n साइट खोज" // placeholder text for search box, top right
s.translationDisclaimer = `यह दस्तावेज एक अनुवाद है. किसी भी विसंगति या त्रुटि के मामले में <a href="${ f.filename }.en">नवीनतम अंग्रेजी मूल</a> आधिकारिक विचार किया जाना चाहिए. <a href="#copyright">मूल कॉपीराइट</a> डब्ल्यू .3 सी. के अंतर्गत आता है, जैसा कि नीचे दिखाया गया है.`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="परीक्षा" // used at the end of breadcrumbs for test related pages
s.home = "होम पेज" // start of breadcrumbs
s.onThisPage = "इस पृष्ठ पर"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="आलेख के बारे में" // title in the right column near the top of the page
s.status_draft="यह आलेख एक मसौदा है, जिसका अभी तक सार्वजनिक समीक्षा नहीं किया गया है। अगर आपको टिप्पणियां देनी हैं तो कृपया <a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक</a> का उपयोग करते हुए उन्हें भेजें।"
s.status_review="यह आलेख फिलहाल सार्वजनिक समीक्षा के लिए है। अगर आपको टिप्पणियां देनी हैं तो कृपया<a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_published="इस आलेख की समीक्षा W3C अंतर्राष्ट्रीयकरण कार्य समूह द्वारा की गई है और इसे यथासंभव सटीक बनाने के लिए इसका सार्वजनिक समीक्षा भी किया गया है। अगर आपको टिप्पणियां देनी हैं तो कृपया<a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_notreviewed="यह लेख बिना सार्वजनिक समीक्षा के प्रकाशित हुआ था। अगर आपको टिप्पणियां देनी हैं तो कृपया <a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_obsolete="Tयह आलेख अब अप्रचलित है। अब इसकी देख-रेख नहीं की जाती है तथा इसकी सत्यता पर भी संदेह है। और अधिक अद्यतनित जानकारी के लिए <a href='http://www.w3.org/International/'>अंतर्राष्ट्रीयकरण गतिविधि होम पेज</a> देखें।"


// top left of page
s.gotoW3cHome = "W3C होम पेज पर जाएँ"  // title text for W3C logo
s.gotoI18nHome = "अंतरराष्ट्रीयकरण गतिविधि होम पेज पर जाएँ" // title text for i18n banner
s.internationalizationTitle = "अंतर्राष्ट्रीयकरण"  // the word above the orange line
s.worldwide = "वर्ल्ड वाईड वेब को सचमुच विश्वव्यापी बना रहें हैं !"  // the words below the orange line
s.techniques = "जानें"  // site links link text, top left
s.taskBasedIndex = "अंतरराष्ट्रीयकरण के लिए तकनीकों एवं आवश्यकताओं को जान।ें"  // title text for s.techniques
s.resources = "प्राप्त करें"  // site links link text, top left
s.informationResources = "इस साइट पर जानकारी प्राप्त करें।"  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "अनुसरण करें"  // site links link text, top left
s.newsFiltersAndFeeds = "W3C अंतर्राष्ट्रीयकरण पर कार्य का अनुसरण करें।"  // title text for s.news
s.groups = "हिस्सा लें" // site links link text, top left
s.groupsThatMakeUp = "W3C  अंतरराष्ट्रीयकरण  कार्य में हिस्सा लें।" // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "उद्देश्य से दर्शकों:"  // preface to audience description (being faded out)
s.lastChanged = "अंतिम बार परिवर्तित। "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "हमें बताओ तुम क्या सोचते हो (अंग्रेजी)।"  // text content
s.sendAComment = "हमें एक टिप्पणी भेजें" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "।"  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "लेखक: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "द्वारा संशोधित: " // person's name appears after colon
s.translatedBy = "अनुवादक: " // person's name appears after colon
s.acknowledgements = "उन लोगों को भी धन्यवाद जिनके योगदान या प्रतिक्रिया को शामिल किया गया था: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `अंग्रेजी सामग्री से अनुवादित दिनांक ${ dt.enVersion }. पिछले परिवर्तित संस्करण अनुवादित ${ dt.thisVersionPlain } GMT`
s.translation_updated="अनुवाद अद्यतन:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `दस्तावेज़ परिवर्तन के इतिहास के लिए, जनवरी 2016 से मूल परिवर्तनों के लिए <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">न्यूज फीड</a>, और सभी परिवर्तनों के लिए <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">गिटहब कमिट सूची</a> देखें।`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>टिप्पणी:</strong> जब से इस दस्तावेज़ का अनुवाद हुआ है, <a href="${ f.filename }.en">मूल अंग्रेजी</a> में परिवर्तन किए गए हैं। परिवर्तनों को इस पृष्ठ में शामिल किया गया था, इसलिए अनुवाद के अद्यतन होने तक अंग्रेजी में आप कुछ अवतरणों को देख सकते हैं।`
s.unlinkedTranslation = `<strong>चेतावनी:</strong> इस दस्तावेज़ के अनुवादित होने के बाद से अंग्रेजी मूल में काफी बदलाव किए गए हैं। आपको सलाह दी जाती है कि जब तक यह अद्यतन नहीं हो जाता है, आप <a href="${ f.filename }.en">अंग्रेजी संस्करण</a> पढ़ें।`
s.githubRedirect = `<strong>टिप्पणी!</strong> &nbsp; यह, इस आलेख का एक संपादकीय मसौदा है। सभी लिंक और बुकमार्क <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a> को निर्देशित होने चाहिए।` // used for github-based versions of published articles


s.new="नया"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="अद्यतनित" // same as New


// strings to promote consistency in article content
s.question = "सवाल"  // heading
s.questionAlt = "सवाल"  // title text for s.question
s.questionLink = "सवाल"  // 
s.skipToAnswer = "[सीधे जवाब देने के लिए]"  // link text
s.background = "पृष्ठभूमि" // heading
s.backgroundAlt = "पृष्ठभूमि जानकारी" // title text for s.background
s.backgroundLink = "पृष्ठभूमि"
s.answer = "उत्तर" // heading
s.answerAlt = "उत्तर" // title text for s.answer
s.answerLink = "उत्तर"
s.byTheWay = "वैसे" // heading
s.byTheWayAlt = "अतिरिक्त उपयोगी जानकारी" // title text for s.byTheWay
s.byTheWayLink = "वैसे"
s.furtherReading = "आगे पढ़ने" // heading
s.furtherReadingAlt = "आगे पढ़ने" // title text for s.byTheWay
s.furtherReadingLink = "आगे पढ़ने"
s.quickanswer = "त्वरित उत्तर" // heading
s.longeranswer = "विवरण" // heading that follows 'Quick answer'
s.additionalinfo = "अतिरिक्त जानकारी" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "एक आरएसएस फ़ीड की सदस्यता लें।"  
s.newResourcesAlt = "आप हर बार एक नया संसाधन सूचना देता है पहली बार प्रकाशित हुआ है।"
s.newResources = "नए संसाधनों"
s.homePageNewsAlt = "सभी समाचार मुख पृष्ठ पर दिखाए गए है।"
s.homePageNews = "मुख पृष्ठ समाचार"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "वैध XHTML 1.0!"
s.validCSS = "वैध CSS!"
s.codedInUtf8 = "UTF-8 में एनकोडेड!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N गतिविधि होम"
s.moreResourcesOfThisType = "इस प्रकार के और अधिक संसाधनों."
s.accessKeyN = `पृष्ठ नेविगेशन करने के लिए <a href="#internal-links" accesskey="n">अच्सस्स्केय और स्किप्स</a>. <a href="#contentstart">सामग्री शुरू करने के लिए छोड़ें.</a>`
s.examplesInAnotherScript = "इस दस्तावेज़ स्क्रिप्ट / दूसरी भाषा में उदाहरणों में शामिल है."
s.relatedLinks = "संबंधित लिंक"
s.techIndexText = "तकनीक सूचकांक"
s.topicIndexText = "विषय सूचकांक"
s.i18nActivityHomePage = "अंतरराष्ट्रीयकरण गतिविधि होम पेज।"
s.topicIndexForInformation = "इस साइट को खोजें।"
s.topics = "खोजें"



/*

MISSING TRANSLATIONS

check all top left links !

articles
ask
askI18nActivity
about
aboutI18nActivity
previousAuthors





*/