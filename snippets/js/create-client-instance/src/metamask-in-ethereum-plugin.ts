// $start: js-metamask-provider
import { Web3ApiClient } from "@web3api/client-js";
import { ethereumPlugin } from '@web3api/ethereum-plugin-js';

// Enable Metamask
const ethereum = (window as any).ethereum;
await ethereum.request({
  method: 'eth_requestAccounts',
});

// Configure the Ethereum plugin w/ MetaMask
const client = new Web3ApiClient({
  plugins: [{
    uri: "ens/ethereum.web3api.eth",
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