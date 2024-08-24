---
title: diagrams.Goat
description: Converts ASCII art to an SVG diagram, returning a GoAT diagram object.




---

Useful in a [code block render hook], the `diagram.Goat` function converts ASCII art to an SVG diagram, returning a [GoAT] diagram object with the following methods:

[GoAT]: https://github.com/blampe/goat#readme
[code block render hook]: /render-hooks/code-blocks/

Inner
: (`template.HTML`) Returns the SVG child elements without a wrapping `svg` element, allowing you to create your own wrapper.

Wrapped
: (`template.HTML`) Returns the SVG child elements wrapped in an `svg` element.

Width
: (`int`) Returns the width of the rendered diagram, in pixels.

Height
: (`int`) Returns the height of the rendered diagram, in pixels.

## GoAT Diagrams

Hugo natively supports [GoAT](https://github.com/bep/goat) diagrams with an [embedded code block render hook].



This Markdown:

````
```goat
.---.     .-.       .-.       .-.     .---.
| A +--->| 1 |<--->| 2 |<--->| 3 |<---+ B |
'---'     '-'       '+'       '+'     '---'
```
````

Is rendered to:

```html
<div class="goat svg-container">
  <svg xmlns="http://www.w3.org/2000/svg" font-family="Menlo,Lucida Console,monospace" viewBox="0 0 352 57">
    ...
  </svg>
</div>
```

Which appears in your browser as:

```goat {class="mw6-ns"}
.---.     .-.       .-.       .-.     .---.
| A +--->| 1 |<--->| 2 |<--->| 3 |<---+ B |
'---'     '-'       '+'       '+'     '---'
```

To customize rendering, override Hugo's [embedded code block render hook] for GoAT diagrams.

## Code block render hook

By way of example, let's create a code block render hook to render GoAT diagrams as `figure` elements with an optional caption.



This Markdown:


Is rendered to:

```html
<figure id="diagram-1">
  <svg class="foo" width="272" height="57" xmlns="http://www.w3.org/2000/svg" version="1.1">
    ...
  </svg>
  <figcaption>Diagram 1: Example</figcaption>
</figure>
```

Use CSS to style the SVG as needed:

```css
svg.foo {
  font-family: "Segoe UI","Noto Sans",Helvetica,Arial,sans-serif
}
```
