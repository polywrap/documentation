---
id: welcome
title: Welcome!
description: The Universal Web3 Integration Standard
slug: /
---

## Introduction

**Web3API** is a developer tool that allows easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols.

:::tip
Web3API is in **pre-alpha**, meaning our code and documentation are rapidly changing. Have questions or want to get involved? Join our [Discord](https://discord.com/invite/Z5m88a5qWu) or [open an issue](https://github.com/Web3-API/monorepo/issues) on our GitHub repo.

:::

## What is a Web3API?

A Web3API package includes a protocol's business logic. They're made available by **Maintainers** and consumed by **Users**.

### Maintainers

Maintainers are project teams that build and maintain their own Web3APIs. For example, the Gnosis team could develop a Gnosis Web3API which includes their protocol's business logic. They would then deploy their Web3API to a decentralized endpoint, like IPFS, for Users to easily integrate into their applications.

The Web3API package is meant to replace a protocol's existing SDKs. Instead of building a separate SDK for JavaScript, Go, and so on, a protocol would just need one SDK written in one language that can compile to WebAssembly, like Rust.

:::tip
**Want to build your own Web3API?**
Follow our [Create a Web3API Guide](guides/create-as-web3api).
:::

### Users

Users integrate Web3API into their applications. By installing the Web3API client into their application, users can read or write to Web3APIs that are deployed by Maintainers.

These read and write operations are done using GraphQL.

:::tip
**Want to integrate existing Web3APIs into your dapp?**
Follow our [Create JS Dapp Guide](guides/create-js-dapp).
:::

## What's inside a Web3API package?

A Web3API package consists of the following files:

- A **Wasm** module that has the protocol's business logic
- A **GraphQL** schema to execute queries using a type system that is defined by the Wasm module
- A **manifest** file that orchestrates the Web3API package

## Benefits

### Compatibility & maintainability

Web3APIs can run in any type of application, meaning Maintainers only have to program their SDK once. This will save developers an immense amount of time.

### Easy of use

Developers interact with Web3APIs through simple GraphQL, making them as easy to use as Web2 APIs.

### Bundle size

Adding new Web3APIs to your application does not increase its size. This is because the Web3API will be downloaded from a decentralized endpoint (like IPFS) at runtime.

### Upgrades & patches

Since Web3APIs are resolved at runtime, this allows for automatic updates if the app is querying an updatable URI (such as an ENS domain). If you’d like to “turn off” this functionality, app developers are free to use the underlying IPFS hash which will remain constant.
