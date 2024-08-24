---
title: GraphQL

description: Integrate Strapi with GraphQL.

---

# Getting Started with GraphQL

This integration guide follows the [Quick Start Guide](/dev-docs/quick-start) and assumes you have you have fully completed the "Hands-on" path. You should be able to consume the API by browsing the URL [http://localhost:1337/api/restaurants](http://localhost:1337/api/restaurants).

If you haven't gone through the Quick Start Guide, the way you request a Strapi API with [GraphQL](https://graphql.org/) remains the same except that you will not fetch the same content.

## Install the GraphQL plugin

Install the GraphQL plugin in your Strapi project.



yarn" label="yarn">

```bash
yarn strapi install graphql
```



npm" label="npm">

```bash
npm run strapi install graphql
```





## Fetch your Restaurant collection type

Use the [GraphQL Playground](http://localhost:1337/graphql) to fetch your content.



```graphql
query Restaurants {
  restaurants {
    id
    name
    description
    categories {
      name
    }
  }
}
```





```json
{
  "data": {
    "restaurants": [
      {
        "id": "1",
        "name": "Biscotte Restaurant",
        "description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",
        "categories": [
          {
            "name": "French Food"
          }
        ]
      }
    ]
  }
}
```




### Examples

These examples do not include configuring your client with Apollo for your [GraphQL endpoint](http://localhost:1337/graphql). Please follow the associated documentation for [React](https://www.apollographql.com/docs/react/get-started/) or [Vue.js](https://apollo.vuejs.org/guide/installation.html#_1-apollo-client).



React" label="React">

Using [React](/dev-docs/integrations/react.md) and [Apollo](https://www.apollographql.com/)

```js
import { gql, useQuery } from '@apollo/client';

function Restaurants() {
  const { loading, error, data } = useQuery(gql`
    query Restaurants {
      restaurants {
        id
        name
        description
        categories {
          name
        }
      }
    }
  `);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.restaurants.map(restaurant  (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
```



Vue.js" label="Vue.js">

Using [Vue.js](/dev-docs/integrations/vue-js.md) and [Apollo](https://www.apollographql.com/)

```js
<template>
  <div>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      restaurants: []
    };
  },
  apollo: {
    restaurants: gql`
      query Restaurants {
        restaurants {
          id
          name
          description
          categories {
            name
          }
        }
      }`
  }
};
</script>
```





## Fetch your Category collection type

 


```graphql
query Category {
  category(id: 1) {
    id
    name
    restaurants {
      id
      name
      description
    }
  }
}
```





```json
{
  "data": {
    "category": {
      "id": "1",
      "name": "French Food",
      "restaurants": [
        {
          "id": "1",
          "name": "Biscotte Restaurant",
          "description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers."
        }
      ]
    }
  }
}
```




## Examples



React" label="React">

Using [React](/dev-docs/integrations/react.md) and [Apollo](https://www.apollographql.com/)

```js
import { gql, useQuery } from '@apollo/client';

function Category({ id }) {
  const { loading, error, data } = useQuery(
    gql`
      query Category($id: ID!) {
        category(id: $id) {
          id
          name
          restaurants {
            id
            name
            description
          }
        }
      }
    `,
    { variables: { id } }
  );

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>{data.category.name}</h1>
      <ul>
        {data.category.restaurants.map(restaurant  (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
```



Vue.js" label="Vue.js">

Using [Vue.js](/dev-docs/integrations/vue-js.md) and [Apollo](https://www.apollographql.com/)

```js
<template>
  <div>
    <h1>{{ category.name }}
    <ul>
      <li v-for="restaurant in category.restaurants" :key="restaurant.id">
        {{ restaurant.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: {},
      routeParam: this.$route.params.id
    };
  },
  apollo: {
    category: {
      query: gql`
      query Category($id: ID!) {
        category(id: $id) {
          id
          name
          restaurants {
            id
            name
            description
          }
        }
      }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>
```




