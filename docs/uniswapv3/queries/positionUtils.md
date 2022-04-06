---
id: positionUtils
title: Position Utilities
---

### maxLiquidityForAmounts

_Computes the maximum amount of liquidity received for a given amount of token0, token1, and the prices at the tick boundaries._

```graphql
maxLiquidityForAmounts(
  sqrtRatioCurrentX96: BigInt! # Encoded representation of the current price
  sqrtRatioAX96: BigInt! # Encoded representation of the price at lower tick boundary
  sqrtRatioBX96: BigInt! # Encoded representation of the price at upper tick boundary
  amount0: BigInt! # Amount for the first token of the pool
  amount1: BigInt! # Amount for the second token of the pool
  useFullPrecision: Boolean! # If false, liquidity will be maximized according to what the router can calculate, not what core can theoretically support
): BigInt!
```
