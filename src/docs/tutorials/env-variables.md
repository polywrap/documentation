---
id: env-variables
title: 'Environmental variables'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Wrapper developers can declare a map of environmental variables for application developers to provide.

If you're an application developer, check out [`ClientConfig`](./integrate-wrappers/configure-client#envs). If you're a wrapper developer, keep reading!

## Schema declaration

To use environmental variables, wrapper developers must first declare an `Env` type and add the `@env` directive to methods in the [Wrapper Schema](./wrapper-schema). You can learn more about the schema declarations in the [Environmental Variables](./wrapper-schema#environmental-variables) section of the Wrapper Schema documentation.

```graphql
type Env {
  str: String!
}

type Module {
  foo(
    arg: String!
  ): String! @env(required: true)
}
```

## Access Env in the module

Environmental variables can be used in both plugin wrappers and Wasm wrappers.

### Env in plugin wrappers

Plugin wrapper developers can access the `Env` instance as a class property.

```typescript
const env: Env = this.env;
```

### Env in wasm wrappers

Wasm wrapper developers can access the `Env` instance by accepting the `Env` as a second argument in their module's methods. When an application developer invokes the method, the environmental variables they set in their [`ClientConfig`](./integrate-wrappers/configure-client#envs) will be provided.

<Tabs
defaultValue="as"
values={[
{label: 'AssemblyScript', value: 'as'},
{label: 'Rust', value: 'rs'},
]}>
<TabItem value="as">

```typescript
export class Module extends ModuleBase {
  // App developers are required to provide Env to invoke this method
  methodRequireEnv(_: Args_methodRequireEnv, env: Env): Env {
    return env;
  }

  // Env is optional when invoking this method
  methodOptionalEnv(_: Args_methodOptionalEnv, env: Env | null): Env | null {
    return env ? (env as Env) : null;
  }
}
```

</TabItem>
<TabItem value="rs">

```rust
impl ModuleTrait for Module {
  // App developers are required to provide Env to invoke this method
  fn method_require_env(_: ArgsMethodRequireEnv, env: Env) -> Env {
    env
  }

  // Env is optional when invoking this method
  fn method_optional_env(args: ArgsMethodOptionalEnv, env: Option<Env>) -> Option<Env> {
    env
  }
}
```

</TabItem>
</Tabs>