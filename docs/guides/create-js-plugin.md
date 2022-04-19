---
id: create-js-plugin
title: Plugin an existing JS SDK
---

## **Introduction**

This guide will walk you through creating your JavaScript-based plugin that can add to the JavaScript Polywrap Client.

:::caution
Plugins do not retain all of Polywrap's benefits. We recommend re-writing your existing JavaScript SDKs as AssemblyScript (WebAssembly) Polywraps.
:::

If you need any help, message us on [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

You'll need the following installed before building your plugin:

- `nvm`
- `yarn`

You'll be using [TypeScript](https://www.typescriptlang.org/) to implement your Polywrap plugin.

:::tip
TypeScript will be one of many supported languages for implementing plugins in the future. As more Polywrap Clients are released in various languages, implementing plugins in those languages will also be supported.
:::

## **Getting started**

Use the following command to spin up a project folder for your plugin to get started.

```
npx @web3api/cli create plugin typescript <project-name>
```

Where `<project-name>` is replaced with a custom name. For example, `my plugin.`

Once complete, you'll see a new folder appear, named after your chosen custom name. Please navigate to this new directory (using `cd,` for example).

## **Installation**

Let's ensure all of you installed the project's dependencies. From inside your project's directory, run:

- `nvm install && nvm use`
- `yarn`

## **Overview of project files**

Your project should look something like this:

```
schema.graphql                # Schema
src/
│   ├── index.ts              # Plugin Class
│   |── resolvers.ts          # Schema Resolvers
|   └── manifest.ts           # Manifest
```

### **`schema.graphql`**

This file defines the schema of your Polywrap plugin. This schema is the interface outside wrappers & users will use to query your plugin's functionality.

### **`src/resolvers.ts`**

The `src/resolvers.ts` file implements all query methods declared on the `Mutation` and `Query` query types in the `schema.graphql`.

The resolvers also receive an instance of your custom Plugin class, enabling them to access its methods and contextual information. For example, in the case of the Ethereum plugin, it gives access to the Web3 provider object.

### **`src/index.ts`**

The `src/index.ts` file contains the Plugin class. Use this class to store all contextual configuration data needed for your plugin (providers, settings, etc.). Additionally, you can add helper methods for the resolvers to use.

### **`src/manifest.ts`**

This file takes the place of the `web3api.yaml` manifest file. It contains the plugin's schema, all Polywraps interfaces the plugin implements, and external Polywraps are dependent.


## **Building the plugin**

To build your plugin, all you need is the following command:

```bash
yarn build
```

## **Example Plugins**

For inspiration, please refer to these existing JavaScript plugins:
* [Sample Plugin](https://github.com/polywrap/demos/tree/main/sample-plugin)
* [DateTime Plugin](https://github.com/polywrap/demos/tree/main/datetime-plugin)
* [Toolchain Plugins](https://github.com/Web3-API/monorepo/tree/prealpha/packages/js/plugins)
