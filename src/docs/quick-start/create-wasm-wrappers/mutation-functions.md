---
id: 'mutation-functions'
title: 'Adding new mutation functions'
---

## **Custom functionality: IPFS SimpleStorage**

It's time to build and customizing your own Polywrapper! We'll be adding IPFS support to the SimpleStorage Polywrap.

A complete project with the modifications described below can be found [here](https://github.com/Web3-API/demos/tree/main/simple-storage/web3api-completed).

### **Update the mutation schema**

The first step to adding new Polywrapper functionality is defining the method we want our users to query in GraphQL. Add the following method & custom data types to your `./src/mutation/schema.graphql` schema file:

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

### **Import IPFS' Polywrap mutations**

Since we'll be making use of IPFS in our Polywrapper, let's import its `Mutation` type so we can call it from our code, allowing us to upload content:

```graphql title="./src/mutation/schema.graphql"
...
#import { Mutation } into Ipfs from "w3://ens/ipfs.web3api.eth"

type Mutation {
  ...
```

:::tip
:::

### **Implement the `setIpfsData` mutation**

In the `./src/mutation/index.ts` file, import the new types we've defined:

```typescript title="./src/mutation/index.ts"
$snippet: as-simple-storage-mutation-import
```

These new types will not exist yet, but don't worry, they'll be generated in the `./src/mutation/w3/*` folder once the `yarn build` command is run.

Next, we'll implement the `setIpfsData` mutation method. Add this function to the bottom of your `./src/mutation/index.ts` file:

```typescript title="./src/mutation/index.ts"
$snippet: as-simple-storage-mutation
```

As you can see, the `SimpleStorage.sol` smart contract already exposes a `setHash()` method.

In steps `1` and `2`, our SimpleStorage Polywrapper is sending a "sub-query" to the IPFS and Ethereum Polywrappers we imported within our schema. These Polywrappers can be implements as a WebAssembly-based Polywrapper, or a plugin in the client's language (ex: JavaScript). For more information on plugins, see the ["Plugin an Existing JS SDK"](/quick-start/create-plugin-wrappers/create-js-plugin) documentation.

The `Ethereum_Mutation.callContractMethodAndWait` function also accepts an optional argument, `connection`. This option allows you to select the network in which you're transacting with, by specifying a node's endpoint, or a network (name or chain ID) (e.g. `"rinkeby"`).

To verify everything is implemented correctly, try running `yarn build` and see if the Polywrap build succeeds.
