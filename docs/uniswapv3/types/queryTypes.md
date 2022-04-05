---
id: query-types
title: Query Types
---

### AddLiquidityOptions

_Union of MintOptions and IncreaseOptions; one of either recipient or tokenId is required._

```graphql
type AddLiquidityOptions {
  recipient: String # The account that should receive the minted NFT.
  createPool: Boolean # Creates pool if not initialized before mint. Ignored if recipient is not null.
  tokenId: BigInt # Indicates the ID of the position to increase liquidity for. Ignored if recipient is not null.
  slippageTolerance: String! 
  deadline: BigInt! 
  useNative: Token 
  token0Permit: PermitOptions 
  token1Permit: PermitOptions 
}
```

### ClaimOptions

_Options to specify when claiming rewards._

```graphql
type ClaimOptions {
  tokenId: BigInt! # The id of the NFT
  recipient: String! # Address to send rewards to.
  amount: BigInt # The amount of `rewardToken` to claim. 0 claims all.
}
```

### CollectOptions

_Options to specify when calling collectCallParameters(...) to collect liquidity provider rewards or removeCallParameters(...) to exit a liquidity position._

```graphql
type CollectOptions {
  tokenId: BigInt! # Indicates the ID of the position to collect for. Ignored when CollectOptions is as property of RemoveLiquidityOptions for use in removeCallParameters(...).
  expectedCurrencyOwed0: TokenAmount! # Expected value of tokensOwed0, including as-of-yet-unaccounted-for fees/liquidity value to be burned
  expectedCurrencyOwed1: TokenAmount! # Expected value of tokensOwed1, including as-of-yet-unaccounted-for fees/liquidity value to be burned
  recipient: String! # The account that should receive the tokens.
}
```

### CommonAddLiquidityOptions

_Options for producing the calldata to add liquidity._

```graphql
type CommonAddLiquidityOptions {
  slippageTolerance: String! # How much the pool price is allowed to move.
  deadline: BigInt! # When the transaction expires, in epoch seconds.
  useNative: Token # Whether to spend ether. If true, one of the pool tokens must be WETH, by default false
  token0Permit: PermitOptions # The optional permit parameters for spending token0
  token1Permit: PermitOptions # The optional permit parameters for spending token1
}
```

### FullWithdrawOptions

_Options to specify when withdrawing tokens_

```graphql
type FullWithdrawOptions {
  owner: String! # Set when withdrawing. The position will be sent to `owner` on withdraw.
  data: String # Set when withdrawing. `data` is passed to `safeTransferFrom` when transferring the position from contract back to owner.
  tokenId: BigInt! 
  recipient: String! 
  amount: BigInt 
}
```

### IncentiveKey

_Represents a unique staking program._

```graphql
type IncentiveKey {
  rewardToken: Token! # The token rewarded for participating in the staking program.
  pool: Pool! # The pool that the staked positions must provide in.
  startTime: BigInt! # The time when the incentive program begins.
  endTime: BigInt! # The time that the incentive program ends.
  refundee: String! # The address which receives any remaining reward tokens at `endTime`.
}
```

### NextTickResult

_Return value of nextInitializedTickWithinOneWord(...)_

```graphql
type NextTickResult {
  index: Int32! # Tick index of returned next tick
  found: Boolean! # True if the returned tick index represents an initialized tick, or false if max or min tick are returned instead
}
```

### NFTPermitOptions

_Permission parameters for NFT transfers, in case the transaction is being sent by an account that does not own the NFT_

```graphql
type NFTPermitOptions {
  v: PermitV! 
  r: String! 
  s: String! 
  deadline: BigInt! 
  spender: String! 
}
```

### PoolChangeResult

_Input or output amount and next pool state; return value of getPoolInputAmount(...) and getPoolOutputAmount(...)_

```graphql
type PoolChangeResult {
  amount: TokenAmount! # input or output amount resulting from simulated swap
  nextPool: Pool! # Pool state after simulated swap
}
```

### QuoteOptions

_Optional arguments to send to the quoter._

```graphql
type QuoteOptions {
  sqrtPriceLimitX96: BigInt # The optional price limit for the trade.
}
```

### RemoveLiquidityOptions

_Options for producing the calldata to exit a position._

```graphql
type RemoveLiquidityOptions {
  tokenId: BigInt! # The ID of the token to exit
  liquidityPercentage: String! # The percentage of position liquidity to exit.
  slippageTolerance: String! # How much the pool price is allowed to move.
  deadline: BigInt! # When the transaction expires, in epoch seconds.
  burnToken: Boolean # Whether the NFT should be burned if the entire position is being exited, by default false.
  permit: NFTPermitOptions # The optional permit of the token ID being exited, in case the exit transaction is being sent by an account that does not own the NFT
  collectOptions: CollectOptions! # Parameters to be passed on to collect; tokenId is ignored.
}
```

### SafeTransferOptions

_Options to specify when calling safeTransferFrom(...) to transfer an NFT_

```graphql
type SafeTransferOptions {
  sender: String! # The account sending the NFT.
  recipient: String! # The account that should receive the NFT.
  tokenId: BigInt! # The id of the token being sent.
  data: String # The optional parameter that passes data to the `onERC721Received` call for the staker
}
```

### TradeRoute

_Input used to create a trade_

```graphql
type TradeRoute {
  route: Route! # The route of the trade
  amount: TokenAmount! # The amount being passed in or out, depending on the trade type
}
```

