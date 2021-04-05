---
id: building-with-web3api
title: 'Start Here!'
---

## **What's Web3API?**

[Web3API](https://web3api.dev) is a developer toolchain. It aims to bring the ease of [Web2 to Web3](https://ethereum.org/nl/developers/docs/web2-vs-web3/). It makes integrating Web3 protocols into applications seamless, without sacrificing decentralization.

## **Start Building**

To get started, take a look at our _Create a Web3API_ guide. It'll walk you through our template project and show you Web3API's core features at the same time:

- [Create a Web3API](/developers/create-as-web3api)

After you finish that guide, here are two other detailed guides depending on what you want to build:

- [Integrate Web3APIs into JavaScript dApps](/developers/create-js-dapp)
- ["Plugin" an existing JavaScript SDK](/developers/create-js-plugin)

:::note

- Plugins don't retain [all of Web3API's benefits](#benefits).
- We recommend [re-writing your existing SDKs as WASM based Web3APIs](/developers/create-as-web3api).

:::

## **Why Web3API?**

Web3 dApps are "heavy", executing a lot of business logic on behalf of protocols. In Web2, this same problem doesn't exist, since business logic can be executed on behalf of users on central servers.

One solution to this Web3 problem are language specific SDKs for Web3 protocols. For example, IPFS has SDKs in many different languages (JavaScript, Python, Rust, Go, etc). However, a major downside to SDKs is that they all have to be maintained into the future.

Our goal is to get Web3 protocols developers to move away from language specific SDKs and develop Web3APIs in their place.

## **Benefits**

Using Web3APIs provides the following benefits:

- **Streamlined Integration** - Query any Web3API on-the-fly, by simply providing its URI (example: `api.protocol.eth`).
- **Simple Interface** - With GraphQL, Web3APIs are as easy to use as Web2 web services.
- **Multi-Platform** - Use Web3 protocols in any programming language by using a Web3API Client.
- **Automatic Updates** - Resolving packages at runtime allows for automatic (opt-in) updates.
- **Limitless Composability** - Since Web3APIs are not bundled, there are no limits to composability.
- **Extendable Protocols** - Web3APIs can query each other and define standard interfaces, enabling fully extendable protocols.

## **How it works**

> For the visual learners, here is a [video](http://video.web3api.eth.link/).

Web3API accomplishes this through a WebAssembly (WASM) standard and a developer toolchain that streamlines Web3 protocol integrations.
All logic that was once bundled into JavaScript SDKs (among other languages) is now within lightweight, secure, and portable WASM modules called Web3APIs.

Querying these Web3APIs is done through a familiar [GraphQL](https://graphql.org/) interface resulting in a developer experience almost identical to that of a Web2 web service.
Instead of sending GraphQL queries to a centralized endpoint, such as `api.service.com`, apps query a decentralized endpoint like `api.protocol.eth`.

The Web3API Client resolves the Web3API package hosted at its decentralized endpoint, downloads it at runtime (if not present), and executes the application's queries on the WASM modules.

See [this Architecture diagram](https://github.com/Web3-API/specification/blob/main/spec/intro/2_Architecture.md) for wholistic look at how this works.
