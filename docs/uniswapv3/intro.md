---
id: intro
title: Uniswap v3 Polywrap Documentation
---

## Overview

Welcome to the Uniswap v3 Polywrap documentation!

If you haven't seen our demo yet, please take a look at it first!

[Uniswap v3 Polywrapper Demo](https://docs.polywrap.io)

The Uniswap Polywrap is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap Polywrap business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Polywrap client is for JavaScript(`@web3api/client-js`) and it can run in any environment that can execute JavaScript. In the future, we'll have Polywrap clients for other environments (Python, Go, and more).

Developers integrating the Uniswap Polywrap into their app would use [GraphQL](https://graphql.org/) queries to execute functions provided by the Uniswap Polywrap. This documentation shows you which **query** and **mutation** functions are made available by the Uniswap Polywrap and how to use them.

## Uniswap Polywrap vs. Existing SDK

The Uniswap Polywrap aims to be a substantial improvement over Uniswap v3’s [existing SDK](https://docs.uniswap.org/sdk/introduction).

While the official SDK bundles all classes (e.g. `Trade`), necessary data fields, and helper functions into the application, the Uniswap Polywrap does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches.

You can learn more about the benefits of using Polywrap [here](https://docs.polywrap.io).

## Usage

We've created an interactive tutorial that can help you get started using the Uniswap wrapper [here](https://github.com/polywrap/uni-workshop).

In general, to use _any_ Polywrap in your application, all you need is the Polywrap Client.

```
npm install --save @web3api/client-js
```

The Polywrap JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { Web3ApiClient } from '@web3api/client-js';
const client = new Web3ApiClient();
```

Now, you're able to send queries to the Uniswap v3 Polywrap!

```typescript
client.query({
  uri: 'ens/v3.uniswap.web3api.eth',
  query: `{
      tokenEquals(
        tokenA: ${tokenA}
        tokenB: ${tokenB}
       )
 	}`,
});
```

Take a look at more sophisticated tooling, such as our `useWeb3ApiQuery` hook, in our [Create a JS dApp](/guides/create-js-dapp/install-client) guide.

## Code

The **Pre-alpha** [source code is available on GitHub](https://github.com/polywrap/integrations).