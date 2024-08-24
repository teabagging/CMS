---
title: path.Base
description: Replaces path separators with slashes (`/`) and returns the last element of the given path. 




---

```go-html-template
{{ path.Base "a/news.html" }} → news.html
{{ path.Base "news.html" }} → news.html
{{ path.Base "a/b/c" }} → c
{{ path.Base "/x/y/z/" }} → z
{{ path.Base "" }} → .
```
