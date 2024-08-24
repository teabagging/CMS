---
title: Entity Service API
description: The Entity Service is the layer that handles Strapi's complex data structures like components and dynamic zones, and uses the Query Engine API under the hood to execute database queries.

---



# Entity Service API

:::prerequisites
Before diving deeper into the Entity Service API documentation, it is recommended that you read the following introductions:
- the [backend customization introduction](/dev-docs/backend-customization),
- and the [Content API introduction](/dev-docs/api/content-api).
:::

The Strapi backend provides an Entity Service API, built on top of the [Query Engine API](/dev-docs/api/query-engine/). The Entity Service is the layer that handles Strapi's complex data structures like [components](/dev-docs/backend-customization/models#components) and [dynamic zones](/dev-docs/backend-customization/models#dynamic-zones), and uses the Query Engine API under the hood to execute database queries.

:::strapi Entity Service API vs. Query Engine API

:::

:::info Disambiguation: Services vs. Entity Service
While [services](/dev-docs/backend-customization/services) can use the Entity Service API, services and the Entity Service API are not directly related. You can find more information about the core elements of the Strapi back end in the [back-end customization](/dev-docs/backend-customization) documentation.
:::

## Basic usage

The Entity Service is available through `strapi.entityService`:

```js
const entry = await strapi.entityService.findOne('api::article.article', 1, {
  populate: { someRelation: true },
});
```

## Available operations

The Entity Service API allows the following operations on entities:




