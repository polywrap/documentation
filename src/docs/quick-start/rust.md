---
id: rust
title: 'Rust'
---

## The Polywrap Client

To use [Wraps](/concepts/wraps) in your app, all you need is the [Polywrap Client](/clients)!

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
  uri: "wrapscan.io/polywrap/sha3@1.0",
  method: "sha3_256",
  args: {
    message: "Hello Polywrap!",
  },
});

console.log(result);
```

Running the application using `node index.js`, you should now see the following appear in your console:

```
{
  ok: true,
  value: 'ba5a5d5fb7674f5975f0ecd0cd9a2f4bcadc9c04f5ac2ab3a887d8f10355fc38'
}
```

Here we can see the structure of the `InvokeResult` object. It's `ok` field denotes whether the Wrap's invocation was successful, and the `value` is the return value of the invocation.

#### What's going on here?

Using the Polywrap Client, we are invoking the `sha3_256` method of a Wrap found under the [WRAP URI](/concepts/uris) `wrapscan.io/polywrap/sha3@1.0` called the SHA3 Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

#### The `InvokeResult` object

The `InvokeResult` object can have one of two structures:

- A successful Wrap invocation returns `{ ok: true, value: ... }` with `value` being the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc.
- A failed Wrap invocation returns `{ ok: false, error: ... }` with `error` describing the reason for invocation failure.

Although not particularly useful in our last example, our next example leverages the fact that Wrap invocations return a value.

### Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true power: **universal SDKs**!

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

Visit [Wrapscan](https://www.wrapscan.io/) and the [awesome-polywrap](https://github.com/polywrap/awesome-polywrap) repository to find a curated list of Wraps we and our community have developed.