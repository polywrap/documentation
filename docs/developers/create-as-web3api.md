---
id: create-as-web3api
title: Creating a Web3API
---

## **Introduction**

If you're looking to find out what it takes to build a Web3API, you've come to the right place! By the end of this document, you'll have the following knowledge:

- Starting a new Web3API project with the `w3 create` CLI command
- Writing the schema for your GraphQL services
- Implementing your Web3API using AssemblyScript
- Building and deploying it

If at any time in this process you get stuck or have questions, please reach out on [Discord](https://discord.com/invite/Z5m88a5qWu). We just ask the you do this in the `#dao-members` channel so others may learn alongside us 😀.

## **Prerequisites**

You'll be using [AssemblyScript](https://www.assemblyscript.org/) (don't worry if you haven't used it; its syntax is very similar to TypeScript's). AssemblyScript compiles to [WebAssembly](https://webassembly.org/).

:::tip
In the future, you'll have the options to use other languages that compile to WebAssembly, such as Rust or Go.

:::

You'll need the following installed before building your Web3API:

- `nvm`
- `yarn`
- `docker`
- `docker-compose`

## **Installation**

Let's begin creating the project folder by using the following commands.

Web3API is used through a local installation in your project. This way, your environment will be reproducible, and you will avoid future version conflicts.

To install it, you need to create an npm project by going to an empty folder, running `npm init`, and following its instructions. once your project is ready, you should run:

```
npm install --save-dev @web3api/cli
```

To use your local installation of Web3API, you need to use `npx` to run it (i.e. `npx w3`).

## **Create your project**

Create the project folder with the following command:

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

## **Overview of template project files**

### **`web3api.yaml`**

The `web3api.yaml` is a manifest file containing metadata for the group of relevant files in this project.

### **`src/`**

The `src/` folder is where you would write your schemas for GraphQL queries and mutations (in GraphQL, a "mutation" is a write operation).

⭐ The `index.ts` file within `mutation/` and `query/` is where you would write your AssemblyScript-based Web3APIs.

### **`recipes/`**

The recipes folder holds our GraphQL services, `get.graphql` and `set.graphql`.

In addition, it contains the `e2e.json` file, which we'll pass into our `w3 query` command (shown in the next section). This will allow us to deploy our smart contract as well as send sample queries and mutations in our test environment.

### **`deploy-contract.js`**

This deploy contract script will run as part of the query recipe to deploy the `SimpleStorage.sol` smart contract.

## **Trying out the template Web3API**

This command gives you a sample project upon which you could build your Web3API. To check out a Web3API that interacts with our sample "SimpleStorage" smart contract, run the following commands in the project folder:

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
node ./scripts/deploy-contracts.js
node ./scripts/build-contract.js
```

Build and deploy the **Web3API**:

```
npx w3 build \
--ipfs http://localhost:5001 \
--graph simplestorage,http://localhost:8020 \
--test-ens simplestorage.eth
```

Use the `w3 query` command to test query recipes:

```
npx w3 query ./recipes/e2e.json --test-ens
```

This query executes the recipe `e2e.json`, which then executes the set and get GraphQL services.

### **The `build/` directory**

This build directory contains the files that make up your Web3API. The `mutation.wasm` and `query.wasm` files are the WebAssembly files that are compiled from AssemblyScript.

`mutation.wasm`  
`query.wasm`  
`schema.graphql`  
`web3api.yaml`

The `schema.graphql` contains all the GraphQL service schemas and the `web3api.yaml` is the Web3API manifest file.

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

   ```js
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

```js
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

```js
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
