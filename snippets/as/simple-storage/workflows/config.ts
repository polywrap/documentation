import { IWrapPackage } from '@polywrap/client-js';
import { Connection, Connections, ethereumProviderPlugin, ProviderConfig } from '@polywrap/ethereum-provider-js';
import { ETH_ENS_IPFS_MODULE_CONSTANTS } from '@polywrap/cli-js';
import { IClientConfigBuilder, DefaultBundle } from '@polywrap/client-config-builder-js';


export function configure(builder: IClientConfigBuilder): IClientConfigBuilder {
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

  return builder
    .addPackage(
      DefaultBundle.plugins.ethereumProviderV2.uri.uri,
      ethereumProviderPlugin(ethereumConfig) as IWrapPackage
    )
}
