---
id: create-js-plugin
title: Plugin an existing JS SDK
---

## **Introduction**

In this guide, we'll walk you through creating your own JavaScript-based plugin wrapper that can be added to the JavaScript Polywrap Client.

:::caution
Plugins do not retain all of Polywrap's benefits. We recommend re-writing your existing JavaScript SDKs as Wasm wrappers if possible.
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
npx polywrap create plugin typescript <project-name>
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
polywrap.yaml           # Plugin Manifest
src/
|   index.ts            # Entry File
│   schema.graphql      # Schema
```

### **`polywrap.yaml`**
The [Plugin Project Manifest](./plugin-manifest) describes the layout of a plugin.

### **`schema.graphql`**
Each wrapper project has a [Wrapper Schema](../wrapper-schema). 
The schema defines the wrapper's dependencies, methods, and custom types. 
In short, it's an interface describing how to use the wrapper.

### **`src/index.ts`**
The `index.ts` file exports the wrapper's method's implementations, which contain the plugin's logic.
Learn more about the plugin's code architecture by reading [Plugin Architecture](./plugin-architecture)

## **Building the plugin**

To build your plugin, all you need is the following command:

```bash
yarn build # alias for "npx polywrap build"
```

## **Example Plugins**

See [Understanding Plugins](../understanding-plugins.md) for some examples of Plugins used within the default configuration of the Polywrap Client.
