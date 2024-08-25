# How to update Ghost

Learn how to update your self-hosted Ghost install to the latest version

Our team [release](https://github.com/TryGhost/Ghost/releases) updates to the open source software every week, and you can find out whether new updates are available any time by running `ghost check-update`.

If you’re already running the latest major version (`5.x`) - update using Ghost CLI with two commands:

1. Run `ghost backup` to generate a full backup of your site data
2. Then, run `ghost update` ✨

## Updating to the latest major version

If you’re not yet on the latest major version, there are two recommended methods for updating your Ghost install, depending on what version you’re currently on, and what type of database you’re using in production. Below is a full breakdown of the the recommended update paths.

**[Updates](https://ghost.org/docs/update-major-version/) are recommended for sites that are:**

* Running Ghost version `3.0.0` or higher and are using MySQL in production
* Development sites using any database

**[A full reinstall](https://ghost.org/docs/reinstall/) of Ghost is recommended for sites that are:**

* Running on a Ghost version less than `3.0.0`
* Using SQLite3 in production on any Ghost version


| Ghost Version | Database | Update method                                          |
| ------------- | -------- | ------------------------------------------------------ |
| 0.x           | Any      | [Reinstall](https://ghost.org/docs/reinstall/)         |
| 1.x           | Any      | [Reinstall](https://ghost.org/docs/reinstall/)         |
| 2.x           | Any      | [Reinstall](https://ghost.org/docs/reinstall/)         |
| 3.x           | SQLite   | [Reinstall](https://ghost.org/docs/reinstall/)         |
| 3.x           | MySQL    | [Update](https://ghost.org/docs/update-major-version/) |
| 4.x           | SQLite   | [Reinstall](https://ghost.org/docs/reinstall/)         |
| 4.x           | MySQL    | [Update](https://ghost.org/docs/update-major-version/) |

*If you’re using MariaDB it is recommended to migrate to MySQL 8 - read more about [supported databases](https://ghost.org/docs/faq/supported-databases/).*
