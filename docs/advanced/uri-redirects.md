---
id: uri-redirects
title: 'URI redirects'
---

Similar to how browsers can redirect from one URI to another, the Polywrap client can have custom URI redirects configured as well.

For example, if we'd like to redirect all queries to the `ens/api.helloworld.polywrap.eth` URI to our own custom URI (`ens/api.myhelloworld.eth` , for example), we'd simply configure the client like so:

```typescript
const client = new Web3ApiClient({
  redirects: [
    {
      from: `ens/api.helloworld.polywrap.eth`,
      to: `ens/api.myhelloworld.eth`,
    },
  ],
});
```

:::caution
The `ens/api.myhelloworld.eth` wrapper must fully implement the `ens/api.helloworld.polywrap.eth` schema.
:::
