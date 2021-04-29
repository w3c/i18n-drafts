// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below


var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabe',
  'bg':'Bulgare',
  'da':'Danois',
  'de':'Allemand',
  'el':'Grec',
  'en':'Anglais',
  'es':'Espagnol',
  'fr':'Français',
  'he':'Hébreu',
  'hi':'Hindi',
  'hu':'Hongrois',
  'it':'Italien',
  'ja':'Japonais',
  'ko':'Coréen',
  'nl':'Néerlandais',
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

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""




// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Accueil de l'Activité I18N";
s.moreResourcesOfThisType = "Autres ressources du même type.";
s.accessKeyN = 'Utiliser la touche d\'accès n pour naviguer au sein de la page. <a href="#contentstart">Sauter au début du contenu.</a>'
s.examplesInAnotherScript = "Ce document contient des exemples dans une autre langue et une autre écriture.";
s.worldMap = "Carte du monde";
s.searchI18nSite = "Recherche sur le site I18N"; 
s.translationDisclaimer = 'Ce document est une traduction fournie bénévolement. En cas de divergences ou d\'erreurs, la <a href="'+f.filename+'.en">dernière version originale en anglais</a> fait autorité. Comme indiqué ci-dessous, les <a href="#copyright">droits d\'auteur</a> reviennent au W3C.'
s.translator = "Traducteur:";
s.relatedLinks = "Liens utiles";
s.articles = "Articles"; // used in breadcrumbs, top right of page 
s.topicIndexText = "Index des sujets";
s.techIndexText = "Index des techniques";
s.gotoW3cHome = "Aller à la page d’accueil du W3C";
s.gotoI18nHome = "Aller à la page d’accueil de l’activité d’internationalisation";
s.internationalizationTitle = "Internationalisation";
s.worldwide = "Rendre le World Wide Web mondial&#x202F;!"
s.i18nActivityHomePage = "Page d’accueil de l’activité d’internationalisation.";
s.home = "Accueil";
s.contactI18nActivity = "Pour obtenir de l'aide au sujet de l'internationalisation au W3C.";
s.contact = "Contacter";
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Pour participer aux travaux du W3C relatifs à l'internationalisation.";
s.groups = "Participer";
s.topicIndexForInformation = "Pour effectuer des recherches dans le site.";
s.topics = "Chercher";
s.taskBasedIndex = "Pour apprendre les techniques et les exigences de l'internationalisation.";
s.techniques = "Apprendre";
s.informationResources = "Pour trouver les informations sur ce site.";
s.resources = "Trouver";
s.newsFiltersAndFeeds = "Pour suivre les travaux du W3C relatifs à l'internationalisation.";
s.news = "Suivre";
s.onThisPage = "Sur cette page";
s.questionAlt = "Question";
s.questionLink = "Question";
s.question = "Question";
s.backgroundAlt = "Informations contextuelles";
s.backgroundLink = "Contexte";
s.background = "Contexte";
s.answer = "Réponse"; // heading
s.answerAlt = "Réponse";
s.answerLink = "Réponse";
s.byTheWayAlt = "Informations utiles complémentaires";
s.byTheWayLink = "En passant";
s.byTheWay = "En passant";
s.furtherReadingAlt = "Pour approfondir";
s.furtherReadingLink = "Pour approfondir";
s.furtherReading = "Pour approfondir";
s.intendedAudience = "Public visé :";
s.skipToAnswer = "[Aller à la réponse]";
s.tellUsWhatYouThink = "Donnez-nous votre avis.";
s.sendAComment = "Envoyez-nous un commentaire";
s.subscribeToRSS = "Abonnez-vous au flux RSS.";
s.newResourcesAlt = "Pour vous informer de la parution de chaque nouvelle publication.";
s.newResources = "Nouvelles publications";
s.homePageNewsAlt = "Chacune des nouvelles figurant en page d'accueil.";
s.homePageNews = "Les nouvelles de la page d'accueil";
s.followOurNews = "Abonnez-vous à notre fil d’actualités."
s.sentenceDelimiter = ".";

s.author = "Par :"; // followed by name of author(s)
s.previousAuthors = "Précédemment par :"; // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modifié par :"; // person's name appears after colon
s.translatedBy = "Traducteur :";
s.validXHTML = "XHTML 1.0 valide !";
s.validCSS = "CSS valide !";
s.codedInUtf8 = "Codé en UTF-8 !";

s.translatedFromEnglishVer = "Traduit d’un contenu en anglais daté du "+dt.enVersion+". Dernière modification de cette traduction le "+dt.thisVersionPlain+" GMT."; 

s.historyOfDocumentChanges = 'Pour l’historique des modifications du document, veuillez consulter <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">le flux d’actualité</a> pour les changements conséquents, et <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">la liste des « commits » sur Github</a> pour voir toutes les modifications apportées depuis janvier 2016.'
s.untranslatedChanges = '<strong>Remarque :</strong>  Des changements ont été apportés au <a href="'+f.filename+'.en">document original en anglais</a> depuis sa traduction. Les changements ont été intégrés à cette page, et il est possible que certains passages s\'affichent en anglais en attendant que la traduction soit mise à jour.'
s.unlinkedTranslation = '<strong>Avertissement :</strong> Des modifications importantes ont été apportées à la version originale en anglais depuis qu’elle a été traduite. Il est recommandé de lire  <a href="'+f.filename+'.en">une version dans une autre langue</a> en attendant que cette traduction soit mise à jour.'
s.new="Nouveau";// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Mis à jour"; // same as New
s.translation_updated="Traduction mise à jour:"; // date appears after colon 

s.aboutThisArticle="À propos de cet article"; // title in the right column near the top of the page
s.status_draft="Cet article est un brouillon qui n’a pas encore été proposé à relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>.";
s.status_review="Cet article est proposé à relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>.";
s.status_published="Cet article a été relu par le Groupe de Travail Internationalisation du W3C et a subi un processus de relecture publique pour le rendre aussi précis que possible. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>.";
s.status_notreviewed="Cet article n’a pas fait l’objet d’une relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant <a href='#survey'>le lien de bas de page</a>.";
s.status_obsolete="Cet article est maintenant dépassé. Il n’est plus entretenu et est probablement inexact. Pour plus de renseignements sur la mise à jour, consulter la <a href='http://www.w3.org/International/'>page d’accueil des Activités d’internationalisation</a>."
s.tests=""; // used at the end of breadcrumbs for test related pages
s.quickanswer = "Réponse courte"; // heading
s.longeranswer = "Détails"; // heading
s.details = "Détails"; // heading
s.additionalinfo = "Information complémentaire" // heading that sometimes follows 'Details'
s.acknowledgements = "Nous remercions également les personnes suivantes pour leur contribution ou leurs commentaires\u202F:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Si vous acceptez que votre navigateur crée un cookie, vous continuerez de voir les pages d’activité d’internationalisation de W3C (lorsque cela est possible) dans la langue de votre choix. Souhaitez-vous créer le cookie\u202F?" // this text is to be copied to another location
//s.supercededTranslation = '<strong>Avertissement :</strong> Ceci est une version dépassée de ce document! Il est recommandé de lire <a href="'+g.betterfilename+'.en">la dernière version</a> et si vous le pouvez, de modifier le marque-page ou le lien qui vous a redirigé ici.'
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; Ceci est seulement un brouillon de l\’éditeur de cet article. Tous les liens et signets doivent pointer vers <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>la version sur le site du W3C</a>." // used for github-based versions of published articles

s.lastChanged = "Dernière mise à jour&nbsp;: "