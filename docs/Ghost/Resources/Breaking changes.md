# Breaking changes

A catalog of critical changes between major Ghost versions

New major versions typically involve some backwards incompatible changes. These mostly affect custom themes, and our theme compatibility tool [GScan](https://ghost.org/docs/themes/gscan/) will guide you through the updates. If you use custom integrations,the API or webhooks you should also expect things to change when switching between [API versions](https://ghost.org/docs/faq/api-versioning).

#### How to update?

The [update guide](https://ghost.org/docs/update/) explains how to update from Ghost 1.0 or higher to the **latest version**. Ghost(Pro) customers should use the [update guide for Ghost (Pro)](https://ghost.org/help/how-to-upgrade-ghost/).

#### When to update?

The best time to do a [major version](https://ghost.org/docs/faq/major-versions-lts) update is shortly after the first minor version - so for Ghost 5.x, the best time to update will be when 5.1.0 is released, which is usually a week or two after the first 5.x release.

This is when any bugs or unexpected compatibility issues have been resolved but the [team & community](https://forum.ghost.org/) are still context loaded about the changes. The longer you hold off, the bigger the gap becomes between the software you are using and the latest version.

## Mobiledoc deprecation

With the release of the [new editor](https://ghost.org/changelog/editor-beta/), Ghost uses [Lexical](https://lexical.dev/) to store post content, which replaces the previous format Mobiledoc. Transitioning to Lexical enables Ghost to build new powerful features that weren’t possible with Mobiledoc. To remain compatible with Ghost, integrations that rely on Mobiledoc should switch to using Lexical. [For more resources on working with Lexical, see their docs](https://lexical.dev/docs/intro).

## Ghost 5.0

Ghost 5.0 includes significant changes to the Ghost API and database support to ensure optimal performance.

#### Supported databases

**MySQL 8** is the only supported database for both development and production environments.

* SQLite3 is supported only in development environments where scalability and data consistency across updates is not critical (during local theme development, for example)
* MySQL 5 is no longer supported in any environment

Note: MariaDB is not an officially supported database for Ghost.

#### Portal

If you’re embedding portal on an external site, you’ll need to update your script tag.

You can generate a Content API key and check your API url in the Custom Integration section in Ghost Admin. For more information see the [Content API docs](https://ghost.org/docs/content-api/).

```html
<script defer src="https://unpkg.com/@tryghost/portal@latest/umd/portal.min.js" data-ghost="{site_url}" data-api="{api_url}/ghost/api/content/" data-key="{content_api_key}"></script>
```

#### Themes

Themes can be validated against 5.x in [GScan](https://gscan.ghost.org/).

* Card assets will now be included by default, including bookmark and gallery cards. ([docs](https://ghost.org/docs/themes/helpers/config/))
* Previously deprecated features have been removed: `@blog`, single authors.

##### Custom membership flows

The syntax used to build custom membership flows has changed significantly.

* Tier benefits are now returned as a list of strings. ([docs](https://ghost.org/docs/themes/helpers/tiers/#fetching-tiers-with-the-get-helper))
* Paid Tiers now have numeric `monthly_price` and `yearly_price` attributes, and a separate `currency` attribute. ([docs](https://ghost.org/docs/themes/helpers/tiers/))
* The following legacy product and price helpers used to build custom membership flows have been removed: `@price`, `@products`, `@product` and `@member.product`. See below for examples of the new syntax for building a custom signup form and account page. ([docs](https://ghost.org/docs/themes/members/#member-subscriptions))

**Sign up form**

```handlebars
{{! Fetch all available tiers }}
{{#get "tiers" limit="all" include="monthly_price,yearly_price,benefits"}}
  {{#foreach tiers}}
    <div>
      <h2>{{name}}</h2> {{! Output tier name }}
      <p>{{description}}<p> {{! Output tier description }}

      {{#if monthly_price}} {{! If tier has a monthly price, generate a Stripe sign up link }}
        <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly –
            {{price monthly_price currency=currency}}</a>
       {{/if}}
       {{#if yearly_price}} {{! If tier has a yearly price, generate a Stripe sign up link }}
        <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly –
            {{price yearly_price currency=currency}}</a>
       {{/if}}

       <ul>
       {{#foreach benefits as |benefit| }} {{! Output list of benefits }}
         <li>{{benefit}}</li>
       {{/foreach}}
       </ul>
    </div>
  {{/foreach}}
{{/get}}
```

**Account page**

```handlebars
<h2>{{@member.name}}</h2>
<p>{{@member.email}}</p>
    {{#foreach @member.subscriptions}}
    <p>Tier name: <strong>{{tier.name}}</strong></p>
    <p>Subscription status: <strong>{{status}}</strong></p>
    <p>Amount: {{price plan numberFormat="long"}}/{{plan.interval}}</p>
    <p>Start date: {{date start_date}}</p>
    <p>End date: {{date current_period_end}}</p>
    {{cancel_link}} {{! Generate a link to cancel the membership }}
    {{/foreach}}
</div>
```

#### API versioning

Ghost 5.0 no longer includes multiple API versions for backwards compatibility with previous versions. The URLs for the APIs are now `ghost/api/content` and `ghost/api/admin`. Breaking changes will continue to be made only in major versions; new features and additions may be added in minor version updates.

Backwards compatibility is now provided by sending an `accept-version` header with API requests specifying the compatibility version a client expects. When this header is present in a request, Ghost will respond with a `content-version` header indicating the version that responded. In the case that the provided `accept-version` is below the minimum version supported by Ghost and a request either cannot be served or has changed significantly, Ghost will notify the site’s administrators via email informing them of the problem.

Requests to the old, versioned URLs are rewritten internally with the relevant `accept-version` header set. These requests will return a `deprecation` header.

#### Admin API changes

* The `/posts` and `/pages` endpoints no longer accept `page:(true|false)` as a filter in the query parameters
* The `email_recipient_filter` and `send_email_when_published` parameters have been removed from the `/posts` endpoint, and email sending is now controlled by the new `newsletter` and `email_segment` parameters
* The `/mail` endpoint has been removed
* The `/email_preview` endpoint has been renamed to `/email_previews`
* The `/authentication/reset_all_passwords` endpoint has been renamed to `/authentication/global_password_reset` and returns a `204 No Content` response on success
* The `/authentication/passwordreset` endpoint has been renamed to `/authentication/password_reset`, and accepts and returns a `password_reset` object
* The `DELETE /settings/stripe/connect` endpoint now returns a `204 No Content` response on success
* The `POST /settings/members/email` endpoint now returns a `204 No Content` response on success

#### Content API changes

* The `GET /posts` and `GET /pages` endpoints no longer return the `page:(true|false)` attribute in the response

#### Members

* The `members/api/site` and `members/api/offers` endpoints have been removed, and Portal now uses the Content API
* All `/products/*` endpoints have been replaced with `/tiers/*`, and all references to `products` in requests/responses have been updated to use `tiers`
* Tier benefits are now returned as a list of strings
* Paid Tiers now have numeric `monthly_price` and `yearly_price` attributes, and a separate `currency` attribute
* The member `subscribed` flag has been deprecated in favor of the `newsletters` relation, which includes the newsletters a member is subscribed to

#### Misc

* Removed support for serving secure requests when `config.url` is set to `http`
* Removed support for configuring the server to connect to a socket instead of a port
* Deleting a user will no longer remove their posts, but assign them to the site owner instead
* Site-level email design settings have been replaced with design settings on individual newsletters (see [`/newsletters/*` endpoints](https://ghost.org/docs/admin-api/#newsletters))

## Ghost 4.0

Ghost 4.0 focuses on bringing Memberships out of beta. There are a few additional changes:

* New `/v4/` (stable) and `/canary/` (experimental) API versions have been added.
* The `/v3/` (maintenance) endpoints will not receive any further changes.
* The `/v2/` (deprecated) endpoints will be removed in the next major version.
* v4 Admin API `/settings/` endpoint no longer supports the `?type` query parameter.
* v4 Admin API `/settings/` endpoint only accepts boolean values for the key `unsplash`.
* Redirects: definitions should now be uploaded in YAML format - `redirects.json` has been deprecated in favour of `redirects.yaml`.
* Themes: **must** now define which version of the API they want to use by adding `"engines": {"ghost-api": "vX"}}` to the `package.json` file.
* Themes: due to content images having `width` / `height` attributes, themes with CSS that use `max-width` may need to add `height: auto` to prevent images appearing squashed or stretched.
* Themes: The default format for the `{{date}}` helper is now a localised short date string (`ll`).
* Themes: `@site.lang` has been deprecated in favour of `@site.locale`.
* Private mode: the cookie has been renamed from `express:sess` to `ghost-private`.
* Other: It’s no longer possible to require or use Ghost as an NPM module.

### Members

Members functionality is no longer considered beta and is always enabled. The following are breaking changes from the behaviour in Ghost 3.x:

* v3/v4 Admin API `/members/` endpoint no longer supports the `?paid` query parameter
* v3/v4 Admin API `/members/` endpoints now have subscriptions on the `subscriptions` key, rather than `stripe.subscriptions`.
* v3/v4 Admin API `/posts/` endpoint has deprecated the `send_email_when_published` flag in favour of `email_recipient_filter`.
* Themes: The `@labs.members` theme helper always returns `true`, and will be removed in the next major version.
* Themes: The default post visibility in `foreach` in themes is now `all`.
* Themes: The `default_payment_card_last4` property of member subscriptions now returns `****` instead of `null` if the data is unavailable.
* Portal: query parameters no longer use `portal-` prefixes.
* Portal: the root container has been renamed from `ghost-membersjs-root` to `ghost-portal-root`.
* Other: Stripe keys are no longer included in exports.
* Other: Using Stripe related features in a local development environment requires `WEBHOOK_SECRET`, and live stripe keys are no longer supported in non-production environments.

## Ghost 3.0

* The Subscribers labs feature has been replaced with the [Members](https://ghost.org/docs/members/) labs feature.
* The v0.1 API endpoints & Public API Beta have been removed. Ghost now has a set of fully supported [Core APIs](https://ghost.org/docs/architecture/).
* The Apps beta concept has been removed. Use the Core APIs & [integrations](https://ghost.org/integrations/) instead.
* Themes using [GhostHunter](https://github.com/jamalneufeld/ghostHunter) must upgrade to [GhostHunter 0.6.0](https://github.com/jamalneufeld/ghostHunter#ghosthunter-v060).
* Themes using `ghost.url.api()` must upgrade to the [Content API client library](https://ghost.org/docs/content-api/javascript/).
* Themes may be missing CSS for editor cards added in 2.x. Use [GScan](https://gscan.ghost.org/) to make sure your theme is fully 3.0 compatible.
* Themes must replace `{{author}}` for either `{{#primary_author}}` or `{{authors}}`.
* New `/v3/` (stable) and `/canary/` (experimental) API versions have been added.
* The `/v2/` (maintenance) endpoints will not receive any further changes.
* v3 Content API `/posts/` & `/pages/` don’t return `primary_tag` or `primary_author` when `?include=tags,authors` isn’t specified (these were returned as null previously).
* v3 Content API `/posts/` & `/pages/` no longer return page: `true|false`.
* v3 Content + Admin API `/settings/` no longer returns ghost\_head or `ghost_foot`, use `codeinjection_head` and `codeinjection_foot` instead.
* v3 Admin API `/subscribers/*` endpoints are removed and replaced with `/members/*`.
* v3 Content + Admin API consistently stores relative and serves absolute URLs for all images and links, including inside content & srcsets.

### Switching from v0.1 API

* The Core APIs are stable, with both read & write access fully supported.
* v0.1 Public API (read only access) is replaced by the [Content API](https://ghost.org/docs/content-api/).
* v0.1 Private API (write access) is replaced by the [Admin API](https://ghost.org/docs/admin-api/).
* v0.1 Public API `client_id` and `client_secret` are replaced with a single `key`, found by configuring a new Custom Integration in Ghost Admin.
* v0.1 Public API `ghost-sdk.min.js` and `ghost.url.api()` are replaced with the `@tryghost/content-api` [client library](https://ghost.org/docs/content-api/javascript/).
* v0.1 Private API client auth is replaced with JWT auth & user auth now uses a session cookie. The `@tryghost/admin-api` [client library](https://ghost.org/docs/admin-api/javascript/) supports easily creating content via JWT auth.
* Scripts need updating to handle API changes, e.g. posts and pages being served on separate endpoints and users being called authors in the Content API.

## Ghost 2.0

* API: The `/v2/` API replaces the deprecated `/v0.1/` API.
* Themes: The editor has gained many new features in 2.x, you may need to add CSS to your theme for certain cards to display correctly.
* Themes: `{{#get "users"}}` should be replaced with `{{#get "authors"}}`
* Themes: multiple authors are now supported, swap uses of author for either `{{#primary_author}}` or `{{authors}}`.
* Themes: can now define which version of the API they want to use by adding `"engines": {"ghost-api": "vX"}}` to the `package.json` file.
* Themes: there are many minor deprecations and warnings, e.g. `@blog` has been renamed to `@site`, use [GScan](https://gscan.ghost.org/) to make sure your theme is fully 2.0 compatible.
* v2 Content+Admin API has split `/posts/` & `/pages/` endpoints, instead of just `/posts/`.
* v2 Content API has an `/authors/` endpoint instead of `/users/`.
* v2 Admin API `/posts/` and `/pages/` automatically include tags and authors without needing `?includes=`.
* v2 Content + Admin API attempts to always save relative & serve absolute urls for images and links, but this behaviour is inconsistent 🐛.

## Ghost 1.0

* This is a major upgrade, with breaking changes and no automatic migration path. All publications upgrading from Ghost 0.x versions must be [upgraded](https://ghost.org/docs/faq/update-0x/) to Ghost 1.0 before they can be successfully upgraded to Ghost 2.0 and beyond.
* See [announcement post](https://ghost.org/changelog/1-0/) and [developer details](https://ghost.org/changelog/ghost-1-0-0/) for full information on what we changed in 1.0.
* v0.1 Public API `/shared/ghost-url.min.js` util has been moved and renamed to `/public/ghost-sdk.min.js`
* Ghost 0.11.x exports don’t include `clients` and `trusted_domains` so these aren’t imported to your new site - you’ll need to update any scripts with a new `client_id` and `client_secret` from your 1.0 install.
* Themes: Many image fields were renamed, use [GScan](https://gscan.ghost.org/) to make sure your theme is 1.0 compatible.
