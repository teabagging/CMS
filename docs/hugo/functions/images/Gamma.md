---
title: images.Gamma
description: Returns an image filter that performs gamma correction on an image.




---

The gamma value must be positive. A value greater than 1 lightens the image, while a value less than 1 darkens the image. The filter has no effect when the gamma value is&nbsp;1.

## Usage

Create the filter:

```go-html-template
{{ $filter := images.Gamma 1.667 }}
```



## Example


