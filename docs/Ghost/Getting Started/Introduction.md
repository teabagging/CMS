# Introduction

Ghost is an open source, professional publishing platform built on a modern Node.js technology stack — designed for teams who need power, flexibility and performance.

Hitting the right balance of needs has led Ghost to be used in production by organisations including Apple, Sky News, DuckDuckGo, Mozilla, Kickstarter, Square, CloudFlare, Tinder, the Bitcoin Foundation and [many more](https://ghost.org/explore/).

Every day Ghost powers some of the most-read stories on the internet, serving hundreds of millions of requests across tens of thousands of sites.

## How is Ghost different?

The first question most people have is, of course, how is Ghost different from everything else out there? Here’s a table to give you a quick summary:


|                                                                    | Ghost<br/>(That's us!) | Open platforms<br/>(eg. WordPress) | Closed platforms<br/>(eg. Substack) |
| ------------------------------------------------------------------ | ---------------------- | ---------------------------------- | ----------------------------------- |
| 🏎 Exceptionally fast                                              | ✅                     | ❌                                 | ✅                                  |
| 🔒 Reliably secure                                                 | ✅                     | ❌                                 | ✅                                  |
| 🎨 Great design                                                    | ✅                     | ❌                                 | ✅                                  |
| 👩🏼‍🚀 Modern technology                                         | ✅                     | ❌                                 | ✅                                  |
| ♻️ Open Source                                                   | ✅                     | ✅                                 | ❌                                  |
| 🏰 Own your brand+data                                             | ✅                     | ✅                                 | ❌                                  |
| 🌍 Use a custom domain                                             | ✅                     | ✅                                 | ❌                                  |
| 🖼 Control your site design                                        | ✅                     | ✅                                 | ❌                                  |
| 🌱 Censorship-free                                                 | ✅                     | ✅                                 | ❌                                  |
| ⭐️ Built-in SEO control                                          | ✅                     | ❌                                 | ❌                                  |
| 🚀 Native REST API                                                 | ✅                     | ❌                                 | ❌                                  |
| 🛠 Comprehensive SDK                                               | ✅                     | ❌                                 | ❌                                  |
| 🛒 Built-in membership & subscription<br/>commerce features        | ✅                     | ❌                                 | ❌                                  |
| 🤝 Works with any front-end<br/>or static site framework           | ✅                     | ❌                                 | ❌                                  |
| ❤️ Non-profit organisation with<br/>a sustainable business model | ✅                     | ❌                                 | ❌                                  |

**In short:** Other open platforms are generally old, slow and bloated, while other closed platforms give you absolutely no control or ownership of your content. Ghost provides the best of both worlds, and more.

Still after a more detailed comparison? We’ve got some in-depth articles comparing Ghost to [WordPress](https://ghost.org/vs/wordpress/), [Medium](https://ghost.org/vs/medium/) and [Tumblr](https://ghost.org/vs/tumblr/).

## Background

Ghost was created by [John O’Nolan](https://twitter.com/johnonolan) and [Hannah Wolfe](https://twitter.com/erisds) in 2013 following a runaway Kickstarter campaign to create a new, modern publishing platform to serve professional publishers.

Previously, John was a core contributor of WordPress and watched as the platform grew more complicated and less focused over time. Ghost started out as a little idea to be the antidote to that pain, and quickly grew in popularity as the demand for a modern open source solution became evident.

Today, Ghost is one of the most popular open source projects in the world - the **#1** CMS [on GitHub](https://github.com/tryghost/ghost) - and is used in production by millions of people.

More than anything, we approach building Ghost to create the product we’ve always wanted to use, the company we’ve always wanted to do business with, and the environment we’ve always wanted to work in.

So, we do things a little differently to most others:

#### Independent structure

Ghost is structured as a [non-profit organisation](https://ghost.org/about/) to ensure it can legally never be sold and will always remain independent, building products based on the needs of its users - *not* the whims of investors looking for 💰 returns.

#### Sustainable business

While the software we release is free, we also sell [premium managed hosting](https://ghost.org/pricing/) for it, which gives the non-profit organisation a sustainable business model and allows it to be 100% self-funded.

#### Distributed team

Having a sustainable business allows us to hire open source contributors to work on Ghost full-time, and we do this [entirely remotely](https://ghost.org/about/#careers). The core Ghost team is fully distributed and live wherever they choose.

#### Transparent by default

We share [our revenue](https://ghost.org/about/) transparently and [our code](https://github.com/tryghost) openly so anyone can verify what we do and how we do it. No cloaks or daggers.

#### Unconditional open source

All our projects are released under the permissive open source [MIT licence](https://en.wikipedia.org/wiki/MIT_License), so that even if the company were to fail, our code could still be picked up and carried on by anyone in the world without restriction.

## Features

Ghost comes with powerful features built directly into the core software which can be customised and configured based on the needs of each individual site.

Here’s a quick overview of the main features you’ll probably be interested in as you’re getting started. This isn’t an exhaustive list, just some highlights.

### Built-in memberships & subscriptions

Don’t just create content for anonymous visitors, Ghost lets you turn your audience into a business with native support for member signups and paid subscription commerce. It’s the only platform with memberships built in by default, and deeply integrated.

Check out our [membership guide](https://ghost.org/docs/members/) for more details.

### Developer-friendly API

At its core Ghost is a self-consuming, RESTful JSON API with decoupled admin client and front-end. We provide lots of tooling to get a site running as quickly as possible, but at the end of the day it’s **Just JSON** ™️, so if you want to use Ghost completely headless and write your own frontend or backend… you can!

Equally, Ghost is heavily designed for performance. There are 2-5 frontpage stories on HackerNews at any given time that are served by Ghost. It handles scale with ease and doesn’t fall over as a result of traffic spikes.

### A serious editor

Ghost has the rich editor that every writer wants, but under the hood it delivers far more power than you would expect. All content is stored in a standardised JSON-based document storage format called Lexical, which includes support for extensible rich media objects called Cards.

In simple terms you can think of it like having Slack integrations inside Medium’s editor, stored sanely and fully accessible via API.

### Custom site structures

Routing in Ghost is completely configurable based on your needs. Out of the box Ghost comes with a standard reverse chronological feed of posts with clean permalinks and basic pages, but that’s easy to change.

Whether you need a full **multi-language site** with `/en/` and `/de/` base URLs, or you want to build out specific directory structures for hierarchical data like `/europe/uk/london/` — Ghost’s routing layer can be manipulated in any number of ways to achieve your use case.

### Roles & permissions

Set up your site with sensible user roles and permissions built-in from the start.

* **Contributors:** Can log in and write posts, but cannot publish.
* **Authors:** Can create and publish new posts and tags.
* **Editors:** Can invite, manage and edit authors and contributors.
* **Administrators:** Have full permissions to edit all data and settings.
* **Owner:** An admin who cannot be deleted + has access to billing details.

### Custom themes

Ghost ships with a simple Handlebars.js front-end theme layer which is very straightforward to work with and surprisingly powerful. Many people stick with the default theme ([live demo](https://demo.ghost.io/) / [source code](https://github.com/tryghost/casper)), which provides a clean magazine design - but this can be modified or entirely replaced.

The Ghost [Theme Marketplace](https://ghost.org/marketplace/) provides a selection of pre-made third-party themes which can be installed with ease. Of course you can also build your own [Handlebars Theme](https://ghost.org/docs/themes/) or use a [different front-end](https://ghost.org/docs/content-api/) altogether.

### Apps & integrations

Because Ghost is completely open source, built as a JSON API, has webhooks, and gives you full control over the front-end: It essentially integrates with absolutely everything. Some things are easier than others, but almost anything is possible with a little elbow grease. Or a metaphor more recent than 1803.

You can browse our large [directory of integrations](https://ghost.org/integrations/) with instructions, or build any manner of custom integration yourself by writing a little JavaScript and Markup to do whatever you want.

You don’t need janky broken plugins which slow your site down. Integrations are the modern way to achieve extended functionality with ease.

### Search engine optimisation

Ghost comes with world-class SEO and everything you need to ensure that your content shows up in search indexes quickly and consistently.

##### No plugins needed

Ghost has all the fundamental technical SEO optimisations built directly into core, without any need to rely on third party plugins. It also has a far superior speed and pageload performance thanks to Node.js.

##### Automatic google XML sitemaps

Ghost will automatically generate and link to a complete Google sitemap including every page on your site, to make sure search engines are able to index every URL.

##### Automatic structured data + JSON-LD

Ghost generates [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) based structured metadata about your pages so that you don’t have to rely on messy microformats in your markup to provide semantic context. Even if you change theme or front-end, your SEO remains perfectly intact. Ghost also adds automatic code for Facebook OpenGraph and Twitter Cards.

##### Canonical tags

Ghost automatically generates the correct `rel="canonical"` tag for each post and page so that search engines always prioritise one true link.

---

If you’re curious to see more, check out the [features page](https://ghost.org/features/) on Ghost.org.
