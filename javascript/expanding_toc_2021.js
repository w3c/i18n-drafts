// functions to create a table of contents and to automatically set up section and figure references


/*
 <ul id="css3menu">
      <li class="topfirst off"><a onclick="return false;" href="#">&nbsp;<br/>
        Find a task:</a></li>
      <li class="off"><a onclick="return false;" href="#">&nbsp;<br/>
        Characters</a>
        <ul>
          <li><a class="script" href="#" onclick="window.location = 'links?iso=armn'; return false;" id="Armn">Getting started</a></li>
          <li><a class="script" href="#" onclick="window.location = 'links?iso=aghb'; return false;" id="Aghb">Choosing and applying a character encoding</a></li>
          <li><a class="script" href="#" onclick="window.location = 'links?iso=cprt'; return false;" id="Cprt">Changing 
          */

function createtoc (maxlevel) {
	// creates a TOC and puts it in a div with id="toc" & creates a self-link
    // expect to find the id on the heading markup, NOT the section, and NO a around the heading text
    // works for h2 or h2+h3 (if maxlevel set to 3)
	
	var h2s = document.querySelectorAll('h2')
	var toc = document.getElementById('css3menu')
    toc.innerHTML = '<li class="topfirst off"><a onclick="return false;" href="#">&gt;</a></li>'
	var h2, h3
	
	for (var i=0; i<h2s.length; i++) {
		if (!h2s[i].className.match(/notoc/)) {
			h2 = h2s[i].innerHTML
            
            // create a self link <a class="selflink" aria-label="§" href="#basicconsonants"></a>
            selflink = document.createElement('a')
            selflink.className = 'selflink'
            //console.log('href', h2s[i].id)
            selflink.href = '#'+h2s[i].parentNode.id
            h2s[i].appendChild(selflink)
            
			var h = document.createElement('li')
			var a = document.createElement('a')
				a.href = '#'+h2s[i].parentNode.id
				a.innerHTML = h2
			h.appendChild(a)
			h.className = 'off'
		
			if (maxlevel && maxlevel > 2) {
				// check for h3s
				var h3s = h2s[i].parentNode.querySelectorAll('h3')
                var uu = document.createElement('ul')
				for (var k=0; k<h3s.length; k++) {
					if (!h3s[k].className.match(/notoc/)) {
						h3 = h3s[k].innerHTML
            
                        // create a self link
                        selflink = document.createElement('a')
                        selflink.className = 'selflink'
                        //console.log('href', h3s[k].id)
                        selflink.href = '#'+h3s[k].parentNode.id
                        h3s[k].appendChild(selflink)
            
						var hh = document.createElement('li')
						aa = document.createElement('a')
							aa.href = '#'+h3s[k].parentNode.id
							aa.innerHTML = h3
						hh.appendChild(aa)
						hh.className = 'script'
                        uu.appendChild(hh)
						
						//if (maxlevel && maxlevel > 3) {
							// check for h4s and add self-links
							var h4s = h3s[k].parentNode.querySelectorAll('h4');
							for (var m=0; m<h4s.length; m++) {
								if (!h4s[m].className.match(/notoc/)) {
									//h4 = h4s[m].innerHTML

									// create a self link
									selflink = document.createElement('a')
									selflink.className = 'selflink'
									selflink.href = '#'+h4s[m].parentNode.id
									h4s[m].appendChild(selflink)

									//var hh = document.createElement('div')
									//aa = document.createElement('a')
									//	aa.href = '#'+h4s[m].parentNode.id
									//	aa.innerHTML = h4
									//hh.appendChild(aa)
									//hh.className = 'toc3'
									}
								}
								//h.appendChild(hh);
							//}
						}
					h.appendChild(uu)
					}
				}
				toc.appendChild(h)
			}
		}
    setSectionRefs()
    setFigRefs()
	}
    


function setFigRefs () {
    // finds all a elements with class figref and replaces the content
    // of the element with 'Fig. '+<counter>
    
    // make a list of figures with captions
    var figs = document.querySelectorAll('figure')
    var figures = {}
	var counter = 0
    for (let i=0;i<figs.length;i++) {
        if (figs[i].querySelector('figcaption') !== null) figures[figs[i].id] = ++counter
        }
    //console.log('figures',figures)
	
	var figrefs = document.querySelectorAll('.figref')
    for (let i=0;i<figrefs.length;i++) {
        var id = figrefs[i].textContent.replace(/#/,'')
        if (figures[id] === null) console.log('Section not found: ',id)
        else {
            figrefs[i].innerHTML = 'Figure '+figures[id]
            figrefs[i].href = '#'+id
            }
        }
    }
    


function setSectionRefs () {
    // finds all a elements with class secref and replaces the content
    // of the element with the title of the section
    
    var secrefs = document.querySelectorAll('.secref, .sectionref')
    for (let i=0;i<secrefs.length;i++) {
        var id = secrefs[i].textContent
        if (document.getElementById(id) === null) console.log('Section not found: ',id)
        else if (document.getElementById(id).querySelector('h2, h3,h4') === null) console.log('Section has no descendants: ', id)
        else {
            secrefs[i].innerHTML = document.getElementById(id).querySelector('h2, h3,h4').innerHTML
            secrefs[i].href = '#'+id
            }
        }
    }


























