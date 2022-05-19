
function createtoc (maxlevel) {
	// creates a TOC and puts it in a div with id="toc" & creates a self-link
    // every heading must be a child of a section which has an id
    // expect to find the id on the heading markup, NOT the section, and NO a around the heading text
    // works for h2 or h2+h3 (if maxlevel set to 3)
    // puts self links on h2, h3, AND h4 (but doesn't add h4 to the TOC)
    // calls setSectionRefs setFigRefs
    if (typeof maxlevel === 'boolean' && maxlevel === true) maxlevel = 3
    
    var olNode, ololNode, selflink, h2Nodes, h3Nodes, h4Nodes, liNode, liliNode, aNode, aaNode
    var i, k, m
	
	var toc = document.getElementById('toc')
	var h2InnerHTML, h3InnerHTML
	
	olNode = toc.appendChild(document.createElement('ol'))
	h2Nodes = document.querySelectorAll('h2')
	for (i=0; i<h2Nodes.length; i++) {
		if (h2Nodes[i].className.match(/notoc/)) continue
        h2InnerHTML = h2Nodes[i].innerHTML

        // create a self link <a class="selflink" aria-label="§" href="#basicconsonants"></a>
        selflink = document.createElement('a')
            selflink.className = 'selflink'
            selflink.href = '#'+h2Nodes[i].parentNode.id
        h2Nodes[i].appendChild(selflink)

        liNode = document.createElement('li')
        aNode = document.createElement('a')
            aNode.href = '#'+h2Nodes[i].parentNode.id
            aNode.innerHTML = h2InnerHTML
        liNode.appendChild(aNode)
        liNode.className = 'toc1'

        if (maxlevel && maxlevel > 2) {
            // check for h3Nodes
            h3Nodes = h2Nodes[i].parentNode.querySelectorAll('h3')
            if (h3Nodes.length > 0) ololNode = olNode.appendChild(document.createElement('ol'))
            for (k=0; k<h3Nodes.length; k++) {
                if (h3Nodes[k].className.match(/notoc/)) continue
                h3InnerHTML = h3Nodes[k].innerHTML

                // create a self link
                selflink = document.createElement('a')
                selflink.className = 'selflink'
                selflink.href = '#'+h3Nodes[k].parentNode.id
                h3Nodes[k].appendChild(selflink)

                liliNode = document.createElement('li')
                aaNode = document.createElement('a')
                    aaNode.href = '#'+h3Nodes[k].parentNode.id
                    aaNode.innerHTML = h3InnerHTML
                liliNode.appendChild(aaNode)
                liliNode.className = 'toc2'

                // check for h4Nodes and add self-links
                h4Nodes = h3Nodes[k].parentNode.querySelectorAll('h4')
                for (m=0; m<h4Nodes.length; m++) {
                    if (!h4Nodes[m].className.match(/notoc/)) {

                        // create a self link
                        selflink = document.createElement('a')
                        selflink.className = 'selflink'
                        selflink.href = '#'+h4Nodes[m].parentNode.id
                        h4Nodes[m].appendChild(selflink)
                        }
                    }
                ololNode.appendChild(liliNode)
                liNode.appendChild(ololNode)
                }
            }
            olNode.appendChild(liNode)
		}
    setSectionRefs()
    setFigRefs()
	}
    


function setFigRefs () {
    // finds all a elements with class figref and replaces the content
    // of the element with 'Fig. '+<counter>
    // called by createtoc
    // local: figs figures counter i figrefs
    
    // make a list of figures with captions
    var figs = document.querySelectorAll('figure')
    var figures = {}
	var counter = 0
    for (var i=0;i<figs.length;i++) {
        if (figs[i].querySelector('figcaption') !== null) figures[figs[i].id] = ++counter
        }
    //console.log('figures',figures)
	
	var figrefs = document.querySelectorAll('.figref')
    for (i=0;i<figrefs.length;i++) {
        var id = figrefs[i].textContent.replace(/#/,'')
        if (figures[id] === null) console.log('Section not found: ',id)
        else {
            if (document.documentElement.lang === "zh-hans") {
                figrefs[i].innerHTML = '图'+figures[id]
            } else {
                figrefs[i].innerHTML = 'Figure '+figures[id]
            }
            figrefs[i].href = '#'+id
            }
        }
    }
    


function setSectionRefs () {
    // finds all a elements with class secref and replaces the content
    // of the element with the title of the section
    // called by createtoc
    // local: secrefs i
   
    var secrefs = document.querySelectorAll('.secref, .sectionref')
    for (var i=0;i<secrefs.length;i++) {
        var id = secrefs[i].textContent
        if (document.getElementById(id) === null) console.log('Section not found: ',id)
        else if (document.getElementById(id).querySelector('h2, h3,h4') === null) console.log('Section has no descendants: ', id)
        else {
            secrefs[i].innerHTML = document.getElementById(id).querySelector('h2, h3,h4').innerHTML
            secrefs[i].href = '#'+id
            }
        }
    }








