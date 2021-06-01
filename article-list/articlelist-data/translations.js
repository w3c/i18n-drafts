var trans = { }

trans.versions = ['ar', 'bg', 'de', 'el', 'en', 'es', 'fr', 'hi', 'hu', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'pt-br', 'ro', 'ru', 'sv', 'tr', 'uk', 'zh-hans', 'zh-hant']

trans.outofdatetranslations = []

trans.updatedtranslations = []

trans.unlinkedtranslations = ['da' ]


var thisVersionTitles = '2019-07-22 18:15'

var rtlSet = new Set(['ar','he'])


var titles = {

"getstarted": [
	{
	"url": "/International/getting-started/index",
	"ar": "مقدمة لموقع تدويل الشبكة العالمية",
	"de": "Einstieg in die W3C-Internationalisierungs-Website",
	"en": "Getting Started with the W3C I18n site",
	"es": "Introducción al sitio W3C I18n",
	"fr": "Premiers pas avec le site W3C I18n",
	"pt": "Introdução ao site W3C I18n",
	"pt-br": "Introdução ao site I18n da W3C",
	"ro": "Notiuni de baza despre site-ul W3C I18n",
	"uk": "Приступаючи до роботи з сайтом W3C Інтернаціоналізації"
	},
	{
	"url": "/International/getting-started/characters",
	"ar": "تعريف أطقم المحارف والترميزات",
	"de": "Einführung in Zeichensätze und Zeichencodierungen",
	"en": "Introducing Character Sets and Encodings",
	"es": "Introducción a las codificaciones y a los sets de caracteres",
	"fr": "Présentation des jeux et encodages de caractères",
	"hi": "परिचय कैरेक्टर समूह और कूटबन्धन",
	"hu": "Bevezető a Karakterkészletekbe és Karakterkódolásba",
	"pt": "Introdução de conjuntos de caracteres e codificações",
	"pt-br": "Introdução a conjuntos de caracteres e codificações",
	"ro": "Introducerea seturilor de caractere si a codificarilor",
	"ru": "Представление наборов символов и кодировки",
	"sv": "Introduktion till teckenuppsättningar och kodningar",
	"uk": "Представлення наборів символів і кодування",
	"zh-hans": "介绍字符集与编码",
	"zh-hant": "介紹字符集與編碼",
	},
	{
	"url": "/International/getting-started/language",
	"ar": "اللغة والشبكة العالمية",
	"de": "Sprachangaben im Web",
	"en": "Language on the Web",
	"es": "Idiomas en la Web",
	"fr": "Langage sur le Web",
	"hi": "वेब पर भाषा",
	"hu": "A Nyelv a Weben",
	"ja": "Web 上の言語",
	"ko": "웹상의 언어",
	"pl": "Język witryn internetowych",
	"pt-br": "Idiomas na Web",
	"ro": "Limba pe Web",
	"ru": "Язык на Веб сайте",
	"sv": "Språk på webben",
	"uk": "Мова на Веб сайті",
	"zh-hans": "网站上的语言",
	},
	{
	"url": "/International/quicktips/index",
	"ar": "إرشادات مختصرة لتدويل الشبكة العالمية",
	"de": "Internationalisierungstips für das Web",
	"en": "Internationalization Quick Tips for the Web",
	"es": "Consejos rápidos sobre internacionalización para la Web",
	"fr": "Conseils pratiques sur l’internationalisation du Web",
	"hu": "Gyors tippek a web nemzetköziesítéséhez",
	"pl": "Szybkie wskazówki do internacjonalizacji stron",
	"pt": "Internacionalização - Dicas rápidas para a Web",
	"pt-br": "Dicas rápidas de internacionalização para a Internet",
	"ro": "Sfaturi utile de internationalizare pentru Web",
	"ru": "Советы Интернационализации для Веб сайта",
	"sv": "Snabbtips för internationalisering på webben",
	"uk": "Поради Інтернаціоналізації для Веб сайту",
	}
	],



"characters": [
	{
	"url": "/International/tutorials/tutorial-char-enc/index",
	"de": "Umgang mit Zeichencodierungen in HTML und CSS (Tutorial)",
	"en": "Handling character encodings in HTML and CSS (tutorial)",
	"ro": "Manevrarea codării de caractere în HTML și CSS (tutorial)",
	"sv": "Att hantera teckenkodningar i HTML och CSS (handledning)",
	},
	{
	"url": "/International/questions/qa-what-is-encoding",
	"de": "Zeichencodierung für Anfänger",
	"en": "Character encodings for beginners",
	"fr": "Encodages de caractères pour débutants",
	"sv": "Teckenkodning för nybörjare",
	},
	{
	"url": "/International/articles/definitions-characters/index",
	"en": "Character encodings: Essential concepts",
	"fr": "Encodages de caractères : concepts essentiels",
	},
	{
	"url": "/International/questions/qa-choosing-encodings",
	"de": "Eine Zeichencodierung wählen und anwenden",
	"en": "Choosing & applying a character encoding",
	"es": "Elegir y aplicar una codificación de caracteres",
	"pt-br": "Escolha e uso de codificação de caracteres",
	"sv": "Att välja & att använda en teckenkodning",
	},
	{
	"url": "/International/questions/qa-html-encoding-declarations",
	"de": "Angabe der Zeichencodierung in HTML",
	"en": "Declaring character encodings in HTML",
	"ja": "HTMLで文字エンコーディングを指定する",
	"sv": "Att deklarera teckenkodningar i HTML",
	},
	{
	"url": "/International/questions/qa-css-charset",
	"de": "Angabe der Zeichencodierung in CSS",
	"en": "Declaring character encodings in CSS",
	"sv": "Att deklarera teckenkodning i CSS",
	},
	{
	"url": "/International/questions/qa-byte-order-mark",
	"de": "Das BOM (byte-order mark) in HTML",
	"en": "The byte-order mark (BOM) in HTML",
	},
	{
	"url": "/International/questions/qa-html-css-normalization",
	"de": "Normalisierung in HTML und CSS",
	"en": "Normalization in HTML and CSS",
	"es": "Normalización en HTML y CSS",
	"fr": "Normalisation en HTML et CSS",
	"pl": "Normalizacja w HTML i CSS",
	"pt-br": "Normalização para HTML e CSS",
	"ru": "Нормализация в HTML и CSS",
	"uk": "Нормалізація в HTML і CSS",
	},
	{
	"url": "/International/questions/qa-chars-vs-markup",
	"de": "Zeichen oder Markup?",
	"en": "Characters or markup?",
	"es": "¿Caracteres o lenguaje de etiquetas?",
	"pl": "Znaki czy znaczniki?",
	"ru": "Символы или разметка?",
	"uk": "Символи або розмітка?",
	},
	{
	"url": "/International/questions/qa-changing-encoding",
	"bg": "Конвертиране на HTML страница към Unicode",
	"en": "Changing an HTML page to Unicode",
	"fr": "Changer l’encodage d’une page HTML en Unicode",
	},
	{
	"url": "/International/questions/qa-escapes",
	"de": "Verwendung von Zeichen-Escapes in Markup und CSS",
	"en": "Using character escapes in markup and CSS",
	"sv": "Att använda kodade tecken i uppmärkning och CSS",
	},
	{
	"url": "/International/questions/qa-doc-charset",
	"de": "Dokument-Zeichensatz",
	"en": "Document character set",
	"es": "Set de caracteres para documentos",
	"fr": "Jeu de caractères du document",
	"hi": "दस्तावेज़ वर्ण सेट",
	"hu": "Dokumentum karakter beállítás",
	"it": "Set di caratteri di un documento",
	"ja": "文書文字集合",
	"pl": "Zbiór znaków dokumentu",
	"pt": "Conjunto de caracteres do documento",
	"pt-br": "Conjunto de caracteres do documento",
	"ro": "Setul de caractere in document",
	"ru": "Набор символов документа",
	"sv": "Dokuments teckenuppsättning",
	"uk": "Набір символів документа",
	},
	{
	"url": "/International/articles/http-charset/index",
	"de": "Einstellung des HTTP-charset-Parameters",
	"en": "Setting the HTTP charset parameter",
	"es": "Configuración del parámetro charset de HTTP",
	"fr": "Fixer le paramètre HTTP charset",
	"hu": "A HTTP karakterkészletének (charset) paraméterezése",
	"pl": "Ustawianie parametru charset HTTP",
	"pt-br": "Configurando o parâmetro HTTP da codificação de caracteres (charset)",
	"ro": "Setarea parametrului HTTP set de caractere",
	"ru": "Настройка параметра HTTP charset",
	"sv": "Att sätta charset-parametern i HTTP",
	"uk": "Налаштування параметру HTTP charset",
	},
	{
	"url": "/International/questions/qa-htaccess-charset",
	"de": "Einstellung der Zeichencodierungsangabe ('charset') in .htaccess",
	"en": "Setting charset information in .htaccess",
	"es": "Configuración de información charset en .htaccess",
	"hu": "Karakterkészletre vonatkozó beállítás a .htaccess fájlban",
	"pl": "Ustawianie informacji dotyczącej kodowania znaków w .htaccess",
	"pt-br": "Configurando informação sobre a codificação de caracteres (charset) no .htaccess",
	"ro": "Setarea setului de caractere in .htaccess",
	"ru": "Настройка charset информации в .htaccess",
	"sv": "Att ange 'charset'-information i .htaccess",
	"uk": "Налаштування charset інформації в .htaccess",
	},
	{
	"url": "/International/questions/qa-headers-charset",
	"de": "HTTP-Header überprüfen",
	"en": "Checking HTTP Headers",
	"es": "Verificación de encabezados HTTP",
	"fr": "Vérifier les en-têtes HTTP",
	"hu": "HTTP Fejlécek Ellenőrzése",
	"ko": "HTTP 헤더 확인",
	"pl": "Sprawdzanie nagłówków HTTP",
	"pt-br": "Verificando o cabeçalho HTTP",
	"ro": "Verificarea Antetelor HTTP",
	"sv": "Att granska HTTP-headers",
	},
	{
	"url": "/International/questions/qa-validator-charset-check",
	"de": "Überprüfung der Zeichencodierung mit dem Validator",
	"en": "Checking the character encoding using the validator",
	"es": "Verificación de la codificación de caracteres mediante el verificador",
	"hu": "A karakterkódolás ellenőrzése a validator használatával",
	"ro": "Cum se verifica codificarea caracterelor cu ajutorul validatorului",
	"ru": "Проверка кодировки символов используя валидатор",
	"uk": "Перевірка кодування символів використовуючи валідатор",
	},
	{
	"url": "/International/questions/qa-controls",
	"de": "HTML, XHTML, XML und Steuerzeichen",
	"en": "HTML, XHTML, XML and Control Codes",
	"es": "HTML, XHTML, XML y códigos de control",
	"pl": "HTML, XHTML, XML i kody kontroli",
	"pt-br": "HTML, XHTML, XML e os códigos de controle",
	"ro": "HTML, XHTML, XML si Coduri de Control",
	"ru": "HTML, XHTML, XML и Управляющие Коды",
	"uk": "HTML, XHTML, XML та Керуючі Коди",
	},
	{
	"url": "/International/articles/missing-char-glyph/index",
	"en": "Missing characters and glyphs",
	"es": "Caracteres y glifos faltantes",
	"ru": "Пропущенные символы и глифы",
	"uk": "Пропущені символи і гліфи",
	},
	{
	"url": "/International/questions/qa-who-uses-unicode",
	"en": "Who uses Unicode?",
	"sv": "Vem använder Unicode?",
	},
	{
	"url": "/International/articles/unicode-migration/index",
	"en": "Migrating to Unicode",
	"es": "Migración a Unicode",
	"ru": "Переход на Unicode",
	"uk": "Перехід на Unicode",
	}
	],



"language": [
	{
	"url": "/International/tutorials/language-decl/index",
	"de": "Umgang mit Sprachangaben in HTML",
	"en": "Working with language in HTML (tutorial)",
	"es": "Trabajar con idiomas en HTML",
	"fr": "Travailler avec les langues en HTML",
	"ru": "Работа с языком в HTML (руководство)",
	"uk": "Робота з мовою в HTML",
	},
	{
	"url": "/International/questions/qa-html-language-declarations",
	"de": "Angabe der Sprache in HTML",
	"es": "Declarar idioma en HTML",
	"en": "Declaring language in HTML",
	"fr": "Déclarer la langue en HTML",
	"it": "Dichiarare il linguaggio in HTML",
	"pt-br": "Declaração de idioma em HTML",
	"ru": "Объявление языка в HTML",
	},
	{
	"url": "/International/questions/qa-http-and-lang",
	"de": "HTTP-Header, Meta-Elemente und Sprachinformationen",
	"en": "HTTP headers, meta elements and language information",
	"fr": "En-têtes HTTP, élément meta et informations sur la langue",
	},
	{
	"url": "/International/questions/qa-text-processing-vs-metadata",
	"en": "Types of language declaration",
	"fr": "Types de déclaration de langues",
	},
	{
	"url": "/International/articles/language-tags/index",
	"en": "Language tags in HTML and XML",
	"ja": "HTMLとXMLにおける言語タグ",
	"ru": "Языковые тэги в HTML и XML",
	},
	{
	"url": "/International/questions/qa-choosing-language-tags",
	"en": "Choosing a language tag",
	"es": "Selección de una etiqueta de idioma",
	"ru": "Выбор языковых тэгов",
	},
	{
	"url": "/International/questions/qa-lang-2or3",
	"bg": "Дву-символни или три-символни кодове за език",
	"de": "Zweibuchstabige oder dreibuchstabige Sprachcodes",
	"el": "Κώδικες γλώσσας με δύο ή τρία γράμματα",
	"en": "Two-letter or three-letter ISO language codes",
	"es": "Códigos de idioma de dos o tres letras",
	"fr": "Codes de langue ISO à deux ou trois lettres",
	"it": "Codici di linguaggio ISO a due o tre lettere",
	"pl": "Dwuliterowe czy trzyliterowe kody języka",
	"ro": "Coduri de limba de doua sau trei litere",
	"ru": "Двухбуквенные или трехбуквенные языковые коды",
	"uk": "Двобуквені або трибуквені мовні коди",
	},
	{
	"url": "/International/questions/qa-lang-why",
	"de": "Warum man Sprachattribute verwenden sollte",
	"en": "Why use the language attribute?",
	"es": "¿Por qué usar el atributo de idioma?",
	"fr": "Pourquoi utiliser l'attribut du langage?",
	"it": "Perché usare l'attributo lingua?",
	"ru": "Зачем использовать атрибут языка?",
	"sv": "Varför ska man använda språkattributet?",
	"uk": "Навіщо використовувати атрибут мови?",
	"zh-hans": "为什么使用语言属性?",
	},
	{
	"url": "/International/questions/qa-lang-priorities",
	"en": "Setting language preferences in a browser",
	"ru": "Установка языковых настроек в браузере",
	},
	{
	"url": "/International/questions/qa-text-processing-vs-metadata",
	"en": "Types of language declaration",
	},
	{
	"url": "/International/questions/qa-when-xmllang",
	"de": "xml:lang in XML-Dokument-Schemas",
	"en": "xml:lang in XML document schemas",
	"es": "xml:lang en esquemas de documentos XML",
	"pl": "xml:lang w schematach dokumentów XML",
	"ru": "xml:lang в схемах XML документа",
	"uk": "xml:lang в схемах XML документа",
	},
	{
	"url": "/International/questions/qa-no-language",
	"de": "Kennzeichnung von Text mit keiner Sprache",
	"en": "Tagging text with no language",
	"sv": "Märka upp text som 'inget språk'",
	},
	{
	"url": "/International/questions/qa-link-lang",
	"de": "Kennzeichnung der Sprache von Linkzielen",
	"en": "Indicating the language of a link destination",
	"pl": "Wskazywanie języka strony docelowej linku",
	},
	{
	"url": "/International/questions/qa-accept-lang-locales",
	"de": "Accept-Language für Regionaleinstellungen verwenden",
	"en": "Accept-Language used for locale setting",
	"es": "Encabezado Accept-Language utilizado para ubicar la configuración",
	"hu": "A böngészőből jövő kérés nyelvi beállításai",
	"ru": "Использование Accept-Language для настройки локали",
	"uk": "Використання Accept-Language для налаштування локалі",
	},
	{
	"url": "/International/questions/qa-css-lang",
	"de": "Stylen anhand von Sprachattributen",
	"en": "Styling using  language attributes",
	}
    ],



"markup": [
	{
	"url": "/International/articles/composite-messages/index",
	"en": "Working with Composite Messages",
	"es": "Cómo trabajar con mensajes compuestos",
	"uk": "Робота зі Складеними Повідомленнями",
	},
	{
	"url": "/International/articles/text-reuse/index",
	"en": "Re-using Strings in Scripted Content",
	"es": "Reutilización de cadenas en contenido de script",
	"uk": "Повторне Використання Рядків в Скриптовому Контенті",
	},
	{
	"url": "/International/questions/qa-ruby",
	"en": "What is ruby?",
	},
	{
	"url": "/International/articles/ruby/markup",
	"en": "Ruby Markup",
	},
	{
	"url": "/International/questions/qa-b-and-i-tags",
	"de": "Verwendung von b- und i-Elementen",
	"en": "Using b and i tags",
	},
	{
	"url": "/International/questions/qa-translate-flag",
	"de": "Verwendung des translate-Attributs in HTML",
	"en": "Using HTML's translate attribute",
	"es": "Utilizar el atributo translate de HTML",
	"it": "Utilizzo dell'attributo HTML translate",
	"fr": "Utiliser l’attribut translate HTML",
	},
	{
	"url": "/International/questions/qa-non-eng-tags",
	"de": "Nicht-englische Tags",
	"el": "Μη Αγγλικά στοιχεία",
	"en": "Non-English tags",
	"es": "Etiquetas que no están en inglés",
	"fr": "Les balises dans d’autres langues que l’anglais",
	"hu": "Nem angol nyelvű tagek",
	"pl": "Znaczniki w językach innych niż angielski",
	"pt-br": "Tags em outros idiomas",
	"ru": "Неанглийские тэги",
	"tr": "İngilizce olmayan kod etiketleri",
	"uk": "Неанглійські теги",
	}
    ],



"direction": [
	{
	"url": "/International/tutorials/bidi-xhtml/index",
	"de": "HTML-Seiten in arabischer, hebräischer und anderen von rechts nach links geschriebenen Schriften erstellen (tutorial)",
	"en": "Creating HTML Pages in Arabic, Hebrew and Other Right-to-left Scripts (tutorial)",
	},
	{
	"url": "/International/articles/inline-bidi-markup/uba-basics",
	"en": "Unicode Bidirectional Algorithm basics",
	},
	{
	"url": "/International/questions/qa-html-dir",
	"en": "Structural markup and right-to-left text in HTML",
	},
	{
	"url": "/International/articles/inline-bidi-markup/index",
	"en": "Inline markup and bidirectional text in HTML",
	},
	{
	"url": "/International/questions/qa-bidi-unicode-controls",
	"en": "How to use Unicode controls for bidi text",
	},
	{
	"url": "/International/questions/qa-bidi-controls",
	"en": "Unicode controls vs. markup for bidi support",
	},
	{
	"url": "/International/questions/qa-bidi-css-markup",
	"en": "CSS vs. markup for bidi support",
	},
	{
	"url": "/International/articles/strings-and-bidi/index",
	"en": "Strings and bidi",
	},
	{
	"url": "/International/questions/qa-bidi-space",
	"en": "Bidi space loss",
	"sv": "Saknat mellanrum vid bidi-text",
	},
	{
	"url": "/International/questions/qa-visual-vs-logical",
	"de": "Visuelle vs. logische Buchstaben\u00ADreihenfolge",
	"en": "Visual vs. logical ordering of text",
	"es": "Ordenando el texto de forma visual vs. lógica",
	},
	{
	"url": "/International/tutorials/svg-tiny-bidi/Overview",
	"de": "SVG Tiny-Seiten in arabischer, hebräischer und mit anderen von rechts nach links geschriebenen Schriften erstellen",
	"en": "Creating SVG Tiny Pages in Arabic, Hebrew and other Right-to-left scripts",
	"es": "Creación de páginas SVG Tiny en árabe, hebreo y otros sistemas de escritura de derecha a izquierda",
	"fr": "Création de pages SVG Tiny en arabe, hébreu et autres scripts lus de droite à gauche",
	"it": "Creare pagine SVG in arabo, ebraico e in altri script da destra a sinistra",
	"nl": "SVG Tiny pagina's creëren in het Arabisch, Hebreeuws en andere 'van rechts naar links' schriften",
	"pt": "Criação de SVG Tiny Pages em árabe, hebraico, e em outros scripts da direita para a esquerda",
	"ru": "Создание небольших SVG Страниц на Арабском языке, Иврите и других скриптах, которые выравниваются справа налево",
	"uk": "Створення Невеличких SVG Сторінок в Арабській мові, Івриті та інших скриптах, які вирівнюються справа наліво",
	},
	{
	"url": "/International/articles/vertical-text/index",
	"en": "Styling vertical Chinese, Japanese, Korean and Mongolian text",
	},
	{
	"url": "/International/questions/qa-scripts",
	"de": "Schreibrichtungen und Sprachen",
	"en": "Script direction and languages",
	"es": "Dirección del sistema de escritura e idiomas",
	"ru": "Направления скрипта и языков",
	"uk": "Направлення скрипту і мов",
	}
    ],



"styling": [
	{
	"url": "/International/articles/css3-text/index",
	"en": "CSS3 and International Text",
	},
	{
	"url": "/International/articles/article-text-size",
	"ar": "حجم النص في الترجمة",
	"de": "Textlänge bei Übersetzungen",
	"en": "Text size in translation",
	"es": "El tamaño del texto en la traducción",
	"hu": "Szövegméret a fordításban",
	"ja": "訳文における文字サイズ",
	"ko": "번역물의 텍스트 크기",
	"pl": "Dimensiunea textului in traduceri",
	"ro": "Dimensiunea textului in traduceri",
	"ru": "Размер текста в переводе",
	"uk": "Розмір тексту в перекладі",
	},
	{
	"url": "/International/questions/qa-resizing-backgrounds",
	"de": "Hintergrundbilder, die die Lokalisierung eines Dokumentes erleichtern",
	"en": "Background images that support localization",
	},
	{
	"url": "/International/questions/qa-css-lang",
	"de": "Stylen anhand von Sprachattributen",
	"en": "Styling using  language attributes",
	},
	{
	"url": "/International/articles/typography/justification",
	"en": "Approaches to full justification",
	},
	{
	"url": "/International/articles/typography/linebreak",
	"en": "Approaches to line breaking",
	},
	{
	"url": "/International/articles/vertical-text/index",
	"en": "Styling vertical Chinese, Japanese, Korean and Mongolian text",
	}
    ],



"forms": [
	{
	"url": "/International/questions/qa-forms-utf-8",
	"ar": "نموذج ترميز متعدد اللغات",
	"de": "Zeichencodierung bei mehrsprachigen Formularen",
	"el": "Πολυγλωσσικές Φόρμες",
	"en": "Multilingual form encoding",
	"es": "Codificación de formularios plurilingües",
	"fr": "Encodage de formulaire multilingue",
	"hu": "Többnyelvű űrlapok kódolása",
	"it": "Codifica dei moduli multilingue",
	"ja": "多言語フォームのエンコーディング",
	"ko": "다국어 형태 인코딩",
	"pl": "Formularze wielojęzyczne",
	"ru": "Мультиязычные формы",
	"uk": "Багатомовні форми кодування",
	"zh-hans": "多语言表单的编码",
	},
	{
	"url": "/International/questions/qa-personal-names",
	"de": "Personennamen aus aller Welt",
	"en": "Personal names around the world",
	"fr": "Noms de personnes à travers le monde",
	"uk": "Особисті імена в різних мовах світу",
	},
	{
	"url": "/International/questions/qa-select-sorting",
	"de": "Auswahloptionen sortieren",
	"en": "Sorting select options",
	"pl": "Sortowanie rozwijanej listy",
	"ru": "Сортировка выпадающего списка",
	"uk": "Сортування випадаючого списку",
	}
    ],



"navigation": [
	{
	"url": "/International/questions/qa-site-conneg",
	"en": "Guiding users to translated pages",
	"sv": "Att vägleda användare till översatta sidor",
	},
	{
	"url": "/International/questions/qa-navigation-select",
	"ar": "أسئلة W3C الشائعة حول العولمة استخدام <select> للربط بمحتوى مترجم",
	"de": "Verwendung von Auswahllisten (<select>) für sprachspezifische und regionalspezifische Inhalte",
	"en": "Using <select> to Link to Localized Content",
	"es": "Uso de <select> para enlazar contenido localizado",
	"pl": "Zastosowanie elementu <select> do treści lokalnych",
	"pt-br": "Usando <select> para lincar à um conteúdo específico",
	"ru": "Использование <select> для Ссылания на Локализованный Контент",
	"uk": "Використання <select> для Посилання на Локалізований Контент",
	"zh-hans": "使用<选择>链接到本地化内容",
	"zh-hant": "使用<select>鏈結到本地化內容",
	},
	{
	"url": "/International/questions/qa-link-lang",
	"de": "Kennzeichnung der Sprache von Linkzielen",
	"en": "Indicating the language of a link destination",
	"es": "Indicar el idioma de destino de un enlace",
	"pl": "Wskazywanie języka strony docelowej linku",
	},
	{
	"url": "/International/questions/qa-when-lang-neg",
	"de": "Wann es angebracht ist, Sprachvereinbarung (language negotiation) einzusetzen",
	"en": "When to use language negotiation",
	"fr": "Quand faut-il utiliser la négociation de langue ?",
	"hu": "Mikor használjunk nyelvi egyeztetést",
	"pl": "Kiedy stosujemy negocjację języka?",
	"ro": "Cand sa folosim negocierea limbajului",
	"ru": "Когда следует использовать language negotiation (согласование языка)",
	"uk": "Коли слід використовувати language negotiation (узгодження мови)",
	},
	{
	"url": "/International/questions/qa-apache-lang-neg",
	"de": "Einrichtung von MultiViews-Sprachvereinbarung auf Apache",
	"en": "Apache MultiViews language negotiation set up",
	"ru": "Настройка отображения языка с помощью Apache MultiViews",
	"uk": "Налаштування відображення мови за допомогою Apache MultiViews",
	},
	{
	"url": "/International/questions/qa-lang-priorities",
	"en": "Setting language preferences in a browser",
	"ru": "Установка языковых настроек в браузере",
	},
	{
	"url": "/International/questions/qa-accept-lang-locales",
	"de": "Accept-Language für Regionaleinstellungen verwenden",
	"en": "Accept-Language used for locale setting",
	"es": "Encabezado Accept-Language utilizado para ubicar la configuración",
	"hu": "A böngészőből jövő kérés nyelvi beállításai",
	"ru": "Использование Accept-Language для настройки локали",
	"uk": "Використання Accept-Language для налаштування локалі",
	}
    ],



"address": [
	{
	"url": "/International/articles/idn-and-iri/Overview",
	"en": "An Introduction to Multilingual Web Addresses",
	"es": "Introducción a direcciones web plurilingües",
	"ro": "O introducere in Adresele Web Multilingve",
	"ru": "Введение Многоязычного Веб Адреса",
	"uk": "Запровадження Багатомовної Веб Адреси",
	}
    ],



"cultural": [
	{
	"url": "/International/questions/qa-display-capabilities",
	"de": "Darstellungsvermögen",
	"en": "Display capabilities",
	"es": "Capacidades de visualización",
	"fr": "Capacités d’affichage",
	"hu": "Képernyő megjelenítési módjai",
	"ro": "Capacitati de afisare",
	"sv": "Skärmegenskaper",
	"uk": "Можливості відображення",
	},
	{
	"url": "/International/articles/definitions-time/index",
	"en": "Time & date: Essential concepts",
	},
	{
	"url": "/International/questions/qa-date-format",
	"de": "Datumsformate",
	"en": "Date formats",
	"es": "Formatos de fechas",
	"hu": "Dátum formátumok",
	"ro": "Formate pentru data",
	"sv": "Datumformat",
	"uk": "Формати дати",
	},
	{
	"url": "/International/questions/qa-personal-names",
	"de": "Personennamen aus aller Welt",
	"en": "Personal names around the world",
	"fr": "Noms de personnes à travers le monde",
	"uk": "Особисті імена в різних мовах світу",
	}
    ],



"other": [
	{
	"url": "/International/questions/qa-i18n",
	"ar": "الفرق بين التدويل والتوطين",
	"de": "Lokalisierung vs. Internationalisierung",
	"en": "Localization vs. Internationalization",
	"es": "Diferencias entre localización e internacionalización",
	"fr": "Localisation vs Internationalisation",
	"hu": "Honosítás (Lokalizáció) és Internacionalizálás",
	"pl": "Lokalizacja versus internacjonalizacja",
	"pt": "Localização versus Internacionalização",
	"pt-br": "Localização vs. Internacionalização",
	"ro": "Localizare vs. Internationalizare",
	"ru": "Локализация по сравнению с интернационализацией",
	"sv": "Lokalisering och internationalisering",
	"uk": "Локалізація в порівнянні з Інтернаціоналізацією",
	},
	{
	"url": "/International/questions/qa-mono-multilingual",
	"ar": "الفرق بين المواقع أحادية اللغة والمواقع متعددة اللغات",
	"de": "Einsprachige vs. mehrsprachige Websites",
	"en": "Monolingual vs. multilingual Web sites",
	"es": "Sitios web monolingües versus plurilingües",
	"hu": "Egynyelvű, többnyelvű honlapok",
	"pl": "Witryny jednojęzyczne a wielojęzyczne",
	"ro": "Site-uri web monolinguale vs. multilinguale",
	"ru": "Одноязычные и многоязычные веб-сайты",
	"sv": "Enspråkiga resp flerspråkiga webbplatser",
	"uk": "Одномовні і багатомовні веб-сайти",
	},
	{
	"url": "/International/questions/qa-international-multilingual",
	"ar": "مواقع عالمية ومواقع بلغات متعددة",
	"de": "Internationale und mehrsprachige Websites",
	"en": "International & multilingual web sites",
	"es": "Sitios web internacionales y plurilingües",
	"fr": "Sites Web internationaux et multilingues",
	"hu": "Nemzetközi és többnyelvű weboldalak",
	"pl": "Międzynarodowe & wielojęzyczne witryny",
	"pt": "Sites internacionais e multilíngües",
	"pt-br": "Web sites monolíngues & multilíngues",
	"ro": "Site-uri internationale si multilinguale",
	"ru": "Интернациональные и многоязычные веб-сайты",
	"sv": "Internationella & flerspråkiga webbplatser",
	"uk": "Інтернаціональні і багатомовні веб сайти",
	},
	{
	"url": "/International/articles/serving-xhtml/index",
	"de": "HTML und XHTML ausliefern",
	"en": "Serving HTML & XHTML",
	"es": "Ejecución de HTML & XHTML",
	"it": "Servire HTML e XHTML",
	"pt-br": "Servindo HTML & XHTML",
	"ru": "Обслуживание HTML и XHTML",
	"sv": "Att leverera HTML & XHTML",
	"uk": "Обслуговування HTML та XHTML",
	}
    ]

}


function addTitles (section, list) {
	for (let i=0; i<titles[section].length; i++) {
		let li = document.createElement('li')
		let a = document.createElement('a')
		a.href = titles[section][i].url
		if (rtlSet.has(f.clang)) a.dir = 'rtl'
		if (titles[section][i][f.clang]) {
			a.textContent = titles[section][i][f.clang]
			a.href += '.' + f.clang
			a.className = 'native'
			}
		else { 
			a.textContent = titles[section][i].en
			a.className = 'untranslated'
			}
		li.appendChild(a)
		document.getElementById(list).appendChild(li)
		}
	}
