---
title: continue
description: Used with the range statement, stops the innermost iteration and continues to the next iteration.



---

This template code:

```go-html-template
{{ $s := slice "foo" "bar" "baz" }}
{{ range $s }}
  {{ if eq . "bar" }}
    {{ continue }}
  {{ end }}
  {{ . }}
{{ end }}
```

Is rendered to:

```html
foo
baz
```


