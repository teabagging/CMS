# Memberships

The native Members feature in Ghost makes it possible to launch a membership business from any Ghost publication, with member signup, paid subscriptions and email newsletters built-in.

## Overview

Any publisher who wants to offer a way for their audience to support their work can use the Members feature to share content, build an audience, and generate an income from a membership business.

![Member settings in Ghost Admin](https://ghost.org/images/docs/members/ghost-sites_hud78661df9259815cb29707ecbfccff73_228853_1500x0_resize_q100_h2_box_3.webp)The concepts and components that enable you to turn a Ghost site into a members publication are surprisingly simple and can be broken down into two concepts:

## 1. Memberships

A member of a Ghost site is someone who has opted to subscribe, and confirmed their subscription by clicking the link sent to their inbox. Members are stored in Ghost, to make tracking, managing and supporting an audience a breeze.

### Secure authentication

Ghost uses passwordless JWT email-link based logins for your members. It’s fast, reliable, and incredible for security. Secure email authentication is used for both member sign up and sign in.

### Access levels

Once a visitor has entered their email address and confirmed membership, you can share protected content with them on your Ghost publication. Logged in members are able to access any content that matches their tier.

The following access levels are available to select from the post settings in the editor:

* **Public**
* **Members only**
* **Paid-members only**
* **Specific tier(s)**

Content is securely protected at server level and there is no way to circumvent gated content without being a logged-in member.

### Managing members

Members are stored in Ghost with the following attributes:

* `email` (required)
* `name`
* `note`
* `subscribed_to_emails`
* `stripe_customer_id`
* `status` (free/paid/complimentary)
* `labels`
* `created_at`

### Imports

It’s possible to import Members from any other platform. If you have a list of email addresses, this can be ported into Ghost via CSV, Zapier, or the API.

## 2. Subscriptions

Members in Ghost can be free members, or become paid members with a direct Stripe integration for fast, global payments.

### Connect to Stripe

We’ve built a direct [integration with Stripe](https://ghost.org/integrations/stripe/) which allows publishers to connect their Ghost site to their own billing account using Stripe Connect.

![Member settings in Ghost Admin](https://ghost.org/images/docs/members/connect-to-stripe_hu44a97624d38f04e23e06510778716a3f_39290_1906x0_resize_q100_h2_box_3.webp)Payments are handled by Stripe and billing information is stored securely inside your own Stripe account.

### Transaction fees

Ghost takes **0%** of your revenue. Whatever you generate from a paid blog, newsletter or community is yours to keep. Standard Stripe processing fees still apply.

### Portability

All membership, customer and business data is controlled by you. Your members list can be exported any time and since subscriptions and billing takes place inside your own Stripe account, you retain full ownership of it.

If you’re migrating an existing membership business from another platform, check our our [migration docs](https://ghost.org/docs/migration/).

### Alternative payment gateways

To begin with, Stripe is the only natively supported payment provider with Ghost. We’re aware that not everyone has access to Stripe, and we plan to add further payment providers in future.

In the meantime, it is possible to create new members via an external provider, such as [Patreon](https://ghost.org/integrations/patreon/) or [PayPal](https://ghost.org/integrations/paypal/). You can set up any third party payments system and create members in Ghost via API, or using automation tools like Zapier.

### I have ideas / suggestions / problems / feedback

Great! We set up a dedicated [forum category](https://forum.ghost.org/c/members) for feedback about the members feature, we appreciate your input!

We’re continuously shipping improvements and new features at Ghost which you can follow over on [GitHub](https://github.com/tryghost/ghost), or on our [Changelog](https://ghost.org/changelog/).
