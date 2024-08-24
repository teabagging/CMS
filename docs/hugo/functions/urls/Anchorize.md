---
title: urls.Anchorize
description: Returns the given string, sanitized for usage in an HTML id attribute.




---



## Sanitizing logic

With the default Markdown renderer, Goldmark, the sanitizing logic is controlled by your site configuration:


This controls the behavior of the `anchorize` function and the generation of heading IDs when rendering Markdown to HTML.

Set `autoHeadingIDType` to one of:

github
: Compatible with GitHub. This is the default, and strongly recommended.

github-ascii
: Similar to the "github" setting, but removes non-ASCII characters. 

blackfriday
: Provided for backwards compatibility with Hugo v0.59.1 and earlier. This option will be removed in a future release.
