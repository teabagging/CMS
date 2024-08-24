---
title: PostCSS
description: Process CSS files with PostCSS, using any of the available plugins.

---

## Setup

Follow the steps below to transform CSS using any of the [available PostCSS plugins](https://www.postcss.parts/).

Step 1
: Install [Node.js](https://nodejs.org/en/download).

Step 2
: Install the required Node.js packages in the root of your project. For example, to add vendor prefixes to CSS rules:

```sh
npm i -D postcss postcss-cli autoprefixer
```

Step 3
: Create a PostCSS configuration file in the root of your project. You must name this file `postcss.config.js` or one of the other [supported file names]. For example:

[supported file names]: https://github.com/postcss/postcss-load-config#usage






If you are a Windows user, and the path to your project contains a space, you must place the PostCSS configuration within the package.json file. See [this example](https://github.com/postcss/postcss-load-config#packagejson) and issue [#7333](https://github.com/gohugoio/hugo/issues/7333).


Step 4
: Place your CSS file within the `assets` directory.

Step 5
: Capture the CSS file as a resource and pipe it through `css.PostCSS` (alias `postCSS`):



## Options

The `css.PostCSS` method takes an optional map of options.

config
: (`string`) The directory that contains the PostCSS configuration file. Default is the root of the project directory.

noMap
: (`bool`) Default is `false`. If `true`, disables inline sourcemaps.

inlineImports
: (`bool`) Default is `false`. Enable inlining of @import statements. It does so recursively, but will only import a file once.
URL imports (e.g. `@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');`) and imports with media queries will be ignored.
Note that this import routine does not care about the CSS spec, so you can have @import anywhere in the file.
Hugo will look for imports relative to the module mount and will respect theme overrides.

skipInlineImportsNotFound
: (`bool`) Default is `false`. If you have regular CSS imports in your CSS that you want to preserve, you can either use imports with URL or media queries (Hugo does not try to resolve those) or set `skipInlineImportsNotFound` to true.



## No configuration file

To avoid using a PostCSS configuration file, you can specify a minimal configuration using the options map.

use
: (`string`) A space-delimited list of PostCSS plugins to use.

parser
: (`string`) A custom PostCSS parser.

stringifier
: (`string`) A custom PostCSS stringifier.

syntax
: (`string`) Custom postcss syntax.



## Check Hugo environment

The current Hugo environment name (set by `--environment` or in configuration or OS environment) is available in the Node context, which allows constructs like this:


