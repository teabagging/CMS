---
title: images.Colorize
description: Returns an image filter that produces a colorized version of an image.





---

The hue is the angle on the color wheel, typically in the range [0, 360].

The saturation must be in the range [0, 100].

The percentage specifies the strength of the effect, and must be in the range [0, 100].

## Usage

Create the filter:

```go-html-template
{{ $filter := images.Colorize 180 50 20 }}
```



## Example

