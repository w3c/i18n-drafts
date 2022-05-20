// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
'ar':'Árabe',
'bg':'Búlgaro',
'de':'Alemán',
'da':'Dinamarqués',
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

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Actividade da Páxina de inicio de I18N"
s.moreResourcesOfThisType = "Máis recursos deste tipo."
s.accessKeyN = 'Accesskey n salta á <a href="#internal-links" accesskey="n">navegación da páxina</a>. <a href="#contentstart">Saltar ó inicio do contido.</a>'
s.examplesInAnotherScript = "Este documento contén exemplos noutro idioma/script."
s.worldMap = "Mapa mundial"
s.searchI18nSite = "Procura no sitio de I18n"
s.translationDisclaimer = 'Este documento é unha tradución proporcionada por un voluntario/voluntaria. No caso de ter algunha discrepancia ou erro, o <a href="'+f.filename+'.en">último texto orixinal en inglés</a> será o que prevaleza.<a href="#copyright">. O copyright orixinal</a> pertence á W3C, como aparece abaixo.'
s.translator = "Tradutor/tradutora:"
s.relatedLinks = "Ligazóns relacionadas"
s.articles = "Artigos" // used in breadcrumbs, top right of page 
s.topicIndexText = "Temas indexados"
s.techIndexText = "Técnicas de indexación"
s.gotoW3cHome = "Ir a W3C Páxina principal"
s.gotoI18nHome = "Ir á páxina de inicio de Actividade de Internacionalización"
s.internationalizationTitle = "Internacionalización"
s.worldwide = "Construindo a World Wide Web mundial!"
s.i18nActivityHomePage = "Páxina de inicio de Actividade de Internacionalización."
s.home = "Inicio"
s.aboutI18nActivity = "Sobre Internacionalización da W3C."
s.about = "Sobre"
s.askI18nActivity = "Solicita axuda ou información"
s.ask = "Pregunta"
s.groupsThatMakeUp = "Participa no traballo de Internacionalización da W3C."
s.groups = "Participa"
s.topicIndexForInformation = "Procura no sitio."
s.topics = "Procura"
s.taskBasedIndex = "Aprende técnicas e requirimentos da internacionalización."
s.techniques = "Aprende"
s.informationResources = "Atopa información neste sitio."
s.resources = "Atopa"
s.newsFiltersAndFeeds = "Segue o traballo de Internacionalización da W3C."
s.news = "Seguir"
s.onThisPage = "Nesta páxina"
s.questionAlt = "Pregunta"
s.questionLink = "Pregunta"
s.question = "Pregunta"
s.backgroundAlt = "Infomación do background"
s.backgroundLink = "Background"
s.background = "Background"
s.answerAlt = "Resposta"
s.answerLink = "Resposta"
s.answer = "Resposta" // heading
s.byTheWayAlt = "Información adicional útil"
s.byTheWayLink = "Co propósito de"
s.byTheWay = "Co propósito de"
s.furtherReadingAlt = "Máis información"
s.furtherReadingLink = "Máis información"
s.furtherReading = "Máis información"
s.intendedAudience = "Público obxectivo:"
s.skipToAnswer = "[Salta á resposta]"
s.tellUsWhatYouThink = "Dinos que pensas."
s.sendAComment = "Deixa un comentario"
s.subscribeToRSS = "Suscríbete ó RSS."
s.newResourcesAlt = "Notifícate cada vez que se publica un novo rescurso por primeria vez"
s.newResources = "Novos recursos"
s.homePageNewsAlt = "Todos os novos elementos móstranse na páxina de inicio."
s.homePageNews = "Noticias da páxina de inicio"
s.followOurNews = "Segue as nosas novas."
s.sentenceDelimiter = "."

s.author = "De:" // followed by name of author(s)
s.previousAuthors = "Previamente por:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Cambiado por:" // person's name appears after colon
s.translatedBy = "Tradutor/tradutora:"
s.validXHTML = "XHTML 1.0 válido!"
s.validCSS = "CSS válido!"
s.codedInUtf8 = "Codificado en UTF-8!"

s.translatedFromEnglishVer = "Traducido do contido en inglés datado "+dt.enVersion+". Versión traducida modificada por última vez "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Para ver o historial de cambios dos documentos, consulte <a href="https://www.w3.org/blog/International/tag/'+f.searchString+'/">noticias</a> para cambios sustanciais, e <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">lista de confirmaciones de Github </a> para tódolos cambios desde xaneiro de 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Fixéronse cambios no <a href="'+f.filename+'.en">orixinal en inglés</a> desde que se traduciu este documento. Os cambios se incorporaron a esta páxina, polo que é posible que vexa alguns pasaxes en inglés ata que se actualice a tradución.'
s.unlinkedTranslation = '<strong>Advertencia:</strong> Fixéronse cambios sustanciais no orixinal en inglés desde que se traduciu este documento. Recoméndase ler <a href="'+f.filename+'">unha versión noutro idioma</a> ata que se actualice esta tradución.'
s.new="Engadido"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Actualizado" // same as New
s.translation_updated="Tradución actualizada:" // date appears after colon 

s.aboutThisArticle="Sobre este artigo" // title in the right column near the top of the page
s.status_draft="Este artigo é un borrador que aínda non foi revisado públicamente. Se tes comentarios, envíaos empregando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_review="Este artigo non está dispoñible para revisión pública. Se tes comentarios, envíaos empregando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_published="Este artigo foi revisado polo Grupo de Traballo Internacionalización da W3C e pasou por unha revisión pública para que sexa o máis preciso posible.</p><p> Se tes comentarios, por favor <a id='linktoGHissues' href='# enquisa'>fáinolos chegar</a>."
s.status_notreviewed="Este artigo foi publicado sen revisión pública. Se tes comentarios, envíaos usando a <a href='#survey'>ligazón preto da parte inferior desta páxina</a>."
s.status_obsolete="Este artigo está obsoleto. Xa non se mantén e é probable que sexa inexacto. Para obter información máis actualizada, consulta a <a href='https://www.w3.org/International/'>Páxina de inicio de Actividade de Internacionalización</a>."
s.tests="Probas" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Resposta rápida" // heading
s.longeranswer = "Detalles" // heading that follows 'Quick answer'
s.additionalinfo = "Información adicional" // heading that sometimes follows 'Details'
s.acknowledgements = "Grazas ás seguintes persoas, que contribuiron cos seus comentarios, os cales foron incluídos:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Se deixas que o navegador configure unha cookie, continuará a ver páxinas da Actividade de Internacionalización da W3C (onde está dispoñible) no idioma que escolliches. Queres configurar a cookie?" // this text is to be copied to another location
//s.supercedsTranslation = '<strong>Aviso: </ strong> Esta é unha versión non actualizada do documento! Recomendamos ler <a href="'Asg.betterfilename+'.en">a última versión</a> e se podes, modificar o marcador ou a ligazón que redirecciona aquí. '
s.githubRedirect = "<strong>NOTA!</strong> &nbsp; Este é só un borrador do editor deste artigo. Todas as ligazóns e os marcadores deben redirixir á <a href='https://www.w3.org/International/"+ f.directory + f.filename +"."+ f.clang +"'>versión no sitio da W3C</a>, e non a esta páxina." // used for github-based versions of published articles

s.lastChanged = "Último cambio "

//Se deixa que o navegador configure unha cookie, continuarás a ver páxinas da Actividade de Internacionalización da W3C (onde está dispoñible) no idioma que escolliches. Queres configurar a cookie?