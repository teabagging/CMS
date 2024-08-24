---
title: strings.Count
description: Returns the number of non-overlapping instances of the given substring within the given string.




---

If `SUBSTR` is an empty string, this function returns 1 plus the number of Unicode code points in `STRING`.

```go-html-template
{{ "aaabaab" | strings.Count "a" }} → 5
{{ "aaabaab" | strings.Count "aa" }} → 2
{{ "aaabaab" | strings.Count "aaa" }} → 1
{{ "aaabaab" | strings.Count "" }} → 8
```