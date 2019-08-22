var dt = { }

f.clang = document.querySelector('html').lang

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
	bg:"Ако разрешите браузъра да запише бисквитка, ще продължите да виждате W3C Internationalization Activity страниците (където са налични) на избрания от вас език. Искате ли да запишете бисквиткат?",
	de:"Wenn Sie der Verwendung eines Cookies zustimmen, werden Ihnen die Seiten der W3C-Internationalisierungstätigkeit (sofern verfügbar) in Ihrer gewählten Sprache angezeigt. Möchten Sie den Cookie setzen?",
	da:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	el:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	en:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	es:"Si permite que el navegador establezca una cookie, continuará viendo las páginas de Actividad de Internacionalización de W3C (si existieran) en el idioma de su elección. ¿Quiere establecer la cookie?",
	fr:"Si vous acceptez que votre navigateur crée un cookie, vous continuerez de voir les pages d’activité d’internationalisation de W3C (lorsque cela est possible) dans la langue de votre choix. Souhaitez-vous créer le cookie\u00A0?",
	he:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	hi:"यदि आप ब्राउज़र के द्वारा कुकी सेट करते हैं, तो आप अपने द्वारा चुनी गई भाषा में W3C अंतर्राष्ट्रीयकरण गतिविधि पृष्ठ (जहाँ उपलब्ध हो) देखना जारी रखेंगे। क्या आप कुकी सेट करना चाहते हैं?",
	hu:"Amennyiben hozzájárul ahhoz, hogy a böngészője elfogadjon egy sütit, a W3C Nemzetköziesítés Fejlesztési Tevékenység lapjait, ha rendelkezésre állnak, az ön által választott nyelven tudja elérni. Hozzájárul a süti használatához?",
	it:"Se consenti al browser di impostare un cookie, continuerai a visualizzare le pagine W3C Internationalization Activity (ove disponibili) nella lingua selezionata. Vuoi impostare il cookie?",
	ja:"ブラウザーにクッキーを設定させると、W3C Internationalization Activityのページを（もしあるなら）選択した言語で続けて閲覧できるでしょう。クッキーを設定しますか？",
	ko:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	nl:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	pl:"Jeśli pozwolisz przeglądarce ustawić plik cookie będziesz kontynuować przeglądanie (tam gdzie to możliwe) stron Internaconalizacji W3C w języku, który wybierzesz. Czy chcesz ustawić plik cookie?",
	pt:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	'pt-br':"Se você deixar o navegador definir um cookie, você vai continuar a ver páginas W3C Internacionalização Atividade (quando disponível) no idioma que você escolheu. Você quer definir o cookie?",
	ro:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	ru:"Если вы разрешите браузеру установить cookie, вы будете видеть страницы W3C Internationalization Activity на выбранном вами языке (там, где это доступно). Установить cookie?",
	sv:"Om du tillåter webbläsaren att spara en kaka (cookie), så kommer du i fortsättningen att se sidor från W3C Internationalization Activity i det språk du valt (när sådana översättningar finns). Vill du spara kakan?",
	th:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	tr:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	uk:"Якщо ви дозволите браузер встановити куки, ви будете продовжувати бачити сторінки W3C Інтернаціоналізація активність (за наявності) на мові, який ви обрали. Ви хочете, щоб встановити печиво?",
	vi:"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?",
	'zh-hans':"您可以让浏览器设置cookie，以继续使用您选择的语言浏览 W3C 国际化活动页面（如果有该语言的翻译的话）。请问您想设置cookie吗？",
	'zh-hant':"If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?"
	}
