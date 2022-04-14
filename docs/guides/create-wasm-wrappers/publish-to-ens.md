---
id: publish-to-ens
title:  Publish to ENS
---

Once a wrapper is published to IPFS, it can optionally be given a domain via ENS. This allows developers integrating your wrapper to rely upon a human-readable & upgradeable URI. For example `ens/v3.uniswap.polywrap.eth`.

There are multiple ways to publish your wrapper's IPFS hash to ENS:

## The ENS App
[ENS App](https://docs.ens.domains/) is a distributed, open, and extensible naming system based on the Ethereum blockchain.

## `wrappers` CLI
[`wrappers`](https://www.npmjs.com/package/@nerfzael/wrappers) is a command-line tool for publishing polywrappers to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wrappers.io endpoint.  
