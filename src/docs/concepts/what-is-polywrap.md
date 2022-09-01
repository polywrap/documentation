---
id: what-is-polywrap
title: What is Polywrap?
---

**Polywrap** is a developer tool that enables easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols.

:::tip
Have questions or want to get involved? Join our [Discord](https://discord.polywrap.io/) or [open an issue](https://github.com/polywrap/toolchain/issues/new/choose) on our GitHub repo.
:::

## Web3 protocol integration

Web3 developers may want to integrate functions into their own app that allows users to perform a token swap, for example. The main way that developers do this today is by installing a JavaScript SDK like the Uniswap SDK as a dependency into their app. While JavaScript SDKs is one way for apps to interact with protocols, they come with major disadvantages.

## What's inside a Polywrap Wasm wrapper?

A Polywrap Wasm "wrapper" consists of the following files:

- **A Wasm module** containing the protocol's business logic functions (e.g. Uniswap's swap functions)
- **Wrap Manifest** file that orchestrates the wrapper, and provides types and parameters for the module functions

## Where is it deployed?

We currently support deploying wrappers to decentralized endpoints, [Ethereum Name Service (ENS)](https://ens.domains/), a decentralized Ethereum-based naming system and [InterPlanetary File System (IPFS)](https://ipfs.io/), a distributed P2P file system.

You can see a list of all deployed wrappers here:  
https://wrappers.io/pins

## How can apps integrate this deployed wrapper?

In a JavaScript application, a developer would first install the Polywrap JavaScript client. At that point, a Polywrap-enabled app will be able to download and use the protocol's functions. These functions are exported from WebAssembly (Wasm) modules, and can be used in any environment that can execute Wasm functions (like your web browser!).

:::tip
The Polywrap JavaScript client allows the app to use **any** deployed wrapper. After instantiating the client, the app can call queries to the wrapper using familiar GraphQL or our streamlined invocation syntax. All that is needed is:

1. The URI specifying the ENS or IPFS resolving to content containing the wrapper
2. Specifying the function and arguments provided by that wrapper

For detailed information on how to integrate in apps, take a look at our [Create a JS App](../../quick-start/integrate-wrappers/install-client) guide.

For a guide on how to build your own Polywrap and deploy it for other developers to integrate into their own app, see our [Creating a Wasm wrapper guide](../../quick-start/create-wasm-wrappers/tutorial/project-setup).

:::
