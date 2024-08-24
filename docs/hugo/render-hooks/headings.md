---
title: Heading render hooks
linkTitle: Headings
description: Create a heading render hook to override the rendering of Markdown headings to HTML.

    


---

## Context

Heading render hook templates receive the following [context]:

[context]: /getting-started/glossary/#context

###### Anchor

(`string`) The `id` attribute of the heading element.

###### Attributes

(`map`) The [Markdown attributes], available if you configure your site as follows:

[Markdown attributes]: //markdown-attributes/


[markup.goldmark.parser.attribute]
title = true


###### Level

(`int`) The heading level, 1 through 6.

###### Page

(`page`) A reference to the current page.

###### PageInner



(`page`) A reference to a page nested via the [`RenderShortcodes`] method. [See details](#pageinner-details).

[`RenderShortcodes`]: /methods/page/rendershortcodes

###### PlainText

(`string`) The heading text as plain text.

###### Text

(`string`) The heading text.

## Examples

In its default configuration, Hugo renders Markdown headings according to the [CommonMark specification] with the addition of automatic `id` attributes. To create a render hook that does the same thing:

[CommonMark specification]: https://spec.commonmark.org/current/





