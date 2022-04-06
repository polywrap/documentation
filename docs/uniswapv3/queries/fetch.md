---
id: fetch
title: Fetch
---

### fetchToken

_Returns token object constructed from the on-chain token contract at the given address_

```graphql
fetchToken(
  address: String! # The Ethereum address of token's ERC20 contract
  chainId: ChainId! # The id of the chain to be queried
): Token!
```

### fetchPoolFromTokens

_Returns pool object constructed from the on-chain pool contract associated with the tokens and fee amount_

```graphql
fetchPoolFromTokens(
  tokenA: Token! # A token in the pool
  tokenB: Token! # The other token in the pool
  fee: FeeAmount! # The pool's fee amount
  fetchTicks: Boolean! # If true, the full list of pool ticks will be fetched
): Pool!
```

### fetchPoolFromAddress

_Returns pool object constructed from the on-chain pool contract at the given address_

```graphql
fetchPoolFromAddress(
  address: String! # The Ethereum address of the pool contract
  chainId: ChainId! # The id of the chain to be queried
  fetchTicks: Boolean! # If true, the full list of pool ticks will be fetched
): Pool!
```

### fetchTickList

_Returns array of ticks from the on-chain pool contract at the given address_

```graphql
fetchTickList(
  address: String! # The Ethereum address of the pool contract
  chainId: ChainId! # The id of the chain to be queried
): Tick[]!
```