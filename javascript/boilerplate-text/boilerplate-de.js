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
s.accessKeyN = 'Accesskey n springt zur Seitennavigation. <a href="#contentstart">Springe zum Inhalt.</a>'
s.examplesInAnotherScript = "Dieses Dokument enthält Beispiele in einer anderen Sprache/Schrift."
s.worldMap = "Weltkarte"
s.searchI18nSite = "I18n-Suche" 
s.translationDisclaimer = 'Dieses Dokument ist eine ehrenamtlich angefertigte Übersetzung. Im Falle von Abweichungen oder Fehlern sollte das <a href="'+f.filename+'.en">aktuelle englische Original</a> als maßgeblich angenommen werden. Das W3C besitzt das <a href="#copyright">Copyright am Original</a>, wie unten beschrieben.'
s.translator = "Übersetzer:"
s.relatedLinks = "Verwandte Links"
s.articles = "Artikel" // used in breadcrumbs, top right of page 
s.topicIndexText = "Themenverzeichnis"
s.techIndexText = "Technikenverzeichnis"
s.gotoW3cHome = "Zur W3C-Startseite"
s.gotoI18nHome = "Zur Startseite der Internationalisierungstätigkeit"
s.internationalizationTitle = "Internationalisierung"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Startseite der Internationalisierungstätigkeit."
s.home = "Startseite"
s.contactI18nActivity = "Bekomme Hilfe von W3C-Internationalisierung."
s.contact = "Kontakt"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Mach mit bei der Internationalisierung."
s.groups = "Mach mit"
s.topicIndexForInformation = "Suche auf dieser Seite."
s.topics = "Suche"
s.taskBasedIndex = "Lerne die Techniken und Anforderungen für die Internationalisierung."
s.techniques = "Lerne"
s.informationResources = "Finde Informationen auf dieser Seite."
s.resources = "Finde"
s.newsFiltersAndFeeds = "Folge der Arbeit von W3C-Internationalisierung."
s.news = "Folge"
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
s.followOurNews = "Folgen Sie unserem Newsfeed."
s.sentenceDelimiter = "."

s.author = "Autor:" // followed by name of author(s)
s.previousAuthors = "Vorheriger Autor:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Geändert von:" // person's name appears after colon
s.translatedBy = "Übersetzer:"
s.validXHTML = "Valides XHTML 1.0!"
s.validCSS = "Valides CSS!"
s.codedInUtf8 = "Kodiert in UTF-8!"

s.translatedFromEnglishVer = "Übersetzung der englischen Version vom "+dt.enVersion+". Letzte Änderung der übersetzten Version am "+dt.thisVersionPlain+" UTC."

s.historyOfDocumentChanges = 'Zur Änderungshistorie dieser Seite siehe <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">Newsfeed</a> für wesentliche Änderungen und <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github-Commit-Liste</a> für alle Änderungen am englischen Original ab Januar 2016.'
s.untranslatedChanges = '<strong>Hinweis:</strong> Das <a href="'+f.filename+'.en">englische Original</a> wurde nach dieser Übersetzung aktualisiert. Die Änderungen wurden in diese Seite übernommen, so dass evtl. einige Abschnitte auf englisch erscheinen, bis die Übersetzung aktualisiert wird.'
s.unlinkedTranslation = '<strong>Achtung!</strong> Das englische Original wurde nach dieser Übersetzung in wesentlichen Punkten aktualisiert. Wir raten Ihnen, die <a href="'+f.filename+'.en">englische Version</a> zu lesen, bis die Übersetzung aktualisiert wird.'
s.new="Neu"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Aktualisiert" // same as New
s.translation_updated="Übersetzung aktualisiert am" // date appears after colon 

s.aboutThisArticle="Über diesen Artikel" // title in the right column near the top of the page
s.status_draft="Dieser Artikel ist ein Entwurf und wurde noch nicht öffentlich diskutiert. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_review="Dieser Artikel wird zur Zeit gerade öffentlich diskutiert. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_published="Dieser Artikel wurde von der Arbeits&shygruppe Inter&shynationali&shysierung des W3C geprüft und öffentlich diskutiert, damit er so korrekt wie möglich ist. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_notreviewed="Dieser Artikel wurde ohne vorherige öffentliche Diskussion veröffentlicht. Wenn Sie Anmerkungen haben, senden Sie uns diese bitte über <a href='#survey'>den Link am Ende der Seite</a>."
s.status_obsolete="Dieser Artikel ist veraltet. Er wird nicht mehr gepflegt und ist womöglich stellenweise falsch. Aktuelle Informationen finden Sie auf der <a href='http://www.w3.org/International/'>Startseite der Internationalisierungstätigkeit</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Kurze Antwort" // heading
s.longeranswer = "Details" // heading
s.additionalinfo = "Weitere Informationen" // heading that sometimes follows 'Details'
s.acknowledgements = "Vielen Dank für die Beiträge und Kommentare zu diesem Artikel an:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "Wenn Sie der Verwendung eines Cookies zustimmen, werden Ihnen die Seiten der W3C-Internationalisierungstätigkeit (sofern verfügbar) in Ihrer gewählten Sprache angezeigt. Möchten Sie den Cookie setzen?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Letzte Aktualisierung "