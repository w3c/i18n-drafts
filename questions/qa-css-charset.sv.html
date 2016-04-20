<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="utf-8" />
<title>Att deklarera teckenkodning i CSS</title>
<meta name="description" content="Hur deklarerar jag teckenkodning av en formatmall i CSS?" />
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
f.translators = 'Olle Olsson, SICS/W3CSweden' // translator(s) and their affiliation - a elements allowed, but use double quotes for attributes

f.breadcrumb = 'characters'

f.additionalLinks = ''
</script>
<script type="text/javascript" src="qa-css-charset-data/translations.js"> </script>
<script type="text/javascript" src="../javascript/doc-structure/article-dt.js"> </script>
<script type="text/javascript" src="../javascript/boilerplate-text/boilerplate-sv.js"></script><!--TRANSLATORS must change -en to the subtag for their language!-->
<script type="text/javascript" src="../javascript/doc-structure/article.js"> </script>
<script type="text/javascript" src="../javascript/articletoc-html5.js"></script>
<link rel="stylesheet" href="../style/article-2016.css" type="text/css" />
<link rel="copyright" href="#copyright"/>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
<header>
  <nav id="mainNavigation"></nav><script>document.getElementById('mainNavigation').innerHTML = mainNavigation</script>
  
  <h1>Att deklarera teckenkodning i CSS</h1>
</header>


<section>
  <div id="audience">
    <p><span id="intendedAudience" class="leadin">Intended audience:</span> 
    CSS-kodare, projektledare för webbprojekt, och alla som vill veta hur man kan deklarera teckenkodning för en CSS-fil.</p>
    <div id="updateInfo"></div><script>document.getElementById('updateInfo').innerHTML = g.updated</script>
    </div>

  <h2 id="question"><a href="#question">Question</a></h2>
    <p class="question">Hur deklarerar jag teckenkodningen av en formatmall i <abbr title="Cascading Style Sheets">CSS</abbr>?</p>

  <p> Om du har någon text i din CSS-fil som inte är kodad i ASCII, 
    till exempel icke-ASCII-tecken i fontnamn, i värden för egenskapen
    &#8221;<span lang="en">content</span>&#8221;,
    i selektorvärden, etc., så måste du försäkra dig om att CSS-parsern
    vet hur den ska korrekt transformera dessa bytes till tecken,
    så att den förstår din CSS-kod. Denna artikel beskriver hur du kan göra detta. </p>
</section>


<section id="nutshell">
    <h2 id="quickanswer"><a href="#quickanswer">Quick answer</a></h2>
  <p> Du bör alltid använda UTF-8 som teckenkodning för
    dina formatmallar och dina HTML-sidor, och ange denna
    kodning i din HTML. 
    
    Om du gör det, så finns det inget behov av att
    deklarera kodningen i din formatmall. </p>
  <p>Andra ansatser behövs endast om dina formatmallar
    innehåller tecken som inte finns i ASCII, och du av
    något skäl inte kan lita på att teckenkodningen av
    HTML-koden stämmer överens med teckenkodningen av
    den använda formatmallen.
    
    I ett sådant fall bör du använda <code class="kw" translate="no">@<span lang="en">charset</span></code> eller HTTP-huvuden för att ange teckenkodningen.
    
    (Om dina HTML- och CSS-filer använder samma kodning så
    kommer de senaste versionerna av vanliga webbläsare
    att använda samma teckenkodning för CSS-formatmallen
    som den använde för HTML-filen.) </p>
</section>


<section>
  <h2 id="longeranswer"><a href="#longeranswer">Detaljer</a></h2>
  <section>
    <h3 id="atcharset"><a href="#atcharset">Att använda <code class="kw" translate="no">@<span lang="en">charset</span></code></a></h3>
    <p> Som nämnts ovan bör du endast använda denna när din
      formatmall och den HTML-fil som använder formatmallen
      har olika teckenkodningar. </p>
    <p> Det är viktigt att förstå ett fastän deklarationen <code class="kw" translate="no">@<span lang="en">charset</span></code> ser ut som en CSS-regel, så används den inte för att
      upptäcka teckenkodningen.
      
      Det är endast en <em>exakt bytesekvens</em>,
      som utgör de absolut första bytes i formatmallen,
      som tar effekt.
      
      Variationer, även de som skulle vara giltiga för normala <span lang="en">at</span>-regler,
      kommer att helt ignoreras. </p>
    <p> Om du vill ange teckenkodning inne i en formatmall,
      använd då följande sekvens av bytes, bortsett från 
      delen <var class="kw" translate="no"><span lang="en">charset-name</span></var>,
      precis i början av filen, en byte per tecken. </p>
    <figure class="example"> <code>@<span lang="en">charset</span> "<var><span lang="en">charset-name</span></var>";</code> </figure>
    <p> Notera att <var class="kw" translate="no"><span lang="en">charset-name</span></var> inte är känsligt för stora/små tecken, men bör alltid vara <code class="kw" translate="no">utf-8</code> för nya formatmallar.
      
      Om du av olika skäl inte kan koda dina formatmallar i
      UTF-8, läs då avsnittet <a href="#nonutf8">Att arbeta med andra kodningar än UTF-8</a>, nedan. </p>
    <p> Endast en bytesekvens <code class="kw" translate="no">@<span lang="en">charset</span></code> kan finnas i en extern formatmall, och den måste vara
      placerad alldeles i början av dokumentet.
      
      Det får inte finnas några andra tecken före, inte ens
      kommentarer. </p>
    <div class="note"><b>Observera!</b> Det räcker inte med att bara placera <code>@<span lang="en">charset</span> "utf-8";</code> i början av formatmallen &#x2013; du måste även <strong>spara</strong> din formatmall i
      teckenkodningen UTF-8.
      
      (Se mer om detta i <a href="/International/questions/qa-choosing-encodings#applyingencoding"><span lang="en">Using an encoding with your content</span></a>.) </div>
    <p> <strong>Viktigt:</strong> Eftersom HTTP-huvuden har högre prioritet än en deklaration av <code class="kw">@<span lang="en">charset</span></code> i dokumentet, så bör du
      även ta reda på om teckenkodning redan definieras i HTTP-huvudet.
      
      Om det finns ett sådant HTTP-huvud, så måste <code class="kw">@<span lang="en">charset</span></code> ange samma teckenkodning,
      och den i dokumentet angivna kodningen kommer bara att
      ha en praktisk effekt när formatmallen läses i ett
      sammanhang där kodning inte anges i HTTP-huvud
      (t.ex. när filer läses direkt från lagringsmedia). </p>
    <p>I listan över tekniker att använda finns <a href="/International/techniques/authoring-html#checkenc">en uppsättning länkar</a> till dokument som hjälper dig att upptäcka om en
      deklaration skickas med i HTTP-huvudet. </p>
  </section>
  <section>
    <h3 id="bom"><a href="#bom">Hur är det med &#8221;<span lang="en">byte-order mark</span>&#8221;?</a></h3>
    <p> <a hreflang="en" href="http://www.w3.org/TR/css-syntax-3/#input-byte-stream">Syntaxspecifikationen för CSS3 säger</a> att om du i din fil har ett byte-ordnings-märke
      (<a class="termref" href="/International/questions/qa-byte-order-mark#bomwhat"><span lang="en">byte-order mark</span></a>)
      vilken anger UTF-8, så borde detta medföra att
      webbläsaren läser in formatmallen som UTF-8,
      oberoende av vad andra deklarationer säger om
      teckenkodning.
      
      Oturligt nog så stöds för närvarande inte detta på ett interoperabelt
      sätt &#x2013; <span lang="en">Internet Explorer</span> 10 och 11 ger fortfarande högre prioritet till
      HTTP-huvuden och till <code class="kw" translate="no">@<span lang="en">charset</span></code>-deklarationer. </p>
    <p> Så tillsvidare bör du ange <code class="kw" translate="no">@<span lang="en">charset</span></code>-deklarationer 
      eller deklarationer i HTTP-huvuden.
      
      Det förra har en ytterligare fördel, i att den hjälper
      de personer som tittar på källkoden att fastställa
      teckenkodningen av formatmallen.
      
      Byte-ordnings-märket är osynligt. </p>
    <p> Läs mer <a href="/International/questions/qa-byte-order-mark">om byte-ordnings-märket</a>. </p>
  </section>
  <section>
    <h3 id="http"><a href="#http">Att använda HTTP</a></h3>
    <div class="sidenoteGroup">
      <p> Webbservern kanske redan skickar information om
        normalvärde för teckenkodning, i ett HTTP-huvud med <code class="kw" translate="no"><span lang="en">Content-Type</span></code>,
        när en webbläsare hämtar en formatmall; eller också
        gör den inte det.
        
        Följande rad i ett levererat HTTP-svar indikerar
        att filen är kodad i UTF-8. </p>
      <figure class="example"><code><span lang="en">Content-Type</span>: text/css; charset=utf-8 </code></figure>
      <aside class="sideinfonote">
        <p class="info"> Listan över stödjande tekniker ger <a href="/International/techniques/authoring-html#checkenc">en uppsättning länkar</a> till dokument som hjälper dig att upptäcka om en viss
          deklaration skickas i HTTP-huvudet.
          
          Vill du få mer information om hur man anger
          teckenkodning i HTTP, så titta på <a href="/International/O-HTTP-charset"><cite><span lang="en">Setting the HTTP charset parameter</span></cite></a>. </p>
      </aside>
    </div>
    <p> Det kan vara så att webbservern, för en formatmall,
      levererar en deklaration av teckenkodning som du inte
      vill ha, vilket kan bero på serverns
      standardinställningar eller på specifika
      parametersättningar.
      
      Eller så levererar den ingen information om
      teckenkodning, när du i själva verket vill att den
      skall göra det.
      
      Du kan modifiera webbserverns generella beteende,
      eller dess beteende för en viss uppsättning filer,
      genom att modifiera inställningarna för servern
      (globalt eller lokalt), eller genom att generera
      innehåll med skriptspråk som PHP. </p>
    <p> Deklarationen i HTTP-huvudet kommer alltid att ha
      högre prioritet än deklarationer i dokumentet (om det
      finns en skillnad mellan dessa), förutom för de
      webbläsare där byte-ordnings-märket har ännu högre
      prioritet. </p>
    <p> Vi rekommenderar dock ändå att om du behöver använda
      en HTTP-deklaration för att få till rätt
      teckenkodning, så bör du ändå ha med en <code class="kw" translate="no">@<span lang="en">charset</span></code>-deklaration
      inne i formatmallen.
      
      Detta kommer att säkerställa att man kan få tillgång
      till kodningsinformation även om formatmallen används
      lokalt eller får annan lagringsplats, t.ex. vid
      testning eller redigering. </p>
  </section>
</section>
<section>
  <h2 id="additionalinfo"><a href="#additionalinfo">Ytterligare information</a></h2>
  <p>De flesta personer behöver inte känna till informationen i
    detta avsnitt.
    
    Avsikten är bara att ge fullständig information, ifall detta
    skulle behövas i speciella situationer. </p>
  <section>
    <h3 id="nonutf8"><a href="#nonutf8">Att arbeta med andra kodningar än UTF-8</a></h3>
    <div class="sidenoteGroup">
      <p> Detta avsnitt ska bara läsas om du är förhindrad från att
        spara dina formatmallar i UTF-8. </p>
      <aside class="sideinfonote">
        <p class="info">Lägg märke till
          att det ofta talas om <dfn><span lang="en">charset</span></dfn>-namn,
          fastän det egentligen handlar om teckenkodningar, inte
          uppsättningar av tecken.
          
          Så kan t.ex. teckenuppsättningen (eller 
          &#8221;repertoaren&#8221;) i <span lang="en">Unicode</span> kodas i tre olika kodningsscheman. </p>
      </aside>
    </div>
    <p> Fram till helt nyligen var <a hreflang="en" href="http://www.iana.org/assignments/character-sets">IANA-registret</a> den plats där man kan hitta namn på teckenkodningar.
      
      I IANA-registret finns ofta flera namn för en och samma kodning.
      
      I sådana fall bör du välja det namn som  angetts som
      &#8221;<span lang="en">preferred</span>&#8221;. </p>
    <p> Den nya specifikationen <a hreflang="en" href="http://encoding.spec.whatwg.org/"><cite><span lang="en">Encoding</span></cite></a> listar teckenkodningar som provats i existerande
      webbläsarimplementationer.
      
      Du hittar listan i tabellen som finns i den sektion vilken benämns <a hreflang="en"  href="http://encoding.spec.whatwg.org/#encodings"><span lang="en">Encodings</span></a>.
      
      Det är säkrast att använda de namn som anges i den vänstra kolumnen i den tabellen. </p>
    <p> <strong>Observera</strong> dock att bara för att ett namn
      förekommer i någon av dessa källor, så behöver det inte betyda
      att det är fritt fram att använda den teckenkodningen.
      
      Ett flertal av dessa kodningar har brister.
      
      Om du trots allt inte kan använda UTF-8 så bör du noggrant
      studera vad som sägs i artikeln <a href="/International/questions/qa-choosing-encodings"><cite><span lang="en">Choosing &amp; applying a character encoding</span></cite></a>. </p>
  </section>
  <section>
    <h3 id="charsetlink"><a href="#charsetlink"><code class="kw" translate="no"><span lang="en">charset</span></code>-attributet på <code class="kw" translate="no"><span lang="en">link</span></code>-elementet</a></h3>
    <p> Specifikationen för HTML 4.01 beskriver ett <span class="kw"><span lang="en">charset</span></span>-attribut
      som kan användas för <span class="kw"><span lang="en">link</span></span>-elementet,
      som ett sätt att ange teckenkodningen för det dokument du länkar till.
      
      Men detta attribut ska inte anges för ett <span class="kw"><span lang="en">link</span></span>-element,
      eftersom HTML5-specifikationen klassar denna användning som <a hreflang="en" href="http://www.w3.org/TR/html5/obsolete.html#attr-link-charset">föråldrad</a>. </p>
</section>


<section>
<h2 id="endlinks"><a href="#endlinks">Further reading</a></h2>
<aside class="section" id="survey"> </aside><script>document.getElementById('survey').innerHTML = g.survey</script>

<ul id="full-links">
    <li>
      <p>Nybörjare? <a href="/International/getting-started/characters"><cite><span lang="en">Introducing Character Sets and Encodings</span></cite></a></p>
    </li>
    <li>
      <p>Tutorial, <a href="/International/tutorials/tutorial-char-enc/"><cite><span lang="en">Handling character encodings in HTML and CSS</span></cite></a></p>
    </li>
    <li>
      <p>Näraliggande länkar, <cite>Att skapa HTML &amp; CSS</cite></p>
      <ul>
        <li><a href="/International/techniques/authoring-html#charset"><span lang="en">Characters</span></a></li>
        <li><a href="/International/techniques/authoring-html#css"><span lang="en">Declaring the character encoding in a CSS style sheet</span></a></li>
      </ul>
    </li>
    <li>
      <p>Näraliggande länkar, <cite>Att konfigurera en webbserver server</cite></p>
      <ul>
        <li><a href="/International/techniques/server-setup#charset"><span lang="en">Characters</span></a></li>
      </ul>
    </li>
  </ul>
</section>
</section>

<footer id="thefooter"></footer><script type="text/javascript">document.getElementById('thefooter').innerHTML = g.bottomOfPage</script>
<script type="text/javascript">completePage()</script>
</body>
</html>
