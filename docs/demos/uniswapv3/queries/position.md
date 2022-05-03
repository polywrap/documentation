---
id: position
title: Position
---

### createPosition

_Constructs and validates a liquidity Position for a given Pool with the given liquidity_

```graphql
createPosition(
  pool: Pool! # For which pool the liquidity is assigned
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  liquidity: BigInt! # The amount of liquidity that is in the position
): Position!
```

### createPositionFromAmounts

_Computes the maximum amount of liquidity received for a given amount of token0, token1, and the prices at the tick boundaries_

```graphql
createPositionFromAmounts(
  pool: Pool! # The pool for which the position should be created
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  amount0: BigInt! # The amount of the first token of the pool
  amount1: BigInt! # The amount of the second token of the pool
  useFullPrecision: Boolean! # If false, liquidity will be maximized according to what the router can calculate, not what core can theoretically support
): Position!
```

### createPositionFromAmount0

_Computes a position with the maximum amount of liquidity received for a given amount of token0, assuming an unlimited amount of token1_

```graphql
createPositionFromAmount0(
  pool: Pool! # The pool for which the position should be created
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  amount0: BigInt! # The desired amount of token0
  useFullPrecision: Boolean! # If false, liquidity will be maximized according to what the router can calculate, not what core can theoretically support
): Position!
```

### createPositionFromAmount1

_Computes a position with the maximum amount of liquidity received for a given amount of token1, assuming an unlimited amount of token0. Always uses full precision._

```graphql
createPositionFromAmount1(
  pool: Pool! # The pool for which the position should be created
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  amount1: BigInt! # The desired amount of token1
): Position!
```

### positionToken0PriceLower

_Returns the price of token0 at the lower tick_

```graphql
positionToken0PriceLower(
  pool: Pool! # The pool for which the liquidity is assigned
  tickLower: Int32! # The lower tick of the position
): Price!
```

### positionToken0PriceUpper

_Returns the price of token0 at the upper tick_

```graphql
positionToken0PriceUpper(
  pool: Pool! # The pool for which the liquidity is assigned
  tickUpper: Int32! # The upper tick of the position
): Price!
```

### positionAmount0

_Returns the amount of token0 that this position's liquidity could be burned for at the current pool price_

```graphql
positionAmount0(
  pool: Pool! # For which pool the liquidity is assigned
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  liquidity: BigInt! # The amount of liquidity that is in the position
): TokenAmount!
```

### positionAmount1

_Returns the amount of token1 that this position's liquidity could be burned for at the current pool price_

```graphql
positionAmount1(
  pool: Pool! # For which pool the liquidity is assigned
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  liquidity: BigInt! # The amount of liquidity that is in the position
): TokenAmount!
```

### mintAmounts

_Returns the minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool_

```graphql
mintAmounts(
  pool: Pool! # For which pool the liquidity is assigned
  tickLower: Int32! # The lower tick of the position
  tickUpper: Int32! # The upper tick of the position
  liquidity: BigInt! # The amount of liquidity that is in the position
): MintAmounts!
```

### mintAmountsWithSlippage

_Returns the minimum amounts that must be sent in order to safely mint the amount of liquidity held by the position with the given slippage tolerance_

```graphql
mintAmountsWithSlippage(
  position: Position! # Position for which to calculate mint amounts
  slippageTolerance: String! # Tolerance of unfavorable slippage from the current price
): MintAmounts!
```

### burnAmountsWithSlippage

_Returns the minimum amounts that should be requested in order to safely burn the amount of liquidity held by the position with the given slippage tolerance_

```graphql
burnAmountsWithSlippage(
  position: Position! # Position for which to calculate burn amounts
  slippageTolerance: String! # Tolerance of unfavorable slippage from the current price
): MintAmounts!
```
