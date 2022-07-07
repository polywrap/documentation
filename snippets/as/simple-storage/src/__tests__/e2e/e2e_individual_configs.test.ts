import { ClientConfig, PolywrapClient } from "@polywrap/client-js";
// $start: js-e2e-test-config-ethereum-import
import { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";
// $end
// $start: js-e2e-test-config-ipfs-import
import { ipfsResolverPlugin, IpfsResolverPluginConfig } from "@polywrap/ipfs-resolver-plugin-js";
// $end
// $start: js-e2e-test-config-ens-import
import { ensResolverPlugin, EnsResolverPluginConfig } from "@polywrap/ens-resolver-plugin-js";
// $end

import { buildAndDeployWrapper, initTestEnvironment, stopTestEnvironment, providers, ensAddresses } from "@polywrap/test-env-js";
import path from "path";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // an instance of the Polywrap Client
  let client: PolywrapClient;

  beforeAll(async () => {
    // initialize test environment
    await initTestEnvironment();

    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../"); // absolute path to directory with polywrap.yaml
    const api = await buildAndDeployWrapper({
      wrapperAbsPath: apiPath,
      ipfsProvider: providers.ipfs,
      ethereumProvider: providers.ethereum,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"

    // configure the ipfs plugin
// $start: js-e2e-test-config-ipfs
const ipfsConfig: IpfsResolverPluginConfig = {
  provider: providers.ipfs,
  fallbackProviders: undefined,
};
// $end

    // configure the ethereum plugin
// $start: js-e2e-test-config-ethereum
const ethereumConfig: EthereumPluginConfig = {
  networks: {
    testnet: {
      provider: providers.ethereum, // Ganache test network
    },
  },
  defaultNetwork: "testnet",
};
// $end

    // configure the ens plugin
// $start: js-e2e-test-config-ens
const ensConfig: EnsResolverPluginConfig = {
  addresses: {
    testnet: ensAddresses.ensAddress,
  },
};
// $end

    // configure the client
    const clientConfig: Partial<ClientConfig> = {
      plugins: [
        {
          uri: "wrap://ens/ipfs-resolver.polywrap.eth",
          plugin: ipfsResolverPlugin(ipfsConfig),
        },
        {
          uri: "wrap://ens/ens-resolver.polywrap.eth",
          plugin: ensResolverPlugin(ensConfig),
        },
        {
          uri: "wrap://ens/ethereum.polywrap.eth",
          plugin: ethereumPlugin(ethereumConfig),
        },
      ],
    };

    // create client
    client = new PolywrapClient(clientConfig);
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});