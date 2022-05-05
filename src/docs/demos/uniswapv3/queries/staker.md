---
id: staker
title: Staker
---

### collectRewards

_Returns transaction calldata for calling 'unstakeToken', 'claimReward', and 'stakeToken' in a single transaction on Uniswap's Staker contract.
Note:  A `tokenId` can be staked in many programs but to claim rewards and continue the program you must unstake, claim, and then restake._

```graphql
collectRewards(
  incentiveKeys: IncentiveKey[]! # An array of IncentiveKeys that `tokenId` is staked in; claims rewards for each program.
  options: ClaimOptions! # ClaimOptions to specify tokenId, recipient, and amount wanting to collect. Note that you can only specify one amount and one recipient across the various programs if you are collecting from multiple programs at once.
): MethodParameters!
```

### withdrawToken

_Returns transaction calldata for unstaking, claiming, and withdrawing in a single transaction on Uniswap's Staker contract._

```graphql
withdrawToken(
  incentiveKeys: IncentiveKey[]! # A list of incentiveKeys to unstake from. Should include all incentiveKeys (unique staking programs) that `options.tokenId` is staked in.
  options: FullWithdrawOptions! # Options for producing claim calldata and withdraw calldata. Can't withdraw without unstaking all programs for `tokenId`.
): MethodParameters!
```

### encodeDeposit

_Returns an encoded IncentiveKey as a string_

```graphql
encodeDeposit(
  incentiveKeys: IncentiveKey[]! # An array of IncentiveKeys to be encoded and used in the data parameter in `safeTransferFrom`
): String!
```