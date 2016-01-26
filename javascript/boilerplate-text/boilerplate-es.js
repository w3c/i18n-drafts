// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Árabe',
  'bg':'Búlgaro',
  'da':'Danés',
  'de':'Alemán',
  'el':'Griego',
  'en':'Inglés',
  'es':'Español',
  'fr':'Francés',
  'he':'Hebreo',
  'hi':'Hindi',
  'hu':'Húngaro',
  'it':'Italiano',
  'ja':'Japonés',
  'ko':'Coreano',
  'nl':'Neerlandés',
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

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Página de inicio de internacionalización"
s.moreResourcesOfThisType = "Más recursos relacionados con la internacionalización."
s.accessKeyN = 'La tecla de acceso "n" lleva a la navegación de la página. <a href="//contentstart">Ir al inicio del contenido.</a>'
s.examplesInAnotherScript = "Este documento contiene ejemplos en otros idiomas y escrituras."
s.worldMap = "Mapa mundial"
s.searchI18nSite = "Buscar en el sitio de internacionalización" 
s.translationDisclaimer = 'Este documento es una traducción. En caso de discrepancias o errores, la única versión normativa es el <a href="'+f.filename+'.en">último original en inglés</a>. Los <a href="//copyright">derechos de autor originales</a> corresponden al W3C, como puede verse al final de la página.'
s.translator = "Traductor:"
s.relatedLinks = "Enlaces relacionados"
s.articles = "Artículos" // used in breadcrumbs, top right of page 
s.topicIndexText = "Temario"
s.techIndexText = "Índice de técnicas"
s.gotoW3cHome = "Ir a la página principal de W3C"
s.gotoI18nHome = "Ir a la página principal de actividades de internacionalización"
s.internationalizationTitle = "Internacionalización"
s.i18nActivityHomePage = "Página principal de actividades de internacionalización."
s.home = "Inicio"
s.aboutI18nActivity = "Acerca de las actividades de internacionalización."
s.about = "Acerca de"
s.groupsThatMakeUp = "Grupos que constituyen las actividades de internacionalización."
s.groups = "Grupos"
s.topicIndexForInformation = "Temario de la información de este sitio."
s.topics = "Temas"
s.taskBasedIndex = "Índice de técnicas de internacionalización por tareas."
s.techniques = "Técnicas"
s.informationResources = "Recursos informativos sobre el sitio de internacionalización."
s.resources = "Recursos"
s.newsFiltersAndFeeds = "Información sobre filtros de noticias y alimentadores RSS de internacionalización de W3C."
s.news = "Noticias"
s.onThisPage = "En esta página"
s.questionAlt = "Pregunta"
s.questionLink = "Pregunta"
s.question = "Pregunta"
s.backgroundAlt = "Información preliminar"
s.backgroundLink = "Información preliminar"
s.background = "Información preliminar"
s.answer = "Respuesta" // heading
s.answerAlt = "Respuesta"
s.answerLink = "Respuesta"
s.byTheWayAlt = "Información útil adicional"
s.byTheWayLink = "A propósito"
s.byTheWay = "A propósito"
s.furtherReadingAlt = "Lecturas complementarias"
s.furtherReadingLink = "Lecturas complementarias"
s.furtherReading = "Lecturas complementarias"
s.intendedAudience = "Audiencia de destino:"
s.skipToAnswer = "[Pasar directamente a la respuesta]"
s.tellUsWhatYouThink = "Dinos qué piensas."
s.sendAComment = "Envíanos un comentario"
s.subscribeToRSS = "Suscripción a feed RSS."
s.newResourcesAlt = "Te notifica la primera vez que se publica un nuevo recurso."
s.newResources = "Nuevos recursos"
s.homePageNewsAlt = "Todos los elementos mostrados en la página de inicio."
s.homePageNews = "Noticias de la página de inicio"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "De:" // followed by name of author(s)
s.previousAuthors = "Anteriormente de:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Cambiado por:" // person's name appears after colon
s.translatedBy = "Traductor:"
s.validXHTML = "XHTML 1.0 válido"
s.validCSS = "CSS válido"
s.codedInUtf8 = "Codificado en UTF-8"

s.translatedFromEnglishVer = "Traducido del inglés con fecha "+dt.enVersion+". Traducción modificada por última vez el "+dt.thisVersionPlain+" GMT."

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Desde la traducción de este documento se han producido modificaciones en el <a href="'+f.filename+'.en.php">original en inglés</a>. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="¡Nuevo!"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="¡Actualizado!" // same as New
s.translation_updated="Traducción actualizada el:" // date appears after colon 

s.aboutThisArticle="Acerca de este artículo" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_draft="Este artículo es un borrador que todavía no se ha sometido a revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_review="En este momento, este artículo está expuesto para revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_published="El Grupo de Trabajo de Internacionalización de W3 ha revisado este artículo y se lo ha sometido a revisión pública para hacerlo tan preciso como sea posible. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_notreviewed="Este artículo se publicó sin revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Respuesta rápida" // heading
s.longeranswer = "Respuesta extensa" // heading
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
