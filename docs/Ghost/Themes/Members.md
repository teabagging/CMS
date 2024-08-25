# Members

The Members feature allows you to turn any site into a membership business with member signup, paid subscriptions and email newsletters.

Members can be activated using any theme by using the Portal feature — an embeddable memberships feature that can be enabled and customised from the Admin UI. Portal screens can also be accessed in your theme via URLs or data attributes.

![Portal Links](https://ghost.org/images/docs/members/portal-links-admin_hu72ea77dfe2902b5b8f1e717e5c1c751c_474136_2376x0_resize_q100_h2_box_3.webp)Portal links can use absolute or relative links, for example:

```html
// Absolute URLs takes readers to the homepage and opens a Portal screen.
<a href="https://example.com/#/portal/signup">Subscribe</a>

// Relative URLs open Portal on the current page.
<a href="#/portal/signup">Subscribe</a>
```

When using the `data-portal` data attribute to control the Portal UI, additional classes `gh-portal-open` and `gh-portal-close` are added to the element to allow custom styling of open and closed states.

Alternatively, it’s possible to build entirely custom membership and signup flows directly into a theme using this guide.

---

## Signup forms

Add the `data-members-form` attribute to the form element and `data-members-email` to the email input field to create a standard email collection signup form:

```html
<form data-members-form>
  <input data-members-email type="email" required="true"/>
  <button type="submit">Continue</button>
</form>
```

Add `data-members-name` to an input element to capture a member’s name at signup:

```html
<form data-members-form>
  <label>
    Name
    <input data-members-name />
  </label>
  <label>
    Email
    <input data-members-email type="email" required="true"/>
  </label>
  
  <button type="submit">Subscribe</button>
</form>
```

Capture form errors with `data-members-error`. Errors could include too many attempts to sign up or trying to subscribe to a newsletter that no longer exists (see below):

```html
<p data-members-error></p>
```

### Newsletter subscriptions

When a member signs up via the form, they are subscribed to the site’s default newsletter. However, it’s also possible to specify which newsletters members are subcribed to on signup by adding `data-members-newsletter` to an input element. In the example below, the member is subscribed to the Weekly Threads newsletter.

```html
<form data-members-form>
  ...
  <input data-members-newsletter type="hidden" value="Weekly Threads" />
  
  <button type="submit">Subscribe</button>
</form>
```

Subscribe a member to multiple newsletters by including additional `input` elements:

```html
<form data-members-form>
  ...
  <input data-members-newsletter type="hidden" value="Weekly Threads" />
  <input data-members-newsletter type="hidden" value="Shocking Revelations" />

  
  <button type="submit">Subscribe</button>
</form>
```

By using `hidden` inputs in the examples above, newsletter details are hidden from the user. But, you can allow users to choose which newsletters to subscribe to by using `radio` or `checkbox` elements:

```html
<form data-members-form>
  ...
  <label>
    Newsletter Name
    <input data-members-newsletter type="checkbox" value="Newsletter Name" />
  </label>
  <label>
    Newsletter Two
    <input data-members-newsletter type="checkbox" value="Newsletter Two" />
  </label>
  
  <button type="submit">Subscribe</button>
</form>
```

Create a dynamic signup form at the theme level by using the [`get` helper](https://ghost.org/docs/themes/helpers/get/) to fetch a site’s `newsletters`. Then, loop through the newsletters and add the `name` property to an `input` element. See below for an example implementation:

```handlebars
<form data-members-form=>
  <input type="email" required data-members-email>
  {{#get "newsletters"}}
      {{#foreach newsletters}}
        <label>
          <input type="checkbox" value="{{name}}" data-members-newsletter />
					{{name}}
        </label>
      {{/foreach}}
  {{/get}}
  <button type="submit">Subscribe</button>
</form>
```

### Extending forms

The `data-members-form` accepts a series of optional values to customise user flows:

* `data-members-form="signin"` – sends a signin email to existing members when a valid email is entered.
* `data-members-form="signup"` – sends a signup email to new members. Uses “sign up” in email text. If a valid email is present, a signin email is sent instead.
* `data-members-form="subscribe"` – sends a subscribe email. Uses “subscription” in email text. If a valid email is present, a signin email is sent instead.
* `data-members-autoredirect="false"` - when set to `false`, the user will be redirected to the publication’s homepage when logging in. When set to `true` (the default), the user will be redirected to the page where they signed up.

### Form states

Member forms pass a series of states, which are reflected in the HTML as classes for when the submission is loading, when the submission was successful, or when there is an error.

```html
<form data-members-form class="loading">...</form>

<form data-members-form class="success">...</form>

<form data-members-form class="error">...</form>
```

### Signing out

Give members the option to sign out of your site by creating a sign out button or link using the `data-members-signout` data attribute.

```html
<a href="javascript:" data-members-signout>Sign out</a>
```

Using the `@member` object in conjunction with a sign out button allows you to show the signin link when the member is logged out, and a sign out link if a member is logged in.

```handlebars
{{#if @member}}
  <a href="javascript:" data-members-signout>Sign out</a>
{{else}}
  <form data-members-form="signin">
    <input data-members-email type="email" required="true"/>
    <button type="submit">Sign in</button>
  </form>
{{/if}}
```

### Apply labels from a form

Labels are useful for managing, segmenting and auditing a members list, and can be applied manually in Ghost Admin, or automatically via a form, an integration or the API.

Apply labels from a specific a signup form using a hidden HTML input element, for example:

```html
<form data-members-form="subscribe">
  <input data-members-label type="hidden" value="Early Adopters" />
  <input data-members-email type="email" required="true"/>
  <button type="submit">Subscribe</button>
</form>
```

### Error messages

Implement error messages when a form or subscription button causes an error by adding a child element to the `<form>` or `<a>` element with the attribute `data-members-error`.

```html
<form data-members-form>
  ...
  <p data-members-error><!-- error message will appear here --></p>
</form>
```

---

## Content visibility

Control how members access content on your site, and what content they’re able to read in full as a logged in member.

### Content

All members that are logged in to your site have an access level attached to them. To correspond, all posts have a `visibility` setting attached to the `content`.

This setting is applied in the Admin UI as the [post access level](https://ghost.org/help/protected-content/) on each individual post.

### Access

`access` is a variable that calculates the access level of the member viewing the post and the access level setting applied to the post. `access` will return `true` if the member’s access matches, or exceeds, the access level of the post, and `false` if it doesn’t match.

```handlebars
{{#post}}
  <h1>{{title}}</h1>

  {{#if access}}
    <p>Thanks for being a member...</p>
  {{else}}
    <p>You need to become a member in order to read this post... </p>
  {{/if}}

  {{content}}
{{/post}}
```

### Default CTA

With the `{{content}}` helper, visitors who don’t have access to a post (determined by the `access` property) will see a default call to action in the content area instead, prompting users to upgrade their subscription. Used in conjunction with a free public preview in post content, the CTA will be displayed after the free preview.

![Content CTA](https://ghost.org/images/docs/members/content-cta_hu3d640371aa932b7b360881a3df965f9b_54918_1462x0_resize_q100_h2_box_3.webp)The default CTA can be overridden by providing a `./partials/content-cta.hbs` template file in your theme. The default content CTA [provided by Ghost](https://github.com/TryGhost/Ghost/blob/3d989eba2371235d41468f7699a08e46fc2b1e87/ghost/core/core/frontend/helpers/tpl/content-cta.hbs) may be used as a reference.

### The `@member` object

The `@member` object can be used to determine which content within the theme is exposed depending on the access level of the member. This is achieved using an `#if` statement:

```handlebars
{{#if @member}}
  <p>Thanks for becoming a member 🎉</p>
{{else}}
  <p>You should totally sign up... 🖋</p>
{{/if}}
```

Using `@member.paid` allows you to expose different content to members who have an active paid subscription.

```handlebars
{{#if @member.paid}}
  <p>Thanks for becoming a paying member 🎉</p>
{{/if}}
```

`@member.paid` returns `true` for members with active subscriptions in states “active”, “trialing”, “unpaid” and “past\_due”. To revoke access for members with failing payments, update your [Stripe settings](https://dashboard.stripe.com/settings/billing/automatic) to automatically cancel subscriptions after all payment attempts have failed.

These two boolean values can be used together to customise UI and messages within a theme to a particular segment of your audience:

```handlebars
{{#if @member.paid}}
  <p>Thanks for becoming a paying member 🎉</p>
{{else if @member}}
  <p>Thanks for being a member 🙌</p>
{{else}}
  <p>You should totally sign up... 🖋</p>
{{/if}}
```

### Visibility

The `visibility` attribute is relative to the post or page, and is useful for providing templates with extra attribute information depending on the viewer status. `visibility` has 3 possible values: `public`, `members` or `paid` .

```handlebars
<article class="post post-access-{{visibility}}">
  <h1>{{title}}</h1>
  {{content}}
</article>
```

An example use case could be to show a particular icon next to the title of a post:

```handlebars
<h1>
  {{title}}
  <svg>
    <use xlink:href="#icon-{{visibility}}"></use>
  </svg>
</h1>
```

### `visibility` in posts

By default, all posts (including those that are set to `members-only` or `paid-members only`) will appear in post archives unless the `visibility` parameter is included with the `#foreach` helper:

```handlebars
{{#foreach visibility="paid"}}
  <article>
    <h2><a href="{{url}}">{{title}}</a></h2>
  </article>
{{/foreach}}
```

The content of the posts is still restricted based on the access level of the logged in member.

### `visibility` with `#has`

Using the visibility flag with the `#has` helper allows for more unique styling between `public`, `members` and `paid` posts. For example:

```handlebars
{{#foreach posts}}
  <article>
    {{#has visibility="paid"}}
      <span class="premium-label">Premium</span>
    {{/has}}
    <h2><a href="{{url}}">{{title}}</a></h2>
  </article>
{{/foreach}}
```

---

## Checkout buttons

Turn your membership site into a business with paid subscriptions via Stripe, to offer paid content on a monthly or yearly basis.

### Subscription plans

There are currently two types of plans for each tier in Members: monthly and yearly. [Find out how to connect a Stripe account.](https://ghost.org/help/setup-members/#connect-a-stripe-account/).

Once Stripe is properly configured, it’s possible to direct visitors to a Stripe payment form pre-filled with the selected plan, by adding buttons with the `data-portal` attribute pointing to monthly or yearly price of a tier. The data attribute for monthly/yearly plan of a tier can be fetched from Portal settings in your Admin URL - `/ghost/#/settings/members?showPortalSettings=true`.

```html
<a href="javascript:" data-portal="signup/TIER_ID/monthly">Monthly plan</a>

<a href="javascript:" data-portal="signup/TIER_ID/yearly">Yearly plan</a>
```

---

## Member profile pages

It’s possible to expose information about a member in a Ghost theme to allow members to manage their own subscriptions, or update their details when logged in.

![Example theme member account](https://ghost.org/images/docs/members/theme-account-example_hua1cc91f659d30ed537e78ceeee649a6e_60374_800x0_resize_q100_h2_box_3.webp)### Member attributes

The `@member` object has a series of attributes that expose the information required to create a member profile page:

* `@member` – The member object, evaluates to `true` or `false` if the viewer is a member or not
* `@member.paid` – The member’s payment status, returns `true` or `false` if the member has an active paid subscription
* `@member.email` – The member’s email address
* `@member.name` – The member’s full name
* `@member.firstname` – The member’s first name (everything before the first whitespace character in the member’s full name)
* `@member.uuid` – A unique identifier for a member for use with analytics tracking such as Google Tag Manager

### Member subscriptions

It’s also possible to retrieve and expose information about a member’s subscription using data that comes from Stripe using `@member.subscriptions`.

Members may have multiple subscriptions, provided as an array. Subscription data can be exposed using a `#foreach`:

```handlebars
{{#foreach @member.subscriptions}}

  <p>Name: <strong>{{customer.name}}</strong></p>

  <p>Plan type: <strong>{{plan.nickname}}</strong></p>

  <p>Status: <strong>{{status}}</strong></p>

{{/foreach}}
```

### Subscription attributes

Subscription data comes from Stripe meaning a valid Stripe account connected to Ghost is required. Using subscription data in a local environment requires the [Stripe CLI tool](https://stripe.com/docs/stripe-cli).

* `id` – The Stripe ID of the subscription
* `avatar_image` — The customers avatar image, pulled in from [Gravatar](https://en.gravatar.com/). If there is not one set for their email a transparent `png` will be returned as a default
* `customer.id` – The Stripe ID of the customer
* `customer.name` – The name of the customer in Stripe
* `customer.email` – The email of the customer in Stripe
* `plan.id` – The Stripe ID of the plan
* `plan.nickname` – The Stripe nickname of the plan (currently only “Monthly” or “Yearly”)
* `plan.interval` – The Stripe plan payment interval (currently only “month” or “year”)
* `plan.currency` – The currency code of the plan as an ISO currency code
* `plan.amount` – The amount of the Stripe plan in the smallest currency denomination (e.g. USD \$5 would be “500” cents)
* `status` – The status of the subscription (can be one of: “active”, “trialing”, “unpaid”, “past\_due”, “canceled”)
* `start_date` – The date which the subscription was first started, can be used with the `{{date}}` helper
* `default_payment_card_last4` – The last 4 digits of the card that paid the subscription
* `current_period_end` – The date which the subscription has been paid up until, can be used with the `{{date}}` helper

### Member account editing

Members may want to update their billing information. Rather than contacting the site owner the member can be linked to a page to update their details with a single button:

```html
<a href="javascript:" data-members-edit-billing>Edit billing info</a>
```

Additional attributes can be used to direct the member to different URLs if they update their billing information or cancel their subscription:

```html
<a href="javascript:"
  data-members-edit-billing
  data-members-success="/billing-update-success/"
  data-members-cancel="/billing-update-cancel/"
>Edit billing info</a>
```

### The `price` helper

The `{{price}}` helper formats monetary values from their smallest denomination to a human readable denomination with currency formatting. This is best used in the context of a subscription plan to format Stripe plan amounts (see `plan.amount` above) or outputting prices for tiers. Example:

```handlebars
{{price plan}}
```

This will output `$5`.

The `{{price}}` helper has many options with detailed documentation [here](https://ghost.org/docs/themes/helpers/price/).

### Cancel links

The `{{cancel_link}}` helper is designed to output links to cancel or continue a subscription, so that your members can manage their own subscriptions.

This helper wraps all of the internals needed to cancel an active subscription or to continue the subscription if it was previously canceled.

The helper must be used in the `@member.subscriptions` context, for example:

```handlebars
<!-- Usage Context -->

{{#foreach @member.subscriptions}} {{cancel_link}} {{/foreach}}
```

The HTML markup generated by this code looks like this:

```html
<!-- Generated HTML -->

<a class="gh-subscription-cancel" data-members-cancel-subscription="sub_*****" href="javascript:">
    Cancel subscription
</a>
<span class="gh-error gh-error-subscription-cancel" data-members-error><!-- error message will appear here --></span>
```

The `{{cancel_link}}` helper accepts a number of optional attributes:

* `class` - defaults to `gh-subscription-cancel`
* `errorClass` - defaults to `gh-error gh-error-subscription-cancel`
* `cancelLabel` - defaults to `Cancel subscription`
* `continueLabel` - defaults to `Continue subscription`

Here’s an example of how you can use the helper with all of the attributes:

```handlebars
<!-- Usage -->

{{cancel_link
  class="cancel-link"
  errorClass="cancel-error"
  cancelLabel="Cancel!"
  continueLabel="Continue!"
}}
```

This would produce the following HTML for previously canceled subscription:

```html
<!-- Generated HTML -->

<a class="cancel-link" data-members-continue-subscription="sub_*****" href="javascript:">
    Continue!
</a>
<span class="cancel-error" data-members-error><!-- error message will appear here --></span>
```

Here’s an example of the `{{cancel_link}}` helper in use in the members-enabled theme [Lyra](https://github.com/TryGhost/Lyra/) within the [account.hbs](https://github.com/TryGhost/Lyra/blob/4ca9576/members/account.hbs/#L15-L65) file.

It’s used inside a `{{#foreach @member.subscriptions}}` loop which provides the helper the context needed to generate an appropriate link, and is surrounded by other useful information displayed to the member.

```html
<!-- account.hbs -->

{{#foreach @member.subscriptions}}
  <div class="subscription">
    {{#if cancel_at_period_end}}
      <p>
        <strong class="subscription-expiration-warning">Your subscription will expire on {{date current_period_end format="DD MMM YYYY"}}.</strong> If you change your mind in the mean time you can turn auto-renew back on to continue your subscription.
      </p>
    {{else}}
      <p>
        Hey! You have an active {{@site.title}} account with access to all areas. Get in touch if have any problems or need some help getting things updated, and thanks for subscribing.
      </p>
    {{/if}}
    <div class="subscriber-details">
      <div class="subscriber-detail">
        <label class="subscriber-detail-label">Email address</label>
        <span class="subscriber-detail-content">{{@member.email}}</span>
      </div>
      <div class="subscriber-detail">
        <label class="subscriber-detail-label">Your plan</label>
        <span class="subscriber-detail-content">{{price plan}}/{{plan.interval}}</span>
      </div>
      <div class="subscriber-detail">
        <label class="subscriber-detail-label">Card</label>
        <span class="subscriber-detail-content">**** **** **** {{default_payment_card_last4}}</span>
      </div>
      <div class="subscriber-detail">
        <label class="subscriber-detail-label">
          {{#if cancel_at_period_end}}
            Expires
          {{else}}
            Next bill date
          {{/if}}
        </label>
        <span class="subscriber-detail-content">{{date current_period_end format="DD MMM YYYY"}}</span>
      </div>
    </div>
    {{cancel_link}}
  </div>
{{/foreach}}
```
