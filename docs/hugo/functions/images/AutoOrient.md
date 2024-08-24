---
title: images.AutoOrient
description: Returns an image filter that rotates and flips an image as needed per its EXIF orientation tag.





---



## Usage

Create the filter:

```go-html-template
{{ $filter := images.AutoOrient }}
```




When using with other filters, specify `images.AutoOrient` first.


```go-html-template
{{ $filters := slice
  images.AutoOrient
  (images.Process "resize 200x")
}}
{{ with resources.Get "images/original.jpg" }}
  {{ with images.Filter $filters . }}
    <img src="{{ .RelPermalink }}" width="{{ .Width }}" height="{{ .Height }}" alt="">
  {{ end }}
{{ end }}
```

## Example


