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
	document.location.assign(getTranslationUrl(filename, targetLang))
	}

function getTranslationUrl (filename, targetLang) {
	if (f.translationPaths && f.translationPaths[targetLang]) return f.translationPaths[targetLang]
	if (targetLang === 'en') return filename+'.en.html'
	return filename+'.'+targetLang+'.html'
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
`<span class="logo"><a href="https://www.w3.org/"><img alt="W3C" src="https://www.w3.org/assets/logos/w3c-2025/svg/margins/w3c-letters-bg-white.svg"></a></span>` +
'<!--div  style="float:left;"><a href="https://www.w3.org/"><img src="https://www.w3.org/Icons/w3c_home" alt="W3C" height="48" width="72" /></a></div-->'+
'<div id="banner"><a href="'+base+'/International"><p id="sitename" style="display: inline-block;">Internationalization (i18n)</p>'+
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
