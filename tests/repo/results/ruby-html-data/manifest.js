var tests = {
	'ruby-styling-001.html': [
	'The ruby elements: rb styling, full markup',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rb elements can be styled when fully marked up.',
	],
	'ruby-styling-003.html': [
	'The ruby elements: rb styling, only start tags',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rb elements can be styled when only start tags are used.',
	],
	'ruby-styling-004.html': [
	'The ruby elements: rb styling, rb,rb,rt,rt format',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rb elements can be styled when all tags are used but all rb elements are grouped together.',
	],
	'ruby-styling-005.html': [
	'The ruby elements: rb styling, rb,rb,rt,rt format, start tags only',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rb elements can be styled when only start tags are used and all rb elements are grouped together.',
	],
	'ruby-styling-006.html': [
	'The ruby elements: rt styling, full markup',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rt elements can be styled when fully marked up.',
	],
	'ruby-styling-007.html': [
	'The ruby elements: rt styling, only start tags',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rt elements can be styled when only start tags are used.',
	],
	'ruby-styling-008.html': [
	'The ruby elements: rt styling, rb,rb,rt,rt format',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rt elements can be styled when all tags are used but all rt elements are grouped together.',
	],
	'ruby-styling-009.html': [
	'The ruby elements: rt styling, rb,rb,rt,rt format, start tags only',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'rt elements can be styled when only start tags are used and all rt elements are grouped together.',
	],
	'ruby-styling-010.html': [
	'The ruby elements: ruby styling, span on ruby base',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	' It is possible to style part of the ruby base text using a span element.',
	],
	'ruby-styling-011.html': [
	'The ruby elements: ruby styling, span on ruby annotation',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	' It is possible to style part of the ruby annotation text using a span element.',
	],
	'ruby-position-001.html': [
	'The ruby elements: ruby position, full markup',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'Ruby annotations appear, by default, alongside the appropriate base text when full markup is used.',
	],
	'ruby-position-002.html': [
	'The ruby elements: ruby position, no rb tag',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'Ruby annotations appear, by default, alongside the appropriate base text when no rb tags are used.',
	],
	'ruby-position-003.html': [
	'The ruby elements: ruby position, only start tags',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'Ruby annotations appear, by default, alongside the appropriate base text when only start tags are used.',
	],
	'ruby-position-004.html': [
	'The ruby elements: ruby position, rb,rb,rt,rt format',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'Ruby annotations appear, by default, alongside the appropriate base text when all tags are used but all rb elements are grouped together.',
	],
	'ruby-position-005.html': [
	'The ruby elements: ruby position, rb,rb,rt,rt format, start tags only',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'Ruby annotations appear, by default, alongside the appropriate base text when only start tags are used and all rb elements are grouped together.',
	],
	'ruby-double-001.html': [
	'The ruby elements: double-sided ruby, mono, one rtc',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of mono-ruby annotations, and only one rtc element, both are placed alongside the base text, and alongside the appropriate base character.',
	],
	'ruby-double-002.html': [
	'The ruby elements: double-sided ruby, mono, 2 rtcs',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of mono-ruby annotations, in two rtc elements, both are placed alongside the base text, and alongside the appropriate base character.',
	],
	'ruby-double-003.html': [
	'The ruby elements: double-sided ruby, mono+group, one rtc',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of ruby annotations, the first mono- the second group-ruby, and one rtc element, both are placed alongside the base text, with mono-ruby alongside the appropriate base character, and group-ruby spanning all.',
	],
	'ruby-double-004.html': [
	'The ruby elements: double-sided ruby, mono+group, two rtcs',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of ruby annotations, the first mono- the second group-ruby, and one rtc element, both are placed alongside the base text, with mono-ruby alongside the appropriate base character, and group-ruby spanning all.',
	],
	'ruby-double-005.html': [
	'The ruby elements: double-sided ruby, group+mono, one rtc',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of ruby annotations, the first group- the other mono-ruby, and one rtc element, both are placed alongside the base text, with mono-ruby alongside the appropriate base character, and group-ruby spanning all.',
	],
	'ruby-double-006.html': [
	'The ruby elements: double-sided ruby, group+mono, two rtcs',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of ruby annotations, the first group- the other mono-ruby, in two rtc elements, both are placed alongside the base text, with mono-ruby alongside the appropriate base character, and group-ruby spanning all.',
	],
	'ruby-double-007.html': [
	'The ruby elements: double-sided ruby, mono+group, nested',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of ruby annotations, the first is mono-ruby in a nested ruby element, the second group-ruby, both are placed alongside the base text, with mono-ruby alongside the appropriate base character, and group-ruby spanning all.',
	],
	'ruby-double-008.html': [
	'The ruby elements: double-sided ruby, mono, rt+rtc',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'If there are two sets of mono-ruby annotations, marked up using rt elements immediately followed by rtc elements, the each annotation is placed alongside the appropriate base character.',
	],
	'ruby-gaps-001.html': [
	'The ruby elements: ruby gaps, interleaved',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'An empty rt element causes a gap above it\'s associated base text in interleaved rb/rt markup.',
	],
	'ruby-gaps-002.html': [
	'The ruby elements: ruby gaps, separated',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
	'An empty rt element causes a gap above it\'s associated base text in markup where all rts appear grouped after all the rbs.',
	],
}
