---
id: nfpm
title: Nonfungible Position Manager
---

### createCallParameters

_Returns calldata for creating a pool on-chain using an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
createCallParameters(
  pool: Pool! # An off-chain representation of the pool to create on-chain
): MethodParameters!
```

### addCallParameters

_Returns calldata for minting or adding liquidity to a pool on-chain using an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol. Optionally creates the pool if it doesn't exist._

```graphql
addCallParameters(
  position: Position! # Liquidity position to add to pool
  options: AddLiquidityOptions! # Required transaction configuration
): MethodParameters!
```

### collectCallParameters

_Returns calldata for collecting liquidity provider rewards using an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
collectCallParameters(
  options: CollectOptions! # Required transaction configuration
): MethodParameters!
```

### removeCallParameters

_Returns calldata for completely or partially exiting a liquidity position using an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
removeCallParameters(
  position: Position! # The position to exit
  options: RemoveLiquidityOptions! # Additional information necessary for generating the calldata
): MethodParameters!
```

### safeTransferFromParameters

_Returns calldata for safely transferring an NFT using an instance of Uniswap's NonfungiblePositionManager contract: https://github.com/Uniswap/v3-periphery/blob/main/contracts/NonfungiblePositionManager.sol_

```graphql
safeTransferFromParameters(
  options: SafeTransferOptions! # Required transaction configuration
): MethodParameters!
```