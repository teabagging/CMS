---
title: Minify
linkTitle: Asset minification
description: Minifies a given resource.

---

## Usage

Any CSS, JS, JSON, HTML, SVG, or XML resource can be minified using `resources.Minify` which takes for argument the resource object.

```go-html-template
{{ $css := resources.Get "css/main.css" }}
{{ $style := $css | resources.Minify }}
```

Note that you can also minify the final HTML output to `/public` by running `hugo --minify`.
