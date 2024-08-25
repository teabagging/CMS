# Ghost Handlebars Themes

The Ghost theme layer has been engineered to give developers and designers the flexibility to build custom publications that are powered by the Ghost platform.

## Theme development

Ghost themes use the Handlebars templating language which creates a strong separation between templates (the HTML) and any JavaScript logic with the use of helpers. This allows themes to be super fast, with a dynamic client side app, and server side publication content that is sent to the browser as static HTML.

Ghost also makes use of an additional library called `express-hbs` which adds some additional features to Handlebars, such as layouts and partials.

If you’ve previously built themes for other popular platforms, working with the Ghost theme layer is extremely accessible. This documentation gives you the tools required to create static HTML and CSS for a theme, using Handlebars expressions when you need to render dynamic data.

Our tutorial on the [essential concepts to known when building a Ghost theme](https://ghost.org/tutorials/essential-concepts/), provides a fantastic introduction to everything you need to know to start building beautiful themes.

## Handlebars

The Handlebars templating language provides the power to build semantic templates effectively.

* [Handlebars documentation](https://handlebarsjs.com/guide/expressions.html)

Installation of Handlebars is already done for you in Ghost ✨

## Custom settings

Offering customization options to theme users can be done using custom settings. This allows theme developers to empower non-developers to make controlled changes.

Head to the [Custom settings documentation](https://ghost.org/docs/themes/custom-settings/) to learn more.

## GScan

Validating your Ghost theme is handled efficiently with the [GScan tool](https://gscan.ghost.org/). GScan will check your theme for errors, deprecations and compatibility issues.

* The [GScan site](https://gscan.ghost.org/) is your first port of call to test any themes that you’re building to get a full validation report
* When a theme is uploaded in Ghost admin, it will automatically be checked with `gscan` and any fatal errors will prevent the theme from being used
* `gscan` is also used as a command line tool

### Command line

To use GScan as a command line tool, globally install the `gscan` npm package:

```bash
# Install the npm package
npm install -g gscan

# Use gscan <file path> anywhere to run gscan against a folder
gscan /path/to/ghost/content/themes/casper

# Run gscan on a zip file
gscan -z /path/to/download/theme.zip
```

## What’s next?

That’s all of the background context required to get started. From here, take a look at the [structure](https://ghost.org/docs/themes/structure/) of Ghost themes and templates, and learn everything you need to know about the `package.json` file.

For community led support about theme development, visit [the forum](https://forum.ghost.org/c/themes/).
