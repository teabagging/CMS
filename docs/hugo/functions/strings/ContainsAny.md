---
title: strings.ContainsAny
description: Reports whether the given string contains any character within the given set.




---

```go-html-template
{{ strings.ContainsAny "Hugo" "gm" }} → true
```

The check is case sensitive:

```go-html-template
{{ strings.ContainsAny "Hugo" "Gm" }} → false
```
