# Publishing

Posts are the primary entry-type within Ghost, and generally represent the majority of stored data.

By default Ghost will return a reverse chronological feed of posts in the traditional format of a blog. However, a great deal of customisation is available for this behaviour.

## Overview

Posts are created within Ghost-Admin using the editor to determine your site’s main content. Within them are all the fields which you might expect such as title, description, slug, metadata, authors, tags and so on.

Additionally, posts have **Code Injection** fields which mean you can register additional styles, scripts or other content to be injected just before `</head>` or `</body>` on any one particular URL where desired.

Here’s an example of a [post](https://demo.ghost.io/welcome/) in the default Ghost Theme:

[![Post in the default Ghost Theme](https://ghost.org/images/docs/concepts/post_hue747db7f2f90c2b84166e8bb760c8a59_946454_3014x0_resize_q100_h2_box_3.webp)](https://demo.ghost.io/welcome/)## Creating content

Creating content in Ghost is done via the Ghost editor which, for many people, is what attracted to them in the first place. More than just a glossy experience though, Ghost’s editor provides a streamlined workflow for both authors and developers.

### Writing experience

The writing experience in Ghost will be very familiar to most people who have spent time with web based authoring tools. It generally takes after the Medium-like experience which writers want.

Writing simple content is a breeze - but there are tons of powerful shortcuts, too. You can write plaintext, activating formatting options using either the mouse or keyboard shortcuts. But you can also write in Markdown, if you prefer, and the editor will convert it as you type - rendering an instant preview.

![Ghost editor in action](https://ghost.org/images/docs/concepts/editor_hudded6a316f9fdf6cb4455db6918ad2d9_121582_1806x0_resize_q100_h2_box_3.webp)Additionally, the editor contains intelligent logic around pasting. You can copy and paste from *most* sources and it will be correctly transformed into readable content without needing any special treatment. (Go ahead, try copying the content of this page straight into the editor!) — You can also do things like pasting a URL over the top of any highlighted text to create a link.

### Dynamic cards

Having a clean writing experience is good, but nowadays great publishing means so much more than just text. Modern content contains audio, video, charts, data and interactive elements to provide an engaging experience.

Ghost content comes with extensible, rich media objects called Cards. The easiest way to think of them is like having Slack integrations in your content.

![Cards](https://ghost.org/images/docs/concepts/cards_hu530bde54718f2b313fb590dbef31cd87_116580_932x0_resize_q100_h2_box_3.webp)**For example:** Either by pressing the `+` button or typing `/` - you can trigger an Unsplash integration to find and insert a royalty-free photo for your post.

*Currently there are only a few simple cards available, but greater support for cards (as well as support for custom cards) is in active development.*

### Document storage

The Ghost editor gets a lot of praise from writers for being a pleasure to use, but developers will find that the standardised JSON-based document storage format under the hood creates an equally great experience when it comes to working with the data.

All post content in Ghost is stored in [Lexical](https://lexical.dev/) and then rendered into its final form depending on the delivery destination.

Lexical is extremely portable and can be transformed into multiple formats. This is particularly powerful because it’s just as easy to parse your content into HTML to render on the web as it is to pull the same content into a mobile app using completely different syntax.

### API data

Here’s a sample post object from the Ghost [Content API](https://ghost.org/docs/content-api/)

```json
{
  "posts": [
    {
      "slug": "welcome-short",
      "id": "5ddc9141c35e7700383b2937",
      "uuid": "a5aa9bd8-ea31-415c-b452-3040dae1e730",
      "title": "Welcome",
      "html": "👋 Welcome, it's great to have you here.",
      "comment_id": "5ddc9141c35e7700383b2937",
      "feature_image": "https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png",
      "feature_image_alt": null,
      "feature_image_caption": null,
      "featured": false,
      "visibility": "public",
      "created_at": "2019-11-26T02:43:13.000+00:00",
      "updated_at": "2019-11-26T02:44:17.000+00:00",
      "published_at": "2019-11-26T02:44:17.000+00:00",
      "custom_excerpt": null,
      "codeinjection_head": null,
      "codeinjection_foot": null,
      "custom_template": null,
      "canonical_url": null,
      "url": "https://docs.ghost.io/welcome-short/",
      "excerpt": "👋 Welcome, it's great to have you here.",
      "reading_time": 0,
      "access": true,
      "og_image": null,
      "og_title": null,
      "og_description": null,
      "twitter_image": null,
      "twitter_title": null,
      "twitter_description": null,
      "meta_title": null,
      "meta_description": null,
      "email_subject": null
    }
  ]
}
```

## Pages

Pages are a subset of posts which are excluded from all feeds.

While posts are used for grouped content which is generally published regularly like blog posts or podcast episodes, pages serve as a separate entity for static and generally independent content like an `About` or `Contact` page.

### What’s different about pages?

Pages are only ever published on the slug which is given to them, and do not automatically appear anywhere on your site. While posts are displayed in the index collection, within RSS feeds, and in author and tag archives - pages are totally independent. The only way people find them is if you create manual links to them either in your content or your navigation.

Here’s an example of a [page](https://demo.ghost.io/about/) in the default Ghost Theme:

[![Page](https://ghost.org/images/docs/concepts/page_hue747db7f2f90c2b84166e8bb760c8a59_805758_3014x0_resize_q100_h2_box_3.webp)](https://demo.ghost.io/about/)## Custom templates

If using one of Ghost’s default [Handlebars Themes](https://ghost.org/docs/themes/), a common usecase for pages is to give them custom templates.

As well as a regular `page.hbs` default template, you can also create generic reusable custom templates like `page-wide.hbs` - or page-specific templates based on a particular slug, like `page-about.hbs` - so that you have fine-grained control over what markup is used to render your data.

Not much else to say about pages, let’s move right along.

## Tags

Tags are the primary taxonomy within Ghost for filtering and organising the relationships between your content.

Right off the bat, probably the best way to think about tags in Ghost is like labels in GMail. Tags are a powerful, dynamic taxonomy which can be used to categorise content, control design, and drive automation within your site.

Tags are much more than just simple keywords - there are several different ways of using them to accomplish a variety of use-cases.

### Regular tag

All tags come with their own data object and can have a title, description, image and meta data. Ghost Handlebars Themes will automatically generate tag archive pages for any tags which are assigned to active posts. For example all posts tagged with `News` will appear on `example.com/tag/news/`, as well as in the automatically generated XML sitemap.

### Primary tag

Ghost has a concept of `primary_tag`, used simply to refer to the very first tag which a post has. This is useful for when you want to return a singular, most-important tag rather than a full array of all tags assigned to a post.

### Internal tag

Tags which are prefixed by a `#` character, otherwise known as hashtags, are internal tags within Ghost - which is to say that they aren’t rendered publicly. This can be particularly useful when you want to drive particular functionality based on a tag, but you don’t necessarily want to output the tag for readers to see.

### Example usage

As a quick example of how you might use tags, let’s look at a quick example of a Hollywood news site which is publishing a post about Ryan Reynolds being announced as the lead in a new movie called “Son of Deadpool”.

![Tags](https://ghost.org/images/docs/concepts/tags_hud43c01f8e89efe2aea0eb402d3bb391f_81753_1648x0_resize_q100_h2_box_3.webp)Here the post has 4 tags:

* `Breaking news` - The **primary tag**
* `Ryan Reynolds` - A regular tag
* `New Releases` - A regular tag
* `#feature` - An internal tag

The front-end of the site has configured a rotating banner on the homepage to pull the latest 3 posts from the `Breaking News` category and highlight them right at the top of the page with a **Breaking News** label beside the byline.

The `Ryan Reynolds` and `New Releases` tags generate archives so that readers can browse other stories in the same categories, as well as their own sitemaps.

The `#feature` tag is used by the front-end or theme-layer as a conditional flag for activating specific formatting. In this instance the Deadpool PR team have supplied some marketing material including a giant wallpaper image which would make a great background, so the post is tagged with `#feature` to push the post image to be full bleed and take over the whole page.

You can see this use-case in action on the main Ghost blog. Here’s [a regular post](https://ghost.org/changelog/image-galleries/), and here’s a [#feature](https://ghost.org/changelog/5/). The design of the post reacts to the tags.

## Tag archives

All actively used public tags (so, those not prefixed with `#`) generate automatic tag archives within Ghost Handlebars Themes. Tag archives are automatically added to the Google XML Sitemap, and have their own pagination and RSS feeds.

Here’s an example of an [tag archive](https://demo.ghost.io/tag/getting-started/) in the default Ghost Theme:

[![Tag Archive](https://ghost.org/images/docs/concepts/tag-archive_hue747db7f2f90c2b84166e8bb760c8a59_994594_3014x0_resize_q100_h2_box_3.webp)](https://demo.ghost.io/tag/getting-started/)Tag archives are only generated for tags which are assigned to published posts, any other tags are not publicly visible.### API data

Here’s a sample tag object from the Ghost [Content API](https://ghost.org/docs/content-api/):

```json
{
  "tags": [
    {
      "slug": "getting-started",
      "id": "5ddc9063c35e7700383b27e0",
      "name": "Getting Started",
      "description": null,
      "feature_image": null,
      "visibility": "public",
      "meta_title": null,
      "meta_description": null,
      "og_image": null,
      "og_title": null,
      "og_description": null,
      "twitter_image": null,
      "twitter_title": null,
      "twitter_description": null,
      "codeinjection_head": null,
      "codeinjection_foot": null,
      "canonical_url": null,
      "accent_color": null,
      "url": "https://docs.ghost.io/tag/getting-started/"
    }
  ]
}
```
