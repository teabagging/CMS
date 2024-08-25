# Ghost on the JAMstack

How to use Ghost as a headless CMS with popular static site generators

Ghost ships with a default front-end theme layer built with Handlebars, but based on its flexible [architecture](https://ghost.org/docs/architecture/) it also be used as a headless CMS with third party front-end frameworks. We have setup guides for most of the most popular frameworks and how to use Ghost with them.


## Tips for using Ghost headless

Something to keep in mind is that Ghost’s default front-end is not just a theme layer, but also contains a large subset of functionality that is commonly required by most publishers, including:

* Tag archives, routes and templates
* Author archives, routes and templates
* Generated sitemap.xml for SEO
* Intelligent output and fallbacks for SEO meta data
* Automatic Open Graph structured data
* Automatic support for Twitter Cards
* Automatic Google AMP routes and templates
* Custom routes and automatic pagination
* Front-end code injection from admin

When using a statically generated front-end, all of this functionality must be re-implemented. Getting a list of posts from the API is usually the easy part, while taking care of the long tail of extra features is the bulk of the work needed to make this work well.

### Memberships

Ghost’s membership functionality is **not** compatible with headless setups. To use features like our Stripe integration for paid subscriptions, content gating, comments, analytics, offers, complimentary plans, trials, and more — Ghost must be used with its frontend layer.

### Working with images

The Ghost API returns content HTML including image tags with absolute URLs, pointing at the origin of the Ghost install. This is intentional, because Ghost itself is designed (primarily) to be source of truth for serving optimised assets, and may also be installed in a subdirectory.

When using a static front-end, you can either treat the Ghost install as a CDN origin for uploaded assets, or you can write additional logic in your front-end build to download embedded images locally, and rewrite the returned HTML to point to the local references instead.

### Disabling Ghost’s default front-end

When using a headless front-end with Ghost, you’ll want to disable Ghost’s default front-end to prevent duplicate content issues where search engines would see the same content on two different domains. The easiest way to do this is to enable ‘Private Site Mode’ under `Settings > General` - which will put a password on your Ghost install’s front-end, disable all SEO features, and serve a `noindex` meta tag.

You can also use dynamic redirects, locally or at a DNS level, to forward traffic automatically from the Ghost front-end to your new headless front-end - but this is a more fragile setup. If you use Ghost’s built-in newsletter functionality, unsubscribe links in emails will point to the Ghost origin - and these URLs will break if redirected. Preview URLs and other dynamically generated paths may also behave unexpectedly when blanket redirects are used.

Usually ‘Private Site Mode’ is the better option.
