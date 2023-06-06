---
id: 'configure-client'
title: 'Configuring the Polywrap Client'
---

The Polywrap Client accepts an optional [`CoreClientConfig`](https://github.com/polywrap/javascript-client/blob/origin-dev/packages/core/src/types/CoreClient.ts#L12) argument at construction.

If none is provided, a default configuration is used which should be sufficient for most use-cases.

However, if you wish to configure the client, you can supply your own config object by building it using the [Client Config Builder](https://github.com/polywrap/javascript-client/tree/origin-dev/packages/client-config-builder).

## The `ClientConfigBuilder`

You can use the `ClientConfigBuilder` class to easily build the `ClientConfig` object:

```typescript
const config = new ClientConfigBuilder()
  .addDefaults()
  // add or remove configs here using ClientConfigBuilder methods...
  .build();

const client = new PolywrapClient(config);
```
