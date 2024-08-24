---
title: images.Overlay
description: Returns an image filter that overlays the source image at the given coordinates, relative to the upper left corner.





---

## Usage

Capture the overlay image as a resource:

```go-html-template
{{ $overlay := "" }}
{{ $path := "images/logo.png" }}
{{ with resources.Get $path }}
  {{ $overlay = . }}
{{ else }}
  {{ errorf "Unable to get resource %q" $path }}
{{ end }}
```

The overlay image can be a [global resource], a [page resource], or a [remote resource].

[global resource]: /getting-started/glossary/#global-resource
[page resource]: /getting-started/glossary/#page-resource
[remote resource]: /getting-started/glossary/#remote-resource

Create the filter:

```go-html-template
{{ $filter := images.Overlay $overlay 20 20 }}
```



## Example


