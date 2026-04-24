# Transliteration vs. translation vs. transcription

Transliteration, translation, and transcription solve different problems, and choosing the wrong one can quietly damage usability and trust.

It is important to know when to use each one, how to store the data, and how to design search behavior.

## The three concepts

### Translation

Usually, you should translate names only when there is a strong convention or an explicit editorial policy for doing so.

Translation conveys meaning from one language to another. For example, “White House” is translated to “白宫” in Chinese.

For names, translation is not always inappropriate. When product teams rely on machine processes or try to localize every string, mistakes sometimes happen. A person named “Grace” should not become the equivalent of “grace” in another language.

A city, institution, or title may be different, because some proper nouns do have established translated forms.

### Transliteration

Transliteration maps characters from one script to another, with the goal of preserving the written form as systematically as possible. For example, the Russian word Москва can be transliterated to Moskva.

Transliteration answers the question, “How do I represent this spelling in another script?” It does not primarily aim to preserve pronunciation or meaning.

This matters because multiple transliteration systems may exist for the same source script. The result can vary depending on whether you prioritize linguistic accuracy, passport conventions, library standards, or user familiarity.

### Transcription

Transcription represents how something sounds.

For example, Mandarin Chinese may be represented using pinyin, which is often treated as a romanization system with a strong phonetic component.

Japanese katakana is commonly used to transcribe foreign names and terms into Japanese sound patterns

Transcription is sound-focused, and answers the question, “How should this be pronounced?”

It is often useful for accessibility, TTS support, language learning, voice interfaces, and pronunciation hints.

## Why people confuse them

The confusion usually comes from romanization.

Romanization can be transliteration or transcription. People then start using “translation” as a catch-all for any cross-language transformation, which leads to poor decisions in data models and UI labels.

Names make this worse. A user may have:

* a legal name in one script
* a preferred display name in another script
* a common Latin-script spelling for travel or payments
* a pronunciation guide for customer support or speech systems

Treating all of that as one field called “translated name” often leads to errors.

## Identity first

For names, the first principle is simple: preserve the original form whenever possible.

The original script form is often the most authoritative representation of a person, place, or organization. That does not mean it should always be the only visible form. It means it should be stored distinctly and treated as primary data.

A practical data model for names often benefits from separate fields for:

* original form
* preferred display form for a given locale
* transliterated form
* pronunciation or transcription data
* aliases

This separation lets the UI choose the right representation without destroying the original information.

For example, a Japanese user named 大野美咲 may want:

* original name: 大野美咲
* Latin-script form for travel or support contexts: Misaki Ono
* pronunciation guide for non-Japanese staff: something closer to a phonetic aid

These are different needs. They should not be squeezed into one transformed string.

## A practical framework

When dealing with names, search, and fallback, ask these questions.

### What is the user trying to do?

* Identify a person or place?
* Pronounce a name?
* Read content in an unfamiliar script?
* Match records across systems?

The answer determines whether you need translation, transliteration, transcription, or some combination.

### What is the authoritative source form?

Store it. Do not overwrite it with a transformed version.

### Which form should be displayed by default?

Choose based on locale, audience, and context. A map, a passport form, a social profile, and a customer support screen may need different defaults.

## Takeaway

Translation preserves meaning, transliteration preserves script-level correspondence, and transcription preserves sound.

In multilingual products, especially around names, search, and fallback, that distinction affects whether users can find things, recognize themselves, trust the interface, and complete tasks without friction.

The most reliable approach is to preserve original forms, model alternative forms explicitly, design search to connect them intelligently, and define fallback behavior on purpose. It will make the product feel more accurate, more respectful, and more usable across languages and scripts.

## Further reading

* [Internationalization techniques: Authoring web pages](https://www.w3.org/International/techniques/authoring-html)
