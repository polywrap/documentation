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

### PolywrapProvider

To start using the Polywrap React library, wrap your application in a `PolywrapProvider`:

```typescript
$snippet: js-react-provider
```

The `PolywrapProvider` instantiates the `PolywrapClient` for all queries below it in the component tree.

The `PolywrapProvider` also accepts URI redirects as props.

You can pass the redirects array into the provider component like so:

```typescript
$snippet: js-react-provider-empty-redirects
```

If you need to use multiple providers, you can do so using the `createPolywrapProvider("...")` method, which accepts the name of your provider as an argument. For example:

```typescript
$snippet: js-react-custom-provider
```

### usePolywrapQuery

The `usePolywrapQuery` is the primary API for executing queries. To run a query within a React component, call `usePolywrapQuery` and pass it a GraphQL query string. When your component renders, `usePolywrapQuery` returns an object from the Polywrap client that contains `execute`, `data`, `loading`, and `error` properties you can use to render your UI.

Here's an example query that you could send:

```typescript
$snippet: js-react-usePolywrapQuery
```

:::tip
By default, the `usePolywrapQuery` hook uses the first `PolywrapProvider` found in the DOM's hierarchy. If you'd like to specify a specific provider to be used, simply set the provider: property:

```typescript
$snippet: js-react-usePolywrapQuery-custom-provider
```
:::

### **usePolywrapInvoke**

The `usePolywrapInvoke` hook works the same as the `usePolywrapQuery` hook, but uses the client's `invoke` syntax instead.

Here's what our "hello world" query from above would look like with `usePolywrapInvoke`.

```jsx
$snippet: js-react-usePolywrapInvoke
```

### **usePolywrapClient**

You can obtain a copy of the client instance from your `PolywrapProvider` using the `usePolywrapClient` hook.

```jsx
$snippet: js-react-usePolywrapClient
```
