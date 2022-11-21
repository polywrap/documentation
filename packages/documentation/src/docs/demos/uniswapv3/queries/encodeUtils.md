---
id: encodeUtils
title: Encode Utilities
---

### toHex

_Converts a big int to a hex string_

```graphql
toHex(
  value: BigInt! 
): String!
```

### encodeRouteToPath

_Converts a route to a hex encoded path_

```graphql
encodeRouteToPath(
  route: Route! # The v3 path to convert to an encoded path
  exactOutput: Boolean! # Whether the route should be encoded in reverse, for making exact output swaps
): String!
```

### encodePermit

_Encodes arguments and returns transaction calldata to call selfPermit or selfPermitAllowed on an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
encodePermit(
  token: Token! 
  options: PermitOptions! 
): String!
```

### encodeUnwrapWETH9

_Encodes arguments and returns transaction calldata to call unwrapWETH9 or unwrapWETH9WithFee on an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
encodeUnwrapWETH9(
  amountMinimum: BigInt! 
  recipient: String! 
  feeOptions: FeeOptions 
): String!
```

### encodeSweepToken

_Encodes arguments and returns transaction calldata to call sweepToken or sweepTokenWithFee on an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
encodeSweepToken(
  token: Token! 
  amountMinimum: BigInt! 
  recipient: String! 
  feeOptions: FeeOptions 
): String!
```

### encodeRefundETH

_Encodes arguments and returns transaction calldata to call refundEth on an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
encodeRefundETH: String!
```

### encodeMulticall

_Encodes multiple calldatas into a single calldata for making multiple calls in one transaction using a contract implementing the necessary interface, such as an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
encodeMulticall(
  calldatas: String[]! 
): String!
```