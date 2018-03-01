
function getStatus (score) {
	if (score=='') { return 'none'; }
	
	var x = score.split('/');
	if (x[0]!='. ') { x[0] = true; } else { x[0] = false; }
	if (x[1]!=' . ') { x[1] = true; } else { x[1] = false; }
	if (x[2]!=' .') { x[2] = true; } else { x[2] = false; }
	
	if (!x[0] && !x[1] && !x[2]) { return 'none'; }
	if (x[0] && !x[1] && !x[2]) { return 'pass'; }
	if (!x[0] && x[1] && !x[2]) { return 'uncertain'; }
	if (!x[0] && !x[1] && x[2]) { return 'fail'; }
	if (x[0] && !x[1] && x[2]) { return 'pass fail'; }
	if (x[0] && x[1]) { return 'pass uncertain'; }
	if (!x[0] && x[1] && x[2]) { return 'fail uncertain'; }
	
	else { return 'n/a'; }
	}




function generateStuffInPage () { 	
	var tables, rows, testname, t, i, td, tr, th
	//var ffp, fff, ffpl, ffscore, cp, cf, cpl, cscore, sp, sf, spl, sscore
	var ffscore, fnscore, cscore, gcscore, sscore, wkscore, oscore, escore, iescore, ascore, cmscore, smscore, ucscore
	tables = document.querySelectorAll('table.results')  // find all the tables
	for (t=0;t<tables.length;t++) {
		rows = tables[t].querySelectorAll('tr')          // find all rows in each table
		
		// set the header flags
		var ths = { ff:false, fn:false, c:false, gc:false, s:false, wk:false, o:false, e:false, ie:false, uc:false, a:false }
		
		// establish which browsers have results
		for (i= 1;i<rows.length;i++) {
			testname = rows[i].title
			if (testresults[testname]) {
				for (r=0;r<testresults[testname].length;r++) {
					ctest = testresults[testname]
					switch (ctest[r].browser) {
						case 'Firefox': ths.ff = true; break;
						case 'Nightly': ths.fn = true; break;
						case 'Chrome': ths.c = true; break;
						case 'Canary': ths.gc = true; break;
						case 'Safari': ths.s = true; break;
						case 'Webkit': ths.wk = true; break;
						case 'Opera': ths.o = true; break;
						case 'Edge': ths.e = true; break;
						case 'Internet Explorer': ths.ie = true; break;
						case 'Android': ths.a = true; break;
						case 'ChromeMobile': ths.cm = true; break;
						case 'SafariMobile': ths.sm = true; break;
						case 'UC Browser': ths.uc = true; break;
						}
					}
				}
			}
				
		for (i= 1;i<rows.length;i++) {
			// get the test name
			testname = rows[i].title
							
			// get the scores
			if (testresults[testname]) {
				//console.log(testresults[testname])
				
				ffscore = fnscore = cscore = gcscore = sscore = wkscore = oscore = escore = iescore = ascore = cmscore = smscore = ucscore = 0
				
				// collect a score for this test + browser combination
				// we do this separately because the order of the data doesn't match that of the columns
				// also if there are more than one scores for a given browser, the last takes precedence
				for (var r=0;r<testresults[testname].length;r++) {
					var ctest = testresults[testname]
					switch (ctest[r].browser) {
						case 'Firefox': ffscore = ctest[r].status; break
						case 'Nightly': fnscore = ctest[r].status; break
						case 'Chrome': cscore = ctest[r].status; break 
						case 'Canary': gcscore = ctest[r].status; break 
						case 'Safari': sscore = ctest[r].status; break
						case 'Webkit': wkscore = ctest[r].status; break
						case 'Opera': oscore = ctest[r].status; break
						case 'Edge': escore = ctest[r].status; break
						case 'Internet Explorer': iescore = ctest[r].status; break
						case 'Android': ascore = ctest[r].status; break
						case 'ChromeMobile': cmscore = ctest[r].status; break
						case 'SafariMobile': smscore = ctest[r].status; break
						case 'UC Browser': ucscore = ctest[r].status; break
						}
					}

				// now assign the scores to table cells in the order shown below
				// also add event listener to open detailed result info
				if (ths.ff) {
					td = document.createElement('td')
					td.title = 'Firefox'
					if (ffscore) {
						td.textContent = ffscore
						td.className = ffscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.fn) {
					td = document.createElement('td')
					td.title = 'Nightly'
					if (fnscore) {
						td.textContent = fnscore
						td.className = fnscore
						td.addEventListener('click', showResultDetail)
					}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.c) {
					td = document.createElement('td')
					td.title = 'Chrome'
					if (cscore) {
						td.textContent = cscore
						td.className = cscore
						td.addEventListener('click', showResultDetail)
						//td.className = getStatus(cscore)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.gc) {
					td = document.createElement('td')
					td.title = 'Canary'
					if (gcscore) {
						td.textContent = gcscore
						td.className = gcscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.o) {
					td = document.createElement('td')
					td.title = 'Opera'
					if (oscore) {
						td.textContent = oscore
						td.className = oscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.s) {
					td = document.createElement('td')
					td.title = 'Safari'
					if (sscore) {
						td.textContent = sscore
						td.className = sscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.wk) {
					td = document.createElement('td')
					td.title = 'WebKit'
					if (wkscore) {
						td.textContent = wkscore
						td.className = wkscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.e) {
					td = document.createElement('td')
					td.title = 'Edge'
					if (escore) {
						td.textContent = escore
						td.className = escore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.ie) {
					td = document.createElement('td')
					td.title = 'Internet Explorer'
					if (iescore) {
						td.textContent = iescore
						td.addEventListener('click', showResultDetail)
						td.className = iescore
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.a) {
					td = document.createElement('td')
					td.title = 'Android'
					if (ascore) {
						td.textContent = ascore
						td.className = ascore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.textAlign = 'center'
						td.style.backgroundColor = 'azure'
						}
					rows[i].appendChild(td)
					}
				if (ths.cm) {
					td = document.createElement('td')
					td.title = 'Chrome mobile'
					if (cmscore) {
						td.textContent = cmscore
						td.addEventListener('click', showResultDetail)
						td.className = cmscore
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.sm) {
					td = document.createElement('td')
					td.title = 'Safari mobile'
					if (smscore) {
						td.textContent = smscore
						td.className = smscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				if (ths.uc) {
					td = document.createElement('td')
					td.title = 'UC Browser'
					if (ucscore) {
						td.textContent = ucscore
						td.className = ucscore
						td.addEventListener('click', showResultDetail)
						}
					else {
						td.textContent = '-'
						td.style.backgroundColor = 'azure'
						td.style.textAlign = 'center'
						}
					rows[i].appendChild(td)
					}
				}
			}
		if (ths.ff) { th = document.createElement('th'); th.textContent = 'Firefox'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.fn) { th = document.createElement('th'); th.textContent = 'FNightly'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.c) { th = document.createElement('th'); th.textContent = 'Chrome'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.gc) { th = document.createElement('th'); th.textContent = 'Canary'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.o) { th = document.createElement('th'); th.textContent = 'Opera'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.s) { th = document.createElement('th'); th.textContent = 'Safari'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.wk) { th = document.createElement('th'); th.textContent = 'WebKit'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.e) { th = document.createElement('th'); th.textContent = 'Edge'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.ie) { th = document.createElement('th'); th.textContent = 'IE'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.a) { th = document.createElement('th'); th.textContent = 'Android'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.cm) { th = document.createElement('th'); th.textContent = 'ChrMob'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.sm) { th = document.createElement('th'); th.textContent = 'SafMob'; tables[t].querySelector('tr').appendChild(th) }
		if (ths.uc) { th = document.createElement('th'); th.textContent = 'UC'; tables[t].querySelector('tr').appendChild(th) }
		}
	}
	
	
	
function showResultDetail (evt) {
	showdetail(evt.target.parentElement.dataset.testname,evt.target.parentElement.dataset.sectionid)
	}


function showdetail (testname, sectionid) {  
	var html ='';
	if (testresults[testname]) {
		for (var f=0;f<testresults[testname].length;f++) {
			html += '<tr';
			//if (testresults[testname][f].status == 'pass') { html+= ' style="background-color: #8F8;"'; }
			if (testresults[testname][f].status == 'pass') { html+= ' class="pass"'; }
			else if (testresults[testname][f].status == 'partial') { html+= ' class="uncertain"'; }
			else { html+= ' class="fail"'; }
			html += '><td>'+testresults[testname][f].browser+'</td><td>'+testresults[testname][f].status+'</td><td>'+testresults[testname][f].ua+'</td><td>'+testresults[testname][f].date+'</td></tr>';
			}
		
		document.getElementById(sectionid+'-detail').innerHTML='<p class="closeDetail" onclick="closedetail(\''+sectionid+'-detail\');">close</p><p class="detailTitle">'+testname+'</p><table class="detailedresults"><tbody>'+html+'</tbody></table>';
		}
	}	



function closedetail (sectionid) {  
	document.getElementById(sectionid).innerHTML='';
	}



// indexing constants
var assertion = 2
var title = 0
var help = 1


function drawResults (sectionid, base, batch, specsection, uri, related, results) {
	// GLOBAL tests

	var out = ''
	out += '<div id="'+sectionid+'-detail"></div>'

	out += '<table class="results">'
    out += '<tr>'
    out += '<th class="topleft">Link (to run test)</th>'
   	out += '<th>Assertion</th>'
	out += '</tr>'      

	for (var row=0; row<results.length; row++) {
		var tname = results[row]
		//testlist[testlist.length] = tname
		var exp = ''
		//if (tests[tname][assertion].substr(1,4) === 'Expl') exp = 'exp'
		if (tests[tname][assertion].match('xploratory tes')) exp = 'exp'
		
		//out += '<tr title="'+tname+'" data-testname="'+tname+'" data-sectionid="'+sectionid+'" onClick="showdetail(\''+tname+"','"+sectionid+'\');">\n'
		out += '<tr title="'+tname+'" data-testname="'+tname+'" data-sectionid="'+sectionid+'">\n'
		var nameparts = tests[tname][title].split(': ')
		var shortname = '';
		if (nameparts.length>1) {
			shortname += nameparts[1]
			for (var n=2;n<nameparts.length;n++) shortname += ': '+nameparts[n]
			} 
		else shortname = nameparts[0] 
		var pathparts = tname.split('/')
		var simplefilename = pathparts[pathparts.length-1]
		out += '<th class="side title"><a href="../run?base='+base+'&batch='+batch+'&test='+tname+'" target="_blank">'+shortname+"</a><br/><span class='testName'>"+simplefilename+	"</span></th>\n"
		out += '<th class="side assert '+exp+'">'
		//if (exp === 'exp') { out += '[Exploratory test] ' }
		out += tests[tname][assertion]+"</th>\n"
	
		out += "</tr>\n"
		}

   out += '</table>'
  
  out += '<p class="testLink"><strong>Links</strong>:  <a href="'+uri+'">Section '+specsection+'</a> &bull; <a href="/International/tests/#'+related+'">Related tests</a></p>'

	//console.log(out)
	console.log(sectionid+'-data')
	document.getElementById(sectionid+'-data').innerHTML = out
	}
