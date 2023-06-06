---
id: 'types-for-app'
title: Generate types for your app
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The [`polywrap`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli) CLI's [`codegen`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#codegen--g) command interacts with 
an App Manifest to automatically generate wrap types in the language of your application.

## App Manifest content

The App Manifest contains the name of the project, the programming language used to write it,
and the location of the wrap schema that states which code to generate. 
It can optionally contain an array of [URI Redirects](/concepts/uri-redirects).

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
schema: # Path to wrap schema
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


## Wrap Schema for apps

To automatically generate types for an application or test suite, we must tell the Polywrap CLI which types to generate.
This is done using a [Wrap Schema](/concepts/wrap-schema). 

In your wrap schema, you can add an import statement for each wrap you're using in your project.
You can use the `*` syntax to import a wrap's module and all of its types, or you can list the types you'd like to use.

```graphql title="Wrap schema for the Hello World app"
$snippet: graphql-hello-world-app-schema
```

Learn more about schema imports at [Wrap Schema](/concepts/wrap-schema#imports).