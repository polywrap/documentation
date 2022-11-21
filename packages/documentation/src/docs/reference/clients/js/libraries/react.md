---
id: react
title: '@polywrap/react'
---

<a href="https://www.npmjs.com/package/@polywrap/react" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/npm/v/@polywrap/react.svg" alt="npm"/>
</a>

<br/>
<br/>

The purpose of the Polywrap React library is to simplify integration of Polywrap into React applications.

## Installation

```bash
npm install @polywrap/react
```

## Usage

### **PolywrapProvider**

Once installed, the first step is to add the `PolywrapProvider` to your DOM. This will instantiate an instance of the `PolywrapClient` for all queries within the nested DOM hierarchy to use.

To use the provider, simply wrap it around whatever DOM hierarchy you'd like to use Polywrap within:

```jsx
$snippet: js-react-provider
```

#### **PolywrapProvider Props**

The `PolywrapProvider` component's props are the same as the `PolywrapClient` constructor's arguments. For example, you can configure URI redirects like so:

```jsx
$snippet: js-react-provider-empty-redirects
```

#### **Multiple PolywrapProviders**

If you need to use multiple providers, you can do so using the `createPolywrapProvider("...")` method, which accepts the name of your provider as an argument. For example:

```jsx
$snippet: js-react-custom-provider
```

### **usePolywrapClient**

You can obtain a copy of the client instance from your `PolywrapProvider` using the `usePolywrapClient` hook.

```jsx
$snippet: js-react-usePolywrapClient
```

### **usePolywrapInvoke**

After enabling your React application with the PolywrapProvider, you may now use the `usePolywrapInvoke` hook to call into wrappers!

```jsx
$snippet: js-react-usePolywrapInvoke
```

:::tip
By default, the `usePolywrapInvoke` hook uses the first PolywrapProvider found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the `provider:` property:

```jsx
$snippet: js-react-usePolywrapInvoke-custom-provider
```
:::

### **usePolywrapQuery**

The `usePolywrapQuery` hook works the same as the `usePolywrapInvoke` hook, but uses the client's `query` syntax instead.

```jsx
$snippet: js-react-usePolywrapQuery
```
