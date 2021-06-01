// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Árabe',
  'bg':'Búlgaro',
  'da':'Dinamarquês',
  'de':'Alemão',
  'el':'Grego',
  'en':'Inglês',
  'es':'Espanhol',
  'fr':'Francês',
  'he':'Hebraico',
  'hi':'Hindi',
  'hu':'Húngaro',
  'it':'Italiano',
  'ja':'Japanese',
  'ko':'Coreano',
  'nl':'Holandês',
  'pl':'Polonês',
  'pt':'Português',
  'pt-br':'Português brasiliero',
  'ro':'Romeno',
  'ru':'Russo',
  'sv':'Sueco',
  'th':'Tailandês',
  'tr':'Turco',
  'uk':'Ucraniano',
  'vi':'Vietnamita',
  'zh-hans':'Chinês simplificado',
  'zh-hant':'Chinês tradicional',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Página inicial de atividades de I18N"
s.moreResourcesOfThisType = "Mais recursos desse tipo."
s.accessKeyN = 'A tecla de acesso n  salta para outro local na navegação da página. <a href="#contentstart">Saltar para o início do conteúdo.</a>'
s.examplesInAnotherScript = "Este documento contém exemplos em outro idioma/script."
s.worldMap = "Mapa Mundi"
s.searchI18nSite = "Busca do site de I18n" 
s.translationDisclaimer = 'Este documento é uma tradução. Se ocorrerem discrepâncias ou erros, o <a href="'+f.filename+'.en">original em inglês mais recente</a> terá precedência. <a href="#copyright">Os direitos autorais originais</a> pertencem à W3C, como indicado abaixo.'
s.translator = "Tradutor:"
s.relatedLinks = "Links relacionados"
s.articles = "Artigos" // used in breadcrumbs, top right of page 
s.topicIndexText = "Índice de tópicos"
s.techIndexText = "Índice de técnicas"
s.gotoW3cHome = "Acessar página inicial do W3C"
s.gotoI18nHome = "Acessar página inicial de Internationalization Activity (Atividade de Internacionalização)"
s.internationalizationTitle = "Internacionalização"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Página inicial de Internationalization Activity (Atividade de Internacionalização)."
s.home = "Início"
s.contactI18nActivity = "Sobre a Atividade de Internacionalização."
s.contact = "Sobre"
s.aboutI18nActivity = "Sobre a Atividade de Internacionalização."
s.about = "Sobre"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Grupos integrantes da Atividade de Internacionalização."
s.groups = "Grupos"
s.topicIndexForInformation = "Índice de tópicos para obter informações sobre este site."
s.topics = "Tópicos"
s.taskBasedIndex = "Índice de técnicas de i18n, baseado em tarefas."
s.techniques = "Técnicas"
s.informationResources = "Recursos de informações sobre o site de internacionalização."
s.resources = "Recursos"
s.newsFiltersAndFeeds = "Informações sobre novos filtros e RSS feeds para internacionalização do W3C."
s.news = "Notícias"
s.onThisPage = "Nesta página"
s.questionAlt = "Pergunta"
s.questionLink = "Pergunta"
s.question = "Pergunta"
s.backgroundAlt = "Informações preliminares"
s.backgroundLink = "Informações"
s.background = "Informações"
s.answer = "Resposta" // heading
s.answerAlt = "Resposta"
s.answerLink = "Resposta"
s.byTheWayAlt = "Informações adicionais úteis"
s.byTheWayLink = "A propósito"
s.byTheWay = "A propósito"
s.furtherReadingAlt = "Leitura complementar"
s.furtherReadingLink = "Leitura complementar"
s.furtherReading = "Leitura complementar"
s.intendedAudience = "Público alvo:"
s.skipToAnswer = "[Saltar para a resposta]"
s.tellUsWhatYouThink = "Dê-nos a sua opinião (em inglês)."
s.sendAComment = "Envie-nos um comentário"
s.subscribeToRSS = "Subscreva uma alimentação RSS."
s.newResourcesAlt = "Receba uma notificação sempre que for publicado um novo recurso."
s.newResources = "Novos recursos"
s.homePageNewsAlt = "Todas as notícias apresentadas na página principal."
s.homePageNews = "Notícias na página principal"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modified by:" // person's name appears after colon
s.translatedBy = "Tradutor:"
s.validXHTML = "XHTML 1.0 válida!"
s.validCSS = "CSS válido!"
s.codedInUtf8 = "Codificado em UTF-8!"

s.translatedFromEnglishVer = "Traduzido de conteúdo em inglês datado de "+dt.enVersion+". Última versão traduzida modificada "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Depois que este documento foi traduzido,  alterações foram feitas no <a href="'+f.filename+'.en.php">documento original em inglês.</a> The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="Novo"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Atualizado" // same as New
s.translation_updated="Tradução atualizada:" // date appears after colon 

s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Longer answer" // heading
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "