// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabă',
  'bg':'Bulgară',
  'da':'Daneză',
  'de':'Germană',
  'el':'Greacă',
  'en':'Engleză',
  'es':'Spaniolă',
  'fr':'Franceză',
  'he':'Ebraică',
  'hi':'Hindi',
  'hu':'Maghiară',
  'it':'Italiană',
  'ja':'Japoneză',
  'ko':'Coreeană',
  'nl':'Olandeză',
  'pl':'Poloneză',
  'pt':'Portugheză',
  'pt-br':'Portugheză',
  'ro':'Română',
  'ru':'Rusă',
  'sv':'Suedeză',
  'th':'Thailandeză',
  'tr':'Turcă',
  'uk':'Ucraineană',
  'vi':'Vietnameză',
  'zh-hans':'Chineză simplificată',
  'zh-hant':'Chineză tradițională',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""




// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Pagina de start a activitatii I18N"
s.moreResourcesOfThisType = "Mai multe resurse de acest tip"
s.accessKeyN = 'Cheia de acces n sare la<a href="#internal-links" accesskey="n">nagigarea in pagina</a>. <a href="#contentstart">Sari la inceputul continutului.</a>'
s.examplesInAnotherScript = "Acest document contine exemple in alta limba/script."
s.worldMap = "Harta lumii"
s.searchI18nSite = "Cauta in site-ul I18n" 
s.translationDisclaimer = 'Acest document e o traducere. In caz ca apare vreo eroare sau discrepanta, <a href="'+f.filename+'.en">ultima versiune in Engleza</a> este cea autoritativa. <a href="#copyright">Copyright-ul original</a> apartine W3C, dupa cum e aratat mai jos.'
s.translator = "Traducator:"
s.relatedLinks = "Alte linkuri"
s.articles = "Articole" // used in breadcrumbs, top right of page 
s.topicIndexText = "Indexul subiectelor"
s.techIndexText = "Indexul tehnicilor"
s.gotoW3cHome = "Pagina principala a W3C"
s.gotoI18nHome = "Pagina principala a activitatii de Internationalizare"
s.internationalizationTitle = "Internationalizare"
s.worldwide = "Facem World Wide Web pentru întreaga lume!"
s.i18nActivityHomePage = "Pagina principala a Activitatii de Internationalizare."
s.home = "Acasa"
s.contactI18nActivity = "Despre Activitatea de Internationalizare."
s.contact = "Despre"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Grupuri care constituie Activitatea de Internationalizare."
s.groups = "Grupuri"
s.topicIndexForInformation = "Cuprinsul informatiilor din acest site."
s.topics = "Subiecte"
s.taskBasedIndex = "Cuprinsul tehnicilor de internationalizare."
s.techniques = "Tehnici"
s.informationResources = "Alte informatii pe site-ul Internationalizarii."
s.resources = "Resurse"
s.newsFiltersAndFeeds = "Informatii despre filtre noi si RSS feeds pentru Internationalizarea W3C."
s.news = "Noutati"
s.onThisPage = "Pe aceasta pagina"
s.questionAlt = "Intrebare"
s.questionLink = "Intrebare"
s.question = "Intrebare"
s.backgroundAlt = "Informatii introductive"
s.backgroundLink = "Introducere"
s.background = "Introducere"
s.answer = "Raspuns" // heading
s.answerAlt = "Raspuns"
s.answerLink = "Raspuns"
s.byTheWayAlt = "Alte informatii utile"
s.byTheWayLink = "Apropo"
s.byTheWay = "Apropo"
s.furtherReadingAlt = "Alte materiale"
s.furtherReadingLink = "Alte materiale"
s.furtherReading = "Alte materiale"
s.intendedAudience = "Cititorii vizati:"
s.skipToAnswer = "[Sari direct la raspuns]"
s.tellUsWhatYouThink = "Spune-ne părerea ta."
s.sendAComment = "Trimite un comentariu"
s.subscribeToRSS = "Abonează-te la RSS feed."
s.newResourcesAlt = "Te informează de fiecare dată când noi resurse sunt publicate pentru prima dată."
s.newResources = "Resurse noi"
s.homePageNewsAlt = "Toate noutăţile prezentate pe prima pagina."
s.homePageNews = "Noutăţi prima pagină"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificat de:" // person's name appears after colon
s.translatedBy = "Traducator:"
s.validXHTML = "XHTML 1.0 Valid!"
s.validCSS = "CSS Valid!"
s.codedInUtf8 = "Incodat cu UTF-8!"

s.translatedFromEnglishVer = "Tradus din engleza: "+dt.enVersion+". Ultima modificare a traducerii: "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Au fost efectuate modificari asupra  <a href="'+f.filename+'.en">versiunii originale in Engleza</a> dupa ce a fost tradus. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Nou"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Actualizat" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "