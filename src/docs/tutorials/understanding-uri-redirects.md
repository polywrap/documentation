---
id: understanding-uri-redirects
title: 'URI redirects'
---

Similar to how browsers can redirect from one URI to another, the Polywrap client can have custom URI redirects configured as well.

For example, if we'd like to redirect all queries from the `ens/api.helloworld.polywrap.eth` URI to our own custom URI (`ens/api.myhelloworld.eth` , for example), we'd simply configure the client like so:

```typescript
$snippet: js-understanding-redirects
```

:::caution
The `ens/api.myhelloworld.eth` wrapper must fully implement the `ens/api.helloworld.polywrap.eth` schema.
:::
