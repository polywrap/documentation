---
id: route
title: Route
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

## Query schemas

### createRoute

_Creates a route._

```graphql
  createRoute(
    pairs: [Pair!]!
    input: Token!
    output: Token
  ): Route!
```

### routePath

_Returns the full path from input token to output token._

```graphql
  routePath(
    pairs: [Pair!]!
    input: Token!
  ): [Token!]!
```

### routeMidPrice

_Helper function for use in routeMidPrice and trade query functions._

```graphql
  routeMidPrice(
    route: Route!
  ): String!
```
