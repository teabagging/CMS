---
title: Query Engine API
description: Strapi provides a Query Engine API to give unrestricted internal access to the database layer at a lower level.

---



# Query Engine API

:::prerequisites
Before diving deeper into the Query Engine API documentation, it is recommended that you read the following introductions:
- the [backend customization introduction](/dev-docs/backend-customization),
- and the [Content API introduction](/dev-docs/api/content-api).
:::

The Strapi backend provides a Query Engine API to interact with the database layer at a lower level. The Query Engine API should mostly be used by plugin developers and developers adding custom business logic to their applications.

👉  In most use cases, it's recommended to use the [Entity Service API](/dev-docs/api/entity-service/) instead of the Query Engine API.

:::strapi Entity Service API vs. Query Engine API

:::

## Basic usage

The Query Engine is available through `strapi.db.query`:

```js
strapi.db.query('api::blog.article').findMany({ // uid syntax: 'api::api-name.content-type-name'
  where: {
    title: {
      $startsWith: '2021',
      $endsWith: 'v4',
    },
  },
  populate: {
    category: true,
  },
});
```

## Available operations

The Query Engine allows the following operations on database entries:




