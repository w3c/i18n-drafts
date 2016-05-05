var tests = {
	'css3-counter-styles-101.html': [
	'arabic-indic, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: arabic-indic produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-102.html': [
	'arabic-indic, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: arabic-indic produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-103.html': [
	'arabic-indic, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:  arabic-indic produces a suffix per the spec.',
	],
	'css3-counter-styles-006.html': [
	'armenian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: armenian produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-007.html': [
	'armenian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: armenian produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-008.html': [
	'armenian, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: armenian produces counter values outside its ranges using its fallback style.',
	],
	'css3-counter-styles-009.html': [
	'armenian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: armenian will produce a suffix per the spec.',
	],
	'css3-counter-styles-107.html': [
	'upper-armenian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-armenian produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-108.html': [
	'upper-armenian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-armenian produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-109.html': [
	'upper-armenian, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-armenian produces numbers in the fallback counter style above the limit per the spec.',
	],
	'css3-counter-styles-110.html': [
	'upper-armenian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-armenian produces a suffix per the spec.',
	],
	'css3-counter-styles-111.html': [
	'lower-armenian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-armenian produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-112.html': [
	'lower-armenian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-armenian produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-114.html': [
	'lower-armenian, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-armenian produces numbers in the fallback counter style above the limit per the spec.',
	],
	'css3-counter-styles-115.html': [
	'lower-armenian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-armenian produces a suffix per the spec.',
	],
	'css3-counter-styles-116.html': [
	'bengali, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:bengali produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-117.html': [
	'bengali, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: bengali produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-118.html': [
	'bengali, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: bengali produces a suffix per the spec.',
	],
	'css3-counter-styles-158.html': [
	'cambodian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cambodian produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-159.html': [
	'cambodian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cambodian produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-160.html': [
	'cambodian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cambodian produces a suffix per the spec.',
	],
	'css3-counter-styles-161.html': [
	'khmer, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: khmer produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-162.html': [
	'khmer, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: khmer produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-163.html': [
	'khmer, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: khmer produces a suffix per the spec.',
	],
	'css3-counter-styles-001.html': [
	'cjk-decimal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-decimal produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-004.html': [
	'cjk-decimal, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-decimal produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-005.html': [
	'cjk-decimal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-decimal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-119.html': [
	'devanagari, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:devanagari produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-120.html': [
	'devanagari, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: devanagari produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-121.html': [
	'devanagari, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: devanagari produces a suffix per the spec.',
	],
	'css3-counter-styles-010.html': [
	'georgian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: georgian produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-011.html': [
	'georgian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: georgian produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-012.html': [
	'georgian, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: georgian produces numbers in the fallback counter style above the limit per the spec.',
	],
	'css3-counter-styles-014.html': [
	'georgian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: georgian produces a suffix per the spec.',
	],
	'css3-counter-styles-122.html': [
	'gujarati, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:gujarati produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-123.html': [
	'gujarati, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: gujarati produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-124.html': [
	'gujarati, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: gujarati produces a suffix per the spec.',
	],
	'css3-counter-styles-125.html': [
	'gurmukhi, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:gurmukhi produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-126.html': [
	'gurmukhi, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: gurmukhi produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-127.html': [
	'gurmukhi, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: gurmukhi produces a suffix per the spec.',
	],
	'css3-counter-styles-015.html': [
	'hebrew, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: hebrew produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-016.html': [
	'hebrew, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: hebrew produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-016a.html': [
	'hebrew, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: hebrew produces numbers in the fallback counter style above the limit per the spec.',
	],
	'css3-counter-styles-017.html': [
	'hebrew, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: hebrew produces a suffix per the spec.',
	],
	'css3-counter-styles-128.html': [
	'kannada, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:kannada produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-129.html': [
	'kannada, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: kannada produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-130.html': [
	'kannada, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: kannada produces a suffix per the spec.',
	],
	'css3-counter-styles-131.html': [
	'lao, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:lao produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-132.html': [
	'lao, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lao produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-133.html': [
	'lao, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lao produces a suffix per the spec.',
	],
	'css3-counter-styles-134.html': [
	'malayalam, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:malayalam produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-135.html': [
	'malayalam, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: malayalam produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-136.html': [
	'malayalam, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: malayalam produces a suffix per the spec.',
	],
	'css3-counter-styles-137.html': [
	'mongolian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:mongolian produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-138.html': [
	'mongolian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: mongolian produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-139.html': [
	'mongolian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: mongolian produces a suffix per the spec.',
	],
	'css3-counter-styles-140.html': [
	'myanmar, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:myanmar produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-141.html': [
	'myanmar, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: myanmar produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-142.html': [
	'myanmar, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: myanmar produces a suffix per the spec.',
	],
	'css3-counter-styles-143.html': [
	'oriya, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:oriya produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-144.html': [
	'oriya, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: oriya produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-145.html': [
	'oriya, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: oriya produces a suffix per the spec.',
	],
	'css3-counter-styles-104.html': [
	'persian, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: persian produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-105.html': [
	'persian, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: persian produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-106.html': [
	'persian, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:  persian produces a suffix per the spec.',
	],
	'css3-counter-styles-146.html': [
	'tamil, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:tamil produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-147.html': [
	'tamil, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: tamil produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-148.html': [
	'tamil, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: tamil produces a suffix per the spec.',
	],
	'css3-counter-styles-149.html': [
	'telugu, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:telugu produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-150.html': [
	'telugu, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: telugu produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-151.html': [
	'telugu, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: telugu produces a suffix per the spec.',
	],
	'css3-counter-styles-152.html': [
	'thai, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:thai produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-153.html': [
	'thai, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: thai produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-154.html': [
	'thai, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: thai produces a suffix per the spec.',
	],
	'css3-counter-styles-155.html': [
	'tibetan, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:tibetan produces numbers up to 9 per the spec.',
	],
	'css3-counter-styles-156.html': [
	'tibetan, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: tibetan produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-157.html': [
	'tibetan, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: tibetan produces a suffix per the spec.',
	],
	'css3-counter-styles-019.html': [
	'lower-roman, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: lower-roman produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-020.html': [
	'lower-roman, 10-3999',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: lower-roman produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-021.html': [
	'lower-roman, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-roman produces numbers in the fallback counter style above the limit per the spec',
	],
	'css3-counter-styles-022.html': [
	'lower-roman, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: lower-roman produces a suffix per the spec.',
	],
	'css3-counter-styles-023.html': [
	'upper-roman, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: upper-roman produces numbers up to 9 items per the spec.',
	],
	'css3-counter-styles-024.html': [
	'upper-roman, 10-3999',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style: upper-roman produces numbers after 9 items per the spec.',
	],
	'css3-counter-styles-025.html': [
	'upper-roman, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-roman produces numbers in the fallback counter style above the limit per the spec',
	],
	'css3-counter-styles-026.html': [
	'upper-roman, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: upper-roman produces a suffix per the spec.',
	],
	'css3-counter-styles-027.html': [
	'lower-greek, simple',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to lower-greek will produce list numbering for the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-028.html': [
	'lower-greek, extended',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to lower-greek will produce list numbering after the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-029.html': [
	'lower-greek, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to lower-greek will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-030.html': [
	'hiragana, simple',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana will produce list numbering for the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-031.html': [
	'hiragana, extended',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana will produce list numbering after the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-032.html': [
	'hiragana, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-033.html': [
	'hiragana-iroha, simple',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana-iroha will produce list numbering for the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-034.html': [
	'hiragana-iroha, extended',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana-iroha will produce list numbering after the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-035.html': [
	'hiragana-iroha, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to hiragana-iroha will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-036.html': [
	'katakana, simple',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana will produce list numbering for the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-037.html': [
	'katakana, extended',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana will produce list numbering after the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-038.html': [
	'katakana, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-039.html': [
	'katakana-iroha, simple',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana-iroha will produce list numbering for the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-040.html': [
	'katakana-iroha, extended',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana-iroha will produce list numbering after the basic alphabet as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-041.html': [
	'katakana-iroha, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-alphabetic',
	'Setting list-style-type to katakana-iroha will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-042.html': [
	'japanese-informal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-informal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-043.html': [
	'japanese-informal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-informal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-045.html': [
	'japanese-informal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to japanese-informal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-046.html': [
	'japanese-informal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-informal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-047.html': [
	'japanese-formal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-formal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-048.html': [
	'japanese-formal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-formal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-050.html': [
	'japanese-formal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to japanese-formal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-051.html': [
	'japanese-formal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to japanese-formal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-052.html': [
	'korean-hangul-formal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hangul-formal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-053.html': [
	'korean-hangul-formal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hangul-formal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-055.html': [
	'korean-hangul-formal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to korean-hangul-formal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-056.html': [
	'korean-hangul-formal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hangul-formal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-057.html': [
	'korean-hanja-informal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-informal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-058.html': [
	'korean-hanja-informal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-informal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-060.html': [
	'korean-hanja-informal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to korean-hanja-informal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-061.html': [
	'korean-hanja-informal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-informal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-062.html': [
	'korean-hanja-formal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-formal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-063.html': [
	'korean-hanja-formal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-formal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-065.html': [
	'korean-hanja-formal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to korean-hanja-formal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-066.html': [
	'korean-hanja-formal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to korean-hanja-formal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-071.html': [
	'simp-chinese-informal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-informal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-072.html': [
	'simp-chinese-informal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-informal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-074.html': [
	'simp-chinese-informal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to simp-chinese-informal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-075.html': [
	'simp-chinese-informal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-informal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-076.html': [
	'simp-chinese-formal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-formal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-077.html': [
	'simp-chinese-formal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-formal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-079.html': [
	'simp-chinese-formal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to simp-chinese-formal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-080.html': [
	'simp-chinese-formal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to simp-chinese-formal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-081.html': [
	'trad-chinese-informal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-informal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-082.html': [
	'trad-chinese-informal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-informal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-084.html': [
	'trad-chinese-informal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to trad-chinese-informal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-085.html': [
	'trad-chinese-informal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-informal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-086.html': [
	'trad-chinese-formal, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-formal will produce list of up to 9 items numbering as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-087.html': [
	'trad-chinese-formal, 10-9999',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-formal will produce list numbering after 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-089.html': [
	'trad-chinese-formal, negative',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'With list-style-type set to trad-chinese-formal, negative list markers will be rendered according to the rules described.',
	],
	'css3-counter-styles-090.html': [
	'trad-chinese-formal, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'Setting list-style-type to trad-chinese-formal will produce a suffix as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-201.html': [
	'cjk-earthly-branch, 0-12',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:cjk-earthly-branch produces numbers up to 12 per the spec.',
	],
	'css3-counter-styles-202.html': [
	'cjk-earthly-branch, 13+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-earthly-branch produces numbers after 12 per the spec.',
	],
	'css3-counter-styles-203.html': [
	'cjk-earthly-branch, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-earthly-branch produces a suffix per the spec.',
	],
	'css3-counter-styles-204.html': [
	'cjk-heavenly-stem, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type:cjk-heavenly-stem produces numbers up to 12 per the spec.',
	],
	'css3-counter-styles-205.html': [
	'cjk-heavenly-stem, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-heavenly-stem produces numbers after 9 per the spec.',
	],
	'css3-counter-styles-206.html': [
	'cjk-heavenly-stem, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#simple-numeric',
	'list-style-type: cjk-heavenly-stem produces a suffix per the spec.',
	],
	'css3-counter-styles-044.html': [
	'japanese-informal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: japanese-informal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-049.html': [
	'japanese-formal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: japanese-formal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-054.html': [
	'korean-hangul-formal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: korean-hangul-formal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-059.html': [
	'korean-hanja-informal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: korean-hanja-informal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-064.html': [
	'korean-hanja-formal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: korean-hanja-formal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-073.html': [
	'simp-chinese-informal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: simp-chinese-informal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-078.html': [
	'simp-chinese-formal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: simp-chinese-formal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-083.html': [
	'trad-chinese-informal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: trad-chinese-informal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-088.html': [
	'trad-chinese-formal, outside range',
	'http://www.w3.org/TR/css-counter-styles-3/#complex-cjk',
	'[Exploratory] list-style-type: trad-chinese-formal produces counter values outside its range without using the prescribed fallback style.',
	],
	'css3-counter-styles-068.html': [
	'ethiopic-numeric, 0-9',
	'http://www.w3.org/TR/css-counter-styles-3/#ethiopic-numeric-counter-style',
	'Setting list-style-type to ethiopic-numeric will produce numbering for a list of up to 9 items as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-069.html': [
	'ethiopic-numeric, 10+',
	'http://www.w3.org/TR/css-counter-styles-3/#ethiopic-numeric-counter-style',
	'Setting list-style-type to ethiopic-numeric will produce numbering for a list of items over 9 as described in the CSS3 Counter Styles module.',
	],
	'css3-counter-styles-070.html': [
	'ethiopic-numeric, suffix',
	'http://www.w3.org/TR/css-counter-styles-3/#ethiopic-numeric-counter-style',
	'Setting list-style-type to ethiopic-numeric will produce a suffix as described in the CSS3 Counter Styles module.',
	],
}
