---
id: 'polywrap-wrappers'
title: Polywrappers
---

## What's inside a polywrapper?

A Polywrap "polywrapper" consists of the following files:

- **Query and mutation wasm modules** containing the protocol's business logic functions (e.g. Uniswap's swap functions)
- **GraphQL** schema to provide types and parameters for the query and mutation functions
- **Manifest** files that orchestrate the wrapper

## Where is it deployed?

We currently support deploying polywrappers to decentralized endpoints, [Ethereum Name Service (ENS)](https://ens.domains/), a decentralized Ethereum-based naming system and [InterPlanetary File System (IPFS)](https://ipfs.io/), a distributed P2P file system. For an example of a deployed wrapper, take a look at the ENS domain below:

[ENS: Uniswap Polywrapper](https://app.ens.domains/name/v2.uniswap.web3api.eth)

The ENS domain above resolves to the IPFS content holding our Polywrap wrapper! Below is a link to the IPFS storage:

[IPFS: Uniswap Polywrapper](https://bafybeifwqlolknl7yvth452s63ujnx45xypgxaisbbgdb6izqjyfvn4igy.ipfs.dweb.link/)

## How can dapps integrate this deployed wrapper?

In a JavaScript application, a developer would first install the Polywrap JavaScript client. At that point, a Polywrap-enabled dapp will be able to download and use the protocol's functions. These functions are exported from query and mutation WebAssembly (wasm) modules, and can be used in any environment that can execute wasm functions (like your web browser!).

:::tip
The Polywrap JavaScript client allows the dapp to use **any** deployed wrapper. After instantiating the client, the dapp can call queries to the wrapper using familiar GraphQL. All that is needed in this query is:

1. The URI specifying the ENS or IPFS resolving to content containing the wrapper
2. Specifying the function and arguments provided by that wrapper

For detailed information on how to integrate in dapps, take a look at our [Create a JS Dapp](../../guides/create-js-dapp/install-client) guide.

For a guide on how to build your own Polywrap and deploy it for other developers to integrate into their own dapp, see our [Creating a wrapper guide](../../guides/create-as-wrapper/project-setup).

:::
