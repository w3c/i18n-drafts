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
  'ar':'Árabe',
  'bg':'Búlgaro',
  'da':'Danés',
  'de':'Alemán',
  'el':'Griego',
  'en':'Inglés',
  'es':'Español',
  'fr':'Francés',
  'gl':'Gallego',
  'he':'Hebreo',
  'hi':'Hindi',
  'hu':'Húngaro',
  'it':'Italiano',
  'ja':'Japonés',
  'ko':'Coreano',
  'nl':'Neerlandés',
  'pes':'Persa',
  'pl':'Polaco',
  'pt':'Portugués',
  'pt-br':'Portugués brasileño',
  'ro':'Rumano',
  'ru':'Ruso',
  'sv':'Sueco',
  'th':'Tailandés',
  'tr':'Turco',
  'uk':'Ucraniano',
  'vi':'Vietnamita',
  'zh-hans':'Chino simplificado',
  'zh-hant':'Chino tradicional'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Si permite que el navegador establezca una cookie, continuará viendo las páginas de Actividad de Internacionalización de W3C (si existieran) en el idioma de su elección. ¿Quiere establecer la cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Mapa mundial"  // title text for image, top right
s.searchI18nSite = "Buscar en el sitio de internacionalización" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `Este documento es una traducción realizada por un voluntario. En el caso de discrepancias o errores, la <a href="${ s.englishOriginal }">última versión original en inglés</a> será considerada como fidedigna. Los <a href="#copyright">derechos de autor originales</a> pertenecen a W3C, tal como se indica al final de la página.`  // text appears only on translated pages

s.articles = "Artículos" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Inicio" // start of breadcrumbs
s.onThisPage = "En esta página"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Acerca de este artículo" // title in the right column near the top of the page
s.status_draft="Este artículo es un borrador que todavía no se ha sometido a revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_review="En este momento, este artículo está expuesto para revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_published="El Grupo de Trabajo de Internacionalización de W3 ha revisado este artículo y se lo ha sometido a revisión pública para hacerlo tan preciso como sea posible. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_notreviewed="Este artículo se publicó sin revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_obsolete="Este artículo ahora es obsoleto. Ya no recibe mantenimiento y es probable que no contenga información precisa. Para información más actualizada, vea la <a href='http://www.w3.org/International/'>página de Actividad de Internacionalización</a>."


// top left of page
s.gotoW3cHome = "Ir a la página principal de W3C"  // title text for W3C logo
s.gotoI18nHome = "Ir a la página principal de actividades de internacionalización" // title text for i18n banner
s.internationalizationTitle = "Internacionalización"  // the word above the orange line
s.worldwide = "Haciendo la Web global!"  // the words below the orange line
s.techniques = "Aprender"  // site links link text, top left
s.taskBasedIndex = "Aprender técnicas y requisitos para la internacionalización."  // title text for s.techniques
s.resources = "Encontrar"  // site links link text, top left
s.informationResources = "Encontrar información en este sitio."  // title text for s.resources
s.ask = "Preguntar"  // site links link text, top left
s.askI18nActivity = "Pedir ayuda o información."  // title text for s.ask
s.news = "Seguir"  // site links link text, top left
s.newsFiltersAndFeeds = "Seguir al grupo de Internacionalización del W3C."  // title text for s.news
s.groups = "Participar" // site links link text, top left
s.groupsThatMakeUp = "Participar en el trabajo de Internacionalización del W3C." // title text for s.groups
s.about = "Sobre nosotros" // site links link text, top left
s.aboutI18nActivity = "Sobre W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Audiencia de destino:"  // preface to audience description (being faded out)
s.lastChanged = "Última actualización "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Dinos qué piensas."  // text content
s.sendAComment = "Envíanos un comentario" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "De: " // followed by name of author(s)
s.previousAuthors = "Anteriormente de: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Cambiado por: " // person's name appears after colon
s.translatedBy = "Traducido por: " // person's name appears after colon
s.acknowledgements = "Agradecemos también a las siguientes personas cuyas contribuciones y opiniones fueron incluidas: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Traducido del inglés con fecha ${ dt.enVersion }. Traducción modificada por última vez el ${ dt.thisVersionPlain } GMT.`
s.translation_updated="Traducción actualizada el:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Para el historial de cambios del documento, consultar la <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">fuente de noticias</a> para ver los cambios sustanciales, y la <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">lista de commits de Github</a> para ver todos los cambios desde enero 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Nota:</strong> Desde la traducción de este documento se han producido modificaciones en el <a href="${ s.englishOriginal }">original en inglés</a>. Los cambios se incorporaron en esta página, por lo cual es posible que vea algunas partes en inglés hasta que se actualice la traducción.`
s.unlinkedTranslation = `<strong>Advertencia:</strong> Desde que se tradujo este documento, se introdujeron cambios sustanciales en la versión original en inglés. Le sugerimos leer <a href="${ s.englishOriginal }">una versión en otro idioma</a> hasta que esta traducción haya sido actualizada.`
s.githubRedirect = `<strong>NOTA!</strong> &nbsp; Este es sólo un borrador del artículo del editor. Todos los enlaces y marcadores deben apuntar a  la <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>versión del sitio web de W3C</a>.` // used for github-based versions of published articles


s.new="¡Nuevo!"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="¡Actualizado!" // same as New


// strings to promote consistency in article content
s.question = "Pregunta"  // heading
s.questionAlt = "Pregunta"  // title text for s.question
s.questionLink = "Pregunta"  // 
s.skipToAnswer = "[Pasar directamente a la respuesta]"  // link text
s.background = "Información preliminar" // heading
s.backgroundAlt = "Información preliminar" // title text for s.background
s.backgroundLink = "Información preliminar"
s.answer = "Respuesta" // heading
s.answerAlt = "Respuesta" // title text for s.answer
s.answerLink = "Respuesta"
s.byTheWay = "A propósito" // heading
s.byTheWayAlt = "Información útil adicional" // title text for s.byTheWay
s.byTheWayLink = "A propósito"
s.furtherReading = "Lecturas complementarias" // heading
s.furtherReadingAlt = "Lecturas complementarias" // title text for s.byTheWay
s.furtherReadingLink = "Lecturas complementarias"
s.quickanswer = "Respuesta rápida" // heading
s.longeranswer = "Respuesta extensa" // heading that follows 'Quick answer'
s.additionalinfo = "Información adicional" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Suscripción a feed RSS."  
s.newResourcesAlt = "Te notifica la primera vez que se publica un nuevo recurso."
s.newResources = "Nuevos recursos"
s.homePageNewsAlt = "Todos los elementos mostrados en la página de inicio."
s.homePageNews = "Noticias de la página de inicio"
s.followOurNews = "Siga nuestras noticias."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 válido"
s.validCSS = "CSS válido"
s.codedInUtf8 = "Codificado en UTF-8"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Página de inicio de internacionalización"
s.moreResourcesOfThisType = "Más recursos relacionados con la internacionalización."
s.accessKeyN = `La tecla de acceso "n" lleva a la navegación de la página. <a href="#contentstart">Ir al inicio del contenido.</a>`
s.examplesInAnotherScript = "Este documento contiene ejemplos en otros idiomas y escrituras."
s.relatedLinks = "Enlaces relacionados"
s.techIndexText = "Índice de técnicas"
s.topicIndexText = "Temario"
s.i18nActivityHomePage = "Página principal de actividades de internacionalización."
s.topicIndexForInformation = "Buscar en este sitio."
s.topics = "Buscar"



/*

MISSING TRANSLATIONS

none
*/