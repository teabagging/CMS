# Architecture

Ghost is structured as a modern, decoupled web application with a sensible service-based architecture.

1. **A robust core JSON API**
2. **A beautiful admin client app**
3. **A simple, powerful front-end theme layer**

These three areas work together to make every Ghost site function smoothly, but because they’re decoupled there’s plenty of room for customisation.

---

### How things fit together

![Ghost Architecture](https://ghost.org/images/docs/concepts/ghost-architecture_hu6c4bbd92be6e8f2ca966b7ab8d796eb5_275325_1000x0_resize_q100_h2_box_3.webp)Physically, the Ghost codebase is structured in two main directories:

* `core` - Contains the core files which make up Ghost
* `content` - Contains the files which may be added or changed by the user such as themes and images

#### Data & Storage

Ghost ships with the [Bookshelf.js ORM](https://bookshelfjs.org/) layer by default allowing for a range of databases to be used. Currently SQLite3 is the supported default in development while MySQL is recommended for production. Other databases are available, and compatible, but not supported by the core team.

Additionally, while Ghost uses local file storage by default it’s also possible to use custom storage adapters to make your filesystem completely external. There are fairly wide range of pre-made [storage adapters for Ghost](https://ghost.org/integrations/?tag=storage) already available for use.

#### Ghost-CLI

Orchestrating these different components is done via a comprehensive CLI and set of utilities to keep everything running and up to date.

#### Philosophy

Ghost is architected to be familiar and easy to work with for teams who are already used to working with JavaScript based codebases, whilst still being accessible to a broad audience. It’s neither the most bleeding-edge structure in the world, nor the most simple, but strives to be right balance between the two.

> You can help build the future. Ghost is currently hiring Product Engineers - check out what it’s like to be part of the team and see our open roles at [careers.ghost.org](https://careers.ghost.org/)

---

## Ghost Core

At its heart, Ghost is a RESTful JSON API — designed to create, manage and retrieve publication content with ease.

Ghost’s API is split by function into two parts: Content and Admin. Each has its own authentication methods, structure and extensive tooling so that common publication usecases are solved with minimal effort.

Whether you want to publish content from your favourite desktop editor, build a custom interface for handling editorial workflow, share your most recent posts on your marketing site, or use Ghost as a full headless CMS, Ghost has the tools to support you.

### Content API

Ghost’s public Content API is what delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app or other embedded media.

Access control is managed via an API key, and even the most complex filters are made simple with our [query language](https://ghost.org/docs/content-api/#filtering). The Content API is designed to be fully cachable, meaning you can fetch data as often as you like without limitation.

### Admin API

Managing content is done via Ghost’s Admin API, which has both read and write access used to create and update content.

The Admin API provides secure role-based authentication so that you can publish from anywhere with confidence, either as a staff user via session authentication or via an integration with a third-party service.

When authenticated with the **admin** or **owner** role, the Admin API provides full control for creating, editing and deleting all data in your publication, giving you even more power and flexibility than the standard Ghost admin client.

### JavaScript SDK

Ghost core comes with an accompanying JavaScript [API Client](https://ghost.org/docs/content-api/javascript/) and [SDK](https://ghost.org/docs/content-api/javascript/#javascript-sdk) designed to remove pain around authentication and data access.

It provides tools for working with API data to accomplish common use cases such as returning a list of tags for a post, rendering meta data in the `<head>`, and outputting data with sensible fallbacks.

Leveraging FLOSS & npm, an ever-increasing amount of Ghost’s JavaScript tooling has been made available. If you’re working in JavaScript, chances are you won’t need to code anything more than wiring.

### Webhooks

Notify an external service when content has changed or been updated by calling a configured HTTP endpoint. This makes it a breeze to do things like trigger a rebuild in a static site generator, or notify Slack that something happened.

By combining Webhooks and the API it is possible to integrate into any aspect of your content lifecycle, to enable a wide range of content distribution and workflow automation use cases.

### Versioning

Ghost ships with a mature set of core APIs, with only minimal changes between major versions. We maintain a [stability index](https://ghost.org/docs/faq/api-versioning/) so that you can be sure about depending on them in production.

Ghost major versions ship every 8-12 months, meaning code you write against our API today will be stable for a minimum of 2 years.

---

## Admin Client

A streamlined clientside admin interface for editors who need a powerful tool to manage their content.

Traditionally, people writing content and people writing code rarely agree on the best platform to use. Tools with great editors generally lack speed and extensibility, and speedy frameworks basically always sacrifice user experience.

### Overview

Thanks to its decoupled architecture Ghost is able to have the best of both worlds. Ghost-Admin is a completely independent client application to the Ghost Core API which doesn’t have any impact on performance. And, writers don’t need to suffer their way through learning Git just to publish a new post.

Great for editors. Great for developers.

![Ghost Admin](https://ghost.org/images/docs/concepts/ghost-admin_hu71133877b7ba98790d6379dca0b417de_69599_1421x0_resize_q100_h2_box_3.webp)### Publishing workflow

Hacking together some Markdown files and throwing a static-site generator on top is nice in theory, but anyone who has tried to manage a content archive knows how quickly this falls apart even under light usage. What happens when you want to schedule a post to be published on Monday?

![Publishing Worfklow](https://ghost.org/images/docs/concepts/publishing-workflow_hu46dc9229fc86b7d84b830ed2c4f822ed_23521_728x0_resize_q100_h2_box_3.webp)Great editorial teams need proper tools which help them be effective, which is why Ghost-Admin has all the standard editorial workflow features available at the click of a button. From inputting custom social and SEO data to customising exactly how and where content will be output.

### Best-in-class editor

Ghost Admin also comes with a world-class editor for authoring posts, which is directly tied to a rock-solid document storage format. More on that a bit later!

![Ghost Editor](https://ghost.org/images/docs/concepts/ghost-admin-editor_hu2424779d321f8c77f888150ff83e2859_59570_1236x0_resize_q100_h2_box_3.webp)But, our default client app isn’t the only way to interact with content on the Ghost [Admin API](https://ghost.org/docs/admin-api/). You can send data into Ghost from pretty much anywhere, or even write your own custom admin client if you have a particular usecase which requires it.

Ghost-Admin is extremely powerful but entirely optional.

---

## Front-end

Ghost is a full headless CMS which is completely agnostic of any particular front end or static site framework.

Just like Ghost’s admin client, its front-end is both optional and interchangeable. While Ghost’s early architecture represented more of a standard monolithic web-app, it’s now compatible with just about any front-end you can throw at it.

It doesn’t even have to be a website!

### Handlebars Themes

Ghost ships with its own [Handlebars.js](https://ghost.org/docs/themes/) theme layer served by an Express.js webserver, so out of the box it automatically comes with a default front-end. This is a really fast way to get a site up and running, and despite being relatively simple Handlebars is both powerful and extremely performant.

Ghost Handlebars Themes have the additional benefit of being fairly widely adopted since the platform first launched back in 2013, so there’s a broad [third party marketplace](https://ghost.org/marketplace/) of pre-built themes as well as [extensive documentation](https://ghost.org/docs/themes/) on how to build a custom theme.

### Static Site Generators

Thanks to its decoupled architecture Ghost is also compatible with just about any of the front-end frameworks or static site generators which have become increasingly popular thanks to being fun to work with, extremely fast, and more and more powerful as the JAMstack grows in maturity. So it works with the tools you already use.

This very documentation site is running on a [Gatsby.js](https://ghost.org/docs/jamstack/gatsby/) front-end, connected to both **Ghost** and **GitHub** as content sources, hosted statically on [Netlify](https://netlify.com/) with dynamic serverless functions powered by [AWS Lambda](https://aws.amazon.com/lambda/) (like the feedback form at the bottom of this page). It’s a brave new world!

We’re working on greatly expanding our range of documentation, tools and SDKs to better serve the wider front-end development community.

### Custom front-ends

Of course you can also just build your own completely custom front-end, too. Particularly if you’re using the Ghost API as a service to drive content infrastructure for a mobile or native application which isn’t based on the web.
