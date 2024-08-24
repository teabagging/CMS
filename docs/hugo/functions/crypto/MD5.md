---
title: crypto.MD5
description: Hashes the given input and returns its MD5 checksum encoded to a hexadecimal string.



---

```go-html-template
{{ md5 "Hello world" }} → 3e25960a79dbc69b674cd4ec67a72c62
```

This can be useful if you want to use [Gravatar](https://en.gravatar.com/) for generating a unique avatar:

```html
<img src="https://www.gravatar.com/avatar/{{ md5 "your@email.com" }}?s=100&d=identicon">
```
