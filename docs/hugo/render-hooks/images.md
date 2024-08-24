---
title: Image render hooks
linkTitle: Images
description: Create an image render to hook override the rendering of Markdown images to HTML.


---

## Markdown

A Markdown image has three components: the image description, the image destination, and optionally the image title.

```text
![white kitten](/images/kitten.jpg "A kitten!")
  ------------  ------------------  ---------
  description      destination        title
```

These components are passed into the render hook [context] as shown below.

[context]: /getting-started/glossary/#context

## Context

Image render hook templates receive the following context:

###### Attributes

(`map`) The [Markdown attributes], available if you configure your site as follows:

[Markdown attributes]: //markdown-attributes/


[markup.goldmark.parser]
wrapStandAloneImageWithinParagraph = false
[markup.goldmark.parser.attribute]
block = true


###### Destination

(`string`) The image destination.

###### IsBlock

(`bool`) Returns true if a standalone image is not wrapped within a paragraph element.

###### Ordinal

(`int`) The zero-based ordinal of the image on the page.

###### Page

(`page`) A reference to the current page.

###### PageInner



(`page`) A reference to a page nested via the [`RenderShortcodes`] method. [See details](#pageinner-details).

[`RenderShortcodes`]: /methods/page/rendershortcodes

###### PlainText

(`string`) The image description as plain text.

###### Text

(`string`) The image description.

###### Title

(`string`) The image title.

## Examples


With inline elements such as images and links, remove leading and trailing whitespace using the `{{‑ ‑}}` delimiter notation to prevent whitespace between adjacent inline elements and text.


In its default configuration, Hugo renders Markdown images according to the [CommonMark specification]. To create a render hook that does the same thing:

[CommonMark specification]: https://spec.commonmark.org/current/




Note that the above requires the following site configuration:


[markup.goldmark.parser]
wrapStandAloneImageWithinParagraph = false


## Default



Hugo includes an [embedded image render hook] to resolve Markdown image destinations. Disabled by default, you can enable it in your site configuration:




[markup.goldmark.renderHooks.image]
enableDefault = true


A custom render hook, even when provided by a theme or module, will override the embedded render hook regardless of the configuration setting above.


The embedded image render hook is automatically enabled for multilingual single-host sites if [duplication of shared page resources] is disabled. This is the default configuration for multilingual single-host sites.

[duplication of shared page resources]: /getting-started/configuration-markup/#duplicateresourcefiles


The embedded image render hook resolves internal Markdown destinations by looking for a matching [page resource], falling back to a matching [global resource]. Remote destinations are passed through, and the render hook will not throw an error or warning if it is unable to resolve a destination.

[page resource]: /getting-started/glossary/#page-resource
[global resource]: /getting-started/glossary/#global-resource

You must place global resources in the assets directory. If you have placed your resources in the static directory, and you are unable or unwilling to move them, you must mount the static directory to the assets directory by including both of these entries in your site configuration:


[[module.mounts]]
source = 'assets'
target = 'assets'

[[module.mounts]]
source = 'static'
target = 'assets'


Note that the embedded image render hook does not perform image processing. Its sole purpose is to resolve Markdown image destinations.


