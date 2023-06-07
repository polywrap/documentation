---
id: web3
title: Web3
---

Polywrap enables the **easy integration of Web3 protocols into any application**, including both read and write capabilities.

## Web3's Problem

We see traditional SDKs as a fundamental bottleneck for web3's adoption, let us explain...

In web3, any application *should* be able to interact with smart contract protocols such as Uniswap or Aave. To do this, application developers utilize software development kits (SDKs) to simplify this process.

However, traditional SDKs come with a number of issues:

- **Difficult to compose.** A lack of standards makes it difficult to mix-and-match.

![](/img/docs/introduction/01-composable.png)

- **Not portable.**  SDKs are language-specific, but the modern landscape of applications is more varied than ever: web, mobile, server, games, etc.

![](/img/docs/introduction/02-portable.png)

- **Not upgradable.** When traditional SDKs undergo a patch updates, the entire application needs to be rebuilt and redeployed, which doesn't scale to large web3 ecosystems.

## Polywrap's Solution ✨

Wraps offer a much better strategy for code reuse and composability than traditional SDKs. Wraps are:

- **Composable.**  Wraps are developed in a standardized way.  Standardization means Wraps can be easily composed, resulting in even more sophisticated Wraps.

![](/img/docs/introduction/03-composable.png)

- **Portable.** Wraps can run on any platform that has the Polywrap client installed. Now, web3 dev teams can build their SDKs as a Wrap, and application developers can integrate it across all platforms.

![](/img/docs/introduction/04-portable.png)

- **Updatable.** Wraps do not have to be bundled into applications. Instead they can be safely fetched and run at runtime. This allows applications to stay in-sync with web3 protocol upgrades.

## Web3 Hosting

Wraps can be easily deployed to the [InterPlanetary File System (IPFS)](/tutorials/build-and-deploy-wraps/deploy-to-ipfs.md), and published to a decentralized domain like the [Ethereum Name Service (ENS)](/tutorials/build-and-deploy-wraps/publish-to-ens.md).
