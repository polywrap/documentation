---
id: route
title: Route
---


### createRoute

_Constructs and validates a Route_

```graphql
createRoute(
  pools: Pool[]! # The ordered list of pools from which to construct the route
  inToken: Token! # The input token
  outToken: Token! # The output token
): Route!
```

### routeChainId

_Returns the chain id of the tokens in the route_

```graphql
routeChainId(
  route: Route! 
): ChainId!
```

### routeMidPrice

_Returns the mid price of the route_

```graphql
routeMidPrice(
  pools: Pool[]! # The ordered list of pools from which to calculate the mid price
  inToken: Token! # The input token
  outToken: Token! # The output token
): Price!
```