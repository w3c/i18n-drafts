# Language and Locale Negotiation on the Web

One challenge faced by websites and services on the Web is how to present
users with the most appropriate language and [locale](https://www.w3.org/TR/i18n-glossary#locale) to use when presenting
information to users.

This article outlines some of the considerations and best practices when
deciding how to choose, set, and store a user's locale preference.
It is not a complete recipe: different users will have different
preferences and there are choices that developers need to make when
implementing locale negotiation.

## What is locale negotiation?

Sites perform language negotiation in order to provide the user
with an experience that they understand.

In the most general terms, locale negotiation is the process that internationalized
software uses to match a user's [international preferences](https://www.w3.org/TR/i18n-glossary/#dfn-international-preferences)
to the internationalized functionality and localized resources available
in a given piece of software (such as a website).

On the one hand, this entails selecting the best set of translated (localized) set of resources
for the user's needs.
For example, a site consisting of static files might just choose between different
language versions of each page, while another site might load text into a blank template
from resource bundles (such those employed by GNU gettext or Java's `java.util.ResourceBundle`).

On the other hand, locale negotiation is also needed to allow systems to call internationalized APIs, 
used for operations such as by formatting dates and numbers or for sorting lists.

The negotiated locale is used to select resources (static pages, resource files,
etc.) and to set the locale for internationalization (I18N) APIs such as
`Intl.DateFormat` or `Intl.Collator` in JavaScript.

> **_Example_**
> Consider a web site operated by a non-profit `example.org`.
> They want to offer different language experiences to meet user needs.
> This organization decides that their site experience will serve users
> in North America, so initially, they offer three languages:
> `en` (English), `es` (Spanish), and `fr` (French).
> 
> Using `en`, `es`, or `fr` as the locale in software, however, does not
> produce complete results.
> For example, regional variations in formatting will affect how the software
> presents values such as dates, times, numbers, and so forth:
> 
> | Locale | Locale Description | Formatted Value  |
> |===|===|===|
> | en-US  | US English         | Jun 27, 2024, 1:17:36 PM |
> | en-CA  | Canadian English   | Jun 27, 2024, 1:17:36 p.m. |
> | en-GB  | UK English         | 27 Jun 2024, 13:17:36 |
> | fr-CA  | Canadian French    | 27 juin 2024, 13 h 17 min |
> | fr-FR  | French (France)    | 27 juin 2024, 13:17:36 |
> | es-419 | Latin American Spanish | 1,234.56 |
> | es-ES  | Iberian Spanish    | 1234,56 |


## Inputs

Language negotiation generally uses a hierarchy of "signals".
Depending on the type of user and the user's authentication state there
can be different hierarchies used by the language negotiation process.

These signals can include:
- the HTTP `Accept-Language` header
- the user's geographic location (often determined from their IP address)
- the site's configuration
- values stored in a cookie
- values stored in the user's profile on the site
- values in the URL; these might be:
   - a subdomain (`en.example.com` vs. `fr.example.com`)
   - a path element (`example.com/en/index.html` vs. `example.com/fr/index.html`)
   - a part of the filename (`index.en.html` vs. `index.fr.html`)
   - a query parameter (`example.com?lang=en` vs. `example.com?lang=fr`)
- application specific information

## Types of User

The simplest use case is a site or service that does not persist the user's
information between sessions, has no offline experience, and does not maintain
a user profile.
Such a site might even negotiate the locale with every request.

Towards the other end of the spectrum is a site or service that maintains a user profile
(account), has an offline experience (such as sending emails to the user),
and attempts to maintain the user's locale preference between sessions.

In general, these use cases (and ones in-between these two extremes)
have three types of user profile:
- **Unrecognized User** - the user does not have a profile or the site
  does not maintain one on the user's behalf. There are no cookies or other
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
  Only locales appearing in this list can be selected by the language
  negotiation process.
  
> [!NOTE]
> Note that sites may have some locales that are available only to a 
> specific set of users.
> For example, a site might "stage" a new locale or language and need
> testers to have access to the language prior to making the language
> available to other users.
> Or a site might make a language available only to users from certain
> geographies.
> (As of 2024, an example of this is the [US Amazon website](https://www.amazon.com), 
> which makes
> more languages available to users with a non-USA shipping address
> than to domestic users.)

- **Default Locale**. If none of the user's signals match the available
  list of locales on the site, there needs to be some language chosen.
  This default is the "ultimate fallback" for the site.

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

## Locale Negotiation

Hierarchical negotiation is one mechanism for performing language negotiation.
One way to implement this is to work from the least specific signal to the
most specific one and then return the result.

> For example:
>
> 1. Let the return value be the site default.
> 2. If the user's geographic region has a default let return value be that language.
> 3. If the user has an Accept-Language header
>    i. For each language in the A-L header
>       a. if the language matches an available language, let return value be that language
> 4. If the user has a cookie with a language preference, let return value be that language
> 5. If the URL contains a language, let return value be that language
> 6. If the user is recognized, let return value be the language in the user's profile
>
> Return the return value.

Notice how the above algorithm might be tailored to weight one item higher
(or lower) in the hierarchy.

The above short description leaves out checking if each language tag is in the 
list of supported locales
and leaves out mapping of values, either of which might affect the outcome.

### What happens when the user logs in?

When a user authenticates (logs in), the user's preferences need to be checked.
If the user's profile contains a language preference different from the one 
currently negotiated with the user-agent, it may need to be updated:
  - optionally query the user if they want to change their language
    (did the currently negotiated language meet their need?)
  - update the session with the value in their profile
    (either the value currently negotiated or what they had previously)
    
Updating the user's profile helps ensure, for example, that offline communications, 
such as push notifications, emails, or SMS messages, are in the user's preferred language)

### Why provide locale overrides via the URL?

There are a number of reasons why the URL might need to encode the language/locale
to use.

One important use is to allow testing of the site in a given language.
This is useful in reproducing issues that only appear in specific locales
without having to change the customer support account's preference.
It is also useful when the locale is not yet available to end users
but it being prepared for production.

Another is that URLs can be shared or used for marketing materials.
By encoding the language into the URL, you can guarantee that the site
shown is in the same language as (for example) a display ad or email being
linked from.
This can help users of non-default languages who are unrecognized users
get the right experience.

### Why locale and not just language negotiation?

The user's locale influences display and processing with more detail than
just a language. 
The ability to format numbers, dates, and messages or the ability to sort
lists depends on the user's locale.

This also explains why many sites provide a mapping from a more general
form of a language to a specific locale (such as the `es-CR` vs. `es-419`
example given earlier).
It must always be possible to create a _consistent_ user experience.

### What's not included in the locale?

There are a number of values that might be inferred from a locale identifier
but which should be separately maintained.
These include the user's preferred currency (or the currency of a given transaction),
the user's time zone,
and the user's country.

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
the result of language negotiation might not be what the user would have
chosen.
When this happens, the user should be provided a convenient control in 
a predictable, visible location to choose the locale for herself.

The result of choosing a locale should be sticky.
Any offline hints (such as cookies) as well as any server-side
user profile should be updated.
In addition, if the site uses URL elements, the page should redirect with
the language preference added/substituted in the URL.

Sites that "don't remember" a user's choice can be frustrating to use,
as the user might need to navigate a foreign language experience to reach one
that they understand.
