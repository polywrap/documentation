---
id: pool
title: Pool
---

### createPool

_Constructs and validates a Pool_

```graphql
createPool(
  tokenA: Token! # The first token of the pool, irrespective of sort order
  tokenB: Token! # The second token of the pool, irrespective of sort order
  fee: FeeAmount! # Fee amount for swaps through the pool
  sqrtRatioX96: BigInt! # Encoded representation of current swap price
  liquidity: BigInt! # The total liquidity available in the pool
  tickCurrent: Int32! # Current pool tick
  ticks: Tick[] # A validated list of all ticks in the pool
): Pool!
```

### getPoolAddress

_Returns the Ethereum address of the Pool contract_

```graphql
getPoolAddress(
  tokenA: Token! # The first token of the pool, irrespective of sort order
  tokenB: Token! # The second token of the pool, irrespective of sort order
  fee: FeeAmount! # The fee tier of the pool
  initCodeHashManualOverride: String # Override the init code hash used to compute the pool address if necessary
): String!
```

### poolInvolvesToken

_Returns true if the token is in the Pool (i.e. pool.token0 or pool.token1)_

```graphql
poolInvolvesToken(
  pool: Pool! 
  token: Token! 
): Boolean!
```

### poolToken0Price

_Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0_

```graphql
poolToken0Price(
  token0: Token! # The first token of the pool, i.e. pool.token0
  token1: Token! # The second token of the pool, i.e. pool.token1
  sqrtRatioX96: BigInt! # Encoded representation of the current price in the pool, i.e. pool.sqrtRatioX96
): Price!
```

### poolToken1Price

_Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1_

```graphql
poolToken1Price(
  token0: Token! # The first token of the pool, i.e. pool.token0
  token1: Token! # The second token of the pool, i.e. pool.token1
  sqrtRatioX96: BigInt! # Encoded representation of the current price in the pool, i.e. pool.sqrtRatioX96
): Price!
```

### poolPriceOf

_Returns the price of the given token in terms of the other token in the pool_

```graphql
poolPriceOf(
  pool: Pool! # Pool that involves the token
  token: Token! # The token to return the price of
): Price!
```

### poolChainId

_Returns the chain ID of the tokens in the pool_

```graphql
poolChainId(
  pool: Pool! 
): ChainId!
```

### getPoolOutputAmount

_Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade_

```graphql
getPoolOutputAmount(
  pool: Pool! # Pool that involves input and output tokens
  inputAmount: TokenAmount! # The input amount for which to quote the output amount
  sqrtPriceLimitX96: BigInt # The Q64.96 sqrt price limit
): PoolChangeResult!
```

### getPoolInputAmount

_Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade_

```graphql
getPoolInputAmount(
  pool: Pool! # Pool that involves input and output tokens
  outputAmount: TokenAmount! # The output amount for which to quote the input amount
  sqrtPriceLimitX96: BigInt # The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap.
): PoolChangeResult!
```

### getPoolTickSpacing

_Returns the tick spacing of ticks in the pool_

```graphql
getPoolTickSpacing(
  pool: Pool! 
): Int32!
```