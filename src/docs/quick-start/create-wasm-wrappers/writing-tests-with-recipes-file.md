---
id: 'writing-tests-with-recipes-file'
title: 'Writing tests using the recipes file'
---

### **Testing**

In order to test this new functionality, we'll update the existing `./recipes/e2e.json` recipe file to include the new queries we've added (`setIpfsData`, and `getIpfsData`).

Add the following `.graphql` query files to the `./recipes` folder.

`setIpfs.graphql`:

```graphql title="./recipes/setIpfs.graphql"
$snippet: gql-simple-storage-setIpfsData-recipe-schema
```

`getIpfs.graphql`:

```graphql title="./recipes/getIpfs.graphql"
$snippet: gql-simple-storage-getData-recipe-schema
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

With our recipe complete, we'll deploy and test our Polywrapper locally in the next section!
