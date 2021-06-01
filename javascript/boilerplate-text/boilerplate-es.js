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
s.accessKeyN = 'La tecla de acceso "n" lleva a la navegación de la página. <a href="#contentstart">Ir al inicio del contenido.</a>'
s.examplesInAnotherScript = "Este documento contiene ejemplos en otros idiomas y escrituras."
s.worldMap = "Mapa mundial"
s.searchI18nSite = "Buscar en el sitio de internacionalización" 
s.translationDisclaimer = 'Este documento es una traducción realizada por un voluntario. En el caso de discrepancias o errores, la <a href="'+f.filename+'.en">última versión original en inglés</a> será considerada como fidedigna. Los <a href="#copyright">derechos de autor originales</a> pertenecen a W3C, tal como se indica al final de la página.'
s.translator = "Traductor:"
s.relatedLinks = "Enlaces relacionados"
s.articles = "Artículos" // used in breadcrumbs, top right of page 
s.topicIndexText = "Temario"
s.techIndexText = "Índice de técnicas"
s.gotoW3cHome = "Ir a la página principal de W3C"
s.gotoI18nHome = "Ir a la página principal de actividades de internacionalización"
s.internationalizationTitle = "Internacionalización"
s.worldwide = "Haciendo la Web global!"
s.i18nActivityHomePage = "Página principal de actividades de internacionalización."
s.home = "Inicio"
s.contactI18nActivity = "Obtener ayuda del grupo de Internacionalización del W3C."
s.contact = "Contacto"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Participar en el trabajo de Internacionalización del W3C."
s.groups = "Participar"
s.topicIndexForInformation = "Buscar en este sitio."
s.topics = "Buscar"
s.taskBasedIndex = "Aprender técnicas y requisitos para la internacionalización."
s.techniques = "Aprender"
s.informationResources = "Encontrar información en este sitio."
s.resources = "Encontrar"
s.newsFiltersAndFeeds = "Seguir al grupo de Internacionalización del W3C."
s.news = "Seguir"
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
s.followOurNews = "Siga nuestras noticias."
s.sentenceDelimiter = "."

s.author = "De:" // followed by name of author(s)
s.previousAuthors = "Anteriormente de:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Cambiado por:" // person's name appears after colon
s.translatedBy = "Traductor:"
s.validXHTML = "XHTML 1.0 válido"
s.validCSS = "CSS válido"
s.codedInUtf8 = "Codificado en UTF-8"

s.translatedFromEnglishVer = "Traducido del inglés con fecha "+dt.enVersion+". Traducción modificada por última vez el "+dt.thisVersionPlain+" GMT."

s.historyOfDocumentChanges = 'Para el historial de cambios del documento, consultar la <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">fuente de noticias</a> para ver los cambios sustanciales, y la <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">lista de commits de Github</a> para ver todos los cambios desde enero 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Desde la traducción de este documento se han producido modificaciones en el <a href="'+f.filename+'.en.php">original en inglés</a>. Los cambios se incorporaron en esta página, por lo cual es posible que vea algunas partes en inglés hasta que se actualice la traducción.'
s.unlinkedTranslation = '<strong>Advertencia:</strong> Desde que se tradujo este documento, se introdujeron cambios sustanciales en la versión original en inglés. Le sugerimos leer <a href="'+f.filename+'.en">una versión en otro idioma</a> hasta que esta traducción haya sido actualizada.'
s.new="¡Nuevo!"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="¡Actualizado!" // same as New
s.translation_updated="Traducción actualizada el:" // date appears after colon 

s.aboutThisArticle="Acerca de este artículo" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_draft="Este artículo es un borrador que todavía no se ha sometido a revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_review="En este momento, este artículo está expuesto para revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_published="El Grupo de Trabajo de Internacionalización de W3 ha revisado este artículo y se lo ha sometido a revisión pública para hacerlo tan preciso como sea posible. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_notreviewed="Este artículo se publicó sin revisión pública. Si hay asuntos que es necesario tratar, envíenos sus comentarios mediante <a href='#survey'>el enlace ubicado cerca del final de la página</a>."
s.status_obsolete="Este artículo ahora es obsoleto. Ya no recibe mantenimiento y es probable que no contenga información precisa. Para información más actualizada, vea la <a href='http://www.w3.org/International/'>página de Actividad de Internacionalización</a>."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Respuesta rápida" // heading
s.longeranswer = "Respuesta extensa" // heading
s.details = "Detalles" // heading
s.additionalinfo = "Información adicional" // heading that sometimes follows 'Details'
s.acknowledgements = "Agradecemos también a las siguientes personas cuyas contribuciones y opiniones fueron incluidas:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Si permite que el navegador establezca una cookie, continuará viendo las páginas de Actividad de Internacionalización de W3C (si existieran) en el idioma de su elección. ¿Quiere establecer la cookie?" // this text is to be copied to another location
//s.supercededTranslation = '<strong>Advertencia:</strong> ¡Esta es una versión desactualizada de este documento! Le recomendamos leer  <a href="'+g.betterfilename+'.en">la última versión</a> et si vous le pouvez, y, si puede, cambiar la marca o el enlace que lo trajo aquí.'
s.githubRedirect = "<strong>NOTA!</strong> &nbsp; Este es sólo un borrador del artículo del editor. Todos los enlaces y marcadores deben apuntar a  la <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>versión del sitio web de W3C</a>." // used for github-based versions of published articles

s.lastChanged = "Última actualización "