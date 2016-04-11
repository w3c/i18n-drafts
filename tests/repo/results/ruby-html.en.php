<?php 
$fp = fopen( 'ruby-html-data/manifest.txt', "r") or die("Couldn't open $manifest");
$tests = array();
$ptr = 0;
while (! feof($fp)) {
	$line = trim(fgets( $fp, 1024 ));
	$linerecord = explode("\t", $line);
	$tests[$linerecord[0]] = $linerecord;
	$ptr++;
	}

include('_commoncode.php');

$testlist = array();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>HTML5, the ruby element and its children: Summarized test results</title>
<meta name="description" content="Summary of results of HTML5 ruby tests" />
<script type="text/javascript">
var f = { }

// AUTHORS should fill in these assignments:
f.directory = 'tests/repo/results'+'/' // the path to this file, not including /International or the file name
f.filename = 'ruby-html' // the file name WITHOUT extensions
f.authors = 'Richard Ishida, W3C' // author(s) and affiliations
f.previousauthors = '' // as above
f.modifiers = '' // people making substantive changes, and their affiliation
f.searchString = 'results-ruby-html' // blog search string - usually the filename without extensions
f.firstPubDate = '2015-05-22' // date of the first publication of the document (after review)
f.lastSubstUpdate = { date:'2015-05-22', time:'19:37'}  // date and time of latest substantive changes to this document
f.status = 'notreviewed'  // should be one of draft, review, published, notreviewed or obsolete
f.path = '../../../' // what you need to prepend to a URL to get to the /International directory 

// AUTHORS AND TRANSLATORS should fill in these assignments:
f.thisVersion = { date:'2015-05-22', time:'19:37'} // date and time of latest edits to this document/translation
f.contributors = '' // people providing useful contributions or feedback during review or at other times
// also make sure that the lang attribute on the html tag is correct!
f.sources = '' // describes sources of information

// TRANSLATORS should fill in these assignments:
f.translators = 'xxxNAME, ORG' // translator(s) and their affiliation - a elements allowed, but use double quotes for attributes

f.breadcrumb = 'tests'

f.additionalLinks = ''
</script>
<script type="text/javascript" src="ruby-html-data/translations.js"> </script>
<script type="text/javascript" src="../../../javascript/doc-structure/article-dt.js"> </script>
<script type="text/javascript" src="../../../javascript/boilerplate-text/boilerplate-en.js"></script><!--TRANSLATORS must change -en to the subtag for their language!-->
<script type="text/javascript" src="../../../javascript/doc-structure/article.js"> </script>
<script type="text/javascript" src="../../../javascript/articletoc-html5.js"></script>
<link rel="stylesheet" href="../../../style/article-2016.css" type="text/css" />
<link rel="copyright" href="#copyright"/>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<link rel="stylesheet" href="_results.css" type="text/css" />
<script src="ruby-html-data/data.js"></script>
<script src="_results-functions.js"></script>
</head>

<body>
<header>
  <nav id="mainNavigation"></nav><script>document.getElementById('mainNavigation').innerHTML = mainNavigation</script>
  
  <h1>Summarized test results: <br>
  HTML5, the ruby element and its children</h1>
</header>


<section>
  <div id="audience">
    <p><span id="intendedAudience" class="leadin">Intended audience:</span> 
    users, XHTML/HTML coders (using editors or scripting), script developers (PHP, JSP, etc.), CSS coders, Web project managers, and anyone who wants to know whether the CSS property hyphens works as specified.</p>
    <div id="updateInfo"></div><script>document.getElementById('updateInfo').innerHTML = g.updated</script>
    </div>
    

<section> 
	<p>These tests check whether user agents support styling and basic default positioning of markup based on ruby markup, including the elements <code class="kw" translate="no">ruby</code>, <code class="kw" translate="no">rb</code>, <code class="kw" translate="no">rt</code>, and <code class="kw" translate="no">rtc</code>.&nbsp; They do not test&nbsp;the features of the CSS Ruby module, just whether the structure of the ruby markup is recognised by the browsers, and whether those minimal features needed to position the ruby text are available without CSS styling.</p>
	<p>To see the test, click on the link in the left-most column. To see detailed results for a single test, click on the link in the Details column and look just above the table. The detailed results show the date(s) the test result was recorded, and the version of the browser&nbsp;tested. </p>
<p>Any dependencies are shown in notes above the table, and notes below the table will usually provide any additional useful information, including an explanation&nbsp;of why a result was marked as 'partially successful'.</p>
<p><strong>Key:</strong> Digits represent numbers of <span style="white-space:nowrap;">passes/partial passes/fails</span>. Colours indicate:</p>
<table class="results" style="margin-right: 32%;">
  <tbody>
    <tr>
      <td class="pass">all results pass</td>
      <td class="pass fail">pass reported but also other results</td>
      <td class="fail">all results fail</td>
      <td class="fail uncertain">fail reported but also other success</td>
      <td class="uncertain">all results partially successful</td>
    </tr>
  </tbody>
</table>

			</section>
		</section>
		

<section>
<h2 id="results"><a href="#results">Results</a></h2>
<p>Note that these test results are for released versions of the browsers tested. Versions that are still in development may provide better support for these features.</p>
<br style="clear:both;"/>

<section>
  <h3 id="styling"><a href="#styling">Ruby markup styling</a></h3>
  
  <?php 	drawResults('html/semantics/text-level-semantics/the-ruby-element', # $base
					'ruby-html', # $batch
					'', # $tname
					'4.5.21', # $specsection
					'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element', # $uri 
					'html', # $related 
					'styling', # $sectionid 
					 array(
						'ruby-styling-001.html',
						#'ruby-styling-002.html',
						'ruby-styling-003.html',
						'ruby-styling-004.html',
						'ruby-styling-005.html',
						'ruby-styling-006.html',
						'ruby-styling-007.html',
						'ruby-styling-008.html',
						'ruby-styling-009.html',
						'ruby-styling-010.html',
						'ruby-styling-011.html',
						)
					 );
		 ?>
</section>
    <!-- ··············································· -->


<section>
  <h3 id="position"><a href="#position">Single-sided ruby position</a></h3>
  <?php 	drawResults('html/semantics/text-level-semantics/the-ruby-element', # $base
					'ruby-html', # $batch
					'', # $tname
					'4.5.21', # $specsection
					'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element', # $uri 
					'html', # $related 
					'position', # $sectionid 
					 array(
						'ruby-position-001.html',
						'ruby-position-002.html',
						'ruby-position-003.html',
						'ruby-position-004.html',
						'ruby-position-005.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="double"><a href="#double">Double-sided ruby</a></h3>
  <?php 	drawResults('html/semantics/text-level-semantics/the-ruby-element', # $base
					'ruby-html', # $batch
					'', # $tname
					'4.5.21', # $specsection
					'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element', # $uri 
					'html', # $related 
					'double', # $sectionid 
					 array(
						'ruby-double-001.html',
						'ruby-double-002.html',
						'ruby-double-003.html',
						'ruby-double-004.html',
						'ruby-double-005.html',
						'ruby-double-006.html',
						'ruby-double-007.html',
						'ruby-double-008.html',
						)
					 );
		 ?>
  <section class="notes">
  <p class="notesheader">Notes</p>
  <ol>
  <li><strong>ruby-double-005</strong>, Firefox 38.0.1: The numbers did not extend across all the base characters – just the first one. </li>
  <li><strong>ruby-double-007</strong>, Firefox 38.0.1: The horizontal alignment of the ruby text was correct, but the two ruby texts overlap.</li>
  </ol>
  </section>
</section>
   
<!-- ·········································································· -->


<section>
<h3 id="gaps"><a href="#gaps">Ruby annotation gaps</a></h3>
<?php 	drawResults('html/semantics/text-level-semantics/the-ruby-element', # $base
					'ruby-html', # $batch
					'', # $tname
					'4.5.21', # $specsection
					'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element', # $uri 
					'html', # $related 
					'gaps', # $sectionid 
					 array(
						'ruby-gaps-001.html',
						'ruby-gaps-002.html',
						)
					 );
		 ?>
</section>
 
</section>



<section>
<h2 id="endlinks"><a href="#endlinks">Links</a></h2>
<aside class="section" id="survey"> </aside><script>document.getElementById('survey').innerHTML = g.survey</script>

<ul id="full-links">
		<li>
			<p><a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element">HTML5, 4.5.21 The ruby element</a></p>
		</li>
		<li>
		  <p><a href="/International/tests/">i18n test suite home</a></p>
	  </li>
  </ul>
</section>

<footer id="thefooter"></footer><script type="text/javascript">document.getElementById('thefooter').innerHTML = g.bottomOfPage</script>
<script type="text/javascript">completePage()</script>

<script type="text/javascript">  
var testlist = [
 	<?php 
	for ($i=0; $i<count($testlist)-1;$i++) {
		echo "'".$testlist[$i]."',";
		}
	echo "'".$testlist[count($testlist)-1]."'";
	?>
			];

generateStuffInPage(testlist);
</script>
</body>
</html>
