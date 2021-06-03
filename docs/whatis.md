---
id: whatis
title: What is Web3API?
description: The Universal Web3 Integration Standard
slug: /whatis
---

A Web3API package includes a protocol's business logic.

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

Web3APIs are resolved at runtime, allowing for automatic updates if the app is querying an updatable URI (such as an ENS domain). If you’d like to “turn off” this functionality, app developers are free to use the underlying IPFS hash which will remain constant.
