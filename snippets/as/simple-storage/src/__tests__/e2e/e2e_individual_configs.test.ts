import { CoreClientConfig, IWrapPackage, PolywrapClient } from '@polywrap/client-js';
// $start: js-e2e-test-config-ethereum-import
import { ethereumProviderPlugin, ProviderConfig, Connections, Connection } from "@polywrap/ethereum-provider-js";
// $end
// $start: js-e2e-test-config-builder-import
import { ClientConfigBuilder, DefaultBundle } from '@polywrap/client-config-builder-js';
// $end

import path from "path";
import { Commands, ETH_ENS_IPFS_MODULE_CONSTANTS } from '@polywrap/cli-js';

jest.setTimeout(360000);

describe('Wrapper Test', () => {

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
    wrapperPath = `wrap://fs/${wrapperDirectory}/build`

    // configure the ethereum provider plugin
// $start: js-e2e-test-config-ethereum
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
// $end

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
  });

  afterAll(async () => {
    // stop test environment
    await Commands.infra("down", {
      modules: ["eth-ens-ipfs"],
    });
  });

  test("", async () => { });
});