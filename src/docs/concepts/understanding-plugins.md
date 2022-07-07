---
id: 'understanding-plugins'
title: Understanding plugins
---

Polywrap plugins, or "plugin wrappers", enable existing SDKs implemented in the client's language (e.g. JavaScript) to be queried as if they were Wasm wrappers.

For information on how to create your own Polywrap plugin, read the [guide here](/quick-start/create-plugin-wrappers/create-js-plugin).

Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly, such as sending HTTP requests, or signing blockchain transactions with a private key.

### **Default Plugin wrappers**

All Polywrap clients come equipped with the following default plugins:

- `ens/ens.web3api.eth`
- `ens/ipfs.web3api.eth`
- `ens/ethereum.web3api.eth`
- `w3/logger`

### **Plugin URI Redirects**

Plugin wrappers are configured using URI Redirects. We would specify the `uri` property as the URI of the plugin we want to use, and the `plugin` property as the actual plugin.

For example, we can add an Ethereum plugin that uses MetaMask (or any other Ethereum JS provider) for its provider & signer!

```typescript
$snippet: js-metamask-provider-imports

$snippet: js-metamask-provider
```
