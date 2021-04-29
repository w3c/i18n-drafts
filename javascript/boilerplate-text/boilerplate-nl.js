// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar' :  'Arabisch',
  'bg' :  'Bulgaars',
  'da' :  'Deens',
  'de' :  'Duits',
  'el' :  'Grieks',
  'en' :  'Engels',
  'es' :  'Spaans',
  'fr' :  'Frans',
  'he' :  'Hebreeuws',
  'hi' :  'Hindi',
  'hu' :  'Hongaars',
  'it' :  'Italiaans',
  'ja' :  'Japans',
  'ko' :  'Koreaans',
  'nl' :  'Nederlands',
  'pl' :  'Pools',
  'pt' :  'Portugees',
  'pt-br' :  'Braziliaans Portugees',
  'ro' :  'Roemeens',
  'ru' :  'Russisch',
  'sv' :  'Zweeds',
  'th' :  'Thai',
  'tr' :  'Turks',
  'uk' :  'Oekraïens',
  'vi' :  'Vietnamees',
  'zh-hans' :  'Vereenvoudigd Chinees',
  'zh-hant' :  'Traditioneel Chinees',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N Activity Home"
s.moreResourcesOfThisType = "More resources of this type."
s.accessKeyN = 'Met de sneltoets n gaat u rechtstreeks naar <a href="#internal-links" accesskey="n">navigatie binnen de pagina</a>. <a href="#contentstart">Naar begin van de inhoud gaan.</a>'
s.examplesInAnotherScript = "Dit document bevat voorbeelden in een andere taal/script."
s.worldMap = "Wereldkaart"
s.searchI18nSite = "Zoeken op de I18n site:" 
s.translationDisclaimer = 'Dit document is een vertaling. In geval van afwijkingen of fouten, dient het <a href="'+f.filename+'.en">meest recente origineel in het Engels</a> dient als referentie te worden beschouwd. <a href="#copyright">Het origineel copyright</a> is eigendom van W3C, zoals hieronder getoond.'
s.translator = "Vertaler:"
s.relatedLinks = "Gerelateerde links"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "Onderwerpsindex"
s.techIndexText = "Techniekindex"
s.gotoW3cHome = "Ga naar de Thuispagina van W3C"
s.gotoI18nHome = "Go naar de Thuispagina van Internationalization Activity"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Making the World Wide Web worldwide!"
s.makingWorldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "De thuispagina van Internationalization Activity."
s.home = "Thuispagina"
s.contactI18nActivity = "Krijg hulp van W3C Internationalisatie."
s.contact = "Contact"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Deelnemen aan W3C's Internationalisatiewerk."
s.groups = "Deelnemen"
s.topicIndexForInformation = "Doorzoek deze site."
s.topics = "Doorzoek"
s.taskBasedIndex = "Leer technieken en vereisten voor internationalisatie."
s.techniques = "Leren"
s.informationResources = "Vind informatie op deze site."
s.resources = "Vind"
s.newsFiltersAndFeeds = "Volg het werk van W3C's Internationalisatie."
s.news = "Volg"
s.onThisPage = "Op deze pagina"
s.questionAlt = "Vraag"
s.questionLink = "Vraag"
s.question = "Vraag"
s.backgroundAlt = "Achtergrondinformatie"
s.backgroundLink = "Achtergrond"
s.background = "Achtergrond"
s.answerAlt = "Antwoord"
s.answerLink = "Antwoord"
s.answer = "Antwoord" // heading
s.byTheWayAlt = "Nuttige informatie"
s.byTheWayLink = "Trouwens"
s.byTheWay = "Trouwens"
s.furtherReadingAlt = "Aanbevolen lectuur"
s.furtherReadingLink = "Aanbevolen lectuur"
s.furtherReading = "Aanbevolen lectuur"
s.intendedAudience = "Doelpubliek:"
s.skipToAnswer = "[Verder naar antwoord]"
s.tellUsWhatYouThink = "Vertel ons wat u ervan denkt (Engels)."
s.sendAComment = "Stuur ons een opmerking"
s.subscribeToRSS = "Abonneer u op een RSS-feed."
s.newResourcesAlt = "Brengt u op de hoogte telkens wanneer een nieuwe bron voor de eerste keer wordt gepubliceerd."
s.newResources = "Nieuwe bronnen"
s.homePageNewsAlt = "Alle nieuwe items worden getoond op de thuispagina."
s.homePageNews = "Thuispaginanieuws"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "By:" // followed by name of author(s)
s.previousAuthors = "Previously by:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Gewijzigd door:" // person's name appears after colon
s.translatedBy = "Vertaler:"
s.validXHTML = "Geldige XHTML 1.0!"
s.validCSS = "Geldige CSS!"
s.codedInUtf8 = "Gecodeerd in UTF-8!"

s.translatedFromEnglishVer = "Vertaald vanuit de Engelse inhoud met datum "+dt.enVersion+". Vertaalde versie laatst gewijzigd op  "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Opmerking:</strong> Er zijn veranderingen aangebracht in <a href="'+f.filename+'.en">het Engelse origineel</a> sinds dit document werd vertaald. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'">a version in another language</a> until this translation has been updated.'
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
//s.supercededTranslation = '<strong>Avertissement :</strong> Ceci est une version dépassée de ce document! Il est recommandé de lire <a href="'+g.betterfilename+'.en">la dernière version</a> et si vous le pouvez, de modifier le marque-page ou le lien qui vous a redirigé ici.'
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>, rather than to this page." // used for github-based versions of published articles
