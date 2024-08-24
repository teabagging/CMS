---
title: path.Clean
description: Replaces path separators with slashes (`/`) and returns the shortest path name equivalent to the given path.



---

See Go's [`path.Clean`] documentation for details.

[`path.Clean`]: https://pkg.go.dev/path#Clean

```go-html-template
{{ path.Clean "foo/bar" }} → foo/bar
{{ path.Clean "/foo/bar" }} → /foo/bar
{{ path.Clean "/foo/bar/" }} → /foo/bar
{{ path.Clean "/foo//bar/" }} → /foo/bar
{{ path.Clean "/foo/./bar/" }} → /foo/bar
{{ path.Clean "/foo/../bar/" }} → /bar
{{ path.Clean "/../foo/../bar/" }} → /bar
{{ path.Clean "" }} → .
```
