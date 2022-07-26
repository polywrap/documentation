---
id: running-workflows
title: Running Workflows
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A workflow is a configurable process that will execute one or more Polywrap wrapper invocations. 
Workflows are defined in YAML or JSON. Workflows can be run with the [`run`](../../reference/cli/commands/run) command of the [`polywrap`](../../reference/cli/polywrap-cli) CLI.

## Writing workflows

A workflow consists of a tree of `Jobs` and `Steps`.

A `Job` is an independent, named unit that can contain an array of `Steps` named `steps` and/or a set of sub-`Jobs` named `jobs`. 
Each `Job` runs asynchronously, and therefore `Jobs` may run in any order. Although all the sub-jobs are guaranteed to be executed after the parent job completes. Outputs of the parent jobs can be referenced as the input of any of its sub-jobs.
By default, [`run`](../../reference/cli/commands/run) will run all jobs in a workflow.
A `Job` index can be provided to [`run`](../../reference/cli/commands/run) to execute a specific job.

A `Step` is a wrapper invocation. An array of `Steps` runs synchronously--i.e. in the order defined in the workflow.


The result of a `Job` or `Step` can be passed as an input argument to a `Job` or `Step` that is its child in the tree hierarchy.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yml
name: # name of the workflow
jobs: # a set of one or more jobs
  case1: # a job, named by the user
    steps: # an array of steps
      - uri: fs/build # uri of invocation
        method: query # method to invoke
        args: # method arguments
        config: # (Optional) modified client configuration for this call
```

</TabItem>
<TabItem value="example">

```yml
$snippet: yaml-simple-storage-original-workflow
```

</TabItem>
</Tabs>

## Configuring the Client

Users can configure the Polywrap client used to execute a workflow. 
This is done by providing the Polywrap CLI's [`run`](../../reference/cli/commands/run) command with the path to a custom 
configuration file.
The configuration file can be a JavaScript or TypeScript module.
It must implement and export a function named `getClientConfig`. 

The `getClientConfig` function accepts the default `ClientConfig` as an argument and returns the custom Polywrap 
client configuration. 
It must be implemented with the following signature:

<Tabs
defaultValue="typescript"
values={[
{label: 'TypeScript', value: 'typescript'},
{label: 'JavaScript', value: 'javascript'},
]}>
<TabItem value="typescript">

```typescript
// asynchronous option
export async function getClientConfig(
  defaultConfigs: Partial<PolywrapClientConfig>
): Promise<Partial<PolywrapClientConfig>>

// synchronous option
export function getClientConfig(
  defaultConfigs: Partial<PolywrapClientConfig>
): Partial<PolywrapClientConfig>
```

</TabItem>
<TabItem value="javascript">

```javascript
// asynchronous option
export async function getClientConfig(defaultConfigs)

// synchronous option
export function getClientConfig(defaultConfigs)
```

</TabItem>
</Tabs>

## Workflow output

The output of a workflow can be written as a file in the JSON or YAML format with the `output-file` option of the Polywrap CLI's
[`run`](../../reference/cli/commands/run) command.

Workflow output is printed to the console by default. 
Console output can be suppressed with the `quiet` option of the Polywrap CLI's [`run`](../../reference/cli/commands/run) command.

