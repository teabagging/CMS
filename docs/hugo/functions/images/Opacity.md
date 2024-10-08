---
title: images.Opacity
description: Returns an image filter that changes the opacity of an image.





---



The opacity value must be in the range [0, 1]. A value of `0` produces a transparent image, and a value of `1` produces an opaque image (no transparency).

## Usage

Create the filter:

```go-html-template
{{ $filter := images.Opacity 0.65 }}
```



The `images.Opacity` filter is most useful for target formats such as PNG and WebP that support transparency. If the source image does not support transparency, combine this filter with the `images.Process` filter:

```go-html-template
{{ with resources.Get "images/original.jpg" }}
  {{ $filters := slice
    (images.Opacity 0.65)
    (images.Process "png")
  }}
  {{ with . | images.Filter $filters }}
    <img src="{{ .RelPermalink }}" width="{{ .Width }}" height="{{ .Height }}" alt="">
  {{ end }}
{{ end }}
```

## Example


