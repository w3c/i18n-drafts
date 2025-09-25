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
  'ar':'Arabisch',
  'bg':'Bulgaars',
  'da':'Deens',
  'de':'Duits',
  'el':'Grieks',
  'en':'Engels',
  'es':'Spaans',
  'fr':'Frans',
  'gl':'Galicisch',
  'he':'Hebreeuws',
  'hi':'Hindi',
  'hu':'Hongaars',
  'it':'Italiaans',
  'ja':'Japans',
  'ko':'Koreaans',
  'nl':'Nederlands',
  'pes':'Perzisch',
  'pl':'Pools',
  'pt':'Portugees',
  'pt-br':'Braziliaans Portugees',
  'ro':'Roemeens',
  'ru':'Russisch',
  'sv':'Zweeds',
  'th':'Thai',
  'tr':'Turks',
  'uk':'Oekraïens',
  'vi':'Vietnamees',
  'zh-hans':'Vereenvoudigd Chinees',
  'zh-hant':'Traditioneel Chinees'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Als je de browser een cookie laat zetten, krijg je in het vervolg de pagina's van W3C's Internationalisatie-activiteit (voorzover beschikbaar) in de gekozen taal. Wil je een cookie zetten?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Wereldkaart"  // title text for image, top right
s.searchI18nSite = "Zoeken op de I18n site:" // placeholder text for search box, top right
s.translationDisclaimer = `Dit document is een vertaling. In geval van afwijkingen of fouten, dient het <a href="${ f.filename }.en">meest recente origineel in het Engels</a> als referentie te worden beschouwd. <a href="#copyright">Het auteursrecht</a> is eigendom van W3C, zoals hieronder getoond.`  // text appears only on translated pages

s.articles = "Artikelen" // used in breadcrumbs, top right of page
s.tests="Testen" // used at the end of breadcrumbs for test related pages
s.home = "Homepage" // start of breadcrumbs
s.onThisPage = "Op deze pagina"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Over dit artikel" // title in the right column near the top of the page
s.status_draft="Dit artikel is een ontwerp en heeft nog geen openbare beoordeling ondergaan. Als je opmerkingen hebt, kun je ze doorgeven met de <a href='#survey'>link onderaan deze pagina</a>."
s.status_review="Dit artikel is momenteel onderwerp van openbare beoordeling. Als je opmerkingen hebt, kun je ze doorgeven met de <a href='#survey'>link onderaan deze pagina</a>."
s.status_published="Dit artikel is door W3C's Internationalisatie-werkgroep beoordeeld en is onderwerp geweest van openbare beoordeling om het zo nauwkeurig mogelijk te maken. Als je opmerkingen hebt, kun je ze doorgeven met de <a href='#survey'>link onderaan deze pagina</a>."
s.status_notreviewed="Dit artikel is zonder openbare beoordelingen gepubliceerd. Als je opmerkingen hebt, kun je ze doorgeven met de <a href='#survey'>link onderaan deze pagina</a>."
s.status_obsolete="Dit artikel is nu verouderd. Het wordt niet meer onderhouden and is waarschijnlijk onnauwkeurig. Kijk voor actuelere informatie op de <a href='http://www.w3.org/International/'>homepage van de Internationalisatie-activiteit</a>."


// top left of page
s.gotoW3cHome = "Ga naar de homepage van W3C"  // title text for W3C logo
s.gotoI18nHome = "Ga naar de homepage van de Internationalisatie-activiteit" // title text for i18n banner
s.internationalizationTitle = "Internationalisatie"  // the word above the orange line
s.worldwide = "Wij maken het World Wide Web wereldwijd!"  // the words below the orange line
s.techniques = "Leren"  // site links link text, top left
s.taskBasedIndex = "Leer technieken en vereisten voor internationalisatie."  // title text for s.techniques
s.resources = "Vinden"  // site links link text, top left
s.informationResources = "Vind informatie op deze site."  // title text for s.resources
s.ask = "Vragen"  // site links link text, top left
s.askI18nActivity = "Vraag om hulp of om informatie."  // title text for s.ask
s.news = "Volgen"  // site links link text, top left
s.newsFiltersAndFeeds = "Volg het werk van W3C's Internationalisatie."  // title text for s.news
s.groups = "Deelnemen" // site links link text, top left
s.groupsThatMakeUp = "Neem deel aan W3C's Internationalisatiewerk." // title text for s.groups
s.about = "Over" // site links link text, top left
s.aboutI18nActivity = "Over W3C's Internationalisatie-activiteit" // title text for s.about


// document status information, below main heading
s.intendedAudience = "Doelpubliek:"  // preface to audience description (being faded out)
s.lastChanged = "Laatste wijziging "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Vertel ons wat u ervan denkt (Engels)."  // text content
s.sendAComment = "Stuur ons een opmerking" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Door: " // followed by name of author(s)
s.previousAuthors = "Voorheen door: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Gewijzigd door: " // person's name appears after colon
s.translatedBy = "Vertaler: " // person's name appears after colon
s.acknowledgements = "Met dank ook aan de volgende personen van wie bijdragen zijn gebruikt: " // used at bottom of page to list people who provided feedback. The list comes after this text.
s.translatedFromEnglishVer = `Vertaald vanuit de Engelse inhoud met datum ${ dt.enVersion }. Vertaalde versie laatst gewijzigd op  ${ dt.thisVersionPlain } GMT`
s.translation_updated="Vertaling bijgewerkt:" // date appears after (add colon+whitespace)
s.historyOfDocumentChanges = `Voor de wijzigingen van het document in het verleden, zie de <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">nieuwsfeed</a> voor inhoudelijke veranderingen en de <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">commits op Github</a> voor alle veranderingen sinds januari 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Opmerking:</strong> Er zijn veranderingen aangebracht in <a href="${ f.filename }.en">het Engelse origineel</a> nadat dit document werd vertaald. De veranderingen zijn opgenomen in deze pagina, dus je kunt passages in het Engels tegenkomen totdat de vertaling is bijgewerkt.`
s.unlinkedTranslation = `<strong>Waarschuwing:</strong> Er zijn inhoudelijke veranderingen gemaakt in het Engelse origineel nadat deze pagina werd vertaald. Je wordt geadviseerd <a href="${ f.filename }">een versie in een andere taal</a> te lezen totdat de vertaling is bijgewerkt.`
s.githubRedirect = `<strong>Let op!</strong> &nbsp; Dit is alleen maar een ontwerp door de redacteur van dit artikel. Alle links en bladwijzers moeten naar de <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>versie op de W3C-site</a> wijzen, i.p.v. naar deze pagina.` // used for github-based versions of published articles


s.new="Nieuw"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Bijgewerkt" // same as New


// strings to promote consistency in article content
s.question = "Vraag"  // heading
s.questionAlt = "Vraag"  // title text for s.question
s.questionLink = "Vraag"  // 
s.skipToAnswer = "[Verder naar antwoord]"  // link text
s.background = "Achtergrond" // heading
s.backgroundAlt = "Achtergrondinformatie" // title text for s.background
s.backgroundLink = "Achtergrond"
s.answer = "Antwoord" // heading
s.answerAlt = "Antwoord" // title text for s.answer
s.answerLink = "Antwoord"
s.byTheWay = "Trouwens" // heading
s.byTheWayAlt = "Nuttige informatie" // title text for s.byTheWay
s.byTheWayLink = "Trouwens"
s.furtherReading = "Aanbevolen lectuur" // heading
s.furtherReadingAlt = "Aanbevolen lectuur" // title text for s.byTheWay
s.furtherReadingLink = "Aanbevolen lectuur"
s.quickanswer = "Kort antwoord" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Aanvullende informatie" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Abonneer u op een nieuwsfeed."
s.newResourcesAlt = "Brengt u op de hoogte telkens wanneer een nieuwe bron voor de eerste keer wordt gepubliceerd."
s.newResources = "Nieuwe bronnen"
s.homePageNewsAlt = "Alle nieuwe items worden getoond op de homepage."
s.homePageNews = "Nieuws op de homepage"
s.followOurNews = "Onze nieuwsfeed volgen."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Geldige XHTML 1.0!"
s.validCSS = "Geldige CSS!"
s.codedInUtf8 = "Gecodeerd in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Homepage I18N-activiteit"
s.moreResourcesOfThisType = "Meer hulpbronnen van dit type."
s.accessKeyN = `Met de sneltoets n gaat u rechtstreeks naar <a href="#internal-links" accesskey="n">navigatie binnen de pagina</a>. <a href="#contentstart">Naar begin van de inhoud gaan.</a>`
s.examplesInAnotherScript = "Dit document bevat voorbeelden in een andere taal/script."
s.relatedLinks = "Gerelateerde links"
s.techIndexText = "Techniekindex"
s.topicIndexText = "Onderwerpsindex"
s.i18nActivityHomePage = "Homepage van de Internationalisatie-activiteit."
s.topicIndexForInformation = "Doorzoek deze site."
s.topics = "Zoeken"



/*

MISSING TRANSLATIONS

none



*/
