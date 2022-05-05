---
id: pair
title: Pair
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

## Query schemas

### pairAddress

_Returns address of pair liquidity token contract._

```graphql
  pairAddress(
    token0: Token!
    token1: Token!
  ): String!
```

### pairLiquidityToken

_Returns pair liquidity token._

```graphql
  pairLiquidityToken(
    pair: Pair!
  ): Token!
```

### pairReserves

_Returns reserves for pair tokens in sorted order._

```graphql
  pairReserves(
    pair: Pair!
  ): [TokenAmount!]!
```

### pairToken0Price

_Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0._

```graphql
  pairToken0Price(
    pair: Pair!
  ): String!
```

### pairToken1Price

_Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1._

```graphql
  pairToken1Price(
    pair: Pair!
  ): String!
```

### pairOutputAmount

_Pricing function for exact input amounts. Returns maximum output amount, based on current reserves, if the trade were executed._

```graphql
  pairOutputAmount(
    pair: Pair!
    inputAmount: TokenAmount!
  ): TokenAmount!
```

### pairOutputNextPair

_Pricing function for exact input amounts. Returns next pair state, based on current reserves, if the trade were executed._

```graphql
  pairOutputNextPair(
    pair: Pair!
    inputAmount: TokenAmount!
  ): Pair!
```

### pairInputNextPair

_Pricing function for exact output amounts. Returns next pair state, based on current reserves, if the trade were executed._

```graphql
  pairInputNextPair(
    pair: Pair!
    outputAmount: TokenAmount!
  ): Pair!
```

### pairInputAmount

_Pricing function for exact output amounts. Returns minimum input amount, based on current reserves, if the trade were executed._

```graphql
  pairInputAmount(
    pair: Pair!
    outputAmount: TokenAmount!
  ): TokenAmount!
```

### pairLiquidityMinted

_Calculates the exact amount of liquidity tokens minted from a given amount of token0 and token1._
_totalSupply is total supply of pair liquidity token._
_totalSupply must be looked up on-chain._
_The value returned from this function cannot be used as an input to getLiquidityValue._

```graphql
  pairLiquidityMinted(
    pair: Pair!
    totalSupply: TokenAmount!
    tokenAmount0: TokenAmount!
    tokenAmount1: TokenAmount!
  ): TokenAmount
```

### pairLiquidityValue

_Calculates the exact amount of token0 or token1 that the given amount of liquidity tokens represent._
_totalSupply is total supply of pair liquidity token._
_totalSupply must be looked up on-chain._
_If the protocol charge is on, feeOn must be set to true, and kLast must be provided from an on-chain lookup._
_Values returned from this function cannot be used as inputs to getLiquidityMinted._

```graphql
  pairLiquidityValue(
    pair: Pair!
    totalSupply: TokenAmount!
    liquidity: TokenAmount!
    feeOn: Boolean
    kLast: BigInt
  ): [TokenAmount!]!
```
