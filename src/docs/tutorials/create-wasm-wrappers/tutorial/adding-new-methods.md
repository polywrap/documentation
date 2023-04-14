---
id: 'adding-new-methods'
title: 'Adding new Methods'
---

## **Custom functionality: IPFS SimpleStorage**

It's time to build and customize your own Polywrap Wasm wrapper! We'll be adding IPFS support to the SimpleStorage API.

### **Update the schema**

The first step to adding new wrapper functionality is defining the method we want our users to invoke. Add the following method & custom data types to your `./src/schema.graphql` schema file:

```graphql title="./src/schema.graphql"
type Module {
...
$snippet: gql-simple-storage-setIpfs-schema
```

### **Implement the `setIpfsData` method**

In the `./src/index.ts` file, import the new types we've defined:

```typescript title="./src/index.ts"
$snippet: as-simple-storage-index-imports
```

These new types will not exist yet, but don't worry, they'll be generated in the `./src/wrap/*` folder once the `yarn build` command is run.

Next, we'll implement the `setIpfsData` method. Add this function to the bottom of your `./src/index.ts` file:

```typescript title="./src/index.ts"
$snippet: as-simple-storage-setIpfs-method
```

As you can see, the `SimpleStorage.sol` smart contract already exposes a `setHash()` method.

In steps `1` and `2`, our SimpleStorage Wasm wrapper is sending a "sub-invocation" to the IPFS and Ethereum plugin wrappers we imported in our schema. Wrappers can be implemented as a WebAssembly-based wrapper, or a plugin wrapper in the client's language (ex: JavaScript). For more information on plugins, see the ["Plugin an Existing JS SDK"](/tutorials/create-plugin-wrappers/create-js-plugin) documentation.

The `Ethereum_Module.callContractMethodAndWait` function also accepts an optional argument, `connection`. This option allows you to select the network which you're transacting with, by specifying a node's endpoint, or a network (name or chain ID) (e.g. `"rinkeby"`).

To verify everything is implemented correctly, try running `yarn build` and see if the Polywrap build succeeds.

### **Adding more methods**

With our first method implementation complete, it's now time to add more. The steps are the same as above.

Update the `./src/schema.graphql` file like so:

```graphql title="./src/schema.graphql"
type Module {
...
$snippet: gql-simple-storage-getIpfs-schema
...
}
```

Implement the `getIpfsData(...)` method like so in `./src/index.ts`:

```typescript title="./src/index.ts"
$snippet: as-simple-storage-getIpfs-method
```

To verify everything is implemented correctly, try running `yarn build` and see if the Polywrap build succeeds.
