// $start: js-metamask-provider-imports
import { PolywrapClient } from "@polywrap/client-js";
import { ethereumPlugin } from '@polywrap/ethereum-plugin-js';
// $end

export async function metamaskInEthereumPlugin() {
// $start: js-metamask-provider
// Enable Metamask
const ethereum = (window as any).ethereum;
await ethereum.request({
  method: 'eth_requestAccounts',
});

// Configure the Ethereum plugin w/ MetaMask
const client = new PolywrapClient({
  plugins: [{
    uri: "ens/ethereum.polywrap.eth",
    plugin: ethereumPlugin({
      networks: {
        mainnet: {
          provider: ethereum
        }
      },
      // If defaultNetwork is not specified, mainnet will be used.
      defaultNetwork: "mainnet"
    })
  }]
});
// $end

  console.log(client);
}
