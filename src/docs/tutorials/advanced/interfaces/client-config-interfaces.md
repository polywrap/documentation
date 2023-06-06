---
id: client-config-interfaces
title: Configure interfaces in the client
---

The [Polywrap Client](https://github.com/polywrap/javascript-client) can be configured to use one or more implementations for
an abstract interface.

You can use the [Client Config Builder](https://github.com/polywrap/javascript-client/tree/origin-dev/packages/client-config-builder) to register implementations for an interface URI.

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  .addInterfaceImplementations(
    "wrap://ens/wrap.interface.eth",
    [
      "wrap://ens/wrap.implementation1.eth",
      "wrap://ens/wrap.implementation2.eth",
      "wrap://ens/wrap.implementation3.eth",
    ]
  )
  .build();
```