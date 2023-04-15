---
id: 'types-for-app'
title: Generate types for your app
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The [`polywrap`](../../reference/cli/polywrap-cli) CLI's [`codegen`](../../reference/cli/commands/codegen) command interacts with 
an App Manifest to automatically generate wrapper types in the language of your application.

## App Manifest content

The App Manifest contains the name of the project, the programming language used to write it,
and the location of the wrapper schema that states which code to generate. 
It can optionally contain an array of [URI Redirects](/tutorials/understanding-uri-redirects).

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
name: # Name of project
language: # App programming language
schema: # Path to wrapper schema
import_abis: # (Optional) Array of URI redirects for schema imports
  - uri: # Source URI to be redirected
    abi: # Path to a local ABI (or schema). Supported file formats: [*.graphql, *.info, *.json, *.yaml]
```

</TabItem>
<TabItem value="example">

```yaml
$snippet: yaml-hello-world-app-manifest
```
</TabItem>
</Tabs>


## Wrapper Schema for apps

To automatically generate types for an application or test suite, we must tell the Polywrap CLI which types to generate.
This is done using a [Wrapper Schema](../wrapper-schema). 

In your wrapper schema, you can add an import statement for each wrapper you're using in your project.
You can use the `*` syntax to import a wrapper's module and all of its types, or you can list the types you'd like to use.

```graphql title="Wrapper schema for the Hello World app"
$snippet: graphql-hello-world-app-schema
```

Learn more about schema imports at [Wrapper Schema](../wrapper-schema#imports).