---
id: deploy
title: Deploy Pool
---

### deployPool

_Deploy a pool contract on-chain_

```graphql
deployPool(
  pool: Pool! # A representation of the pool to deploy
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```

### deployPoolFromTokens

_Deploy a pool contract on chain for the given tokens and fee amount_

```graphql
deployPoolFromTokens(
  tokenA: Token! # The first token of the pool, irrespective of sort order
  tokenB: Token! # The second token of the pool, irrespective of sort order
  fee: FeeAmount! # The fee tier of the pool
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```