---
title: strings.Contains
description: Reports whether the given string contains the given substring.




---

```go-html-template
{{ strings.Contains "Hugo" "go" }} → true
```

The check is case sensitive:

```go-html-template
{{ strings.Contains "Hugo" "Go" }} → false
```
