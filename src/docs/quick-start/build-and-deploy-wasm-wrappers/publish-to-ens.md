---
id: publish-to-ens
title:  Publish to ENS
---

Once a wrapper is published to IPFS, it can optionally be given a domain via ENS. This allows developers integrating your wrapper to rely upon a human-readable & upgradeable URI. For example `ens/v3.uniswap.polywrap.eth`.

There are multiple ways to publish your wrapper's IPFS hash to ENS:

## `polywrap` CLI
The [`polywrap`](../../reference/cli/polywrap-cli) command-line tool has a [`deploy`](../../reference/cli/commands/deploy) command for publishing Wasm wrappers to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wrappers.io endpoint.

For more information, see [Configure Polywrap deployment pipeline](./deploy-pipeline) and the [`deploy`](../../reference/cli/commands/deploy) command reference documentation.

## `wrappers` CLI
[`wrappers`](https://www.npmjs.com/package/@nerfzael/wrappers) is the deprecated (but working) prototype for the `polywrap` CLI's `deploy` command. It is a command-line tool for publishing Wasm wrappers to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wrappers.io endpoint.

[> Step-By-Step Guide](./deployment/wrappers-cli)

## The ENS App
[ENS App](https://docs.ens.domains/) is a distributed, open, and extensible naming system based on the Ethereum blockchain.