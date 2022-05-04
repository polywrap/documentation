---
id: swap
title: Swap
---

## Imported types

### [Token](../common-types#token)

```graphql
type Token {
  chainId: ChainId!
  address: String!
  currency: Currency!
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

### [TradeType](../common-types#trade-type)

```graphql
enum TradeType {
  EXACT_INPUT
  EXACT_OUTPUT
}
```

### [TxOverrides](../common-types#txoverrides)

```graphql
type TxOverrides {
  gasPrice: BigInt
  gasLimit: BigInt
}
```

### [ChainId](../common-types#chainid)

```graphql
enum ChainId {
  MAINNET
  ROPSTEN
  RINKEBY
  GOERLI
  KOVAN
}
```

## Mutation schemas

### swap

_Select token in and token out and amount for the swap._

```graphql
  swap (
    tokenIn: Token!
    tokenOut: Token!
    amount: BigInt!
    tradeType: TradeType!
    tradeOptions: TradeOptions!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### exec

_Executes the trade._

```graphql
  exec(
    trade: Trade!
    tradeOptions: TradeOptions!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### execCall

_Executes swap given swap parameters and chain ID._

```graphql
  execCall(
    parameters: SwapParameters!
    chainId: ChainId!
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```

### approve

_Approves tokens in the swap._

```graphql
  approve(
    token: Token!
    amount: BigInt
    txOverrides: TxOverrides
  ): Ethereum_TxReceipt!
```
