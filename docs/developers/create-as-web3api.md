---
id: create-as-web3api
title: Create an AssemblyScript Web3API
---

- WASM Package
- - Description: ...
- - Steps:
- - - Setup (w3 create)
- - - Define schema
- - - Import dependencies
- - - Implement schema's functions
- - - Build Web3API
- - - Deploy
- - - Test

In this guide, we'll walk you through how you can create your own Web3API.

<br/>

## **Prerequisites**

This guide walks you through building a Web3API using [AssemblyScript](https://www.assemblyscript.org/). AssemblyScript has similiar syntax to [TypeScript](https://www.typescriptlang.org/) and compiles to [WebAssembly](https://webassembly.org/).

> In the future, you'll have the options to use other languages that compile to WebAssembly, such as Rust or Go.

You'll need the following installed before building your Web3API:

- `nvm`
- `yarn`
- `docker`
- `docker-compose`

<br/>

## **Getting started**

You can begin create the project folder by using the following command.

```
npx w3 create api assemblyscript <project-name>
```

After creation, your project should look like this:

```
web3api.yaml                  # Manifest file
src/                          #
│   │                         #
│   ├── mutation/             # GraphQL mutation schemas
│   └── query/                # GraphQL query schemas
|
recipes/                      # GraphQL recipes (will be covered below)
|
deploy-contract.js            # Deploy sample smart contract

```

## **Overview of project files**

### **`web3api.yaml`**

The `web3api.yaml` is a manifest file containing metadata for the group of relevant files in this project.

### **`src/`**

The `src/` folder is where you would write your schemas for GraphQL queries and mutations (in GraphQL, a "mutation" is a write operation).

⭐ The `index.ts` file within the `mutation/` and `query/` is where we would write our AssemblyScript-based Web3APIs.

### **`recipes/`**

The recipes folder holds our GraphQL services, `get.graphql` and `set.graphql`.

In addition, it contains the `e2e.json` file, which we'll pass into our `w3 query` command (shown in the next section). This will allow us to deploy our smart contract as well as send sample queries and mutations in our test environment.

### **`deploy-contract.js`**

This deploy contract script will run as part of the query recipe.

##

<br/>

## **Trying out the Sample Web3API**

This command gives you a sample project upon which you could build your Web3API. To check out a Web3API that interacts with our sample "SimpleStorage" smart contract, run the following commands in the project folder:

<br/>

First, we'll need to install `nvm` and `yarn`:

```
nvm install && nvm use
yarn
```

then build it with:

```
yarn build
```

Set up the test environment:

```
npx w3 test-env up
```

Build and deploy the "SimpleStorage Contract":

```
node ./deploy-contracts.js
```

Build and deploy the **Web3API**:

```
npx w3 build \
--ipfs http://localhost:5001 \
--graph simplestorage,http://localhost:8020 \
--test-ens simplestorage.eth
```

We've provided a `w3 query` command that you can use to test out query recipes.

```
npx w3 query ./recipes/e2e.json --test-ens
```

This query initiates the recipe `e2e.json`, which deploys the smart contract and then sets and gets values.

<br/>

### **The `build/` directory**

`mutation.wasm`  
`query.wasm`  
`schema.graphql`  
`web3api.yaml`

This build directory contains the files that make up your Web3API. The `mutation.wasm` and `query.wasm` files are the WebAssembly files that are compiled from AssemblyScript.

The `schema.graphql` contains all the GraphQL service schemas and the `web3api.yaml` is the Web3API manifest file.

<br/>

### **Building your own Web3API with AssemblyScript**

It's time to build your own Web3API! We'll start with the mutation schema and implementation, and then move on to the query ones.

#### **Mutation schema and implementation**

1. Take a look at the smart contract file `SimpleStorage.sol` and see what methods it currently has.

   - `set()` - sets a value in the smart contract and emits the address and data that was set.
   - `get()` - returns the value that was set.
   - `setHash()` - sets a hash value and emits the address and hash value that was set.
   - `getHash()` - returns the hash value that was set.

2. Update the `mutation/schema.graphql` file.

   - Notice that the only mutation schema here is for the `set()` function. We'll need to add ones for `setHash()` as well.

   ```
   #import { Mutation } into Ipfs from "w3://ens/ethereum.web3api.eth"
   #import { Mutation } into Ipfs from "w3://ens/ipfs.web3api.eth"

    type Mutation {
    setData(
        address: String!
        value: UInt32!
    ): String!

    setIpfsData(
        address: String!
    ): String!

    deployContract: String!
    }

    type SetIpfsDataOptions {
      address: String!
      data: String!
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

- Here's a breakdown of the components in a GraphQL schema, using type `setDataResult` as an example:
  - `SetDataResult` is a _GraphQL Object Type_, meaning it's a type with some fields.
  - `txReceipt` and `value` are _fields_ on the `SetDataResult` type. That means that `txReceipt` and `value` are the only fields that can appear in any part of a GraphQL query that operates on the `SetDataResult` type.
  - `String!` is one of the built-in scalar types. The exclamation mark means that this field is _non-nullable_, meaning the GraphQL service promises to always give you a value when you query this field.
  - `Uint32!` is an unsigned integer value type. Similar to `String!`, this type is _non-nullable_.

3.  Update the `mutation/index.ts` file (the AssemblyScript implementation)

    - This file contains the function for our GraphQL mutation type service. For now, we only have two mutation functions, `setData` and `deployContract`. Let's implement a `setIpfsData` function as well.

```
import {
    Ethereum_Mutation,
    Ipfs_Mutation
 } from "./w3/imported";

import {
    Input_setData,
    SetDataResult,
    Input_setIpfsData,
    SetIpfsDataResult
 } from "./w3";

 export function setData(input: Input_setData): SetDataResult {
  const hash = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: "function set(uint256 value)",
    args: [input.options.value.toString()]
  });

  return {
    txReceipt: hash,
    value: input.options.value
  };
}

export function setIpfsData(input: Input_setIpfsData): SetIpfsDataResult {
    const ipfsHash = Ipfs_Mutation.add({
    data: input.options.data
  });

  const txReceipt = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: "function setHash(bytes value)",
    args: [ipfsHash]
  });

  return {
    ipfsHash,
    txReceipt
  };
}

export function deployContract(): string {
  return Ethereum_Mutation.deployContract(...);
  // needs to updated with the new ABI
}
```

Let's break down this AssemblyScript Web3API implementation, starting with our module imports:

```
import {
  Ethereum_Mutation,
  Ipfs_Mutation
} from '.w3/imported/

import {
    Input_setData,
    SetDataResult,
    Input_setIpfsData,
    SetIpfsDataResult
 } from "./w3";

```

The first import brings in the `Ethereum_Mutation` and `Ipfs_Mutation` modules, which lets your Web3API interact with the Ethereum network and IPFS, respectively. These are both available to you already, so you don't have to write the implementation for them.

The second import brings in the `SetDataResult` and `SetIpfsDataResult` functions along with their respective type classes.

The next block of code is for the `setData` implementation:

```
 export function setData(input: Input_setData): SetDataResult {
  const hash = Ethereum_Mutation.sendTransaction({
    address: input.options.address,
    method: "function set(uint256 value)",
    args: [input.options.value.toString()]
  });

  return {
    txReceipt: hash,
    value: input.options.value
  };
}

```

This is AssemblyScript code. It looks very similar to TypeScript!

Here, we declare and export a function that takes one input parameter.

In the function, we declare a variable `hash` and set its value to the return value from invoking `Ethereum_Mutation.sendTransaction()` with the options object (`address`, `method`, and `args`).

The return value of `setData()` is an object containing the transaction receipt and value that was set in `args`.

Our last part of the code is a function to deploy the contract:

```
export function deployContract(): string {
  return Ethereum_Mutation.deployContract(...);
  // needs to updated with the new ABI
}
```

#### **Query schema and implementation**

Back to the `SimpleStorage.sol` file. In the previous section, we completed the schema and implementation for the `mutation` functions, `set()` and `setHash()`. In this next section, we'll be doing the same for `get()` and `getHash()`.
