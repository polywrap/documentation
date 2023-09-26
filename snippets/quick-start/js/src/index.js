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

// $start: quickstart-js-resolve
  // We first want to resolve the IPFS WRAP URI of the UniswapV3 Wrap
  const resolutionResult = await client.tryResolveUri({
    uri: "wrapscan.io/polywrap/wrapscan-uri-resolver@1.0",
  });

  if (!resolutionResult.ok) {
    throw resolutionResult.error;
  }

  console.log(resolutionResult.value);
// $end

// $start: quickstart-js-get-schema
  // Extract the IPFS CID from the resolution result's URI
  const cid = resolutionResult.value.uri.uri.replace("wrap://ipfs/", "");

  // Since the CID is a directory, we need to add a path to the Wrap's manifest file
  const catResult = await client.invoke({
    uri: "wrapscan.io/polywrap/ipfs-http-client@1.0",
    method: "cat",
    args: {
      cid: cid + "/wrap.info",
      ipfsProvider: "https://ipfs.wrappers.io",
    },
  });

  console.log(catResult);

  if (!catResult.ok) {
    throw catResult.error;
  }

  // Turn the returned buffer into a string and log it
  const schema = new TextDecoder().decode(catResult.value);

  console.log(schema);
// $end
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
