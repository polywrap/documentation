---
id: 'plugin-vs-wasm-wrapper'
title: Should you build a Wasm or Plugin Wrapper?
---

From an integration perspective, everything created via the Polywrap Development Platform is a "wrapper". In other words, Wasm wrappers and plugin wrappers are intentionally indistinguishable to application developers so that they don't need to worry about how a particular bit of functionality has been implemented.

However, Wasm wrappers and plugin wrappers each have their strengths and a set of use cases for which they are ideally suited and they also work really well together. This page offers some guidance for recognizing when to build a Wasm wrapper, when you need to build a plugin wrapper, and how you can combine both in new projects or when porting existing SDKs.

### Benefits of building Wasm wrappers
Encapsulating as much business logic as possible in a Wasm wrapper is the ideal state. By doing this, you get to take advantage of all of the benefits of Wasm including cross-language support, security, performance, composability, and smaller package size.


### Benefits of building plugin wrappers
Despite the benefits of Wasm wrappers, however, plugin wrappers are sometimes necessary due to the limitations of Wasm. For example, Wasm does not support HTTP queries, filesystem access, or browser interaction. Wasm wrappers will typically depend on one or more plugin wrappers, and sometimes a custom plugin wrapper may be useful to support a Wasm wrapper.


### A hybrid approach
If you are starting a new project, you can take a "Wasm wrapper-first" approach by following our guide to ["Creating a wasm wrapper"](https://docs.polywrap.io/guides/create-wasm-wrappers/project-setup)


If you have an existing SDK, you can consider an approach of first "wrapping" the SDK as a plugin wrapper and then gradually moving each interface that your SDK provides to a Wasm wrapper. The example of [migrating the Uniswap v3 SDK to a wrapper](https://github.com/polywrap/integrations/tree/main/uniswapv3/wrapper) demonstrates how to think about this migration process while preserving feature parity and code quality.

If you have any questions about the best approach to take for your project, you are welcome to ask a question in the [Polywrap Discord](https://discord.gg/bGsqQrNhqd).
