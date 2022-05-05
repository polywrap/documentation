---
id: end-to-end-test
title: Write an end to end test
---

## **Introduction**

Here we discuss the process of writing end to end (e2e) tests for your wrapper. By end-to-end, we mean tests that make
calls to the wrapper through a Polywrap Client. E2e testing is both necessary and useful. It is necessary because calls 
between wrappers depend on the Polywrap Client. It is useful because such tests can more accurately represent the user
experience of your wrapper when it is integrated into an application.

We will focus on setting up a test environment and a Polywrap Client. Once these tasks are completed, testing
a wrapper is similar to testing a traditional SDK.

## **Prerequisites**

This guide uses [TypeScript](https://www.typescriptlang.org/) to implement the Polywrap test environment. We will also
use the [Jest](https://jestjs.io/) testing framework, though you can use any framework and follow without difficulty.

:::tip
In the future, TypeScript will be one of many supported languages for implementing plugins. As more Polywrap Clients are released in various languages, implementing plugins in those languages will be supported as well.
:::

You'll need the following installed as developer dependencies before testing your wrapper:

- [@web3api/cli](../../reference/cli/polywrap-cli)
- `@web3api/test-env-js`
- [@web3api/client-js](../../reference/clients/js/client-js)
- `jest`
- `@types/jest`

These can be added to your TypeScript project using the npm or yarn package managers:
```
npm install --save-dev @web3api/cli @web3api/test-env-js @web3api/client-js jest @types/jest
```
```
yarn add -D @web3api/cli @web3api/test-env-js @web3api/client-js jest @types/jest
```

## **The Polywrap Test Environment**

A Polywrap test environment is most useful when it integrates an IPFS node and an Ethereum test network, so that incomplete 
wrappers can be deployed and queried on your local machine.

The Polywrap CLI can be used to start a Polywrap-ready test environment:

```shell
w3 test-env up
```

The CLI can also be used to stop the test environment:

```shell
w3 test-env down
```

The test environment is a docker container with:
- A test server at **http://localhost:4040**
- A standard Ganache Ethereum test network at **http://localhost:8545**
- A Ganache Ethereum mainnet fork test network at **http://localhost:8546**
- An IPFS node at **http://localhost:5001**

It also sets up an ENS contract at initialization, so you can build wrappers and deploy them to an ENS URI on your locally hosted testnet.

:::tip
The test server can be queried to obtain an IPFS provider, Ethereum provider, and ENS registry address.

```typescript
async function getProviders(): { ipfs: string; ethereum: string; ensAddress: string } {
  const { data: { ipfs, ethereum } } = await axios.get("http://localhost:4040/providers");
  const { data: { ensAddress } } = await axios.get("http://localhost:4040/deploy-ens");
  return { ipfs, ethereum, ensAddress };
}
```

However, this guide will use the `@web3api/test-env-js` package instead. The `@web3api/test-env-js` can be used to start 
and stop this same test environment programmatically.
:::

## **Starting and stopping a Polywrap Test environment with @web3api/test-env-js**

The `@web3api/test-env-js` package includes functions for starting and stopping a Polywrap test environment.

The `initTestEnvironment` function takes no arguments and returns a `TestEnvironment` object, which contains
five strings that can be used to interact with the test environment:

```typescript
interface TestEnvironment {
  ipfs: string; // IPFS provider
  ethereum: string; // Ethereum provider
  ensAddress: string; // ENS registry address
  registrarAddress: string; // ENS registrar address
  reverseAddress: string; // ENS reverse registrar address
  resolverAddress: string; // ENS resolver address
}
```

The `stopTestEnvironment` function takes no arguments and tears down a test environment if one is running.

To see these in action, let's start a new file where we will write our first test. Like many testing frameworks in
JavaScript, the Jest framework includes hooks that run before and after all tests. I've added a call to `initTestEnvironment`
in the `beforeAll` hook, so we can start our test environment before running our tests. I added a call to `stopTestEnvironment` 
in the `afterAll` hook to make sure the test environment does not continue running on our system after we finish testing.

```typescript
import { initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";

describe('Wrapper Test', () => {

  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });
});
```

## **Building and deploying a wasm wrapper for testing with @web3api/test-env-js**

To query a wasm wrapper in a test, we first need to build and deploy it. We can do this with `@web3api/test-env-js` using
the `buildAndDeployApi` function. The `buildAndDeploy` function requires an absolute path to the directory of your wrapper
project that contains the `web3api.yaml` manifest file, the values that were returned by `initTestEnvironment`, and 
optionally an ENS domain name.

The `buildAndDeployApi` function returns an ENS domain name and an IPFS CID. Either of these outputs can be used to call
your wrapper. If an ENS domain name was not provided when calling `buildAndDeployApi`, a name will be randomly selected for you.

Here we obtain the absolute path to our wrapper project in three steps. First we get the directory of the folder containing
our test script, using the node.js `__dirname` global variable. We then append the path from our test script file to the
manifest directory. Finally, we import the node.js feature `path`, and use `path.resolve` to get direct absolute path to
our wrapper project.

```typescript
// highlight-start
import { buildAndDeployApi, initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";
import path from "path";
// highlight-end

describe('Wrapper Test', () => {

  // highlight-start
  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;
  // highlight-end
  
  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
    
    // highlight-start
    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../../"); // absolute path to directory with web3api.yaml
    const api = await buildAndDeployApi({
      apiAbsPath: apiPath,
      ipfsProvider: ipfs,
      ensRegistryAddress: ensAddress,
      ethereumProvider: ethereum,
      ensRegistrarAddress: registrarAddress,
      ensResolverAddress: resolverAddress,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });
});
```

## **Setting up a Polywrap Client**

Now that we have deployed our wasm wrapper to a local test environment, we need to set up a Polywrap Client that can
query it. We can make sure our client is ready to query the wrapper by configuring three of the default plugin wrappers.

- The `ipfsPlugin` can be configured using the test environment's local IPFS node.
- The `ethereumPlugin` can be configured with Ethereum providers on the Ganache Ethereum test network and the Ganache
mainnet fork network from our test environment.
- The `ensPlugin` can be configured using the Ethereum address of the test environment's ENS registry contract.

### **Configure the IPFS Plugin**

The `ipfsPlugin` can be configured with a default IPFS provider and an array of fallback providers that will be tried if
the default provider fails.

```typescript
import { IpfsPluginConfigs } from "@web3api/ipfs-plugin-js";

const ipfsConfig: IpfsPluginConfigs = { 
  provider: ipfs,
  fallbackProviders: undefined,
};
```

### **Configure the Ethereum Plugin**

The `ethereumPlugin` can be configured with Ethereum providers and signers. It accepts JSON RPC provider strings, 
Providers from the ethers.js package, and providers from the web3.js package.

To configure the plugin, we need to provide it with an object containing network names along with a provider. We can
optionally provide a signer as well, but by default the plugin will attempt to obtain a signer from the provider if it
is needed.

We can give the networks any name we want in our configuration. We can later use these names to choose which network to 
query. Here we will use the names "testnet" and "mainnet" to help us remember which test network we are using.

We also need to tell the Ethereum plugin which network should be used when a network is not specified. We do this by
setting the value of the `defaultNetwork` property to one of our network names.

```typescript
import { EthereumPluginConfigs } from "@web3api/ethereum-plugin-js";

const ethereumConfig: EthereumPluginConfigs = {
  networks: {
    testnet: {
      provider: ethereum,
    },
    mainnet: {
      provider: "http://localhost:8546", // Ganache Ethereum mainnet fork
    },
  },
  defaultNetwork: "testnet",
};
```

### **Configure the ENS Plugin**

The `ensPlugin` accepts an Ethereum address for the ENS registry contract on each of the Ethereum networks declared
in our Ethereum plugin configuration. We will only use the ENS registry deployed on our test environment's Ethereum
network.

```typescript
import { EnsPluginConfigs } from "@web3api/ens-plugin-js";

const ensConfig: EnsPluginConfigs = {
  query: {
    addresses: {
      testnet: ensAddress,
    },
  },
};
```

### **Create the Polywrap Client Instance**

Now we are ready to add the plugins to our Polywrap Client configuration and create the client. The URI's we assign in
our client configuration will redirect to the plugin instances when queried.

```typescript
// highlight-start
import { ClientConfig, Web3ApiClient } from "@web3api/client-js";
import { ethereumPlugin, EthereumPluginConfigs } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin, IpfsPluginConfigs } from "@web3api/ipfs-plugin-js";
import { ensPlugin, EnsPluginConfigs } from "@web3api/ens-plugin-js";
// highlight-end
import { buildAndDeployApi, initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";
import path from "path";

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // highlight-start
  // an instance of the Polywrap Client
  let client: Web3ApiClient;
  // highlight-end
  
  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
    
    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../../"); // absolute path to directory with web3api.yaml
    const api = await buildAndDeployApi({
      apiAbsPath: apiPath,
      ipfsProvider: ipfs,
      ensRegistryAddress: ensAddress,
      ethereumProvider: ethereum,
      ensRegistrarAddress: registrarAddress,
      ensResolverAddress: resolverAddress,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"

    // highlight-start
    // configure the ens plugin
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
    const clientConfig: ClientConfig = {
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
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });
});
```

## **Testing a Wrapper Method**

From this point, testing a function in your wrapper is no different from testing a traditional SDK. Instead of calling
a method in a traditional SDK, you will invoke your wrapper.

For our example, we will test the `fetchToken` method in the [Uniswap v3 wasm wrapper](../../demos/uniswapv3/intro). `fetchToken` accepts the Ethereum
address and chain ID of an ERC20-compliant Ethereum token's smart contract and returns some information about the token.

Since we are using TypeScript, we will want types to work with. It is possible to automatically generate TypeScript 
types from a GraphQL schema using the Polywrap CLI's `app` command, but that is outside the scope of this guide. 
Instead, we will write the types we need manually in a new file called `types.ts`.

```typescript title="types.ts"
export type UInt8 = number;
export type String = string;

export enum ChainId {
  MAINNET,
  ROPSTEN,
  RINKEBY,
  GOERLI,
  KOVAN,
}

export interface Currency {
  decimals: UInt8;
  symbol?: String | null;
  name?: String | null;
}

export interface Token {
  chainId: ChainId;
  address: String;
  currency: Currency;
}
```

We will test the `fetchToken` method using the DAI token as a test case. DAI is an Ethereum token that is pegged to the
US dollar. To test the method, we will invoke it using the DAI token's Ethereum address and chain ID and then compare its return
value to the test case.

```typescript title="Final test file"
import { ClientConfig, Web3ApiClient } from "@web3api/client-js";
import { ethereumPlugin, EthereumPluginConfigs } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin, IpfsPluginConfigs } from "@web3api/ipfs-plugin-js";
import { ensPlugin, EnsPluginConfigs } from "@web3api/ens-plugin-js";
import { buildAndDeployApi, initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";
import path from "path";
// highlight-next-line
import { Token } from "./types";

describe('Wrapper Test', () => {

  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;

  // an instance of the Polywrap Client
  let client: Web3ApiClient;
  
  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
    
    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../../"); // absolute path to directory with web3api.yaml
    const api = await buildAndDeployApi({
      apiAbsPath: apiPath,
      ipfsProvider: ipfs,
      ensRegistryAddress: ensAddress,
      ethereumProvider: ethereum,
      ensRegistrarAddress: registrarAddress,
      ensResolverAddress: resolverAddress,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"
    
    // configure the ens plugin
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
    const clientConfig: ClientConfig = {
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
```