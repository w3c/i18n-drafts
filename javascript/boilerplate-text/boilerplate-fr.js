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
  'ar':'Arabe',
  'bg':'Bulgare',
  'da':'Danois',
  'de':'Allemand',
  'el':'Grec',
  'en':'Anglais',
  'es':'Espagnol',
  'fr':'Français',
  'gl':'Galicien',
  'he':'Hébreu',
  'hi':'Hindi',
  'hu':'Hongrois',
  'it':'Italien',
  'ja':'Japonais',
  'ko':'Coréen',
  'nl':'Néerlandais',
  'pes':'Persan',
  'pl':'Polonais',
  'pt':'Portugais',
  'pt-br':'Portugais brésilien',
  'ro':'Roumain',
  'ru':'Russe',
  'sv':'Suédois',
  'th':'Thaï',
  'tr':'Turc',
  'uk':'Ukrainien',
  'vi':'Vietnamien',
  'zh-hans':'Chinois simplifié',
  'zh-hant':'Chinois traditionnel'
}

// cookie message, appears when changing languages
// this text needs to be copied to javascript/doc-structure/article-dt.js
s.cookieMsg = "Si vous acceptez que votre navigateur crée un cookie, vous continuerez de voir les pages d’activité d’internationalisation de W3C (lorsque cela est possible) dans la langue de votre choix. Souhaitez-vous créer le cookie ?"

// skip navigation link
s.skipNavigation = "Skip to main content"

// items in top right beige column
s.worldMap = "Carte du monde"  // title text for image, top right
s.searchI18nSite = "Recherche sur le site I18N" // placeholder text for search box, top right
s.englishOriginal = f.translationPaths && f.translationPaths.en ? f.translationPaths.en : `${ f.filename }.en.html`
s.translationDisclaimer = `Ce document est une traduction fournie bénévolement. En cas de divergences ou d'erreurs, la <a href="${ s.englishOriginal }">dernière version originale en anglais</a> fait autorité. Comme indiqué ci-dessous, les <a href="#copyright">droits d'auteur</a> reviennent au W3C.`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Accueil" // start of breadcrumbs
s.onThisPage = "Sur cette page"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="À propos de cet article" // title in the right column near the top of the page
s.status_draft="Cet article est un brouillon qui n’a pas encore été proposé à relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>."
s.status_review="Cet article est proposé à relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>."
s.status_published="Cet article a été relu par le Groupe de Travail Internationalisation du W3C et a subi un processus de relecture publique pour le rendre aussi précis que possible. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>."
s.status_notreviewed="Cet article n’a pas fait l’objet d’une relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>."
s.status_obsolete="Cet article est maintenant dépassé. Il n’est plus entretenu et est probablement inexact. Pour plus de renseignements sur la mise à jour, consulter la <a href='http://www.w3.org/International/'>page d’accueil des Activités d’internationalisation</a>."


// top left of page
s.gotoW3cHome = "Aller à la page d’accueil du W3C"  // title text for W3C logo
s.gotoI18nHome = "Aller à la page d’accueil de l’activité d’internationalisation" // title text for i18n banner
s.internationalizationTitle = "Internationalisation"  // the word above the orange line
s.worldwide = "Rendre le World Wide Web mondial&#x202F;!"  // the words below the orange line
s.techniques = "Apprendre"  // site links link text, top left
s.taskBasedIndex = "Pour apprendre les techniques et les exigences de l'internationalisation."  // title text for s.techniques
s.resources = "Trouver"  // site links link text, top left
s.informationResources = "Pour trouver les informations sur ce site."  // title text for s.resources
s.ask = "Demander"  // site links link text, top left
s.askI18nActivity = "Demander de l'aide ou des informations."  // title text for s.ask
s.news = "Suivre"  // site links link text, top left
s.newsFiltersAndFeeds = "Pour suivre les travaux du W3C relatifs à l'internationalisation."  // title text for s.news
s.groups = "Participer" // site links link text, top left
s.groupsThatMakeUp = "Pour participer aux travaux du W3C relatifs à l'internationalisation." // title text for s.groups
s.about = "A propos" // site links link text, top left
s.aboutI18nActivity = "A propos de la traduction W3C." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Public visé :"  // preface to audience description (being faded out)
s.lastChanged = "Dernière mise à jour&nbsp;: "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Donnez-nous votre avis."  // text content
s.sendAComment = "Envoyez-nous un commentaire" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Par : " // followed by name of author(s)
s.previousAuthors = "Précédemment par : " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modifié par : " // person's name appears after colon
s.translatedBy = "Traducteur : " // person's name appears after colon
s.acknowledgements = "Nous remercions également les personnes suivantes pour leur contribution ou leurs commentaires : " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Traduit d’un contenu en anglais daté du ${ dt.enVersion }. Dernière modification de cette traduction le ${ dt.thisVersionPlain } GMT.`
s.translation_updated="Traduction mise à jour:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Pour l’historique des modifications du document, veuillez consulter <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">le flux d’actualité</a> pour les changements conséquents, et <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">la liste des « commits » sur Github</a> pour voir toutes les modifications apportées depuis janvier 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Remarque :</strong>  Des changements ont été apportés au <a href="${ s.englishOriginal }">document original en anglais</a> depuis sa traduction. Les changements ont été intégrés à cette page, et il est possible que certains passages s'affichent en anglais en attendant que la traduction soit mise à jour.`
s.unlinkedTranslation = `<strong>Avertissement :</strong> Des modifications importantes ont été apportées à la version originale en anglais depuis qu’elle a été traduite. Il est recommandé de lire  <a href="${ s.englishOriginal }">une version dans une autre langue</a> en attendant que cette traduction soit mise à jour.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; Ceci est seulement un brouillon de l’éditeur de cet article. Tous les liens et signets doivent pointer vers <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>la version sur le site du W3C</a>.` // used for github-based versions of published articles


s.new="Nouveau"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Mis à jour" // same as New


// strings to promote consistency in article content
s.question = "Question"  // heading
s.questionAlt = "Question"  // title text for s.question
s.questionLink = "Question"  // 
s.skipToAnswer = "[Aller à la réponse]"  // link text
s.background = "Contexte" // heading
s.backgroundAlt = "Informations contextuelles" // title text for s.background
s.backgroundLink = "Contexte"
s.answer = "Réponse" // heading
s.answerAlt = "Réponse" // title text for s.answer
s.answerLink = "Réponse"
s.byTheWay = "En passant" // heading
s.byTheWayAlt = "Informations utiles complémentaires" // title text for s.byTheWay
s.byTheWayLink = "En passant"
s.furtherReading = "Pour approfondir" // heading
s.furtherReadingAlt = "Pour approfondir" // title text for s.byTheWay
s.furtherReadingLink = "Pour approfondir"
s.quickanswer = "Réponse courte" // heading
s.longeranswer = "Détails" // heading that follows 'Quick answer'
s.additionalinfo = "Information complémentaire" // heading that sometimes follows 'Details'

// copy button for code blocks
s.copy = "Copy"
s.copied = "Copied!"


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Abonnez-vous au flux RSS."  
s.newResourcesAlt = "Pour vous informer de la parution de chaque nouvelle publication."
s.newResources = "Nouvelles publications"
s.homePageNewsAlt = "Chacune des nouvelles figurant en page d'accueil."
s.homePageNews = "Les nouvelles de la page d'accueil"
s.followOurNews = "Abonnez-vous à notre fil d’actualités."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "XHTML 1.0 valide !"
s.validCSS = "CSS valide !"
s.codedInUtf8 = "Codé en UTF-8 !"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "Accueil de l'Activité I18N"
s.moreResourcesOfThisType = "Autres ressources du même type."
s.accessKeyN = `Utiliser la touche d'accès n pour naviguer au sein de la page. <a href="#contentstart">Sauter au début du contenu.</a>`
s.examplesInAnotherScript = "Ce document contient des exemples dans une autre langue et une autre écriture."
s.relatedLinks = "Liens utiles"
s.techIndexText = "Index des techniques"
s.topicIndexText = "Index des sujets"
s.i18nActivityHomePage = "Page d’accueil de l’activité d’internationalisation."
s.topicIndexForInformation = "Pour effectuer des recherches dans le site."
s.topics = "Chercher"



/*

MISSING TRANSLATIONS

none

*/