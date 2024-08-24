---
title: Blockquote render hooks
linkTitle: Blockquotes
description: Create a blockquote render hook to override the rendering of Markdown blockquotes to HTML.



---



## Context

Blockquote render hook templates receive the following [context]:

[context]: /getting-started/glossary/#context

###### AlertType

(`string`) Applicable when [`Type`](#type) is `alert`, this is the alert type converted to lowercase. See the [alerts](#alerts) section below.

###### Attributes

(`map`) The [Markdown attributes], available if you configure your site as follows:

[Markdown attributes]: //markdown-attributes/


[markup.goldmark.parser.attribute]
block = true


###### Ordinal

(`int`) The zero-based ordinal of the blockquote on the page.

###### Page

(`page`) A reference to the current page.

###### PageInner

(`page`) A reference to a page nested via the [`RenderShortcodes`] method.

[`RenderShortcodes`]: /methods/page/rendershortcodes

###### Position

(`string`) The position of the blockquote within the page content.

###### Text
(`string`) The blockquote text, excluding the alert designator if present. See the [alerts](#alerts) section below.

###### Type

(`bool`) The blockquote type. Returns `alert` if the blockquote has an alert designator, else `regular`. See the [alerts](#alerts) section below.

## Examples

In its default configuration, Hugo renders Markdown blockquotes according to the [CommonMark specification]. To create a render hook that does the same thing:

[CommonMark specification]: https://spec.commonmark.org/current/



To render a blockquote as an HTML `figure` element with an optional citation and caption:




Then in your markdown:

```text
> Some text
{cite="https://gohugo.io" caption="Some caption"}
```

## Alerts

Also known as _callouts_ or _admonitions_, alerts are blockquotes used to emphasize critical information. For example:


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.




This syntax is compatible with the GitHub Alert Markdown extension.



The first line of each alert is an alert designator consisting of an exclamation point followed by the alert type, wrapped within brackets.

The blockquote render hook below renders a multilingual alert if an alert desginator is present, otherwise it renders a blockquote according to the CommonMark specification.




To override the label, create these entries in your i18n files:




Although you can use one template with conditional logic as shown above, you can also create separate templates for each [`Type`](#type) of blockquote:

```text
layouts/
└── _default/
    └── _markup/
        ├── render-blockquote-alert.html
        └── render-blockquote-regular.html
```
