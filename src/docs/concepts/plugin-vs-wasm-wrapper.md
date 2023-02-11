---
id: 'plugin-vs-wasm-wrapper'
title: Should you build a Wasm or Plugin Wrapper?
---

Everything created via the Polywrap development platform is a "wrapper". Developers can invoke WebAssembly (Wasm) wrappers and plugin wrappers in the same way, without concern for how a particular bit of functionality has been implemented.

However, Wasm and plugin wrappers each have their strengths and a set of use cases for which they are ideally suited. This page offers some guidance for recognizing when to build a Wasm wrapper, when you need to build a plugin wrapper, and how you can combine both in new projects.

### Shared benefits

Both Wasm and plugin wrappers are interoperable and endlessly composable. When working with interfaces, the invoking wrapper may not even know which type of wrapper will be invoked at runtime.

### Benefits of building Wasm wrappers
It is ideal to encapsulate as much business logic as possible in a Wasm wrapper. You get to take advantage of all the benefits of Wasm wrappers, including:
 - Cross-language support
 - Enhanced security
 - Smaller app sizes
 - Increased performance
 - Runtime package updates

### Benefits of building plugin wrappers
Plugin wrappers are sometimes necessary because Wasm modules cannot access system-level capabilities. For example, as explained in the [WebAssembly documentation](https://webassembly.github.io/spec/core/intro/introduction.html#security-considerations), Wasm does not support network access, filesystem access, browser interaction, or operating system calls. This limitation keeps Wasm modules incredibly secure! Plugins operate in a standard code environment where access to some or all system-level capabilities is typically allowed.

:::tip
Plugins can implement interfaces. If your Wasm wrapper requires system-level capabilities, it is always better for it to depend on an interface. Plugins are written in a Polywrap Client's native language. A Wasm wrapper that directly depends on a specific plugin may also implicitly depend on a client written in the plugin's language, while a Wasm wrapper that depends on a standard interface is language-agnostic. As we work to develop standard interfaces for core plugins, we encourage Wasm wrapper developers to use them!
:::

Polywrap has developed several plugins that wrapper builders may find useful:
 - [HTTP Plugin](https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/http)
 - [FileSystem Plugin](https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/file-system)
 - [Logger Plugin](https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/logger)
 - [DateTime Plugin](https://github.com/polywrap/integrations/tree/main/system/concurrency)
 - [Cache Plugin](https://github.com/polywrap/integrations/tree/main/system/cache)
 - [Concurrency Plugin](https://github.com/polywrap/integrations/tree/main/system/concurrency)

If you develop a new plugin, be sure to let us know!

### A hybrid approach
If you are starting a new project, you can take a "Wasm wrapper-first" approach by following our guide to ["Creating a Wasm wrapper"](https://docs.polywrap.io/quick-start/create-wasm-wrappers/tutorial/project-setup/)

If you have an existing SDK, you can consider an approach of first "wrapping" the SDK as a plugin wrapper and then gradually moving each interface that your SDK provides to a Wasm wrapper. The example of [migrating the Uniswap v3 SDK to a wrapper](https://github.com/polywrap/integrations/tree/main/protocol/ethereum/uniswapv3/wrapper) demonstrates how to think about this migration process while preserving feature parity and code quality.

If you have any questions about the best approach to take for your project, you are welcome to ask a question in the [Polywrap Discord](https://discord.gg/bGsqQrNhqd).
