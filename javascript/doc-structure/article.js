var g = { }



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
'zh-hans':'简体汉语',
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
	document.location.assign(filename+'.'+targetLang)
	}




// MAIN NAVIGATION

g.siteSearch = '<form method="get" action="https://www.w3.org/International/site-search.php" enctype="application/x-www-form-urlencoded" style="margin: 0;"><div id="searchSite"><input name="q" type="text" value="'+s.searchI18nSite+'" onfocus="this.value=\'\'" id="searchField" accesskey="E" maxlength="255"/></div></form>'

g.breadcrumbs = "<a href='https://www.w3.org/International/'>"+s.home+"</a> &gt; <a href='https://www.w3.org/International/resources'>"+s.resources+"</a> &gt; "
if (f.breadcrumb == 'tests') g.breadcrumbs += "<a href='https://www.w3.org/International/tests/'>"+s.tests+"</a>" 
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
			versionList += '<span title="'+s.currLang[trans.versions[lang]]+'"><a href="#" onclick="stickyConneg(\''+f.filename+'\',\''+f.clang+'\',\''+trans.versions[lang]+'\'); return false;" lang="'+trans.versions[lang]+
			'" translate="no" dir="auto">'+g.nativeText[trans.versions[lang]]+'</a></span>'+s.rlm+'&nbsp; ';
			}
		}
	versionList += '</p>';
	}

if (g.isTranslation) g.disclaimer = '<div id="disclaimer"><p>'+s.translationDisclaimer+'</p><p>'+s.translator+' '+f.translators+'</p></div>' 
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



//'	<div id="siteicons"><a href="http://www.w3.org/" title="'+s.gotoW3cHome+'"><img src="'+f.path+'icons/w3c_home.gif" alt="'+s.gotoW3cHome+'"/></a><a href="https://www.w3.org/International/" title="'+s.gotoI18nHome+'" id="i18n-name">'+
//s.internationalizationTitle+'</a></div>'+


'	<div id="sitelinks" class="noprint">'+
//'	<bdi><a href="https://www.w3.org/International/" title="'+s.i18nActivityHomePage+'">'+s.home+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="https://www.w3.org/International/technique-index" title="'+s.taskBasedIndex+'">'+s.techniques+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="https://www.w3.org/International/resources" title="'+s.informationResources+'">'+s.resources+'</a></bdi>&#xA0;'+s.rlm+
'	<bdi><a href="https://www.w3.org/International/about" title="'+s.aboutI18nActivity+'">'+s.about+'</a></bdi>&#xA0;'+s.rlm+ 
'	<bdi><a href="https://www.w3.org/International/participate" title="'+s.groupsThatMakeUp+'">'+s.groups+'</a></bdi>&#xA0;'+s.rlm+ 
//'	<bdi><a href="https://www.w3.org/International/resource-index" title="'+s.topicIndexForInformation+'">'+s.topics+'</a></bdi>&#xA0;'+s.rlm+ 
'	<bdi><a href="https://www.w3.org/International/log/description" title="'+s.newsFiltersAndFeeds+'">'+s.news+'</a></bdi>&#xA0;'+s.rlm+
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
			'<p><a class="interaction" href="http://twitter.com/webi18n" title="Twitter: @webi18n"><img src="'+f.path+'icons/twitter-bird.png" style="vertical-align: middle;" alt=" " /> &#x200E;@webi18n</a></p>'+
			'<p><a class="interaction" href="http://www.w3.org/blog/International/feed/rdf/" title="RSS"><img src="'+f.path+'icons/rssLink.png" alt=" " /> RSS</a></p>'
			


// BOTTOM OF PAGE

g.dateStamp = ''
if (g.isTranslation) g.dateStamp = '<small>'+s.translatedFromEnglishVer+'</small>'
else g.dateStamp = "<small id='version'>Content first published <time datetime='"+f.firstPubDate+"'>"+f.firstPubDate+"</time>. Last substantive update <time datetime='"+f.lastSubstUpdate.date+"T"+f.lastSubstUpdate.time+"Z'>"+f.lastSubstUpdate.date+" "+f.lastSubstUpdate.time+" GMT</time>. This version <time datetime='"+f.thisVersion.date+"T"+f.thisVersion.time+"Z'>"+f.thisVersion.date+" "+f.thisVersion.time+" GMT</time></small>";

var previousCredit = ''
if (f.previousauthors && f.previousauthors != '') previousCredit = ' '+s.previousAuthors+' '+f.previousauthors+s.sentenceDelimiter

var modCredit = ''
if (f.modifiers && f.modifiers != '') modCredit = s.modifiedBy+' '+f.modifiers+s.sentenceDelimiter

var translatorCredit = ''
if (g.isTranslation) translatorCredit = s.translatedBy+' '+f.translators+s.sentenceDelimiter

var credits = "<p>"+s.author+' '+f.authors+s.sentenceDelimiter+' '+previousCredit+modCredit+translatorCredit+"</p>"
if (f.contributors && f.contributors != '') credits += "<p class='acknowledgements'>"+s.acknowledgements+" "+f.contributors+"</p>"
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
	fillinTranslations()
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