---
title: resources.Copy
description: Copies the given resource to the target path.


---

```go-html-template
{{ with resources.Get "images/a.jpg" }}
  {{ with resources.Copy "img/new-image-name.jpg" . }}
    <img src="{{ .RelPermalink }}" width="{{ .Width }}" height="{{ .Height }}" alt="">
  {{ end }}
{{ end }}
```

The relative URL of the new published resource will be:

```text
/img/new-image-name.jpg
```


Use the `resources.Copy` function with global, page, and remote resources.
