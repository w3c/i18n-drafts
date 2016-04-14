var tests = {
	'q-001.html': [
	'one q',
	'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
	'Text inside a q element will be rendered with quotation marks.',
	],
	'q-002.html': [
	'nested qs',
	'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
	'Text in nested q elements will be rendered with nested quotation marks.',
	],
	'q-003.html': [
	'nested qs, difference?',
	'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
	'Text in nested q elements are rendered with different nested quotation marks.',
	],
	'q-004.html': [
	'triple-nested qs',
	'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
	'Text in triple-nested q elements are rendered with nested quotation marks.',
	],
	'q-005.html': [
	'triple-nested qs variations',
	'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
	'[Exploratory test] Text in triple-nested q elements are rendered such that the inner-most nested quotation marks are the same as the outer-most.',
	],
	'q-lang-001.html': [
	'q + lang',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'The browser uses different quotation marks when the lang tag is set.',
	],
	'q-lang-002.html': [
	'q default marks',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'The browser uses the quotation marks specified in the HTML5 spec when no language information is available.',
	],
	'q-lang-003.html': [
	'q + lang by locale',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'The browser uses quotation marks per language as specified by the HTML5 spec.',
	],
	'q-html-multilingual-nesting-001.html': [
	'quote in other lang (html5)',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'Whenever the language changes, the quotes change to the new language. So a simple japanese quote in an English paragraph is surrounded by Japanese quotation marks.',
	],
	'q-html-multilingual-nesting-002.html': [
	'quote inside text in other lang (html)',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'Whenever the language changes, the quotes change to the new language. So a japanese quote inside Japanese content within an English paragraph is surrounded by Japanese quotation marks.',
	],
	'q-html-multilingual-nesting-003.html': [
	'languages A(A(B)) (html)',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'Whenever the language changes, the quotes change to the new language. So a japanese quote inside an English quote within an English paragraph is surrounded by Japanese quotation marks, but the English quote is surrounded by English marks.',
	],
	'q-html-multilingual-nesting-004.html': [
	'languages (A(B(B))',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'Whenever the language changes, the quotes change to the new language. So a  quote inside an Japanese quote within an English paragraph is surrounded by second-level Japanese quotation marks, and the outer (Japanese) quote is surrounded by first-level Japanese marks.',
	],
	'q-multilingual-nesting-001.html': [
	'quote in other lang',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'[Exploratory test] The browser applies quotation marks relevant to the language outside the first level of quotes when a simple quote in another language appears in a sentence.',
	],
	'q-multilingual-nesting-002.html': [
	'quote inside text in other lang',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'[Exploratory test] The browser applies quotation marks relevant to the language outside the first level of quotes when a simple quote appears in an inline text in another language.',
	],
	'q-multilingual-nesting-003.html': [
	'languages A(A(B))',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'[Exploratory test] The browser applies quotation marks relevant to the language outside the first level of quotes when a quote contains an inner quote in another language.',
	],
	'q-multilingual-nesting-004.html': [
	'languages (A(B(B))',
	'https://www.w3.org/TR/html5/rendering.html#quotes',
	'[Exploratory test] The browser applies quotation marks relevant to the language outside the first level of quotes when a quote in another language contains a quote inside it.',
	],
}
