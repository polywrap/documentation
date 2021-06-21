---
id: whatis
title: What is Polywrap?
description: The Universal Web3 Integration Standard
slug: /whatis
---

A Polywrap wrapper includes a protocol's business logic.

## What's inside a Polywrap wrapper?

A Polywrap wrapper consists of the following files:

- A **Query and a mutation wasm module** containing the protocol's business logic functions
- A **GraphQL** schema to execute queries using a type system that is defined by the Wasm modules
- A **manifest** file that orchestrates the Polywrap wrapper

## Benefits

### Compatibility & maintainability

Polywrap wrappers can run in any type of application, meaning maintainers only have to program their SDK once. This will save developers an immense amount of time.

### Easy of use

Developers interact with Polywraps through simple GraphQL, making them as easy to use as Web2 APIs.

### Bundle size

Adding new wrappers to your application does not increase its size. This is because the wrapper will be downloaded from a decentralized endpoint (like IPFS) at runtime.

### Upgrades & patches

Wrappers are resolved at runtime, allowing for automatic updates if the app is querying an updatable URI (such as an ENS domain). If you’d like to “turn off” this functionality, app developers are free to use the underlying IPFS hash which will remain constant.

### Easy composability

Wrappers can query eachother, making composability much easier, for both protocol and app devs.

### Third-party extensions

Wrappers can have standard interfaces defined, similar to smart contract standard interfaces (ex. ERC-20). This allows for 3rd parties to build new client-side modules that can extend application functionalities, without requiring the rebuilds of their app.
