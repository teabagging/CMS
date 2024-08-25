# Ghost CLI

A fully loaded tool to help you get Ghost installed and configured and to make it super easy to keep your Ghost install up to date.

Ghost-CLI is to makes it possible to install or update Ghost with a *single command*. In addition, it performs useful operations to assist with maintaining your environment, such as:

* Checking for common environment problems
* Creating a **logical folder structure**
* Providing for production or development installs
* Allowing for **upgrades and rollbacks**
* Handling **user management and permissions**
* Configuring Ghost
* Configuring **NGINX**
* Setting up **MySQL**
* Configuring **systemd**
* Accessing Ghost log files
* Managing existing Ghost installs

---

## Install & update

Ghost-CLI is an npm module that can be installed via either npm.

```bash
# On a production server using a non-root user:
sudo npm install -g ghost-cli@latest
```

Locally, you likely don’t need sudo. Using `@latest` means this command with either install or update ghost-cli and you only have to remember the one command for both ✨

## Useful options

There are some global flags you may find useful when using `ghost-cli`:

```bash
# Output usage information for Ghost-CLI
ghost --help, ghost -h, ghost help, ghost [command] --help

# Enables the verbose logging output for debugging
ghost --verbose, ghost -V

# Print your CLI version and Ghost version
ghost --version, ghost -v, ghost version

# Run the command in a different directory
ghost --dir path/to/directory

# Runs command without asking for any input
ghost --no-prompt

# Runs command without using colours
ghost --no-color
```

## Commands

Below are the available commands in Ghost-CLI. You can always run `ghost --help` or `ghost [command] --help` to get more detail, or inline help for available options.

### Ghost config

`ghost config` accepts two optional arguments: `key` and `value`. Here are the three different combinations and what happens on each of them:

```bash
# Create a new config file for the particular env
ghost config

# Find and return the value in the config for the key passed
ghost config [key]

# Set a key and a value in the config file
ghost config [key] [value]

# Set the url for your site
ghost config url https://mysite.com
```

The `ghost config` command only affects the configuration files. In order for your new config to be used, run `ghost restart`.

#### Options

If you’re using `ghost config` to generate a configuration file, you can supply multiple key-value pairs in the form of options to avoid being prompted for that value.

All of these options can also be passed to `ghost install` and `ghost setup` , as these commands call `ghost config`.

See the [config guide](https://ghost.org/docs/config/) or run `ghost config --help` for more detailed information.

##### Application options

```bash
# URL of the site including protocol
--url https://mysite.com

# Admin URL of the site
--admin-url https://admin.mysite.com

# Port that Ghost should listen on
--port 2368

# IP to listen on
--ip 127.0.0.1

# Transport to send log output to
--log ["file","stdout"]
```

##### Database options

```bash
# Type of database to use (SQLite3 or MySQL)
--db

# For SQLite3 we just need a path to database file
--dbpath content/data/ghost_dev.db

# For MySQL we need full credentials:
--dbhost localhost

# Database user name
--dbuser ghost

# Database password
--dbpass ****

# Database name
--dbname ghost_dev
```

##### Mail options

```bash
# Mail transport, E.g SMTP, Sendmail or Direct
--mail SMTP

# Mail service (used with SMTP transport), E.g. Mailgun, Sendgrid, Gmail, SES...
--mailservice Mailgun

# Mail auth user (used with SMTP transport)
--mailuser postmaster@something.mailgun.org

# Mail auth pass (used with SMTP transport)
--mailpass ****

# Mail host (used with SMTP transport)
--mailhost smtp.eu.mailgun.org

# Mail port (used with SMTP transport)
--mailport 465
```

##### Service options

```bash
# Process manager to run with (local, systemd)
--process local
```

#### Debugging

In order for your new config to be used, run `ghost restart`.

---

### Ghost install

The `ghost install` command is your one-stop-shop to get a running production install of Ghost.

This command includes the necessary mysql, nginx and systemd configuration to get your publication online, and provides a series of setup questions to configure your new publication. The end result is a fully installed and configured instance ✨

> Not ready for production yet? `ghost install local` installs ghost in development mode using sqlite3 and a local process manager. Read more about [local installs](https://ghost.org/docs/install/local/).

#### How it works

The `ghost install` command runs a nested command structure, but you only ever have to enter a single command.

First, it will run `ghost doctor` to check your environment is compatible. If checks pass, a local folder is setup, and Ghost is then downloaded from npm and installed.

Next, `ghost setup` runs, which will provide [prompts](https://ghost.org/docs/install/ubuntu/#install-questions) for you to configure your new publication via the `ghost config` command, including creating a MySQL user, initialising a database, configure nginx and sets up SSL.

Finally, the CLI will prompt to see if you want to run Ghost and if you choose yes `ghost start` will run.

#### Arguments

```bash
# Install a specific version (1.0.0 or higher)
ghost install [version]

# Install version 2.15.0
ghost install 2.15.0

# Install locally for development
ghost install local

# Install version 2.15.0, locally for development
ghost install 2.15.0 --local
```

#### Options

As `ghost install` runs nested commands, it also accepts options for the `ghost doctor`, `ghost config`, `ghost setup` and `ghost start` commands.

See the individual command docs, or run `ghost install --help` for more detailed information.

```bash
# Get more information before running the command
ghost install --help

# Install in development mode for a staging env
ghost install --development, ghost install -D

# Select the directory to install Ghost in
ghost install --dir path/to/dir

# Install Ghost from a specific archive (useful for testing or custom builds)
ghost install --archive path/to/file.tgz

# Disable stack checks
ghost install --no-stack

# Install without running setup
ghost install --no-setup

# Install without starting Ghost
ghost install --no-start

# Tells the process manager not to restart Ghost on server reboot
ghost setup --no-enable

# Install without prompting (disable setup, or pass all required parameters as arguments)
ghost install --no-prompt
```

#### Directory structure

When you install Ghost using Ghost-CLI, the local directory will be setup with a set of folders designed to keep the various parts of your install separate. After installing Ghost, you will have a folder structure like this which should not be changed:

```bash
.
├── .config.[env].json  # The config file for your Ghost instance
├── .ghost-cli          # Utility system file for Ghost CLI, don't modify
├── /content            # Themes/images/content, not changed during updates
├── /current            # A symlink to the currently active version of Ghost
├── /system             # NGINX/systemd/SSL files on production installs
└── /versions           # Installed versions of Ghost available roll forward/back to
```

---

### Ghost setup

`ghost setup` is the most useful feature of Ghost-CLI. In most cases you will never need to run it yourself, as it’s called automatically as a part of `ghost install`.

#### How it works

Setup configures your server ready for running Ghost in production. It assumes the [recommended stack](https://ghost.org/docs/install/ubuntu/#prerequisites/) and leaves your site in a production-ready state. Setup is broken down into stages:

* **mysql** - create a specific MySQL user that is used only for talking to Ghost’s database.
* **nginx** - creates an nginx configuration
* **ssl** - setup SSL with letsencrypt, using [acme.sh](https://github.com/Neilpang/acme.sh)
* **migrate** - initialises the database
* **linux-user** - creates a special low-privilege `ghost` user for running Ghost

#### What if I want to do something else?

The `Ghost-CLI` tool is designed to work with the recommended stack and is the only supported install method. However, since Ghost is a fully open-source project, and many users have different requirements, it is possible to setup and configure your site manually.

The CLI tool is flexible and each stage can be run individually by running `ghost setup <stage-name>` or skipped by passing the `--no-setup-<stage-name>` flag.

#### Arguments

```bash
# Run ghost setup with specific stages
ghost setup [stages...]

# Creates a new mysql user with minimal privileges
ghost setup mysql

# Creates an nginx config file in `./system/files/` and adds a symlink to `/etc/nginx/sites-enabled/`
ghost setup nginx

# Creates an SSL service for Ghost
ghost setup ssl

# Create an nginx and ssl setup together
ghost setup nginx ssl

# Creates a low-privileged linux user called `ghost`
ghost setup linux-user

# Creates a systemd unit file for your site
ghost setup systemd

# Runs a database migration
ghost setup migrate
```

#### Options

As `ghost setup` runs nested commands, it also accepts options for the `ghost config`, `ghost start` and `ghost doctor` commands. Run `ghost setup --help` for more detailed information.

```bash
# Skips a setup stage
ghost setup --no-setup-mysql
ghost setup --no-setup-nginx
ghost setup --no-setup-ssl
ghost setup --no-setup-systemd
ghost setup --no-setup-linux-user
ghost setup --no-setup-migrate

# Configure a custom process name should be (default: ghost-local)
ghost setup --pname my-process

# Disable stack checks
ghost setup --no-stack

# Setup without starting Ghost
ghost setup --no-start

# Tells the process manager not to restart Ghost on server reboot
ghost setup --no-enable

# Install without prompting (must pass all required parameters as arguments)
ghost setup --no-prompt
```

---

### Ghost start

Running `ghost start` will start your site in background using the configured process manager. The default process manager is **systemd**, or local for local installs.

The command must be executed in the directory where the Ghost instance you are trying to start lives, or passed the correct directory using the `--dir` option.

#### Options

```bash
# Start running the Ghost instance in a specific directory
ghost start --dir /path/to/site/

# Start ghost in development mode
ghost start -D, ghost start --development

# Tells the process manager to restart Ghost on server reboot
ghost start --enable

# Tells the process manager not to restart Ghost on server reboot
ghost start --no-enable

# Disable memory availability checks in ghost doctor
ghost start --no-check-mem
```

#### Debugging

If running `ghost start` gives an error, try use `ghost run` to start Ghost without using the configured process manager. This runs Ghost directly, similar to `node index.js`. All the output from Ghost will be written directly to your terminal, showing up any uncaught errors or other output that might not appear in log files.

---

### Ghost stop

Running `ghost stop` stops the instance of Ghost running in the current directory. Alternatively it can be passed the name of a particular ghost instance or directory. You can always discover running Ghost instances using `ghost ls`.

#### Arguments

```bash
# Stop Ghost in the current folder
ghost stop

# Stop a specific Ghost instance (use ghost ls to find the name)
ghost stop [name]

# Stop the Ghost instance called ghost-local
ghost stop ghost-local
```

#### Options

```bash
# Stop all running Ghost instances
ghost stop --all

# Stop running the Ghost instance in a specific directory
ghost stop --dir /path/to/site/

# Tells the process manager that Ghost should not start on server reboot
ghost stop --disable
```

---

### Ghost restart

Running `ghost restart` will stop and then start your site using the configured process manager. The default process manager is systemd, or local for local installs.

The command must be executed in the directory where the Ghost instance you are trying to start lives, or passed the correct directory using the `--dir` option.

#### Options

```bash
# Start running the Ghost instance in a specific directory
ghost restart --dir /path/to/site/
```

#### Debugging

If running `ghost restart` gives an error, try using `ghost run` to debug the error.

---

### Ghost update

Run `ghost update` to upgraded to new versions of Ghost, which are typically released every 1-2 weeks.

#### Arguments

```bash
# Update to the latest version
ghost update

# Update to a specific version (1.0.0 or higher)
ghost update [version]

# Update to version 2.15.0
ghost update 2.15.0
```

#### Options

```bash
# If an upgrade goes wrong, use the rollback flag
ghost update --rollback

# Install and re-download the latest version of Ghost
ghost update --force

# Force install a specific version of Ghost
ghost update [version] --force

# Updates to the latest within v1
ghost update --v1

# Don't restart after upgrading
ghost update --no-restart

# Disable the automatic rollback on failure
ghost update --no-auto-rollback

# Upgrade Ghost from a specific zip (useful for testing or custom builds)
ghost update --zip path/to/file.zip

# Disable memory availability checks in ghost doctor
ghost update --no-check-mem
```

#### Major updates

Every 12-18 months we release a [major version](https://ghost.org/docs/faq/major-versions-lts/) which breaks backwards compatibility and requires a more involved upgrade process, including backups and theme compatibility.

Use the [update documentation](https://ghost.org/docs/update/) as a guide to the necessary steps for a smooth upgrade experience.

#### Debugging

If running `ghost update` gives an error, try using `ghost run` to debug the error.

---

### Ghost backup

Run `ghost backup` to generate a zip file backup of your site data.

#### How it works

When performing manual updates it’s recommended to make frequent backups, so if anything goes wrong, you’ll still have all your data. This is especially important when [updating](https://ghost.org/docs/update/) to the latest major version.

This command creates a full backup of your site data, including:

* Your content in JSON format
* A full member CSV export
* All themes that have been installed including your current active theme
* Images, files, and media (video and audio)
* A copy of `routes.yaml` and `redirects.yaml` or `redirects.json`

Read more about how to [manually download your site data](https://ghost.org/docs/faq/manual-backup/).

---

### Ghost doctor

Running `ghost doctor` will check the system for potential hiccups when installing or updating Ghost.

This command allows you to use `ghost-cli` as a diagnostic tool to find potential issues for your Ghost install, and provides information about what needs to be resolved if any issues arise.

The CLI automatically runs this command when installing, updating, starting or setting up ghost - and you can use is manually with `ghost doctor`.

#### Arguments

```bash
# Check is the required config file exists and validates it's values
ghost doctor startup

# Check if the setup process was successful
ghost doctor setup
```

#### Options

Run `ghost doctor --help` for more detailed information.

```bash

# Disable the memory availability checks
ghost doctor --no-check-mem
```

---

### Ghost ls

The `ghost ls` command lists all Ghost sites and their status from the `~/.ghost/config` file. This is useful if you can’t remember where you installed a particular instance of Ghost, or are working with multiple instances (local, production, staging and so on).

#### Output

```bash
# Development
> ghost ls

┌────────────────┬─────────────────────────────────┬─────────┬─────────────────────-─┬─────┬──────-┬─────────────────┐
│ Name           │ Location                        │ Version │ Status                │ URL │ Port  │ Process Manager │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local    │ ~/Sites/cli-test                │ 1.22.1  │ stopped               │ n/a │ n/a   │ n/a             │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local-2  │ ~/Sites/theme-dev               │ 2.12.0  │ stopped               │ n/a │ n/a   │ n/a             │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local-3  │ ~/Sites/new-theme               │ 2.20.0  │ running (development) │     │ 2368  │ local           │
└────────────────┴─────────────────────────────────┴─────────┴──────────────────────-┴─────┴─────-─┴─────────────────┘
```

```bash
# Production
> ghost ls

+ sudo systemctl is-active ghost_my-ghost-site
┌───────────────┬────────────────┬─────────┬──────────────────────┬─────────────────────────--┬──────┬─────────────────┐
│ Name          │ Location       │ Version │ Status               │ URL                       │ Port │ Process Manager │
├───────────────┼────────────────┼─────────┼──────────────────────┼─────────────────────────--┼──────┼─────────────────┤
│ my-ghost-site │ /var/www/ghost │ 2.1.2   │ running (production) │ https://my-ghost-site.org │ 2368 │ systemd         │
└───────────────┴────────────────┴─────────┴──────────────────────┴─────────────────────────--┴──────┴─────────────────┘
```

---

### Ghost log

View the access and error logs from your Ghost site (not the CLI). By default `ghost log` outputs the last 20 lines from the access log file for the site in the current folder.

Ghost’s default log config creates log files in the `content/logs` directory, and creates two different files:

1. An **access log** that contains all log levels, named e.g. `[site_descriptor].log`
2. An **error log** that contains error-level logs *only*, named e.g. `[site_descriptor].error.log`

The site descriptor follows the pattern `[proto]__[url]__[env]` e.g. `http__localhost_2368__development` or `https__mysite_com__production`. The files are be rotated, therefore you may see many numbered files in the `content/logs` directory.

#### Arguments

```bash
# View last 20 lines of access logs
ghost log

# View logs for a specific Ghost instance (use ghost ls to find the name)
ghost log [name]

# View logs for the Ghost instance called ghost-local
ghost log ghost-local
```

#### Options

```bash
# Show 100 log lines
ghost log -n 100, ghost log --number 100

# Show only the error logs
ghost log -e, ghost log --error

# Show 50 lines of the error log
ghost log -n 50 -e

# Follow the logs (e.g like tail -f)
ghost log -f, ghost log --follow

# Follow the error log
ghost log -fe

# Show logs for the Ghost instance in a specific directory
ghost log --dir /path/to/site/
```

#### Debugging

There may be some output from Ghost that doesn’t appear in the log files, so for debugging purposes you may also want to try the [ghost run](https://ghost.org/docs/ghost-cli#ghost-run) command.

If you have a custom log configuration the `ghost log` command may not work for you. In particular the `ghost log` command requires that file logging is enabled. See the [logging configuration docs](https://ghost.org/docs/config/#logging) for more information.

---

### Ghost uninstall

**Use with caution** - this command completely removes a Ghost install along with all of its related data and config. There is no recovery from this if you have no backups.

The command `ghost uninstall` must be executed in the directory containing the Ghost install that you would like to remove. The following tasks are performed:

* stop ghost
* disable systemd if necessary
* remove the `content` folder
* remove any related systemd or nginx configuration
* remove the remaining files inside the install folder

> Running `ghost uninstall --no-prompt` or `ghost uninstall --force` will skip the warning and remove Ghost without a prompt.

---

### Ghost help

Use the help command to access a list of possible `ghost-cli` commands when required.

This command is your port of call when you want to discover a list of available commands in the Ghost-CLI. You can call it at any time ✨

#### Output

```bash
Commands:
  ghost buster                 Who ya gonna call? (Runs `yarn cache clean`)
  ghost config [key] [value]   View or edit Ghost configuration
  ghost doctor [categories..]  Check the system for any potential hiccups when installing/updating
                               Ghost
  ghost install [version]      Install a brand new instance of Ghost
  ghost log [name]             View the logs of a Ghost instance
  ghost ls                     View running ghost processes
  ghost migrate                Run system migrations on a Ghost instance
  ghost restart                Restart the Ghost instance
  ghost run                    Run a Ghost instance directly (used by process managers and for
                               debugging)
  ghost setup [stages..]       Setup an installation of Ghost (after it is installed)
  ghost start                  Start an instance of Ghost
  ghost stop [name]            Stops an instance of Ghost
  ghost uninstall              Remove a Ghost instance and any related configuration files
  ghost update [version]       Update a Ghost instance
  ghost version                Prints out Ghost-CLI version (and Ghost version if one exists)

Global Options:
  --help             Show help                                                             [boolean]
  -d, --dir          Folder to run command in
  -D, --development  Run in development mode                                               [boolean]
  -V, --verbose      Enable verbose output                                                 [boolean]
  --prompt           [--no-prompt] Allow/Disallow UI prompting             [boolean] [default: true]
  --color            [--no-color] Allow/Disallow colorful logging          [boolean] [default: true]
  --auto             Automatically run as much as possible                [boolean] [default: false]
```

#### Options

It’s also possible to run `ghost install --help` and `ghost setup --help` to get a specific list of commands and help for the install and setup processes. Don’t worry - you got this! 💪

---

## Knowledgebase

### SSL

The CLI generates a free SSL certificate from [Let’s Encrypt](https://ghost.org/docs/ghost-cli/#lets-encrypt) using [acme.sh](https://ghost.org/docs/ghost-cli/#lets-encrypt) and a secondary NGINX config file to serve https traffic via port 443.

##### SSL configuration

After a successful ssl setup, you can find your ssl certificate in `/etc/letsencrypt`.

##### SSL for additional domains

You may wish to have multiple domains that redirect to your site, e.g. to have an extra TLD or to support www. domains. **Ghost itself can only ever have one domain pointed at it.** This is intentional for SEO purposes, however you can always redirect extra domains to your Ghost install using nginx.

If you want to redirect an HTTPS domain, you must have a certificate for it. If you want to use Ghost-CLI to generate an extra SSL setup, follow this guide:

```bash

# Determine your secondary URL
ghost config url https://my-second-domain.com

# Get Ghost-CLI to generate an SSL setup for you:
ghost setup nginx ssl

# Change your config back to your canonical domain
ghost config url https://my-canonical-domain.com

# Edit the nginx config files for your second domain to redirect to your canonical domain. In both files replace the content of the first location block with:
return 301 https://my-canonical-domain.com$request_uri;

# Get nginx to verify your config
sudo nginx -t

# Reload nginx with your new config
sudo nginx -s reload
```

##### Let’s Encrypt

[Let’s Encrypt](https://letsencrypt.org/) provides SSL certificates that are accepted by browsers free of charge! This is provided by the non-profit Internet Security Research Group (ISRG). The Ghost-CLI will offer you to generate a free SSL certificate as well as renew it every 60 days.

Ghost uses [acme.sh](https://github.com/Neilpang/acme.sh) for provisioning and renewing SSL certificates from Let’s Encrypt. You can call `acme.sh` manually if you need to perform extra tasks. The following command will output all available options:

```bash
/etc/letsencrypt/acme.sh --home "/etc/letsencrypt"
```

### Systemd

`systemd` is the default way of starting and stopping applications on Ubuntu. The advantage is that if Ghost crashes, `systemd` will restart your instance. This is the default recommended process manager.

### Permissions

Ghost-CLI will create a new system user and user-group called `ghost` during the installation process. The `ghost` user will be used to run your Ghost process in `systemd`.

This means that Ghost will run with a user that has no system-wide permissions or a shell that can be used (similar to other services such as NGINX). Sudo is required to modify files in the The `<install-directory>/content/`.

To prevent accidental permissions changes, it’s advisable to execute tasks such as image upload or theme upload using Ghost admin.

#### File Permissions

The `ghost-cli` enforces default linux permissions (via `ghost doctor` hooks) for installations.

* For normal users, default directory permissions are 775, and default file permissions are 664.
* For root users, default directory permissions are 755, and default file permissions are 644.

Running ghost install as the non-root user will result in directories created with 775 (`drwxrwxr-x`) permissions and file with 664 (`-rw-rw-r--`) permissions.

These file permissions don’t need to be changed. The only change that is executed by ghost-cli is changing ownership, file permissions stay untouched.

If permissions were changed, the following two commands will revert file and directory permissions to the ones of a non-root user.

```bash
sudo find /var/www/ghost/* -type d -exec chmod 775 {} \;
sudo find /var/www/ghost/* -type f -exec chmod 664 {} \;
```

The cli doesn’t support directory flags such as `setuid` and `setguid`). If your commands keep failing because of file permissions, ensure your directories have no flags!
