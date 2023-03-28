---
id: 'understanding-plugins'
title: Understanding plugins
---

Polywrap plugins, or "plugin wrappers", enable existing SDKs implemented in the client's language (e.g. JavaScript) to be queried as if they were Wasm wrappers.

For information on how to create your own Polywrap plugin, read the [guide here](/tutorials/create-plugin-wrappers/create-js-plugin).

Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly, such as sending HTTP requests, or signing blockchain transactions with a private key.

### **Default Plugin wrappers**

The Polywrap client has a [default configuration](https://github.com/polywrap/monorepo/blob/origin/packages/js/client/src/default-client-config.ts) that enables developers to use the following plugins:  
* `wrap://ens/js-logger.polywrap.eth`
* `wrap://ens/ipfs.polywrap.eth`
* `wrap://ens/ens-resolver.polywrap.eth`
* `wrap://ens/ethereum.polywrap.eth`
* `wrap://ens/http.polywrap.eth`
* `wrap://ens/fs.polywrap.eth`
* `wrap://ens/fs-resolver.polywrap.eth`
* `wrap://ens/ipfs-resolver.polywrap.eth`

NOTE: This default configuration will be removed in the near future, and replaced by a "config builder". This will make the client agnostic, and allow users to combine and customize different "config bundles", in addition to creating their your own.

### **Plugin URI Redirects**

Plugin wrappers are configured using URI Redirects. We would specify the `uri` property as the URI of the plugin we want to use, and the `plugin` property as the actual plugin.

For example, we can add an Ethereum plugin that uses MetaMask (or any other Ethereum JS provider) for its provider & signer!

```typescript
$snippet: js-metamask-provider-imports

$snippet: js-metamask-provider
```
