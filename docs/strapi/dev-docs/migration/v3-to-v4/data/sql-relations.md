---
title: SQL relations cheatsheet
description: Learn how model schemas and entity relationship diagrams differ between Strapi v3 and v4

---

# Data migration: SQL relations in Strapi v3 and v4

This documentation is part of the [SQL migration guide](/dev-docs/migration/v3-to-v4/data/sql) included in the [data migration guide](/dev-docs/migration/v3-to-v4/data-migration) and designed to help you migrate from Strapi v3.6.x to Strapi v4.0.x.

:::strapi v3 / v4 comparison

In Strapi v3, only many-to-many relations (both bidirectional and unidirectional) and polymorphic relations trigger the creation of SQL join tables.

In Strapi v4, every type of [relation](/dev-docs/backend-customization/models#relations) between 2 entities triggers the creation of a SQL join table.
:::

This documentation is built around an example using 2 different database entities: `article` and `category`. The example simulates adding a relation to the `article` entity pointing towards the `category` entity. For each relation type, the following sections illustrate:

- the definition of attributes in the [model schema](/dev-docs/backend-customization/models#model-schema) for each entity's model
- and the entity relationship diagrams.


Legend for entity relationship diagrams
Entity relationship diagrams use the following color code:

* for tables and relations:
  * Strapi v3 items are in orange
  * Strapi v4 items are in purple
* for table names (e.g. articles_category_links):
  * entity names (singular or plural) are in blue
  * attribute names from a schema are in green
  * all the other parts of a table name are in black

Entity relationship diagrams also use the following abbreviations:

- PK for primary key
- FK for foreign key



## One-to-one relations (1-1)

**Model schemas (attributes only)**:





```json title="article/article.settings.json"
{
  "category": {
    "model": "category",
    "via": "article"
  }
}
```





```json title="article/schema.json"
{
  "category": {
    "type": "relation",
    "relation": "oneToOne",
    "target": "api::category.category",
    "inversedBy": "article"
  }
}
```







```json title="category/category.settings.json"
{
  "article": {
    "model": "article",
    "via": "category"
  }
}
```





```json title="category/schema.json"
{
  "article": {
    "type": "relation",
    "relation": "oneToOne",
    "target": "api::article.article",
    "mappedBy": "category"
  }
}
```




**Database structures**:







## One-to-many relations (1-N)

**Model schemas (attributes only)**:




```json title="article/article.settings.json"
{
  "categories": {
    "collection": "category",
    "via": "article"
  }
}
```





```json title="article/schema.json"
{
  "categories": {
    "type": "relation",
    "relation": "oneToMany",
    "target": "api::category.category",
    "mappedBy": "article"
  }
}
```







```json title="category/category.settings.json"
{
  "article": {
    "model": "article",
    "via": "categories"
  }
}
```





```json title="category/schema.json"
{
  "article": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::article.article",
    "inversedBy": "categories"
  }
}
```




**Database structures:**







## Many-to-one relations (N-1)

**Model schemas (attributes only)**:




```json title="article/article.settings.json"
{
  "category": {
    "model": "category",
    "via": "articles"
  }
}
```





```json title="article/schema.json"
{
  "category": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::category.category",
    "inversedBy": "articles"
  }
}
```







```json title="category/category.settings.json"
{
  "articles": {
    "collection": "article",
    "via": "category"
  }
}
```





```json title="category/schema.json"
{
  "articles": {
    "type": "relation",
    "relation": "oneToMany",
    "target": "api::article.article",
    "mappedBy": "category"
  }
}
```




**Database structures:**




<img src="/img/assets/data-migration/v3-many-to-one.png" />





<img src="/img/assets/data-migration/v4-many-to-one.png" />




## Many-to-many relations (N-N)

**Model schemas (attributes only)**:




```json title="article/article.settings.json"
{
  "categories": {
    "collection": "category",
    "via": "articles",
    "dominant": true
  }
}
```





```json title="article/schema.json"
{
  "categories": {
    "type": "relation",
    "relation": "manyToMany",
    "target": "api::category.category",
    "inversedBy": "articles"
  }
}
```







```json title="category/category.settings.json"
{
  "articles": {
    "collection": "article",
    "via": "categories"
  }
}
```





```json title="category/schema.json"
{
  "articles": {
    "type": "relation",
    "relation": "manyToMany",
    "target": "api::article.article",
    "mappedBy": "categories"
  }
}
```




**Database structures:**




<img src="/img/assets/data-migration/v3-many-to-many.png" />





<img src="/img/assets/data-migration/v4-many-to-many.png" />




## One-way relations (unidirectional N-1)

**Model schemas (attributes only):**




```json title="article/article.settings.json"
{
  "category": {
    "model": "category"
  }
}
```





```json title="article/schema.json"
{
  "category": {
    "type": "relation",
    "relation": "oneToOne",
    "target": "api::category.category"
  }
}
```




**Database structures:**




<img src="/img/assets/data-migration/v3-one-way.png" />





<img src="/img/assets/data-migration/v4-one-way.png" />




## Many-way relations (unidirectional N-N)

**Model schemas (attributes only)**:





```json title="article/article.settings.json"
{
  "categories": {
    "collection": "category"
  }
}
```





```json title="article/schema.json"
{
  "categories": {
    "type": "relation",
    "relation": "oneToMany",
    "target": "api::category.category"
  }
}
```




**Database structures:**




<img src="/img/assets/data-migration/v3-many-way.png" />





<img src="/img/assets/data-migration/v4-many-way.png" />




## Polymorphic relations

:::strapi v3 / v4 comparison
In Strapi v3, table names for polymorphic relations end with `_morph` (singular), and the `attribute_type` points to an entity name.

In Strapi v4, table names for polymorphic relations end with `_morphs` (plural), and the `attribute_type` must point to an entity unique identifier.
:::

:::caution
Polymorphic relations should always have `“configurable”: false` defined in the attributes of the schema to prevent their modification in the admin panel.
:::

**Model schemas (attributes only)**:




```json title="article/article.settings.json"
{
  "related": {
    "collection": "*",
    "filter": "field",
    "configurable": false
  }
}
```





```json title="category/category.settings.json"
{
  "articles": {
    "collection": "article",
    "via": "related"
  }
}
```




In Strapi v3, only one morph table is created for every entity. Whenever a polymorphic relation attribute is added to the entity schema, 2 new columns are added to the `entity_morph` table: `attribute_id` and `attribute_type`.




```json title="article/schema.json"
{
  "related": {
    "type": "relation",
    "relation": "morphToMany",
    "configurable": false
  }
}
```





```json title="category/schema.json"
{
  "article": {
    "type": "relation",
    "relation": "morphMany",
    "target": "article",
    "morphBy": "related"
  }
}
```




In Strapi v4, a morph table is created for every entity/morph relation defined in the schema. If a single entity has 2 morph relations, 2 different tables are created and named using the following format: `entity_attribute_morphs`.

**Database structures:**




<img src="/img/assets/data-migration/v3-morph-many.png" />





<img src="/img/assets/data-migration/v4-morph-many.png" />




## Circular relations

Circular relations are relations that point to the same entity (e.g. `article` → `article`). In the schema definitions, circular relations are defined the same way as other relations.

In Strapi v4, `entity_id` and `inv_entity_id` are used to differentiate the relation to the initial entry from the related entry in the SQL join table.

**Database structures example in Strapi v4**:

![v4-circular-many-many.png](/img/assets/data-migration/v4-circular-many-many.png)

## Relations to components

The schema definition for components is the same in Strapi v3 and in Strapi v4, but database structures differ.

**Model schemas (attributes only):**





```json
{
  "component-name": {
    "type": "component",
    "component": "default.comp"
  }
}
```





```json
{
  "component-name": {
    "type": "component",
    "component": "default.comp"
  }
}
```




**Database structures:**




<img src="/img/assets/data-migration/v3-components.png" />





<img src="/img/assets/data-migration/v4-components.png" />



