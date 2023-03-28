---
id: intro
title: Uniswap v3 Polywrap Documentation
---

:::caution
This demo was made with a deprecated version of Polywrap!
:::

## Overview

Welcome to the Uniswap v3 Polywrap documentation!

The Uniswap Wasm wrapper is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite and performs arbitrary precision arithmetic. The Uniswap Polywrap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Polywrap client is for JavaScript(`@polywrap/client-js`) and it can run in any environment that can execute JavaScript. We also have a working Rust implementation. In the future, we'll have Polywrap clients for other environments (Python, Go, and more).

Developers integrating the Uniswap Wasm wrapper into their app would use client invocations to execute functions provided by the Uniswap wrapper. This documentation shows you which functions are made available by the Uniswap wrapper and how to use them.

## Uniswap wrapper vs. Existing SDK

The Uniswap wrapper aims to be a substantial improvement over Uniswap v3’s [existing SDK](https://docs.uniswap.org/sdk/introduction).

While the official SDK bundles all classes (e.g. `Trade`), necessary data fields, and helper functions into the application, the Uniswap wrapper does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches.

You can learn more about the benefits of using Polywrap [here](https://docs.polywrap.io).

## Usage

We've created an interactive tutorial that can help you get started using the Uniswap wrapper [here](https://github.com/polywrap/uni-workshop).

In general, to use _any_ Polywrap in your application, all you need is the Polywrap Client.

```
npm install --save @polywrap/client-js
```

The Polywrap JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { Web3ApiClient } from '@polywrap/client-js';
const client = new Web3ApiClient();
```

Now, you're able to send queries to the Uniswap v3 wrapper!

```typescript
// You can use the familiar GraphQL Query syntax
const tokenEqualsQuery: QueryApiResult = client.query(<{ tokenEquals: boolean }>{
  uri: 'ens/v3.uniswap.web3api.eth',
  query: `{
    tokenEquals(
      tokenA: ${tokenA}
      tokenB: ${tokenB}
     )
  }`,
});
const tokenEquals: boolean | undefined = tokenEqualsQuery.data?.tokenEquals;

// Or the alternative Invoke syntax
const routerQuery: InvokeApiResult<MethodParameters> = await client.invoke<MethodParameters>({
  uri: ensUri,
  module: "query",
  method: "swapCallParameters",
  input: {
    trades: bestTrades,
    options: {
      slippageTolerance: "0.01",
      recipient: recipient,
      deadline: "123",
    }
  }
});
const swapCallParameters: MethodParameters | undefined = routerQuery.data;
```

Take a look at more sophisticated tooling, such as our `useWeb3ApiQuery` hook, in our [Create a JS App](/tutorials/integrate-wrappers/install-client) guide.

## Code

The **Pre-alpha** [source code is available on GitHub](https://github.com/polywrap/integrations/tree/main/uniswapv3/wrapper).
