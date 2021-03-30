---
id: create-js-plugin
title: Create a JavaScript Plugin
---

- JS Plugin
- - Description: ...
- - Steps:
- - - Setup (w3 create)
- - - Define schema
- - - Import & List Web3API imports
- - - Implement schema's functions
- - - - Wrap an existing SDK
- - - Build Plugin Package
- - - Test With Web3ApiClient

In this guide, we'll walk you through a JavaScript plugin that you can build into your Web3API.

> Note: Plugins do not retain all of Web3API's benefits. We recommend re-writing your existing SDKs as WebAssembly-based Web3APIs.

## **Getting started**

To get started, use the following command to spin up a project folder for your plugin.

```
npx w3 create plugin typescript my-plugin
```

Here are the files in the project folder that we'll focus on:

```
index.ts                      # Implementation of the plugin
manifest.ts                   # API's schema, dependencies, abstract APIs
resolvers.ts                  # Resolvers for GraphQL schemas
schema.graphql                # GraphQL schema for queries / mutations
```

Let's take a look at each of these files!

### **`schema.graphql`**

This file contains the set of types which completely describe the set of possible data you can query on a GraphQL service. Then, when queries come in, they are validated and executed against that schema.

In the file, we have `type Query` and `type Mutation`.

```js
type Query {
  getData(id: String!): String!
}

type Mutation {
  setData(id: String!, data: Bytes!): SampleResult!
}
```

### **`resolvers.ts`**

The `resolvers.ts` file is the implementation of the GraphQL schemas declared in `schema.graphql`.

```js
import { SamplePlugin } from '.';
import { PluginModule } from '@web3api/core-js';

export const query = (plugin: SamplePlugin): PluginModule => ({
  getData: async (input: { query: string }) => {
    return await plugin.getData(input.query);
  },
});

export const mutation = (plugin: SamplePlugin): PluginModule => ({
  setData: async (input: { id: string, data: Uint8Array }) => {
    return await plugin.setData(input.id, input.data);
  },
});
```

In this file, we've created two functions that take in plugins as parameters (explained in the next section).

### **`index.ts`**

In this file, we have a `SamplePlugin` class that contains the business logic for your JavaScript Plugin.

### **`manifest.ts`**

This file contains the `PluginManifest`. Here, you would define the API's schema, the API dependencies imported by this plugin(`imported`), and all abstract APIs implemented plugin (`implemented`).

> **Note**: The abstract APIs plugins haven't been fully developed yet. We plan this feature to work as Web3API interfaces (schemas with no implementation). Please stay tuned!
