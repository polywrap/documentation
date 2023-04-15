---
id: plugin-manifest
title: 'Configure a Plugin Manifest'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each plugin wrapper project is orchestrated by a Project Manifest `polywrap.yaml` file. 
The Plugin Manfiest provides the Polywrap CLI with basic information it needs to generate code bindings with the [`codegen`](../../reference/cli/commands/codegen) command. 
A plugin wrapper does not need a Polywrap Manifest; the simpler Plugin Manifest is used in its place.

## Content

The Plugin Manifest contains the name of the plugin, programming language used to write the plugin, 
the location of the plugin's entry file (i.e. the file that exports the plugin contents),
and the GraphQl schema that declares the plugin's interface.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format:  # Polywrap manifest format version. Values: 0.3.0
project:  # Basic project properties.
  name:  # Name of this project.
  type:  # Type of this project.
source:  # Project source files.
  module:  # Path to the project's entry point.
  schema:  # Path to the project's graphql schema.
  import_abis:  # Specify ABIs to be used for the import URIs within your schema.
```

</TabItem>
<TabItem value="example">

```yaml
format: 0.3.0
project:
  name: MyPlugin
  type: plugin/typescript
source:
  schema: ./src/schema.graphql
  module: ./src/index.ts
  import_abis:
    - uri: wrap://ens/imported-plugin.eth
      abi: ./../local-plugin/schema.graphql
```
</TabItem>
</Tabs>