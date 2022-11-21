---
id: poolUtils
title: Pool Utilities
---

### computePoolAddress

_Computes a pool address_

```graphql
computePoolAddress(
  factoryAddress: String! # The Uniswap V3 factory address
  tokenA: Token! # The first token of the pool, irrespective of sort order
  tokenB: Token! # The second token of the pool, irrespective of sort order
  fee: FeeAmount! # The fee tier of the pool
  initCodeHashManualOverride: String # Override the init code hash used to compute the pool address if necessary
): String!
```