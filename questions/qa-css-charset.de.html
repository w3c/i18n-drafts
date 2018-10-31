<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8" />
<title>Angabe der Zeichencodierung in CSS</title>
<meta name="description" content="Wie gibt man die Zeichencodierung in einem CSS-Stylesheet an?" />
<script type="text/javascript">
var f = { }

// AUTHORS should fill in these assignments:
f.directory = 'questions'+'/' // the path to this file, not including /International or the file name
f.filename = 'qa-css-charset' // the file name WITHOUT extensions
f.authors = 'Richard Ishida, W3C' // author(s) and affiliations
f.previousauthors = 'Russ Rolfe, Microsoft Corporation' // as above
f.modifiers = '' // people making substantive changes, and their affiliation
f.searchString = 'qa-css-charset' // blog search string - usually the filename without extensions
f.firstPubDate = '2003-09-24' // date of the first publication of the document (after review)
f.lastSubstUpdate = { date:'2014-03-31', time:'19:54'}  // date and time of latest substantive changes to this document
f.status = 'published'  // should be one of draft, review, published, notreviewed or obsolete
f.path = '../' // what you need to prepend to a URL to get to the /International directory 

// AUTHORS AND TRANSLATORS should fill in these assignments:
f.thisVersion = { date:'2016-04-20', time:'09:54'} // date and time of latest edits to this document/translation
f.contributors = 'Zack Weinberg, Simon Sapin, Gunnar Bittersmann' // people providing useful contributions or feedback during review or at other times
// also make sure that the lang attribute on the html tag is correct!
f.sources = '' // describes sources of information

// TRANSLATORS should fill in these assignments:
f.translators = '<a href="http://bittersmann.de/">Gunnar Bittersmann</a>' // translator(s) and their affiliation - a elements allowed, but use double quotes for attributes

f.breadcrumb = 'characters'

f.additionalLinks = ''
</script>
<script type="text/javascript" src="qa-css-charset-data/translations.js"> </script>
<script type="text/javascript" src="../javascript/doc-structure/article-dt.js"> </script>
<script type="text/javascript" src="../javascript/boilerplate-text/boilerplate-de.js"></script><!--TRANSLATORS must change -en to the subtag for their language!-->
<script type="text/javascript" src="../javascript/doc-structure/article.js"> </script>
<script type="text/javascript" src="../javascript/articletoc-html5.js"></script>
<link rel="stylesheet" href="../style/article-2016.css" type="text/css" />
<link rel="copyright" href="#copyright"/>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
<header>
  <nav id="mainNavigation"></nav><script>document.getElementById('mainNavigation').innerHTML = mainNavigation</script>
  
  <h1>Angabe der Zeichencodierung in CSS</h1>
</header>


<section>
  <div id="audience">
    <p><span id="intendedAudience" class="leadin">Intended audience:</span> 
    CSS-Entwickler, Webprojekt-Manager und alle, die erfahren möchten, wie man die Zeichencodierung einer CSS-Datei angibt</p>
    <div id="updateInfo"></div><script>document.getElementById('updateInfo').innerHTML = g.updated</script>
    </div>

  <h2 id="question"><a href="#question">Question</a></h2>
    <p class="question">Wie gibt man die Zeichencodierung in einem <abbr title="Cascading Style Sheets">CSS</abbr>-Stylesheet an?</p>

  <p>Wenn Sie Text in Ihrem Stylesheet haben, der Nicht-ASCII-Zeichen enthält (z.B. in Namen von Schriftarten, in Werten für die <code class="kw" translate="no">content</code>-Eigenschaft, in Selektoren usw.), dann müssen Sie sicherstellen, dass der CSS-Parser weiß, wie er die Bytes in Zeichen umsetzen muss, damit er Ihren CSS-Code versteht. Dieser Artikel beschreibt, wie Sie das umsetzen.</p>
</section>


<section id="nutshell">
    <h2 id="quickanswer"><a href="#quickanswer">Quick answer</a></h2>
  <p>Sie sollten immer UTF-8 als Zeichencodierung für Ihre Stylesheets und HTML-Seiten verwenden und diese Zeichencodierung in HTML angeben. Wenn Sie das tun, ist es nicht notwendig, die Zeichencodierung des Stylesheets anzugeben.</p>
  <p>Andere Ansätze sind nur dann notwendig, wenn Ihr Stylesheet Nicht-ASCII-Zeichen enthält und Sie aus irgendwelchen Gründen nicht darauf bauen können, dass das HTML und das zugehörige Stylesheet in derselben Zeichencodierung codiert sind. In diesem Fall sollten Sie <code class="kw" translate="no">@charset</code> oder HTTP-Header verwenden, um die Zeichencodierung anzugeben. (Wenn Ihre HTML- und CSS-Dateien in derselben Zeichencodierung codiert sind, wenden die aktuellen Versionen der gängigen Browser die Codierung der HTML-Datei auch auf das Stylesheet an.)</p>
</section>


<section>
  <h2 id="longeranswer"><a href="#longeranswer">Details</a></h2>
  <section>
    <h3 id="atcharset"><a href="#atcharset">Verwendung von <code class="kw" translate="no">@charset</code></a></h3>
    <p>Wie bereits gesagt, sollten Sie das nur verwenden, wenn das Stylesheet und die aufrufende HTML-Datei in unterschiedlichen Zeichencodierungen codiert sind.</p>
    <p>Es ist wichtig zu verstehen, dass die Angabe <code class="kw" translate="no">@charset</code> zwar wie eine CSS-At-Regel aussieht, aber zur Erkennung der Zeichencodierung nicht als solche geparst wird. Nur eine <em>bestimmte Bytesequenz</em>, beginnend mit dem allerersten Byte des Stylesheets, ist wirksam. Variationen, auch solche, die eine gültige At-Regel darstellen würden, werden stillschweigend ignoriert.</p>
    <p>Um die Zeichencodierung innerhalb des Stylesheets anzugeben, verwenden Sie folgende Folge von Bytes (abgesehen von <var class="kw" translate="no">charset-name</var>; ein Byte je Zeichen) ganz am Anfang der Datei:</p>
    <figure class="example"> <code>@charset "<var>charset-name</var>";</code> </figure>
    <p><var class="kw" translate="no">charset-name</var> ist nicht case-sensitiv und sollte für neue Stylesheets immer <code class="kw" translate="no">utf-8</code> sein. Wenn Sie wirklich nicht UTF-8 für Ihr Stylesheet verwenden können, lesen Sie den Abschnitt <a href="#nonutf8">Andere Zeichencodierungen als UTF-8</a> weiter unten.</p>
    <p>Die Bytefolge <code class="kw" translate="no">@charset</code> darf nur einmal in einem externen Stylesheet vorkommen und muss ganz am Anfang stehen. Es dürfen keine Zeichen davor stehen, auch keine Kommentare.</p>
    <div class="note"><b>Beachten Sie,</b> dass es nicht genügt, einfach <code>@charset "utf-8";</code> am Anfang des Stylesheets anzugeben – Sie müssen Ihr Stylesheet auch UTF-8-codiert <strong>speichern</strong>. (Siehe <a href="/International/questions/qa-choosing-encodings#applyingencoding">Die Zeichencodierung auf den Inhalt anwenden</a>.)</div>
    <p><strong>Beachten Sie:</strong> Da der HTTP-Header höhere Priorität als eine <code class="kw">@charset</code>-Angabe innerhalb des Dokuments hat, sollten Sie immer beachten, ob die Zeichencodierung bereits im HTTP-Header angegeben ist. Wenn das der Fall ist, muss <code class="kw">@charset</code> auf dieselbe Zeichen&shy;codierungs&shy;angabe gesetzt werden. Sie hat nur dann einen Effekt, wenn das Stylesheet in einem Kontext gelesen wird, wo es keinen HTTP-Header gibt (z.B. von der lokalen Festplatte).</p>
    <p>Im Verzeichnis der Techniken finden Sie <a href="/International/techniques/authoring-html#checkenc">eine Reihe von Links</a>, die Ihnen helfen zu erkennen, ob eine Zeichen&shy;codierungs&shy;angabe im HTTP-Header gesendet wird.</p>
  </section>
  <section>
    <h3 id="bom"><a href="#bom">Was ist mit dem BOM?</a></h3>
    <p><a href=" http://www.w3.org/TR/css-syntax-3/#input-byte-stream">Laut CSS3-Syntax-Spezifikation</a> sollte ein Browser, wenn ein UTF-8-<a class="termref" href="/International/questions/qa-byte-order-mark#bomwhat">BOM</a> (<span lang="en" xml:lang="en">byte-order mark</span>) am Anfang der Datei steht, das Stylesheet als UTF-8-codiert behandeln – ungeachtet anderer Angaben zur Zeichencodierung. Zum Zeitpunkt des Erscheinens des Artikels ist das jedoch nicht einheitlich umgesetzt; Internet Explorer 10 und 11 geben HTTP-Headern und <code class="kw" translate="no">@charset</code>-Angaben immer noch höhere Priorität.</p>
    <p>Gegenwärtig sollten Sie deshalb <code class="kw" translate="no">@charset</code> oder HTTP-Header verwenden. Das erste hat den zusätzlichen Vorteil, dass es denen, die sich den Quellcode ansehen, hilft sich zu vergewissern, in welcher Zeichencodierung das Stylesheet codiert ist. Das BOM ist unsichtbar.</p>
    <p>Lesen Sie mehr <a href="/International/questions/qa-byte-order-mark">über das BOM</a>.</p>
  </section>
  <section>
    <h3 id="http"><a href="#http">Using HTTP</a></h3>
    <div class="sidenoteGroup">
      <p>Der Server kann im <code class="kw" translate="no">Content-Type</code>-Feld des HTTP-Headers bereits eine Angabe zur Zeichencodierung mitsenden, wenn Ihr Browser ein Stylesheet lädt. Diese Zeile in der HTTP-Antwort würde bspw. angeben, dass die Datei in UTF-8 codiert ist:</p>
      <aside class="sideinfonote">
        <p class="info">Im Verzeichnis der Techniken finden Sie <a href="/International/techniques/authoring-html#checkenc">eine Reihe von Links</a>, die Ihnen helfen zu erkennen, ob eine Zeichen&shy;codierungs&shy;angabe im HTTP-Header gesendet wird. Für weitere Informationen, wie die Zeichencodierung in HTTP eingestellt wird, siehe <a href="/International/O-HTTP-charset"><cite>Einstellung des HTTP-charset-Parameters</cite></a>.</p>
      </aside>
    </div>
    <div class="example"> <code>Content-Type: text/css; charset=utf-8 </code></div>
    <p>Voreinstellungen für den gesamten Server oder spezifische Einstelleungen können dazu führen, dass der Server ein Stylesheet mit Zeichen&shy;codierungs&shy;angabe ausliefert, Sie aber keine möchten. Oder der Server liefert es ohne solche Angabe aus, Sie möchten aber eine. Sie können das Verhalten für den gesamten Server oder für eine einzelne Datei oder eine begrenzte Anzahl von Dateien ändern, indem Sie die Servereinstellungen ändern (global bzw. lokal) oder mit Scriptsprachen wie PHP.</p>
    <p>Im Konfliktfall überschreibt die Angabe im HTTP-Header immer die Angabe im Dokument, außer in den Browsern, in denen das BOM Vorrang vor HTTP hat.</p>
    <p>Wir empfehlen allerdings, dass wenn Sie eine HTTP-Angabe zur Einstellung der Zeichencodierung verwenden müssen, zusätzlich auch eine <code class="kw">@charset</code>-Angabe ins Stylesheet einfügen. Dadurch wird sichergestellt, dass die Zeichencodierung immer noch bekannt ist, wenn das Stylesheet lokal verwendet oder verschoben wird, z.B. zum Testen oder Bearbeiten.</p>
  </section>
</section>
<section>
  <h2 id="additionalinfo"><a href="#additionalinfo">Weitere Informationen</a></h2>
  <p>Die meisten werden die Informationen in diesem Abschnitt nicht benötigen. Sie sind der Vollständigkeit halber hier erwähnt.</p>
  <section>
    <h3 id="nonutf8"><a href="#nonutf8">Andere Zeichencodierungen als UTF-8</a></h3>
    <div class="sidenoteGroup">
      <p>Dieser Abschnitt ist nur von Bedeutung, wenn Sie Ihr Stylesheet nicht UTF-8-codiert speichern können.</p>
      <aside class="sideinfonote">
        <p class="info">Obwohl die Bezeichner normalerweise <dfn>charset</dfn> genannt werden, beziehen sie sich in Wirklichkeit auf Zeichencodierungen, nicht auf Zeichensätze. Der Unicode-Zeichensatz kann mit drei verschiedenen Zeichencodierungen codiert werden.</p>
      </aside>
    </div>
    <p>Bis vor Kurzem war das <a href="http://www.iana.org/assignments/character-sets">IANA-Register</a> das Nachschlagewerk für Bezeichner von Zeichencodierungen. Das IANA-Register enthält oft mehrere Bezeichner für dieselbe Codierung. In diesen Fällen sollten Sie den als „<span lang="en" xml:lang="en">preferred</span>“ (bevorzugt) gekennzeichnete Bezeichner verwenden.</p>
    <p>Die neue Spezifikation <a href="http://encoding.spec.whatwg.org/" lang="en" xml:lang="en"><cite>Encoding</cite></a> enthält eine Liste, die gegen aktuelle Browser&shy;implementierungen getestet wurde. Sie finden Sie in der Tabelle im Abschnitt <a href="http://encoding.spec.whatwg.org/#encodings" lang="en" xml:lang="en">Encodings</a>. Am besten verwenden Sie die Bezeichner in der linken Spalte dieser Tabelle.</p>
    <p><strong>Beachten Sie:</strong> Wenn ein Bezeichner in einer dieser Quellen vorkommt, bedeutet das nicht automatisch, dass es gut wäre, diese Codierung zu verwenden. Einige der Codierungen sind problematisch. Wenn Sie wirklich nicht UTF-8 verwenden können, beachten Sie die Ratschläge im Artikel <a href="/International/questions/qa-choosing-encodings"><cite>Eine Zeichencodierung wählen und anwenden</cite></a>.</p>
  </section>
  <section>
    <h3 id="charsetlink"><a href="#charsetlink">Das <code class="kw">charset</code>-Attribut für das <code class="kw" translate="no">link</code>-Element</a></h3>
    <p>Die HTML-4.01-Spezifikation beschreibt ein <span class="kw">charset</span>-Attribut, das für <span class="kw">link</span>-Elemente verwendet werden kann und die Zeichencodierung des verlinkten Dokuments angeben soll. Inzwischen erklärt die HTML5-Spezifikation die Verwendung des <code class="kw">charset</code>-Attributs für <span class="kw">link</span>-Elemente für <a href="http://www.w3.org/TR/html5/obsolete.html#attr-link-charset">veraltet</a>; Sie sollten es nicht einsetzen.</p>
  </section>
</section>


<section>
<h2 id="endlinks"><a href="#endlinks">Further reading</a></h2>
<aside class="section" id="survey"> </aside><script>document.getElementById('survey').innerHTML = g.survey</script>

<ul id="full-links">
    <li>
      <p>Erste Schritte: <a href="/International/getting-started/characters"><cite>Einführung in Zeichensätze und Zeichencodierungen</cite></a></p>
    </li>
    <li>
      <p>Tutorial: <a href="/International/tutorials/tutorial-char-enc/"><cite>Umgang mit Zeichencodierungen in  HTML und CSS</cite></a></p>
    </li>
    <li>
      <p>Verwandte Links: <cite>HTML und CSS erstellen</cite></p>
      <ul>
        <li><a href="/International/techniques/authoring-html#charset">Zeichen</a></li>
        <li><a href="/International/techniques/authoring-html#css">Angabe der Zeichencodierung in einem CSS-Stylesheet</a></li>
      </ul>
    </li>
    <li>
      <p>Verwandte Links: <cite>Server-Konfiguration</cite></p>
      <ul>
        <li><a href="/International/techniques/server-setup#charset">Zeichen</a></li>
      </ul>
    </li>
  </ul>
</section>

<footer id="thefooter"></footer><script type="text/javascript">document.getElementById('thefooter').innerHTML = g.bottomOfPage</script>
<script type="text/javascript">completePage()</script>
</body>
</html>
