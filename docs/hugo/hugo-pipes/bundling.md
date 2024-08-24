---
title: Concat
linkTitle: Concatenating assets
description: Bundle any number of assets into one resource.

---

## Usage

Asset files of the same MIME type can be bundled into one resource using `resources.Concat` which takes two arguments, the target path for the created resource bundle and a slice of resource objects to be concatenated.

```go-html-template
{{ $plugins := resources.Get "js/plugins.js" }}
{{ $global := resources.Get "js/global.js" }}
{{ $js := slice $plugins $global | resources.Concat "js/bundle.js" }}
```
