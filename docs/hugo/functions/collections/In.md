---
title: collections.In
description: Reports whether the given value is a member of the given set.


---

The `SET` can be an [array], [slice], or [string].

[array]: /getting-started/glossary/#array
[slice]: /getting-started/glossary/#slice
[string]: /getting-started/glossary/#string

```go-html-template
{{ $s := slice "a" "b" "c" }}
{{ in $s "b" }} → true
```

```go-html-template
{{ $s := slice 1 2 3 }}
{{ in $s 2 }} → true
```

```go-html-template
{{ $s := slice 1.11 2.22 3.33 }}
{{ in $s 2.22 }} → true
```

```go-html-template
{{ $s := "abc" }}
{{ in $s "b" }} → true
```
