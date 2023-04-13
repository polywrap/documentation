---
id: polywrap-cli
title: 'Polywrap CLI'
---

Now that we have a basic understanding of the Polywrap Client, it's time to see how we can use the Polywrap CLI to create an amazing experience when working with Wraps.

## Installation

To install the Polywrap CLI, add the `polywrap` package as a dev dependency to your project:

NPM:
```
npm i --save-dev polywrap
```

Yarn:
```
yarn add --dev polywrap
```

You can also install the Polywrap CLI globally:

NPM:
```
npm i -g polywrap
```

Yarn:
```
yarn global add polywrap
```

## Overview

The Polywrap CLI allows us not only to build, test, and deploy Wraps, but also generate types for our applications which use the Polywrap Client.

This tutorial assumes that you installed `polywrap` globally, but you can always prefix the commands with `npx` or `yarn run` to run the locally installed version of your Polywrap CLI.

You can see all available commands by running:

```
polywrap help
```

## Create a Polywrap-powered application

:::tip
If you already have an application you want to add Polywrap to, it is advised that you still follow this guide and transfer/modify the `polywrap.yaml` and `src/schema.graphql` files once you're done with this tutorial.
:::

The Polywrap CLI can be used to quickly set up a template application. For this tutorial, we will create a sample Node application written in Typescript and use the Polywrap Client to invoke multiple Wraps.

To set up a Polywrap-powered application, run:

```
polywrap create app typescript my-application
```

This uses the `create` command to set up a template Node application written in Typescript called `my-application` inside the `my-application/` directory. Now we want to navigate into the application folder and install its dependencies.

```
cd my-application
yarn
```

If you take a look at `package.json`, you'll find the app depends on `@polywrap/client-js` and has a dev dependency on `polywrap`, with the addition of minimal dev dependencies that allow us to develop the app using Typescript.

Now let's take a look at some of the files Polywrap works with.

## The Polywrap Manifest (`polywrap.yaml`)

In order for the Polywrap CLI to know what it's working with, it needs a Polywrap Manifest file to obtain some basic information about your project. This is the `polywrap.yaml` file.

It has a structure similar to this:
```yaml title="polywrap.yaml"
format: 0.3.0
project:
  name: Sample
  type: app/typescript
source:
  schema: ./schema.graphql
```

The `format` property denotes the version of the Polywrap Manifest format. Under `project`, you can set the `name` field to the name of your application, while the `type` field describes the project type, thus letting the CLI know how to interact with the application code.

Under the `source` section, we have a `schema` field with a path that leads to a Schema file.

In the context of a Polywrap-powered application project, this file defines which Wraps our application imports/uses. This will come in handy later when we'll use the CLI to generate types and code which your app will use.

### The Schema File (`schema.graphql`)

Every Polywrap project has a Schema file - it defines the types found within the project, what Wraps the project imports, and, in the case of a WASM Wrap, the methods that Wrap exposes.

In the context of an application project, the Schema file defines which Wraps our application imports and is used by the CLI to generate code with which we can invoke our Wraps in a type-safe manner.

Taking a look at the file, we can see two `import` statements:

```graphql title="schema.graphql"
#import * into Logging from "ens/wraps.eth:logging@1.0.0"
#import * into Ethereum from "ens/wraps.eth:ethereum@1.0.0"
```

An `import` statement defines which Wraps we are importing, therefore using within our application. Imports are namespaced - the Wrap found under the WRAP URI `ens/wraps.eth:logging@1.0.0` is going to be found within the `Logging_` namespace.

### Generating types (`codegen`)

:::caution
While we used Javascript in previous samples, Polywrap is native to Typescript, and all future examples will be written in Typescript.
:::

Now that we know how we can "import" Wraps into our application, we can use the `codegen` command inside the Polywrap CLI to generate types that represent our Wraps which we can use within our application.

To generate types, all we need to do is run the `codegen` command:

```
polywrap codegen
```

This will generate types inside the `src/wrap` directory which you will use within your application.

## IntelliSense your way to Victory!

Now that we have our types generated, we can take a look at our sample application's `src/index.ts` file.

Let's first take a look at some of the imports:

```typescript
import {
  Logging_Module,
  Ethereum_Module,
} from "./wrap";
```

Here we can see that we've imported Module types that represent our Wraps, according to their specified namespace. Using these types, we can invoke our Wraps in a type-safe manner, without having to repeatedly specify the Wrap URI:

```typescript
const client = new PolywrapClient();

await Logging_Module.info({
  message: "Hello there",
}, client);
```

This allows us to write all of our code in a type-safe manner, and allows for IDEs like VS Code to give us autocompletion suggestions via IntelliSense. Now we can explore our Wraps by simply importing them and trying them out!

## A real-world exmaple, revisited

Let's revisit our Uniswap V3 Wrap example from the Quick Start tutorial. If we wanted to invoke the Uniswap V3 Wrap without codegen, we had to write the following code:

```javascript
const usdcResult = await client.invoke({
  uri: "ens/uniswap.wraps.eth:v3",
  method: "fetchToken",
  args: {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: "MAINNET",
  },
});
```

Instead, we can now add an `import` statement for the Uniswap V3 Wrap to our `schema.graphql` file:

```graphql title="schema.graphql"
#import * into UniswapV3 from "ens/uniswap.wraps.eth:v3"
```

Running `codegen` now will add all types defined inside the Uniswap V3 Wrap to our `wrap` folder:

```
polywrap codegen
```

We can now import the `UniswapV3_Module` and supporting types into our `index.ts` file:

```typescript
import {
  UniswapV3_Module,
  UniswapV3_ChainIdEnum,
} from "./wrap";
```

We can now invoke the Uniswap V3 Wrap by writing:

```typescript
const usdcResult = await UniswapV3_Module.fetchToken(
  {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: UniswapV3_ChainIdEnum.MAINNET,
  },
  client
);
```

Already inside the invocation, we can see that the `chainId` is an `enum` type, with all supported networks already listed. Polywrap also takes care of required and optional arguments, and if you play around, you will find that we omitted the `name` and `symbol` optional invocation arguments.

If `usdcResult.ok` is true, its `value` will now have a type of `UniswapV3_Token`:

```typescript
if(!usdcResult.ok) {
  console.error(usdcResult.error);
  return;
}

// token is now of type UniswapV3_Token found in "./wrap"
const token = usdcResult.value;

console.log(token);
```

As you can see, Polywrap allows us to invoke any SDK or other piece of executable logic packaged as a Wrap in a type-safe manner, accross a multitude of platforms and languages!

Of course, by using the Polywrap CLI you can build your own Wraps which you will be able to run anywhere where there's a Polywrap Client.

Make sure to check out our list of supported (and coming) clients, and proceed to the next section to see what Wraps are readily available!