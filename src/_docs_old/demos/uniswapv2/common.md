---
id: common-types
title: 'Common GraphQL Types'
---

**Common GraphQL types** represent types that are used by both of Uniswap v2 Web3API's methods.

## Enumeration Types

### ChainId

```graphql
enum ChainId {
  MAINNET
  ROPSTEN
  RINKEBY
  GOERLI
  KOVAN
}
```

### TradeType

```graphql
enum TradeType {
  EXACT_INPUT
  EXACT_OUTPUT
}
```

### Rounding

```graphql
enum Rounding {
  ROUND_DOWN
  ROUND_HALF_UP
  ROUND_UP
}
```

## Common Types

### TradeOptions

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

### Token

```graphql
type Token {
  chainId: ChainId!
  address: String!
  currency: Currency!
}
```

### Currency

```graphql
type Currency {
  decimals: UInt8!
  symbol: String
  name: String
}
```

### TokenAmount

```graphql
type TokenAmount {
  token: Token!
  amount: String! # UInt256!
}
```

### Pair

```graphql
type Pair {
  tokenAmount0: TokenAmount!
  tokenAmount1: TokenAmount!
}
```

### Route

```graphql
type Route {
  path: [Token!]!
  pairs: [Pair!]!
  input: Token!
  output: Token!
}
```

### Trade

```graphql
type Trade {
  route: Route!
  inputAmount: TokenAmount!
  outputAmount: TokenAmount!
  tradeType: TradeType!
}
```

### Swap Parameters

```graphql
type SwapParameters {
  methodName: String!
  args: [String!]!
  value: String!
}
```

```graphql
type TxOverrides {
  gasPrice: BigInt
  gasLimit: BigInt
}
```
