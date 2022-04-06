---
id: router
title: Router
---

### swapCallParameters

_Encodes arguments and returns transaction calldata to make a swap on an Uniswap's V3 Router contract_

```graphql
swapCallParameters(
  trades: Trade[]! # Trades for which to produce call parameters
  options: SwapOptions! # Configuration options for the swap call
): MethodParameters!
```
