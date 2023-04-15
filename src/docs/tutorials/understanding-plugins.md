---
id: 'understanding-plugins'
title: Understanding plugins
---

Polywrap plugins, or "plugin wrappers", enable existing SDKs implemented in the client's language (e.g. JavaScript) to be queried as if they were Wasm wrappers.

For information on how to create your own Polywrap plugin, read the [guide here](/tutorials/create-plugin-wrappers/create-js-plugin).

Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly, such as sending HTTP requests, or signing blockchain transactions with a private key.

### **Default Plugin wrappers**

The Polywrap client has a [default configuration](../reference/clients/js/client-config-builder-js.md#bundle-defaultconfig) that enables developers to use the following plugins and the interfaces they implement:  
* [Logger Plugin](https://github.com/polywrap/logging)
  * `wrap://ens/wraps.eth:logger@1.0.0`
* [HTTP Plugin](https://github.com/polywrap/http)
  * `ens/wraps.eth:http@1.1.0`
  * `ens/wraps.eth:http@1.0.0`
* [FileSystem Plugin](https://github.com/polywrap/file-system)
  * `ens/wraps.eth:file-system@1.0.0`
* [Concurrency Plugin](https://github.com/polywrap/concurrent)
  * `ens/wraps.eth:concurrent@1.0.0`
* [Ethereum Provider Plugin](https://github.com/polywrap/ethereum)
  * V1
    * `ens/wraps.eth:ethereum-provider@1.1.0`
    * `ens/wraps.eth:ethereum-provider@1.0.0`
  * V2
    * `ens/wraps.eth:ethereum-provider@2.0.0`

### **Configuring Plugins**

Some plugins, like the Ethereum Provider, require additional configuration in certain environments like the browser. 

We can configure the Ethereum Provider plugin to use MetaMask (or any other Ethereum JS provider) for its provider & signer using the Client Config Builder:

```typescript
$snippet: js-metamask-provider-imports

$snippet: js-metamask-provider
```
