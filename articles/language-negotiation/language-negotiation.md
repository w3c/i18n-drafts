# Language and Locale Negotiation on the Web

One challenge faced by websites and services on the Web is how to decide on
the most appropriate language and [locale](https://www.w3.org/TR/i18n-glossary#locale) to use when presenting
information to users.

This article outlines some of the considerations and best practices when
deciding how to choose, set, and store a user's locale preference.
It is not a complete recipe: not only will different users have different
preferences but there are choices that developers need to make when
implementing locale negotiation.

## What are language and locale negotiation? How are they the same/different?

**_Language negotiation_** is the process of using various inputs to select between different language
experiences for a given request, session, or user experience. 
Web sites perform language negotiation in order to provide the user with an experience that they understand.

Language negotiation allows software to select the best experience for the user's needs.
Sometimes different languages will have different content or experiences, 
but most often a site or software will have a consistent experience
that is translated ("localized") from a specific source language to support users
with different linguistic or cultural needs.

Localization of content can take different forms.
For example, a site consisting of static files might just choose between different
language versions of each page, while another site might load text into a blank template
from resource bundles (such those employed by GNU gettext or Java's `java.util.ResourceBundle`).

One aspect of language negotiation is that the result is usually a 
[language tag](https://www.w3.org/TR/i18n-glossary/#dfn-language-tag)
that identifies the user's locale.
The language tags used on the Web (and by most software) are defined by
[BCP47](https://rfc-editor.org/bcp/bcp47).

A [locale](https://www.w3.org/TR/i18n-glossary/#dfn-locale) is:
> An identifier (such as a language tag) for a set of international preferences. 
> Usually this identifier indicates the preferred language of the user and 
> possibly includes other information, such as a geographic region (such as a country). 
> A locale is passed in APIs or set in the operating environment to obtain culturally-affected behavior within a system or process.

Developers pass the locale (or set it in the operating environment) when calling 
internationalized APIs used for operations such as loading the localized resources mentioned above.
But they are also use APIs that make the content or data in a system appear or
work in a localized way, such as by formatting dates and numbers, sorting lists,
and many other operations that vary by language or culture.

As a result, language negotiation should really be called **_locale negotiation_**,
because it includes the process that internationalized software uses to match a 
user's [international preferences](https://www.w3.org/TR/i18n-glossary/#dfn-international-preferences)
to the internationalized functionality and localized resources available
in a given piece of software (such as a website).

The negotiated locale is used to select resources (static pages, resource files,
etc.) and to set the locale for internationalization (I18N) APIs such as
`Intl.DateFormat` or `Intl.Collator` in JavaScript.

> **_Example_**
> Consider a web site operated by a non-profit `example.org`.
> They want to offer different language experiences to meet user needs.
> This organization decides that their site experience will serve users
> in North America.
> While other languages are spoken in this region, initially they decide to offer three languages:
> `en` (English), `es` (Spanish), and `fr` (French).
> 
> Using `en`, `es`, or `fr` as the locale in software, however, does not
> produce complete results
> or these locales may produce unexpected results compared to more-specific
> locales that include, for example, region subtags.
> Such regional variations in formatting affect how the software
> presents values such as dates, times, numbers, and so forth,
> which, in turn, affects how users experience the localization:
> 
> | Locale | Locale Description | Formatted Date  | Number | Currency |
> |--------|--------------------|-----------------|--------|----------|
> | en     | English | Jun 28, 2024, 1:24:45 PM | 1,234.56 |$1,234.56 |
> | en-US  | English (United States) | Jun 28, 2024, 1:24:45 PM | 1,234.56 |$1,234.56 |
> | en-CA  | English (Canada) | Jun 28, 2024, 1:24:45 p.m. | 1,234.56 |US$1,234.56 |
> | en-GB  | English (United Kingdom) | 28 Jun 2024, 13:24:45 | 1,234.56 |US$1,234.56 |
> | fr     | French | 28 juin 2024, 13:24:45 | 1 234,56 |1 234,56 $US |
> | fr-CA  | French (Canada) | 28 juin 2024, 13 h 24 min 45 s | 1 234,56 |1 234,56 $ US |
> | fr-FR  | French (France) | 28 juin 2024, 13:24:45 | 1 234,56 |1 234,56 $US |
> | es-419 | Spanish (Latin America) | 28 jun 2024, 1:24:45 p.m. | 1,234.56 |USD 1,234.56 |
> | es     | Spanish | 28 jun 2024, 13:24:45 | 1234,56 |1.234,56 US$ |
> | es-MX  | Spanish (Mexico) | 28 jun 2024, 1:24:45 p.m. | 1,234.56 |USD 1,234.56 |
> | es-ES  | Spanish (Spain) | 28 jun 2024, 13:24:45 | 1234,56 |1.234,56 US$ |
> | es-US  | Spanish (United States) | 28 jun 2024, 1:24:45 p.m. | 1,234.56 |$1,234.56 |


## Determining the User's International Preferences

The first problem in locale negotiation is: 
how do we know what the user's preferences are?

If an application knows exactly who a user is, 
it can often use stored data to know exactly what the user prefers.
Otherwise, locale negotiation depends on whatever information is available
in the session or request to guess at the user's intent.

Guessing at the user's intention might vary depending on many different things.
For example, users might expect a different default currency on a website
intended for use in Germany than on one intended for use in Switzerland,
even if both are localized into German.

Determining the user's international preferences, thus, often 
depends on a hierarchy of "signals".
Some signals are directly related to the user's international preferences
(such as storing the specific locale to use!)
while others are open to interpretation 
(such as the user's geographic location).
These can include:
- values directly indicated by the user, such as:
   - locale preferences stored in the user's profile on the site
   - locale preferences stored in a cookie
   - locale preferences stored in the browser, sesssion, or application
- values from the user's runtime environment, such as:
   - the HTTP `Accept-Language` header (which often matches the user's
     operating system runtime locale)
   - the browser's localization or locale, such as `navigator.language`
     or `navigator.languages`
- values that imply the user's locale preferences, such as:
   - the user's geographic location (perhaps determined from signals
     such as the user's IP address or other networking information)
- the site's configuration
- values in the URL; such as:
   - a subdomain (`en.example.com` vs. `fr.example.com`)
   - a path element (`example.com/en/index.html` vs. `example.com/fr/index.html`)
   - a part of the filename (`index.en.html` vs. `index.fr.html`)
   - a query parameter (`example.com?lang=en` vs. `example.com?lang=fr`)
- or application specific information

> [!NOTE]
> Be careful about making assumptions based on regional or locale information.
> 
> For example, knowing that someone's IP address might be located in a specific
> country (via geoIP detection) does not mean that the person speaks the most
> common languages of that country, or that they prefer local formatting
> conventions of that country.
> It's possible, too, that the location is being spoofed, such as via
> a VPN.
>
> Similarly, a locale should not be used to imply unrelated values,
> such as the currency of a transaction or the time zone of the user.


## Types of User

Locale negotiation is more reliable if the user has provided a strong signal
(such as choosing their locale from a menu).
Once the locale has been determined, it is usually a good idea to store the result
for future use (including for offline interactions, such as push notifications).

The simplest use case is a site or service that does not preserve the user's
information between sessions, has no offline experience, and does not maintain
a user profile.
Such a site might need to negotiate the locale with every request.

Towards the other end of the spectrum is a site or service that 
maintains a user profile (account), 
has an offline experience (such as sending emails to the user),
and attempts to maintain the user's locale preference between sessions.

In general, these use cases (and ones in-between these two extremes)
have three types of user profile:
- **Unrecognized User** - the user does not have a profile or the site
  does not maintain one on the users behalf. There are no cookies or other
  cross-session indicators of the user's preference.
- **Recognized User** - the user has a profile on
  this site and there is some cross-session or other indication to
  associate the request with a specific user profile. However, the user
  has not authenticated themselves. Users in this state can have a measure
  of personalization done for them, but should not be given access to
  account secrets (such as the password, payment information, and the like).
- **Authenticated User** - the user has a profile on this site
  and has authenticated themselves (by logging in or through some other 
  mechanism)

An important special case is that of recognized users for sites that don't maintain
a server-side profile or account: user state, including language preference,
can be stored in the cookies or browser local storage. 
The effect might be similar to having an "authenticated user", 
except that, of course, that the site can't generate offline interactions
and might "forget" the user's preferences between sessions or browsers.

## Site Configuration

A site cannot support every language in the world nor can it support
all of the potential variations of a given language/locale.
To ensure a consistent experience, sites need these concepts:

- **Available Locales** The list of locales that the site will support.
  Only locales appearing in this list can be selected by the locale
  negotiation process.
- **Default Locale**. If none of the user's signals match the available
  list of locales on the site, there needs to be some locale chosen.
  This default is the "ultimate fallback" for the site.

Sites sometimes have different configurations for different sets of users.
For example, a site might be preparing to release a new localization (language) and need
testers to have access to the locale prior to making the locale
available to regular users.
Or a site might make a locale available only to users from certain geographies.
(As of 2024, an example of this is the [US Amazon website](https://www.amazon.com), 
which makes more languages available to users with a non-USA shipping address
than to domestic users.)

Sites also sometimes need to manage more detailed preferences.

For example, suppose a site supports two variations of Spanish: 
`en-ES` (Spanish for Spain) and `es-419` (Spanish for Latin America).
 
Users might provide signals that match an unsupported variety of Spanish.
Suppose a user requests a generic form of Spanish using the tag `es`.
The site might need to indicate which flavor of Spanish (`es-ES` or `es-419`)
is the default Spanish.
 
Suppose a different user requests `es-CR` (Spanish for Costa Rica).
Then the site might need to maintain a mapping for different sorts of Spanish.
Such a configuration might be a map of values or it might use an algorithm.
For example, the site might use the UN M.49 regional containment data
provided as 
[part of CLDR](https://www.unicode.org/cldr/charts/44/supplemental/territory_containment_un_m_49.html)
to discover that `CR` (Costa Rica) is part of `013` (Central America)
which is part of `419` (Latin America), making `es-419` the best match
for a request for `es-CR`.

Another example might be geographic defaults. 
For example, a site might make `es-419` the default for users whose
geoIP location indicates Latin America but use the site default for users
outside that region.

Notice that there is a tension between providing a long list of supported locales
(to give users the ability to tailor API-based formatting presentation)
and providing a short list of available locales (to aid in selection).
In our example above, where the site is available in English, French, and Spanish,
there might only be three localizations, but twenty or more locales that the site _could_
make available.
Deciding which combinations of language and locale to expose to users and how to represent these
depends on many factors.

## Constructing the Algorithm

Hierarchical negotiation is the most common mechanism for performing locale negotiation.
One way to implement this is to work from the least specific signal to the
most specific one and then return the result.

> For example:
>
> 1. Let the return value be the site default.
> 2. If the user's geographic region has a default let return value be that locale.
> 3. If the user has an Accept-Language header
>    i. For each language range in the A-L header
>       a. if the language range matches an available locale's language tag, let return value be that locale
> 4. If the user has a cookie with a locale preference, let return value be that locale
> 5. If the URL contains a (recognized, permitted) locale identifier, let return value be that locale
> 6. If the user is recognized, let return value be the locale in the user's profile
>
> Return the return value.

Notice how the above algorithm might be tailored to weight one item higher
(or lower) in the hierarchy.

The above short description leaves out checking if each language tag is in the 
list of supported locales
and leaves out mapping of values, either of which might affect the outcome.

### What happens when the user logs in?

When a user authenticates (logs in), the user's preferences need to be checked.
If the user's profile contains a locale preference different from the one 
currently negotiated with the user-agent, the stored preference may need to be updated
or the user's preference changed:
  - optionally query the user if they want to change their locale
    (did the currently negotiated locale meet their need?)
  - update the session with the value in their profile
    (either the value currently negotiated or what they had previously)
    
Updating the user's profile helps ensure, for example, that offline communications, 
such as push notifications, emails, or SMS messages, are in the user's preferred locale)

### Why provide locale overrides via the URL?

There are a number of reasons why the URL might need to encode the locale to use.

One important use is to allow testing of the site in a given locale.
This is useful in reproducing issues that only appear in specific locales
without having to change the customer support account's preference.
It is also useful when the locale is not yet available to end users
but it being prepared for production.

Another is that URLs can be shared or used for marketing materials.
By encoding the locale into the URL, you can guarantee that the site
shown is in the same language as some external resource.
For example, if the user was brought to the site by clicking on a display ad in a specific language
or clicked on a link in an email they received from the site.
This can help users of a non-default locale who might also be unrecognized users to
get the right experience.

### What's not included in the locale?

There are a number of values that might be inferred from a locale identifier
but which should be separately maintained.
These include the user's preferred currency (or the currency of a given transaction),
the user's time zone,
and the user's country/jurisdiction (where they actually live, for example).

While locales often contain a country code,
this code does not mean that the user is located in that country
or has a residence in that country.

A country sometimes implies a currency, but care must be taken not to
apply a currency to a numeric value blindly.

Most countries have a single time zone, but the user may not be in that
country.

There can also be local, user, or operating system preferences
that are _related_ to locale.
An example of this is the ability to choose between 12- and 24-hour 
time display.
The locale always provides the default for this value.
But user overrides of the value sometimes need to be propagated separately.

### What if the user doesn't like the results?

When a site offers multiple languages or offers multiple locales
for a given language (or both), 
the result of locale negotiation might not be what the user would have chosen.
When this happens, the user should be provided a convenient control in 
a predictable, visible location to choose the locale for herself.

The result of choosing a locale should be sticky.
Any offline hints (such as cookies) as well as any server-side
user profile should be updated.
In addition, if the site uses URL elements, the page should redirect with
the locale preference added/substituted in the URL.

Sites that "don't remember" a user's choice can be frustrating to use,
as the user might need to navigate a foreign language experience to reach one
that they understand.
