---
title: block
description: Defines a template and executes it in place.



  
   
---

A block is shorthand for defining a template:

```go-html-template
{{ define "name" }} T1 {{ end }}
```

and then executing it in place:

```go-html-template
{{ template "name" pipeline }}
```
The typical use is to define a set of root templates that are then customized by redefining the block templates within.



