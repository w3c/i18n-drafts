 function showSource () {
 var sourceCode = document.getElementById('sourceCode');
 
 var css = document.createElement('div')
 css.id = 'cssSource'
 var cssTitle = document.createElement('span')
 cssTitle.id = 'cssTitle'
 cssTitle.textContent = 'CSS'
 css.appendChild(cssTitle)
 var p = css.appendChild(document.createElement('p'))
 var cssText = p.appendChild(document.createElement('code'))
 cssText.textContent = document.getElementById('csssrc').innerHTML
 
 var html = document.createElement('div')
 html.id = 'htmlSource'
 var htmlTitle = document.createElement('span')
 htmlTitle.id = 'htmlTitle'
 htmlTitle.textContent = 'HTML'
 html.appendChild(htmlTitle)
 p = html.appendChild(document.createElement('p'))
 var htmlText = p.appendChild(document.createElement('code'))
 htmlText.textContent = document.getElementById('htmlsrc').innerHTML
 
 sourceCode.appendChild(css)
 sourceCode.appendChild(html)
}