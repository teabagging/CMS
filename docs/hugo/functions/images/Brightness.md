---
title: images.Brightness
description: Returns an image filter that changes the brightness of an image.





---

The percentage must be in the range [-100, 100] where 0 has no effect. A value of `-100` produces a solid black image, and a value of `100` produces a solid white image.

## Usage

Create the image filter:

```go-html-template
{{ $filter := images.Brightness 12 }}
```



## Example

