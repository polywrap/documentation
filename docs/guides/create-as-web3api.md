---
id: create-as-web3api
title: Creating a Web3API
---

## **Introduction**

If you're looking to find out what it takes to build a Web3API, you've come to the right place! By the end of this document, you'll have the following knowledge:

- Starting a new Web3API project with the `w3 create` CLI command
- Writing a GraphQL schema for your Web3API
- Implementing your Web3API using AssemblyScript
- Building and deploying it

If at any time in this process you get stuck or have questions, please don't hesitate to reach out on [Discord](https://discord.com/invite/Z5m88a5qWu).

## **Prerequisites**

You'll need the following installed before building your Web3API:

- `nvm`
- `yarn`
- `docker`
- `docker-compose`

You'll be using [AssemblyScript](https://www.assemblyscript.org/) to implement your Web3API's logic. Don't worry if you haven't used it; its syntax is very similar to TypeScript. AssemblyScript compiles to [WebAssembly](https://webassembly.org/).

:::tip
In the future, AssemblyScript will be one of many supported languages that compile to WebAssembly, such as Rust or Go.
:::

## **Create your project**

Let's begin by creating a template project by running the following command:

```bash
npx @web3api/cli create api assemblyscript <project-name>
```

Where `<project-name>` is replaced with a custom name of your choosing. For example `my-web3api`.

Once complete, you'll see a new folder appear, named after the custom name you've chosen. Please navigate into this new directory (using `cd` for example).

## **Installation**

Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:

- `nvm install && nvm use`
- `yarn`

The Web3API CLI is now installed locally to your project's directory. Going forward we'll use this local installation by running `npx w3`.

We recommend avoiding installing the `@web3api/cli` package globally to avoid future version conflicts, and maximize reproducibility for the other developers you're working with.

## **Overview of project files**

Your project should look something like this:

```
web3api.yaml                  # Manifest File
src/
│   ├── query/                # Read Queries
│   |── mutation/             # Write Queries
|   └── contracts/            # Smart Contracts
|
recipes/                      # Query Recipes (covered below)
|
scripts/                      # Smart Contract Build/Deploy
```

### **`web3api.yaml`**

The `web3api.yaml` is a manifest file describing the layout of a Web3API package.

### **`src/mutation/*` & `src/query/*`**

The `src/mutation` & `src/query` folders are where the API's GraphQL schema and AssemblyScript implementation files live.

### **`src/contracts/*`**

The `src/contracts` directory contains our protocol's Ethereum based smart contracts.

### **`recipes/*`**

Query recipes provide a simple way to test your Web3API without having to write custom testing logic (with JavaScript and Jest for example).

We'll be using this functionality further down in this guide with the `w3 query` command, allowing us to easily send test queries against our API.

### **`scripts/*`**

We've defined some simple build & deployment scripts for our Solidity smart contracts. These are basic utilities, and can be replaced entirely by a [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/) project.

## **Build, deploy, test**

The template Web3API project contains an implementation of the `SimpleStorage.sol` smart contract on Ethereum, and adds on-top a basic Web3API that provides easy functions for interacting with the smart contract. In future steps, we'll extend this basic functionality with IPFS, but more on that later.

### **Build**

Let's start with building our project. Simply run:

```bash
yarn build
```

In the output window, you'll see that our smart contract was compiled, and our Web3API was built and output to the `./build/*` folder. It contains the following files:

```
build/
    ├── web3api.yaml           # Manifest
    ├── schema.graphql         # Schema
    |── query.wasm             # Query Logic
    └── mutation.wasm          # Mutation Logic
```

This directory's contents will be uploaded to decentralized storage, and enable any Web3API Client to download, query, and execute your Web3API's functionality within the application.

The `mutation.wasm` and `query.wasm` files are the WebAssembly files that are compiled from AssemblyScript.

The `schema.graphql` file contain the APIs schema, consisting of custom types and callable methods (query and mutation).

Lastly, the `web3api.yaml` manifest file describes the layout of the package.

### **Deploy**

To deploy our Web3API and associated smart contracts for testing, let's first setup a test environment. Simply run:

```bash
yarn test:env:up
```

This will stand-up an Ethereum node, as well as an IPFS node.

:::tip
In the future, test environments will be easily configurable to include any nodes your Web3API requires.
:::

Next, let's deploy the `SimpleStorage.sol` smart contract, and the `simplestorage.eth` Web3API by running:

```bash
yarn deploy
```

### **Test**

With our Web3API live at `simplestorage.eth` on our test network, it's now time to test it out!

This is where our query recipes come in handy. Run `yarn test` to see this in action.

In the output window, you'll see a combination of input queries, and returned results from the Web3API. In this query recipe, we send a combination of `set.graphql` and `get.graphql` queries which modify the `SimpleStorage.sol` contract's stored value.

## **Custom functionality: IPFS SimpleStorage**

It's time to build and customizing your own Web3API! We'll be adding IPFS support to the SimpleStorage Web3API.

A complete project with the modifications described below can be found [here](https://github.com/Web3-API/demos/tree/main/simple-storage/web3api-completed).

### **Update the mutation schema**

The first step to adding new Web3API functionality is defining the method we want our users to query in GraphQL. Add the following method & custom data types to your `./src/mutation/schema.graphql` schema file:

```graphql title="./src/mutation/schema.graphql"
type Mutation {
  ...

  setIpfsData(
    options: SetIpfsDataOptions!
    connection: Ethereum_Connection
  ): SetIpfsDataResult!
}

type SetIpfsDataOptions {
  address: String!
  data: String!
}

type SetIpfsDataResult {
  ipfsHash: String!
  txReceipt: String!
}
```

### **Import IPFS' Web3API mutations**

Since we'll be making use of IPFS in our Web3API, let's import its `Mutation` type so we can call it from our code, allowing us to upload content:

```graphql title="./src/mutation/schema.graphql"
...
#import { Mutation } into Ipfs from "w3://ens/ipfs.web3api.eth"

type Mutation {
  ...
```

### **Implement the `setIpfsData` mutation**

In the `./src/mutation/index.ts` file, import the new types we've defined:

```typescript title="./src/mutation/index.ts"
import {
  Ethereum_Mutation,
  Ipfs_Mutation,
  Input_setData,
  Input_setIpfsData,
  SetIpfsDataResult,
} from './w3';
```

These new types will not exist yet, but don't worry, they'll be generated in the `./src/mutation/w3/*` folder once the `w3 build` command is run.

Next, we'll implement the `setIpfsData` mutation method. Add this function to the bottom of your `./src/mutation/index.ts` file:

```typescript title="./src/mutation/index.ts"
...

export function setIpfsData(input: Input_setIpfsData): SetIpfsDataResult {
  // 1. Upload the data to IPFS
  const ipfsHash = Ipfs_Mutation.addFile({
    data: String.UTF8.encode(input.options.data),
  });

  // 2. Add the data's IPFS hash to SimpleStorage using `setHash(...)`
  const txReceipt = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: 'function setHash(string value)',
    args: [ipfsHash],
    connection: input.connection,
  });

  // 3. Return the result
  return {
    ipfsHash,
    txReceipt,
  };
}
```

As you can see, the `SimpleStorage.sol` smart contract already exposes a `setHash()` method.

In steps `1` and `2`, our SimpleStorage Web3API is sending a "sub-query" to the IPFS and Ethereum Web3APIs we imported within our schema. These Web3APIs can be implements as a WASM based Web3API, or a plugin in the client's language (ex: JavaScript). For more information on plugins, see the ["Plugin an Existing JS SDK"](/guides/create-js-plugin) documentation.

The `Ethereum_Mutation.sendTransaction` function also accepts an optional argument, `connection`. This option allows you to select the network in which you're transacting with, by specifying a node's endpoint, or a network (name or chain ID) (e.g. `"rinkeby"`).

To verify everything is implemented correctly, try running `yarn build` and see if the Web3API build succeeds.

### **Update the query schema & module**

With our mutation implementation complete, it's now time to move onto the schema module. The steps are almost identical to above.

Update the `./src/query/schema.graphql` file like so:

```graphql title="./src/query/schema.graphql"
...
#import { Query } into Ipfs from "w3://ens/ipfs.web3api.eth"

type Query {
  ...

  getIpfsData(
    address: String!
    connection: Ethereum_Connection
  ): String!
}
```

Implement the `getIpfsData(...)` method like so in `./src/query/index.ts`:

```typescript title="./src/query/index.ts"
import {
  Ethereum_Query,
  Ipfs_Query,
  Input_getData,
  Input_getIpfsData
} from './w3';

...

export function getIpfsData(input: Input_getIpfsData): string {
  const hash = Ethereum_Query.callView({
    address: input.address,
    method: 'function getHash() view returns (string)',
    args: [],
    connection: input.connection,
  });

  return String.UTF8.decode(
    Ipfs_Query.catFile({ cid: hash })
  );
}
```

To verify everything is implemented correctly, try running `yarn build` and see if the Web3API build succeeds.

### **Testing**

In order to test this new functionality, we'll update the existing `./recipes/e2e.json` recipe file to include the new queries we've added (`setIpfsData`, and `getIpfsData`).

Add the following `.graphql` query files to the `./recipes` folder.

`setIpfs.graphql`:

```graphql title="./recipes/setIpfs.graphql"
mutation {
  setIpfsData(
    options: { address: $address, data: $data }
    connection: { networkNameOrChainId: $network }
  ) {
    ipfsHash
    txReceipt
  }
}
```

`getIpfs.graphql`:

```graphql title="./recipes/getIpfs.graphql"
query {
  getIpfsData(
    address: $address,
    connection: { networkNameOrChainId: $network }
  )
}
```

Once the queries we want to send have been defined, we just need to add them to our query recipe file `e2e.json` like so:

```json title="./recipes/e2e.json"
  ...
  {
    "query": "./setIpfs.graphql",
    "variables": {
      "address": "$SimpleStorageAddr",
      "data": "Hello from IPFS!",
      "network": "testnet"
    }
  },
  {
    "query": "./getIpfs.graphql",
    "variables": {
      "address": "$SimpleStorageAddr",
      "network": "testnet"
    }
  }
]
```

With our recipe complete, let's test the Web3API on our local environment!

```bash
yarn test:env:up
```

```bash
yarn deploy
```

```bash
yarn test
```

### **Conclusion**

🎉 **Congratulations! You've create a custom Web3API!**

Hopefully this article has given you a clear understanding of the Web3API toolchain's primary features. If at any time in this process you get stuck or have questions, please don't hesitate to reach out on [Discord](https://discord.com/invite/Z5m88a5qWu).
