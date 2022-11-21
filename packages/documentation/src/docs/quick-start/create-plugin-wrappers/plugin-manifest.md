---
id: plugin-manifest
title: 'Configure a Plugin Manifest'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each plugin wrapper is orchestrated by a Plugin Manifest `polywrap.plugin.yaml` file. 
The Plugin Manfiest provides the Polywrap CLI with basic information it needs to generate code bindings with the [`codegen`](../../reference/cli/commands/codegen) command. 
A plugin wrapper does not need a Polywrap Manifest; the simpler Plugin Manifest is used in its place.

## Content

The Plugin Manifest contains the name of the plugin, programming language used to write the plugin, 
the location of the plugin's entry file (i.e. the file that exports the plugin contents),
and the GraphQl schema that declares the plugin's interface. 
It can optionally contain an array of [URI Redirects](../../concepts/understanding-uri-redirects).

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
name: # (Optional) Name of plugin
language: # Plugin programming language
module: # Entry file 
schema: # Wrapper schema
import_redirects: # Array of URI redirects
  - uri: # Source URI to be redirected
    schema: # Path to schema of the module to which URI will be redirected
```

</TabItem>
<TabItem value="example">

```yaml
format: 0.1.0
name: MyPlugin
language: plugin/typescript
module: ./src/index.ts
schema: ./src/schema.graphql
import_redirects:
  - uri: wrap://ens/imported-plugin.eth
    schema: ./../local-plugin/schema.graphql
```
</TabItem>
</Tabs>