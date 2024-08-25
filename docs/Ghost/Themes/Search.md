# Search

Ghost has a native search feature that can be accessed via URL or implemented directly into themes using a single data attribute.

![Search](https://ghost.org/images/docs/themes/search-in-ghost_huac1f49fc436e5098ff1c22395a576ebf_186857_1074x0_resize_q100_h2_box_3.webp)The easiest way to get started with search is by adding a `#/search` URL to the navigation or anywhere on the site. Beyond that, it’s also possible to implement search directly into a theme using a data attribute.

## Implementing Search in themes

The quickest way is to use the `{{search}}` helper to output a button with a search icon. See [the helper docs](https://ghost.org/docs/themes/helpers/search) for more details.

Alternatively, add the `data-ghost-search` data attribute to any element in the theme. Here’s an example from the default theme [Casper](https://github.com/TryGhost/Casper/blob/81d036d4ca036f454f96173a650dd4acc6bb3ca0/default.hbs#L45):

```handlebars
<button class="gh-search" data-ghost-search>{{> "icons/search"}}</button>
```

Both methods allow visitors to search content by clicking on the element to open the search modal or by using the shortcut `Cmd/Ctrl + K`.

### Technical details

* [Taxonomies](https://ghost.org/docs/themes/routing/#taxonomies) for tags and authors must be present for search results to include tags and authors
* The post title and excerpt are used to search post content from the most recent 10,000 posts. (Excerpts are excluded for member-only posts)

## Create an advanced search index using Algolia

If you have a large site with more than 10,000 posts, a complex data structure, or require advanced search functionality, we recommend using Algolia.

Ghost has open-source tools to pre-populate the Algolia search index and keep the index updated using webhooks and Netlify Functions.

### Populating the index

To make full use of Algolia from the start, you can pre-populate the search index. [Algolia Ghost CLI](https://github.com/TryGhost/algolia/tree/main/packages/algolia) is a tool that creates fragments of content from your Ghost site and adds them to your Algolia search index.

Follow the documentation for [Algolia Ghost CLI](https://github.com/TryGhost/algolia/tree/main/packages/algolia) to pre-populate your Algolia search index.

### Setting up Algolia Netlify

The best way to keep your Algolia search index updated with new and edited content is to use Netlify Functions, which listen to and processes webhook events and instruct Algolia to index, reindex, or unindex a URL. Once set up, it will automatically keep the search index up to date.

You can deploy and configure the [Algolia Netlify](https://github.com/TryGhost/algolia/tree/main/packages/algolia-netlify) package to Netlify in the browser.
