---
title: site
description: Provides global access to the current Site object.



---

Use the `site` function to return the `Site` object regardless of current context.

```go-html-template
{{ site.Params.foo }}
```

When the `Site` object is in context you can use the `Site` property:

```go-html-template
<!-- current context -->
{{ .Site.Params.foo }}
<!-- template context -->
{{ $.Site.Params.foo }}
```


To simplify your templates, use the global `site` function regardless of whether the `Site` object is in context.

