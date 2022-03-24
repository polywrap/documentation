---
id: 'understanding-uris'
title: Understanding URIs
---

### What are URI resolver 
A `URI resolver` is a function that maps from a URI to a stream. 

A `URI resolver` might consist of an application component or could be deployed as a network

###  How polywrap uses URI resolvers 

Deployed wrappers are identified using custom URIs ([Uniform Resource Identifier](http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/)). For example:

```
ens/api.helloworld.polywrap.eth
```

Polywrap URIs have 2 parts:

**Authority:**  
For example `ens/` for resolving ENS 
domains, or `ipfs/` for resolving IPFS content.

### What is ENS? 
The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain.

### What is IPFS?
The InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system.

**Path:**  
For example `api.domain.eth` for an ENS domain, or `QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP` for an IPFS file/directory.

:::tip
`ens/` and `ipfs/` URI resolution is supported in all Polywrap clients by default. Adding custom URI resolvers is possible.
:::

Lets get started: 


how we built the defaults (fs, ipfs, ens), and how builders can create their own.


if you are using the cli: 


If you wanted to deploy to IPFS, simply use the command -ipfs <ipfs uri>.


w3 build 


`w3 build -ipfs <ipfs uri>`

Example: 
`w3 build -ipfs QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP`