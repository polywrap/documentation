---
id: polywrap-manifest
title: 'Configure a Polywrap Manifest'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each Wasm wrapper is orchestrated by a Polywrap Manifest `polywrap.yaml` file. 
The Polywrap Manfiest provides the Polywrap CLI with basic information it needs to [`build`](../../reference/cli/commands/build) the wrapper
and generate code bindings with [`codegen`](../../reference/cli/commands/codegen).

## Content

The Polywrap Manifest contains the name of the wrapper, programming language used to write it, 
and the location of the wrapper schema that declares the wrapper's interface. 

It optionally includes a path to the wrapper's entry file (e.g. src/index.ts, src/lib.rs)
and paths to other manifests that can be used to configure the build and deploy process.
It can also contain an array of [URI Redirects](/tutorials/understanding-uri-redirects).

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
project: # Project information
  name: # Name of wrapper
  type: # Type/language of project
source: # Source code information
    schema: # Path to wrapper schema
    module: # (Optional) Path to entry file
    import_abis: # (Optional) Array of URI redirects used to resolve imports in the schema
      - uri: # One of the schema's import URI
        abi: # Path to a local ABI or schema. Supported file formats: [*.graphql, *.info, *.json, *.yaml]
extensions:
    build: # (Optional) Path to Build Manifest file
resources: # (Optional) Path to Resources directory
```

</TabItem>
<TabItem value="example">

```yaml
$snippet: yaml-simple-storage-package-manifest
```
</TabItem>
</Tabs>