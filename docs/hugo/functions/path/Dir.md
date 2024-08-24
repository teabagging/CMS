---
title: path.Dir
description: Replaces path separators with slashes (/) and returns all but the last element of the given path.




---

```go-html-template
{{ path.Dir "a/news.html" }} → a
{{ path.Dir "news.html" }} → .
{{ path.Dir "a/b/c" }} → a/b
{{ path.Dir "/a/b/c" }} → /a/b
{{ path.Dir "/a/b/c/" }} → /a/b/c
{{ path.Dir "" }} → .
```