var g = { }

var base = '/i18n-drafts/' 

if (window.location.href.match('www.w3.org')) {
    base = 'https://www.w3.org/International/i18n-drafts/'
    }


// LANGUAGE RELATED STUFF

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


//f.clang = document.querySelector('html').lang
if (f.clang != 'en') { g.isTranslation = true } else { g.isTranslation = false }


// COOKIE
// when clicking on a language selector, ask the user if they want to set cookie to remember that language - cookie is read by /International/.htaccess


function showExample (path) {
	var exampleWindow = window.open(path, 'exampleWindow'); 
	exampleWindow.focus();
	}


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
	document.location.assign(filename+'.'+targetLang+'.html')
	}




// MAIN NAVIGATION

g.siteSearch = '<form method="get" action="https://www.w3.org/International/site-search.php" enctype="application/x-www-form-urlencoded" style="margin: 0;"><div id="searchSite"><input name="q" type="text" value="'+s.searchI18nSite+'" onfocus="this.value=\'\'" id="searchField" accesskey="E" maxlength="255"/></div></form>'

g.breadcrumbs = "<a href='https://www.w3.org/International/'>"+s.home+"</a> &gt; <a href='https://www.w3.org/International/resources'>"+s.resources+"</a> &gt; "
if (f.breadcrumb == 'tests') g.breadcrumbs += "<a href='https://www.w3.org/International/i18n-tests/'>"+s.tests+"</a>" 
else g.breadcrumbs += "<a href='https://www.w3.org/International/articlelist#"+f.breadcrumb+"'>"+s.articles+"</a>"

if (f.status !== 'published' && f.status !== 'notreviewed') g.about = "<h2 id='abouthead' class='notoc'>"+s.aboutThisArticle+"</h2>\n"
else g.about = ''
if (f.status == "draft") { g.about += "<p style='color:red;'>"+s.status_draft+"</p>" }
if (f.status == "review") { g.about += "<p style='color:red;'>"+s.status_review+"</p>" }
//if (f.status == "published") { g.about += "<p>"+s.status_published+"</p>" }
//if (f.status == "notreviewed") { g.about += "<p>"+s.status_notreviewed+"</p>" }
if (f.status == "obsolete") { g.about += "<p style='color:red;'>"+s.status_obsolete+"</p>" }

var fontlink = ''


var versionList = ''
if (trans.versions && !(trans.versions[0] == f.clang && trans.versions.length == 1) ) {
	versionList = '<p class="noprint">'
	for (lang=0; lang<trans.versions.length; lang++) {
		if (f.clang != trans.versions[lang]) {
			versionList += '<bdi title="'+s.currLang[trans.versions[lang]]+'"><a href="#" onclick="stickyConneg(\''+f.filename+'\',\''+f.clang+'\',\''+trans.versions[lang]+'\'); return false;" lang="'+trans.versions[lang]+
			'" translate="no" dir="auto">'+g.nativeText[trans.versions[lang]]+'</a></bdi>'+s.rlm+'&#x202F;';
			if (lang < trans.versions.length-1) versionList += '• &#x202F;'
			}
		}
	versionList += '</p>';
	}

if (g.isTranslation) g.disclaimer = '<div id="disclaimer"><p>'+s.translationDisclaimer+'</p><p>'+s.translatedBy+f.translators+'</p></div>' 
else g.disclaimer = ''


var mainNavigation = '<aside id="mainNavigationAside">'+
'	<nav id="site-navigation">'+
'		<a href="https://www.w3.org/International/"><img id="picture" alt="'+s.worldMap+'" title="'+s.worldMap+'" src="'+f.path+'icons/world.gif" width="150" height="61"/></a>'+
		versionList+
'		</nav>'+
	g.disclaimer+
'	<nav class="noprint" id="search">'+g.siteSearch+'</nav>'+
'	<nav id="breadcrumbs"><p>'+g.breadcrumbs+'</p></nav>'+
'	<nav class="noprint" id="toc"><h2 id="internal-links" class="notoc">'+s.onThisPage+'</h2><div id="toclocation"> </div></nav>'+
'	<nav class="noprint" id="relatedlinks"></nav>'+
'	<div id="aboutdoc">'+g.about+'</div>'+
'	</aside>'+

'	<nav id="siteicons">'+
'   <a href="https://www.w3.org/" title="'+s.gotoW3cHome+'"><img src="https://www.w3.org/Icons/w3c_home" alt="'+s.gotoW3cHome+'" width="72" height="48"></a>'+
'   <div id="banner" style="margin-inline-start:10px;"><a href="/International" title="'+s.gotoI18nHome+'">'+
'   <p id="sitename">'+s.internationalizationTitle+'</p>'+
'   <p id="subtitle">'+s.worldwide+'</p></a></div>'+
'   </div>'+
'   </nav>'+





'	<div id="sitelinks" class="noprint">'+
'<bdi><a href="'+base+'nav/learn" title="'+s.taskBasedIndex+'">'+s.techniques+'</a></bdi>'+s.rlm+
'<bdi><a href="'+base+'nav/find" title="'+s.informationResources+'">'+s.resources+'</a></bdi>'+s.rlm+
'<bdi><a href="'+base+'nav/ask" title="'+s.askI18nActivity+'">'+s.ask+'</a></bdi>'+s.rlm+ 
'<bdi><a href="'+base+'nav/follow" title="'+s.newsFiltersAndFeeds+'">'+s.news+'</a></bdi>'+s.rlm+
'<bdi><a href="'+base+'nav/participate" title="'+s.groupsThatMakeUp+'">'+s.groups+'</a></bdi>'+s.rlm+ 
'<bdi><a href="'+base+'nav/about" title="'+s.aboutI18nActivity+'">'+s.about+'</a></bdi>'+s.rlm+ 

'	&#xA0; </div>'+
//' <div id="line">&#xA0;</div>'+
'	</nav>'



// UPDATES

var outOfDateTranslation = false
if (trans.outofdatetranslations.length > 0) { 
	for (var lang in trans.outofdatetranslations) {
		if (f.clang == trans.outofdatetranslations[lang]) {
			outOfDateTranslation = true
			break
			}
		}
	}
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

// put a redirect or warning banner on articles on github
if (f.status === 'draft') {
	g.updated += '<p class="note" style="clear:none; font-size: 150%; margin-top: 2em; line-height:1.5;"><strong>NOTE!</strong> &nbsp; This article is in development and is using a temporary URL. It is not safe to refer to it or use the information it contains.</p>'
	}
if (f.status === 'review') {
	g.updated += '<p class="note" style="clear:none; font-size: 150%; margin-top: 2em; line-height:1.5;"><strong>NOTE!</strong> &nbsp; This article is currently out for public review. If you have comments, please send them using the <a href="#survey">Leave a Comment</a> link near the bottom of this page. The published version of the article will be at a different URL, and should be linked to there.</p>'
	}
if (f.status === 'published' && window.location.href.match('w3c.github.io')) {
	g.updated += '<p class="note" style="clear:none; font-size: 150%; margin-top: 2em; line-height:1.5;">'+s.githubRedirect+'</p>'
	}

// SURVEY

var body = window.location.href
var qm = body.search(/\?/)
if (qm > 0) body = body.substr(0,qm)
body = encodeURIComponent('[source] ('+body+') ['+f.clang+']')
var title = '['+f.directory+f.filename+'] %20BRIEF_TITLE_GOES_HERE'

g.survey = 	'<p>'+s.tellUsWhatYouThink+'</p>'+
			'<p><a class="interaction" target="_blank" href="https://github.com/w3c/i18n-drafts/issues/new?title='+title+'&body='+body+'%0A%0A">'+s.sendAComment+'</a></p>'+
			'<p style="margin-top:1em">'+s.followOurNews+'</p>'+
			`<p style="font-size:80%;"><a class="interaction" href="https://w3c.social/@webi18n" title="Mastodon: @webi18n@w3c.social"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(29,141,238)" class="bi bi-mastodon" viewBox="0 0 16 16">
<path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path>
</svg> &#x200E;@webi18n@w3c.social</a></p>`+
`<p style="font-size:80%;"><a class="interaction" href="https://bsky.app/profile/webi18n.bsky.social" title="Bluesky: @webi18n.bsky.social"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="18px" viewBox="0 0 20 18" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(6.666667%,52.156866%,99.607843%);fill-opacity:1;" d="M 4.523438 1.496094 C 6.742188 3.191406 9.125 6.628906 10 8.472656 C 10.875 6.628906 13.257812 3.191406 15.476562 1.496094 C 17.074219 0.273438 19.667969 -0.675781 19.667969 2.335938 C 19.667969 2.9375 19.328125 7.390625 19.128906 8.113281 C 18.441406 10.625 15.925781 11.265625 13.6875 10.878906 C 17.597656 11.558594 18.59375 13.804688 16.445312 16.046875 C 12.363281 20.3125 10.582031 14.980469 10.125 13.613281 C 10.039062 13.359375 10 13.242188 10 13.34375 C 10 13.242188 9.960938 13.359375 9.875 13.613281 C 9.417969 14.980469 7.636719 20.3125 3.554688 16.046875 C 1.40625 13.804688 2.402344 11.558594 6.3125 10.878906 C 4.074219 11.265625 1.558594 10.625 0.871094 8.113281 C 0.671875 7.390625 0.332031 2.9375 0.332031 2.335938 C 0.332031 -0.675781 2.925781 0.273438 4.523438 1.496094 Z M 4.523438 1.496094 "/>
</g>
</svg> &#x200E;@webi18n.bsky.social</a></p>`+
			`<p style="font-size:80%;"><a class="interaction" href="https://twitter.com/webi18n" title="X: @webi18n"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/></svg> &#x200E;@webi18n</a></p>`+
			'<p><a class="interaction" href="http://www.w3.org/blog/International/feed/rdf/" title="RSS"><img src="'+f.path+'icons/rssLink.png" alt=" " /> RSS</a></p>'
			


// BOTTOM OF PAGE

g.dateStamp = ''
if (g.isTranslation) g.dateStamp = '<small>'+s.translatedFromEnglishVer+'</small>'
else g.dateStamp = "<small id='version'>Content first published <time datetime='"+f.firstPubDate+"'>"+f.firstPubDate+"</time>. Last substantive update <time datetime='"+f.lastSubstUpdate.date+"T"+f.lastSubstUpdate.time+"Z'>"+f.lastSubstUpdate.date+" "+f.lastSubstUpdate.time+" GMT</time>. This version <time datetime='"+f.thisVersion.date+"T"+f.thisVersion.time+"Z'>"+f.thisVersion.date+" "+f.thisVersion.time+" GMT</time></small>";

var previousCredit = ''
if (f.previousauthors && f.previousauthors != '') previousCredit = ' '+s.previousAuthors+' '+f.previousauthors+s.sentenceDelimiter

var modCredit = ''
if (f.modifiers && f.modifiers != '') modCredit = s.modifiedBy+f.modifiers+s.sentenceDelimiter

var translatorCredit = ''
if (g.isTranslation) translatorCredit = s.translatedBy+f.translators+s.sentenceDelimiter

var credits = "<p>"+s.author+f.authors+s.sentenceDelimiter+' '+previousCredit+modCredit+translatorCredit+"</p>"
// Remove the space for Chinese
if (document.documentElement.lang === "zh-hans" || document.documentElement.lang === "zh-hant") credits = "<p>"+s.author+f.authors+s.sentenceDelimiter+' '+previousCredit+modCredit+translatorCredit+"</p>"

if (f.contributors && f.contributors != '') credits += "<p class='acknowledgements'>"+s.acknowledgements+f.contributors+"</p>"
if (f.sources && f.sources != '') credits += "<p class='acknowledgements'>"+f.sources+"</p>"



var copyright = "<small class='copyright' lang='en' "+s.ltrAttribute+"><a rel='Copyright' href='/Consortium/Legal/ipr-notice#Copyright' id='copyright'>Copyright</a> "+
	"© "+dt.copyrightYear+" <a href='/'><abbr title='World Wide Web Consortium'>W3C</abbr></a><sup>®</sup> (<a href='http://www.csail.mit.edu/'><abbr "+
	"title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for "+
	"Informatics and Mathematics'>ERCIM</abbr></a>, <a href='http://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), All Rights Reserved. "+
	"W3C <a href='/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, "+
	"<a rel='Copyright' href='/Consortium/Legal/copyright-documents'>document use</a>"+
	" and <a rel='Copyright' href='/Consortium/Legal/copyright-software'>software licensing</a> rules apply. "+
	"Your interactions with this site are in accordance with our <a href='/Consortium/Legal/privacy-statement#Public'>public</a> and "+
	"<a href='/Consortium/Legal/privacy-statement#Members'>Member</a> privacy statements.</small>";


g.bottomOfPage = '<footer><address>'+credits+'</address>'+
	g.dateStamp+
'	<small>'+s.historyOfDocumentChanges+'</small>'+
	copyright+
'	</footer>'



// COMPLETE PAGE

function completePage () {
	var sidebarExtras = ''
	if (document.getElementById('sidebarExtras')) sidebarExtras = document.getElementById('sidebarExtras').innerHTML
	document.getElementById('relatedlinks').innerHTML = sidebarExtras
	//fillinTranslations()
	if (document.getElementById("toclocation")) createtoc(true);
	getURLs()
	}


function fillinTranslations () {
	if (g.isTranslation) {
		if (document.getElementById('intendedAudience')) document.getElementById('intendedAudience').textContent = s.intendedAudience
		if (document.getElementById('question')) document.getElementById('question').firstChild.textContent = s.question
		if (document.getElementById('answer')) document.getElementById('answer').firstChild.textContent = s.answer
		if (document.getElementById('quickanswer')) document.getElementById('quickanswer').firstChild.textContent = s.quickanswer
		if (document.getElementById('details')) document.getElementById('details').firstChild.textContent = s.details
		if (document.getElementById('additionalinfo')) document.getElementById('additionalinfo').firstChild.textContent = s.additionalinfo
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
	if (document.querySelector('#endlinks')) document.querySelector('#endlinks').parentNode.appendChild(container)
	
	}