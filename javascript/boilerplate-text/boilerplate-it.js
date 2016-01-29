// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabo',
  'bg':'Bulgaro',
  'da':'Danese',
  'de':'Tedesco',
  'el':'Greco',
  'en':'Inglese',
  'es':'Spagnolo',
  'fr':'Francese',
  'he':'Ebraico',
  'hi':'Hindi',
  'hu':'Ungherese',
  'it':'Italiano',
  'ja':'Giapponese',
  'ko':'Coreano',
  'nl':'Olandese',
  'pl':'Polacco',
  'pt':'Portoghese',
  'pt-br':'Portoghese',
  'ro':'Rumeno',
  'ru':'Russo',
  'sv':'Svedese',
  'th':'Thai',
  'tr':'Turco',
  'uk':'Ucraino',
  'vi':'Vietnamita',
  'zh-hans':'Cinese semplificato',
  'zh-hant':'Cinese tradizionale',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Home dell'I18N Activity"
s.moreResourcesOfThisType = "Altre risorse di questo tipo."
s.accessKeyN = 'Accesskey n salta alla navigazione della pagina. <a href="#contentstart">Salta al contentuo.</a>'
s.examplesInAnotherScript = "Questo documento contiene esempi in un'altra lingua."
s.worldMap = "Mappa del mondo"
s.searchI18nSite = "Ricerca nel sito I18n" 
s.translationDisclaimer = 'Questo documento è una traduzione. In caso di differenze o errori, dovrebbe essere considerato la fonte più autorevole <a href="'+f.filename+'.en">l\'ultimo documento originale Inglese</a>. <a href="#copyright">Il copyright originale</a> appartiene al W3C, come mostrato in basso.'
s.translator = "Traduttore:"
s.relatedLinks = "Link correlati"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Indice dei Temi"
s.techIndexText = "Indice delle Tecniche"
s.gotoW3cHome = "Vai alla Home Page del W3C"
s.gotoI18nHome = "Vai alla Home Page di Internationalization"
s.internationalizationTitle = "Internationalization"
s.i18nActivityHomePage = "Vai alla Home Page di Internationalization."
s.home = "Home"
s.aboutI18nActivity = "La Internationalization Activity."
s.about = "Notizie"
s.groupsThatMakeUp = "I Gruppi che partecipano all'Internationalization Activity."
s.groups = "Gruppi"
s.topicIndexForInformation = "Indice dei Temi e delle Risorse."
s.topics = "Temi"
s.taskBasedIndex = "Indice delle tecniche in i18n."
s.techniques = "Tecniche"
s.informationResources = "Risorse ed informazioni sul sito Internationalization."
s.resources = "Risorse"
s.newsFiltersAndFeeds = "Informazioni sulle novità e sui feed RSS dell'Internationalization del W3C."
s.news = "News"
s.onThisPage = "su questa pagina"
s.questionAlt = "Domanda"
s.questionLink = "Domanda"
s.question = "Domanda"
s.backgroundAlt = "Informazioni importanti"
s.backgroundLink = "Informazioni"
s.background = "Informazioni"
s.answer = "Risposta" // heading
s.answerAlt = "Risposta"
s.answerLink = "Risposta"
s.byTheWayAlt = "Altre informazioni utili"
s.byTheWayLink = "Altre informazioni"
s.byTheWay = "Altre informazioni"
s.furtherReadingAlt = "Ulteriori letture"
s.furtherReadingLink = "Ulteriori letture"
s.furtherReading = "Ulteriori letture"
s.intendedAudience = "Intended audience:"
s.skipToAnswer = "[Salta al testo della risposta]"
s.tellUsWhatYouThink = "Dicci cosa ne pensi (in Inglese)."
s.sendAComment = "Inviaci i tuoi commenti"
s.subscribeToRSS = "Sottoscrivi il feed RSS."
s.newResourcesAlt = "Per avere informazioni ogni volta che viene pubblicata una nuova risorsa."
s.newResources = "Nuove risorse"
s.homePageNewsAlt = "Tutte le novità presenti sulla home page."
s.homePageNews = "Le novità presenti nella home page"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Autore:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificato da:" // person's name appears after colon
s.translatedBy = "Traduttore:"
s.validXHTML = "XHTML 1.0 valido!"
s.validCSS = "CSS Valido!"
s.codedInUtf8 = "Codificato in UTF-8!"

s.translatedFromEnglishVer = "Tradotto dal contenuto Inglese datato $enVersion. Ultima modifica della versione tradotta $thisVersionPlain GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
