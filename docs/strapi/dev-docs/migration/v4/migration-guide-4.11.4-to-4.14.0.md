---
title: Migrate from 4.11.4 to 4.14.0

description: Learn how you can migrate your Strapi application from 4.14.0 to 4.14.0.
---






# v4.11.4 to v4.14.0 migration guide

The Strapi v4.11.4 to v4.14.0 migration guide upgrades v4.11.4 to v4.14.0. Strapi v4.14.0 migrated the `strapi/strapi` package to TypeScript and introduced a new `@strapi/typings` package. This migration is required if you have used TypeScript in your project prior to 4.14.0. The migration guide consists of:

- Upgrading the application dependencies
- Generating your TypeScript typings
- Reinitializing the application




## Upgrading the application dependencies to 4.14.0

:::prerequisites
Stop the server before starting the upgrade.
:::

1. Upgrade all of the Strapi packages in `package.json` to `4.14.0`:

   ```json title="path: package.json"
   {
     // ...
     "dependencies": {
       "@strapi/strapi": "4.14.0",
       "@strapi/plugin-users-permissions": "4.14.0",
       "@strapi/plugin-i18n": "4.14.0"
       // ...
     }
   }
   ```

2. Save the edited `package.json` file.

3. Run the install command:
   

## Generate TypeScript typings

Generate your TypeScript typings by running the following command in the terminal:



yarn" label="yarn">

```bash
yarn strapi ts:generate-types
```



npm" label="npm">

```bash
npm run strapi ts:generate-types
```





## Rebuild the application



## Restart the application


