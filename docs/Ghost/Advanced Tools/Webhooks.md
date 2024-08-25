# Webhooks

Webhooks are specific events triggered when something happens in Ghost, like publishing a new post or receiving a new member

## Overview

Webhooks allows Ghost to send POST requests to user-configured URLs in order to send them a notification about it. The request body is a JSON object containing data about the triggered event, and the end result could be something as simple as a Slack notification or as complex as a total redeployment of a site.

## Setting up a webhook

Configuring webhooks can be done through the Ghost Admin user interface. The only required fields to setup a new webhook are a trigger event and target URL to notify. This target URL is your application URL, the endpoint where the POST request will be sent. Of course, this URL must be reachable from the Internet.

If the server responds with 2xx HTTP response, the delivery is considered successful. Anything else is considered a failure of some kind, and anything returned in the body of the response will be discarded.

## Available events

Currently Ghost has support for below events on which webhook can be setup:


| Event                   | Description                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| `site.changed`          | Triggered whenever any content changes in your site data or settings |
| `post.added`            | Triggered whenever a post is added to Ghost                          |
| `post.deleted`          | Triggered whenever a post is deleted from Ghost                      |
| `post.edited`           | Triggered whenever a post is edited in Ghost                         |
| `post.published`        | Triggered whenever a post is published to Ghost                      |
| `post.published.edited` | Triggered whenever a published post is edited in Ghost               |
| `post.unpublished`      | Triggered whenever a post is unpublished from Ghost                  |
| `post.scheduled`        | Triggered whenever a post is scheduled to be published in Ghost      |
| `post.unscheduled`      | Triggered whenever a post is unscheduled from publishing in Ghost    |
| `post.rescheduled`      | Triggered whenever a post is rescheduled to publish in Ghost         |
| `page.added`            | Triggered whenever a page is added to Ghost                          |
| `page.deleted`          | Triggered whenever a page is deleted from Ghost                      |
| `page.edited`           | Triggered whenever a page is edited in Ghost                         |
| `page.published`        | Triggered whenever a page is published to Ghost                      |
| `page.published.edited` | Triggered whenever a published page is edited in Ghost               |
| `page.unpublished`      | Triggered whenever a page is unpublished from Ghost                  |
| `page.scheduled`        | Triggered whenever a page is scheduled to be published in Ghost      |
| `page.unscheduled`      | Triggered whenever a page is unscheduled from publishing in Ghost    |
| `page.rescheduled`      | Triggered whenever a page is rescheduled to publish in Ghost         |
| `tag.added`             | Triggered whenever a tag is added to Ghost                           |
| `tag.edited`            | Triggered whenever a tag is edited in Ghost                          |
| `tag.deleted`           | Triggered whenever a tag is deleted from Ghost                       |
| `post.tag.attached`     | Triggered whenever a tag is attached to a post in Ghost              |
| `post.tag.detached`     | Triggered whenever a tag is detached from a post in Ghost            |
| `page.tag.attached`     | Triggered whenever a tag is attached to a page in Ghost              |
| `page.tag.detached`     | Triggered whenever a tag is detached from a page in Ghost            |
| `member.added`          | Triggered whenever a member is added to Ghost                        |
| `member.edited`         | Triggered whenever a member is edited in Ghost                       |
| `member.deleted`        | Triggered whenever a member is deleted from Ghost                    |

## Stripe webhooks

Webhooks allow Ghost to communicate with Stripe. In order to use Stripe with a local version of Ghost you’ll need to do some additional setup to allow webhook events happen between Stripe and Ghost.

First, follow the instructions on [how to install and log into the Stripe CLI tool](https://stripe.com/docs/stripe-cli) in the Stripe documentation.

Then, before starting a local instance of Ghost, run the following command in your CLI. Note that the localhost port number should match the one used in your local Ghost install:

```bash
stripe listen --forward-to http://localhost:2368/members/webhooks/stripe/
```

After running this the CLI will return a secret prefixed with `whsec_`. This secret needs to be given to Ghost on start up. In a new CLI window run the following:

```bash
WEBHOOK_SECRET=whsec_1234567890abcdefg ghost start
```

After following these steps, Ghost will run locally with a webhook connection to your Stripe account. To test that it’s working, sign up for a paid membership on the local site.

Now that the local install of Ghost is running and communicating with Stripe, you can develop and test themes for a custom membership experience, build signup and signin forms, or expose member data.
