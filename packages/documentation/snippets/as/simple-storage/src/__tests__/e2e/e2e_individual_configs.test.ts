import { ClientConfig, PolywrapClient } from "@polywrap/client-js";
// $start: js-e2e-test-config-ethereum-import
import { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";
// $end
// $start: js-e2e-test-config-ipfs-import
import { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";
// $end

import { buildWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";
import path from "path";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

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
// $start: js-e2e-test-config-ipfs
const ipfsConfig: IpfsPluginConfig = {
  provider: providers.ipfs,
  fallbackProviders: undefined,
};
// $end

    // configure the ethereum plugin
// $start: js-e2e-test-config-ethereum
const ethereumConfig: EthereumPluginConfig = {
  networks: {
    testnet: {
      provider: providers.ethereum // Ganache test network
    },
  },
  defaultNetwork: "testnet",
};
// $end

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
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});