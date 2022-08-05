---
id: polywrap-cli
title: Polywrap CLI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The [`polywrap`](../reference/cli/polywrap-cli) command line interface (CLI) is a necessary and helpful tool for interacting with the Polywrap toolchain. It is expressive and easy to use. 

## Commands

The CLI performs several important tasks:
 - [`app`](../reference/cli/commands/app) - Build/generate types for your app
 - [`build`](../reference/cli/commands/build) - Build a Wasm wrapper
 - [`codegen`](../reference/cli/commands/codegen) - Auto-generate wrapper types
 - [`create`](../reference/cli/commands/create) - Create a new project
 - [`deploy`](../reference/cli/commands/deploy) - Deploy/publish a wrapper
 - [`infra`](../reference/cli/commands/infra) - Manage infrastructure for your wrapper
 - [`plugin`](../reference/cli/commands/plugin) - Build/generate types for a plugin wrapper
 - [`run`](../reference/cli/commands/run) - Run a workflow script

## Custom client configuration

Some CLI tasks depend on the [Polywrap JavaScript Client](./integrate-wrappers/install-client). It may be desirable to supply a custom [Client Configuration](./integrate-wrappers/configure-client). For example, a custom configuration could be used to run [Workflows](./workflows/running-workflows) with an Ethereum provider.

If a CLI command has the option to provide a custom client configuration, you should provide it with a path to a TypeScript or JavaScript file that exports a function with the following signature:

<Tabs
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'},
]}>
<TabItem value="ts">

```typescript
import { PolywrapClientConfig } from "@polywrap/client-js";

export async function getClientConfig(
  defaultConfigs: Partial<PolywrapClientConfig>
): Promise<Partial<PolywrapClientConfig>>
```

</TabItem>
<TabItem value="js">

```javascript
// accepts a partial PolywrapClientConfig object
// returns a Promise that resolves to a partial PolywrapClientConfig
export async function getClientConfig(defaultConfigs)
```

</TabItem>
</Tabs>
