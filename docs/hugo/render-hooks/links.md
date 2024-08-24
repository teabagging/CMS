---
title: Link render hooks
linkTitle: Links
description: Create a link render hook to override the rendering of Markdown links to HTML.



---

## Markdown

A Markdown link has three components: the link text, the link destination, and optionally the link title.

```text
[Post 1](/posts/post-1 "My first post")
 ------  -------------  -------------
  text    destination       title
```

These components are passed into the render hook [context] as shown below.

[context]: /getting-started/glossary/#context

## Context

Link render hook templates receive the following context:

[context]: /getting-started/glossary/#context

###### Destination

(`string`) The link destination.

###### Page

(`page`) A reference to the current page.

###### PageInner



(`page`) A reference to a page nested via the [`RenderShortcodes`] method. [See details](#pageinner-details).

[`RenderShortcodes`]: /methods/page/rendershortcodes

###### PlainText

(`string`) The link description as plain text.

###### Text

(`string`) The link description.

###### Title

(`string`) The link title.

## Examples


With inline elements such as images and links, remove leading and trailing whitespace using the `{{‑ ‑}}` delimiter notation to prevent whitespace between adjacent inline elements and text.


In its default configuration, Hugo renders Markdown links according to the [CommonMark specification]. To create a render hook that does the same thing:

[CommonMark specification]: https://spec.commonmark.org/current/




## Default



Hugo includes an [embedded link render hook] to resolve Markdown link destinations. Disabled by default, you can enable it in your site configuration:

[embedded link render hook]


[markup.goldmark.renderHooks.link]
enableDefault = true


A custom render hook, even when provided by a theme or module, will override the embedded render hook regardless of the configuration setting above.


The embedded link render hook is automatically enabled for multilingual single-host sites if [duplication of shared page resources] is disabled. This is the default configuration for multilingual single-host sites.

[duplication of shared page resources]: /getting-started/configuration-markup/#duplicateresourcefiles


The embedded link render hook resolves internal Markdown destinations by looking for a matching page, falling back to a matching [page resource], then falling back to a matching [global resource]. Remote destinations are passed through, and the render hook will not throw an error or warning if it is unable to resolve a destination.

[page resource]: /getting-started/glossary/#page-resource
[global resource]: /getting-started/glossary/#global-resource

You must place global resources in the assets directory. If you have placed your resources in the static directory, and you are unable or unwilling to move them, you must mount the static directory to the assets directory by including both of these entries in your site configuration:


[[module.mounts]]
source = 'assets'
target = 'assets'

[[module.mounts]]
source = 'static'
target = 'assets'



