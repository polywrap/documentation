---
id: introduction
title: Introduction
---

**Polywrap** is a framework that enables easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols.

:::tip
Have questions or want to get involved? Join our [Discord](https://discord.polywrap.io/) or [open an issue](https://github.com/polywrap/toolchain/issues/new/choose) on our GitHub repo.
:::

## The problem with current Web3 SDKs

We see traditional SDKs as the primary bottleneck to web3's potential for composable, cross-platform dApps.

Web3 promises a new depth of composability in software development.  Any application can interact with smart contract protocols like Uniswap or Aave.  For web3 developers, software development kits (SDKs) simplify this integration process.

However, traditional SDKs come with a number of issues for web3 developers, namely they are:

- **difficult to compose.**  Due to the lack of SDK standards, the SDK for one web3 protocol may be difficult to mix-and-match with that of another.

![](/img/docs/introduction/01-composable.png)

- **not portable.**  SDKs are language-specific.  Today's deployment platforms are more varied than ever (web, mobile, server, etc.).  Thus, SDK codebases need to be duplicated and translated for each of these environments, leading to more chances for bugs to appear and higher maintenance costs.

![](/img/docs/introduction/02-portable.png)

- **not upgradable.** When traditional SDKs undergo a patch update, the entire application needs to be rebuilt and redeployed.

## Polywrap: Composable web3 Wrappers

Presenting Polywrap - a framework for building “wrappers”: composable, portable, and dynamically upgradeable SDKs.✨

Polywrap's wrappers offer a much better strategy for code reuse and composability than traditional SDKs. Wrappers are:

- **easily composable.**  Wrappers are developed in a standardized way, and all dApps powered by the Polywrap client library can communicate with wrappers with a familiar graphQL-esque querying.  Standardization means wrappers can be easily composed, resulting in even more sophisticated wrappers.

![](/img/docs/introduction/03-composable.png)

- **portable.** Wrappers can execute in any host environment that has the Polywrap client installed (web, mobile, IoT, servers, and more).  Instead of maintaining multiple language-specific SDKs, web3 dev teams can write their wrappers in one language that works seamlessly across all deployment platforms.

![](/img/docs/introduction/04-portable.png)

- **updatable on the fly.** Wrappers aren't bundled into applications.  Instead, they're fetched at runtime and any patch updates are done on the fly, without the need to rebuild the entire app.

## What's inside a Polywrap Wasm Wrap?

A Polywrap Wasm "Wrap" consists of the following files:

- **A Wasm module** containing the protocol's business logic functions (e.g. Uniswap's swap functions)
- **Wrap Manifest** file that orchestrates the Wrap, and provides types and parameters for the module functions

## Where is it deployed?

We currently support deploying Wraps to decentralized endpoints, [Ethereum Name Service (ENS)](https://ens.domains/), a decentralized Ethereum-based naming system and [InterPlanetary File System (IPFS)](https://ipfs.io/), a distributed P2P file system.

You can see a list of all deployed Wraps here:  
https://wrappers.io/all

## How can apps integrate this deployed Wrap?

In a JavaScript application, a developer would first install the Polywrap JavaScript client. At that point, a Polywrap-enabled app will be able to download and use the protocol's functions. These functions are exported from WebAssembly (Wasm) modules, and can be used in any environment that can execute Wasm functions (like your web browser!).

:::tip
The Polywrap JavaScript client allows the app to use **any** deployed Wrap. After instantiating the client, the app can call queries to the Wrap using familiar GraphQL or our streamlined invocation syntax. All that is needed is:

1. The URI specifying the ENS or IPFS resolving to content containing the Wrap
2. Specifying the function and arguments provided by that Wrap

For detailed information on how to integrate in apps, take a look at our [Quick Start](quick-start/polywrap-client) guide.

For a guide on how to build your own Polywrap and deploy it for other developers to integrate into their own app, see our [Creating a Wasm Wrap guide](/tutorials/create-wasm-wrappers/tutorial/project-setup).

:::