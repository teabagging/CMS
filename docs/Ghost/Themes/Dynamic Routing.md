# Dynamic Routing

Routing is the system that maps URL patterns to data and templates within Ghost. It comes pre-configured by default, but it can also be customized extensively to build powerful custom site structures.

All of Ghost’s routing configuration is defined in `content/settings/routes.yaml` - which you can edit directly, but you can also upload/download this file from within your Ghost admin panel under `Settings » Labs`.

If you edit the file manually, you’ll need to restart Ghost to see the changes, but if you upload the file in admin then your routes will automatically be updated right away.

### Base configuration

The default `routes.yaml` which comes with all new installs of Ghost sets things up with a traditional publication structure. The homepage of the site is a reverse-chronological list of the site’s posts, with each post living on its own URL defined by a `{slug}` parameter, such as `my-great-post`. There are also additional archives of posts sorted by tag and author.

```yaml
## routes.yaml

routes:

collections:
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

For most publications and use cases, this structure is exactly what’s needed and it’s not necessary to make any edits in order to use Ghost or develop a theme for it.

### What’s YAML?

YAML stands for **Y**et **A**nother **M**arkup **L**anguage - because there aren’t enough unfunny acronyms in computer science. You can think of it loosely like JSON without all the brackets and commas. In short, it’s a document format used to store nested `key:value` pairs, commonly used for simple/readable configuration.

The most important thing to know when working with YAML is that it uses indentation to denote structure. That means the **only** type of nesting which works is **2 spaces**.

The most common reason for YAML files not working is when you accidentally use the wrong type or quantity of spacing for indentation. So keep a close eye on that!

### When to use dynamic routing

Maybe you want your homepage to be a simple landing page, while all of your posts appear on `site.com/writing/`. Maybe you actually want to split your site into two main collections of content, like `/blog/` and `/podcast/`. Maybe you just want to change the URL of your archives from `/tag/news/` to `/archive/news/`.

If you’re looking to create an alternative site structure to the one described above, then dynamic routing is what you need in order to achieve all your hopes and dreams.

Okay, maybe not all your hopes and dreams but at least your URLs. We’ll start there.

Hopes and dreams come later.

## Custom Routes

Template routes allow you to map individual URLs to specific template files within a Ghost theme. For example: make `/custom/` load `custom.hbs`

Using template routes is very minimal. There’s no default data associated with them, so there isn’t any content automatically loaded in from Ghost like there is with posts and pages. Instead, you can write all the custom code you like into a specific file, and then have that file load on the route of your choice.

Custom routes are handy for creating static pages outside of Ghost Admin, when you don’t want them to be editable, they use lots of custom code, or you need to create a specific custom URL with more than a basic slug.

Don’t worry, we’ll go through some examples of all of the above!

---

### Basic routing

The [default routes.yaml file](https://ghost.org/docs/themes/routing/) which comes with Ghost contains an empty section under `routes`, and this is where custom routes can be defined.

Let’s say you’ve got a big **Features** landing page with all sorts of animations and custom HTML. Rather than trying to cram all the code into the Ghost editor and hope for the best, you can instead store the code in a custom template called `features.hbs` - and then point a custom route at it:

```yaml
routes:
  /features/: features
```

The first half is the URL: `site.com/features/` - the second is the template which will be used: `features.hbs` - you leave off the `.hbs` because Ghost takes care of that part. Now you’ve created a new static page in Ghost, without using the admin!

You can also use custom routes to simulate subdirectories. For example, if you want a “Team” page to appear, for navigational purposes, as if it’s a subpage of your “About” page.

```yaml
routes:
  /features/: features
  /about/team/: team
```

Now `site.com/about/team/` is a dedicated URL for a static `team.hbs` template within your theme. Routes can be just about anything you like using letters, numbers, slashes, hyphens, and underscores.

---

### Loading data

The downside of using an `/about/team` route to point at a static `team.hbs` template is that it’s… well: static.

Unlike the **Features** the team page needs to be updated fairly regularly with a list of team members; so it would be inconvenient to have to do that in code each time. What we really want is to keep the custom route, but have the page still use data stored in Ghost. This is where the `data` property comes in.

```yaml
routes:
  /features/: features
  /about/team/:
    template: team
    data: page.team
```

This will assign all of the data from a Ghost **page** with a slug of `team` to the new route, and it will also automatically redirect the original URL of the content to the new one.

Now, the data from `site.com/team/` will be available inside the `{{#page}}` block helper in a custom `team.hbs` template on `site.com/about/team/` and the old URL will redirect to the new one, to prevent the content being duplicated in two places.

---

### Building feeds & APIs

In the examples used so far, routes have been configured to generate a single page, some data and a template, but that’s not all routes can do. You can make a route output just about anything, for instance a custom RSS feed or JSON endpoint.

If you create a custom template file with a (https://ghost.org/docs/themes/helpers/get/) helper API query loading a list of filtered posts, you can return those posts on a custom route with custom formatting.

```yaml
routes:
  /podcast/rss/:
    template: podcast-feed
    content_type: text/xml
```

Generally, routes render HTML, but you can override that by specifying a `content_type` property with a custom mime-type.

For example, you might want to build a custom RSS feed to get all posts tagged with `podcast` and deliver them to iTunes. In fact, [here’s a full tutorial](https://ghost.org/docs/tutorials/custom-rss-feed/) for how to do that.

Or perhaps you’d like to build your own little public JSON API of breaking news, and provide it to other people to be able to consume your most important updates inside their websites and applications? That’s fine too, you’d just pass `json` as the `content_type`.

## Collections

Collections are the backbone of how posts on a Ghost site are organized, as well as what URLs they live on.

You can think of collections as major sections of a site that represent distinct and separate types of content, for example: `blog` and `podcast`.

**Collections serve two main purposes:**

1. To display all posts contained within them on a paginated index route
2. To determine the URL structure of their posts and where they ’live’ on the site. For this reason, posts can only ever be in **one** collection.

A post must either be a blog or a podcast, it can’t be both.

---

### The default collection

The [default routes.yaml file](https://ghost.org/docs/themes/routing/) which comes with Ghost contains just a single collection on the root `/` URL which defines the entire structure of the site.

```yaml
collections:
  /:
    permalink: /{slug}/
    template: index
```

Here, the home route of `site.com` will display all posts, using the `index.hbs` template file, and render each post on a URL determined by the `{slug}` created in the Ghost editor.

In short: This is exactly how and why Ghost works by default!

---

### Using a custom homepage

One of the most minimal examples of editing the default collection is to move it to a new location and make room for a custom home page.

```yaml
routes:
  /: home

collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index
```

Using an example from the previous section on [custom routes](https://ghost.org/docs/themes/routing/#routes), the home `/` route is now pointing at a static template called `home.hbs` — and the main collection has now been moved to load on `site.com/blog/`. Each post URL is also prefixed with `/blog/`.

---

### Filtering collections

Much like the (https://ghost.org/docs/themes/helpers/get/) helper, collections can be filtered to contain only a subset of content on your site, rather than all of it.

```yaml
collections:
  /blog/:
    permalink: /blog/{slug}/
    template: blog
    filter: primary_tag:blog
  /podcast/:
    permalink: /podcast/{slug}/
    template: podcast
    filter: primary_tag:podcast
```

Returning to the earlier example, all of the posts within Ghost here are divided into two collections of `blog` and `podcast`.

#### Blog collection

* **Appears on:** `site.com/blog/`
* **Post URLs:** `site.com/blog/my-story/`
* **Contains posts with:** a `primary_tag` of `blog`

#### Podcast collection

* **Appears on:** `site.com/podcast/`
* **Post URLs:** `site.com/podcast/my-episode/`
* **Contains posts with:** a `primary_tag` of `podcast`

The `primary_tag` property is simply the *first* tag that is entered in the tag list inside Ghost’s editor. It’s useful to filter against the **primary** tag because it will always be unique.

If posts match the filter property for *multiple* collections this can lead to problems with post rendering and collection pagination, so it’s important to try and always keep collection filters unique from one another.

---

### Doing more with collections

Collections are an incredibly powerful way to organize your content and your site structure, so its only limits are your imagination — and our clichés.

#### Loading data into the index

Much like [custom routes](https://ghost.org/docs/themes/routing/#routes), collections can also accept a data property in order to pass in the data to the collection’s index. For example, you might have a collection called `portfolio` which lists all of your most recent work. But how do you set the title, description, and metadata for *that* collection index?

```yaml
collections:
  /portfolio/:
    permalink: /work/{slug}/
    template: work
    filter: primary_tag:work
    data: tag.work
```

Now, your `work.hbs` template will have access to all of the data (and metadata) from your `work` tag. And don’t forget: `site.com/tag/work/` will now also be redirected to `site.com/portfolio/` — so no duplicate content!

#### Creating multi-lang sites

Another really popular use for collections is for sites that publish content in multiple languages and want to create distinct areas and URL patterns for each locale.

```yaml
collections:
  /:
    permalink: /{slug}/
    template: index
    filter: 'tag:-hash-de'
  /de/:
    permalink: /de/{slug}/
    template: index-de
    filter: 'tag:hash-de'
```

This would set the base URL to be in the site’s default language, and add an additional `site.com/de/` section for all posts in German, tagged with a private tag of `#de`. Using [Private tags](https://ghost.org/help/organizing-content/#internal-tags) means these tags wouldn’t be shown on the front end but can still be treated differently with Handlebars templating. The main collection excludes these same posts to avoid any overlap.

## Taxonomies

Taxonomies are groupings of posts based on a common relation. In Ghost, this is always defined by the post’s author or tag

Using taxonomies, Ghost will automatically generate post archives for tags and authors like `/tag/getting-started/` which will render a list of associated content.

Unlike [collections](https://ghost.org/docs/themes/routing/#collections), posts can appear in multiple taxonomies, and the post’s URL is not affected by which taxonomies are applied.

Taxonomies are structured like this:

```yaml
taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

If a post by `Cameron` is tagged with `News` then it will be included in archives appearing on:

* `site.com` – (The collection index)
* `site.com/author/cameron`
* `site.com/tag/news/`

Each of these comes with its own automatically generated RSS feeds that are accessed by adding /rss/ to the end of the URL.

---

### Customising taxonomies

The configuration options for taxonomies are a lot more basic than [routes](https://ghost.org/docs/themes/routing/#routes) and [collections](https://ghost.org/docs/themes/routing/#collections). You can’t define new or custom taxonomies, you can only modify those which are already there and adapt their syntax a small amount.

```yaml
taxonomies:
  tag: /topic/{slug}/
  author: /host/{slug}/
```

If you don’t like the prefixes for taxonomies, you can customize them to something else that suits your site and your content better. If you’re running a publication that is primarily a podcast, for example, you might prefer `host` and `topic`.

---

### Removing taxonomies

One small extra trick is that you can actually remove taxonomies entirely and not generate those pages for your site. If you prefer to keep things minimal, just leave the taxonomies field empty.

```yaml
taxonomies:
  ## Nothing but silence
```

Just make sure you also update your template files to not link to any tag or author archives, which will now 404!

## Channels

If you want something more flexible than taxonomies, but less rigid than collections, then channels might be for you.

A channel is a custom stream of paginated content matching a specific filter. This allows you to create subsets and supersets of content by combining or dividing existing posts into content hubs.

Unlike [collections](https://ghost.org/docs/themes/routing/#collections), channels have no influence over a post’s URL or location within the site, so posts can belong to any number of channels.

**The best way to think of channels is as a set of permanent search results.** It’s a filtered slice of content from across your site, without modifying the content itself.

---

### Creating a channel

Channels are defined as a [custom route](https://ghost.org/docs/themes/routing/#routes), with a custom `controller` property called `channel`, and a filter to determine which posts to return.

```yaml
routes:
  /apple-news/:
    controller: channel
    filter: tag:[iphone,ipad,mac]
  /editors-column/:
    controller: channel
    filter: tag:column+primary_author:cameron
```

In this example, there are two channels. The first is a channel that will return any posts tagged `iPhone`, `iPad` or `Mac` on a custom route of `site.com/apple-news/`.

The second is a special Editor’s Column area, which will return any posts tagged with `Column`, but only if they’re explicitly authored by `Cameron`.

These are two small examples of how you can use channels to include and exclude groups of posts from appearing together on a custom paginated route, with full automatic RSS feeds included as standard. Just add `/rss/` to any channel URL to get the feed.

---

### When to use channels vs collections

Collections and channels share a lot of similarities because they’re both methods of filtering a set of posts and returning them on a custom URL.

So how do you know when to use which?

#### You should generally use a collection when…

There’s a need to define permanent site structure and information architecture

* **You’re sorting different types/formats of content**
  *eg. posts are blog posts OR podcasts*
* **You’re filtering incompatible content**
  *eg. posts are either in English OR German*
* **You want the parent filter to influence the post’s URL**
  *eg. an index page called `/news/` and posts like `/news/my-story/`*

#### You might be better off with a channel if…

All you need is a computed view of a subsection of existing content

* **You’re combining/grouping different pieces of content**
  *eg. posts tagged with `news` AND `featured`*
* **You’re dividing existing streams of content with multiple properties**
  *eg. posts tagged with `news` but NOT authored by `steve`*
* **You want to be able to update/change properties without affecting post URLs**
  *eg. quickly creating/destroying new sections of a site without any risk*

If you’re still not sure which is the best fit for you, drop by the [Ghost Forums](https://forum.ghost.org/) and share what structure you’re hoping to accomplish. There’s a large community of Ghost developers around to help.

## Index of all available properties


| Property       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `template`     | Determines which Handlebars template file will be used for this route. Defaults to`index.hbs` if not specified.                                                                                                                                                                                                                                                                                                                                                       |
| `permalink`    | The generated URL for any post within a collection. Can contain dynamic variables based on post data:*`{id}` - unique set of characters, eg. `5982d807bcf38100194efd67`* `{slug}` - the post slug, eg. `my-post`* `{year}` - publication year, eg. `2019`* `{month}` - publication month, eg. `04`* `{day}` - publication day, eg. `29`* `{primary_tag}` - slug of first tag listed in the post, eg. `news`* `{primary_author}` - slug of first author, eg. `cameron` |
| `filter`       | Extensively filter posts returned in collections and channels using the full power and syntax of the[Ghost Content API](https://ghost.org/docs/content-api/#filtering)For example `author:cameron+tag:news` will return all posts published by Cameron, tagged with ‘News’. Mix and match to suit.                                                                                                                                                        |
| `order`        | Choose any number of fields and sort orders for your content:*`published_at desc` - *default*, newest post first* `published_at asc` - chronological, oldest first* `featured desc, published_at desc` -<br/>featured posts, then normal posts, newest first                                                                                                                                                                                                          |
| `data`         | Fetch & associate data from the Ghost API with a specified route. The source route of the data will be redirected to the new custom route.*`post.slug` - get data with => `{{#post}}`* `page.slug` - get data with => `{{#page}}`* `tag.slug` - get data with => `{{#tag}}`* `author.slug` - get data with => `{{#author}}`                                                                                                                                           |
| `rss`          | Collections and channels come with automatically generated RSS feeds which can be disabled by setting the`rss` property to `false`                                                                                                                                                                                                                                                                                                                                    |
| `content_type` | Specify the mime-type for the current route, default:`HTML`                                                                                                                                                                                                                                                                                                                                                                                                           |
| `controller`   | Add a custom controller to a route to perform additional functions. Currently the only supported value is`channel`                                                                                                                                                                                                                                                                                                                                                    |

## Redirects

In addition to creating routes, you can also create redirects for any time there are any changes in your URLs and you need to forward visitors

### Accessing the redirects file

> If you’ve updated your site from an earlier version (prior to 4.0), your redirects may be in JSON format. Both formats are still supported, but JSON support will be removed in a later version.

The `redirects.yaml` file is located in `content/data/redirects.yaml` and - like `routes.yaml` - can also be downloaded/uploaded in the settings in Ghost Admin.

### File structure

Refer to [Implementing redirects in Ghost](https://ghost.org/docs/tutorials/implementing-redirects/) for more details about the file structure.

### Implementation

Upload your new `redirects.yaml` file in Ghost admin in the settings. This is the recommended method.

To replace the YAML file on the server, ensure it exists in `content/data/redirects.yaml` and restart Ghost for your changes to take effect.

### When not to use `redirects.yaml`

There are some instances where it is not recommended to use the `redirects.yaml` file:

* Page rules for www or HTTP/HTTPS redirection should always be implemented with your DNS provider.
* Ghost automatically forces trailing slashes, so you do not need to write any page rules to accommodate for duplicate content caused by this.
* If you’re trying to change the URL structure of your publication, the recommended way to do this is with dynamic routing and the `routes.yaml` file. (However, you may still need to redirect existing content using `redirects.yaml`).

## Final Tips

Ghost’s dynamic routing system is an extremely powerful way to build advanced structures for your site, and it’s hard to document every possible example of what can be done with it in comprehensive detail.

### Detailed tutorials

While these docs cover simple examples and broad use cases, you’ll find more detailed and specific use cases of how to build different types of publications in these tutorials:

* [Make an iTunes Podcast RSS feed](https://ghost.org/tutorials/custom-rss-feed/)
* [Use a custom homepage](https://ghost.org/tutorials/custom-homepage/)
* [How to build specialized content hubs](https://ghost.org/tutorials/content-collections/)
* [Define a custom order for posts](https://ghost.org/tutorials/change-post-order/)

Head over to the [Ghost tutorials](https://ghost.org/tutorials/) section to find even more tutorials about how to build different types of themes and websites with Ghost.

---

### Limitations & troubleshooting

As you work further with dynamic routing it’s worth keeping in mind that there are some limitations to what you’re able to do with it. Here are a few of the most common areas where you’ll find the edges of what’s possible:

##### Slugs can conflict

Dynamic routing has no concept of what slugs are used in Ghost, and vice-versa. So if you create a route called `/about/` and a page in Ghost called `about` then one of them is going to work, but not both. You’ll need to manage this manually.

##### Collections must be unique

If you have a collection filtering for posts tagged with `camera` and another filtering for posts tagged with `news` - then you will run into problems if a post is tagged with both `camera` and `news`. You should either trust your authors to use the correct tags, or base collections on properties that are always unique, like `primary_tag`.

##### Trailing slashes are required

You probably noticed that all the examples here use trailing slashes on routes, which is because these are required for dynamic routing to function correctly.
