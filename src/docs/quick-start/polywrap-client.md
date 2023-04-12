---
id: polywrap-client
title: 'Polywrap Client'
---

To use [Wraps](/concepts/wraps) in your app, all you need is the **Polywrap Client**!

:::tip
Currently we have a stable implementation of the Polywrap Client in Javascript. Python, Rust, Swift, Kotlin, and C# are coming soon.
:::

## NodeJS application boilerplate

We'll be using a simple NodeJS application boilerplate for this guide.

Using `npm init` or `yarn init` within a directory initialize an empty NodeJS project.

Within `package.json`, change the `type` of the project to `"module"`. This is not required as you can also use `require`, but we prefer using `import` statements.

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

And that's it! Use this boilerplate to try out code within this guide.

## Install the Polywrap Client

Using `NPM`:
```
npm install --save @polywrap/client-js
```

Using `yarn`:
```
yarn add @polywrap/client-js
```

## Invoking your first Wrap

:::tip
The term "Wrap" and "Wrapper" are interchangeable. "Wrapper" is the old way in which we used to call Wraps, so don't get confused if you happen to come accross this term!
:::

In order to [invoke](/concepts/invoke) a Wrap, we first need to instantiate the Polywrap Client:

At the top of your `index.js` file, import the `PolywrapClient` and instantiate it:

```javascript title="index.js"
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();
```

At this point, you can already invoke Wraps! In the simple example below, we will invoke the Logger Wrap within our `main` function:

```javascript
const result = await client.invoke({
  uri: "ens/wraps.eth:logger@1.0.0",
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

### What's going on here?

Using the Polywrap Client, we are invoking the `log` method of a Wrap found under the [WRAP URI](/concepts/uris) `ens/wraps.eth:logger@1.0.0` called the Logger Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

### The `InvokeResult` object

The `InvokeResult` object can have one of two structures:

- A successful Wrap invocation returns `{ ok: true, value: ... }` with `value` being the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc.
- A failed Wrap invocation returns `{ ok: false, error: ... }` with `error` describing the reason for invocation failure.

Although not particularly useful in our last example, our next example leverages the fact that Wrap invocations return a value.

## Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true use-case: **universal SDKs**!

One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!

Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase.

Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors.

```javascript
const wethResult = await client.invoke({
  uri: "ens/uniswap.wraps.eth:v3",
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
  uri: "ens/uniswap.wraps.eth:v3",
  method: "fetchToken",
  args: {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
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
  uri: "ens/uniswap.wraps.eth:v3",
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

## Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

In this chapter's last example, we will use two separate SDKs to figure out the IPFS hash behind the Logger Wrap's ENS domain record, then fetch that Wrap's schema (more about that in the next chapter).

First, we will use the Ens Text Record Resolver Wrap to resolve the ENS domain to an IPFS Wrap URI.

```javascript
// We first want to resolve the ENS address (uniswap.wraps.eth)
// and text record (v3) into an IPFS WRAP URI
const resolutionResult = await client.invoke({
  uri: "ens/wraps.eth:ens-text-record-uri-resolver-ext@1.0.0",
  method: "tryResolveUri",
  args: {
    authority: "ens",
    path: "uniswap.wraps.eth:v3",
  },
});

if (!resolutionResult.ok) {
  console.log(resolutionResult.error);
  return;
}

console.log(resolutionResult.value);
```

Now, if we look at the `uri` property of `resolutionResult.value`, we will see a WRAP URI

Once we have the IPFS hash, we will use the IPFS Wrap to fetch the contents of the Wrap's manifest file (`wrap.info`), and print them out.

```javascript
// Extract the IPFS CID from the resolution result's URI
const cid = resolutionResult.value.uri.replace("wrap://ipfs/", "");

// Since the CID is a directory, we need to add a path to the Wrap's manifest file
const catResult = await client.invoke({
  uri: "ens/wraps.eth:ipfs-http-client@1.0.0",
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