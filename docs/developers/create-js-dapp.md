---
id: create-js-dapp
title: Integrate Web3API into dApps
---

## **Introduction**

If you're a JavaScript developer building Browser, Node.js, or React based dApps, this guide is for you.

:::tip
In the future, JavaScript will be one of many supported languages. Our goal is to enable the use of Web3APIs in every major programming language.
:::

By the end of this document, you'll gain the following skills:

- How to instantiate the Web3API client in your JavaScript dApp
- Query any Web3API using the Web3PAI client
- Configure custom Web3API URI redirects
- Build React dApps with ease

If you get stuck during this guide, send us a message on our [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

As prerequisites for this guide, we recommend having familiarity with [TypeScript](https://www.typescriptlang.org/). [React](https://reactjs.org/) will also be used in the latter sections.

## **Installation**

To use Web3APIs in your dApp, all you need is the Web3API Client!

```
npm install --save @web3api/client-js
```

The Web3API JavaScript Client works in both Node.js, and browser applications.

:::warning
Currently Chrome and Brave are the only supported browsers. This restriction will be removed very shortly.
:::

:::note
The next section assumes that you're integrating Web3API into an existing dApp project. If you want a quick start with our template project, simply run:

```bash
npx w3 create app react <project-name>
```

Where `<project-name>` is replaced with a custom name of your choosing. For example `my-web3api`.

This command will create a new project folder with a "Hello World" dApp that lets you interact with a simple smart contract by a message via a GraphQL query.

:::

## **Getting started**

Once installed, the next step is to create a `Web3ApiClient` instance:

```typescript
import { Web3ApiClient } from '@web3api/client-js';

const client = new Web3ApiClient();
```

At this point, you can already send queries to Web3APIs. In the simple example below, we send one to the "hello world" Web3API.

```jsx
client.query({
  uri: 'ens/api.helloworld.web3api.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
```

## **Understanding URIs**

Web3APIs are identified using custom URIs ([Uniform Resource Identifier](http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/)). For example:

```
w3://ens/api.helloworld.web3api.eth
```

Web3API URIs have 3 parts:

**Protocol:**  
`w3://` is the name of the Web3API URI resolution protocol. All Web3API clients implement this protocol.

**Authority:**  
For example `ens/` for resolving ENS domains, or `ipfs/` for resolving IPFS content.

**Path:**  
For example `api.domain.eth` for an ENS domain, or `QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP` for an IPFS file/directory.

:::tip
Adding `w3://` to the start of your URIs is options when using a Web3API client.
:::

:::tip
`ens/` and `ipfs/` URI resolution is supported in all Web3API clients by default. Adding custom URI resolvers is possible. More documentation on how to do this will be released soon.
:::

### **URI Redirects**

Similar to how browsers can redirect from one URI to another, the Web3API client can have custom URI redirects configured as well.

For example, if we'd like to redirect all queries to the `ens/api.helloworld.web3api.eth` URI to our own custom URI (`ens/api.myhelloworld.eth` for example), we'd simply configure the client like so:

```typescript
const client = new Web3ApiClient({
  redirects: [
    {
      from: `ens/api.helloworld.web3api.eth`,
      to: `ens/api.myhelloworld.eth`,
    },
  ],
});
```

:::note
The `ens/api.myhelloworld.eth` Web3API must fully implement the `ens/api.helloworld.web3api.eth` schema.
:::

## **Understanding Plugins**

Web3API Plugins enable existing SDKs implemented in the client's language (i.e. JavaScript) to be queried as if they were normal Web3APIs.

For information on how to create your own Web3API Plugin, read the [guide here](/developers/create-js-plugin).

Plugins can be used to enable any native client functionality that cannot be implemented in WebAssembly. Such as sending HTTP requests, or signing with a private key.

### **Default Plugins**

All Web3API clients come equipped with the following default plugins:

- `w3://ens/ens.web3api.eth`
- `w3://ens/ipfs.web3api.eth`
- `w3://ens/ethereum.web3api.eth`
- `w3://w3/logger`

:::warning
This list will be changing as we approach our production release.
:::

### **Plugin URI Redirects**

Plugins are configured using URI Redirects as discussed above. Instead of having the `to:` property be a URI string, we simply pass in the plugin object.

For example, we can add an Ethereum plugin that uses MetaMask (or any other Ethereum JS provider) for its provider & signer!

```typescript
import { ethereumPlugin } from '@web3api/ethereum-plugin-js';

// Enable Metamask
const ethereum = window.ethereum;
await ethereum.request({
  method: 'eth_requestAccounts',
});

// Configure the Ethereum plugin w/ MetaMask
const client = new Web3ApiClient({
  redirects: [
    {
      from: 'w3://ens/ethereum.web3api.eth',
      to: ethereumPlugin({
        provider: ethereum,
      }),
    },
  ],
});
```

## **React Integration**

To use the Web3API React integration, you'll need to install the `@web3api/react` package.

```bash
npm install --save @web3api/react
```

### **Web3ApiProvider**

Once installed, the first step is to add the `Web3ApiProvider` to your DOM. This will instantiate an instance of the `Web3ApiClient` for all queries within the nested DOM hierarchy to use.

To use the provider, simply wrap it around whatever DOM hierarchy you'd like to use Web3API within:

```jsx
import React from 'react';
import { Web3ApiProvider } from '@web3api/react';

export default function App() {
  return (
    <Web3ApiProvider>
      <div>{'Web3API enabled dApp goes here!'}</div>
    </Web3ApiProvider>
  );
}
```

#### **Web3ApiProvider Props**

The `Web3ApiProvider` component's props are the same as the `Web3ApiClient` constructor's arguments. For example, you can configure redirects like so:

```jsx
<Web3ApiProvider redirects={ [...] }/>
```

#### **Multiple Web3ApiProviders**

If you need to use multiple providers, you can do so using the `createWeb3ApiProvider("...")` method, which accepts the name of your provider as an argument. For example:

```jsx
import { createWeb3ApiProvider } from '@web3api/react';

const CustomWeb3ApiProvider = createWeb3ApiProvider('custom');

<CustomWeb3ApiProvider>
  <Custom />
</CustomWeb3ApiProvider>;
```

### **useWeb3ApiQuery**

useWeb3APIQuery (loading, etc)

After enabling your React application with the Web3ApiProvider, you may now use the `useWeb3ApiQuery` hook to send Web3API queries!

Here's what our "hello world" query from above would look like if we used this method.

```jsx
const { data, error, loading } = useWeb3ApiQuery({
  uri: 'ens/api.helloworld.web3api.eth',
  query: `{
    logMessage(message: "Hello World!")
  }`,
});
```

:::note
By default, the `useWeb3ApiQuery` hook uses the first Web3ApiProvider found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the `provider:` property:

```jsx
useWeb3ApiQuery({
  provider: 'custom',
  ...
});
```

:::
