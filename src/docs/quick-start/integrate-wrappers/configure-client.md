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

## The `ClientConfigBuilder`

You can use the `ClientConfigBuilder` class present in `@polywrap/client-config-builder-js` to easily build the `ClientConfig` object:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .build();

// We must specify `noDefaults: true` because they are included with the `addDefaults()` method of the ClientConfigBuilder.
const client = new PolywrapClient(config, { noDefaults: true });
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

We can use the `ClientConfigBuilder` to easily add a URI Redirect to our config:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .addUriRedirect("wrap://ens/from.eth", "wrap://ens/to.eth")
  .build();
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

We can use the `ClientConfigBuilder` to easily add a Plugin to our config:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .addPlugin(
    "wrap://ens/ethereum.polywrap.eth", 
    ethereumPlugin({
      networks: {
        testnet: {
          provider: "http://localhost:8545"
        },
      },
      defaultNetwork: "testnet",
    })
  )
  .build();
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

We can use the `ClientConfigBuilder` to easily add an Interface implementation to our config:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .addInterfaceImplementation("wrap://ens/logger.core.polywrap.eth", "wrap://ens/js-logger.polywrap.eth")
  .build();
```

## Envs

Users can provide wrapper-specific environmental variables by providing the wrapper URI and an object with strings as keys.
Wrapper developers use the [Wrapper Schema](../wrapper-schema#environmental-variables) to specify which methods accept or require environmental variables.

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

We can use the `ClientConfigBuilder` to easily add an Interface implementation to our config:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .addEnv(
    "wrap://ens/wrapper.eth", 
    {
      connection: {
        networkNameOrChainId: "polygon",
      },
    }
  )
  .build();
```

## Uri Resolvers

By default, the Client can resolve ENS, IPFS, and filesystem URIs.
It is possible to use custom URI Resolvers as well.
Documentation on how to do so is coming soon!