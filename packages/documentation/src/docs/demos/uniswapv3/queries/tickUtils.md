---
id: tickUtils
title: Tick Utilities
---

### nearestUsableTick

_Returns the closest tick that is nearest a given tick and usable for the given tick spacing_

```graphql
nearestUsableTick(
  tick: Int32! # The target tick
  tickSpacing: Int32! # The spacing of the pool
): Int32!
```

### tickToPrice

_Returns a price object corresponding to the input tick and the base/quote token. Inputs must be tokens because the address order is used to interpret the price represented by the tick._

```graphql
tickToPrice(
  baseToken: Token! # The base token of the price
  quoteToken: Token! # The quote token of the price
  tick: Int32! # The tick for which to return the price
): Price!
```

### priceToClosestTick

_Returns the first tick for which the given price is greater than or equal to the tick price._

```graphql
priceToClosestTick(
  price: Price! # Price for which to return the closest tick that represents a price less than or equal to the input price, i.e. the price of the returned tick is less than or equal to the input price.
Note that a string price is not used as input here, so the 'price' property of the Price type can have any value without affecting the results.
): Int32!
```

### tickIsBelowSmallest

_Returns true if the tick index is smaller than all tick indices in the list_

```graphql
tickIsBelowSmallest(
  ticks: Tick[]! # Tick list to check
  tick: Int32! # Input tick index
): Boolean!
```

### tickIsAtOrAboveLargest

_Returns true if the tick index is greater than or equal to all tick indices in the list_

```graphql
tickIsAtOrAboveLargest(
  ticks: Tick[]! # Tick list to check
  tick: Int32! # Input tick index
): Boolean!
```

### nextInitializedTick

_Returns next initialized tick following the input tick_

```graphql
nextInitializedTick(
  ticks: Tick[]! # Tick list to check
  tick: Int32! # Input tick index
  lte: Boolean! # If true, searches list for next initialized tick that has index less than or equal to the input tick index
): Tick!
```

### tickListIsSorted

_Returns true if a tick list is sorted by tick index_

```graphql
tickListIsSorted(
  ticks: Tick[]! # The tick list
): Boolean!
```

### getSqrtRatioAtTick

_Returns the sqrt ratio as a Q64.96 for the given tick. The sqrt ratio is computed as sqrt(1.0001)^tick_

```graphql
getSqrtRatioAtTick(
  tick: Int32! # The tick for which to compute the sqrt ratio
): BigInt!
```

### getTickAtSqrtRatio

_Returns the tick corresponding to a given sqrt ratio, such that getSqrtRatioAtTick(tick) <= sqrtRatioX96 and getSqrtRatioAtTick(tick + 1) > sqrtRatioX96_

```graphql
getTickAtSqrtRatio(
  sqrtRatioX96: BigInt! # The sqrt ratio as a Q64.96 for which to compute the tick
): Int32!
```
