---
id: deploy-to-ipfs
title:  Deploy to IPFS
---

There are multiple ways that can be used to deploy your newly created wrapper package
to IPFS, enabling other apps to integrate your wrapper:

## `polywrap` CLI
The [`polywrap`](../../reference/cli/polywrap-cli) command-line tool has a [`deploy`](../../reference/cli/commands/deploy) command for publishing Wasm wrappers to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wrappers.io endpoint.

For more information, see [Configure Polywrap deployment pipeline](./deploy-pipeline) and the [`deploy`](../../reference/cli/commands/deploy) command reference documentation.

/*
TODO:
  * run `polywrap deploy`
  * wrappers.io will host it & pin to other public IPFS gateways for you
*/
