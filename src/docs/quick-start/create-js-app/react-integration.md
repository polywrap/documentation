---
id: 'react-integration'
title: React integration
---

To use the Polywrap React integration, you'll need to install the `@web3api/react` package.

```bash
npm install --save @web3api/react
```

An example React application can be found [here](https://github.com/polywrap/demos/tree/main/hello-world/app/react.js).

### **Web3ApiProvider**

Once installed, the first step is to add the `Web3ApiProvider` to your DOM. This will instantiate an instance of the `Web3ApiClient` for all queries within the nested DOM hierarchy to use.

To use the provider, simply wrap it around whatever DOM hierarchy you'd like to use Polywrap within:

```jsx
$snippet: js-react-provider
```

#### **Web3ApiProvider Props**

The `Web3ApiProvider` component's props are the same as the `Web3ApiClient` constructor's arguments. For example, you can configure redirects like so:

```jsx
$snippet: js-react-provider-empty-redirects
```

#### **Multiple Web3ApiProviders**

If you need to use multiple providers, you can do so using the `createWeb3ApiProvider("...")` method, which accepts the name of your provider as an argument. For example:

```jsx
$snippet: js-react-custom-provider
```

### **useWeb3ApiQuery**

After enabling your React application with the Web3ApiProvider, you may now use the `useWeb3ApiQuery` hook to send Polywrap queries!

Here's what our "hello world" query from above would look like if we used this method.

```jsx
$snippet: js-react-useWeb3ApiQuery
```

:::tip
By default, the `useWeb3ApiQuery` hook uses the first Web3ApiProvider found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the `provider:` property:

```jsx
$snippet: js-react-useWeb3ApiQuery-custom-provider
```

### **useWeb3ApiInvoke**

The `useWeb3ApiInvoke` hook works the same as the `useWeb3ApiQuery` hook, but uses the client's `invoke` syntax instead.

Here's what our "hello world" query from above would look like with `useWeb3ApiInvoke`.

```jsx
$snippet: js-react-useWeb3ApiInvoke
```

### **useWeb3ApiClient**

You can obtain a copy of the client instance from your `Web3ApiProvider` using the `useWeb3ApiClient` hook.

```jsx
$snippet: js-react-useWeb3ApiClient
```

:::
