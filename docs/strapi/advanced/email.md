---
title: Email Provider

description: Configure Strapi Cloud to use a third-party email provider.

---

# Email Provider

Strapi Cloud comes with a basic email provider out of the box. However, it can also be configured to utilize another email provider, if needed.

:::caution
Please be advised that Strapi are unable to provide support for third-party email providers.

:::

:::prerequisites

- A local Strapi project running on `v4.8.2+`.
- Credentials for another email provider (see [Strapi Market](https://market.strapi.io/providers)).

:::

## Configuration

Configuring another email provider for use with Strapi Cloud requires 3 steps:

1. Install the provider plugin in your local Strapi project.
2. Configure the provider in your local Strapi project.
3. Add environment variables to the Strapi Cloud project.

### Install the Provider Plugin

Using either `npm` or `yarn`, install the provider plugin in your local Strapi project as a package dependency by following the instructions in the respective entry for that provider in the [Marketplace](https://market.strapi.io/providers).

### Configure the Provider

In your Strapi project, create a `./config/env/production/plugins.js` or `./config/env/production/plugins.ts` file with the following content:




```js title=./config/env/production/plugins.js

module.exports = ({ env })  ({
  // … some unrelated plugins configuration options
  // highlight-start
  email: {
    config: {
        // … provider-specific upload configuration options go here
    }
  // highlight-end
  // … some other unrelated plugins configuration options
  }
});
```




```ts title=./config/env/production/plugins.ts

export default ({ env })  ({
  // … some unrelated plugins configuration options
  // highlight-start
  email: {
    config: {
        // … provider-specific upload configuration options go here
    }
  // highlight-end
  // … some other unrelated plugins configuration options
  }
});
```





:::caution
The file structure must match the above path exactly, or the configuration will not be applied to Strapi Cloud.
:::

Each provider will have different configuration settings available. Review the respective entry for that provider in the [Marketplace](https://market.strapi.io/providers).

**Example:**





```js title=./config/env/production/plugins.js
module.exports = ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```




```js title=./config/env/production/plugins.js
module.exports = ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: 'https://email.us-east-1.amazonaws.com',
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```




```js title=./config/env/production/plugins.js
module.exports = ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
        url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```








```ts title=./config/env/production/plugins.ts
export default ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```




```ts title=./config/env/production/plugins.ts
export default ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: 'https://email.us-east-1.amazonaws.com',
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```




```ts title=./config/env/production/plugins.ts
export default ({ env })  ({
  // ...
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
        url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
  },
  // ...
});
```







Before pushing the above changes to GitHub, add environment variables to the Strapi Cloud project to prevent triggering a rebuild and new deployment of the project before the changes are complete.
:::

### Strapi Cloud Configuration

1. Log into Strapi Cloud and click on the corresponding project on the Projects page.
2. Click on the **Settings** tab and choose **Variables** in the left menu.
3. Add the required environment variables specific to the email provider.
4. Click **Save**.

**Example:**




| Variable           | Value                 |
|--------------------|-----------------------|
| `SENDGRID_API_KEY` | your_sendgrid_api_key |




| Variable         | Value               |
|------------------|---------------------|
| `AWS_SES_KEY`    | your_aws_ses_key    |
| `AWS_SES_SECRET` | your_aws_ses_secret |




| Variable          | Value                |
|-------------------|----------------------|
| `MAILGUN_API_KEY` | your_mailgun_api_key |
| `MAILGUN_DOMAIN`  | your_mailgun_domain  |
| `MAILGUN_URL`     | your_mailgun_url     |





## Deployment

To deploy the project and utilize another party email provider, push the changes from earlier. This will trigger a rebuild and new deployment of the Strapi Cloud project.

Once the application finishes building, the project will use the new email provider.

:::strapi Custom Provider
If you want to create a custom email provider, please refer to the [Providers](/dev-docs/providers#creating-providers) documentation in the Developer Documentation.
:::
