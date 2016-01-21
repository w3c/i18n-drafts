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
s.accessKeyN = 'Utiliser la touche d\'accès n pour naviguer au sein de la page. <a href="//contentstart">Sauter au début du contenu.</a>'
s.examplesInAnotherScript = "Ce document contient des exemples dans une autre langue et une autre écriture.";
s.worldMap = "Carte du monde";
s.searchI18nSite = "Recherche sur le site I18N"; 
s.translationDisclaimer = 'Ce document est une traduction. En cas de divergences ou d\'erreurs, la <a href="'+f.filename+'.en">dernière version originale en anglais</a> fait autorité. Comme indiqué ci-dessous, les <a href="//copyright">droits d\'auteur</a> reviennent au W3C.'
s.translator = "Traducteur:";
s.relatedLinks = "Liens utiles";
s.articles = "Articles"; // used in breadcrumbs, top right of page 
s.topicIndexText = "Index des sujets";
s.techIndexText = "Index des techniques";
s.gotoW3cHome = "Aller à la page d’accueil du W3C";
s.gotoI18nHome = "Aller à la page d’accueil de l’activité d’internationalisation";
s.internationalizationTitle = "Internationalisation";
s.i18nActivityHomePage = "Page d’accueil de l’activité d’internationalisation.";
s.home = "Accueil";
s.aboutI18nActivity = "À propos de l’activité d’internationalisation.";
s.about = "À propos";
s.groupsThatMakeUp = "Les groupes constituant l’activité d’internationalisation.";
s.groups = "Groupes";
s.topicIndexForInformation = "Index thématique du site";
s.topics = "Sujets";
s.taskBasedIndex = "Index des techniques d’internationalisation par tâches";
s.techniques = "Techniques";
s.informationResources = "Ressources d’information sur le site de l’internationalisation.";
s.resources = "Ressources";
s.newsFiltersAndFeeds = "Informations sur les filtres d’information et fils RSS pour l’internationalisation du W3C.";
s.news = "Nouvelles";
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
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = ".";

s.author = "Par :"; // followed by name of author(s)
s.previousAuthors = "Précédemment par :"; // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Modifié par :"; // person's name appears after colon
s.translatedBy = "Traducteur :";
s.validXHTML = "XHTML 1.0 valide !";
s.validCSS = "CSS valide !";
s.codedInUtf8 = "Codé en UTF-8 !";

s.translatedFromEnglishVer = "Traduit d’un contenu en anglais daté du "+dt.enVersion+". Dernière modification de cette traduction le "+dt.thisVersionPlain+" GMT."; 

s.historyOfDocumentChanges = 'Pour un résumé des changements importants, recherchez <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> dans le blog i18n.'
s.untranslatedChanges = '<strong>Note:</strong>  Des changements ont été apportés au <a href="'+filename+'.en">document original en anglais</a> depuis sa traduction. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Consulter le fichier des changements.</a></span>'
s.new="New";// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated"; // same as New
s.translation_updated="Translation updated:"; // date appears after colon 

s.aboutThisArticle="À propos de cet article"; // title in the right column near the top of the page
s.status_draft="Cet article est un brouillon qui n’a pas encore été proposé à relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant le lien de bas de page";
s.status_review="Cet article est proposé à relecture publique. Merci d'envoyer vos commentaires à <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>s’abonner</a>)</span>.";
s.status_published="Cet article a été relu par le Groupe de Travail Internationalisation du W3C et a subi un processus de relecture publique pour le rendre aussi précis que possible. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant le lien de bas de page.";
s.status_notreviewed="Cet article n’a pas fait l’objet d’une relecture publique. Si certains points vous semblent à débattre, merci d’envoyer vos remarques en utilisant le lien de bas de page.";
s.tests=""; // used at the end of breadcrumbs for test related pages
s.quickanswer = "Réponse courte"; // heading
s.longeranswer = "Réponse longue"; // heading
s.cookieMsg = "Si vous laissez le navigateur définir un cookie, vous continuerez à voir les pages de l'Activité Internationalisation du W3C (si disponible) dans la langue que vous avez choisi. Voulez-vous définir le cookie?" // this text is to be copied to another location
