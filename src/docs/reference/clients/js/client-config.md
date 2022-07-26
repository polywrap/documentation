---
id: 'client-config'
title: Client Config
---

The Polywrap Client accepts a `ClientConfig` argument at construction.
The default configuration can be modified to redirect URIs, use different plugins, register interface implementations,
set environmental variables, and customize URI resolution.

```typescript
interface ClientConfig<TUri extends Uri | string = string> {
  redirects: UriRedirect<TUri>[]; // redirect queries from one uri to another
  plugins: PluginRegistration<TUri>[]; // declare and configure plugins
  interfaces: InterfaceImplementations<TUri>[]; // declare interface implementations
  envs: Env<TUri>[]; // set environmental variables
  uriResolvers: UriResolver[]; // resolve custom URIs
}
```

## Redirects

The `redirects` property can be used to redirect queries from one URI to another.
This redirection occurs in all queries to the URI, even in cases where one wrapper calls another during its execution.

```typescript
interface UriRedirect<TUri = string> {
  from: TUri; // uri to redirect from
  to: TUri; // uri to redirct to
}
```

## Plugins

Polywrap plugin wrappers are written in a Client’s native language.
They offer a user experience similar to that of wrappers, but with different benefits.

Plugins are declared and constructed in the Client config by providing an array of `PluginRegistration`.
Each `PluginRegistration` contains the URI at which the plugin will be queried and a `PluginPackage`.
A `PluginPackage` is a factory function the [`PolywrapClient`](../../reference/clients/js/client-js) uses to create new
instances of the plugin.
Each plugin can have its own configuration.

```typescript
interface PluginRegistration<TUri = string> {
  uri: TUri; // URI that will be redirected to plugin
  plugin: PluginPackage<unknown>; // plugin factory
}
```

## Interfaces

Users can declare custom implementations for an interface by providing the interface URI and one or more URIs that resolve to implementations.

```typescript
interface InterfaceImplementations<TUri = string> {
  interface: TUri; // interface URI
  implementations: TUri[]; // URIs of wrappers implementing interface
}
```

## Envs

Because wrapper calls are sandboxed and stateless, they cannot access the global state that persists outside the call.
Users can instead provide wrapper-specific environmental variables in the Client configuration.
Wrapper developers are expected to inform users which environmental variables should be set for their API.

```typescript
interface Env<TUri = string> {
  uri: TUri; // URI of wrapper
  env: Record<string, unknown>; // environmental variables used by the module
}
```

## Uri Resolvers

Users can extend the Client's URI resolution capabilities by providing new implementations of `UriResolver`.
A `UriResolver` takes a URI as input and resolves it to a wrapper or plugin.

By default, the Client includes an ExtendableUriResolver that can accept ENS, IPFS, and filesystem URIs as input and fetch wrappers from those sources.
It is "extendable" in the sense that it works with any plugin or wrapper that implements the `UriResolverInterface`.
The Client's default resolvers can also resolve URI's that point to redirects, plugins, and cached wrappers.

```typescript
abstract class UriResolver {
  public abstract get name(): string;

  public abstract resolveUri(
    uri: Uri,
    client: Client,
    cache: ApiCache,
    resolutionPath: UriResolutionStack
  ): Promise<UriResolutionResult>;
}
```

## Default Configuration

The current default `ClientConfig` for the JavaScript implementation of the `PolywrapClient` can be viewed on [Github][default config].
When a user provides a `ClientConfig` to the Client, the default configuration is still applied.
The default configuration is modified by the user's configuration.

## Sanitization

The Client's configuration is *sanitized* when the Client is constructed.
During the sanitization process, URI strings are validated and transformed into instances of the `Uri` class.

[default config]: https://github.com/polywrap/monorepo/blob/origin/packages/js/client/src/default-client-config.ts