---
id: welcome
title: Welcome!
description: The Universal Web3 Integration Standard
slug: /
---

## What is Polywrap?

**Polywrap** is a developer tool that enables easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols.

:::tip
Polywrap is in **pre-alpha**, meaning our code and documentation are rapidly changing.

Polywrap is a recent rebrand of Web3API. While using the toolchain, you'll notice that `web3api` or `w3` is still used - we will be updating these soon!

Have questions or want to get involved? Join our [Discord](https://discord.com/invite/Z5m88a5qWu) or [open an issue](https://github.com/polywrap/monorepo/issues) on our GitHub repo.
:::

## Web3 protocol integration

Web3 developers may want to integrate functions into their own dapp that allows users to perform a token swap, for example. The main way that developers do this today is by installing a JavaScript SDK like the Uniswap SDK as a dependency into their dapp. While JavaScript SDKs is one way for dapps to interact with protocols, they come with major disadvantages.

## Polywrap vs. JavaScript SDKs

:::tip
Polywrap aims to be substantial improvement over using JavaScript SDKs for Web3 protocol integration.
:::

The table below compares the differences between JavaScript SDKs and Polywrap wrappers when it comes to compatibility and maintainability, easy of use, bundle size, and upgrades and patches.

| **Category**                        | **Polywrapper**                                                                                                                                            | **JavaScript SDK**                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compatibility & maintainability** | Wrappers can run in any type of environment, meaning you only have to program your SDK once. This will save developers an immense amount of time.          | JS-based SDKs can only run in JS-based apps. This is huge problem for developers building apps in other languages. Supporting new types of apps requires writing and maintaining an entirely new SDK.                                                                                         |
| **Easy of use**                     | Developers interact with Polywrap through simple GraphQL, making them as easy to use as Web2 APIs like Twitter's.                                          | Developers must learn how to instantiate classes, and call into the various methods and functions the JS SDK provides.                                                                                                                                                                        |
| **Bundle size**                     | Adding new wrappers to your dapp does now increase its size. This is because wrappers are downloaded at _runtime_ from a decentralized endpoint like IPFS. | JavaScript SDKs are installed using `npm`, which will increasing your dapp's bundle size.                                                                                                                                                                                                     |
| **Upgrades & patches**              | Since wrappers are resolved at runtime, this allows for _optional_ automatic updates if the dapp is querying an updatable URI (such as an "ENS" domain).   | Since JS SDKs are bundled into applications, when new patches or features are released, the application must be rebuilt with the latest version. If breaking backend (smart contract) upgrades are performed, this would render the application broken until you rebuild with the latest SDK. |

## Ready to dive in with Polywrap?

**If you're looking to learn in detail what makes integrating with Polywrap special:** [Getting started](getting-started/polywrap-wrappers).

**If you're a looking to integrate wrappers into your dapp:** [Create JS dapp guide](guides/create-js-dapp/01).

**If you're a protocol team or individual who wants to build your own wrapper:** [Create a wrapper guide](guides/create-as-wrapper/pt1).
