// $start: js-e2e-test-deploy
import { CoreClientConfig, PolywrapClient, IWrapPackage } from "@polywrap/client-js";
import { ethereumProviderPlugin, ProviderConfig, Connections, Connection } from "@polywrap/ethereum-provider-js";
import { ClientConfigBuilder, DefaultBundle } from '@polywrap/client-config-builder-js';
import { Commands, ETH_ENS_IPFS_MODULE_CONSTANTS } from '@polywrap/cli-js';
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
    await Commands.infra("up", {
      modules: ["eth-ens-ipfs"],
    });

    // absolute path to directory with polywrap.yaml
    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");
    // build the wrapper
    await Commands.build({ cwd: wrapperDirectory });
    wrapperPath = `wrap://fs/${wrapperDirectory}/build`;
    console.log(wrapperPath);

    // configure the ethereum provider plugin
    const ethereumConfig: ProviderConfig = {
      connections: new Connections({
        networks: {
          testnet: new Connection({
            provider: ETH_ENS_IPFS_MODULE_CONSTANTS.ethereumProvider // Ganache test network,
          }),
        },
        defaultNetwork: "testnet",
      }),
    };

    // configure the client
    const clientConfig: CoreClientConfig = new ClientConfigBuilder()
      .addDefaults()
      .addPackage(
        DefaultBundle.plugins.ethereumProviderV2.uri.uri,
        ethereumProviderPlugin(ethereumConfig) as IWrapPackage
      )
      .build();

    // create client
    client = new PolywrapClient(clientConfig);

    // deploy simple storage contract
    // highlight-start
    const result = await client.invoke<string>({
      uri: wrapperPath,
      method: "deployContract",
    });
    if (!result.ok) throw result.error;
    simpleStorageAddress = result.value;
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await Commands.infra("down", {
      modules: ["eth-ens-ipfs"],
    });
  });

  test("", async () => { });
});
// $end