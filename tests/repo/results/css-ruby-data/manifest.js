var tests = {
	'defaults/vertical-support-001.html': [
	'vertical text support',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'[Exploratory test] to determine whether the browser handles vertical text.',
	],
	'defaults/vertical-support-prop-001.html': [
	'vertical text support',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'[Exploratory test] to determine whether the browser handles vertical text.',
	],
	'rubypos/ruby-position-over-001.html': [
	'ruby-position: over',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position: over will make ruby appear over the base in horizontal text.',
	],
	'rubypos/ruby-position-under-001.html': [
	'ruby-position: under',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:under will make ruby appear under the base in horizontal text.',
	],
	'rubypos/ruby-position-intercharacter-001.html': [
	'ruby-position: inter-character',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin annotations appear in vertical columns alongside the base in horizontal text.',
	],
	'rubypos/ruby-position-intercharacter-002.html': [
	'ruby-position: inter-character, tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin non-neutral tone marks appear in the correct relative positions alongside the zhuyin characters in horizontal text.',
	],
	'rubypos/ruby-position-intercharacter-003.html': [
	'ruby-position: inter-character, neutral tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin neutral tone marks appear above the zhuyin characters in horizontal text.',
	],
	'ruby-align-property/ruby-align-start-001.html': [
	'ruby-align: start, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short ruby text will be flush left and set solid.',
	],
	'ruby-align-property/ruby-align-start-002.html': [
	'ruby-align: start, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short base text will be flush left and set solid.',
	],
	'ruby-align-property/ruby-align-center-001.html': [
	'ruby-align: center, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align:center will centre annotations shorter than the base within its box, and set them solid.',
	],
	'ruby-align-property/ruby-align-center-002.html': [
	'ruby-align: center, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: center will centre base text shorter than the annotations within its box, and set it solid.',
	],
	'ruby-align-property/ruby-align-space-between-001.html': [
	'ruby-align: space-between, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side.',
	],
	'ruby-align-property/ruby-align-space-between-002.html': [
	'ruby-align: space-between, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify base text shorter than the annotation within its box, with no gap either side.',
	],
	'ruby-align-property/ruby-align-space-between-003.html': [
	'ruby-align: space-between, long base, latin rt',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side. A single Latin word will be centered.',
	],
	'ruby-align-property/ruby-align-space-between-004.html': [
	'ruby-align: space-between, multiword latin annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with no space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-between-005.html': [
	'ruby-align: space-between, multiword latin annotation (zh)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'If the language of the annotation starts with zh, ruby-align: space-around will center the latin words in an annotation, due to the default style sheet, with no space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-around-001.html': [
	'ruby-align: space-around, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side.',
	],
	'ruby-align-property/ruby-align-space-around-002.html': [
	'ruby-align: space-around, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify base text shorter than the annotation within its box, with a half-character space either side.',
	],
	'ruby-align-property/ruby-align-space-around-003.html': [
	'ruby-align: space-around, long base, latin rt',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side. A single Latin word will be centered.',
	],
	'ruby-align-property/ruby-align-space-around-004.html': [
	'ruby-align: space-around, multiword latin annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-around-005.html': [
	'ruby-align: space-around, multiword latin annotation (zh)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'If the language of the annotation starts with zh, ruby-align: space-around will center the latin words in an annotation, due to the default style sheet, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'collapsed-ruby/ruby-merge-separate-001.html': [
	'ruby-merge: separate',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:separate will render each annotation in the same column as its base text.',
	],
	'collapsed-ruby/ruby-merge-collapse-001.html': [
	'ruby-merge: collapse',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:collapse will render all annotations evenly across the base text.',
	],
	'collapsed-ruby/ruby-merge-collapse-002.html': [
	'ruby-merge: collapse, line break',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:collapse, ruby annotations are kept together with their respective ruby bases.',
	],
	'collapsed-ruby/ruby-merge-auto-001.html': [
	'ruby-merge: auto',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'[Exploratory test] ruby-merge:auto produces a distribution of annotation text across base text as described in JLREQ.',
	],
	'collapsed-ruby/ruby-merge-auto-002.html': [
	'ruby-merge: auto, line break',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:auto, ruby annotations are kept together with their respective ruby bases.',
	],
	'ruby-model/ruby-autohide-001.html': [
	'ruby autohide',
	'http://www.w3.org/TR/css-ruby-1/#autohide',
	'If a ruby annotation has the exact same text content as its base, it is hidden.',
	],
	'rubypos/ruby-position-over-101.html': [
	'ruby-position: over',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position: over will make ruby appear to the right of the base in vertical text.',
	],
	'rubypos/ruby-position-under-101.html': [
	'ruby-position: under',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:under will make ruby appear to the left of the base in vertical text.',
	],
	'rubypos/ruby-position-intercharacter-101.html': [
	'ruby-position: inter-character',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin annotations appear in vertical columns alongside the base in vertical text.',
	],
	'rubypos/ruby-position-intercharacter-102.html': [
	'ruby-position: inter-character, tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin non-neutral tone marks appear in the correct relative positions alongside the zhuyin characters in vertical text.',
	],
	'rubypos/ruby-position-intercharacter-103.html': [
	'ruby-position: inter-character, neutral tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin neutral tone marks appear above the zhuyin characters in vertical text.',
	],
	'ruby-align-property/ruby-align-start-101.html': [
	'ruby-align: start, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short ruby text will be flush left and set solid.',
	],
	'ruby-align-property/ruby-align-start-102.html': [
	'ruby-align: start, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short base text will be flush left and set solid.',
	],
	'ruby-align-property/ruby-align-center-101.html': [
	'ruby-align: center, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align:center will centre annotations shorter than the base within its box, and set them solid.',
	],
	'ruby-align-property/ruby-align-center-102.html': [
	'ruby-align: center, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: center will centre base text shorter than the annotations within its box, and set it solid.',
	],
	'ruby-align-property/ruby-align-space-between-101.html': [
	'ruby-align: space-between, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side.',
	],
	'ruby-align-property/ruby-align-space-between-102.html': [
	'ruby-align: space-between, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify base text shorter than the annotation within its box, with no gap either side.',
	],
	'ruby-align-property/ruby-align-space-between-103.html': [
	'ruby-align: space-between, long base, latin rt (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side. A single Latin word will be centered.',
	],
	'ruby-align-property/ruby-align-space-between-104.html': [
	'ruby-align: space-between, multiword latin annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with no space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-between-105.html': [
	'ruby-align: space-around, multiword latin annotation (zh, v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'If the language of the annotation starts with zh, ruby-align: space-around will center the latin words in an annotation, due to the default style sheet, with no space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-around-101.html': [
	'ruby-align: space-around, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side.',
	],
	'ruby-align-property/ruby-align-space-around-102.html': [
	'ruby-align: space-around, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify base text shorter than the annotation within its box, with a half-character space either side.',
	],
	'ruby-align-property/ruby-align-space-around-103.html': [
	'ruby-align: space-around, long base, latin rt (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side. A single Latin word will be centered.',
	],
	'ruby-align-property/ruby-align-space-around-104.html': [
	'ruby-align: space-around, multiword latin annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'ruby-align-property/ruby-align-space-around-105.html': [
	'ruby-align: space-around, multiword latin annotation (zh, v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'If the language of the annotation starts with zh, ruby-align: space-around will center the latin words in an annotation, due to the default style sheet, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'collapsed-ruby/ruby-merge-separate-101.html': [
	'ruby-merge: separate (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:separate will render each annotation in the same column as its base text.',
	],
	'collapsed-ruby/ruby-merge-collapse-101.html': [
	'ruby-merge: collapse (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:collapse will render all annotations evenly across the base text.',
	],
	'collapsed-ruby/ruby-merge-collapse-102.html': [
	'ruby-merge: collapse, line break (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:collapse, ruby annotations are kept together with their respective ruby bases.',
	],
	'collapsed-ruby/ruby-merge-auto-101.html': [
	'ruby-merge: auto (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'[Exploratory test] ruby-merge:auto produces a distribution of annotation text across base text as described in JLREQ.',
	],
	'collapsed-ruby/ruby-merge-auto-102.html': [
	'ruby-merge: auto, line break (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:auto, ruby annotations are kept together with their respective ruby bases.',
	],
	'ruby-model/ruby-autohide-101.html': [
	'ruby autohide (v)',
	'http://www.w3.org/TR/css-ruby-1/#autohide',
	'If a ruby annotation has the exact same text content as its base, it is hidden.',
	],
	'prefix/ruby-position-over-001.html': [
	'ruby-position: over',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position: over will make ruby appear over the base in horizontal text.',
	],
	'prefix/ruby-position-under-001.html': [
	'ruby-position: under',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:under will make ruby appear under the base in horizontal text.',
	],
	'prefix/ruby-position-intercharacter-001.html': [
	'ruby-position: inter-character',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin annotations appear in vertical columns alongside the base in horizontal text.',
	],
	'prefix/ruby-position-intercharacter-002.html': [
	'ruby-position: inter-character, tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin non-neutral tone marks appear in the correct relative positions alongside the zhuyin characters in horizontal text.',
	],
	'prefix/ruby-position-intercharacter-003.html': [
	'ruby-position: inter-character, neutral tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin neutral tone marks appear above the zhuyin characters in horizontal text.',
	],
	'prefix/ruby-align-start-001.html': [
	'ruby-align: start, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short ruby text will be flush left and set solid.',
	],
	'prefix/ruby-align-start-002.html': [
	'ruby-align: start, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short base text will be flush left and set solid.',
	],
	'prefix/ruby-align-center-001.html': [
	'ruby-align: center, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align:center will centre annotations shorter than the base within its box, and set them solid.',
	],
	'prefix/ruby-align-center-002.html': [
	'ruby-align: center, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: center will centre base text shorter than the annotations within its box, and set it solid.',
	],
	'prefix/ruby-align-space-between-001.html': [
	'ruby-align: space-between, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side.',
	],
	'prefix/ruby-align-space-between-002.html': [
	'ruby-align: space-between, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify base text shorter than the annotation within its box, with no gap either side.',
	],
	'prefix/ruby-align-space-between-003.html': [
	'ruby-align: space-between, long base, latin rt',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side. A single Latin word will be centered.',
	],
	'prefix/ruby-align-space-between-004.html': [
	'ruby-align: space-between, multiword latin annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with no space either side. Latin words are not letter-spaced.',
	],
	'prefix/ruby-align-space-around-001.html': [
	'ruby-align: space-around, long base',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side.',
	],
	'prefix/ruby-align-space-around-002.html': [
	'ruby-align: space-around, long annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify base text shorter than the annotation within its box, with a half-character space either side.',
	],
	'prefix/ruby-align-space-around-003.html': [
	'ruby-align: space-around, long base, latin rt',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side. A single Latin word will be centered.',
	],
	'prefix/ruby-align-space-around-004.html': [
	'ruby-align: space-around, multiword latin annotation',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'prefix/ruby-merge-separate-001.html': [
	'ruby-merge: separate',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:separate will render each annotation in the same column as its base text.',
	],
	'prefix/ruby-merge-collapse-001.html': [
	'ruby-merge: collapse',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:collapse will render all annotations evenly across the base text.',
	],
	'prefix/ruby-merge-collapse-002.html': [
	'ruby-merge: collapse, line break',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:collapse, ruby annotations are kept together with their respective ruby bases.',
	],
	'prefix/ruby-merge-auto-001.html': [
	'ruby-merge: auto',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'[Exploratory test] ruby-merge:auto produces a distribution of annotation text across base text as described in JLREQ.',
	],
	'prefix/ruby-merge-auto-002.html': [
	'ruby-merge: auto, line break',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:auto, ruby annotations are kept together with their respective ruby bases.',
	],
	'prefix/ruby-autohide-001.html': [
	'ruby autohide',
	'http://www.w3.org/TR/css-ruby-1/#autohide',
	'If a ruby annotation has the exact same text content as its base, it is hidden.',
	],
	'prefix/ruby-position-over-101.html': [
	'ruby-position: over',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position: over will make ruby appear to the right of the base in vertical text.',
	],
	'prefix/ruby-position-under-101.html': [
	'ruby-position: under',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:under will make ruby appear to the left of the base in vertical text.',
	],
	'prefix/ruby-position-intercharacter-101.html': [
	'ruby-position: inter-character',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin annotations appear in vertical columns alongside the base in vertical text.',
	],
	'prefix/ruby-position-intercharacter-102.html': [
	'ruby-position: inter-character, tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin non-neutral tone marks appear in the correct relative positions alongside the zhuyin characters in vertical text.',
	],
	'prefix/ruby-position-intercharacter-103.html': [
	'ruby-position: inter-character, neutral tones',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-position:intercharacter will make zhuyin neutral tone marks appear above the zhuyin characters in vertical text.',
	],
	'prefix/ruby-align-start-101.html': [
	'ruby-align: start, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short ruby text will be flush left and set solid.',
	],
	'prefix/ruby-align-start-102.html': [
	'ruby-align: start, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: start will make ruby content aligned with the start edge of its box. Short base text will be flush left and set solid.',
	],
	'prefix/ruby-align-center-101.html': [
	'ruby-align: center, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align:center will centre annotations shorter than the base within its box, and set them solid.',
	],
	'prefix/ruby-align-center-102.html': [
	'ruby-align: center, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: center will centre base text shorter than the annotations within its box, and set it solid.',
	],
	'prefix/ruby-align-space-between-101.html': [
	'ruby-align: space-between, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side.',
	],
	'prefix/ruby-align-space-between-102.html': [
	'ruby-align: space-between, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify base text shorter than the annotation within its box, with no gap either side.',
	],
	'prefix/ruby-align-space-between-103.html': [
	'ruby-align: space-between, long base, latin rt (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-between will justify annotations shorter than the base within its box, with no gap either side. A single Latin word will be centered.',
	],
	'prefix/ruby-align-space-between-104.html': [
	'ruby-align: space-between, multiword latin annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with no space either side. Latin words are not letter-spaced.',
	],
	'prefix/ruby-align-space-around-101.html': [
	'ruby-align: space-around, long base (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side.',
	],
	'prefix/ruby-align-space-around-102.html': [
	'ruby-align: space-around, long annotation (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify base text shorter than the annotation within its box, with a half-character space either side.',
	],
	'prefix/ruby-align-space-around-103.html': [
	'ruby-align: space-around, long base, latin rt (v)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify annotations shorter than the base within its box, with a half-character space either side. A single Latin word will be centered.',
	],
	'prefix/ruby-align-space-around-104.html': [
	'ruby-align: space-around, multiword latin annotation (vt)',
	'http://www.w3.org/TR/css-ruby-1/#rubypos',
	'ruby-align: space-around will justify the latin words in an annotation, with a small amount of space either side. Latin words are not letter-spaced.',
	],
	'prefix/ruby-merge-separate-101.html': [
	'ruby-merge: separate (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:separate will render each annotation in the same column as its base text.',
	],
	'prefix/ruby-merge-collapse-101.html': [
	'ruby-merge: collapse (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'ruby-merge:collapse will render all annotations evenly across the base text.',
	],
	'prefix/ruby-merge-collapse-102.html': [
	'ruby-merge: collapse, line break (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:collapse, ruby annotations are kept together with their respective ruby bases.',
	],
	'prefix/ruby-merge-auto-101.html': [
	'ruby-merge: auto (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'[Exploratory test] ruby-merge:auto produces a distribution of annotation text across base text as described in JLREQ.',
	],
	'prefix/ruby-merge-auto-102.html': [
	'ruby-merge: auto, line break (v)',
	'http://www.w3.org/TR/css-ruby-1/#collapsed-ruby',
	'When a line break occurs between base characters while applying ruby-merge:auto, ruby annotations are kept together with their respective ruby bases.',
	],
	'prefix/ruby-autohide-101.html': [
	'ruby autohide (v)',
	'http://www.w3.org/TR/css-ruby-1/#autohide',
	'If a ruby annotation has the exact same text content as its base, it is hidden.',
	],
}
