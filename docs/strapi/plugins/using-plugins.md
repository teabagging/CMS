---
title: Using Strapi plugins
description: todo

---

# Using Strapi built-in plugins

:::info
This section is about using Strapi built-in plugins from a developer's perspective. Not what you're looking for? Read the [plugins introduction](/dev-docs/plugins) and find your use case and recommended section to read from there.
:::

## Built-in plugins

Strapi comes with the following built-in plugins that are officially maintained and documented by the Strapi core team:





## Automatic plugins discovery

Strapi automatically loads plugins installed with npm. Under the hood, Strapi scans every `package.json` file of the project dependencies, and looks for the following declaration:

```json
"strapi": {
  "kind": "plugin"
}
```

Installed plugins can also be manually enabled or disabled.

## Manual enabling/disabling of plugins

To disable a plugin without uninstalling it, switch its `enabled` key to `false` in the [`/config/plugins.js` file](/dev-docs/configurations/plugins).
