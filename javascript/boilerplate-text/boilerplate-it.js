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
  'ar':'Arabo',
  'bg':'Bulgaro',
  'da':'Danese',
  'de':'Tedesco',
  'el':'Greco',
  'en':'Inglese',
  'es':'Spagnolo',
  'fr':'Francese',
  'gl':'Galiziano',
  'he':'Ebraico',
  'hi':'Hindi',
  'hu':'Ungherese',
  'it':'Italiano',
  'ja':'Giapponese',
  'ko':'Coreano',
  'nl':'Olandese',
  'pes':'Persiano',
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
  'zh-hant':'Cinese tradizionale'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Se consenti al browser di impostare un cookie, continuerai a visualizzare le pagine W3C Internationalization Activity (ove disponibili) nella lingua selezionata. Vuoi impostare il cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Mappa del mondo"  // title text for image, top right
s.searchI18nSite = "Ricerca nel sito I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Questo documento è una traduzione. In caso di differenze o errori, dovrebbe essere considerato la fonte più autorevole <a href="${ f.filename }.en">l'ultimo documento originale Inglese</a>. <a href="#copyright">Il copyright originale</a> appartiene al W3C, come mostrato in basso.`  // text appears only on translated pages

s.articles = "Articoli" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Home" // start of breadcrumbs
s.onThisPage = "su questa pagina"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Riguardo all’articolo" // title in the right column near the top of the page
s.status_draft="Il presente articolo é una bozza non ancora sottoposta ai lettori. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della pagina</a>."
s.status_review="Il presente articolo é attualmente soggetto alla revisione dei lettori. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_published="Il presente articolo é stato sottoposto alla revisione del W3C Internationalization Working Group e dei lettori al fine di garantire la massima precisione. Per pubblicare un commento, per favore utilizza <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_notreviewed="Il presente articolo é stato pubblicato senza essere stato sottoposto alla revisione dei lettori. Per pubblicare un commento, per favore utilizza il <a href='#survey'>il link vicino al fondo della presente pagina</a>."
s.status_obsolete="Il presente articolo risulta obsoleto. Non é piú sottoposto a revisione e potrebbe contenere imprecisioni. Per maggiori informazioni aggiornate, vedi l’<a href='http://www.w3.org/International/'>home page dell’Internationalization Activity</a>."


// top left of page
s.gotoW3cHome = "Vai alla Home Page del W3C"  // title text for W3C logo
s.gotoI18nHome = "Vai alla Home Page di Internationalization" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Creando il Web Mondiale!"  // the words below the orange line
s.techniques = "Impara"  // site links link text, top left
s.taskBasedIndex = "Impara le tecniche e i requisiti dell’internazionalizzazione."  // title text for s.techniques
s.resources = "Scopri"  // site links link text, top left
s.informationResources = "Scopri le informazioni sul nostro sito."  // title text for s.resources
s.ask = "Chiedi"  // site links link text, top left
s.askI18nActivity = "Chiedi aiuto o informazioni."  // title text for s.ask
s.news = "Segui"  // site links link text, top left
s.newsFiltersAndFeeds = "Segui il lavoro di W3C Internationalization."  // title text for s.news
s.groups = "Partecipa" // site links link text, top left
s.groupsThatMakeUp = "Participa al lavoro di W3C Internationalization." // title text for s.groups
s.about = "Riguardo i18n" // site links link text, top left
s.aboutI18nActivity = "Riguardo W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Destinatari: "  // preface to audience description (being faded out)
s.lastChanged = "Ultima modifica "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Dicci cosa ne pensi (in Inglese)."  // text content
s.sendAComment = "Inviaci i tuoi commenti" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Autore: " // followed by name of author(s)
s.previousAuthors = "Prima versione di: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificato da: " // person's name appears after colon
s.translatedBy = "Traduttore: " // person's name appears after colon
s.acknowledgements = "Un ringraziamento anche a coloro il cui contributo o riscontro é stato incluso: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Tradotto dal contenuto Inglese datato ${ dt.enVersion }. Ultima modifica della versione tradotta ${ dt.thisVersionPlain } GMT`
s.translation_updated="Traduzione aggiornata: " // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Per la cronologia delle modifiche apportate al documento, vedi  <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> fper le modifiche sostanziali e <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">la lista dei commit Github</a> per tutte le modifiche apportate da gennaio 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Nota:</strong> Sono state apportate delle modifiche alla <a href="${ f.filename }.en">versione originale in inglese</a> dal momento in cui il presente documento é stato tradotto. Le modifiche sono state inserite nella presente pagina. Per tale ragione, potrai visualizzare alcuni passaggi in inglese fino a che non aggiornerai la traduzione.`
s.unlinkedTranslation = `<strong>Avviso:</strong> Delle modifiche sostanziali sono state apportate alla versione originale in inglese dal momento in cui il presente documento é stato tradotto. Ti consigliamo di leggere <a href="${ f.filename }.en">la versione originale in inglese</a> fino al momento in cui la traduzione non é stata aggiornata.`
s.githubRedirect = `<strong>NOTA!</strong> &nbsp; Questo é solo una bozza dell’articolo del redattore. Tutti i link e i preferiti dovrebbero rimandare a <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>versione sul sito di W3C</a>.` // used for github-based versions of published articles


s.new="Nuovo"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Aggiornato" // same as New


// strings to promote consistency in article content
s.question = "Domanda"  // heading
s.questionAlt = "Domanda"  // title text for s.question
s.questionLink = "Domanda"  // 
s.skipToAnswer = "[Salta al testo della risposta]"  // link text
s.background = "Informazioni" // heading
s.backgroundAlt = "Informazioni importanti" // title text for s.background
s.backgroundLink = "Informazioni"
s.answer = "Risposta" // heading
s.answerAlt = "Risposta" // title text for s.answer
s.answerLink = "Risposta"
s.byTheWay = "Altre informazioni" // heading
s.byTheWayAlt = "Altre informazioni utili" // title text for s.byTheWay
s.byTheWayLink = "Altre informazioni"
s.furtherReading = "Ulteriori letture" // heading
s.furtherReadingAlt = "Ulteriori letture" // title text for s.byTheWay
s.furtherReadingLink = "Ulteriori letture"
s.quickanswer = "Risposta rapida" // heading
s.longeranswer = "Dettagli" // heading that follows 'Quick answer'
s.additionalinfo = "Informazioni complementari" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Sottoscrivi il feed RSS."  
s.newResourcesAlt = "Per avere informazioni ogni volta che viene pubblicata una nuova risorsa."
s.newResources = "Nuove risorse"
s.homePageNewsAlt = "Tutte le novità presenti sulla home page."
s.homePageNews = "Le novità presenti nella home page"
s.followOurNews = "Segui le nostre ultime notizie."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 valido!"
s.validCSS = "CSS Valido!"
s.codedInUtf8 = "Codificato in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Home dell'I18N Activity"
s.moreResourcesOfThisType = "Altre risorse di questo tipo."
s.accessKeyN = `Accesskey n salta alla <a href="#internal-links" accesskey="n">navigazione della pagina</a>. <a href="#contentstart">Salta al contentuo.</a>`
s.examplesInAnotherScript = "Questo documento contiene esempi in un'altra lingua."
s.relatedLinks = "Link correlati"
s.techIndexText = "Indice delle Tecniche"
s.topicIndexText = "Indice dei Temi"
s.i18nActivityHomePage = "Vai alla Home Page di Internationalization."
s.topicIndexForInformation = "Indice dei Temi e delle Risorse."
s.topics = "Temi"



/*

MISSING TRANSLATIONS





*/