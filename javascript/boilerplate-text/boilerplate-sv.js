// translate the text between <<<eot and eot  or between quotes
// text following double slashes (such as this line) provides comments for the translator
// never add any text alongside the eot delimiters - not even spaces !
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below


var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'Arabiska',
  'bg':'Bulgariska',
  'da':'Danska',
  'de':'Tyska',
  'el':'Grekiska',
  'en':'Engelska',
  'es':'Spanska',
  'fr':'Franska',
  'he':'Hebreiska',
  'hi':'Hindi',
  'hu':'Ungerska',
  'it':'Italienska',
  'ja':'Japanska',
  'ko':'Koreanska',
  'nl':'Nederländska',
  'pl':'Polska',
  'pt':'Portugisiska',
  'pt-br':'Portugisiska',
  'ro':'Rumänska',
  'ru':'Ryska',
  'sv':'Svenska',
  'th':'Thailändska',
  'tr':'Turkiska',
  'uk':'Ukrainska',
  'vi':'Vietnamesiska',
  'zh-hans':'Förenklad kinesiska',
  'zh-hant':'Traditionell kinesiska',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""



// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N-aktivitetens hemsida"
s.moreResourcesOfThisType = "Fler resurser av denna typ."
s.accessKeyN = 'Använd accesskey \'n\' för att hoppa till de interna navigationslänkarna i dokumentet. <a href="#contentstart">Hoppa till början av innehållet.</a>'
s.examplesInAnotherScript = "Detta dokument innehåller exempel uttryckta i andra språk/skript."
s.worldMap = "Världskarta"
s.searchI18nSite = "Sök på I18n:s webbplats" 
s.translationDisclaimer = 'Detta dokument är en översättning av ett engelskt original, utfört av frivilliga. Om det finns tveksamheter eller fel i detta dokument, så är <a href="'+f.filename+'.en">senaste version av det engelska originalet</a> den auktoritativa versionen. <a href="#copyright">Copyright</a> tillhör W3C, enligt nedan.'
s.translator = "Översättare:"
s.relatedLinks = "Näraliggande länkar"
s.articles = "Artiklar" // used in breadcrumbs, top right of page 
s.topicIndexText = "Index över ämnen"
s.techIndexText = "Index över tekniker"
s.gotoW3cHome = "Gå till W3C:s hemsida"
s.gotoI18nHome = "Gå till W3C:s hemsida om internationalisering"
s.internationalizationTitle = "Internationalization"
s.worldwide = "Making the World Wide Web worldwide!"
s.i18nActivityHomePage = "Internationaliseringsaktivitetens hemsida."
s.home = "Hemsidan"
s.contactI18nActivity = "Om internationaliseringsaktiviteten."
s.contact = "Om"
s.aboutI18nActivity = "Om internationaliseringsaktiviteten."
s.about = "Om"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "Arbetsgrupper inom internationaliseringsaktiviteten."
s.groups = "Grupper"
s.topicIndexForInformation = "Ämnesorienterat index över information på denna webbplats."
s.topics = "Ämnen"
s.taskBasedIndex = "Uppgiftsorienterat index över i18n-tekniker."
s.techniques = "Tekniker"
s.informationResources = "Informationsresurser på internationaliseringens webbplats."
s.resources = "Resurser"
s.newsFiltersAndFeeds = "Information om nyhetsfilter och RSS-kanaler för W3C:s internationaliseringsarbete."
s.news = "Nyheter"
s.onThisPage = "På denna sida"
s.questionAlt = "Fråga"
s.questionLink = "Fråga"
s.question = "Fråga"
s.backgroundAlt = "Bakgrundsinformation"
s.backgroundLink = "Bakgrundsinformation"
s.background = "Bakgrundsinformation"
s.answer = "Svar" // heading
s.answerAlt = "Svar"
s.answerLink = "Svar"
s.byTheWayAlt = "Mer nyttig information"
s.byTheWayLink = "Nyttig information"
s.byTheWay = "Nyttig information"
s.furtherReadingAlt = "Mer att läsa"
s.furtherReadingLink = "Mer att läsa"
s.furtherReading = "Mer att läsa"
s.intendedAudience = "Avsedd läsarkrets:"
s.skipToAnswer = "[Hoppa till svaret]"
s.tellUsWhatYouThink = "Tala om för oss vad du tycker."
s.sendAComment = "Sänd oss en kommentar"
s.subscribeToRSS = "Prenumerera på en RSS-kanal."
s.newResourcesAlt = "Informerar dig när en ny resurs publiceras för första gången."
s.newResources = "Nya resurser"
s.homePageNewsAlt = "Alla nyhetsnotiser som visas på hemsidan."
s.homePageNews = "Nyheter på hemsidan"
s.followOurNews = "Följ våra nyhetsflöden."
s.sentenceDelimiter = "."

s.author = "Av:" // followed by name of author(s)
s.previousAuthors = "Tidigare av:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Ändrad av:" // person's name appears after colon
s.translatedBy = "Översättare:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "Kodad i UTF-8!"

s.translatedFromEnglishVer = "Översatt från engelskt innehåll skapat/ändrat "+dt.enVersion+". Översättningen senast ändrad "+dt.thisVersionPlain+" GMT"

s.historyOfDocumentChanges = 'Om du vill se en logg över hur dokumentet ändrats, titta på <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">nyhetstråden</a> där viktiga ändringar noterats, och <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">listan över inlägg i Github</a> för alla ändringar gjords sedan januari 2016.'
s.untranslatedChanges = '<strong>Obs:</strong> Det  <a href="/International/'+f.directory+f.filename+'.en">engelska originaldokumentet</a> har ändrats sedan det översattes. De ändringarna har lagts in i denna sida, så du kan råka se vissa delar formulerade i engelska, till dess att översättningen uppdaterats.'
s.unlinkedTranslation = '<strong>Varning:</strong> Viktiga ändringar har gjorts i det engelska originalet efter att denna översättning gjordes. Vi rekommenderar att du läser <a href="'+f.filename+'">en version i ett annat språk</a> i väntan på att denna översättning blir uppdaterad.'
s.new="Ny"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Uppdaterad" // same as New
s.translation_updated="Översättning uppdaterad:" // date appears after colon

s.aboutThisArticle="Om denna artikel" // title in the right column near the top of the page
s.status_draft="Denna artikel är ett utkast som ännu inte genomgått en öppen granskning. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_review="Denna artikel är nu publicerad för öppen granskning. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_published="Denna artikel har granskats av W3C:s arbetsgrupp för internationalisering, och har genomgått öppen granskning, för att säkerställa att den är så korrekt som möjligt. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_notreviewed="Denna artikel publicerades utan att ha blivit granskad. Om det finns saker som behöver åtgärdas, meddela i så fall oss, genom att använda <a href='#survey'>länken längst ner på denna sida</a>."
s.status_obsolete="Detta dokument är föråldrat. Det vidmakthålles inte längre och innehåller troligen felaktiheter. Mer aktuell information kan du finna på <a href='http://www.w3.org/International/'>Internationaliseringsarbetets hemsida</a>."
s.tests="" // used at the end of breadcrumbs for test related pages
s.quickanswer = "Snabbt svar" // heading
s.longeranswer = "Detaljer" // heading
s.additionalinfo = "Ytterligare information" // heading that sometimes follows 'Details'
s.acknowledgements = "Även tack till följande personer som bidragit eller gett kommentarer:"  // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg = "Om du tillåter webbläsaren att spara en kaka (cookie), så kommer du i fortsättningen att se sidor från W3C Internationalization Activity i det språk du valt (när sådana översättningar finns). Vill du spara kakan?" // this text is to be copied to another location
//s.supercededTranslation = '<strong>Varning:</strong> Detta är en föråldrad version av dokumentet! Du bör läsa <a href="'+g.betterfilename+'.en">den senaste versionen</a> istället, och, om du kan, uppdatera det bokmärke eller länk som kan ha lett dig hit.'
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "Last changed "