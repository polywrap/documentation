---
id: token
title: Token
---

### currencyEquals

_Returns true if the currencies are equivalent, false otherwise_

```graphql
currencyEquals(
  currencyA: Currency! 
  currencyB: Currency! 
): Boolean!
```

### tokenEquals

_Returns true if the tokens are equivalent, false otherwise_

```graphql
tokenEquals(
  tokenA: Token! 
  tokenB: Token! 
): Boolean!
```

### tokenAmountEquals

_Returns true if the token amounts are equivalent, false otherwise_

```graphql
tokenAmountEquals(
  tokenAmountA: TokenAmount! 
  tokenAmountB: TokenAmount! 
): Boolean!
```

### tokenSortsBefore

_Returns true if the address of tokenA would precede the address of token B when sorted alphabetically_

```graphql
tokenSortsBefore(
  tokenA: Token! 
  tokenB: Token! 
): Boolean!
```

### getEther

_Returns a native token (e.g. Ether) on the specified chain_

```graphql
getNative(
  chainId: ChainId! 
): Token!
```

### getWETH

_Returns a Wrapped Ether token on the specified chain_

```graphql
getWETH(
  chainId: ChainId! 
): Token!
```

### isNative

_Returns true if the token is native (e.g. Ether), false otherwise. A token representing Ether must have an empty string in its address field._

```graphql
isNative(
  token: Token! 
): Boolean!
```

### wrapToken

_If the input token is Ether, the return value is Wrapped Ether; otherwise, the return value is the same as the input value._

```graphql
wrapToken(
  token: Token! 
): Token!
```

### wrapAmount

_If the input token amount represents an amount of Ether, the return value represents the same amount in Wrapped Ether; otherwise, the return value is the same as the input value._

```graphql
wrapAmount(
  amount: TokenAmount! 
): TokenAmount!
```