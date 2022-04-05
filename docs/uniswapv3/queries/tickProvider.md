---
id: tickProvider
title: TickList Data Provider
---

### validateTickList

_Validates a tick list, returning true of the tick list is valid. Throws an exception if the tick list is not valid._

```graphql
validateTickList(
  ticks: Tick[]! # A list of ticks to validate
  tickSpacing: Int32! # The tick spacing of the list
): Boolean!
```

### getTick

_Returns the tick at the requested index_

```graphql
getTick(
  tickDataProvider: Tick[]! # A list of ticks to search
  tickIndex: Int32! # The tick index of the requested tick
): Tick!
```

### nextInitializedTickWithinOneWord

_Returns next initialized tick, or max or min tick. Returns true if a tick is found at index._

```graphql
nextInitializedTickWithinOneWord(
  tickDataProvider: Tick[]! # Tick list to search
  tick: Int32! # Current tick index
  lte: Boolean! # True of returned tick index should be less than or equal to current tick index
  tickSpacing: Int32! # Tick spacing of tick list
): NextTickResult!
```