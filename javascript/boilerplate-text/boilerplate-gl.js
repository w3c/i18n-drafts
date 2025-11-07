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
  'da':'Dinamarqués',
  'de':'Alemán',
  'el':'Grego',
  'en':'Inglés',
  'es':'Español',
  'fr':'Francés',
  'gl':'Galego',
  'he':'Hebreo',
  'hi':'Hindi',
  'hu':'Húngaro',
  'it':'Italiano',
  'ja':'Xaponés',
  'ko':'Coreano',
  'nl':'Neerlandés',
  'pes':'Persa',
  'pl':'Polaco',
  'pt':'Portugués',
  'pt-br':'Portugués do Brasil',
  'ro':'Romanés',
  'ru':'Ruso',
  'sv':'Sueco',
  'th':'Tailandés',
  'tr':'Turco',
  'uk':'Ucraíno',
  'vi':'Vietnamita',
  'zh-hans':'Chinés simplificado',
  'zh-hant':'Chinés tradicional'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Se deixas que o navegador configure unha cookie, continuará a ver páxinas da Actividade de Internacionalización da W3C (onde está dispoñible) no idioma que escolliches. Queres configurar a cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Mapa mundial"  // title text for image, top right
s.searchI18nSite = "Procura no sitio de I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Este documento é unha tradución proporcionada por un voluntario/voluntaria. No caso de ter algunha discrepancia ou erro, o <a href="${ f.filename }.en">último texto orixinal en inglés</a> será o que prevaleza.<a href="#copyright">. O copyright orixinal</a> pertence á W3C, como aparece abaixo.`  // text appears only on translated pages

s.articles = "Artigos" // used in breadcrumbs, top right of page
s.tests="Probas" // used at the end of breadcrumbs for test related pages
s.home = "Inicio" // start of breadcrumbs
s.onThisPage = "Nesta páxina"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Sobre este artigo" // title in the right column near the top of the page
s.status_draft="Este artigo é un borrador que aínda non foi revisado públicamente. Se tes comentarios, envíaos empregando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_review="Este artigo non está dispoñible para revisión pública. Se tes comentarios, envíaos empregando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_published="Este artigo foi revisado polo Grupo de Traballo Internacionalización da W3C e pasou por unha revisión pública para que sexa o máis preciso posible.</p><p> Se tes comentarios, por favor <a id='linktoGHissues' href='# enquisa'>fáinolos chegar</a>."
s.status_notreviewed="Este artigo foi publicado sen revisión pública. Se tes comentarios, envíaos usando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_obsolete="Este artigo está obsoleto. Xa non se mantén e é probable que sexa inexacto. Para obter información máis actualizada, consulta a <a href='https://www.w3.org/International/'>Páxina de inicio de Actividade de Internacionalización</a>."


// top left of page
s.gotoW3cHome = "Ir a W3C Páxina principal"  // title text for W3C logo
s.gotoI18nHome = "Ir á páxina de inicio de Actividade de Internacionalización" // title text for i18n banner
s.internationalizationTitle = "Internacionalización"  // the word above the orange line
s.worldwide = "Construindo a World Wide Web mundial!"  // the words below the orange line
s.techniques = "Aprende"  // site links link text, top left
s.taskBasedIndex = "Aprende técnicas e requirimentos da internacionalización."  // title text for s.techniques
s.resources = "Atopa"  // site links link text, top left
s.informationResources = "Atopa información neste sitio."  // title text for s.resources
s.ask = "Pregunta"  // site links link text, top left
s.askI18nActivity = "Solicita axuda ou información"  // title text for s.ask
s.news = "Seguir"  // site links link text, top left
s.newsFiltersAndFeeds = "Segue o traballo de Internacionalización da W3C."  // title text for s.news
s.groups = "Participa" // site links link text, top left
s.groupsThatMakeUp = "Participa no traballo de Internacionalización da W3C." // title text for s.groups
s.about = "Sobre" // site links link text, top left
s.aboutI18nActivity = "Sobre Internacionalización da W3C." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Público obxectivo:"  // preface to audience description (being faded out)
s.lastChanged = "Último cambio "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Dinos que pensas."  // text content
s.sendAComment = "Deixa un comentario" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "De: " // followed by name of author(s)
s.previousAuthors = "Previamente por: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Cambiado por: " // person's name appears after colon
s.translatedBy = "Traducido por: " // person's name appears after colon
s.acknowledgements = "Grazas ás seguintes persoas, que contribuiron cos seus comentarios, os cales foron incluídos: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Traducido do contido en inglés datado ${ dt.enVersion }. Versión traducida modificada por última vez ${ dt.thisVersionPlain } GMT`
s.translation_updated="Tradución actualizada:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Para ver o historial de cambios dos documentos, consulte <a href="https://www.w3.org/blog/International/tag/${ f.searchString }/">noticias</a> para cambios sustanciais, e <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">lista de confirmaciones de Github </a> para tódolos cambios desde xaneiro de 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Nota:</strong> Fixéronse cambios no <a href="${ f.filename }.en">orixinal en inglés</a> desde que se traduciu este documento. Os cambios se incorporaron a esta páxina, polo que é posible que vexa alguns pasaxes en inglés ata que se actualice a tradución.`
s.unlinkedTranslation = `<strong>Advertencia:</strong> Fixéronse cambios sustanciais no orixinal en inglés desde que se traduciu este documento. Recoméndase ler <a href="${ f.filename }">unha versión noutro idioma</a> ata que se actualice esta tradución.`
s.githubRedirect = `<strong>NOTA!</strong> &nbsp; Este é só un borrador do editor deste artigo. Todas as ligazóns e os marcadores deben redirixir á <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>versión no sitio da W3C</a>, e non a esta páxina.` // used for github-based versions of published articles


s.new="Engadido"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Actualizado" // same as New


// strings to promote consistency in article content
s.question = "Pregunta"  // heading
s.questionAlt = "Pregunta"  // title text for s.question
s.questionLink = "Pregunta"  // 
s.skipToAnswer = "[Salta á resposta]"  // link text
s.background = "Background" // heading
s.backgroundAlt = "Infomación do background" // title text for s.background
s.backgroundLink = "Background"
s.answer = "Resposta" // heading
s.answerAlt = "Resposta" // title text for s.answer
s.answerLink = "Resposta"
s.byTheWay = "Co propósito de" // heading
s.byTheWayAlt = "Información adicional útil" // title text for s.byTheWay
s.byTheWayLink = "Co propósito de"
s.furtherReading = "Máis información" // heading
s.furtherReadingAlt = "Máis información" // title text for s.byTheWay
s.furtherReadingLink = "Máis información"
s.quickanswer = "Resposta rápida" // heading
s.longeranswer = "Detalles" // heading that follows 'Quick answer'
s.additionalinfo = "Información adicional" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Suscríbete ó RSS."  
s.newResourcesAlt = "Notifícate cada vez que se publica un novo rescurso por primeria vez"
s.newResources = "Novos recursos"
s.homePageNewsAlt = "Todos os novos elementos móstranse na páxina de inicio."
s.homePageNews = "Noticias da páxina de inicio"
s.followOurNews = "Segue as nosas novas."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 válido!"
s.validCSS = "CSS válido!"
s.codedInUtf8 = "Codificado en UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Actividade da Páxina de inicio de I18N"
s.moreResourcesOfThisType = "Máis recursos deste tipo."
s.accessKeyN = `Accesskey n salta á <a href="#internal-links" accesskey="n">navegación da páxina</a>. <a href="#contentstart">Saltar ó inicio do contido.</a>`
s.examplesInAnotherScript = "Este documento contén exemplos noutro idioma/script."
s.relatedLinks = "Ligazóns relacionadas"
s.techIndexText = "Técnicas de indexación"
s.topicIndexText = "Temas indexados"
s.i18nActivityHomePage = "Páxina de inicio de Actividade de Internacionalización."
s.topicIndexForInformation = "Procura no sitio."
s.topics = "Procura"



/*

MISSING TRANSLATIONS


s.background
s.backgroundLink



*/