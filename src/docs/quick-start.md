---
id: quick-start
title: 'Quick start'
---

## The Polywrap Client

To use [Wraps](/concepts/wraps) in your app, all you need is the **Polywrap Client**!

:::tip
Currently we have a stable implementation of the Polywrap Client in Javascript. Python, Rust, Swift, Kotlin, and C# are coming soon.
:::

### NodeJS application boilerplate

We'll be using a simple NodeJS application boilerplate for this guide.

Using `npm init` or `yarn init` within a directory initialize an empty NodeJS project.

Within `package.json`, change the `type` of the project to `"module"`. This is not required as you can also use `require`.

```json title="package.json"
{
  "name": "my-app-name",
  //...
  "type": "module",
  //...
}
```

Add an `index.js` file with the following code:

```javascript title="index.js"
async function main() {
  // your code goes here...
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

```

### Install the Polywrap Client

Using `NPM`:
```
npm install --save @polywrap/client-js
```

Using `yarn`:
```
yarn add @polywrap/client-js
```

### Invoking your first Wrap

In order to invoke a Wrap, we first need to instantiate the Polywrap Client:

At the top of your `index.js` file, import the `PolywrapClient` and instantiate it:

```javascript title="index.js"
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();
```

At this point, you can already invoke Wraps! In the simple example below, we will invoke the Logger Wrap within our `main` function:

```javascript
const result = await client.invoke({
  uri: "wrapscan.io/polywrap/logger@1.0",
  method: "log",
  args: {
    message: "Hello Polywrap!",
  },
});

console.log(result);
```

Running the application using `node index.js`, you should now see two lines appear in your console:

```
Hello Polywrap!
{ ok: true, value: true }
```

The first line is printed by the Logger Wrap, while the second line shows the structure of the `InvokeResult` object.

#### What's going on here?

Using the Polywrap Client, we are invoking the `log` method of a Wrap found under the [WRAP URI](/concepts/uris) `wrapscan.io/polywrap/logger@1.0` called the Logger Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

#### The `InvokeResult` object

The `InvokeResult` object can have one of two structures:

- A successful Wrap invocation returns `{ ok: true, value: ... }` with `value` being the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc.
- A failed Wrap invocation returns `{ ok: false, error: ... }` with `error` describing the reason for invocation failure.

Although not particularly useful in our last example, our next example leverages the fact that Wrap invocations return a value.

### Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true use-case: **universal SDKs**!

One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!

Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase.

Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors.

```javascript
const wethResult = await client.invoke({
  uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
  method: "fetchToken",
  args: {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: "MAINNET",
  },
});

// Log the invocation error and stop execution if the invocation fails
if(!wethResult.ok) {
  console.log(wethResult.error)
  return;
}

console.log("WETH:", wethResult.value);

const usdcResult = await client.invoke({
  uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
  method: "fetchToken",
  args: {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chainId: "MAINNET",
  },
});

// Log the invocation error and stop execution if the invocation fails
if(!usdcResult.ok) {
  console.log(usdcResult.error)
  return;
}

console.log("USDC:", usdcResult.value);

const poolAddressResult = await client.invoke({
  uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
  method: "getPoolAddress",
  args: {
    tokenA: wethResult.value,
    tokenB: usdcResult.value,
    fee: "MEDIUM"
  },
});

// Log the invocation error and stop execution if the invocation fails
if(!poolAddressResult.ok) {
  console.log(poolAddressResult.error);
  return;
}

console.log("Pool address:", poolAddressResult.value);
```

You can see more examples on how to use the Uniswap V3 Wrap in its [docs page](https://uniswap.docs.wrappers.io/).

### Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

In this chapter's last example, we will use two separate SDKs to figure out the IPFS hash behind the Logger Wrap's ENS domain record, then fetch that Wrap's schema (more about that in the next chapter).

First, we will use the Ens Text Record Resolver Wrap to resolve the ENS domain to an IPFS Wrap URI.

```javascript
// We first want to resolve the ENS address (uniswap.wraps.eth)
// and text record (v3) into an IPFS WRAP URI
const resolutionResult = await client.invoke({
  uri: "wrapscan.io/polywrap/wrapscan-uri-resolver@1.0",
  method: "tryResolveUri",
  args: {
    authority: "wrapscan.io",
    path: "polywrap/uniswap-v3@1.0",
  },
});

if (!resolutionResult.ok) {
  console.log(resolutionResult.error);
  return;
}

console.log(resolutionResult.value);
```

Now, if we look at the `uri` property of `resolutionResult.value`, we will see a WRAP URI. 
We can also see a `manifest` property which is set to `null`, which you can safely ignore for now.
This is because our ENS Text Record Resolver Wrap only resolves from an ENS Text Record to another URI.

Once we have the IPFS hash, we will use the IPFS Wrap to fetch the contents of the Wrap's manifest file (`wrap.info`), and print them out.

```javascript
// Extract the IPFS CID from the resolution result's URI
const cid = resolutionResult.value.uri.replace("wrap://ipfs/", "");

// Since the CID is a directory, we need to add a path to the Wrap's manifest file
const catResult = await client.invoke({
  uri: "wrapscan.io/polywrap/ipfs-http-client@1.0",
  method: "cat",
  args: {
    cid: cid + "/wrap.info",
    ipfsProvider: "https://ipfs.wrappers.io"
  },
});

console.log(catResult);

if (!catResult.ok) {
  console.log(catResult.error);
  return;
}

// Turn the returned buffer into a string and log it
const schema = new TextDecoder().decode(catResult.value);

console.log(schema);
```

In this example, we printed out a Wrap's Manifest file. This is a file that contains the definiton of the Wrap. Amongst other things it contains what types and methods are present within a Wrap, called the Wrap's Schema, and we'll talk more about it in the next section.

## The Polywrap CLI

Now that we have a basic understanding of the Polywrap Client, it's time to see how we can use the Polywrap CLI to create an amazing experience when working with Wraps.

### Installation

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

### Overview

The Polywrap CLI allows us not only to build, test, and deploy Wraps, but also generate types for our applications which use the Polywrap Client.

This tutorial assumes that you installed `polywrap` globally, but you can always prefix the commands with `npx` or `yarn run` to run the locally installed version of your Polywrap CLI.

You can see all available commands by running:

```
polywrap help
```

### Create a Polywrap-powered application

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

### The Polywrap Manifest (`polywrap.yaml`)

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

#### The Schema File (`schema.graphql`)

Every Polywrap project has a Schema file - it defines the types found within the project, what Wraps the project imports, and, in the case of a WASM Wrap, the methods that Wrap exposes.

In the context of an application project, the Schema file defines which Wraps our application imports and is used by the CLI to generate code with which we can invoke our Wraps in a type-safe manner.

Taking a look at the file, we can see two `import` statements:

```graphql title="schema.graphql"
#import * into Logging from "wrapscan.io/polywrap/logging@1.0"
#import * into Ethereum from "wrapscan.io/polywrap/ethereum@1.0"
```

An `import` statement defines which Wraps we are importing, therefore using within our application. Imports are namespaced - the Wrap found under the WRAP URI `wrapscan.io/polywrap/logging@1.0` is going to be found within the `Logging_` namespace.

#### Generating types (`codegen`)

:::caution
While we used Javascript in previous samples, Polywrap is native to Typescript, and all future examples will be written in Typescript.
:::

Now that we know how we can "import" Wraps into our application, we can use the `codegen` command inside the Polywrap CLI to generate types that represent our Wraps which we can use within our application.

To generate types, all we need to do is run the `codegen` command:

```
polywrap codegen
```

This will generate types inside the `src/wrap` directory which you will use within your application.

### Introduce type-safety into your code

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

### A real-world example, revisited

Let's revisit our Uniswap V3 Wrap example from the Quick Start tutorial. If we wanted to invoke the Uniswap V3 Wrap without codegen, we had to write the following code:

```javascript
const usdcResult = await client.invoke({
  uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
  method: "fetchToken",
  args: {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: "MAINNET",
  },
});
```

Instead, we can now add an `import` statement for the Uniswap V3 Wrap to our `schema.graphql` file:

```graphql title="schema.graphql"
#import * into UniswapV3 from "wrapscan.io/polywrap/uniswap-v3@1.0"
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