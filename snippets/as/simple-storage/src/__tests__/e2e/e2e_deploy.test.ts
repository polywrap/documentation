// $start: js-e2e-test-deploy
import { ClientConfig, PolywrapClient } from "@polywrap/client-js";
import { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";
import { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";
import { buildWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";
import path from "path";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // the Ethereum address of the SimpleStorage smart contract
  // highlight-start
  let simpleStorageAddress: string;
  // highlight-end

  // path to the wrapper's build folder
  let wrapperPath: string;

  // an instance of the Polywrap Client
  let client: PolywrapClient;

  beforeAll(async () => {
    // initialize test environment
    await initTestEnvironment();

    // absolute path to directory with polywrap.yaml
    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");
    // build the wrapper
    await buildWrapper(wrapperDirectory);
    wrapperPath = `wrap://fs/${wrapperDirectory}/build`

    // configure the ipfs plugin
    const ipfsConfig: IpfsPluginConfig = {
      provider: providers.ipfs,
      fallbackProviders: undefined,
    };

    // configure the ethereum plugin
    const ethereumConfig: EthereumPluginConfig = {
      networks: {
        testnet: {
          provider: providers.ethereum // Ganache test network
        },
      },
      defaultNetwork: "testnet",
    };

    // configure the client
    const clientConfig: Partial<ClientConfig> = {
      plugins: [
        {
          uri: "wrap://ens/ipfs.polywrap.eth",
          plugin: ipfsPlugin(ipfsConfig),
        },
        {
          uri: "wrap://ens/ethereum.polywrap.eth",
          plugin: ethereumPlugin(ethereumConfig),
        },
      ],
    };

    // create client
    client = new PolywrapClient(clientConfig);

    // deploy simple storage contract
    // highlight-start
    const { data, error } = await client.invoke<string>({
      uri: wrapperPath,
      method: "deployContract",
    });
    if (error) throw error;
    simpleStorageAddress = data as string;
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end