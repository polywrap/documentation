// $start: js-metamask-provider-imports
import {
  ClientConfigBuilder,
  IWrapPackage,
  PolywrapClient,
} from "@polywrap/client-js";
import {
  Connection,
  Connections,
  ethereumProviderPlugin,
} from "@polywrap/ethereum-provider-js";
// $end

export async function metamaskInEthereumPlugin() {
  // $start: js-metamask-provider
  // Enable Metamask
  const ethereum = (window as any).ethereum;
  await ethereum.request({
    method: "eth_requestAccounts",
  });

  // Configure the Ethereum plugin w/ MetaMask
  const config = new ClientConfigBuilder()
    .addDefaults()
    .addPackages({
      "wrapscan.io/polywrap/ethereum-wallet@1.0": ethereumProviderPlugin({
        connections: new Connections({
          networks: {
            goerli: new Connection({
              provider: ethereum,
            }),
          },
          defaultNetwork: "goerli",
        }),
      }) as IWrapPackage,
    })
    .build();

  const client = new PolywrapClient(config);
  // $end

  console.log(client);
}
