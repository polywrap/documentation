---
id: 'benefits'
title: Web3API benefits (in-depth)
---

In this section, we'll deep dive into the benefits that make Web3API a unique and powerful solution for integrating Web3 protocols.

### Compatibility & maintainability

Software Development Kits (SDKs) are a common way for dapps to integrate protocol logic. For example, the [Uniswap JavaScript SDK](https://uniswap.org/docs/v2/javascript-SDK/quick-start/) allows developers to integrate Uniswap's business logic into their applications. Uniswap classes and their methods like `Token`, `Trade`, and `Route` are imported from this library.

When it comes to developing an SDK, there are a few notable development expenses to keep in mind. Some SDKs may be platform-specific. This means that they may support only native mobile experiences (Android SDK, iOS SDK, Windows SDK), web-based (JavaScript, React Native), or a combination of both. Many SDKs are also language-specific such as ones for C#, JavaScript, Go, and others. Also, the latest version of the language should be used in the SDK. For instance, for JavaScript SDKs, the latest ECMAScript version should be used as well as using Babel to transpile and ensure backwards compatibility.

Maintainence of each SDK means having the correct code implementation, documentation for every function and class written, working tests for all SDK methods and how-to-use examples. This expense adds up, especially when projects need SDKs for multiple languages and platforms.

Web3API addresses this maintainence problem. **A Web3API package is an SDK that is implemented in just one programming language.** This can be any language that compiles to [WebAssembly](https://webassembly.org/)(wasm), including Rust, AssemblyScript, Go, and more. Wasm's binary format has high portability -- it is designed to be executable efficiently on a variety of operating systems and instruction set architectures, on and off the Web.

As a Web3API developer, you only need to maintain one Web3API package. As an app developer, you can integrate protocol logic in any application written in any programming language.

### Easy of use

Web3API is not only simple to use for crypto-native developers but also for those who are coming from a strictly Web2 background. Web3API uses the familiar query language, GraphQL to query business logic in Web3API packages. Behind the scenes, the "Web3API Standard" does the heavy lifting for your application. When your app's client launches, the Web3API Standard handles a number of things at runtime:

1. Resolves and downloads the Web3API package given a valid URI
2. Instantiates the wasm module being queried
3. Calls the method being queried (e.g. "swap" or "send")

This is easy to implement in your dapp. Simply install the Web3API client, import it into your frontend code, and at that point, your dapp will be able to send queries to _any_ deployed Web3API package in your application.

Our Web3API React library enhances this developer experience. It enables React dapps to fetch GraphQL data with the `useWeb3ApiQuery` hook and attach the result to your UI. With the Web3API React library, all of the logic for retrieving your data, tracking loading and error states, and updating your UI is encapsulated by this `useWeb3ApiQuery` hook.

### Bundle size

Adding new Web3APIs to your application does not increase its size. This is because the Web3API will be downloaded from a decentralized endpoint (like IPFS) at runtime. The only package that is required for using Web3API would be the client.

JavaSript SDKs, on the other hand, increases the bundle size of your applications with each SDK added.

### Upgrades & patches

Web3APIs are resolved at runtime, allowing for automatic updates if the app is querying an updatable URI (such as an ENS domain). If you’d like to “turn off” this functionality, app developers are free to use the underlying IPFS hash which will remain constant.

### Easy composability

Web3APIs can query eachother, making composability much easier, for both protocol and app devs.

### Third-party extensions

Web3APIs can have standard interfaces defined, similar to smart contract standard interfaces (ex. ERC-20). This allows for 3rd parties to build new client-side modules that can extend application functionalities, without requiring the rebuilds of their app.
