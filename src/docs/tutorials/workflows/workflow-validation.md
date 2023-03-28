---
id: workflow-validation
title: Workflow Validation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Workflow validation can be used to verify the contents of a workflow output file.
To validate a workflow, you must have a validation script written in `.cue` format.
A path to the script can be passed to the [`test`](../../reference/cli/commands/test) command of the [`polywrap`](../../reference/cli/polywrap-cli) CLI using the `validate-script` option.

## CUE

Validation files are written in [CUE](https://cuelang.org/), an open-source data validation language.
It has a simple syntax and is easy to use.
CUE provides flexible data validation, including:
 - matching exact values
 - matching types
 - matching bounds (e.g. result > 2)
 - matching regular expressions

To validate a workflow, you must have CUE installed on your computer.

## Writing a validation script

A validation script should match the structure of the workflow it seeks to validate. 
It is compared against the output of the workflow.

:::tip
To validate a particular job in a workflow, your validation file should be modified to match the output of that particular job.
:::

The [json-rpc](https://github.com/polywrap/demos/tree/main/json-rpc/wrapper/rust) demo uses a
[workflow](https://github.com/polywrap/demos/tree/main/json-rpc/wrapper/rust/workflows/e2e.yaml) and
[validator](https://github.com/polywrap/demos/tree/main/json-rpc/wrapper/rust/workflows/validator.cue) to 
replicate its full integration test suite. 
We've provided a sample workflow and validation script based on the json-rpc demo here:

<Tabs
defaultValue="workflow"
values={[
{label: 'workflow.yaml', value: 'workflow'},
{label: 'validator.cue', value: 'validator'},
]}>
<TabItem value="workflow">

```yml
name: json-rpc
jobs:
  case1:
    steps:
      - uri: fs/build
        method: query
        args:
          url: "https://archival-rpc.testnet.near.org"
          request:
            method: "gas_price"
            params: "[93019381]"
            id: "1"
```

</TabItem>
<TabItem value="validator">

```yml
case1: {
  $0: {
    data: {
      result: "{\"gas_price\":\"100000000\"}",
      error: null,
      id: "1"
    },
    error?: _|_,
  }
}
```

</TabItem>
</Tabs>