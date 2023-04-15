---
id: client-config-interfaces
title: Configure interfaces in the client
---

The [Polywrap Client](../../reference/clients/js/client-js) can be configured to use one or more implementations for
an abstract interface wrapper.

You can use the [Client Config Builder](../../reference/clients/js/client-config-builder-js.md) to register implementations for an interface URI.

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