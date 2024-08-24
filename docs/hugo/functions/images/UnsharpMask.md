---
title: images.UnsharpMask
description: Returns an image filter that sharpens an image.




---

The sigma argument is used in a gaussian function and affects the radius of effect. Sigma must be positive. The sharpen radius is approximately 3 times the sigma value.

The amount argument controls how much darker and how much lighter the edge borders become. Typically between 0.5 and 1.5.

The threshold argument controls the minimum brightness change that will be sharpened. Typically between 0 and 0.05.

## Usage

Create the filter:

```go-html-template
{{ $filter := images.UnsharpMask 10 0.4 0.03 }}
```



## Example

