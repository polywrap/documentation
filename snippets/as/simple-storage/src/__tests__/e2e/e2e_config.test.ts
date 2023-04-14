// $start: js-e2e-test-config
// highlight-start
import { CoreClientConfig, IWrapPackage, PolywrapClient } from '@polywrap/client-js';
import { Commands, ETH_ENS_IPFS_MODULE_CONSTANTS } from '@polywrap/cli-js';
import { ethereumProviderPlugin, ProviderConfig, Connections, Connection } from "@polywrap/ethereum-provider-js";
import { ClientConfigBuilder, DefaultBundle } from '@polywrap/client-config-builder-js';
// highlight-end
import path from "path";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // path to the wrapper's build folder
  let wrapperPath: string;

  // highlight-start
  // an instance of the Polywrap Client
  let client: PolywrapClient;
  // highlight-end

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
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await Commands.infra("down");
  });

  test("", async () => { });
});
// $end