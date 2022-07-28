---
id: 'configure-client'
title: 'Configure the Polywrap Client'
---

The Polywrap Client accepts a [`ClientConfig`](../../reference/clients/js/client-config) argument at construction. 

While the [default Client Config](https://github.com/polywrap/monorepo/blob/origin/packages/js/client/src/default-client-config.ts)
is sufficient for some use cases, you will likely want to customize it.
The config you provide to the client will modify and add to the default configuration.

## The `ClientConfig` object

The [`PolywrapClient`](../../reference/clients/js/client-js) can be configured to redirect URIs, use different plugins, 
register interface implementations, set environmental variables, and customize URI resolution.

```typescript
interface ClientConfig {
  redirects: UriRedirect[]; // redirect queries from one uri to another
  plugins: PluginRegistration[]; // declare and configure plugins
  interfaces: InterfaceImplementations[]; // declare interface implementations
  envs: Env[]; // set environmental variables
  uriResolvers: UriResolver[]; // resolve custom URIs
}
```

## Redirects

[URI Redirects](../../concepts/understanding-uri-redirects) can be used to redirect queries from one URI to another. 
This redirection occurs in all queries to the URI, even in cases where one wrapper calls another during its execution.

```typescript
const clientConfig: Partial<ClientConfig> = {
  redirects: [
    {
      from: "wrap://ens/from.eth", // uri to redirect from
      to: "wrap://ens/to.eth", // uri to redirct to
    }
  ],
};
```


## Plugins

To use a [plugin wrapper](../../concepts/understanding-plugins), it has to be registered in the [`ClientConfig`](../../reference/clients/js/client-config).
Each item in the array of plugins contains the URI at which the plugin will be invoked and a `PluginPackage`.
A `PluginPackage` is a factory function the [`PolywrapClient`](../../reference/clients/js/client-js) uses to create new
instances of the plugin. 
Each plugin can have its own configuration.

```typescript
const clientConfig: Partial<ClientConfig> = {
  plugins: [
    {
      uri: "wrap://ens/ethereum.polywrap.eth",
      plugin: ethereumPlugin({
        networks: {
          testnet: {
            provider: "http://localhost:8545"
          },
        },
        defaultNetwork: "testnet",
      }),
    },
  ],
};
```

## Interfaces

Users can declare custom implementations for an interface by providing the interface URI and one or more URIs that resolve to implementations.

```typescript
const clientConfig: Partial<ClientConfig> = {
  interfaces: [
    {
      interface: "wrap://ens/logger.core.polywrap.eth",
      implementations: ["wrap://ens/js-logger.polywrap.eth"],
    },
  ],
};
```


## Envs

Users can provide wrapper-specific environmental variables by providing the wrapper URI and an object with strings as keys.

```typescript
const clientConfig: Partial<ClientConfig> = {
  envs: [
    {
      uri: "wrap://ens/wrapper.eth",
      env: {
        connection: {
          networkNameOrChainId: "polygon",
        },
      },
    },
  ],
};
```

## Uri Resolvers

By default, the Client can resolve ENS, IPFS, and filesystem URIs.
It is possible to use custom URI Resolvers as well.
Documentation on how to do so is coming soon!