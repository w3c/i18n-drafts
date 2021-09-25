function createtoc (listH3s) {
	// creates a TOC and puts it in a div with id="toc"
	
	var h2s = document.querySelectorAll('h2')
	var toc = document.getElementById('toclocation')
	var h2, h3, a, id2, id3
	
	var toplevel = toc.appendChild(document.createElement('ol'))
	for (var i=0; i<h2s.length; i++) {
		if (! h2s[i].className.match(/notoc/)) {
			// get the title
			if (h2s[i].querySelector('a')) h2 = h2s[i].querySelector('a').innerHTML
			else h2 = h2s[i].innerHTML
			// get the id
			if (h2s[i].id) id2 = h2s[i].id
			else if (h2s[i].parentNode.id) id2 = h2s[i].parentNode.id
			else id = 'ID not found.'
			var h = document.createElement('li')
			a = document.createElement('a')
				a.href = '#'+id2
				a.innerHTML = h2
			h.appendChild(a)
			h.className = 'toc1'
		
			// check for h3s
			if (listH3s) {
			var h3s = h2s[i].parentNode.querySelectorAll('h3')
			if (h3s.length > 0) {
				var secondlevel = h.appendChild(document.createElement('ol'))
				for (var k=0; k<h3s.length; k++) {
					if (!h3s[k].className.match(/notoc/)) {
						// get the title
						if (h3s[k].querySelector('a')) h3 = h3s[k].querySelector('a').innerHTML
						else h3 = h3s[k].innerHTML
						// get the id
						if (h3s[k].id) id3 = h3s[k].id
						else if (h3s[k].parentNode.id) id3 = h3s[k].parentNode.id
						else id = 'ID not found.'

						var hh = document.createElement('li')
						aa = document.createElement('a')
							aa.href = '#'+id3
							aa.innerHTML = h3
						hh.appendChild(aa)
						hh.className = 'toc2'
						secondlevel.appendChild(hh)
						}
					}
				}
				}
			toplevel.appendChild(h)
			}
		}
	}

