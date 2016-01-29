var dt = { }


function getYear (d) {
	parts = d.split('-')
	return parts[0]
	}

dt.pubyear = getYear(f.firstPubDate)
dt.curryear = getYear(f.thisVersion.date)
dt.copyrightYear = dt.pubyear
if (dt.pubyear != dt.curryear) dt.copyrightYear += '-'+dt.curryear


dt.enVersion = f.lastSubstUpdate.date
dt.thisVersionPlain = f.thisVersion.date+' '+f.thisVersion.time



// CONTENT NEGOTIATION

var cn = { 
	ar:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	bg:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	de:"Wenn Sie die Seite ein Cookie lassen, werden Sie weiterhin W3C Internationalization Activity Seiten in der Sprache, die Sie ausgewählt haben, in denen zu sehen. Möchten Sie das Cookie gesetzt?",
	da:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	el:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	en:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	es:"Si permite que el navegador establezca una cookie, continuará viendo las páginas de Actividad de Internacionalización de W3C (si existieran) en el idioma de su elección. ¿Quiere establecer la cookie?",
	fr:"Si vous acceptez que votre navigateur crée un cookie, vous continuerez de voir les pages d’activité d’internationalisation de W3C (lorsque cela est possible) dans la langue de votre choix. Souhaitez-vous créer le cookie\u00A0?",
	he:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	hi:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	hu:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	it:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	ja:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	ko:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	nl:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	pl:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	pt:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	'pt-br':"Se você deixar o navegador definir um cookie, você vai continuar a ver páginas W3C Internacionalização Atividade (quando disponível) no idioma que você escolheu. Você quer definir o cookie?",
	ro:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	ru:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	sv:"Om du tillåter webbläsaren att spara en kaka (cookie), så kommer du i fortsättningen att se sidor från W3C Internationalization Activity i det språk du valt (när sådana översättningar finns). Vill du spara kakan?",
	th:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	tr:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	uk:"Якщо ви дозволите браузер встановити куки, ви будете продовжувати бачити сторінки W3C Інтернаціоналізація активність (за наявності) на мові, який ви обрали. Ви хочете, щоб встановити печиво?",
	vi:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	'zh-hans':"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	'zh-hant':"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"
	}
