---
id: deploy-to-ipfs
title:  Deploy to IPFS
---

There are multiple ways that can be used to deploy your newly created wrapper package
to IPFS, enabling other apps to integrate your wrapper:

## `polywrap` CLI
The [`polywrap`](../../reference/cli/polywrap-cli) command-line tool has a [`deploy`](../../reference/cli/commands/deploy) command for publishing Wasm wrappers to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wrappers.io endpoint.

For more information, see [Configure Polywrap deployment pipeline](./deploy-pipeline) and the [`deploy`](../../reference/cli/commands/deploy) command reference documentation.

## Fleek
[Fleek](https://docs.fleek.co/) makes it easy to build websites and apps on the new open web.

[> Step-By-Step Guide](./deployment/fleek)

## Pinata
[Pinata](https://docs.pinata.cloud/) provides tools and infrastructure for all creators to easily create and manage content on IPFS.  

[> Step-By-Step Guide](./deployment/pinata)

## Crust Network
[Crust Network](https://wiki.crust.network/docs/en/crustAccount) provides a Web3.0 decentralized storage network for the Metaverse.  

[> Step-By-Step Guide](./deployment/crust)

## Aleph
[Aleph](https://docs.alephdata.org/) allows your blockchain enabled app to securely access trusted off-chain data or computation within a couple lines of code.

## Arweave
[Arweave](https://docs.arweave.org/info/) enables you to store documents and applications forever.
