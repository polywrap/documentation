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
import {
  Ethereum_Query,
  Ipfs_Query,
  Input_getData,
  Input_getIpfsData
} from './w3';

...

export function getIpfsData(input: Input_getIpfsData): string {
  const hash = Ethereum_Query.callContractView({
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

To verify everything is implemented correctly, try running `yarn build` and see if the Polywrap build succeeds.
