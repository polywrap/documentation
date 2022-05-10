import { ClientConfig, Web3ApiClient } from "@web3api/client-js";
// $start: js-e2e-test-config-ethereum-import
import { ethereumPlugin, EthereumPluginConfigs } from "@web3api/ethereum-plugin-js";
// $end
// $start: js-e2e-test-config-ipfs-import
import { ipfsPlugin, IpfsPluginConfigs } from "@web3api/ipfs-plugin-js";
// $end
// $start: js-e2e-test-config-ens-import
import { ensPlugin, EnsPluginConfigs } from "@web3api/ens-plugin-js";
// $end
import { buildAndDeployApi, initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";
import path from "path";

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // an instance of the Polywrap Client
  let client: Web3ApiClient;

  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();

    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../../"); // absolute path to directory with web3api.yaml
    const api = await buildAndDeployApi({
      apiAbsPath: apiPath,
      ipfsProvider: ipfs,
      ensRegistryAddress: ensAddress,
      ethereumProvider: ethereum,
      ensRegistrarAddress: registrarAddress,
      ensResolverAddress: resolverAddress,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"

    // configure the ipfs plugin
// $start: js-e2e-test-config-ipfs
const ipfsConfig: IpfsPluginConfigs = {
  provider: ipfs,
  fallbackProviders: undefined,
};
// $end

    // configure the ethereum plugin
// $start: js-e2e-test-config-ethereum
const ethereumConfig: EthereumPluginConfigs = {
  networks: {
    testnet: {
      provider: ethereum, // Ganache test network
    },
    mainnet: {
      provider: "http://localhost:8546", // Ganache Ethereum mainnet fork
    },
  },
  defaultNetwork: "testnet",
};
// $end

    // configure the ens plugin
// $start: js-e2e-test-config-ens
const ensConfig: EnsPluginConfigs = {
  query: {
    addresses: {
      testnet: ensAddress,
    },
  },
};
// $end

    // configure the client
    const clientConfig: Partial<ClientConfig> = {
      plugins: [
        {
          uri: "w3://ens/ipfs.web3api.eth",
          plugin: ipfsPlugin(ipfsConfig),
        },
        {
          uri: "w3://ens/ens.web3api.eth",
          plugin: ensPlugin(ensConfig),
        },
        {
          uri: "w3://ens/ethereum.web3api.eth",
          plugin: ethereumPlugin(ethereumConfig),
        },
      ],
    };

    // create client
    client = new Web3ApiClient(clientConfig);
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });
});