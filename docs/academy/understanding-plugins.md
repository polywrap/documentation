---
id: 'understanding-plugins'
title: Understanding plugins
---

Polywrap plugins enable existing SDKs implemented in the client's language (i.e. JavaScript) to be queried as if they were normal Polywraps.

For information on how to create your own Polywrap Plugin, read the [guide here](/guides/create-js-plugin).

Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly. Such as sending HTTP requests, or signing with a private key.

### **Default Plugins**

All Polywrap clients come equipped with the following default plugins:

- `w3://ens/ens.web3api.eth`
- `w3://ens/ipfs.web3api.eth`
- `w3://ens/ethereum.web3api.eth`
- `w3://w3/logger`

:::warning
This list will be changing as we approach our production release.
:::

### **Plugin URI Redirects**

Plugins are configured using URI Redirects as discussed above. Instead of having the `to:` property be a URI string, we simply pass in the plugin object.

For example, we can add an Ethereum plugin that uses MetaMask (or any other Ethereum JS provider) for its provider & signer!

```typescript
import { ethereumPlugin } from '@web3api/ethereum-plugin-js';

// Enable Metamask
const ethereum = window.ethereum;
await ethereum.request({
  method: 'eth_requestAccounts',
});

// Configure the Ethereum plugin w/ MetaMask
const client = new Web3ApiClient({
  redirects: [
    from: "ens/ethereum.web3api.eth",
    to: ethereumPlugin({
      networks: {
        mainnet: {
          provider: ethereum
        }
      },
      // If defaultNetwork is not specified, mainnet will be used.
      defaultNetwork: "mainnet"
    })
  ]
});
```