---
title: strings.TrimRight
description: Returns the given string, removing trailing characters specified in the cutset.




---

```go-html-template
{{ strings.TrimRight "a" "abba" }} → abb
```

The `strings.TrimRight` function converts the arguments to strings if possible:

```go-html-template
{{ strings.TrimRight 54 12345 }} → 123 (string)
{{ strings.TrimRight "eu" true }} → tr
```
