---
id: create-js-plugin
title: Plugin an Existing JS SDK
---

## **Introduction**

In this guide, we'll walk you through creating your own JavaScript based plugin that can be added to the JavaScript Web3API Client.

:::caution
Plugins do not retain all of Web3API's benefits. We recommend re-writing your existing JavaScript SDKs as AssemblyScript (WebAssembly) Web3APIs if possible. See [here](/guides/create-as-web3api) for more details.
:::

As always, if you need any help, message us on [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

You'll need the following installed before building your plugin:

- `nvm`
- `yarn`

You'll be using [TypeScript](https://www.typescriptlang.org/) to implement your Web3API plugin.

:::tip
In the future, TypeScript will be one of many supported languages for implementing plugins. As more Web3API Clients are released in various languages, implementing plugins in those languages will be supported as well.
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
schema.graphql                # Schema
src/
│   ├── index.ts              # Plugin Class
│   |── resolvers.ts          # Schema Resolvers
|   └── manifest.ts           # Manifest
```

### **`schema.graphql`**

This file defines the schema of your Web3API plugin. This is the interface outside Web3APIs & users will use to query your plugin's functionality.

### **`src/resolvers.ts`**

The `src/resolvers.ts` file implements all query methods declared on the `Mutation` and `Query` query types in the `schema.graphql`.

The resolvers also receive an instance of your custom Plugin class, enabling them to access its methods and contextual information. For example, in the case of the Ethereum plugin, it gives access to the Web3 provider object.

### **`src/index.ts`**

The `src/index.ts` file contains the Plugin class, which will be created each time the plugin is instantiated. Use this class to store all contextual configuration data needed for your plugin (providers, settings, etc). Additionally you can add helper methods for the resolvers to use.

### **`src/manifest.ts`**

This file takes the place of the `web3api.yaml` manifest file discussed in the ["Create a Web3API" guide](/guides/create-as-web3api). It contains the plugin's schema, all Web3APIs interfaces the plugin implements, and external Web3APIs the plugin is dependent on.

:::caution
Web3API interfaces (schemas with no implementation) haven't been fully developed yet. Please stay tuned!
:::

## **Building the plugin**

To build your plugin, all you need is the following command:

```bash
yarn build
```

## **Example Plugins**

For inspiration, please refer to [these existing JavaScript plugins](https://github.com/Web3-API/monorepo/tree/prealpha/packages/js/plugins).
