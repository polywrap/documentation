---
id: 'polywrap-vs-javascript-sdks'
title: Polywrap vs. JavaScript SDKs
---


:::tip
Polywrap is a substantial improvement over JavaScript SDKs and produces a seamless and intuitive Web3 protocol integration experience for blockchain developers.
:::

The table below highlights the contrasts between JavaScript SDKs and Polywrap wrappers as it concerns compatibility & maintainability, ease of use, bundle size, and upgrades & patches.

| **Category**                        | **Polywrapper**                                                                                                                                            | **JavaScript SDK**                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compatibility & Maintainability** | Wrappers run in any environment, meaning you just need to program your SDK once -- saving you time.          | JS-based SDKs require JS-based apps in order to run, thereby disincentivizing developers from building apps in other languages. Supporting new app "types" requires writing and maintaining a *new* SDK.                                                                                         |
| **Easy of Use**                     | Developers interact with Polywrap through simple GraphQL, making them as easy to use as Web2 APIs like Twitter's.                                          | Developers must learn how to instantiate classes, and call into the various methods and functions the JS SDK provides.                                                                                                                                                                        |
| **Bundle Size**                     | Wrappers do not affect your dapp's bundle size, since **wrappers** are downloaded at _runtime_ from a decentralized endpoint like IPFS. | JavaScript SDKs are installed using `npm`, which increases your dapp's bundle size.                                                                                                                                                                                                     |
| **Upgrades & Patches**              | Since wrappers are resolved at runtime, this allows for _optional_ automatic updates, in the event the dapp is querying an updatable URI (such as an "ENS" domain).   | Since JS SDKs are bundled into applications, when new patches or features are released, the application must be rebuilt with the latest version. If breaking backend (smart contract) upgrades are performed, this would render the application broken until you rebuild with the latest SDK. |
