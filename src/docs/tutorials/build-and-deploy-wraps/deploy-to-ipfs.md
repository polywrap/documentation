---
id: deploy-to-ipfs
title:  Deploy to IPFS
---

There are multiple ways that can be used to deploy your newly created wrap package
to IPFS, enabling other apps to integrate your wrap:

## `polywrap` CLI
The [`polywrap`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli) CLI has a [`deploy`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#deploy--d) command for publishing Wasm wraps to IPFS and ENS. IPFS publishing is done via a [wrap-persistence-node endpoint](https://www.npmjs.com/package/@nerfzael/wrap-persistence-node). By default it publishes to the public https://ipfs.wraps.io endpoint.

For more information, see [Configure Polywrap deployment pipeline](./deploy-pipeline) and the [`deploy`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#deploy--d) command reference documentation.

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
