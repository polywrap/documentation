const { EthereumPlugin } = require("@polywrap/ethereum-plugin-js");
const fs = require("fs");
const buildContract = require("./build-contract");

async function main() {
  // Ensure the contract is built
  await buildContract.main();

  // Fetch the contract's ABI
  const contractAbi = JSON.parse(
    fs.readFileSync(
      `${__dirname}/../src/contracts/SimpleStorage.json`, 'utf-8'
    )
  );

  // Deploy the contract to testnet
  const eth = new EthereumPlugin({
    networks: {
      testnet: {
        provider: "http://localhost:8545"
      },
    },
  });

  const address = await eth.deployContract({
    abi: contractAbi.abi,
    bytecode: contractAbi.bytecode,
    connection: {
      networkNameOrChainId: "testnet"
    }
  });

  console.log(`✔️ SimpleStorage live at: ${address}`)

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
} else {
  module.exports = {
    main
  };
}
