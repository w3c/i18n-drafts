<?php 
$fp = fopen( 'css-ruby-data/manifest.txt', "r") or die("Couldn't open $manifest");
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
<title>CSS3 Ruby: Summarized test results</title>
<meta name="description" content="Summary of results of CSS3 Text module tests" />
<script type="text/javascript">
var f = { }

// AUTHORS should fill in these assignments:
f.directory = 'tests/repo/results'+'/' // the path to this file, not including /International or the file name
f.filename = 'css-ruby' // the file name WITHOUT extensions
f.authors = 'Richard Ishida, W3C' // author(s) and affiliations
f.previousauthors = '' // as above
f.modifiers = '' // people making substantive changes, and their affiliation
f.searchString = 'results-css-ruby' // blog search string - usually the filename without extensions
f.firstPubDate = '2015-08-23' // date of the first publication of the document (after review)
f.lastSubstUpdate = { date:'2015-08-24', time:'10:07'}  // date and time of latest substantive changes to this document
f.status = 'notreviewed'  // should be one of draft, review, published, notreviewed or obsolete
f.path = '../../../' // what you need to prepend to a URL to get to the /International directory 

// AUTHORS AND TRANSLATORS should fill in these assignments:
f.thisVersion = { date:'2016-04-11', time:'19:37'} // date and time of latest edits to this document/translation
f.contributors = '' // people providing useful contributions or feedback during review or at other times
// also make sure that the lang attribute on the html tag is correct!
f.sources = '' // describes sources of information

// TRANSLATORS should fill in these assignments:
f.translators = 'xxxNAME, ORG' // translator(s) and their affiliation - a elements allowed, but use double quotes for attributes

f.breadcrumb = 'tests'

f.additionalLinks = ''
</script>
<script type="text/javascript" src="css-ruby-data/translations.js"> </script>
<script type="text/javascript" src="../../../javascript/doc-structure/article-dt.js"> </script>
<script type="text/javascript" src="../../../javascript/boilerplate-text/boilerplate-en.js"></script><!--TRANSLATORS must change -en to the subtag for their language!-->
<script type="text/javascript" src="../../../javascript/doc-structure/article.js"> </script>
<script type="text/javascript" src="../../../javascript/articletoc-html5.js"></script>
<link rel="stylesheet" href="../../../style/article-2016.css" type="text/css" />
<link rel="copyright" href="#copyright"/>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<link rel="stylesheet" href="_results.css" type="text/css" />
<script src="css-ruby-data/data.js"></script>
<script src="_results-functions.js"></script>
</head>

<body>
<header>
  <nav id="mainNavigation"></nav><script>document.getElementById('mainNavigation').innerHTML = mainNavigation</script>
  
  <h1>Summarized test results: <br>
  CSS3 Ruby</h1>
</header>


<section>
  <div id="audience">
    <p><span id="intendedAudience" class="leadin">Intended audience:</span> 
    users, HTML coders, script developers, CSS coders, Web project managers, and anyone who wants to know whether browsers support the CSS Ruby spec.</p>
    <div id="updateInfo"></div><script>document.getElementById('updateInfo').innerHTML = g.updated</script>
    </div>
    

			<section> 
                <p>These tests check whether user agents correctly apply the properties defined in the CSS-ruby-1 spec. These are simple, user-oriented tests, designed to check basic functionality, rather than test all edge cases and implementation details.</p>
                <p>Note that some tests pass because the browser displays the annotations in the same way by default, rather than necessarily because of the application of a CSS property. No special action is taken in these cases, since the result is the same for the user, however there are some exploratory tests below that enable you to see what the default rendering looks like.</p>
              <p>To see the test, click on the link in the left-most column. To see detailed results for a single test, click on the row of results and look just above the table. The detailed results show the date(s) the test result was recorded, and the version of the browser&nbsp;tested. </p>
<p>Any dependencies are shown in notes above the table, and notes below the table will usually provide any additional useful information, including an explanation&nbsp;of why a result was marked as 'partially successful'.</p>
<p><strong>Key:</strong></p>
<table class="results" style="margin-right: 32%;">
  <tbody>
    <tr>
      <td class="pass" style="min-width:8em;">pass</td>
      <td class="fail" style="min-width:8em;">fail</td>
      <td class="uncertain" style="min-width:8em;">partially successful</td>
    </tr>
  </tbody>
</table>
			</section>
		</section>
		

<section>
<h2 id="results"><a href="#results">Results for horizontal text</a></h2>
<p>Note that these test results are for released versions of the browsers tested. Versions that are still in development may provide better support for these features. The tests do not use any vendor prefixes. Tests that do show support for vendor prefixes are listed further down this page.</p>

<section>
  <h3 id="exploratory"><a href="#exploratory">Exploratory tests</a></h3>
  <p>These two tests merely allow you to detect the default behaviour of the browser, in case you wish to compare it against what passes or fails in the other tests. </p>
  <div style="margin-left:10%;">
  <p><a href="/International/tests/repo/css-ruby-1/defaults/ruby-position-control-000.html" target="_blank">ruby-position default</a>  <span class="testName">ruby-position-control-000.html</span><br/>
  <span class="exp" style="font-size:80%;">[Exploratory test] to determine whether and how the browser handles ruby by default.</span></p>
  <p><a href="/International/tests/repo/css-ruby-1/defaults/ruby-align-control-000.html" target="_blank">ruby-align default	</a> <span class="testName">ruby-align-control-000.html</span><br/>
  <span class="exp" style="font-size:80%;">[Exploratory test] to establish how the browser aligns ruby text by default.</span></p>
  <p><a href="/International/tests/repo/css-ruby-1/defaults/ruby-position-intercharacter-000.html" target="_blank">zh-TW default size</a> <span class="testName">ruby-position-intercharacter-000.html</span><br/>
  <span class="exp" style="font-size:80%;">[Exploratory test] to determine whether the browser applies special sizing for zh-TW language annotations.</span></p>
</div>
</section>
  
<!-- ·········································································· -->
<br style="clear:both;"/>

<section>
  <h3 id="ruby_position"><a href="#ruby_position">ruby-position</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.1', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#rubypos', # $uri 
					'css3-ruby', # $related 
					'ruby_position', # $sectionid 
					 array(
						'rubypos/ruby-position-over-001.html',
						'rubypos/ruby-position-under-001.html',
						'rubypos/ruby-position-intercharacter-001.html',
						'rubypos/ruby-position-intercharacter-002.html',
						'rubypos/ruby-position-intercharacter-003.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_align"><a href="#ruby_align">ruby-align</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.3', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#ruby-align-property', # $uri 
					'css3-ruby', # $related 
					'ruby_align', # $sectionid 
					 array(
						'ruby-align-property/ruby-align-start-001.html',
						'ruby-align-property/ruby-align-start-002.html',
						'ruby-align-property/ruby-align-center-001.html',
						'ruby-align-property/ruby-align-center-002.html',
						'ruby-align-property/ruby-align-space-between-001.html',
						'ruby-align-property/ruby-align-space-between-002.html',
						'ruby-align-property/ruby-align-space-between-003.html',
						'ruby-align-property/ruby-align-space-between-004.html',
						'ruby-align-property/ruby-align-space-between-005.html',
						'ruby-align-property/ruby-align-space-around-001.html',
						'ruby-align-property/ruby-align-space-around-002.html',
						'ruby-align-property/ruby-align-space-around-003.html',
						'ruby-align-property/ruby-align-space-around-004.html',
						'ruby-align-property/ruby-align-space-around-005.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_merge"><a href="#ruby_merge">ruby-merge</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li><strong>ruby-merge-collapse-002</strong> and <strong>ruby-merge-auto-002</strong> are only significant if the test immediately previous passes. This is because they are testing whether the association of annotation to base text is preserved across line breaks even though the placement would otherwise obscure the relationships.</li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.2', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#collapsed-ruby', # $uri 
					'css3-ruby', # $related 
					'ruby_merge', # $sectionid 
					 array(
						'collapsed-ruby/ruby-merge-separate-001.html',
						'collapsed-ruby/ruby-merge-collapse-001.html',
						'collapsed-ruby/ruby-merge-collapse-002.html',
						'collapsed-ruby/ruby-merge-auto-001.html',
						'collapsed-ruby/ruby-merge-auto-002.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_autohide"><a href="#ruby_autohide">Ruby autohide</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'2.4', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#autohide', # $uri 
					'css3-ruby', # $related 
					'ruby_autohide', # $sectionid 
					 array(
						'ruby-model/ruby-autohide-001.html',
						)
					 );
		 ?>
</section>
  
</section>



<section>
<h2 id="vertical-results"><a href="#vertical-results">Results for vertical text</a></h2>

<section>
  <h3 id="ruby_position_v"><a href="#ruby_position_v">ruby-position (vertical text)</a></h3>
    <div class="dependencies">
      <p class="notesheader">Dependencies</p>
      <ol>
        <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
      </ol>
    </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.1', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#rubypos', # $uri 
					'css3-ruby', # $related 
					'ruby_position_v', # $sectionid 
					 array(
						'defaults/vertical-support-001.html',
						'rubypos/ruby-position-over-101.html',
						'rubypos/ruby-position-under-101.html',
						'rubypos/ruby-position-intercharacter-101.html',
						'rubypos/ruby-position-intercharacter-102.html',
						'rubypos/ruby-position-intercharacter-103.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->



<section>
  <h3 id="ruby_align_v"><a href="#ruby_align_v">ruby-align (vertical text)</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.3', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#ruby-align-property', # $uri 
					'css3-ruby', # $related 
					'ruby_align_v', # $sectionid 
					 array(
						'defaults/vertical-support-001.html',
						'ruby-align-property/ruby-align-start-101.html',
						'ruby-align-property/ruby-align-start-102.html',
						'ruby-align-property/ruby-align-center-101.html',
						'ruby-align-property/ruby-align-center-102.html',
						'ruby-align-property/ruby-align-space-between-101.html',
						'ruby-align-property/ruby-align-space-between-102.html',
						'ruby-align-property/ruby-align-space-between-103.html',
						'ruby-align-property/ruby-align-space-between-104.html',
						'ruby-align-property/ruby-align-space-between-105.html',
						'ruby-align-property/ruby-align-space-around-101.html',
						'ruby-align-property/ruby-align-space-around-102.html',
						'ruby-align-property/ruby-align-space-around-103.html',
						'ruby-align-property/ruby-align-space-around-104.html',
						'ruby-align-property/ruby-align-space-around-105.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_merge_v"><a href="#ruby_merge_v">ruby-merge (vertical text)</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
      <li><strong>ruby-merge-collapse-102</strong> and <strong>ruby-merge-auto-102</strong> are only significant if the test immediately previous passes. This is because they are testing whether the association of annotation to base text is preserved across line breaks even though the placement would otherwise obscure the relationships.</li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.2', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#collapsed-ruby', # $uri 
					'css3-ruby', # $related 
					'ruby_merge_v', # $sectionid 
					 array(
						'defaults/vertical-support-001.html',
						'collapsed-ruby/ruby-merge-separate-101.html',
						'collapsed-ruby/ruby-merge-collapse-101.html',
						'collapsed-ruby/ruby-merge-collapse-102.html',
						'collapsed-ruby/ruby-merge-auto-101.html',
						'collapsed-ruby/ruby-merge-auto-102.html',
						)
					 );
		 ?>
</section>
  
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_autohide"><a href="#ruby_autohide">Ruby autohide</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'2.4', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#autohide', # $uri 
					'css3-ruby', # $related 
					'ruby_autohide', # $sectionid 
					 array(
						'ruby-model/ruby-autohide-101.html',
						)
					 );
		 ?>
</section>


</section>



<section>
<h2 id="prefix-results"><a href="#prefix-results">Results for prefixed, horizontal</a></h2>
<p>These test results based on CSS that has the following adaptations:</p>
<ol>
    <li><code class="kw" translate="no">-webkit-ruby-position </code>is used with values set to either <code class="kw" translate="no">before</code> or <code class="kw" translate="no">after</code></li>
    <li><code class="kw" translate="no">-webkit-writing-modes </code>and <code class="kw" translate="no">writing-modes:tb-rl</code> are used for tests with vertical text.</li>
    <li><code class="kw" translate="no">distributed-letter</code> used in addition to <code class="kw" translate="no">space-between</code>, and <code class="kw" translate="no">distributed-space</code> used in addition to <code class="kw" translate="no">space-around</code> for <code class="kw" translate="no">ruby-align</code>.</li>
    </ol>
  <!-- ·········································································· --><!-- ··············································· --><!-- ·········································································· -->


<section>
  <h3 id="ruby_position_prop"><a href="#ruby_position_prop">ruby-position</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.1', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#rubypos', # $uri 
					'css3-ruby', # $related 
					'ruby_position_prop', # $sectionid 
					 array(
						'prefix/ruby-position-over-001.html',
						'prefix/ruby-position-under-001.html',
						'prefix/ruby-position-intercharacter-001.html',
						'prefix/ruby-position-intercharacter-002.html',
						'prefix/ruby-position-intercharacter-003.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->




<section>
  <h3 id="ruby_align_prop"><a href="#ruby_align_prop">ruby-align</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.3', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#ruby-align-property', # $uri 
					'css3-ruby', # $related 
					'ruby_align_prop', # $sectionid 
					 array(
						'prefix/ruby-align-start-001.html',
						'prefix/ruby-align-start-002.html',
						'prefix/ruby-align-center-001.html',
						'prefix/ruby-align-center-002.html',
						'prefix/ruby-align-space-between-001.html',
						'prefix/ruby-align-space-between-002.html',
						'prefix/ruby-align-space-between-003.html',
						'prefix/ruby-align-space-between-004.html',
						'prefix/ruby-align-space-around-001.html',
						'prefix/ruby-align-space-around-002.html',
						'prefix/ruby-align-space-around-003.html',
						'prefix/ruby-align-space-around-004.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->




<section>
  <h3 id="ruby_merge_prop"><a href="#ruby_merge_prop">ruby-merge</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li><strong>ruby-merge-collapse-002</strong> and <strong>ruby-merge-auto-002</strong> are only significant if the test immediately previous passes. This is because they are testing whether the association of annotation to base text is preserved across line breaks even though the placement would otherwise obscure the relationships.</li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.2', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#collapsed-ruby', # $uri 
					'css3-ruby', # $related 
					'ruby_merge_prop', # $sectionid 
					 array(
						'prefix/ruby-merge-separate-001.html',
						'prefix/ruby-merge-collapse-001.html',
						'prefix/ruby-merge-collapse-002.html',
						'prefix/ruby-merge-auto-001.html',
						'prefix/ruby-merge-auto-002.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_autohide_prop"><a href="#ruby_autohide_prop">Ruby autohide</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'2.4', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#autohide', # $uri 
					'css3-ruby', # $related 
					'ruby_autohide_prop', # $sectionid 
					 array(
						'prefix/ruby-autohide-001.html',
						)
					 );
		 ?>
  <!-- ·········································································· -->
</section>

</section>


<section>
<h2 id="prefixv-results"><a href="#prefixv-results">Results for prefixed, vertical</a></h2>
<p>These test results based on CSS that has the following adaptations:</p>
<ol>
    <li><code class="kw" translate="no">-webkit-ruby-position </code>is used with values set to either <code class="kw" translate="no">before</code> or <code class="kw" translate="no">after</code></li>
    <li><code class="kw" translate="no">-webkit-writing-modes </code>and <code class="kw" translate="no">writing-modes:tb-rl</code> are used for tests with vertical text.</li>
    <li><code class="kw" translate="no">distributed-letter</code> used in addition to <code class="kw" translate="no">space-between</code>, and <code class="kw" translate="no">distributed-space</code> used in addition to <code class="kw" translate="no">space-around</code> for <code class="kw" translate="no">ruby-align</code>.</li>
    </ol>

<section>
  <h3 id="ruby_position_v_prop"><a href="#ruby_position_v_prop">ruby-position (vertical text)</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.1', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#rubypos', # $uri 
					'css3-ruby', # $related 
					'ruby_position_v_prop', # $sectionid 
					 array(
						'defaults/vertical-support-prop-001.html',
						'prefix/ruby-position-over-101.html',
						'prefix/ruby-position-under-101.html',
						'prefix/ruby-position-intercharacter-101.html',
						'prefix/ruby-position-intercharacter-102.html',
						'prefix/ruby-position-intercharacter-103.html',
						)
					 );
		 ?></section>
<section class="notes">
  <p class="notesheader">Notes</p>
  <ol>
    <li><strong>ruby-position-intercharacter-101/103</strong>, Edge 12: The zhuyin characters appear to the right of the base characters due to the vertical orientation of the text, but they don't fit within a single base character height.</li>
  </ol>
</section>
  
<!-- ·········································································· -->
<section>
  <h3 id="ruby_align_v_prop"><a href="#ruby_align_v_prop">ruby-align (vertical text)</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.3', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#ruby-align-property', # $uri 
					'css3-ruby', # $related 
					'ruby_align_v_prop', # $sectionid 
					 array(
						'defaults/vertical-support-prop-001.html',
						'prefix/ruby-align-start-101.html',
						'prefix/ruby-align-start-102.html',
						'prefix/ruby-align-center-101.html',
						'prefix/ruby-align-center-102.html',
						'prefix/ruby-align-space-between-101.html',
						'prefix/ruby-align-space-between-102.html',
						'prefix/ruby-align-space-between-103.html',
						'prefix/ruby-align-space-between-104.html',
						'prefix/ruby-align-space-around-101.html',
						'prefix/ruby-align-space-around-102.html',
						'prefix/ruby-align-space-around-103.html',
						'prefix/ruby-align-space-around-104.html',
						)
					 );
		 ?>
</section>
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_merge_v_prop"><a href="#ruby_merge_v_prop">ruby-merge (vertical text)</a></h3>
  <div class="dependencies">
    <p class="notesheader">Dependencies</p>
    <ol>
      <li>All these tests will fail if the top test (<strong>defaults/vertical-support-001.html</strong>) fails, since that means that the browser doesn't support vertical text. </li>
      <li><strong>ruby-merge-collapse-102</strong> and <strong>ruby-merge-auto-102</strong> are only significant if the test immediately previous passes. This is because they are testing whether the association of annotation to base text is preserved across line breaks even though the placement would otherwise obscure the relationships.</li>
    </ol>
  </div>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'4.2', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#collapsed-ruby', # $uri 
					'css3-ruby', # $related 
					'ruby_merge_v_prop', # $sectionid 
					 array(
						'defaults/vertical-support-prop-001.html',
						'prefix/ruby-merge-separate-101.html',
						'prefix/ruby-merge-collapse-101.html',
						'prefix/ruby-merge-collapse-102.html',
						'prefix/ruby-merge-auto-101.html',
						'prefix/ruby-merge-auto-102.html',
						)
					 );
		 ?>
</section>
  
  
<!-- ·········································································· -->


<section>
  <h3 id="ruby_autohide_prop"><a href="#ruby_autohide_prop">Ruby autohide</a></h3>
  <?php 	drawResults('css-ruby-1', # $base
					'css-ruby', # $batch
					'', # $tname
					'2.4', # $specsection
					'https://drafts.csswg.org/css-ruby-1/#autohide', # $uri 
					'css3-ruby', # $related 
					'ruby_autohide_prop', # $sectionid 
					 array(
						'prefix/ruby-autohide-101.html',
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
			<p><a href="https://drafts.csswg.org/css-ruby-1/">CSS Ruby Layout Module Level 1</a> (editor's copy)</p>
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
