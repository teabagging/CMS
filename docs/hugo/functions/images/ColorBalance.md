---
title: images.ColorBalance
description: Returns an image filter that changes the color balance of an image.





---

The percentage for each channel (red, green, blue) must be in the range [-100, 500].

## Usage

Create the filter:

```go-html-template
{{ $filter := images.ColorBalance -10 10 50 }}
```



## Example


