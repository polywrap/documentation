---
id: running-workflows
title: Running Workflows
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A workflow is a configurable process that will execute one or more Polywrap wrapper invocations. 
Workflows are defined in YAML or JSON. Workflows can be run with the [`test`](../../reference/cli/commands/test) command of the [`polywrap`](../../reference/cli/polywrap-cli) CLI.

## Writing workflows

A workflow consists of a tree of `Jobs` and `Steps`.

A `Job` is an independent, named unit that can contain an array of `Steps` named `steps` and/or a set of sub-`Jobs` named `jobs`. 
Each `Job` runs asynchronously, and therefore `Jobs` may run in any order. Although all the sub-jobs are guaranteed to be executed after the parent job completes. Outputs of the parent jobs can be referenced as the input of any of its sub-jobs.
By default, [`test`](../../reference/cli/commands/test) will run all jobs in a workflow.
A `Job` index can be provided to [`test`](../../reference/cli/commands/test) to execute a specific job.

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
```

</TabItem>
<TabItem value="example">

```yml
$snippet: yaml-simple-storage-original-workflow
```

</TabItem>
</Tabs>

## Workflow output

The output of a workflow can be written as a file in the JSON or YAML format with the `output-file` option of the Polywrap CLI's
[`test`](../../reference/cli/commands/test) command.

Workflow output is printed to the console by default. 
Console output can be suppressed with the `quiet` option of the Polywrap CLI's [`test`](../../reference/cli/commands/test) command.
