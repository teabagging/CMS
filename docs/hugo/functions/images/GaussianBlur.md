---
title: images.GaussianBlur
description: Returns an image filter that applies a gaussian blur to an image.





---

The sigma value must be positive, and indicates how much the image will be blurred. The blur-affected radius is approximately 3 times the sigma value.

## Usage

Create the filter:

```go-html-template
{{ $filter := images.GaussianBlur 5 }}
```



## Example

