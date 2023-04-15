---
id: client-config-interfaces
title: Configure interfaces in the client
---

The [Polywrap Client](../../reference/clients/js/client-js) can be configured to use one or more implementations for
an abstract interface wrapper.

The `interfaces` property of the `ClientConfig` is declared as an array of `InterfaceImplementation`.
Each `InterfaceImplementation` is assigned an interface wrapper URI and an array of URIs pointing to Wasm and plugin wrappers
that implement the interface.

For example, the URI Resolver interface is provided three implementation URIs in the 
[Polywrap Client default configuration](https://github.com/polywrap/monorepo/blob/origin-0.10/packages/js/client/src/default-client-config.ts).

```typescript
interfaces: [
  {
    interface: coreInterfaceUris.uriResolver,
    implementations: [
      new Uri("wrap://ens/ipfs-resolver.polywrap.eth"),
      new Uri("wrap://ens/ens-resolver.polywrap.eth"),
      new Uri("wrap://ens/fs-resolver.polywrap.eth"),
    ],
  }
]
```