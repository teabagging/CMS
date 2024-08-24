---
title: path.Ext
description: Replaces path separators with slashes (`/`) and returns the file name extension of the given path.



---

The extension is the suffix beginning at the final dot in the final slash-separated element of path; it is empty if there is no dot.

```go-html-template
{{ path.Ext "a/b/c/news.html" }} → .html
```
