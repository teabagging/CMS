---
title: break
description: Used with the range statement, stops the innermost iteration and bypasses all remaining iterations.




---

This template code:

```go-html-template
{{ $s := slice "foo" "bar" "baz" }}
{{ range $s }}
  {{ if eq . "bar" }}
    {{ break }}
  {{ end }}
  {{ . }}
{{ end }}
```

Is rendered to:

```html
foo
```


