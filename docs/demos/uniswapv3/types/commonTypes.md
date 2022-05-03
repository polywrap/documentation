---
id: common-types
title: Common Types
---

### BestTradeOptions

_Options used when determining the best trade in bestTradeExactIn(...) and bestTradeExactOut(...)_

```graphql
type BestTradeOptions {
  maxNumResults: UInt32 # Maximum number of results to return
  maxHops: UInt32 # Maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pool
}
```

### Currency

_Describes a token_

```graphql
type Currency {
  decimals: UInt8! # Token decimals
  symbol: String # Token symbol
  name: String # Token name
}
```

### FeeOptions

_Fee configuration for encodeUnwrapWETH9(...) and encodeSweepToken(...)_

```graphql
type FeeOptions {
  fee: String! # The percent of the output that will be taken as a fee.
  recipient: String! # The recipient of the fee.
}
```

### Fraction

_Represents fraction, typically a percent._

```graphql
type Fraction {
  numerator: BigInt! # Numerator of fraction
  denominator: BigInt! # Denominator of fraction
  quotient: String! # A decimal string representation of the fraction
}
```

### MethodParameters

_Transaction calldata and an ether value to be sent with the transaction_

```graphql
type MethodParameters {
  calldata: String! # The hex encoded calldata to perform the given operation
  value: String! # The amount of ether (wei) to send in hex.
}
```

### MintAmounts

_The minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool_

```graphql
type MintAmounts {
  amount0: BigInt! # Amount of the first token in the pool
  amount1: BigInt! # Amount of the second token in the pool
}
```

### PermitOptions

_Parameters for a permit allowing the transfer of tokens. Either amount and deadline OR nonce and expiry are required._

```graphql
type PermitOptions {
  v: PermitV! 
  r: String! 
  s: String! 
  amount: BigInt 
  deadline: BigInt 
  nonce: BigInt 
  expiry: BigInt 
}
```

### Pool

_A liquidity pool involving two tokens which can be exchanged for a price determined by a price curve and market dynamics_

```graphql
type Pool {
  token0: Token! # The first token of the pool
  token1: Token! # The second token of the pool
  fee: FeeAmount! # The fee amount liquidity providers receive as a share of swaps made in the pool
  sqrtRatioX96: BigInt! # An encoded representation of the current swap price
  liquidity: BigInt! # The total liquidity available in the pool
  tickCurrent: Int32! # The current tick
  tickDataProvider: Tick[]! # A list of all ticks in the pool
  token0Price: Price! # The current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0
  token1Price: Price! # The current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1
}
```

### Position

_A liquidity position between two ticks in a pool_

```graphql
type Position {
  pool: Pool! # The pool on which the position is held
  tickLower: Int32! # The lower tick, marking the lower boundary of the position
  tickUpper: Int32! # The upper tick, marking the upper boundary of the position
  liquidity: BigInt! # The maximum amount of liquidity received for a given amount of token0, token1, and the prices at the tick boundaries
  token0Amount: TokenAmount! # The amount in this position of the first token of the pool
  token1Amount: TokenAmount! # The amount in this position of the second token of the pool
  mintAmounts: MintAmounts! # The minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool
  token0PriceLower: Price! # The price of token0 at the lower tick
  token0PriceUpper: Price! # The price of token0 at the upper tick
}
```

### Price

_Represents price of a token in terms of another token. When used as a function argument, the 'price' property is ignored._

```graphql
type Price {
  baseToken: Token! # The base token of the price
  quoteToken: Token! # The quote token of the price
  denominator: BigInt! # Amount of base token used to calculate price
  numerator: BigInt! # Amount of quote token used to calculate price
  price: String! # A decimal string representation of the price
}
```

### Route

_An ordered path of pools through which a swap can occur_

```graphql
type Route {
  pools: Pool[]! # A list of pools, wherein each pool in the list has a token in common with its adjacent pool(s)
  path: Token[]! # The path of tokens that are swapped through the pools
  input: Token! # The input token, where the route begins
  output: Token! # The output token, where the route ends
  midPrice: Price! # The mid price of the output token, in terms of the input token, for this route
}
```

### SwapOptions

_Configuration for creating swap transaction calldata using swapCallParameters(...)_

```graphql
type SwapOptions {
  slippageTolerance: String! # How much the execution price is allowed to move unfavorably from the trade execution price.
  recipient: String! # The account that should receive the output.
  deadline: BigInt! # When the transaction expires, in epoch seconds.
  inputTokenPermit: PermitOptions # The optional permit parameters for spending the input.
  sqrtPriceLimitX96: BigInt # The optional price limit for the trade.
  fee: FeeOptions # Optional information for taking a fee on output.
}
```

### Tick

_A pool tick marks a section of the price curve. A liquidity provider may hold a position on a tick, rather than the full curve._

```graphql
type Tick {
  index: Int32! # Tick index
  liquidityGross: BigInt! # Gross liquidity in Pool at tick position
  liquidityNet: BigInt! # Net liquidity in Pool at tick position
}
```

### Token

_ERC20-compliant token or Ether_

```graphql
type Token {
  chainId: ChainId! # Id of chain where token exists
  address: String! # Address of token's ERC20 contract
  currency: Currency! # Token description
}
```

### TokenAmount

_An amount of a token_

```graphql
type TokenAmount {
  token: Token! # Token
  amount: BigInt! # Raw amount of the token, not adjusted for the token's decimals
}
```

### Trade

_A trade contains the information necessary to create an on-chain exchange of tokens_

```graphql
type Trade {
  swaps: TradeSwap[]! # A list of swaps to be executed atomically, all of which must have the same input and output tokens
  tradeType: TradeType! # Type of trade, either exact input or exact output
  inputAmount: TokenAmount! # The total input amount (sum of input amounts in swaps)
  outputAmount: TokenAmount! # The total output amount (sum of output amounts in swaps)
  executionPrice: Price! # The price of the trade, in terms of the input token
  priceImpact: Fraction! # The percent difference between the route's mid price and the price impact
}
```

### TradeSwap

_A route, input, and output amount that compose the core elements of a trade_

```graphql
type TradeSwap {
  route: Route! # The route of the trade
  inputAmount: TokenAmount! # The amount being passed in
  outputAmount: TokenAmount! # The amount returned by the trade when executed
}
```
