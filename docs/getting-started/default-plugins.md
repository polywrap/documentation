---
id: 'default-plugins'
title: Default Plugins
---

Polywrap plugins enable existing SDKs implemented in the client's language (e.g. JavaScript) to be queried as if they were normal polywrappers. To learn more about Polywrap plugins in general, visit the [Understanding Plugins](getting-started/understanding-plugins) page.

Default plugins come with the Polywrap JS client. They include the following:

1. [ENS](#)
2. [Ethereum](#)
3. [Graph Node](#)
4. [HTTP](#http)
5. [IPFS](#)
6. [Logger](#)
7. [SHA3](#)
8. [UTS46](#)

## HTTP

The HTTP plugin currently supports two different methods: `GET` and `POST`. Similiar to using `axios`, when defining a request, you need to specify the response type. Headers and query parameters may also be defined.

The GraphQL schema can be found [here](https://github.com/polywrap/monorepo/blob/prealpha/packages/js/plugins/http/schema.graphql);

### Response types

`TEXT` - The server will respond with text, the HTTP plugin will return the text as-is.

`BINARY` - The server will respond with binary data (ArrayBuffer), the HTTP plugin will encode as a base64 string and return it.

### `GET` request

Below is a sample invocation of the `GET` request with custom request headers and query parameters (`urlParams`).

```ts
const response =
  (await web3ApiClient.query) <
  { get: Response } >
  {
    uri: new Uri('w3://ens/http.web3api.eth'),
    query: `
    query {
      get(
        url: "http://www.example.com/api"
        request: {
          responseType: TEXT
          urlParams: [{key: "query", value: "foo"}]
          headers: [{key: "X-Request-Header", value: "req-foo"}]
        }
      )
    }
  `,
  };
```

### `POST` request

Below is sample invocation of the `POST` request with custom request headers and query parameters (`urlParams`). It is also possible to set request body as shown below.

```ts
const response =
  (await web3ApiClient.query) <
  { get: Response } >
  {
    uri: new Uri('w3://ens/http.web3api.eth'),
    query: `
    query {
      post(
        url: "http://www.example.com/api"
        request: {
          responseType: TEXT
          urlParams: [{key: "query", value: "foo"}]
          headers: [{key: "X-Request-Header", value: "req-foo"}]
          body: "{data: 'test-request'}"
        }
      )
    }
  `,
  };
```

## IPFS

The IPFS Polywrap plugin enables you to make data available to the [IPFS](https://ipfs.io/) network or fetch existing data through its CID, the content identifier.

The GraphQL schema can be found [here](https://github.com/polywrap/monorepo/blob/prealpha/packages/js/plugins/ipfs/schema.graphql);

##
