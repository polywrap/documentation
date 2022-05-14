const axios = require("axios");
const { buildAndDeployApi } = require('@web3api/test-env-js');
const path = require("path");
const fs = require('fs');


async function main() {

  const { data: providers } = await axios.get(
    "http://localhost:4040/providers"
  );
  const { data: ens } = await axios.get(
    "http://localhost:4040/deploy-ens"
  );

  // build api
  const api = await buildAndDeployApi({
    apiAbsPath: path.resolve(__dirname + "/../"),
    ipfsProvider: providers.ipfs,
    ensRegistryAddress: ens.ensAddress,
    ethereumProvider: providers.ethereum,
    ensRegistrarAddress: ens.registrarAddress,
    ensResolverAddress: ens.resolverAddress
  });
  const uri = `ens/testnet/${api.ensDomain}`;

  console.log(`✔️ Simple Storage API live at: ${uri}`);

  // Store the uri in our recipes file
  const recipes = require(`${__dirname}/../recipes/e2e.json`);
  recipes[0].api = uri;
  fs.writeFileSync(
    `${__dirname}/../recipes/e2e.json`,
    JSON.stringify(recipes, null, 2)
  );

  console.log("✔️ Recipe Constants Updated");
}

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
