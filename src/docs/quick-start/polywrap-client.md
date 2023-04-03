---
id: polywrap-client
title: 'Polywrap Client'
---

To use [Wraps](/concepts/wraps) in your app, all you need is the **Polywrap Client**!

:::tip
Currently we have a stable implementation of the Polywrap Client in Javascript. Python, Rust, Swift, C# are coming soon.
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
  uri: "ens/logger.polytest.eth",
  method: "info",
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

Using the Polywrap Client, we are invoking the `info` method of a Wrap found under the [WRAP URI](/concepts/uris) `ens/logger.polytest.eth` called the Logger Wrap.

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

Now we'll invoke the Uniswap V2 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the DAI token, and check the total market supply. We are also checking each result for errors.

```javascript
const daiResult = await client.invoke({
  uri: "ens/goerli/v2.uniswap.wrappers.eth",
  method: "fetchTokenData",
  args: {
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chainId: "MAINNET",
  },
});

// Log the invocation error and stop execution if the invocation fails
if(!daiResult.ok) {
  console.log(daiResult.error)
  return;
}

console.log(daiResult.value);

const totalSupplyResult = await client.invoke({
  uri: "ens/goerli/v2.uniswap.wrappers.eth",
  method: "fetchTotalSupply",
  args: {
    token: daiResult.value,
  },
});

if(!totalSupplyResult.ok) {
  console.log(totalSupplyResult.error);
  return;
}

console.log(totalSupplyResult.value);
```

## Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

In this chapter's last example, we will use two separate SDKs to figure out the IPFS hash behind the Logger Wrap's ENS domain record, then fetch that Wrap's schema (more about that in the next chapter).

First, we will use the Ens Resolver Wrap to resolve the ENS domain to an IPFS Wrap URI.

```javascript
const client = new PolywrapClient();

// We first want to resolve the ENS address into an IPFS WRAP URI
const resolutionResult = await client.invoke({
  uri: "ens/ens-resolver.polywrap.eth",
  method: "tryResolveUri",
  args: {
    authority: "ens",
    path: "ens/logger.polytest.eth",
  },
});

if (!resolutionResult.ok) {
  console.log(resolutionResult.error);
  return;
}

console.log(resolutionResult.value);
```

Now, if we look at the `uri` property of `resolutionResult.value`, we will see a WRAP URI

Once we have the IPFS hash, we will use the IPFS Wrap to fetch the contents of the Wrap's schema file, and print them out.

```javascript
// Extract the IPFS CID from the resolution result's URI
const cid = resolutionResult.value.uri.replace("ipfs/", "");

// Since the CID is a directory, we need to add a path to the Wrap's schema file
const catResult = await client.invoke({
  uri: "ens/ipfs.polywrap.eth",
  method: "cat",
  args: {
    cid: cid + "/schema.graphql",
  },
});

console.log(catResult);

if (!catResult.ok) {
  console.log(catResult.error);
  return;
}

// Turn the returned buffer into a string and log it
const schema = catResult.value.toString();

console.log(schema);
```

In this example, we printed out a Wrap's Schema file. This is the definition of what types and methods are present within a Wrap, and we'll talk more about it in the next section.