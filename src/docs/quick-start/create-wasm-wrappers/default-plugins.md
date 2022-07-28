---
id: default-plugins
title: Default plugins
---

Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:

- ENS Resolver
- Ethereum
- Filesystem
- Filesystem Resolver
- Graph-node
- HTTP
- IPFS
- IPFS Resolver
- Logger
- SHA3
- UTS-46

The full default client configuration can be viewed [here](https://github.com/polywrap/monorepo/blob/origin/packages/js/client/src/default-client-config.ts).

In this guide, we'll show you what it's like to import these default plugins into your wrapper, and explain what some commonly used plugins do.

## Import to schema
We'll use one of the default plugins, Ethereum, to show how you can import its modules into your wrapper's schema (`schema.graphql` file).

`#import { Module, Connection } into Ethereum from "wrap://ens/ethereum.polywrap.eth"`

Below, we explain what each part of this code means.

- `#import`
    - Imports specific modules from a deployed or local plugin

- `{ Module, Connection }`
    - These are specific modules that we're unpacking from the one of Polywrap's default plugins, Ethereum.

- `into Ethereum`
    - This is a namespace, enabling you to use the modules in your schema e.g. `Ethereum_Module` or `Ethereum_Connection`

- `from "wrap://ens/ethereum.polywrap.eth"`
    - `wrap://` is the Polywrap URI schema.
    - `ens` is the URI authority. It tells the Polywrap client what kind of URI it needs to resolve. The `ens` authority tells the Polywrap client that what follows is an ENS address that resolves to a decentralized storage hosting a wrapper. Other valid authorities include `ipfs` for IPFS content hashes, `fs` for wrappers located on your local filesystem (often used while testing wrappers), or a custom authority that may be handled by a custom URI resolver.
    - `ethereum.polywrap.eth` is the URI path, which in this case is an ENS address.
    - Note: The client redirects queries from the URI of a plugin wrapper to the plugin object that exists in memory. While plugins typically use an ENS URI for readability, the client does not need to query the ENS registry or an external storage location. See our section on [URI redirects](../../concepts/understanding-uri-redirects.md) for more information.

## Use in Wasm Wrapper
Once types have been imported, the functionality of these imported modules can be used in wrapper development.

Upon `yarn build`, the imported types and modules will be made available to you in the `src/wrap` folder.  To use them, you simply need to import the specific modules that you'd like to use.

If you're building an AssemblyScript-based wrapper, the import might look like this:

```typescript
import { Ethereum_Module, Ethereum_Connection } from './wrap';
```

The `Ethereum_Module` will contain the methods shown [here](https://github.com/polywrap/monorepo/blob/255caa0a40130f0733a31ac28efed272bfa00889/packages/js/plugins/ethereum/src/schema.graphql#L104), under the `Module` type.

Once imported, you can access methods like so:

`Ethereum_Module.callContractMethod({ ... })`

## Commonly used default plugins
This section contains guides on commonly used default plugins: Ethereum, Subgraph, HTTP, and Logger.

### Ethereum
The Ethereum plugin enables wrappers to query the ethereum blockchain.

Schema: [Link](https://github.com/polywrap/monorepo/blob/prealpha/packages/js/plugins/ethereum/src/schema.graphql)

Example:

```typescript
export function getData(input: Input_getData): u32 {
  const res = Ethereum_Module.callContractView({
    address: input.address,
    method: 'function get() view returns (uint256)',
    args: null,
    connection: input.connection,
  }).unwrap();

  return U32.parseInt(res);
}
```

### Subgraph
The subgraph plugin enables wrappers to query The Graph's subgraphs.

Schema: [Link](https://github.com/polywrap/monorepo/blob/2947f956485decb43363f42c99c2a6176a25bde8/packages/js/plugins/graph-node/schema.graphql#L3-L9)

#### Example Implementation:

In our `./src/schema.graphql` file, we'll write the schema for our wrapper.

At the top of this file, import the GraphNode module into your wrapper:

```graphql
#import { Module } into GraphNode from "wrap://ens/graph-node.polywrap.eth"
```

Then, define the types and fields on the `querySubgraph` method.

```graphql
  querySubgraph(
    subgraphAuthor: String!
    subgraphName: String!
    query: String!
  ): JSON!
```

We'll now implement the `querySubgraph` method in AssemblyScript.

At the top of `index.ts`, include these import statements:

```typescript
import { GraphNode_Module, Args_querySubgraph } from './wrap';
import { JSON } from '@polywrap/wasm-as';
```

Then, implement the `querySubgraph` method:

```typescript
export function querySubgraph(args: Args_querySubgraph): JSON.Value {
  const response = GraphNode_Module.querySubgraph({
    subgraphAuthor: args.subgraphAuthor,
    subgraphName: args.subgraphName,
    query: args.query,
  }).unwrap();

  const json = JSON.parse(response);
  const obj = json as JSON.Obj;
  return obj.valueOf().get('data') as JSON.Value;
}
```

Example query to test your method:

```typescript
subgraphAuthor: 'ensdomains',
subgraphName: 'ens',
query: '{\ndomains(first: 5){\nid\nname\nlabelName\nlabelhash\n}\n}',
```

### HTTP
The HTTP plugin enables wrappers to perform HTTP queries in JavaScript applications.

Schema: [Link](https://github.com/polywrap/monorepo/blob/2947f956485decb43363f42c99c2a6176a25bde8/packages/js/plugins/http/schema.graphql#L30-L33)

#### Example Implementation
In this example, we will implement a simple `Ping` method which pings CoinGecko to see their server status using an HTTP Get request from your wrapper.

In our `./src/schema.graphql file`, we’ll write the schema for our wrapper.

At the top of this file, import the HTTP module into your wrapper:

```graphql
#import { Module, Request, Response } into HTTP from "wrap://ens/http.polywrap.eth"
```

Then, define the types and fields on the `Ping` method.  First, add a new `Ping` type at the bottom of the schema.

```graphql
type Ping {
  gecko_says: String!
}
```

Then, add an argument-less method called `ping` that returns a non-nullable `Ping` to the `Module` type. 
Our completed schema looks like this:

```graphql
#import { Module, Request, Response } into HTTP from "wrap://ens/http.polywrap.eth"
type Module {
  ping: Ping!
}

type Ping {
  gecko_says: String!
}
```

Now, we'll implement the `ping` method in `./src/index.ts`

At the top of the file, we'll import the HTTP/Ping methods and types.

```typescript=
import {
  HTTP_Module,
  HTTP_ResponseType,
  Ping,
} from './wrap';
```

Then, implement Ping function:

```typescript
export function ping(): Ping {
    
  // Writing the HTTP request / response
  const response = HTTP_Module.get({
    url: 'https://api.coingecko.com/api/v3/ping',
    request: {
      headers: [],
      urlParams: [],
      body: '',
      responseType: HTTP_ResponseType.TEXT,
    },
  }).unwrap();
    
  // Error handling for the response
  if (!response || response.status !== 200 || !response.body) {
    const errorMsg =
      response && response.statusText
        ? (response.statusText as string)
        : 'An error occurred while fetching data from Coingecko API';
    throw new Error(errorMsg);
  }  
    
  const json = <JSON.Obj>JSON.parse(response.body);
    
 // Response from Coingecko with field `geckoSays`
  const geckoSays = json.getString('gecko_says');
  if (geckoSays) {
    return {
      gecko_says: geckoSays.valueOf(),
    };
  }
  throw new Error('Invalid response body!');
}
```

### Logger
The Logger plugin enables logging in a Wasm wrapper, which can be useful for debugging.

In our `./src/schema.graphql file`, import the Logger module into your wrapper:

```graphql
#import { Module } into Logger from "wrap://ens/js-logger.polywrap.eth"
```

Then in your implementation file `./src/index.ts`, import the Logger function:

```typescript
import {
  Logger_Module,
  Logger_Logger_LogLevel,
} from './wrap';
```

And use it like so:

```typescript
 Logger_Module.log({
    level: Logger_Logger_LogLevel.INFO,
    message: `Insert useful log message here`,
  });
```

When you run your test e.g. `yarn test:e2e`, you will see the logged message in the console.