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


