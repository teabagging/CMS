---
title: MongoDB v3 to SQL v3 migration
description: Migrate from a MongoDB to a SQL database in Strapi v3

---

<!-- TODO: update SEO -->

# Migrate from MongoDB to SQL with Strapi v3

Strapi v4 does not support MongoDB databases (see [blog post announcement](https://strapi.io/blog/mongo-db-support-in-strapi-past-present-and-future)).

If your Strapi v3 project uses a MongoDB database, migrating from Strapi v3 to Strapi v4 is a 2-step process: first, migrate from MongoDB to SQL within Strapi v3, and then migrate the SQL database from Strapi v3 to Strapi v4.

Migrating from MongoDB to SQL with Strapi v3 requires:

1. [preparing the migration locally](#prepare-the-migration-locally),
2. [migrating the data locally](#migrate-the-data-locally),
3. [migrating the local data to production](#migrate-the-local-data-to-production).

## Prepare the migration locally

To prepare the migration locally:

 

    ```bash
    
    ## install the bookshelf connector
    npm install strapi-connector-bookshelf@3.6.9 knex@0.21.19

    # install the appropriate database driver
    # for SQLite
    npm install sqlite3@5.0.2
    # for PostgreSQL
    npm install pg@8.7.3
    # for MySQL
    npm install mysql@2.18.1
    ```

    b. Update the configuration in  `./config/database.js`:

    


    ```jsx
    // before
    {
      connector: 'mongoose',
      settings: {
        database: 'strapi',
        username: 'strapi',
        password: 'strapi',
        port: 27017,
        host: 'localhost',
      },
      options: {},
    }
    
    ```

    


    


    ```js
    // after
    module.exports = ({ env })  ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    });
    ```

    

    postgresql" title="PostgreSQL">

    ```js
    // after
    module.exports = ({ env })  ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            database: 'strapi',
            username: 'strapi',
            password: 'strapi',
            port: 5432,
            host: 'localhost',
          },
          options: {},
        },
      },
    });
    ```

    

    mysql" title="MySQL">

    ```js
    // after
    module.exports = ({ env })  ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            database: 'strapi',
            username: 'strapi',
            password: 'strapi',
            port: 3306,
            host: 'localhost',
          },
          options: {},
        },
      },
    });
    ```

    

    

    

    

4. Start the application locally to generate the SQL schema and default values in the database.
5. Shut down the application.
6. Truncate every table and reset primary keys to only keep the structure, using the following queries, depending on the database type:

  


  ```sql
  // truncate
  DELETE FROM tableA;
  DELETE FROM tableB;

  // reset sequences
  DELETE FROM sqlite_sequence 
  WHERE name IN ('table_a', 'table_b', '...');
  ```

  

  postgresql" title="PostgreSQL">

  ```sql
  TRUNCATE tableA, tableB, tableC RESTART IDENTITY CASCADE;
  ```

  

  mysql" title="MySQL">

  ```sql
  // truncate
  SET FOREIGN_KEY_CHECKS = 0;

  TRUNCATE tableA;
  TRUNCATE tableB;

  SET FOREIGN_KEY_CHECKS = 1;
  ```

  

  

## Migrate the data locally

To migrate the data locally:

- either build your own script based on the differences between MongoDB and SQL implementations (see [cheatsheet](/dev-docs/migration/v3-to-v4/data/mongo-sql-cheatsheet)), using the following advice:

  - On the 1st pass:
    - Create all the entries without relations/components links.
    - Create a mapping from MongoDB ids to SQL ids.
  - and on the 2nd pass, create the relations/components links based on the MongoDB to SQL ids mapping.

- or use a migration tool, like [the Studio3T tutorial](https://studio3t.com/knowledge-base/articles/mongodb-to-sql-migration/#mappings), taking into account the differences between MongoDB and SQL implementations (see [cheatsheet](/dev-docs/migration/v3-to-v4/data/mongo-sql-cheatsheet)).

## Migrate the local data to production

To migrate the local data to the production database:

1. Dump the SQL data migrated locally.

2. Import the dump into the production database.

3. Deploy the application with the updated connector (see [prepare the migration locally](#prepare-the-migration-locally) for configuration details).

:::strapi Next steps
If the present guide was used to migrate from Strapi v3 to Strapi v4, the next step in the data migration process is to proceed to the [SQL migration from Strapi v3 to Strapi v4](/dev-docs/migration/v3-to-v4/data/sql).
:::
