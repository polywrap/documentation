# $start: quickstart-py-import-init-client
from polywrap import (
    Uri,  # Required to construct a valid wrap URI
    PolywrapClient,  # The client itself
    PolywrapClientConfigBuilder,
    sys_bundle,
    web3_bundle,
)

builder = PolywrapClientConfigBuilder().add_bundle(sys_bundle).add_bundle(web3_bundle)

config = builder.build()

client = PolywrapClient(config)
# $end

# $start: quickstart-py-invoke-client
result = client.invoke(
    uri=Uri.from_str("wrapscan.io/polywrap/sha3@1"),
    method="sha3_256",
    args={
        "message": "Hello Polywrap!",
    },
    encode_result=False,
)

print(result)
# $end

# $start: quickstart-py-uniswap
wethResult = client.invoke(
    uri=Uri.from_str("wrapscan.io/polywrap/uniswap-v3@1"),
    method="fetchToken",
    args={
        "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "chainId": "MAINNET",
    },
    encode_result=False,
)

print(wethResult)

usdcResult = client.invoke(
    uri=Uri.from_str("wrapscan.io/polywrap/uniswap-v3@1"),
    method="fetchToken",
    args={
        "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "chainId": "MAINNET",
    },
    encode_result=False,
)

print(usdcResult)

poolAddressResult = client.invoke(
    uri=Uri.from_str("wrapscan.io/polywrap/uniswap-v3@1"),
    method="getPoolAddress",
    args={
        "tokenA": wethResult,
        "tokenB": usdcResult,
        "fee": "MEDIUM",
    },
    encode_result=False,
)

print(poolAddressResult)
# $end
