// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'अरबी',
  'bg':'बल्गेरियाई',
  'da':'डैनीश',
  'de':'ज़र्मन',
  'el':'ग्रीक',
  'en':'अंग्रेजी',
  'es':'स्पेनिश',
  'fr':'फ्रेंच',
  'he':'हीब्रू',
  'hi':'हिन्दी',
  'hu':'हंगेरी',
  'it':'इतालवी',
  'ja':'जापानी',
  'ko':'कोरीयन्',
  'nl':'डच्',
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
  'zh-hant':'चीनी (पारम्परिक)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N गतिविधि होम"
s.moreResourcesOfThisType = "इस प्रकार के और अधिक संसाधनों."
s.accessKeyN = 'पृष्ठ नेविगेशन करने के लिए <a href="#internal-links" accesskey="n">अच्सस्स्केय और स्किप्स</a>. <a href="#contentstart">सामग्री शुरू करने के लिए छोड़ें.</a>'
s.examplesInAnotherScript = "इस दस्तावेज़ स्क्रिप्ट / दूसरी भाषा में उदाहरणों में शामिल है."
s.worldMap = "दुनिया के नक्शे"
s.searchI18nSite = "I18n साइट खोज" 
s.translationDisclaimer = 'यह दस्तावेज एक अनुवाद है. किसी भी विसंगति या त्रुटि के मामले में <a href="'+f.filename+'.en">नवीनतम अंग्रेजी मूल</a> आधिकारिक विचार किया जाना चाहिए. <a href="#copyright">मूल कॉपीराइट</a> डब्ल्यू .3 सी. के अंतर्गत आता है, जैसा कि नीचे दिखाया गया है.'
s.translator = "अनुवादक:"
s.relatedLinks = "संबंधित लिंक"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "विषय सूचकांक"
s.techIndexText = "तकनीक सूचकांक"
s.gotoW3cHome = "W3C होम पेज पर जाएँ"
s.gotoI18nHome = "अंतरराष्ट्रीयकरण गतिविधि होम पेज पर जाएँ"
s.internationalizationTitle = "अंतर्राष्ट्रीयकरण"
s.worldwide = "वर्ल्ड वाईड वेब को सचमुच विश्वव्यापी बना रहें हैं !"
s.i18nActivityHomePage = "अंतरराष्ट्रीयकरण गतिविधि होम पेज।"
s.home = "होम पेज"
s.contactI18nActivity = "W3C  अंतरराष्ट्रीयकरण  से सहायता प्राप्त करें।"
s.contact = "संपर्क-सूत्र"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "W3C  अंतरराष्ट्रीयकरण  कार्य में हिस्सा लें।"
s.groups = "हिस्सा लें"
s.topicIndexForInformation = "इस साइट को खोजें।"
s.topics = "खोजें"
s.taskBasedIndex = "अंतरराष्ट्रीयकरण के लिए तकनीकों एवं आवश्यकताओं को जान।ें"
s.techniques = "जानें"
s.informationResources = "इस साइट पर जानकारी प्राप्त करें।"
s.resources = "प्राप्त करें"
s.newsFiltersAndFeeds = "W3C अंतर्राष्ट्रीयकरण पर कार्य का अनुसरण करें।"
s.news = "अनुसरण करें"
s.onThisPage = "इस पृष्ठ पर"
s.questionAlt = "सवाल"
s.questionLink = "सवाल"
s.question = "सवाल"
s.backgroundAlt = "पृष्ठभूमि जानकारी"
s.backgroundLink = "पृष्ठभूमि"
s.background = "पृष्ठभूमि"
s.answer = "उत्तर" // heading
s.answerAlt = "उत्तर"
s.answerLink = "उत्तर"
s.byTheWayAlt = "अतिरिक्त उपयोगी जानकारी"
s.byTheWayLink = "वैसे"
s.byTheWay = "वैसे"
s.furtherReadingAlt = "आगे पढ़ने"
s.furtherReadingLink = "आगे पढ़ने"
s.furtherReading = "आगे पढ़ने"
s.intendedAudience = "उद्देश्य से दर्शकों:"
s.skipToAnswer = "[सीधे जवाब देने के लिए]"
s.tellUsWhatYouThink = "हमें बताओ तुम क्या सोचते हो (अंग्रेजी)।"
s.sendAComment = "हमें एक टिप्पणी भेजें"
s.subscribeToRSS = "एक आरएसएस फ़ीड की सदस्यता लें।"
s.newResourcesAlt = "आप हर बार एक नया संसाधन सूचना देता है पहली बार प्रकाशित हुआ है।"
s.newResources = "नए संसाधनों"
s.homePageNewsAlt = "सभी समाचार मुख पृष्ठ पर दिखाए गए है।"
s.homePageNews = "मुख पृष्ठ समाचार"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "।"

s.author = "लेखक:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "द्वारा संशोधित:" // person's name appears after colon
s.translatedBy = "अनुवादक:"
s.validXHTML = "वैध XHTML 1.0!"
s.validCSS = "वैध CSS!"
s.codedInUtf8 = "UTF-8 में एनकोडेड!"

s.translatedFromEnglishVer = "अंग्रेजी सामग्री से अनुवादित दिनांक "+dt.enVersion+". पिछले परिवर्तित संस्करण अनुवादित "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'दस्तावेज़ परिवर्तन के इतिहास के लिए, जनवरी 2016 से मूल परिवर्तनों के लिए <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">न्यूज फीड</a>, और सभी परिवर्तनों के लिए <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">गिटहब कमिट सूची</a> देखें।'
s.untranslatedChanges = '<strong>टिप्पणी:</strong> जब से इस दस्तावेज़ का अनुवाद हुआ है, <a href="'+f.filename+'.en">मूल अंग्रेजी</a> में परिवर्तन किए गए हैं। परिवर्तनों को इस पृष्ठ में शामिल किया गया था, इसलिए अनुवाद के अद्यतन होने तक अंग्रेजी में आप कुछ अवतरणों को देख सकते हैं।'
s.unlinkedTranslation = '<strong>चेतावनी:</strong> इस दस्तावेज़ के अनुवादित होने के बाद से अंग्रेजी मूल में काफी बदलाव किए गए हैं। आपको सलाह दी जाती है कि जब तक यह अद्यतन नहीं हो जाता है, आप <a href="'+f.filename+'.en">अंग्रेजी संस्करण</a> पढ़ें।'
s.new="नया"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="अद्यतनित" // same as New
s.translation_updated="अनुवाद अद्यतन:" // date appears after colon 

s.aboutThisArticle="आलेख के बारे में" // title in the right column near the top of the page
s.status_draft="यह आलेख एक मसौदा है, जिसका अभी तक सार्वजनिक समीक्षा नहीं किया गया है। अगर आपको टिप्पणियां देनी हैं तो कृपया <a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक</a> का उपयोग करते हुए उन्हें भेजें।"
s.status_review="यह आलेख फिलहाल सार्वजनिक समीक्षा के लिए है। अगर आपको टिप्पणियां देनी हैं तो कृपया<a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_published="इस आलेख की समीक्षा W3C अंतर्राष्ट्रीयकरण कार्य समूह द्वारा की गई है और इसे यथासंभव सटीक बनाने के लिए इसका सार्वजनिक समीक्षा भी किया गया है। अगर आपको टिप्पणियां देनी हैं तो कृपया<a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_notreviewed="यह लेख बिना सार्वजनिक समीक्षा के प्रकाशित हुआ था। अगर आपको टिप्पणियां देनी हैं तो कृपया <a href='#survey'>इस पृष्ठ के निचले भाग के पास की लिंक </a> का उपयोग करते हुए उन्हें भेजें।"
s.status_obsolete="Tयह आलेख अब अप्रचलित है। अब इसकी देख-रेख नहीं की जाती है तथा इसकी सत्यता पर भी संदेह है। और अधिक अद्यतनित जानकारी के लिए <a href='http://www.w3.org/International/'>अंतर्राष्ट्रीयकरण गतिविधि होम पेज</a> देखें।"
s.tests="परीक्षा" // used at the end of breadcrumbs for test related pages
s.quickanswer = "त्वरित उत्तर" // heading
s.longeranswer = "विवरण" // heading that follows 'Quick answer'
s.additionalinfo = "अतिरिक्त जानकारी" // heading that sometimes follows 'Details'
s.acknowledgements = "उन लोगों को भी धन्यवाद जिनके योगदान या प्रतिक्रिया को शामिल किया गया था:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "यदि आप ब्राउज़र के द्वारा कुकी सेट करते हैं, तो आप अपने द्वारा चुनी गई भाषा में W3C अंतर्राष्ट्रीयकरण गतिविधि पृष्ठ (जहाँ उपलब्ध हो) देखना जारी रखेंगे। क्या आप कुकी सेट करना चाहते हैं?" // this text is to be copied to another location
s.githubRedirect = "<strong>टिप्पणी!</strong> &nbsp; यह, इस आलेख का एक संपादकीय मसौदा है। सभी लिंक और बुकमार्क <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a> को निर्देशित होने चाहिए।" // used for github-based versions of published articles

s.lastChanged = "अंतिम बार परिवर्तित। "