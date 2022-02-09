---
id: trade
title: Trade
---

### createTradeExactIn

_Constructs an exact in trade with the given amount in and route_

```graphql
createTradeExactIn(
  tradeRoute: TradeRoute! # The route of the exact in trade and the amount being passed in
): Trade!
```

### createTradeExactOut

_Constructs an exact out trade with the given amount out and route_

```graphql
createTradeExactOut(
  tradeRoute: TradeRoute! # The route of the exact out trade and the amount returned
): Trade!
```

### createTradeFromRoute

_Constructs a trade by simulating swaps through the given route_

```graphql
createTradeFromRoute(
  tradeRoute: TradeRoute! # The route to swap through and the amount specified, either input or output, depending on the trade type
  tradeType: TradeType! # Whether the trade is an exact input or exact output swap
): Trade!
```

### createTradeFromRoutes

_Constructs a trade by simulating swaps through the given routes_

```graphql
createTradeFromRoutes(
  tradeRoutes: TradeRoute[]! # The routes to swap through and how much of the amount should be routed through each
  tradeType: TradeType! # Whether the trade is an exact input or exact output swap
): Trade!
```

### createUncheckedTrade

_Creates a trade without computing the result of swapping through the route. Useful when you have simulated the trade elsewhere and do not have any tick data_

```graphql
createUncheckedTrade(
  swap: TradeSwap! # The route to swap through, the amount being passed in, and the amount returned when the trade is executed
  tradeType: TradeType! # The type of the trade, either exact in or exact out
): Trade!
```

### createUncheckedTradeWithMultipleRoutes

_Creates a trade without computing the result of swapping through the routes. Useful when you have simulated the trade elsewhere and do not have any tick data_

```graphql
createUncheckedTradeWithMultipleRoutes(
  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed
  tradeType: TradeType! # The type of the trade, either exact in or exact out
): Trade!
```

### tradeInputAmount

_The input amount for the trade assuming no slippage_

```graphql
tradeInputAmount(
  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed
): TokenAmount!
```

### tradeOutputAmount

_The output amount for the trade assuming no slippage_

```graphql
tradeOutputAmount(
  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed
): TokenAmount!
```

### tradeExecutionPrice

_The price expressed in terms of output amount/input amount_

```graphql
tradeExecutionPrice(
  inputAmount: TokenAmount! # The trade input amount, e.g. from Trade object or tradeInputAmount(...)
  outputAmount: TokenAmount! # The trade output amount, e.g. from Trade object or tradeOutputAmount(...)
): Price!
```

### tradePriceImpact

_Returns the percent difference between the route's mid price and the price impact_

```graphql
tradePriceImpact(
  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed
  outputAmount: TokenAmount! # The trade output amount, e.g. from Trade object or tradeOutputAmount(...)
): Fraction!
```

### tradeMinimumAmountOut

_Get the minimum amount that must be received from the trade for the given slippage tolerance_

```graphql
tradeMinimumAmountOut(
  slippageTolerance: String! # The tolerance of unfavorable slippage from the execution price of this trade; a decimal number between 0 and 1 (e.g. '0.03') that represents a percentage
  amountOut: TokenAmount! # The output amount of the trade, before slippage, e.g. from Trade object or tradeOutputAmount(...)
  tradeType: TradeType! # The type of the trade, either exact in or exact out
): TokenAmount!
```

### tradeMaximumAmountIn

_Get the maximum amount in that can be spent via the trade for the given slippage tolerance_

```graphql
tradeMaximumAmountIn(
  slippageTolerance: String! # The tolerance of unfavorable slippage from the execution price of this trade; a decimal number between 0 and 1 (e.g. '0.03') that represents a percentage
  amountIn: TokenAmount! # The input amount of the trade, before slippage, e.g. from Trade object or tradeInputAmount(...)
  tradeType: TradeType! # The type of the trade, either exact in or exact out
): TokenAmount!
```

### tradeWorstExecutionPrice

_Return the execution price after accounting for slippage tolerance_

```graphql
tradeWorstExecutionPrice(
  trade: Trade! # Trade for which to calculate execution price
  slippageTolerance: String! # The allowed tolerated slippage
): Price!
```

### bestTradeExactIn

_Given a list of pools, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
amount to an output token, making at most `maxHops` hops.
Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
the amount in among multiple routes._

```graphql
bestTradeExactIn(
  pools: Pool[]! # The pools to consider in finding the best trade
  amountIn: TokenAmount! # Exact amount of input currency to spend
  tokenOut: Token! # The desired currency out
  options: BestTradeOptions # Options used when determining the best trade
): Trade[]!
```

### bestTradeExactOut

_similar to bestTradeExactIn(...) but instead targets a fixed output amount
given a list of pools, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
to an output token amount, making at most `maxHops` hops
note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
the amount in among multiple routes._

```graphql
bestTradeExactOut(
  pools: Pool[]! # The pools to consider in finding the best trade
  tokenIn: Token! # The currency to spend
  amountOut: TokenAmount! # The desired currency amount out
  options: BestTradeOptions # Options used when determining the best trade
): Trade[]!
```