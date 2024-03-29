# Language and Locale Negotiation on the Web

One challenge faced by websites and services on the Web is how to present
users with the most appropriate language and [=locale=] to use when presenting
information to users.

This tutorial outlines some of the considerations and best practices when
deciding how to choose, set, and store a user's locale preference.
It is not a complete recipe: different users will have different
preferences and there are choices that developers need to make when
implementing locale negotiation.

## Types of User

The simplest use case is a site or service that does not persist the user's
information between sessions, has no offline experience, and does not maintain
a user profile.
Such a site might even negotiate the locale with every request.

The most complex use case is a site or service that maintains a user profile
(account), has an offline experience (such as sending emails to the user),
and attempts to maintain the user's locale preference between sessions.

In general, these use cases (and ones in-between these two extremes)
have three types of user profile:
- **Unrecognized User** - the user does not have a profile or the site
  does not maintain one on the user's behalf. There are no cookies or other
  cross-session indicators of the user's preference.
- **Recognized and Authenticated User** - the user has a profile on this site
  and has authenticated themselves (by logging in or through some other 
  mechanism)
- **Recognized but Not Authenticated User** - the user has a profile on
  this site and there is some cross-session or other indication to
  associate the request with a specific user profile. However, the user
  has not authenticated themselves. User's in this state can have a measure
  of personalization done for them, but should not be given access to
  account secrets (such as the password, payment information, and the like).

## Language/Locale Negotiation

The point of language negotiation is that, for a given request, a single,
authoritative language/locale identifier be produced.
This identifier is then used to select resources (static pages, resource files,
etc.) and to set the locale for internationalization (I18N) APIs such as
`Intl.DateFormat` or `Intl.Collator` in JavaScript.

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

## Site Configuration

A site cannot support every language in the world nor can it support
all of the potential variations of a given language/locale.
To ensure a consistent experience, sites need these concepts:

- **Available Locales** The list of locales that the site will support.
  Only locales appearing in this list can be selected by the language
  negotiation process.
  - Note that sites may have some locales that are "staged" as pre-production
    or which are only available to specific sets of users.
- **Default Locale**. If none of the user's signals match the available
  list of locales on the site, there needs to be some language chosen.
  This default is the "ultimate fallback" for the site.

Sites also sometimes need to manage more detailed preferences.

> For example, suppose a site supports two variations of Spanish: 
> `en-ES` (Spanish for Spain) and `es-419` (Spanish for Latin America).
> 
> Users might provide signals that match an unsupported variety of Spanish.
> Suppose a user requests a generic form of Spanish using the tag `es`.
> The site might need to indicate which flavor of Spanish (`es-ES` or `es-419`)
> is the default Spanish.
> 
> Suppose a different user requests `es-CR` (Spanish for Costa Rica).
> Then the site might need to maintain a mapping for different sorts of Spanish.
> Such a configuration might be a map of values or it might use an algorithm.
> For example, the site might use the UN M.49 regional containment data
> provided as [part of CLDR](https://www.unicode.org/cldr/charts/44/supplemental/territory_containment_un_m_49.html)
> to discover that `CR` (Costa Rica) is part of `013` (Central America)
> which is part of `419` (Latin America), making `es-419` the best match
> for a request for `es-CR`.

Another example might be geographic defaults. 
For example, a site might make `es-419` the default for users whose
geoIP location indicates Latin America but use the site default for users
outside that region.

## Locale Negotiation

Hierarchical negotiation is one mechanism for performing language negotiation.
One way to implement this is to work from the last specific signal to the
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

## When the user logs in...

When a user authenticates, there are two things that need to be done: 
- check the user's profile; if the current negotiated language is different
  from the that in the user's profile:
  - optionally query the user if they want to change their language
  - update the session with the value in their profile
   (this helps ensure, for example, that offline communications, such as emails, 
   are in the user's preferred language)
