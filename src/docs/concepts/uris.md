---
id: uris
title: URIs
---

Deployed wrappers are identified using custom URIs ([Uniform Resource Identifier](http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/)) called WRAP URIs. For example:

```
wrap://ens/api.helloworld.polywrap.eth
```

WRAP URIs follow the [WRAP URI Standard](https://github.com/polywrap/specification/blob/main/standards/01_URI.md).

WRAP URIs have 3 parts: a protocol, an authority, and a path.

#### Scheme ####

WRAP URIs use the `wrap` scheme. Including `wrap://` in your URI is optional in practice.

#### Authority ####
The Authority is used to denote which underlying protocol/standard the URI is part of. Usually, during URI resolution, the Polywrap Client will have at least one URI Resolver for each Authority used.

For example:
- `ens/` for resolving ENS domains
- `ipfs/` for resolving IPFS content
- `fs/` for resolving content on the local filesystem
- `http/` for resolving content via HTTP

#### Path ####
This is simply everything that comes after the Authority, and defines the unique resource we are trying to resolve.

For example:
- `api.domain.eth` for an ENS domain
- `QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP` for an IPFS file/directory
- `./build` for a local directory
- `example.com/my-wrapper.wasm` for a Wrap downloadable over HTTP

:::tip
`ens/` and `ipfs/` URI resolution is supported in all Polywrap clients by default. Adding custom URI resolvers is possible. More documentation on how to do this will be released soon.
:::