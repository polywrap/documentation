---
id: swap
title: Swap
---

### execSwap

_Perform an on-chain swap with one or more trades in a single transaction_

```graphql
execSwap(
  trades: Trade[]! # Trades to encode into calldata
  swapOptions: SwapOptions! # Swap configuration
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```

### swap

_Perform an on-chain swap within a single pool by using token and fee amount information to find the correct pool_

```graphql
swap(
  inToken: Token! # Input token of the pool
  outToken: Token! # Output token of the pool
  fee: FeeAmount! # Fee amount of the pool being used for the swap
  amount: BigInt! # Amount being swapped in or out, depending on trade type
  tradeType: TradeType! # Type of trade, either exact input or exact output
  swapOptions: SwapOptions! # Swap configuration
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```

### swapWithPool

_Perform an on-chain swap using a single pool at provided address; requires ERC20-compliant input and output (i.e. no Ether)_

```graphql
swapWithPool(
  address: String! # Ethereum address of the pool used for the swap
  amount: TokenAmount! # Token amount being swapped in or out, depending on trade type
  tradeType: TradeType! # Type of trade, either exact input or exact output
  swapOptions: SwapOptions! # Swap configuration
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```