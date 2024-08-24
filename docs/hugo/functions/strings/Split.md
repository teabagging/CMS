---
title: strings.Split
description: Returns a slice of strings by splitting the given string by a delimiter.




---

Examples:

```go-html-template
{{ split "tag1,tag2,tag3" "," }} → ["tag1", "tag2", "tag3"]
{{ split "abc" "" }} → ["a", "b", "c"]
```


The `strings.Split` function essentially does the opposite of the [`collections.Delimit`] function. While `split` creates a slice from a string, `delimit` creates a string from a slice.

[`collections.Delimit`]: /functions/collections/delimit/

