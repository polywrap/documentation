---
id: 'polywrap-vs-javascript-sdks'
title: Polywrap vs. JavaScript SDKs
---


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