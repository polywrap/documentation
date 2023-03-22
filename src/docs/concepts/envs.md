---
id: envs
title: Envs
---

Envs or "Environment Variables" are [WRAP URI](./uris)-mapped objects containing settings that are passed into a [Wrap](./wraps) with the corresponding URI.

For example, if we have the following Env:

```js
{
  "wrap://ens/hello.world.eth": {
    foo: "bar"
  }
}
```

If we were to [invoke](./invoke) the Wrap under `wrap://ens/hello.world.eth`, it would have a globally-available `Env` object, whose value would be `{ foo: "bar" }`.

It is up to the Wrap developer to decide on how to use the available Env object.

The Wrap developer [can also declare an `Env` type](/tutorials/env-variables) as part of their Schema, thus communicating to outside developers the structure of the object used for configuring of their Wraps.
