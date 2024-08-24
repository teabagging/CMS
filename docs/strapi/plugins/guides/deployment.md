---
title: Deployment

description: Learn how to develop locally with Strapi and deploy Strapi with various hosting options.

---


# Deployment

Strapi provides many deployment options for your project or application. Your Strapi applications can be deployed on traditional hosting servers or your preferred hosting provider. 

The following documentation covers how to develop locally with Strapi and deploy Strapi with several common hosting options.

:::callout ☁️ Strapi Cloud
You can use [Strapi Cloud](/cloud/intro) to quickly deploy and host your project.
:::


If you already created a data structure with the Content-Type Builder and added some data through the Content Manager to your local (development) Strapi instance, you can leverage the [data management system](/dev-docs/data-management) to transfer data from a Strapi instance to another one.

Another possible workflow is to first create the data structure locally, push your project to a git-based repository, deploy the changes to production, and only then add content to the production instance.
:::

## General guidelines

### Hardware and software requirements

To provide the best possible environment for Strapi the following requirements apply to development (local) and staging and production workflows.


- Standard build tools for your OS (the `build-essentials` package on most Debian-based systems)
- Hardware specifications for your server (CPU, RAM, storage):

  

- A supported database version:


:::strapi Database deployment
Deploying databases along with Strapi is covered in the [databases guide](/dev-docs/configurations/database#databases-installation-guides).
:::

- A supported operating system:

  

### Application Configuration

#### 1. Configure

We recommend using environment variables to configure your application based on the environment, for example:

```js title="/config/server.js"

module.exports = ({ env })  ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
```

Then you can create a `.env` file or directly set environment variables in your chosen deployment platform:

```
HOST=10.0.0.1
PORT=1338
```


To learn more about configuration details, see the [configurations](/dev-docs/configurations) documentation.
:::

#### 2. Launch the server

Before running your server in production you need to build your admin panel for production:



yarn" label="yarn">

```bash
NODE_ENV=production yarn build
```



npm" label="npm">

```bash
NODE_ENV=production npm run build
```



windows" label="windows">

```bash
npm install cross-env
```

Then in your `package.json` scripts section:

```bash
"build:win": "cross-env NODE_ENV=production npm run build",
```

And run:

```bash
npm run build:win
```




Run the server with the `production` settings:



yarn" label="yarn">

```bash
NODE_ENV=production yarn start
```



npm" label="npm">

```bash
NODE_ENV=production npm run start
```



windows" label="windows">

```bash
npm install cross-env
```

Then in your `package.json` scripts section:

```bash
"start:win": "cross-env NODE_ENV=production npm start",
```

And run:

```bash
npm run start:win
```





:::caution
We highly recommend using [pm2](https://github.com/Unitech/pm2/) to manage your process.
:::

If you need a server.js file to be able to run `node server.js` instead of `npm run start` then create a `./server.js` file as follows:

```js title="path: ./server.js"

const strapi = require('@strapi/strapi');
strapi(/* {...} */).start();
```

:::caution

If you are developing a `TypeScript`-based project you must provide the `distDir` option to start the server.
For more information, consult the [TypeScript documentation](/dev-docs/typescript#use-the-strapi-factory).
:::

### Advanced configurations

If you want to host the administration on another server than the API, [please take a look at this dedicated section](/dev-docs/admin-panel-customization#deployment).

## Deployment guides

Click on any of the following cards to read manual guides for deployment and optional software:




