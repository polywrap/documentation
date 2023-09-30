// $start: quickstart-js-init-client
import { PolywrapClient } from "@polywrap/client-js";

const client = new PolywrapClient();
// $end

async function main() {
// $start: quickstart-js-1st-invoke
  const result = await client.invoke({
    uri: "wrapscan.io/polywrap/sha3@1.0",
    method: "sha3_256",
    args: {
      message: "Hello Polywrap!",
    },
  });

  console.log(result);
// $end

// $start: quickstart-js-uniswap
  const wethResult = await client.invoke({
    uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
    method: "fetchToken",
    args: {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      chainId: "MAINNET",
    },
  });

  // Log the invocation error and stop execution if the invocation fails
  if (!wethResult.ok) {
    throw wethResult.error;
  }

  console.log("WETH:", wethResult.value);

  const usdcResult = await client.invoke({
    uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
    method: "fetchToken",
    args: {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      chainId: "MAINNET",
    },
  });

  // Log the invocation error and stop execution if the invocation fails
  if (!usdcResult.ok) {
    throw usdcResult.error;
  }

  console.log("USDC:", usdcResult.value);

  const poolAddressResult = await client.invoke({
    uri: "wrapscan.io/polywrap/uniswap-v3@1.0",
    method: "getPoolAddress",
    args: {
      tokenA: wethResult.value,
      tokenB: usdcResult.value,
      fee: "MEDIUM",
    },
  });

  // Log the invocation error and stop execution if the invocation fails
  if (!poolAddressResult.ok) {
    throw poolAddressResult.error;
  }

  console.log("Pool address:", poolAddressResult.value);
// $end
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
