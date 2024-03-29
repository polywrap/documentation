---
id: publish-to-ens
title:  Publish to ENS
---

Once a wrap is published to IPFS, it can optionally be given a domain via ENS. This allows developers integrating your wrap to rely upon a human-readable & upgradeable URI. For example `ens/uniswap.wraps.eth:v3`.

There are multiple ways to publish your wrap's IPFS hash to ENS:

## `polywrap` CLI
The [`polywrap`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli) command-line tool has a [`deploy`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#deploy--d) command for publishing Wasm wraps to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wraps.io endpoint.

For more information, see [Configure Polywrap deployment pipeline](./deploy-pipeline) and the [`deploy`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#deploy--d) command reference documentation.

## The ENS App
[ENS App](https://docs.ens.domains/) is a distributed, open, and extensible naming system based on the Ethereum blockchain.