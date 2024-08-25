# Helpers

Helpers add additional functionally to Handlebars, the templating language Ghost themes use.

## Functional helpers

Functional helpers are used to work with data objects. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.


| Tag                                                       | Description                                                       |
| --------------------------------------------------------- | ----------------------------------------------------------------- |
| [foreach](https://ghost.org/docs/themes/helpers/foreach/) | Loop helper designed for working with lists of posts              |
| [get](https://ghost.org/docs/themes/helpers/get/)         | Special block helper for custom queries                           |
| [has](https://ghost.org/docs/themes/helpers/has/)         | Like`{{#if}}` but with the ability to do more than test a boolean |
| [if](https://ghost.org/docs/themes/helpers/if/)           | Test very simple conditionals                                     |
| [is](https://ghost.org/docs/themes/helpers/is/)           | Check the context of the current route                            |
| [match](https://ghost.org/docs/themes/helpers/match/)     | Compare two values for equality                                   |
| [unless](https://ghost.org/docs/themes/helpers/unless/)   | The opposite of`{{#if}}`                                          |

## Data helpers

Data helpers are used to output data from your site. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.


| Tag                                                                               | Description                                                          |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [@config](https://ghost.org/docs/themes/helpers/config/)                          | Provides access to global data properties                            |
| [@custom](https://ghost.org/docs/themes/helpers/custom/)                          | Provides access to custom theme settings                             |
| [@page](https://ghost.org/docs/themes/helpers/page/)                              | Provides access to page settings                                     |
| [@site](https://ghost.org/docs/themes/helpers/site/)                              | Provides access to global settings                                   |
| [@member](https://ghost.org/docs/themes/members/#the-member-object)               | Provides access to member data                                       |
| [authors](https://ghost.org/docs/themes/helpers/authors/)                         | Outputs the post author(s)                                           |
| [comments](https://ghost.org/docs/themes/helpers/comments/)                       | Outputs Ghost's member-based commenting system                       |
| [content](https://ghost.org/docs/themes/helpers/content/)                         | Outputs the full post content as HTML                                |
| [date](https://ghost.org/docs/themes/helpers/date/)                               | Outputs the date in a format of your choosing                        |
| [excerpt](https://ghost.org/docs/themes/helpers/excerpt/)                         | Outputs the custom excerpt, or the post content with HTML stripped   |
| [facebook](https://ghost.org/docs/themes/helpers/facebook/)                       | Outputs the full URL to the Facebook profile from Settings           |
| [img\_url](https://ghost.org/docs/themes/helpers/img_url/)                        | Outputs the correctly calculated URL for the provided image property |
| [link](https://ghost.org/docs/themes/helpers/link/)                               | Creates links with dynamic classes                                   |
| [navigation](https://ghost.org/docs/themes/helpers/navigation/)                   | Helper which outputs formatted HTML for navigation links             |
| [post](https://ghost.org/docs/themes/helpers/post/)                               | More`object` than helper – Contains all data for a specific post    |
| [price](https://ghost.org/docs/themes/helpers/price/)                             | Outputs a price with formatting options                              |
| [readable\_url](https://ghost.org/docs/themes/helpers/readable_url/)              | Returns a human-readable URL                                         |
| [recommendations](https://ghost.org/docs/themes/helpers/recommendations/)         | Outputs a list of recommended sites                                  |
| [tags](https://ghost.org/docs/themes/helpers/tags/)                               | Outputs the post tags                                                |
| [tiers](https://ghost.org/docs/themes/helpers/tiers/)                             | Outputs the post tier(s)                                             |
| [title](https://ghost.org/docs/themes/helpers/title/)                             | The post title, when inside the`post` scope                          |
| [total\_members](https://ghost.org/docs/themes/helpers/total_members/)            | Outputs the number of members, rounded and humanised                 |
| [total\_paid\_members](https://ghost.org/docs/themes/helpers/total_paid_members/) | Outputs the number of paying members, rounded and humanised          |
| [twitter](https://ghost.org/docs/themes/helpers/twitter/)                         | Outputs the full URL to the Twitter profile from Settings            |
| [url](https://ghost.org/docs/themes/helpers/url/)                                 | The post URL, when inside the`post` scope                            |

## Utility helpers

Utility helpers are used to perform minor, optional tasks. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.


| Tag                                                                                                                                           | Description                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [asset](https://ghost.org/docs/themes/helpers/asset/)                                                                                         | Outputs cachable and cache-busting relative URLs to various asset types         |
| [block](https://ghost.org/docs/themes/helpers/block/)                                                                                         | Used along with`{{contentFor}}` to pass data up and down the template hierarchy |
| [body\_class](https://ghost.org/docs/themes/helpers/body_class/)                                                                              | Outputs dynamic CSS classes intended for the`<body>` tag                        |
| [concat](https://ghost.org/docs/themes/helpers/concat/)                                                                                       | Concatenate and link multiple things together                                   |
| [encode](https://ghost.org/docs/themes/helpers/encode/)                                                                                       | Encode text to be safely used in a URL                                          |
| [ghost\_head](https://ghost.org/docs/themes/helpers/ghost_head_foot/) / [ghost\_foot](https://ghost.org/docs/themes/helpers/ghost_head_foot/) | Outputs vital system information at the top and bottom of the document          |
| [link\_class](https://ghost.org/docs/themes/helpers/link_class/)                                                                              | Add dynamic classes depending on the currently viewed page                      |
| [log](https://ghost.org/docs/themes/helpers/log/)                                                                                             | In development mode, output data in the console                                 |
| [pagination](https://ghost.org/docs/themes/helpers/pagination/)                                                                               | Helper which outputs formatted HTML for pagination links                        |
| [partials](https://ghost.org/docs/themes/helpers/partials/)                                                                                   | Include chunks of reusable template code                                        |
| [plural](https://ghost.org/docs/themes/helpers/plural/)                                                                                       | Output different text based on a given input                                    |
| [post\_class](https://ghost.org/docs/themes/helpers/post_class/)                                                                              | Outputs classes intended for your post container                                |
| [prev\_post](https://ghost.org/docs/themes/helpers/prev_next_post/) / [next\_post](https://ghost.org/docs/themes/helpers/prev_next_post/)     | Within the`post` scope, returns the URL to the previous or next post            |
| [reading\_time](https://ghost.org/docs/themes/helpers/reading_time/)                                                                          | Renders the estimated reading time for a post                                   |
| [search](https://ghost.org/docs/themes/helpers/search/)                                                                                       | Output a working, pre-styled search button & icon                               |
| [translate](https://ghost.org/docs/themes/helpers/translate/)                                                                                 | Output text in your site language (the backbone of i18n)                        |
