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

Let's begin by creating a template project by running following command:
```
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

## **Build, Deploy, and Test your Web3API**

The template Web3API project contains an implementation of the `SimpleStorage.sol` smart contract on Ethereum, and adds on-top a basic Web3API that provides easy functions for interacting with the smart contract. In future steps, we'll extend this basic functionality with IPFS, but more on that later.

### **Build**
Let's start with building our project. Simply run:
```
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
```
yarn test:env:up
```

This will stand-up an Ethereum node, as well as an IPFS node.

:::tip
In the future, test environments will be easily configurable to include any nodes your Web3API requires.
:::

Next, let's deploy the `SimpleStorage.sol` smart contract, and the `simplestorage.eth` Web3API by running:
```
yarn deploy
```

### **Test**

With our Web3API live at `simplestorage.eth` on our test network, it's now time to test it out!

This is where our query recipes come in handy. Run `yarn test` to see this in action.

In the output window, you'll see a combination of input queries, and returned results from the Web3API. In this query recipe, we send a combination of `set.graphql` and `get.graphql` queries which modify the `SimpleStorage.sol` contract's stored value.

## **Building your own Web3API with AssemblyScript**

It's time to build your own Web3API! We'll start with the mutation schema and implementation, and then move on to the query ones.

### **Mutation schema and implementation**

1. Take a look at the smart contract file `SimpleStorage.sol` and take note of what functions it currently has.

   - `set()` - sets a value in the smart contract and emits the address and data that was set.
   - `get()` - returns the value that was set.
   - `setHash()` - sets a hash value and emits the address and hash value that was set.
   - `getHash()` - returns the hash value that was set.

2. Update the `mutation/schema.graphql` file.

   - Notice that the only mutation schema here is for the `set()` function. We'll need to add ones for `setHash()` and its corresponding types.

   ```graphql
   #import { Mutation } into Ethereum from "w3://ens/ethereum.web3api.eth"
   #import { Mutation } into Ipfs from "w3://ens/ipfs.web3api.eth"

    type Mutation {
      setData(options: SetDataOptions!): SetDataResult!
      setIpfsData(options: SetIpfsDataOptions!): SetIpfsDataResult!
      deployContract: String!
    }

    type SetIpfsDataOptions {
      address: String!
      data: Bytes!
    }

    type SetIpfsDataResult {
      ipfsHash: String!
      txReceipt: String!
    }

    type SetDataOptions {
      address: String!
      value: UInt32!
    }

    type SetDataResult {
      txReceipt: String!
      value: UInt32!
    }
   ```

3. Update the `mutation/index.ts` file (the AssemblyScript implementation)

   - This file contains the function for our GraphQL mutation type service. For now, we only have two mutation functions, `setData` and `deployContract`. Let's implement a `setIpfsData` function as well.

```typescript
import { Ethereum_Mutation, Ipfs_Mutation } from './w3/imported';

import {
  Input_setData,
  SetDataResult,
  Input_setIpfsData,
  SetIpfsDataResult,
} from './w3';
```

Here, we're importing the `Ethereum_Mutation` and `Ipfs_Mutation` modules, which lets your Web3API interact with the Ethereum network and IPFS, respectively.

Then, we import the `SetDataResult` and `SetIpfsDataResult` functions along with their respective type classes.

Below, we have our function for `setData`:

```typescript
export function setData(input: Input_setData): SetDataResult {
  const hash = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: 'function set(uint256 value)',
    args: [input.options.value.toString()],
  });

  return {
    txReceipt: hash,
    value: input.options.value,
  };
}
```

In the `setData` function above, we declare a variable `hash` and set its value to the return value from invoking `Ethereum_Mutation.sendTransaction()` with the options object (`address`, `method`, and `args`).

The return value of `setData()` is an object containing the transaction receipt and value that was set in `args`.

Now, let's implement the function for `setIpfsData`:

```js
export function setIpfsData(input: Input_setIpfsData): SetIpfsDataResult {
  const ipfsHash = Ipfs_Mutation.add({
    data: input.options.data,
  });

  const txReceipt = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: 'function setHash(bytes value)',
    args: [ipfsHash],
  });

  return {
    ipfsHash,
    txReceipt,
  };
}
```

Finally, we can declare a function to deploy the contract!

```js
export function deployContract(): string {
  return Ethereum_Mutation.deployContract({
    abi,
    bytecode,
  });
}
```

### **Query schema and implementation**

1. Update the `query/schema.graphql` file.

```js
   #import { Query } into Ethereum from "w3://ens/ethereum.web3api.eth"
   #import { Query } into Ipfs from "w3://ens/ipfs.web3api.eth"

type Query {
  getData(address: String!): UInt32!
  getIpfsData(address: String!): Bytes!
}
```

3. Update the `query/index.ts` file (the AssemblyScript implementation)

```js
import { Ethereum_Query, Ipfs_Query } from './w3/imported';

import {
  Input_getData,
  GetDataResult,
  Input_getIpfsData,
  GetIpfsDataResult,
} from './w3';

export function getData(input: Input_getData): u32 {
  const res = Ethereum_Query.callView({
    address: input.address,
    method: 'function get() view returns (uint256)',
    args: [],
  });
  return U32.parseInt(res);
}

export function getIpfsData(input: Input_getIpfsData): ArrayBuffer {
  const hash = Ethereum_Query.callView({
    address: input.address,
    method: 'function getHash() view returns (bytes)',
    args: [],
  });

  return Ipfs_Query.catFile({ cid: hash });
}
```

## **Updating the GraphQL service recipes**

In the folder, `recipes/`, you'll see two files for GraphQL services: `get.graphql` and `set.graphql`. These files relate to the `getData` and `setData` functions, respectively. We now need to add in two more files for `getIpfsData` and `setIpfsData` functions.

1. Create a file called `getIpfs.graphql` and add the following code:

```js
query GetIpfsData($address: String!) {
  getIpfsData(address: $address)
}
```

2. Then, create a file called `setIpfs.graphql` and add the following:

```js
query SetIpfsData($address: String!, $value: Int!) {
  setIpfsData(address: $address, value: $value)
}
```

🎉 **Congratulations! You've created a Web3API!**

From here, you can follow the next sections to build and deploy your Web3API as well as some testing basics.

### **Build and Deploy your Web3API**

If you want to build your Web3API without deploying, you can simply run the following command in your project folder:

```
npx w3 build
```

To deploy your build, you can add arguments to your command. Here's how you would deploy to an IPFS address:

```
npx w3 build \
--ipfs <ipfs-address>

```

### **Conclusion**

Congrats on building a Web3API and deploying it! For now, you can test your Web3API by customizing the `e2e.json` file and then running the `npx w3 query ./receipes/e2e.json --test-ens` command. In the future, we'll have a more robust testing suite for your Web3API development needs.
