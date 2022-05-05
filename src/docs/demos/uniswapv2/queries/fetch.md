---
id: fetch
title: Fetch
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

### [TokenAmount](../common-types#tokenamount)

```graphql
type TokenAmount {
  token: Token!
  amount: String! # UInt256!
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

## Query schemas

### fetchTokenData

_Fetches token data._

```graphql
  fetchTokenData(
    chainId: ChainId!
    address: String!
    symbol: String
    name: String
  ): Token!
```

### fetchTotalSupply

_Fetches total supply._

```graphql
  fetchTotalSupply(
    token: Token!
  ): TokenAmount!
```

### fetchPairData

_Fetches pair data._

```graphql
  fetchPairData(
    token0: Token!
    token1: Token!
  ): Pair!
```
