# Assets

Ghost themes support automatic image resizing, allowing you to use a minimal handlebars helper to output different image sizes.

Ghost automatically compresses and resizes images added to your post content and generates automatic responsive assets for maximum performance.

For all other images, such as feature images and theme images, the responsive images feature builds responsive image srcsets into your theme, and displays scaled down images when required to improve your site’s overall performance.

## Responsive images configuration

Responsive images can be defined in the `package.json` file. Ghost automatically generates copies of images at the specified sizes, and works like a cache, so the image sizes can be changed at any time. It’s recommended to have no more than 10 image sizes so media storage doesn’t grow out of control.

Here’s a sample of [the image sizes in Ghost’s default Casper theme](https://github.com/TryGhost/Casper/blob/main/package.json).

```json
// package.json

"config": {
    "image_sizes": {
        "xxs": {
            "width": 30
        },
        "xs": {
            "width": 100
        },
        "s": {
            "width": 300
        },
        "m": {
            "width": 600
        },
        "l": {
            "width": 1000
        },
        "xl": {
            "width": 2000
        }
    }
}
```

### Using image sizes

Once image sizes are defined, pass a `size` parameter to the(https://ghost.org/docs/themes/helpers/img_url/) helper in your theme to output an image at a particular size.

```handlebars
<img src="{{img_url feature_image size="s"}}">
```

To build [full responsive images](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433) create html srcsets passing in multiple image sizes, and let the browser do the rest.

Here’s an [example from Ghost default Casper theme](https://github.com/TryGhost/Casper/blob/main/partials/post-card.hbs) implementation:

```handlebars
<!-- index.hbs -->

<img class="post-image"
    srcset="{{img_url feature_image size="s"}} 300w,
            {{img_url feature_image size="m"}} 600w,
            {{img_url feature_image size="l"}} 1000w,
            {{img_url feature_image size="xl"}} 2000w"
    sizes="(max-width: 1000px) 400px, 700px"
    src="{{img_url feature_image size="m"}}"
    alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
/>
```

### Converting images to smaller image types

Pass a `format` parameter to the (https://ghost.org/docs/themes/helpers/img_url/) helper in your theme to output an image in a particular image format. This only works in combination with the `size` parameter.

```handlebars
{{img_url feature_image size="s" format="webp"}}
```

By converting an image from PNG, GIF, or JPEG to WebP, you can reduce its size by \~25% without any visible loss of quality. An even better image compression can be obtained with the AVIF format, but this [isn’t supported in all browsers](https://caniuse.com/avif) (and doesn’t support animation yet).

*Note that while image conversion changes the file type, the file extension stays the same. For example, an AVIF image will retain the `.jpg` extension.*

WebP is supported by all modern browsers, but we recommend to always add a fallback to the original file type to achieve wider browser support. Use a `<picture>` tag for this, which allows the browser to choose the first format it supports:

```handlebars
<picture>
    <!-- Serve the AVIF format if the browser supports it -->
    <!-- Remove this block when using animated images as feature images -->
    <source 
        srcset="{{img_url feature_image size="s" format="avif"}} 300w,
                {{img_url feature_image size="m" format="avif"}} 600w,
                {{img_url feature_image size="l" format="avif"}} 1000w,
                {{img_url feature_image size="xl" format="avif"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw" 
        type="image/avif"
    >
    <!-- Serve the WebP format if the browser supports it -->
    <source 
        srcset="{{img_url feature_image size="s" format="webp"}} 300w,
                {{img_url feature_image size="m" format="webp"}} 600w,
                {{img_url feature_image size="l" format="webp"}} 1000w,
                {{img_url feature_image size="xl" format="webp"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw" 
        type="image/webp"
    >
    <!-- Serve original file format as a fallback -->
    <img
        srcset="{{img_url feature_image size="s"}} 300w,
                {{img_url feature_image size="m"}} 600w,
                {{img_url feature_image size="l"}} 1000w,
                {{img_url feature_image size="xl"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw"
        src="{{img_url feature_image size="xl"}}"
        alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
    >
</picture>
```

## Compatibility

Unlike other platforms, there’s no manual work needed to manage image sizes in your theme, it’s all done in the background for you.

Image sizes are automatically generated for all feature images and theme images, and regenerated whenever an image is changed, the image sizes configuration is changed, or when theme changes are made. Images are generated on the first request for each image at a particular size.

Dynamic image sizes are *not* compatible with externally hosted images (except inserted images from [Unsplash](https://ghost.org/integrations/unsplash/)). If you store your image files on a third party storage adapter, then the image URL returned will be determined by the external source.
