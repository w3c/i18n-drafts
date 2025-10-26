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
  'da':'Dinamarquês',
  'de':'Alemão',
  'el':'Grego',
  'en':'Inglês',
  'es':'Espanhol',
  'fr':'Francês',
  'gl':'Galego',
  'he':'Hebraico',
  'hi':'Hindi',
  'hu':'Húngaro',
  'it':'Italiano',
  'ja':'Japanese',
  'ko':'Coreano',
  'nl':'Holandês',
  'pes':'Persa',
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

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Se você deixar que o navegador instale um cookie, continuará a ver as páginas de Atividade de Internacionalização da W3C (sempre que disponíveis) no idioma que escolher. Deseja instalar o cookie?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Mapa Mundi"  // title text for image, top right
s.searchI18nSite = "Busca do site de I18n" // placeholder text for search box, top right
s.translationDisclaimer = `Este documento é uma tradução produzida por um voluntário. Em caso de discrepâncias ou erros, o <a href="${ f.filename }.en">último original em inglês do</a> deve ser considerado fidedigno.<a href="#copyright">Os direitos autorais do original </a> pertenceem à W3C, como mostrado abaixo.`  // text appears only on translated pages

s.articles = "Artigos" // used in breadcrumbs, top right of page
s.tests="Testes" // used at the end of breadcrumbs for test related pages
s.home = "Início" // start of breadcrumbs
s.onThisPage = "Nesta página"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Sobre este artigo" // title in the right column near the top of the page
s.status_draft="Este artigo é um rascunho ainda não submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_review="Este artigo ainda não foi submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_published="Este artigo foi revisto pelo Grupo de Trabalho de Internacionalização do W3C e passou por revisão pública para torná-lo o mais preciso possível. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_notreviewed="Este artigo foi publicado sem ter sido submetido à revisão pública. Caso você encontre algo que necessite revisão, por favor envie seu feedback usando <a href='#survey'>o link existente na parte inferior da página</a>."
s.status_obsolete="Este artigo está agora obsoleto. Ele não recebe mais novas atualizações e provavelmente está impreciso. Para mais informações atualizadas, veja o <a href='http://w1ww.w3.org/International/'>Página principal de atividades de internacionalização</a>."


// top left of page
s.gotoW3cHome = "Acessar página inicial do W3C"  // title text for W3C logo
s.gotoI18nHome = "Acessar página inicial de Internationalization Activity (Atividade de Internacionalização)" // title text for i18n banner
s.internationalizationTitle = "Internacionalização"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Técnicas"  // site links link text, top left
s.taskBasedIndex = "Índice de técnicas de i18n, baseado em tarefas."  // title text for s.techniques
s.resources = "Recursos"  // site links link text, top left
s.informationResources = "Recursos de informações sobre o site de internacionalização."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Notícias"  // site links link text, top left
s.newsFiltersAndFeeds = "Informações sobre novos filtros e RSS feeds para internacionalização do W3C."  // title text for s.news
s.groups = "Grupos" // site links link text, top left
s.groupsThatMakeUp = "Grupos integrantes da Atividade de Internacionalização." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Público alvo:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Dê-nos a sua opinião (em inglês)."  // text content
s.sendAComment = "Envie-nos um comentário" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Autor: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modificado por: " // person's name appears after colon
s.translatedBy = "Tradutor: " // person's name appears after colon
s.acknowledgements = "Obrigado às seguintes pessoas pelo feedback ou contribuição incluídas nesta página: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Traduzido de conteúdo em inglês datado de ${ dt.enVersion }. Última versão traduzida modificada ${ dt.thisVersionPlain }n GMT`
s.translation_updated="Tradução atualizada:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Para obter o histórico de alterações do documento, veja o <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">feed de notícias</a> para mudanças de maior relevância, e a <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">lista de compromissos Github </a> para todas as mudanças desde janeiro de 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Nota:</strong> Foram feitas alterações no <a href="${ f.filename }.en">original em inglês</a> desde que este documento foi traduzido. Essas mudanças foram incorporadas a esta página, de modo que você poderá ver algumas passagens em inglês até que a tradução seja atualizada.`
s.unlinkedTranslation = `<strong>Aviso:</strong> Alterações relevantes foram feitas no original em inglês desde que este documento foi traduzido. Aconselhamos que você leia <a href="${ f.filename }">uma versão em outro idioma </a> até que esta tradução tenha sido atualizada.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Novo"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Atualizado" // same as New


// strings to promote consistency in article content
s.question = "Pergunta"  // heading
s.questionAlt = "Pergunta"  // title text for s.question
s.questionLink = "Pergunta"  // 
s.skipToAnswer = "[Saltar para a resposta]"  // link text
s.background = "Informações" // heading
s.backgroundAlt = "Informações preliminares" // title text for s.background
s.backgroundLink = "Informações"
s.answer = "Resposta" // heading
s.answerAlt = "Resposta" // title text for s.answer
s.answerLink = "Resposta"
s.byTheWay = "A propósito" // heading
s.byTheWayAlt = "Informações adicionais úteis" // title text for s.byTheWay
s.byTheWayLink = "A propósito"
s.furtherReading = "Leitura complementar" // heading
s.furtherReadingAlt = "Leitura complementar" // title text for s.byTheWay
s.furtherReadingLink = "Leitura complementar"
s.quickanswer = "Resposta resumida" // heading
s.longeranswer = "Detalhes" // heading that follows 'Quick answer'
s.additionalinfo = "Informações adicionais" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"

// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Subscreva uma alimentação RSS."  
s.newResourcesAlt = "Receba uma notificação sempre que for publicado um novo recurso."
s.newResources = "Novos recursos"
s.homePageNewsAlt = "Todas as notícias apresentadas na página principal."
s.homePageNews = "Notícias na página principal"
s.followOurNews = "Siga nosso feed de notícias."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 válida!"
s.validCSS = "CSS válido!"
s.codedInUtf8 = "Codificado em UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Página inicial de atividades de I18N"
s.moreResourcesOfThisType = "Mais recursos desse tipo."
s.accessKeyN = `A tecla de acesso 'n'  salta para outro local na navegação da página. <a href="#contentstart">Saltar para o início do conteúdo.</a>`
s.examplesInAnotherScript = "Este documento contém exemplos em outro idioma/script."
s.relatedLinks = "Links relacionados"
s.techIndexText = "Índice de técnicas"
s.topicIndexText = "Índice de tópicos"
s.i18nActivityHomePage = "Página inicial de Internationalization Activity (Atividade de Internacionalização)."
s.topicIndexForInformation = "Índice de tópicos para obter informações sobre este site."
s.topics = "Tópicos"



/*

MISSING TRANSLATIONS

check all top left links !

worldwide
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
previousAuthors
githubRedirect




*/