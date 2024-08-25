# Install from Source

This guide is for installing a local development copy of Ghost from source, primarily for the purpose of modifying Ghost core

## Prerequisites

Before getting started, you’ll need these global packages to be installed:

* **A [supported version](https://ghost.org/docs/faq/node-versions/) of [Node.js](https://nodejs.org/)** - Ideally installed via [nvm](https://github.com/creationix/nvm#install-script)
* **[Yarn](https://yarnpkg.com/en/docs/install#alternatives-tab)** - to manage all the packages

#### Then install these global packages

```bash
yarn global add knex-migrator ember-cli
```

---

## Create GitHub fork

First you’ll need to make a fork of the [Ghost](https://github.com/tryghost/ghost) repository. Click on the fork button right at the top, wait for a copy to be created over on your personal GitHub account, and you should be all set!

![Fork](https://ghost.org/images/docs/setup/fork.gif)---

## Configure repository

The main Ghost repository is a monorepo containing the full Ghost code, including the Admin client and default theme which will also be automatically set up

```bash
# First clone Ghost with submodules and make it your working dir
git clone --recurse-submodules git@github.com:TryGhost/Ghost && cd Ghost
```

#### Properly rename your references

```bash
# Rename origin to upstream
git remote rename origin upstream

# Add your fork as an origin, editing in <YourUsername>!
git remote add origin git@github.com:<YourUsername>/Ghost.git
```

---

## Run setup & installation

```bash
# Only ever run this once
yarn setup
```

The `setup` task will install dependencies, initialise the database, set up git hooks, and initialise submodules.

---

## Start Ghost

```bash
# Run Ghost in development mode
yarn dev
```

==**Ghost is now running at** http://localhost:2368/ - **Ghost Admin** lives at http://localhost:2368/ghost/==

---

## Stay up to date

When your working copies become out of date due to upstream changes, this is the command that brings you back up to the latest `main`

```bash
# Update EVERYTHING
yarn main
```

That’s it, you’re done with the install! The rest of this guide is about working with your new development copy of Ghost.

---

## Dev Commands

When running locally there are a number development utility commands which come in handy for running tests, building packages, and other helpful tasks.

### Running Ghost

The most commonly used commands for running the core codebase locally

```bash
# Default way of running Ghost in development mode
# Builds admin files on start & then watches for changes
yarn dev

# Ignores admin changes
yarn dev:ghost

# Ignores server changes
yarn dev:admin

# Run Ghost, Admin and the Portal dev server
yarn dev --portal
```

### Database tools

Ghost uses its own tool called `knex-migrator` to manage database migrations.

```bash
# Wipe the database
yarn knex-migrator reset

# Populate a fresh database
yarn knex-migrator init
```

### Building Ghost from source

From the top-level directory of the monorepo, run

```
yarn archive
```

This will produce a tarball archive called `ghost-<version>.tgz`, which can be installed with Ghost-CLI’s [`--archive` flag](https://ghost.org/docs/ghost-cli/#ghost-install).

### Server Tests

Tests run with SQLite. To use MySQL, prepend commands with `NODE_ENV=testing-mysql`

```bash
# Run unit tests
yarn test:unit

# Run acceptance tests
yarn test:acceptance

# Run regression tests
yarn test:regression

# Run a single test
yarn test:single path/to/test.js

# Run a folder of tests
yarn test:single test/unit/helpers

# Run all tests
yarn test:all

# Make sure your code doesn't suck
yarn lint
```

### Client Tests

Client tests should always be run inside the `ghost/admin` directory. Any time you have `yarn dev` running the client tests will be available at `http://localhost:4200/tests`

```bash
# Run all tests in Chrome + Firefox
ember test

# Run all tests, leave results open, and watch for changes
ember test --server

# Run tests where `describe()` or `it()` matches supplied argument
# Note: Case sensitive
ember test -f 'gh-my-component'

# Run all tests in Chrome only
ember test --launch=chrome

# Most useful test comment for continuous local development
# Targets specific test of area being worked on
# Only using Chrome to keep resource usage minimal
ember test -s -f 'Acceptance: Settings - General' --launch=chrome
```

---

## Troubleshooting

Some common Ghost development problems and their solutions

**ERROR: (EADDRINUSE) Cannot start Ghost**
This error means that Ghost is already running, and you need to stop it.

**ERROR: ENOENT**
This error means that the mentioned file doesn’t exist.

**ERROR Error: Cannot find module**
Install did not complete. Run `yarn fix`.

**Error: Cannot find module ‘./build/default/DTraceProviderBindings’**
You switched node versions. Run `yarn fix`.

**ENOENT: no such file or directory, stat ‘path/to/favicon.ico’ at Error (native)**
Your admin client has not been built. Run `yarn dev`.

**TypeError: Cannot read property ’tagName’ of undefined**
You can’t run `ember test` at the same time as `yarn dev`. Wait for tests to finish before continuing and wait for the “Build successful” message before loading admin.

**yarn.lock conflicts**
When rebasing a feature branch it’s possible you’ll get conflicts on `yarn.lock` because there were dependency changes in both `main` and `<feature-branch>`.

1. Note what dependencies have changed in `package.json`
   (Eg. `dev-1` was added and dev dep `dev-2` was removed)
2. `git reset HEAD package.json yarn.lock` - unstages the files
3. `git checkout -- package.json yarn.lock` - removes local changes
4. `yarn add dev-1 -D` - re-adds the dependency and updates yarn.lock
5. `yarn remove dev-2` - removes the dependency and updates yarn.lock
6. `git add package.json yarn.lock` - re-stage the changes
7. `git rebase --continue` - continue with the rebase

It’s always more reliable to let `yarn` auto-generate the lockfile rather than trying to manually merge potentially incompatible changes.
