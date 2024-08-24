---
title: Migrate from 4.14.0 to 4.15.5

description: Learn how you can migrate your Strapi application from 4.14.0 to 4.15.5.
---






# v4.14.0 to v4.15.5 migration guide

The present migration guide upgrades Strapi v4.14.0 to v4.15.5. Strapi v4.15.5 updated the [loading order](/dev-docs/configurations/middlewares#loading-order) of the middlewares, ensuring the [`logger` middleware](/dev-docs/configurations/middlewares#logger) is loaded first. The migration guide consists of:

- Upgrading the application dependencies
- Manually updating the loading order of middlewares in the configuration file
- Reinitializing the application



## Upgrading the application dependencies to 4.15.5

:::prerequisites
Stop the server before starting the upgrade.
:::

1. Upgrade all of the Strapi packages in `package.json` to 4.15.5:

   ```json title="path: package.json"
   {
     // ...
     "dependencies": {
       "@strapi/strapi": "4.15.5",
       "@strapi/plugin-users-permissions": "4.15.5",
       "@strapi/plugin-i18n": "4.15.5",
       "react": "^18.0.0",
       "react-dom": "^18.0.0",
       "react-router-dom": "5.3.4",
       "styled-components": "5.3.3"

       // ...
     }
   }
   ```

2. Save the edited `package.json` file.

3. Run the install command:
   

## Manually update the loading order of middlewares

Manually update the [`config/middlewares.js` configuration file](/dev-docs/configurations/middlewares) to ensure that `strapi::logger` is the first item in the array:





```js title="./config/middlewares.js" {3}
module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  // …
];
```





```ts title="./config/middlewares.ts" {3}
export default [
  "strapi::logger",
  "strapi::cors",
  "strapi::body",
  "strapi::errors",
  // …
];
```





## Rebuild the application



## Restart the application


