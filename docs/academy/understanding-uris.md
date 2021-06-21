---
id: 'understanding-uris'
title: Understanding URIs
---

Polywraps are identified using custom URIs ([Uniform Resource Identifier](http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/)). For example:

```
w3://ens/api.helloworld.web3api.eth
```

Polywrap URIs have 3 parts:

**Protocol:**  
`w3://` is the name of the Polywrap URI resolution protocol. All Polywrap clients implement this protocol.

**Authority:**  
For example `ens/` for resolving ENS domains, or `ipfs/` for resolving IPFS content.

**Path:**  
For example `api.domain.eth` for an ENS domain, or `QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP` for an IPFS file/directory.

:::tip
Adding `w3://` to the start of your URIs is options when using a Polywrap client.
:::

:::tip
`ens/` and `ipfs/` URI resolution is supported in all Polywrap clients by default. Adding custom URI resolvers is possible. More documentation on how to do this will be released soon.
:::

### **URI Redirects**

Similar to how browsers can redirect from one URI to another, the Polywrap client can have custom URI redirects configured as well.

For example, if we'd like to redirect all queries to the `ens/api.helloworld.web3api.eth` URI to our own custom URI (`ens/api.myhelloworld.eth` for example), we'd simply configure the client like so:

```typescript
const client = new Web3ApiClient({
  redirects: [
    {
      from: `ens/api.helloworld.web3api.eth`,
      to: `ens/api.myhelloworld.eth`,
    },
  ],
});
```

:::caution
The `ens/api.myhelloworld.eth` Polywrap must fully implement the `ens/api.helloworld.web3api.eth` schema.
:::
