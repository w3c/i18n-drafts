// For an explanation of how to make this work see
// http://people.w3.org/rishida/blog/?p=86
// "Code notes: Expanding and collapsing lists"


function openAll (container, triggerName, classNm) {
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	var triggers = document.getElementById(container).getElementsByTagName(triggerName);
	for(var i=0;i<triggers.length;i++){
		if (classNm == '' || triggers[i].className == classNm) { revealContent(triggers[i]); }
		}
	return false;
	}

function closeAll (container, triggerName, classNm) {
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	var triggers = document.getElementById(container).getElementsByTagName(triggerName);
	for(var i=0;i<triggers.length;i++){
		if (classNm == '' || triggers[i].className == classNm) { hideContent(triggers[i]); }
		}
	return false;
	}

function hideContent (node) {
	node.className = node.className.replace(/triggerClosed/, 'triggerOpen');
	node = node.nextSibling;
	while (node != null) {
		if (node.nodeType == 1 && node.className.search(/hiddenContent/) == -1) {
			//node.className = node.className + ' hiddenContent';
			node.className = node.className.replace(/revealedContent/, 'hiddenContent');
			}
		node = node.nextSibling
		}
	}
				
function revealContent (node) { 
	node.className = node.className.replace(/triggerOpen/, 'triggerClosed');
	node = node.nextSibling;
	while (node != null) {
		if (node.nodeType == 1 && node.className.search(/revealedContent/) == -1) {
			node.className = node.className.replace(/hiddenContent/, 'revealedContent');
			}
		node = node.nextSibling
		}
	}
				

function toggleContent (node) { 
	if (node.className.search(/triggerOpen/) > -1) { revealContent(node); }
	else { hideContent(node); }
	return false;
	}


function setCollapseExpand (container, triggerName, classNm){
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	var summaries = document.querySelectorAll('.summary') 
	for (var e=0; e<summaries.length; e++) summaries[e].style.display = 'none'
	
	var resboxes = document.querySelectorAll('.resource-box') 
	for (e=0; e<resboxes.length; e++) resboxes[e].style.border = '0'
	
	if (document.getElementById && document.getElementsByTagName){ 
		var triggers = document.getElementById(container).getElementsByTagName(triggerName);

		for (var i=0;i<triggers.length;i++){ 
			if (classNm == '' || triggers[i].className == classNm) {
				// set up triggers
				var content = triggers[i];
					content.className = content.className+' triggerOpen';
					content.setAttribute('title', 'Show/hide');
					var a = document.createElement('a');  
						a.setAttribute('href', '#_');
						a.onclick = function() { toggleContent(this.parentNode); return false; };
					while (content.childNodes.length > 0) {  
						a.appendChild( content.firstChild );
						}
					content.appendChild(a);
    		
				// hide content
				var node = content.nextSibling;
				while (node != null) {
					if (node.nodeType == 1) {
						node.className = node.className + ' hiddenContent';
						}
					node = node.nextSibling;
					}
				}
			}
		}
		
	var divs = document.getElementById(container).getElementsByTagName('P');
	return false;
	}
    		
function revealControl (node) {
    if (document.getElementById && document.getElementsByTagName){ 
    	control = document.getElementById(node);
    	control.className = control.className.replace(/hideIfNoJS/, '');
    	}
    }
	

 function recsOnly () {
	divs = document.getElementsByTagName('div');
 	var ptr = 0;
 	rbs = new Array;
 	for (var i=0; i<divs.length; i++) {
		if (divs[i].className.match(/resource-box/)) {
			rbs[ptr++] = divs[i];
			}
 		}
 	for (var i=0; i<rbs.length; i++) {
		rbdivs = rbs[i].getElementsByTagName('div'); //alert(rbdivs.length);
		recs = false;
		for (d=0; d<rbdivs.length; d++) {  //alert(rbdivs[d].className);
			if (rbdivs[d].className.match(/recommendations/)) { recs = true; }
			}
		if (recs) {
			for (d=0; d<rbdivs.length; d++) {  //alert(rbdivs[d].className);
				if (! rbdivs[d].className.match(/rec/) && rbdivs[d].className != 'recommendations') { 
					rbdivs[d].style = 'display:none;';
					}
				if (rbdivs[d].className.match(/rec/)) {
					rbdivs[d].style = 'float:none; width: 80%;';
					}
				}
			}
		else { rbs[i].style = 'display: none;' }
 		}
	h5s = document.getElementsByTagName('h5');
	for (var h=0; h<h5s.length; h++) {
		h5s[h].style = 'display:none;';
 		}
	 }
		
    		
//window.onLoad = setUpJavaScript();