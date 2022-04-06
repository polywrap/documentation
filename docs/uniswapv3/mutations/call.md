---
id: call
title: Call
---

### approve

_Call the approve(...) function of an ERC20 token contract on-chain, allowing the Uniswap router contract to transfer tokens_

```graphql
approve(
  token: Token! # Token for which to approve the Uniswap router contract to transfer
  amount: BigInt # The amount to approve for transfer; defaults to maximum amount if null
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```

### execCall

_Send an Ethereum transaction to the given address_

```graphql
execCall(
  parameters: MethodParameters! # Transaction calldata and Ether value
  address: String! # Address of the target Ethereum contract
  chainId: ChainId! # Id of the chain on which to execute the transaction
  gasOptions: GasOptions # Transaction gas configuration
): Ethereum_TxResponse!
```