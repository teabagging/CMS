# Contexts

Each page in a Ghost theme belongs to a context, which determines which template is used, what data will be available and what content is output by the `{{body_class}}` helper.

A Ghost publication follows a structure that allows URLs or routes to be mapped to views which display specific data. This data could be a list of posts, a single post or an RSS feed. It is the route that determines what data is meant to be shown and what template is used to render it.

Rather than providing access to all data in all contexts, Ghost optimises what data is fetched using contexts to ensure publications are super fast!

### Using contexts

Contexts play a big part in the building blocks of a Ghost theme. Besides determining what data is available and what template to render, contexts also interact with [handlebars helpers](https://ghost.org/docs/themes/helpers/), since the context also determines what dynamic data the helper outputs.

For example, the `{{meta_title}}` helper outputs different things based on the current context. If the context is `post` then the helper knows it can use `post.meta_title` and in a `tag` context it uses `tag.meta_title`.

To detect a context in your theme, use the `{{#is}}` helper. For example, in a partial template that is shared between many contexts, using `{{#is}}` passes it a context and only executes the contained block when it is in that context.

## List of contexts

* [index](https://ghost.org/docs/themes/contexts/index-context/)
* [page](https://ghost.org/docs/themes/contexts/page/)
* [post](https://ghost.org/docs/themes/contexts/post/)
* [author](https://ghost.org/docs/themes/contexts/author/)
* [tag](https://ghost.org/docs/themes/contexts/tag/)
* [error](https://ghost.org/docs/themes/contexts/error/)
