---
title: Sort and Pagination
description: Use Strapi's REST API to sort or paginate your data.


---





# REST API: Sort & Pagination

Entries that are returned by queries to the [REST API](/dev-docs/api/rest) can be sorted and paginated.





:::


## Sorting

Queries can accept a `sort` parameter that allows sorting on one or multiple fields with the following syntaxes:

- `GET /api/:pluralApiId?sort=value` to sort on 1 field
- `GET /api/:pluralApiId?sort[0]=value1&sort[1]=value2` to sort on multiple fields (e.g. on 2 fields)

The sorting order can be defined with:

- `:asc` for ascending order (default order, can be omitted)
- or `:desc` for descending order.




### Example: Sort using 2 fields

You can sort by multiple fields by passing fields in a `sort` array.













```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Test Article",
        "slug": "test-article",
        // ...
      }
    },
    {
      "id": 2,
      "attributes": {
        "title": "Test Article",
        "slug": "test-article-1",
        // ...
      }
    }
  ],
  "meta": {
    // ...
  }
}
```









```js
const qs = require('qs');
const query = qs.stringify({
  sort: ['title', 'slug'],
}, {
  encodeValuesOnly: true, // prettify URL
});

await request(`/api/articles?${query}`);
```









### Example: Sort using 2 fields and set the order

Using the `sort` parameter and defining `:asc` or  `:desc` on sorted fields, you can get results sorted in a particular order.






```json
{
  "data": [
    {
      "id": 2,
      "attributes": {
        "title": "Test Article",
        "slug": "test-article-1",
        // ...
      }
    },
    {
      "id": 1,
      "attributes": {
        "title": "Test Article",
        "slug": "test-article",
        // ...
      }
    }
  ],
  "meta": {
    // ...
  }
}
```










```js
const qs = require('qs');
const query = qs.stringify({
  sort: ['title:asc', 'slug:desc'],
}, {
  encodeValuesOnly: true, // prettify URL
});

await request(`/api/articles?${query}`);
```






## Pagination

Queries can accept `pagination` parameters. Results can be paginated:

- either by [page](#pagination-by-page) (i.e., specifying a page number and the number of entries per page)
- or by [offset](#pagination-by-offset) (i.e., specifying how many entries to skip and to return)

:::note
Pagination methods can not be mixed. Always use either `page` with `pageSize` **or** `start` with `limit`.
:::



### Pagination by page

To paginate results by page, use the following parameters:

| Parameter               | Type    | Description                                                               | Default |
| ----------------------- | ------- | ------------------------------------------------------------------------- | ------- |
| `pagination[page]`      | Integer | Page number                                                               | 1       |
| `pagination[pageSize]`  | Integer | Page size                                                                 | 25      |
| `pagination[withCount]` | Boolean | Adds the total numbers of entries and the number of pages to the response | true    |





**Example:**

Using the `pagination[page]` and `pagination[pageSize]` parameters you can get results paginated by page:











```json
{
  "data": [
    // ...
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 5,
      "total": 48
    }
  }
}
```









```js
const qs = require('qs');
const query = qs.stringify({
  pagination: {
    page: 1,
    pageSize: 10,
  },
}, {
  encodeValuesOnly: true, // prettify URL
});

await request(`/api/articles?${query}`);
```







### Pagination by offset

To paginate results by offset, use the following parameters:

| Parameter               | Type    | Description                                                    | Default |
| ----------------------- | ------- | -------------------------------------------------------------- | ------- |
| `pagination[start]`     | Integer | Start value (i.e. first entry to return)                      | 0       |
| `pagination[limit]`     | Integer | Number of entries to return                                    | 25      |
| `pagination[withCount]` | Boolean | Toggles displaying the total number of entries to the response | `true`  |


The default and maximum values for `pagination[limit]` can be [configured in the `./config/api.js`](/dev-docs/configurations/api) file with the `api.rest.defaultLimit` and `api.rest.maxLimit` keys.
:::




**Example:**

Using the `pagination[start]` and `pagination[limit]` parameters you can get results paginated by offset:










```json
{
  "data": [
    // ...
  ],
  "meta": {
    "pagination": {
      "start": 0,
      "limit": 10,
      "total": 42
    }
  }
}
```









```js
const qs = require('qs');
const query = qs.stringify({
  pagination: {
    start: 0,
    limit: 10,
  },
}, {
  encodeValuesOnly: true, // prettify URL
});

await request(`/api/articles?${query}`);
```





