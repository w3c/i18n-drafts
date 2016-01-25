// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below


var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabisch',
  'bg':'Bulgarisch',
  'da':'Dänisch',
  'de':'Deutsch',
  'el':'Griechisch',
  'en':'Englisch',
  'es':'Spanisch',
  'fr':'Französisch',
  'he':'Hebräisch',
  'hi':'Hindi',
  'hu':'Ungarisch',
  'it':'Italienisch',
  'ja':'Japanisch',
  'ko':'Koreanisch',
  'nl':'Niederländisch',
  'pl':'Polnisch',
  'pt':'Portugiesisch',
  'pt-br':'Brasilianisches Portugiesisch',
  'ro':'Rumänisch',
  'ru':'Russisch',
  'sv':'Schwedisch',
  'th':'Thai',
  'tr':'Türkisch',
  'uk':'Ukrainisch',
  'vi':'Vietnamesisch',
  'zh-hans':'Vereinfachtes Chinesisch',
  'zh-hant':'Traditionelles Chinesisch',
	}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "Startseite der I18n-Tätigkeit"
s.moreResourcesOfThisType = "Weitere Ressourcen diesen Typs."
s.accessKeyN = 'Accesskey n springt zur Seitennavigation. <a href="//contentstart">Springe zum Inhalt.</a>'
s.examplesInAnotherScript = "Dieses Dokument enthält Beispiele in einer anderen Sprache/Schrift."
s.worldMap = "Weltkarte"
s.searchI18nSite = "I18n-Suche" 
s.translationDisclaimer = 'Dieses Dokument ist eine Übersetzung. Im Falle von Abweichungen oder Fehlern sollte das <a href="'+f.filename+'.en">aktuelle englische Original</a> als maßgeblich angenommen werden. Das W3C besitzt das <a href="//copyright">Copyright am Original</a>, wie unten beschrieben.'
s.translator = "Übersetzer:"
s.relatedLinks = "Verwandte Links"
s.articles = "Artikel" // used in breadcrumbs, top right of page 
s.topicIndexText = "Themenverzeichnis"
s.techIndexText = "Technikenverzeichnis"
s.gotoW3cHome = "Zur W3C-Startseite"
s.gotoI18nHome = "Zur Startseite der Internationalisierungstätigkeit"
s.internationalizationTitle = "Internationalisierung"
s.i18nActivityHomePage = "Startseite der Internationalisierungstätigkeit."
s.home = "Startseite"
s.aboutI18nActivity = "Über die Internationalisierungstätigkeit."
s.about = "Über"
s.groupsThatMakeUp = "Gruppen, die die Internationalisierungstätigkeit bilden."
s.groups = "Gruppen"
s.topicIndexForInformation = "Themenindex für Informationen auf dieser Seite."
s.topics = "Themen"
s.taskBasedIndex = "Aufgabenorientierter Index von I18n-Techniken."
s.techniques = "Techniken"
s.informationResources = "Informationsquellen auf der Internationalisierungsseite."
s.resources = "Ressourcen"
s.newsFiltersAndFeeds = "Informationen über Nachrichten und RSS-Feeds für W3C-Internationalisierung."
s.news = "News"
s.onThisPage = "Auf dieser Seite"
s.questionAlt = "Frage"
s.questionLink = "Frage"
s.question = "Frage"
s.backgroundAlt = "Hintergrundinformationen"
s.backgroundLink = "Hintergrund"
s.background = "Hintergrund"
s.answer = "Antwort" // heading
s.answerAlt = "Antwort"
s.answerLink = "Antwort"
s.byTheWayAlt = "Weitere nützliche Informationen"
s.byTheWayLink = "Übrigens"
s.byTheWay = "Übrigens"
s.furtherReadingAlt = "Literaturhinweise"
s.furtherReadingLink = "Literaturhinweise"
s.furtherReading = "Literaturhinweise"
s.intendedAudience = "Zielgruppe:"
s.skipToAnswer = "[Zur Antwort springen]"
s.tellUsWhatYouThink = "Sagen Sie uns, was Sie denken."
s.sendAComment = "Senden Sie uns Anmerkungen"
s.subscribeToRSS = "Abonnieren Sie unseren RSS-Feed."
s.newResourcesAlt = "Sie werden benachrichtigt, wenn ein neues Dokument zum ersten Mal veröffentlicht wird."
s.newResources = "Neue Ressourcen"
s.homePageNewsAlt = "Alle Nachrichten, die auf der Startseite gezeigt werden."
s.homePageNews = "News auf der Startseite"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "Vorheriger Autor:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Geändert von:" // person's name appears after colon
s.translatedBy = "Übersetzer:"
s.validXHTML = "Valides XHTML 1.0!"
s.validCSS = "Valides CSS!"
s.codedInUtf8 = "Kodiert in UTF-8!"

s.translatedFromEnglishVer = "Übersetzung der englischen Version vom "+dt.enVersion+". Letzte Änderung der übersetzten Version am "+dt.thisVersionPlain+" UTC."

s.historyOfDocumentChanges = 'Suchen Sie nach <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">'+f.searchString+'</a></span> im i18n-Blog, um alle Dokumentänderungen nachzuvollziehen.'
s.untranslatedChanges = '<strong>Hinweis:</strong> Das  <a href="'+f.filename+'.en">englische Original</a> wurde aktualisiert. <span class="searchkey"><a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Für Änderungen siehe Blog.</a></span>'
s.new="Neu"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Aktualisiert" // same as New
s.translation_updated="Übersetzung aktualisiert am" // date appears after colon 

s.aboutThisArticle="Über diesen Artikel" // title in the right column near the top of the page
s.status_draft="Dieser Artikel ist ein Entwurf und wurde noch nicht öffentlich diskutiert. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über den Link am Ende der Seite."
s.status_review="Dieser Artikel wird zur Zeit gerade öffentlich diskutiert. Senden Sie bitte Ihre Anmerkungen an <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20"+f.directory+f.filename+"'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>Abonnieren</a>)</span>."
s.status_published="Dieser Artikel wurde von der Arbeits&shygruppe Inter&shynationali&shysierung des W3C geprüft und öffentlich diskutiert, damit er so korrekt wie möglich ist. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über den Link am Ende der Seite."
s.status_notreviewed="Dieser Artikel wurde ohne vorherige öffentliche Diskussion veröffentlicht. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über den Link am Ende der Seite."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Kurze Antwort" // heading
s.longeranswer = "Ausführliche Antwort" // heading
s.acknowledgements = "Vielen Dank für die Beiträge und Kommentare zu diesem Artikel an:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
