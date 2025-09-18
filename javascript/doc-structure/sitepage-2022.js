/**
 * W3C Internationalization Site Page Structure Script
 * 
 * This script manages the structure, navigation, and localization features
 * for W3C Internationalization Activity pages. It handles:
 * - Language detection and switching
 * - Cookie-based language preferences
 * - Site navigation and breadcrumbs
 * - Page metadata and timestamps
 * - Search functionality
 */

var g = { }

var base = ''
if (! window.location.href.match('www.w3.org') && ! window.location.href.match('localhost')) {
		 base = 'https://www.w3.org'
		}

// LANGUAGE RELATED STUFF

/**
 * Native language names mapping
 * Maps language tags to their native language names for display
 * Used in language switcher dropdowns and navigation
 */
g.nativeText = {
'ar':'عربي',
'bg':'Български',
'de':'Deutsch',
'da':'Dansk',
'el':'Ελληνικά',
'en':'English',
'es':'Español',
'fr':'Français',
'gl':'Galego',
'he':'עברית',
'hi':'हिन्दी',
'hu':'Magyar',
'it':'Italiano',
'ja':'日本語',
'ko':'한국어',
'nl':'Nederlands',
'pes':'فارسی',
'pl':'Polski',
'pt':'Português',
'pt-br':'Português-BR',
'ro':'Română',
'ru':'Pусский',
'sv':'Svenska',
'th':'ไทย',
'tr':'Türkçe',
'uk':'Українська',
'vi':'Tiếng&#xA0;Anh',
'zh-hans':'简体中文',
'zh-hant':'繁體中文'
}


f.clang = document.querySelector('html').lang
if (f.clang != 'en') { g.isTranslation = true } else { g.isTranslation = false }


// COOKIE
// when clicking on a language selector, ask the user if they want to set cookie to remember that language - cookie is read by /International/.htaccess

var cn = { }

cn.ar = "إذا سمحت للمتصفح بتعيين ملف تعريف الارتباط (Cookies)، فستستمر في مشاهدة صفحات نشاط التدويل W3C (إن وجدت) باللغة التي اخترتها. هل ترغب في إنشاء ملف تعريف الارتباط?"
cn.bg = "Ако разрешите браузъра да запише бисквитка, ще продължите да виждате W3C Internationalization Activity страниците (където са налични) на избрания от вас език. Искате ли да запишете бисквиткат?"
cn.de = "Wenn Sie der Verwendung eines Cookies zustimmen, werden Ihnen die Seiten der W3C-Internationalisierungstätigkeit (sofern verfügbar) in Ihrer gewählten Sprache angezeigt. Möchten Sie den Cookie setzen?"
cn.en = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"
cn.es = "Si permite que el navegador establezca una cookie, continuará viendo las páginas de Actividad de Internacionalización de W3C (si existieran) en el idioma de su elección. ¿Quiere establecer la cookie?"
cn.fr = "Si vous acceptez que votre navigateur crée un cookie, vous continuerez de voir les pages d’activité d’internationalisation de W3C (lorsque cela est possible) dans la langue de votre choix. Souhaitez-vous créer le cookie\u00A0?"
cn.gl = "Se deixas que o navegador configure unha cookie, continuará a ver páxinas da Actividade de Internacionalización da W3C (onde está dispoñible) no idioma que escolliches. Queres configurar a cookie?"
cn.hi = "यदि आप ब्राउज़र के द्वारा कुकी सेट करते हैं, तो आप अपने द्वारा चुनी गई भाषा में W3C अंतर्राष्ट्रीयकरण गतिविधि पृष्ठ (जहाँ उपलब्ध हो) देखना जारी रखेंगे। क्या आप कुकी सेट करना चाहते हैं?"
cn.hu = "Amennyiben hozzájárul egy süti elfogadásához, a W3C Nemzetköziesítés Fejlesztési Tevékenység lapjait az ön által választott nyelven is el tudja érni (amennyiben rendelkezésre állnak). Hozzájárul a süti használatához?"
cn.it = "Se consenti al browser di impostare un cookie, continuerai a visualizzare le pagine W3C Internationalization Activity (ove disponibili) nella lingua selezionata. Vuoi impostare il cookie?"
cn.ja = "ブラウザーのクッキーを許可すると、W3C 国際化アクティビティのページを(もしあるなら)選択した言語で続けて表示します。クッキーを設定しますか？"
cn.nl = "Als je de browser een cookie laat zetten, krijg je in het vervolg de pagina's van W3C's Internationalisatie-activiteit (voorzover beschikbaar) in de gekozen taal. Wil je een cookie zetten?"
cn.pes = "اگر اجازه دهید مرورگر یک کوکی تنظیم کند، همچنان برگه‌های فعالیت بین‌المللی‌سازی W3C (در صورت موجود بودن) را به زبانی که انتخاب کرده‌اید مشاهده خواهید کرد. آیا می‌خواهید کوکی تنظیم شود؟"
cn.pl = "Jeśli pozwolisz przeglądarce ustawić plik cookie będziesz kontynuować przeglądanie (tam gdzie to możliwe) stron Internaconalizacji W3C w języku, który wybierzesz. Czy chcesz ustawić plik cookie?"
cn['pt-br'] = "Se você deixar o navegador definir um cookie, você vai continuar a ver páginas W3C Internacionalização Atividade (quando disponível) no idioma que você escolheu. Você quer definir o cookie?"
cn.ru = "Если вы разрешите браузеру установить cookie, вы будете видеть страницы W3C Internationalization Activity на выбранном вами языке (там, где это доступно). Установить cookie?"
cn.sv = "Om du tillåter webbläsaren att spara en kaka (cookie), så kommer du i fortsättningen att se sidor från W3C Internationalization Activity i det språk du valt (när sådana översättningar finns). Vill du spara kakan?"
cn.uk = "Якщо ви дозволите браузер встановити куки, ви будете продовжувати бачити сторінки W3C Інтернаціоналізація активність (за наявності) на мові, який ви обрали. Ви хочете, щоб встановити печиво?"
cn['zh-hans'] = "您可以让浏览器设置cookie，以继续使用您选择的语言浏览 W3C 国际化标准计划页面（如有该语言的翻译）。您想设置cookie吗？"

function stickyConneg (filename, cLang, targetLang) {
	var response = false
	var msg = '['+cLang+'] '+cn[cLang]
	msg += '\n\n'+'['+targetLang+'] '+cn[targetLang]
	if (targetLang !== 'en' && cLang !== 'en') msg += '\n\n'+'[en] '+cn.en
	response = confirm(msg)
	if (response == true) {
		var d = new Date()
		d.setTime(d.getTime() + 60*24*60*60*1000)
		var expires = ';expires='+d.toUTCString()
		var path = ";path=/"
		document.cookie = 'w3ci18nlang='+targetLang+expires+path
		}
	if (targetLang === 'en') targetLang = '.en.html'
	else targetLang = '.'+targetLang+'.html'
	document.location.assign(filename+targetLang)
	}




// MAIN NAVIGATION

//g.siteSearch = '<div class="noprint"><form method="get" action="/International/site-search.php" enctype="application/x-www-form-urlencoded"><div id="searchSite" class="topRight">'+s.searchI18nSite+'<br/><input name="q" type="text" size="15" id="searchField" accesskey="E" maxlength="255"/></div></form></div>'+
// '<div class="noprint"> <a href="'+base+'/International/log/description"><span class="topRight">&nbsp;RSS Feeds&nbsp;</span><img src="'+f.path+'icons/rssLink.gif" alt="RSS feed"/></a></div></div>'

g.siteSearch = '<div class="noprint"><form method="get" action="/International/site-search.php" enctype="application/x-www-form-urlencoded"><div id="searchSite" class="topRight"><input name="q" type="text" size="15" id="searchField" placeholder="🔍 '+s.searchI18nSite+'" accesskey="E" maxlength="255"/></div></form></div></div>'

g.breadcrumbs = "<a href='"+base+"/International/'>"+s.home+"</a> &gt; <a href='"+base+"/International/resources'>"+s.resources+"</a> &gt; "
if (f.breadcrumb == 'tests') g.breadcrumbs += "<a href='"+base+"/International/tests/'>"+s.tests+"</a>"
else g.breadcrumbs += "<a href='"+base+"/International/articlelist#"+f.breadcrumb+"'>"+s.articles+"</a>"

g.about = "<h2 id='abouthead' class='notoc'>"+s.aboutThisArticle+"</h2>\n"
if (f.status == "draft") { g.about += "<p style='color:red;'>"+s.status_draft+"</p>" }
if (f.status == "review") { g.about += "<p style='color:red;'>"+s.status_review+"</p>" }
if (f.status == "published") { g.about += "<p>"+s.status_published+"</p>" }
if (f.status == "notreviewed") { g.about += "<p>"+s.status_notreviewed+"</p>" }
if (f.status == "obsolete") { g.about += "<p style='color:red;'>"+s.status_obsolete+"</p>" }

var fontlink = ''

/**
 * Version/translation links
 * Creates language switcher links for available translations
 */
var versionList = ''
if (trans.versions && !(trans.versions[0] == f.clang && trans.versions.length == 1) ) {
	versionList = '<p class="noprint"> '
	var translationCount = 0
	// First pass: count how many translations we'll actually show
	for (lang=0; lang<trans.versions.length; lang++) {
		if (f.clang != trans.versions[lang]) {
			translationCount++
		}
	}

	var currentTranslation = 0
	for (lang=0; lang<trans.versions.length; lang++) {
		// Skip current language in the list
		if (f.clang != trans.versions[lang]) {
			versionList += '<bdi title="'+s.currLang[trans.versions[lang]]+'"><a href="#" onclick="stickyConneg(\''+f.filename+'\',\''+f.clang+'\',\''+trans.versions[lang]+'\'); return false;" lang="'+trans.versions[lang]+
			'" translate="no" dir="auto">'+g.nativeText[trans.versions[lang]]+'</a></bdi>'+s.rlm+'&nbsp; '
			currentTranslation++
			// Only add bullet separator if there are more than 1 translation and this isn't the last one
			if (translationCount > 1 && currentTranslation < translationCount) versionList += ' • &nbsp;'
			}
		}
	versionList += '</p>';
	}

/**
 * Translation disclaimer
 * Shows disclaimer and translator credits for translated pages
 */
if (g.isTranslation) g.disclaimer = '<div id="disclaimer"><p>'+s.translationDisclaimer+'</p><p>'+s.translatedBy+f.translators+'</p></div>'
else g.disclaimer = ''


var mainNavigation = '<div id="search">'+g.siteSearch+'</div>'+
`<span class="logo"><a href="https://www.w3.org/"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" overflow="visible" viewBox="0 0 72 48" width="72px" height="48px"><defs></defs><g image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path fill="#FFF" fill-rule="evenodd" d="M0 0h72v48H0z" clip-rule="evenodd"></path><path fill="#005A9C" d="M18.117 8.006l5.759 19.58 5.759-19.58h15.614v1.946L39.37 20.08c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879a3.993 3.993 0 002.76 1.052c1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397L2.032 8.006h4.17l5.759 19.58 3.892-13.185-1.906-6.395h4.17z"></path><path fill="#221B0A" d="M66.92 8.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178a3 3 0 00.887 2.128 2.979 2.979 0 002.145.912c.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136a3 3 0 00-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832a2.671 2.671 0 01-1.892.777c-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891a2.54 2.54 0 011.84-.751c.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65V11.24h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14h.533z" clip-rule="evenodd"></path><g><path fill="#221B0A" d="M61.807 7.825l.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721l2.356-4.696zM62.102 31.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317-.468-.347-1.664-1.369-2.34-2.322-.676-.953-1.733-2.859-1.733-2.859s.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97.433-.277 1.346-1.042 1.924-1.66.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092l-.608-3.171z"></path></g></g></svg></a></span>` +
'<!--div  style="float:left;"><a href="https://www.w3.org/"><img src="https://www.w3.org/Icons/w3c_home" alt="W3C" height="48" width="72" /></a></div-->'+
'<div id="banner"><a href="'+base+'/International"><p id="sitename" style="font-family: Arial, Helvetica, sans-serif; font-size: 22px; border-bottom: 2px solid brown; color: #4c5c9c; margin:0; display: inline-block;">Internationalization (i18n)</p>'+
'	<p id="subtitle">'+s.worldwide+'</p></a></div>'+
//'   <br style="clear:both;" />'+
'	<nav id="boilerplate">'+
'	<div id="sitelinks" class="noprint">'+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/learn" title="'+s.taskBasedIndex+'">'+s.techniques+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/find" title="'+s.informationResources+'">'+s.resources+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/ask" title="'+s.askI18nActivity+'">'+s.ask+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/follow" title="'+s.newsFiltersAndFeeds+'">'+s.news+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/participate" title="'+s.groupsThatMakeUp+'">'+s.groups+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="'+base+'/International/i18n-drafts/nav/about" title="'+s.aboutI18nActivity+'">'+s.about+'</a></bdi>&#xA0;'+s.rlm+
'	&#xA0; </div><div id="line">&#xA0;</div>'+
'	</nav>'+
'	<div class="directory"><div id="site-navigation">'+
                versionList+
'                </div>'+
                g.disclaimer
if (f.toc && f.toc === 'no') { console.log('Doing nothing wrt toc.') } //do nothing
else mainNavigation += '<nav class="noprint" id="level2toc">'+
'            <h2 id="internal-links" class="notoc">'+s.onThisPage+'</h2>'+
'            <div id="toc"> </div>'+
'            </nav>'+
'        <nav id="relatedlinks"></nav>'+
'        </div>'


// ========================================
// TRANSLATION STATUS UPDATES
// ========================================

/**
 * Check if current page is an out-of-date translation
 */
var outOfDateTranslation = false
if (trans.outofdatetranslations.length > 0) {
	for (var lang in trans.outofdatetranslations) {
		if (f.clang == trans.outofdatetranslations[lang]) {
			outOfDateTranslation = true
			break
			}
		}
	}

/**
 * Check if current page is an unlinked translation
 */
var unlinkedTranslation = false
if (trans.unlinkedtranslations.length > 0) {
	for (var lang in trans.unlinkedtranslations) {
		if (f.clang == trans.unlinkedtranslations[lang]) {
			unlinkedTranslation = true
			break
			}
		}
	}

	var updatedTranslation = false
if (trans.updatedtranslations.length > 0) {
	for (var lang in trans.updatedtranslations) {
		if (f.clang == trans.updatedtranslations[lang]) {
			updatedTranslation = true
			break
			}
		}
	}

g.updated = ''
if (! g.isTranslation && f.firstPubDate && f.lastSubstUpdate && f.firstPubDate != f.lastSubstUpdate) {
	g.updated = "<p class='updated'>"+s.updated+" <time datetime='"+f.lastSubstUpdate.date+"T"+f.lastSubstUpdate.time+"Z'>"+f.lastSubstUpdate.date+" "+f.lastSubstUpdate.time+"</time></p>"
	}
if (outOfDateTranslation) g.updated += "<p class='outofdate'>"+s.untranslatedChanges+" </p>"
else if (unlinkedTranslation) g.updated += "<p class='unlinked'>"+s.unlinkedTranslation+" </p>"
else if (g.isTranslation && updatedTranslation) {g.updated ="<p class='updated'>"+s.translation_updated+" <time datetime='"+f.thisVersion.date+"T"+f.thisVersion.time+"Z'>"+f.thisVersion.date+" "+f.thisVersion.time+"</time></p>" }


// SURVEY

/**
 * Build feedback survey section
 * Creates links for GitHub issues and RSS feeds
 */
// Extract current page URL without query parameters for feedback
var body = window.location.href
var qm = body.search(/\?/)
if (qm > 0) body = body.substr(0,qm)
body = encodeURIComponent('[source] ('+body+') ['+f.clang+']')
var title = 'Feedback on '+f.directory+f.filename

// Survey section with GitHub feedback link and RSS subscription
g.survey = 	'<p>'+s.tellUsWhatYouThink+'</p>'+
			'<p><a class="interaction" target="_blank" href="https://github.com/w3c/i18n-drafts/issues/new?title='+title+'&body='+body+'%0A%0A">'+s.sendAComment+'</a></p>'+
			'<p style="margin-top:1em">'+s.followOurNews+'</p>'+
			//'<p><a class="interaction" href="https://twitter.com/webi18n" title="Twitter: @webi18n"><img src="'+f.path+'icons/twitter-bird.png" style="vertical-align: middle;" alt=" " /> &#x200E;@webi18n</a></p>'+
			'<p><a class="interaction" href="https://www.w3.org/blog/International/feed/rdf/" title="RSS"><img src="'+f.path+'icons/rssLink.png" alt=" " /> RSS</a></p>'



// BOTTOM OF PAGE

g.dateStamp = ''
if (g.isTranslation) g.dateStamp = '<small>'+s.translatedFromEnglishVer+'</small>'
else g.dateStamp = "<small id='version'>Content first published <time datetime='"+f.firstPubDate+"'>"+f.firstPubDate+"</time>. Last substantive update <time datetime='"+f.lastSubstUpdate.date+"T"+f.lastSubstUpdate.time+"Z'>"+f.lastSubstUpdate.date+" "+f.lastSubstUpdate.time+" GMT</time>. This version <time datetime='"+f.thisVersion.date+"T"+f.thisVersion.time+"Z'>"+f.thisVersion.date+" "+f.thisVersion.time+" GMT</time></small>";

if (g.isTranslation == 'yes') g.dateStamp = '<p>'+s.translatedFromEnglishVer+'</p>'
else g.dateStamp = "<span id='version' dir='auto'>"+s.lastChanged+dt.thisVersionPlain+"</span>";

var previousCredit = ''
if (f.previousauthors && f.previousauthors != '') previousCredit = ' '+s.previousAuthors+' '+f.previousauthors+s.sentenceDelimiter

var modCredit = ''
if (f.modifiers && f.modifiers != '') modCredit = s.modifiedBy+f.modifiers+s.sentenceDelimiter

var translatorCredit = ''
if (g.isTranslation) translatorCredit = s.translatedBy+f.translators+s.sentenceDelimiter

var credits = "<p>"+s.author+f.authors+s.sentenceDelimiter+' '+previousCredit+modCredit+translatorCredit+"</p>"
if (f.contributors && f.contributors != '') credits += "<p class='acknowledgements'>"+s.acknowledgements+f.contributors+"</p>"



var copyright = '<span class="copyright" dir="ltr">Copyright © '+
	dt.copyrightYear+' <a href="https://www.w3.org/">World Wide Web Consortium</a>.<br> <abbr title="World Wide Web Consortium">W3C</abbr><sup>®</sup> <a href="https://www.w3.org/policies/#disclaimers">liability</a>, <a href="https://www.w3.org/policies/#trademarks">trademark</a> and <a rel="license" href="https://www.w3.org/copyright/document-license/" title="W3C Document License">permissive license</a> rules apply.</span>';


g.bottomOfPage =
'<div id="referencesList"></div>'+
'<hr style="margin-top: 3em; margin-inline: 5rem;">'+
'<div class="section">'+
'<div class="smallprint">'+
	copyright+'<br />'+g.dateStamp+'.'+
'	</div>'+
'</div>'+
'</div> <!--end of content div-->'



// COMPLETE PAGE

function completePageOLD () {
	var sidebarExtras = ''
	if (document.getElementById('sidebarExtras')) {
		sidebarExtras = document.getElementById('sidebarExtras').innerHTML
		document.getElementById('relatedlinks').innerHTML = sidebarExtras
		}
	//fillinTranslations()
	if (document.getElementById("toc")) createtoc(3);
	getURLs()
	}


function completePage (depth) {
	if (typeof depth === 'undefined') depth = 2
	var sidebarExtras = ''
	if (document.getElementById('sidebarExtras')) {
		sidebarExtras = document.getElementById('sidebarExtras').innerHTML
		document.getElementById('relatedlinks').innerHTML = sidebarExtras
		}
	//fillinTranslations()
	if (document.getElementById("toc")) createtoc(depth)
	getURLs()
	}


function fillinTranslations () {
	if (g.isTranslation) {
		if (document.getElementById('intendedAudience')) document.getElementById('intendedAudience').textContent = s.intendedAudience
		if (document.getElementById('question')) document.getElementById('question').firstChild.textContent = s.question
		if (document.getElementById('answer')) document.getElementById('answer').firstChild.textContent = s.answer
		if (document.getElementById('quickanswer')) document.getElementById('quickanswer').firstChild.textContent = s.quickanswer
		if (document.getElementById('bytheway')) document.getElementById('bytheway').firstChild.textContent = s.byTheWay
		if (document.getElementById('endlinks') && document.getElementById('endlinks').firstChild) document.getElementById('endlinks').firstChild.textContent = s.furtherReading
		}
	}


function getURLs () {
	// makes a list of URLs and adds footnote markers and footnotes to the bottom of the page
	// this is revealed only when printing, and applies only to a tags with class print

	var links = document.querySelectorAll('a.print')
	var out = '<h3 class="notoc"><a href="#printLinks">Links in this document:</a></h3><ol>\n'
	for (var l=0;l<links.length;l++) {
		links[l].title = l+1
		out += '<li>'+links[l].href+'</li>\n'
		}
	out += '</ol>'
	var container = document.createElement('section')
	container.id = "printLinks"
	container.innerHTML = out
	document.querySelector('#referencesList').appendChild(container)

	}


// Keyboard shortcuts for search functionality
document.addEventListener('keydown', function(event) {
  // Check if the key pressed is '/'
  if (event.key === '/') {
    // Don't trigger when typing in input fields, textareas, or contenteditable elements
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA' ||
      event.target.isContentEditable
    ) {
      return;
    }

    event.preventDefault();

    // Find the search field and focus it
    const searchField = document.getElementById('searchField');
    if (searchField) {
      searchField.focus();

      // If the search field has a default value, select it so typing will replace it
      if (searchField.value && searchField.value !== '') {
        searchField.select();
      }
    }
  }

  // Check if the key pressed is 'Escape'
  if (event.key === 'Escape') {
    // Only handle Escape if we're in the search field
    if (event.target.id === 'searchField') {
      // Clear the search field
      event.target.value = '';

      // Blur (unfocus) the search field
      event.target.blur();

      event.preventDefault();
    }
  }
});