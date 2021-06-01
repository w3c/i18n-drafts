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
  'zh-hant':'Chinês tradicional'
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Página inicial de atividades de I18N"
s.moreResourcesOfThisType = "Mais recursos desse tipo."
s.accessKeyN = 'A tecla de acesso \'n\'  salta para outro local na navegação da página. <a href="#contentstart">Saltar para o início do conteúdo.</a>'
s.examplesInAnotherScript = "Este documento contém exemplos em outro idioma/script."
s.worldMap = "Mapa Mundi"
s.searchI18nSite = "Busca do site de I18n" 
s.translationDisclaimer = 'Este documento é uma tradução produzida por um voluntário. Em caso de discrepâncias ou erros, o <a href="'+f.filename+'.en">último original em inglês do</a> deve ser considerado fidedigno.<a href="#copyright">Os direitos autorais do original </a> pertenceem à W3C, como mostrado abaixo.'
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
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
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
s.followOurNews = "Siga nosso feed de notícias."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificado por:" // person's name appears after colon
s.translatedBy = "Tradutor:"
s.validXHTML = "XHTML 1.0 válida!"
s.validCSS = "CSS válido!"
s.codedInUtf8 = "Codificado em UTF-8!"

s.translatedFromEnglishVer = "Traduzido de conteúdo em inglês datado de "+dt.enVersion+". Última versão traduzida modificada "+dt.thisVersionPlain+"n GMT"

s.historyOfDocumentChanges = 'Para obter o histórico de alterações do documento, veja o <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">feed de notícias</a> para mudanças de maior relevância, e a <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">lista de compromissos Github </a> para todas as mudanças desde janeiro de 2016.'
s.untranslatedChanges = '<strong>Nota:</strong> Foram feitas alterações no <a href="'+f.filename+'.en">original em inglês</a> desde que este documento foi traduzido. Essas mudanças foram incorporadas a esta página, de modo que você poderá ver algumas passagens em inglês até que a tradução seja atualizada.'
s.unlinkedTranslation = '<strong>Aviso:</strong> Alterações relevantes foram feitas no original em inglês desde que este documento foi traduzido. Aconselhamos que você leia <a href="'+f.filename+'">uma versão em outro idioma </a> até que esta tradução tenha sido atualizada.'
s.new="Novo"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Atualizado" // same as New
s.translation_updated="Tradução atualizada:" // date appears after colon 


s.aboutThisArticle="Sobre este artigo" // title in the right column near the top of the page
s.status_draft="Este artigo é um rascunho ainda não submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_review="Este artigo ainda não foi submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_published="Este artigo foi revisto pelo Grupo de Trabalho de Internacionalização do W3C e passou por revisão pública para torná-lo o mais preciso possível. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_notreviewed="Este artigo foi publicado sem ter sido submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_obsolete="Este artigo está agora obsoleto. Ele não recebe mais novas atualizações e provavelmente está impreciso. Para mais informações atualizadas, veja o <a href='http://w1ww.w3.org/International/'>Página principal de atividades de internacionalização</a>."
s.tests="Testes" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Resposta resumida" // heading
s.details = "Detalhes" // heading
s.longeranswer = "Detalhes" // heading
s.additionalinfo = "Informações adicionais" // heading that sometimes follows 'Details'

s.acknowledgements = "Obrigado às seguintes pessoas pelo feedback ou contribuição incluídas nesta página:" // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg = "Se você deixar que o navegador instale um cookie, continuará a ver as páginas de Atividade de Internacionalização da W3C (sempre que disponíveis) no idioma que escolher. Deseja instalar o cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "