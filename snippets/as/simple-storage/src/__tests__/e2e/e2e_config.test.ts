// $start: js-e2e-test-config
// highlight-start
import { ClientConfig, PolywrapClient } from "@polywrap/client-js";
import { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";
import { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";
import { ensResolverPlugin, EnsResolverPluginConfig } from "@polywrap/ens-resolver-plugin-js";
// highlight-end
import { buildAndDeployWrapper, initTestEnvironment, stopTestEnvironment, providers, ensAddresses } from "@polywrap/test-env-js";
import path from "path";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // highlight-start
  // an instance of the Polywrap Client
  let client: PolywrapClient;
  // highlight-end

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

    // highlight-start
    // configure the ipfs plugin
    const ipfsConfig: IpfsPluginConfig = {
      provider: providers.ipfs,
      fallbackProviders: undefined,
    };

    // configure the ethereum plugin
    const ethereumConfig: EthereumPluginConfig = {
      networks: {
        testnet: {
          provider: providers.ethereum, // Ganache test network
        },
      },
      defaultNetwork: "testnet",
    };

    // configure the ens plugin
    const ensConfig: EnsResolverPluginConfig = {
      addresses: {
        testnet: ensAddresses.ensAddress,
      },
    };

    // configure the client
    const clientConfig: Partial<ClientConfig> = {
      plugins: [
        {
          uri: "wrap://ens/ipfs.polywrap.eth",
          plugin: ipfsPlugin(ipfsConfig),
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
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end