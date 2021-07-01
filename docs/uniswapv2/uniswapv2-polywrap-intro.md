---
id: uniswapv2-polywrap-intro
title: Uniswap v2 Polywrap Documentation
---

## Overview

Welcome to the Uniswap v2 Polywrap documentation!

The Uniswap Polywrap is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap Polywrap business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Polywrap client is for JavaScript(`@web3api/client-js`) and it can run in any environment that can execute JavaScript. In the future, we'll have Polywrap clients for other environments (Python, Go, and more).

Developers integrating the Uniswap Polywrap into their app would use [GraphQL](https://graphql.org/) queries to execute functions provided by the Uniswap Polywrap. This documentation shows you which **query** and **mutation** functions are made available by the Uniswap Polywrap and how to use them.

## Uniswap Polywrap vs. Existing SDK

The Uniswap Polywrap aims to be a substantial improvement over Uniswap v2’s [existing SDK](https://uniswap.org/docs/v2/SDK/getting-started/).

While the official SDK bundles all classes (e.g. `Token`), necessary data fields, and helper functions into the application, the Uniswap Polywrap does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches.

You can learn more about the benefits of using Polywrap [here](/whatis).

## Code

The **Pre-alpha** [source code is available on GitHub](https://github.com/web3-api/monorepo/tree/uniswap-web3api).

## Usage

To use _any_ Polywrap in your dapp, all you need is the Polywrap Client.

```
npm install --save @web3api/client-js
```

The Polywrap JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { Web3ApiClient } from '@web3api/client-js';
const client = new Web3ApiClient();
```

Now, you're able to send queries to the Uniswap v2 Polywrap!

```typescript
client.query({
  uri: 'ens/v2.uniswap.web3api.eth',
  query: `{
      tokenEquals(
        token: ${token}
        other: ${other}
       )
 	}`,
});
```

Take a look at more sophisticated tooling, such as our `useWeb3ApiQuery` hook, in our [Create a JS dApp](/guides/create-js-dapp/01) guide.
