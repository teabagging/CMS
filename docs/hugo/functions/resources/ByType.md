---
title: resources.ByType
description: Returns a collection of global resources of the given media type, or nil if none found.




---

The [media type] is typically one of `image`, `text`, `audio`, `video`, or `application`.

```go-html-template
{{ range resources.ByType "image" }}
  <img src="{{ .RelPermalink }}" width="{{ .Width }}" height="{{ .Height }}" alt="">
{{ end }}
```


This function operates on global resources. A global resource is a file within the assets directory, or within any directory mounted to the assets directory.

For page resources, use the [`Resources.ByType`] method on a `Page` object.

[`Resources.ByType`]: /methods/page/resources/


[media type]: https://en.wikipedia.org/wiki/Media_type
