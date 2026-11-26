# Guide to proper language negotiation

### Question

**How to set up language negotiation properly?**

Language negotiation is the mechanism by which a server selects the best version of a page based on the client’s `Accept-Language` header. It is a concept of the HTTP protocol. As noted in [When to use language negotiation](https://www.w3.org/International/questions/qa-when-lang-neg), the short answer to "when to use language negotiation" is *always*. However, the long answer is *always, but never alone.*

While language negotiation significantly improves user experience by automatically serving content in a user's preferred language, it presents critical challenges for search engine optimization (SEO) and discoverability. To implement this correctly, authors must adopt a hybrid strategy that balances user convenience with crawler accessibility.

This article is a guide for properly implementing language negotiation.

### The Fundamental Rule

The most common mistake in language negotiation is serving different languages on the exact same URL based solely on HTTP headers. While this satisfies a user’s browser, it renders your content invisible to search engines.

Crawlers like [Googlebot](https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages) often do not send `Accept-Language` headers. If `www.example.com` serves English to a crawler but Spanish to a user, the Spanish content may never be indexed. Furthermore, serving different content on the same URL can be misunderstood as "cloaking", which is a punishable offense.

**The Solution**

Every language version must have a unique, addressable URL, like `example.com/de/about` or `example.com/about.de.html`, but not `example.com/about` serving both English and German dynamically.

### Use Negotiation for Routing, Not Serving

Language negotiation should not define the *content* of a URL, but rather the *destination* of the user. Here's an example workflow:

1. A user visits `www.example.com`.
2. The server detects `Accept-Language: it` (Italian).
3. The server issues a 302 (Temporary) Redirect to `www.example.com/it/`.
4. If no match is found, the server redirects to a default language (e.g., `www.example.com/en/`) or a language selection page.

*Note: Use a 302 redirect rather than a 301 (Permanent), as the user's language preference (or the device they are using) may change.*

### The "Sylvia" Scenario: Handling False Positives

[When to use language negotiation](https://www.w3.org/International/questions/qa-when-lang-neg) illustrates a critical flaw in negotiation via the persona of "Sylvia".

* **Scenario A:** Sylvia is Italian but is using a computer in an Internet café in Moscow (browser set to Russian).
* **Scenario B:** Sylvia is non-technical and her browser defaults to English, though she prefers Italian.

In both cases, automatic negotiation fails. Therefore, you must provide **language controls**.

#### Requirements for Language Controls

* **Visibility:** Place a clear language switcher (links or a dropdown) on *every* page, not just the homepage.
* **Clarity:** Use the native name of the language (e.g., "Deutsch" instead of "German") so users can recognize their own language even if they cannot read the current page content.
* **Targeting:** If Sylvia is on `.../en/contact`, the switcher should link specifically to `.../it/contact`, not dump her back to the Italian homepage.

### "Stickiness": Respecting the User's Override

If Sylvia manually clicks the "Italian" button, the system must stop guessing.

When a user manually selects a language, store that preference in a cookie. On subsequent visits to the website, the cookie should take precedence over the `Accept-Language` header.

By using the **Separate URL** strategy, stickiness is largely handled automatically. If the user navigates from `/it/home` to `/it/about`, they remain seeing the Italian page naturally.

### Telling the Search Engines (The `hreflang` Signal)

Because we are using separate URLs to satisfy search engines, we must explicitly tell them that these pages are equivalent versions of each other. This prevents duplicate content issues and ensures the correct language appears in search results based on the user's location.

Implement `hreflang` annotations in the `<head>` of your HTML or in your XML sitemap:

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/" />
```

The `x-default` value tells the search engine where to send a user if their language doesn't match any of the specific `hreflang` options.

### Summary Checklist

To properly implement language negotiation:

1. Create distinct URLs for every language version.
2. Use `Accept-Language` headers *only* to redirect users from the generic root URL to a specific language URL.
3. Always provide visible, persistent links to switch languages manually.
4. Use cookies to remember manual overrides so the user doesn't have to choose twice.
5. Use `hreflang` attributes to map the relationship between the different URL versions for search engines.

By following this approach, you ensure indexability by search engines, and still provide the seamless experience of automatic language detection for your human users.

### Further reading

- [When to use language negotiation](https://www.w3.org/International/questions/qa-when-lang-neg)
- [Setting language preferences in a browser](https://www.w3.org/International/questions/qa-lang-priorities)
- [Guiding users to translated pages](https://www.w3.org/International/questions/qa-site-conneg)
