# Custom settings

Custom theme settings are a powerful tool that allows theme developers to configure custom settings that appear in Ghost Admin — making it easy for site owners to make stylistic choices without needing to edit theme files.

## Overview

Custom theme settings are specified by the theme developer in the `package.json` file at the `config.custom` key, and there are five types of custom theme settings available:

* `select`
* `boolean`
* `color`
* `image`
* `text`

```json
{
    "config": {
        "custom": {
            "typography": {
                "type": "select",
                "options": ["Modern sans-serif", "Elegant serif"],
                "default": "Modern sans-serif"
            },
            "cta_text": {
                "type": "text",
                "default": "Sign up for more like this",
                "group": "post"
            }
        }
    }
}
```

Once defined in the `package.json` file, custom settings can be accessed in Handlebars templates using the `@custom` object.

```handlebars
<body class="{{body_class}} {{#match @custom.typography "Elegant serif"}}font-alt{{/match}}">
    ...
    <section class="footer-cta">
        {{#if @custom.cta_text}}<h2>{{@custom.cta_text}}</h2>{{/if}}
        <a href="#portal/signup">Sign up now</a>
    </section>
</body>
```

Themes are limited to a total of 20 custom settings. See the [usage guidelines](https://ghost.org/docs/themes/custom-settings/#guidelines-for-theme-developers) for details on the most effective ways to use custom settings.

## Setting keys/names

The key given to each setting is used as the display name in Ghost Admin, and as the property name on the `@custom` object.

```json
{
    "config": {
        "custom": {
            "cta_text": {
                "type": "text",
                "default": "Sign up for more like this",
                "group": "post",
                "description": "Used in a large CTA on the homepage and small one on the sidebar as well" 
            }
        }
    }
}
```

In this example, the `"cta_text"` key is displayed to site owners as **CTA Text** and can be referenced in Handlebars templates using `@custom.cta_text`.

![Text Custom Setting](https://ghost.org/images/docs/themes/setting-type-text_hu878685915f7c6b65155992b4a20a3eac_25477_1644x0_resize_q100_h2_box_3.webp)Setting keys must be all lowercase with no special characters and in `snake_case` where each space is represented by an `_`.

Changing a setting’s key when releasing a new theme version is a breaking change for site owners who upgrade from an older version. The setting with the old key is removed, losing any value entered by the site owner, and a new setting with the current key is created with its default value.

## Setting groups

Custom theme settings are grouped into one of three categories in the Admin UI:

* Site-wide
* Homepage
* Post

![Setting groups](https://ghost.org/images/docs/themes/setting-groups_hue6b8d122d020d3d22c56441496c8ee08_76100_1134x0_resize_q100_h2_box_3.webp)By default, all custom settings appear in the **Site-wide** category. Custom settings that are specific to the homepage or post display are defined with an optional `"group"` property with the value `"homepage"` or `"post"`.

```json
{
    "config": {
        "custom": {
            "typography": {
                "type": "select",
                "options": ["Modern sans-serif", "Elegant serif"],
                "default": "Modern sans-serif",
                "description": "Define the default font used for the publication"
            },
            "feed_layout": {
                "type": "select",
                "options": ["Dynamic grid", "Simple grid", "List"],
                "default": "Dynamic grid",
                "group": "homepage",
                "description": "The layout of the post feed on the homepage, tag, and author pages"
            },
            "cta_text": {
                "type": "text",
                "default": "Sign up for more like this",
                "group": "post",
                "description": "Used in a large CTA on the homepage and small one on the sidebar as well" 
            }
        }
    }
}
```

Settings should be organized into groups that will make sense for site owners based on your usage of the setting in the theme.

## Setting a description

Give users more information about what a custom setting does by providing a short description. The description will appear along with the setting in Ghost admin. Description must be fewer than 100 characters.

## Setting types

Each of the five custom setting types has particular fields and requirements.

All custom settings require a valid `"type"` — an unknown type causes a theme validation error.

### Select

Presents a select input with options defined by the theme developer.

Select settings are used to offer site owners multiple predefined options in combination with the `match` helper:

```json
"feed_layout": {
    "type": "select",
    "options": ["Dynamic grid", "Simple grid", "List"],
    "default": "Dynamic grid"
}
```

```handlebars
{{#match @custom.feed_layout "Dynamic grid"}}
    //
{{/match}}
```

![Select Custom Setting](https://ghost.org/images/docs/themes/setting-type-select_hu66e48d0a12b84f5270a886c24dc079fa_5437_1876x0_resize_q100_h2_box_3.webp)#### Validation

* `options` is required and must be an array of strings
* `default` is required and must match one of the defined options

### Boolean

Presents a checkbox toggle.

```json
"recent_posts": {
    "type": "boolean",
    "default": true
}
```

![Boolean Custom Setting](https://ghost.org/images/docs/themes/setting-type-boolean_hu2ded47e2af98aad7bab23dbc5e0941ba_19117_1644x0_resize_q100_h2_box_3.webp)#### Validation

* `default` is required and must be either `true` or `false`

Boolean settings can simply be used with the `{{#if}}` helper:

```handlebars
{{#if @custom.recent_posts}}
    //
{{/if}}
```

### Color

Presents a color picker.

```json
"button_color": {
    "type": "color",
    "default": "#15171a"
}
```

![Color Custom Setting](https://ghost.org/images/docs/themes/setting-type-color_hue94a37f604d47f4aebf527f78c55a34e_28164_1644x0_resize_q100_h2_box_3.webp)#### Validation

* `default` is required and must be a valid hexadecimal string

Use the color setting value in the theme by accessing the custom setting directly.

```handlebars
<style>
    :root {
        {{#if @custom.button_color}}
        --button-bg-color: {{@custom.button_color}};
        {{/if}}
    }
</style>
```

### Image

Presents an image uploader. When output in themes, the value will be blank or a URL.

```json
"cta_background_image": {
    "type": "image"
}
```

![Image Custom Setting](https://ghost.org/images/docs/themes/setting-type-image_huefef4eb9ddaf1abc8b7f625866424bc8_24847_1644x0_resize_q100_h2_box_3.webp)#### Validation

* `default` is not allowed

Use the image setting value in the theme by directly accessing the setting, or use with the `{{img_url}}` helper. You can pass in dynamic image sizes, if you would like to output the image in question at a resized resolution based on your theme config.

```handlebars
<section class="footer-cta" {{#if @custom.cta_background_image}}style="background-image: url({{@custom.cta_background_image}});"{{/if}}>
    ...
</section>

// or
<img src="{{img_url @custom.cta_background_image size="large"}}" />
```

### Text

Presents a text input. The value may be blank or free-form text.

```json
"cta_text": {
    "type": "text",
    "default": "Sign up for more like this."
}
```

![Text Custom Setting](https://ghost.org/images/docs/themes/setting-type-text_hu878685915f7c6b65155992b4a20a3eac_25477_1644x0_resize_q100_h2_box_3.webp)#### Validation

* `default` is optional

Remember to allow a use case with no text. For example, this link will only be displayed if text has been provided:

```handlebars
{{#if @custom.cta_text}}
    <a href="#/portal/signup">{{@custom.cta_text}}</a>
{{/if}}
```

## Fallback settings

Regardless of the Ghost version, themes providing custom settings shouldn’t look broken, and should provide a fallback when necessary.

### Creating fallbacks for text settings

The default text for a text setting should be specified in `package.json` instead of adding it in the theme code as a fallback. This allows your theme to handle blank strings in the correct way:

```json
"cta_text": {
    "type": "text",
    "default": "Sign up now."
}
```

```handlebars
{{#if @custom.cta_text}}
    <h2>{{@custom.cta_text}}</h2>
{{/if}}
```

The only exception is when the theme **must** have text for a specific setting. In this situation, the default should be added in the theme as a fallback with an `{{else}}` statement:

```handlebars
<h2>
  {{#if @custom.copyright_text_override}}
		{{@custom.copyright_text_override}}
	{{else}}
		{{@site.title}} © {{date format="YYYY"}}
	{{/if}}
</h2>
```

## Setting visibility

Configure setting dependencies to ensure that only relevant settings are displayed to the user in Ghost Admin. For example, a theme may offer several different header styles: `Landing`, `Highlight`, `Magazine`, `Search`, `Off`. If that value is `Landing` or `Search`, then an additional option becomes visible in Ghost Admin that allows the use of the publication’s cover image as the background. Otherwise, the option is hidden. By configuring setting dependencies, users get a better experience by only seeing settings that are relevant.

To control when settings are visible, include the `visibility` key on the dependent setting. This key specifies the conditions that must be met for the setting to be displayed. Typically, you’ll specify the name of the parent setting and value it should have for the dependent setting to be visible. You can also use any [NQL syntax](https://ghost.org/docs/content-api/#filtering) for this — the same syntax used for filtering with the `get` helper.

**Example: Header style and background image**

In the following example, the `use_publication_cover_as_background` is only visible when `header_style` is `Landing` or `Search`. Note that when the visibility condition isn’t met, the dependent setting will render as `null` in the theme (i.e., `@custom.use_publication_cover_as_background` will be `null`).

```json
{
  "header_style": {
    "type": "select",
    "options": [
      "Landing",
      "Highlight",
      "Magazine",
      "Search",
      "Off"
    ],
    "default": "Landing",
    "group": "homepage"
  },
  "use_publication_cover_as_background": {
    "type": "boolean",
    "default": false,
    "description": "Cover image will be used as a background when the header style is Landing or Search",
    "group": "homepage",
    "visibility": "header_style:[Landing, Search]"
  }
}
```

**Example: Post feed style and thumbnails**

In this example, the `show_images_in_feed` setting is only visible when `post_feed_style` is set to `List`.

```json
{
  "post_feed_style": {
    "type": "select",
    "options": [
      "List",
      "Grid"
    ],
    "default": "List",
    "group": "homepage"
  },
  "show_images_in_feed": {
    "type": "boolean",
    "default": true,
    "description": "Toggles thumbnails of the post cards when the post feed style is List",
    "group": "homepage",
    "visibility": "post_feed_style:List"
  }
}
```

## Guidelines for theme developers

#### Custom settings should compliment the primary use case of the theme

Ghost Themes should always have a very **clear use case** and the implementation of custom settings should compliment that use case. For example, a theme that is designed for newsletters may have custom settings to make visual changes to button colors and typography, but shouldn’t include custom settings to turn the theme into a magazine layout.

✅ **Simple visual changes** — give site owners the ability to create a great visual impact without altering the primary use-case of the theme. For example, changing colors, fonts and images.

❌ **Complex layout settings** — using custom settings to alter the primary use case of the theme results in complicated code that is harder to manage in the future.

#### Custom settings should have a very clear visual impact

Custom settings are designed to allow site owners to make meaningful customizations to their theme, without needing to edit theme files or inject code.

**The total number of settings is limited to 20!**

Use your custom settings wisely to give publishers the tools they need to define the best visual fit for their brand.

✅ **Visual brand settings** — use custom settings to make brand adjustments that have a visual impact, such as changing the color of all buttons, changing the default CTA text on the homepage, or offering a dark mode toggle.

❌ **Repeated settings** — avoid using custom settings to make micro-adjustments to single elements of a theme, such as individual buttons.

❌ **Functional settings** — avoid using custom settings to change the way a theme functions, such as changing the pagination style, or removing the primary tag from posts — these are functional settings that should be determined based on the primary use case of the theme.

#### Using custom settings for external integrations

It’s possible to use custom settings to enable third-party integrations within your theme, such as commenting systems or website analytics. To use custom settings for this purpose, site owners should be asked to enter a simple piece of information such as a tracking ID, rather than adding HTML code into a custom text setting.

✅ Enter a Disqus shortname into a custom setting, and enabling the comment system only when the shortname is provided

✅ Enter a tracking ID into a custom setting, and enabling Google Analytics only when the ID is provided

❌ Ask users to add an embed code into custom settings to make an integration function.
