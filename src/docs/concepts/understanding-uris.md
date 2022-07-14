---
id: 'understanding-uris'
title: Understanding URIs
---

Deployed wrappers are identified using custom URIs ([Uniform Resource Identifier](http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/)). For example:

```
wrap://ens/api.helloworld.polywrap.eth
```

Polywrap URIs have 3 parts: a protocol, an authority, and a path.

#### Protocol ####

Polywrap URIs use the `wrap` protocol. Including `wrap://` in your URI is optional in practice.

#### Authority ####
For example:
- `ens/` for resolving ENS domains
- `ipfs/` for resolving IPFS content
- `fs/` for resolving content on the local filesystem

#### Path #### 
For example:
- `api.domain.eth` for an ENS domain
- `QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP` for an IPFS file/directory
- `./build` for a local directory

:::tip
`ens/` and `ipfs/` URI resolution is supported in all Polywrap clients by default. Adding custom URI resolvers is possible. More documentation on how to do this will be released soon.
:::
