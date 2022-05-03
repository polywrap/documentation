---
id: create-js-plugin
title: Plugin an existing JS SDK
---

## **Introduction**

In this guide, we'll walk you through creating your own JavaScript-based plugin that can be added to the JavaScript Polywrap Client.

:::caution
Plugins do not retain all of Polywrap's benefits. We recommend re-writing your existing JavaScript SDKs as AssemblyScript (WebAssembly) Polywraps if possible.
:::

As always, if you need any help, message us on [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

You'll need the following installed before building your plugin:

- `nvm`
- `yarn`

You'll be using [TypeScript](https://www.typescriptlang.org/) to implement your Polywrap plugin.

:::tip
In the future, TypeScript will be one of many supported languages for implementing plugins. As more Polywrap Clients are released in various languages, implementing plugins in those languages will be supported as well.
:::

## **Getting started**

To get started, use the following command to spin up a project folder for your plugin.

```
npx @web3api/cli create plugin typescript <project-name>
```

Where `<project-name>` is replaced with a custom name of your choosing. For example `my-plugin`.

Once complete, you'll see a new folder appear, named after the custom name you've chosen. Please navigate into this new directory (using `cd` for example).

## **Installation**

Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:

- `nvm install && nvm use`
- `yarn`

## **Overview of project files**

Your project should look something like this:

```
web3api.plugin.yaml           # Plugin Manifest
src/
|   index.ts                  # Entry File
|   query/
│   ├── index.ts              # Module
│   └── schema.graphql        # Schema
|   mutation/
│   ├── index.ts              # Module
│   └── schema.graphql        # Schema
```

### **`web3api.plugin.yaml`**
The `web3api.plugin.yaml` manifest file describes the layout of a plugin, and is used to determine how many modules this plugin has.

### **`src/index.ts`**
The entry file simply exports all necessary types from the codegen directory. This file shouldn't need to be modified, unless you'd like to override default behaviour (with caution).

### **`src/query` + `src/mutation`**
Query & Mutation are 2 separate "modules" that exist within the plugin.

### **`schema.graphql`**

Each plugin module has a schema. This schema defines the module's: dependencies, methods, and custom types. In short, it's an interface describing how to use the plugin.

### **`index.ts`**
The `index.ts` file contains the module method's implementations, which implement the plugin's logic.

Within each module's index file, you can expose custom configurations for the module. These configurations can contain application specific contextual data, such as: providers, settings, signing keys, etc.

## **Building the plugin**

To build your plugin, all you need is the following command:

```bash
yarn build
```

## **Example Plugins**

For inspiration, please refer to these existing JavaScript plugins:
* [Sample Plugin](https://github.com/polywrap/monorepo/tree/prealpha/packages/templates/plugin/typescript)
* [Toolchain Plugins](https://github.com/polywrap/monorepo/tree/prealpha/packages/js/plugins)
* [Demo Plugins](https://github.com/polywrap/demos)
* [Integration Plugins](https://github.com/polywrap/integrations)
