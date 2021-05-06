---
id: uniswapv2-web3api-intro
title: Uniswap v2 Web3API Documentation
---

## Overview

Welcome to the Uniswap v2 Web3API documentation!

The Uniswap Web3API is written in [AssemblyScript](https://www.assemblyscript.org/), and like the official Uniswap SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap Web3API business logic will be deployed on a decentralized endpoint, like IPFS.

Our first Web3API client is for JavaScript(`@web3api/client-js`) and it can run in any environment that can execute JavaScript. In the future, we'll have Web3API clients for other environments (Python, Go, and more).

Developers integrating the Uniswap Web3API into their app would use [GraphQL](https://graphql.org/) queries to execute functions provided by the Uniswap Web3API. This documentation shows you which **query** and **mutation** functions are made available by the Uniswap Web3API and how to use them.

## Uniswap Web3API vs. Existing SDK

The Uniswap Web3API aims to be a substantial improvement over Uniswap v2’s [existing SDK](https://uniswap.org/docs/v2/SDK/getting-started/).

While the official SDK bundles all classes (e.g. `Token`), necessary data fields, and helper functions into the application, the Uniswap Web3API does not. Instead, all business logic is deployed on a decentralized endpoint, like IPFS, and is downloaded at runtime when the client application launches. The business logic that's downloaded lives in a Web3API repository which includes the following files:

- A **WebAssembly** module (compiled from AssemblyScript) that provides apps with the same business logic as the Uniswap v2 JavaScript SDK
- A **GraphQL** schema to execute queries using a type system that is defined by the Uniswap Web3API
- A **manifest** file that orchestrates this business logic

Here is a summary of other significant differences:

| Differences                   | Uniswap v2 Web3API                                                                                                  | Uniswap SDK                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maintainability**           | Built and maintained in a _single_ language like Rust or AssemblyScript.                                            | Currently written in JavaScript, and potentially other languages in the future like Python or Go. Each SDK needs to be individually maintained. |
| **Compatibility**             | Works on _all_ platforms (browsers, desktops, IoT, etc.) and all types of apps (JavaScript, Python etc.).           | Each SDK only works with that specific type of app (e.g. the Uniswap JavaScript client only works in JavaScript apps).                          |
| **Impact to app bundle size** | Little to none. The Uniswap v2 business logic is downloaded from a decentralized endpoint (like IPFS) at _runtime_. | The Uniswap JavaScript SDK is installed using `npm`, which increases your app's bundle size.                                                    |

## Code

The **Pre-alpha** [source code is available on GitHub](https://github.com/web3-api/monorepo/tree/uniswap-web3api).

## Usage

To use _any_ Web3API in your dApp, all you need is the Web3API Client.

```
npm install --save @web3api/client-js
```

The Web3API JavaScript Client works in both Node.js and browser applications.

Then, initialize the client.

```typescript
import { Web3ApiClient } from '@web3api/client-js';
const client = new Web3ApiClient();
```

Now, you're able to send queries to the Uniswap v2 Web3API!

```typescript
client.query({
  uri: 'ens/api.uniswapv2.eth',
  query: `{
      tokenEquals(
        token: ${token}
        other: ${other}
       )
 	}`,
});
```

Take a look at more sophisticated tooling, such as our `useWeb3ApiQuery` hook, in our [Create a JS dApp](/developers/create-js-dapp) guide.
