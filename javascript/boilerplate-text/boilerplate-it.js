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
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Vai alla Home Page di Internationalization."
s.home = "Home"
s.contactI18nActivity = "La Internationalization Activity."
s.contact = "Notizie"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
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
s.intendedAudience = "Destinatari:"
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

s.translatedFromEnglishVer = "Tradotto dal contenuto Inglese datato "+dt.enVersion+". Ultima modifica della versione tradotta "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Per la cronologia delle modifiche apportate al documento, vedi  <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> fper le modifiche sostanziali e <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">la lista dei commit Github</a> per tutte le modifiche apportate da gennaio 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Sono state apportate delle modifiche alla <a href="'+f.filename+'.en">versione originale in inglese</a> dal momento in cui il presente documento é stato tradotto. Le modifiche sono state inserite nella presente pagina. Per tale ragione, potrai visualizzare alcuni passaggi in inglese fino a che non aggiornerai la traduzione.'
s.unlinkedTranslation = '<strong>Avviso:</strong> Delle modifiche sostanziali sono state apportate alla versione originale in inglese dal momento in cui il presente documento é stato tradotto. Ti consigliamo di leggere <a href="'+f.filename+'.en">la versione originale in inglese</a> fino al momento in cui la traduzione non é stata aggiornata.'
s.new="Nuovo"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Aggiornato" // same as New
s.translation_updated="Traduzione aggiornata:" // date appears after colon 

s.aboutThisArticle="Riguardo all’articolo" // title in the right column near the top of the page
s.status_draft="Il presente articolo é una bozza non ancora sottoposta ai lettori. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della pagina</a>."
s.status_review="Il presente articolo é attualmente soggetto alla revisione dei lettori. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_published="Il presente articolo é stato sottoposto alla revisione del W3C Internationalization Working Group e dei lettori al fine di garantire la massima precisione. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_notreviewed="Il presente articolo é stato pubblicato senza essere stato sottoposto alla revisione dei lettori. Per pubblicare un commento, per favore utilizza il <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_obsolete="Il presente articolo risulta obsoleto. Non é piú sottoposto a revisione e potrebbe contenere imprecisioni. Per maggiori informazioni aggiornate, vedi l’<a href='http://www.w3.org/International/'>home page dell’Internationalization Activity</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Risposta rapida" // heading
s.longeranswer = "Dettagli" // heading that follows 'Quick answer'
s.additionalinfo = "Informazioni complementari" // heading that sometimes follows 'Details'
s.acknowledgements = "Un ringraziamento anche a coloro il cui contributo o riscontro é stato incluso:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Se consenti al browser di impostare un cookie, continuerai a visualizzare le pagine W3C Internationalization Activity (ove disponibili) nella lingua selezionata. Vuoi impostare il cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTA!</strong> &nbsp; Questo é solo una bozza dell’articolo del redattore. Tutti i link e i preferiti dovrebbero rimandare a <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>versione sul sito di W3C</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "