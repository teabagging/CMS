# install Ghost on Ubuntu

A full guide for installing, configuring and running Ghost on your Ubuntu **20.04** or **22.04** server, for use in production

## Overview

This the official guide for self-hosting Ghost using our recommended stack of Ubuntu 20.04 or 22.04. If you’re comfortable installing, maintaining and updating your own software, this is the place for you. By the end of this guide you’ll have a fully configured Ghost install running in production using MySQL.

This install is **not** suitable for [local use](https://ghost.org/docs/install/local/) or [contributing](https://ghost.org/docs/install/source/) to core.

## Prerequisites

The officially recommended production installation requires the following stack:

* Ubuntu 20.04 or Ubuntu 22.04
* NGINX (minimum of 1.9.5 for SSL)
* A [supported version](https://ghost.org/docs/faq/node-versions/) of [Node.js](https://nodejs.org/)
* MySQL 8
* Systemd
* A server with at least 1GB memory
* A registered domain name

Before getting started you should set up a working DNS **A-Record** from you domain, pointing to the server’s IP address. This must be done in advance so that SSL can be configured during setup.

---

## Server Setup

This part of the guide will ensure all prerequisites are met for installing the Ghost-CLI.

### Create a new user

Open up your terminal and login to your new server as the root user:

```bash
# Login via SSH
ssh root@your_server_ip

# Create a new user and follow prompts
adduser <user>
```

> Note: Using the user name `ghost` causes conflicts with the Ghost-CLI, so it’s important to use an alternative name.

```bash
# Add user to superuser group to unlock admin privileges
usermod -aG sudo <user>

# Then log in as the new user
su - <user>
```

### Update packages

Ensure package lists and installed packages are up to date.

```bash
# Update package lists
sudo apt-get update

# Update installed packages
sudo apt-get upgrade
```

Follow any prompts to enter the password you just created in the previous step.

### Install NGINX

Ghost uses an NGINX server and the SSL configuration requires NGINX 1.9.5 or higher.

```bash
# Install NGINX
sudo apt-get install nginx
```

If `ufw` was activated, the firewall allows HTTP and HTTPS connections. Open Firewall:

```bash
sudo ufw allow 'Nginx Full'
```

### Install MySQL

Next, you’ll need to install MySQL to be used as the production database.

```bash
# Install MySQL
sudo apt-get install mysql-server
```

On newer versions of Ubuntu, the root user created when you install MySQL will by default be configured to use socket-based authentication, meaning that only the root Unix user will be able to authenticate. Ghost does not support this kind of authentication, so you must change the root MySQL user to have a password. Run these commands to make the root user have a password:

```bash
# Enter mysql
sudo mysql
# Update permissions
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '<your-new-root-password>';
# Reread permissions
FLUSH PRIVILEGES;
# exit mysql
exit
```

### Install Node.js

You will need to have a [supported version](https://ghost.org/docs/faq/node-versions/) of Node installed system-wide in the manner described below. If you have a different setup, you may encounter problems.

```bash
# Download and import the Nodesource GPG key
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

# Create deb repository
NODE_MAJOR=18 # Use a supported version
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

# Run update and install
sudo apt-get update
sudo apt-get install nodejs -y
```

---

## Install Ghost-CLI

[Ghost-CLI](https://ghost.org/docs/ghost-cli/) is a commandline tool to help you get Ghost installed and configured for use, quickly and easily. The npm module can be installed with `npm` or `yarn`.

```bash
sudo npm install ghost-cli@latest -g
```

Once installed, you can always run `ghost help` to see a list of available commands.

---

## Install Ghost

Once your server is correctly setup and `ghost-cli` is installed, you can install Ghost itself. The following steps are the recommended setup. If you need more fine-grained control, the CLI has [flags and options](https://ghost.org/docs/ghost-cli/) that allow you to break down and customise the install steps.

### Create a directory

Ghost must be installed in its own directory, with a proper owner and permissions.

```bash
# Create directory: Change `sitename` to whatever you like
sudo mkdir -p /var/www/sitename

# Set directory owner: Replace <user> with the name of your user
sudo chown <user>:<user> /var/www/sitename

# Set the correct permissions
sudo chmod 775 /var/www/sitename

# Then navigate into it
cd /var/www/sitename
```

### Run the install process

Now we install Ghost with one final command.

```bash
ghost install
```

### Install questions

During install, the CLI will ask a number of questions to configure your site.

#### Blog URL

Enter the exact URL your publication will be available at and include the protocol for HTTP or HTTPS. For example, `https://example.com`. If you use HTTPS, Ghost-CLI will offer to set up SSL for you. Using IP addresses will cause errors.

#### MySQL hostname

This determines where your MySQL database can be accessed from. When MySQL is installed on the same server, use `localhost` (press Enter to use the default value). If MySQL is installed on another server, enter the name manually.

#### MySQL username / password

If you already have an existing MySQL database, enter the the username. Otherwise, enter `root`. Then supply the password for your user.

#### Ghost database name

Enter the name of your database. It will be automatically set up for you, unless you’re using a **non**-root MySQL user/pass. In that case the database must already exist and have the correct permissions.

#### Set up a ghost MySQL user? (Recommended)

If you provided your root MySQL user, Ghost-CLI can create a custom MySQL user that can only access/edit your new Ghost database and nothing else.

#### Set up NGINX? (Recommended)

Sets NGINX up automatically enabling your site to be viewed by the outside world. Setting up NGINX manually is possible, but why would you choose a hard life?

#### Set up SSL? (Recommended)

If you used an `https` Blog URL and have already pointed your domain to the right place, Ghost-CLI can automatically set up SSL for you using [Let’s Encrypt](https://letsencrypt.org/). Alternatively you do this later by running `ghost setup ssl` at any time.

SSL certification setup requires an email address so that you can be kept informed if there is any issue with your certificate, including during renewal.

#### Set up systemd? (Recommended)

`systemd` is the recommended process manager tool to keep Ghost running smoothly. We recommend choosing `yes` but it’s possible to set up your own process management.

#### Start Ghost?

Choosing `yes` runs Ghost, and makes your site work.

---

## Future maintenance

Once Ghost is properly set up it’s important to keep it properly maintained and up to date. Fortunately, this is relatively easy to do using Ghost-CLI. Run `ghost help` for a list of available commands, or explore the full [Ghost-CLI documentation](https://ghost.org/docs/ghost-cli/).

---

## What to do if the install fails

If an install goes horribly wrong, use `ghost uninstall` to remove it and try again. This is preferable to deleting the folder to ensure no artifacts are left behind.

If an install is interrupted or the connection lost, use `ghost setup` to restart the configuration process.

For troubleshooting and errors, use the site search and [FAQ section](https://ghost.org/docs/faq/) to find information about common error messages.

---

## What’s next?

You’re all set! Now you can start customising your site. Check out our range of [tutorials](https://ghost.org/tutorials/) or the Ghost [API documentation](https://ghost.org/docs/content-api/) depending on which page of this choose-your-own-adventure experience you’d like to subject yourself to next.
