// $start: js-e2e-test-final
import { ClientConfig, Web3ApiClient } from "@web3api/client-js";
import { ethereumPlugin, EthereumPluginConfigs } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin, IpfsPluginConfigs } from "@web3api/ipfs-plugin-js";
import { ensPlugin, EnsPluginConfigs } from "@web3api/ens-plugin-js";
import { buildAndDeployApi, initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";
import path from "path";
// highlight-next-line
import { Token, ChainId } from "./types";

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // an instance of the Polywrap Client
  let client: Web3ApiClient;

  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();

    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../"); // absolute path to directory with web3api.yaml
    const api = await buildAndDeployApi({
      apiAbsPath: apiPath,
      ipfsProvider: ipfs,
      ensRegistryAddress: ensAddress,
      ethereumProvider: ethereum,
      ensRegistrarAddress: registrarAddress,
      ensResolverAddress: resolverAddress,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"

    // configure the ipfs plugin
    const ipfsConfig: IpfsPluginConfigs = {
      provider: ipfs,
      fallbackProviders: undefined,
    };

    // configure the ethereum plugin
    const ethereumConfig: EthereumPluginConfigs = {
      networks: {
        testnet: {
          provider: ethereum, // Ganache test network
        },
        mainnet: {
          provider: "http://localhost:8546", // Ganache Ethereum mainnet fork
        },
      },
      defaultNetwork: "testnet",
    };

    // configure the ens plugin
    const ensConfig: EnsPluginConfigs = {
      query: {
        addresses: {
          testnet: ensAddress,
        },
      },
    };

    // configure the client
    const clientConfig: Partial<ClientConfig> = {
      plugins: [
        {
          uri: "w3://ens/ipfs.web3api.eth",
          plugin: ipfsPlugin(ipfsConfig),
        },
        {
          uri: "w3://ens/ens.web3api.eth",
          plugin: ensPlugin(ensConfig),
        },
        {
          uri: "w3://ens/ethereum.web3api.eth",
          plugin: ethereumPlugin(ethereumConfig),
        },
      ],
    };

    // create client
    client = new Web3ApiClient(clientConfig);
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  // highlight-start
  test("fetchToken", async () => {
    // create test case
    const DAI: Token = {
      chainId: ChainId.MAINNET,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      currency: {
        decimals: 18,
        symbol: "DAI",
        name: "DAI Stablecoin",
      },
    };

    // invoke wrapper method
    const { data, error } = await client.invoke<Token>({
      uri: ensUri,
      module: "query",
      method: "fetchToken",
      input: {
        chainId: DAI.chainId,
        address: DAI.address
      },
    });

    // check for errors
    expect(error).toBeFalsy(); // will be undefined if no exception is thrown in the wrapper
    expect(data).toBeTruthy(); // will be undefined if an exception is thrown in the wrapper

    // compare results
    expect(data?.currency.decimals).toEqual(DAI.currency.decimals);
    expect(data?.currency.symbol).toEqual(DAI.currency.symbol);
    expect(data?.currency.name).toEqual(DAI.currency.name);
  });
  // highlight-end
});
// $end: js-e2e-simple-storage-test-final