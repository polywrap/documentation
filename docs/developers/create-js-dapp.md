---
id: create-js-dapp
title: Create a JavaScript dApp
---

In this guide, we'll show you how you can integrate Web3API into your JavaScript dApp.

## **Prerequisites**

As prerequisites for this guide, we'll be using the React frontend library and we recommend TypeScript.

## **Installation**

```
npm install --save-dev @web3api
```

> ⚠️
>
> **Note:** The @web3api package is currently not available on npm. Please stay tuned!

## **Getting started**

You can create a Web3ApiClient simply by instantiating it.

```
import { Web3ApiClient } from "@web3api/client-js";

const client = new Web3ApiClient()
```

At this point, you can already send queries to Web3APIs. In the simple example below, we send one to a "hello world" Web3API.

```
client.query({ uri: 'api.helloworld.web3api.eth', query: '{ sayHello }' })
```

Most Web3APIs require plugins before they can be used.

## **Implementing plugins**

> The example code below uses the MetaMask global API injected at `window.ethereum`. This isn't needed if your dApp doesn't use Ethereum.

In the code snippet below, we declare a variable `redirects` which stores an array of URI redirects.

For each URI redirect object, declare a `from` key with the URI as the value and also a `to` key with the resource as the value.

Our example's redirects includes URIs for Ethereum, IPFS, and ENS, which point to their respective plugins. The `redirect` array is then passed in as an argument to the instantiation of `Web3ApiClient`.

The `Web3ApiClient` iterates through all redirects, searching for plugins and implementing them. After the final plugin has been resolved, it then resolves the Web3API package.

```
import { Web3ApiClient, UriRedirect } from "@web3api/client-js";
import { ensPlugin } from "@web3api/ens-plugin-js";
import { ethereumPlugin } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin } from "@web3api/ipfs-plugin-js";

export async function setupWeb3ApiClient(): Promise<Web3ApiClient> {
  const ethereum = (window as any).ethereum;
  if (ethereum && ethereum.enable) {
    await ethereum.enable();
  }

  const redirects: UriRedirect[] = [
    {
      from: "w3://ens/ethereum.web3api.eth",
      to: ethereumPlugin({ provider: ethereum }),
    },
    {
      from: "w3://ens/ipfs.web3api.eth",
      to: ipfsPlugin({ provider: "https://ipfs.io" }),
    },
    {
      from: "w3://ens/ens.web3api.eth",
      to: ensPlugin({}),
    }
  ];

  return new Web3ApiClient({ redirects });
}
```

### **More on plugins**

The redirects can not only be used for forwarding Web3API requests to plugins, but also to any other URI.

```
// Example custom redirect
const client = new Web3ApiClient({
  redirects: [
    {
      from: "ens/ipfs.web3api.eth",
      to: "ens/custom-ipfs.eth"
    }
  ]
})
```

> Note: the customer-ipfs.eth Web3API must fully implement the ipfs.web3api.eth schema.

## **React-specific module**

For React applications, you'll also install the `@web3api/react` package.

```
npm install --save-dev @web3api/react
```

### **`Web3ApiProvider`**

The `Web3ApiProvider` component makes redirects available to any nested components that need access to them.

To use the provider, simply wrap it around the rendered `<App />` component.

```
import React from "react";
import ReactDOM from "react-dom";
import { Web3ApiProvider } from '@web3api/react';

ReactDOM.render(
  <Web3ApiProvider>
    <Test />
  </Web3ApiProvider>,
  document.getElementById("root")
);
```

> Note:
>
> The `Web3ApiProvider` uses the same constructor arguments as the `Web3ApiClient`. You can pass down redirects as props to the `Web3ApiProvider` component.
>
> ```
> <Web3ApiProvider redirects={ [...] }>
> ```
>
> **Advanced usage**
> If you need to use multiple providers, you can do so using the `createWeb3ApiProvider(<string>)` method, which accepts the name of your provider as an argument.
>
> ```
> const OtherWeb3ApiProvider = createWeb3ApiProvider('other');
>
> <OtherWeb3ApiProvider>
>   <App/>
> </OtherWeb3ApiProvider>
>
> ```

### **`useWeb3ApiQuery()`**

After implementing the provider, your dApp can send queries using the `useWeb3ApiQuery` method.

Here's what our "hello world" query from above would look like if we used this method.

```
const { data, error, loading } = useWeb3ApiQuery({
  uri: 'ens/helloworld.web3api.eth',
  query: '{ sayHello }'
})
```

> Note:
>
> If you'd like to specific a provider to use, simple set the optional provider property:
>
> ```
> const { data, error, loading } = useWeb3ApiQuery({
>  provider: 'other',
>  uri: 'ens/helloworld.web3api.eth',
>  query: '{ sayHello }'
> });
> ```
