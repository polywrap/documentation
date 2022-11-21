---
id: trade
title: Trade
---

## Imported types

### [Trade](../common-types#trade)

```graphql
type Trade {
  route: Route!
  inputAmount: TokenAmount!
  outputAmount: TokenAmount!
  tradeType: TradeType!
}
```

### [TradeOptions](../common-types#tradeoptions)

```graphql
type TradeOptions {
  allowedSlippage: String!
  recipient: String!
  unixTimestamp: UInt64!
  ttl: UInt32
  deadline: UInt32
  feeOnTransfer: Boolean
}
```

### [TradeType](../common-types#tradetype)

```graphql
enum TradeType {
  EXACT_INPUT
  EXACT_OUTPUT
}
```

## Query schemas

### tokenEquals

_Checks if the current instance is equal to another (has an identical chainId and address)._

```graphql
tokenEquals(token: Token!, other: Token!): Boolean!
```

### createTrade

_Creates a new trade._

```graphql
createTrade(
  route: Route!
  amount: TokenAmount!
  tradeType: TradeType!
): Trade!
```

### tradeExecutionPrice

_Calculates the average price that the trade would execute at._

```graphql
tradeExecutionPrice(
  trade: Trade!
): String!
```

### tradeNextMidPrice

_What the new mid price would be if the trade were to execute._

```graphql
tradeNextMidPrice(
  trade: Trade!
): String!
```

### tradeSlippage

_The slippage incurred by the trade. (strictly > 0.30%) result is a percent like 100.0%_

```graphql
tradeSlippage(
  trade: Trade!
): String!
```

### tradeMinimumAmountOut

_Trades the minimum amount out._

```graphql
tradeMinimumAmountOut(
  trade: Trade!
  slippageTolerance: String! # Float32!
): TokenAmount!
```

### tradeMaximumAmountIn

_Trades the maximum amount in._

```graphql
tradeMaximumAmountIn(
  trade: Trade!
  slippageTolerance: String! # Float32!
): TokenAmount!
```

### bestTradeExactIn

_Given a list of pairs, a fixed amount in, and token out, this method_
_returns the best maxNumResults trades that swap an input token amount to an_
_output token, making at most maxHops hops. The returned trades are sorted by_
_output amount, in decreasing order, and all share the given input amount._

```graphql
bestTradeExactIn(
  pairs: [Pair!]!
  amountIn: TokenAmount!
  tokenOut: Token!
  options: BestTradeOptions
): [Trade!]!
```

### bestTradeExactOut

_Similar to the above method, but targets a fixed output token amount. The_
_returned trades are sorted by input amount, in increasing order, and all share_
_the given output amount._

```graphql
bestTradeExactOut(
  pairs: [Pair!]!
  tokenIn: Token!
  amountOut: TokenAmount!
  options: BestTradeOptions
): [Trade!]!
```
