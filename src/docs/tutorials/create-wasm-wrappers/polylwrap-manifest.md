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
It can also contain an array of [URI Redirects](../../concepts/understanding-uri-redirects).

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
name: # Name of wrapper
language: # Wrapper programming language
schema: # Path to wrapper schema
module: # (Optional) Path to entry file
build: # (Optional) Path to Build Manifest file
meta: # (Optional) Path to Meta Manifest file
deploy: # (Optional) Path to wrapper Deploy Manifest file
import_redirects: # (Optional) Array of URI redirects
  - uri: # Source URI to be redirected
    schema: # Path to schema of the module to which URI will be redirected
```

</TabItem>
<TabItem value="example">

```yaml
$snippet: yaml-simple-storage-package-manifest
import_redirects:
  - uri: wrap://ens/imported-wrapper.eth
    schema: ./../local-wrapper/schema.graphql
```
</TabItem>
</Tabs>