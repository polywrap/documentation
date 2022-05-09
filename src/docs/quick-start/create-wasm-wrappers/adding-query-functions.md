---
id: 'adding-query-functions'
title: 'Adding new query functions'
---

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
$snippet: as-simple-storage-query
```

To verify everything is implemented correctly, try running `yarn build` and see if the Polywrap build succeeds.
