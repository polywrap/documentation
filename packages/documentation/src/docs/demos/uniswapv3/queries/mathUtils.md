---
id: mathUtils
title: Math Utilities
---

### mostSignificantBit

_Returns the most significant bit of a positive integer, starting with first bit = 0_

```graphql
mostSignificantBit(
  x: BigInt! 
): UInt32!
```

### encodeSqrtRatioX96

_Returns the sqrt ratio as a Q64.96 corresponding to a given ratio of amount1 and amount0_

```graphql
encodeSqrtRatioX96(
  amount1: BigInt! # The numerator amount i.e., the amount of token1
  amount0: BigInt! # The denominator amount i.e., the amount of token0
): BigInt!
```

### mulDivRoundingUp

_Returns (a * b) / denominator_

```graphql
mulDivRoundingUp(
  a: BigInt! 
  b: BigInt! 
  denominator: BigInt! 
): BigInt!
```

### addDelta

_Returns x + y_

```graphql
addDelta(
  x: BigInt! 
  y: BigInt! 
): BigInt!
```

### getAmount0Delta

_Used to facilitate liquidity math using sqrtRatioX96 values_

```graphql
getAmount0Delta(
  sqrtRatioAX96: BigInt! 
  sqrtRatioBX96: BigInt! 
  liquidity: BigInt! 
  roundUp: Boolean! 
): BigInt!
```

### getAmount1Delta

_Used to facilitate liquidity math using sqrtRatioX96 values_

```graphql
getAmount1Delta(
  sqrtRatioAX96: BigInt! 
  sqrtRatioBX96: BigInt! 
  liquidity: BigInt! 
  roundUp: Boolean! 
): BigInt!
```

### getNextSqrtPriceFromInput

_Used to facilitate liquidity math using sqrtRatioX96 values_

```graphql
getNextSqrtPriceFromInput(
  sqrtPX96: BigInt! 
  liquidity: BigInt! 
  amountIn: BigInt! 
  zeroForOne: Boolean! 
): BigInt!
```

### getNextSqrtPriceFromOutput

_Used to facilitate liquidity math using sqrtRatioX96 values_

```graphql
getNextSqrtPriceFromOutput(
  sqrtPX96: BigInt! 
  liquidity: BigInt! 
  amountOut: BigInt! 
  zeroForOne: Boolean! 
): BigInt!
```
