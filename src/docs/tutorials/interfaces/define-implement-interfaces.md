---
id: define-implement-interfaces
title: Define and implement interfaces
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A special type of Polywrap project can be used to define an abstract interface without providing a concrete implementation.
Like other wrappers, the interface is defined using a [Wrapper Schema](../wrapper-schema).
Once an interface is written and deployed, other projects can import and implement it.

For example, the [URI Resolver](https://github.com/polywrap/monorepo/tree/origin-0.10/packages/interfaces/uri-resolver) 
interface is used to standardize the interface of URI resolvers. 
It is implemented by multiple plugin wrappers to help the Polywrap client query different types of URIs.

## Declaring an interface project

Interface projects are declared using a [Polywrap Manifest](../create-wasm-wrappers/polywrap-manifest).
To indicate that a project is an abstract interface, set the project type to `interface`.

Interface projects do not have a module. Only a [schema](../wrapper-schema) path is declared.

```yaml
format: 0.3.0
project:
  name: UriResolver
  type: interface
source:
  schema: ./src/schema.graphql
```

## Defining an interface

Defining an interface is as simple as writing the [Wrapper Schema](../wrapper-schema). 
Once the schema is complete, you are ready to deploy the interface wrapper.

## Implementing an interface

As described in [Wrapper Schema](../wrapper-schema#interfaces), 
an interface can be imported and then implemented with the `implements` keyword. 
When a module `implements` an interface module, it inherits all of its method declarations.

The [URI Resolver Extensions](https://github.com/polywrap/uri-resolver-extensions/tree/master/implementations) plugins
implement the [URI Resolver](https://github.com/polywrap/uri-resolver-extensions/blob/master/interface/resources/README.md) interface
and inherit its methods.

<Tabs
defaultValue="ens"
values={[
{label: 'ENS Resolver Schema', value: 'ens'},
{label: 'URI Resolver Schema', value: 'uri'},
]}>
<TabItem value="ens">

```yaml
#import { Module, MaybeUriOrManifest } into UriResolver from "ens/wraps.eth:uri-resolver-ext@1.1.0"
#import { Module } into Ethereum from "ens/wraps.eth:ethereum@2.0.0"

type Module implements UriResolver_Module {}
```

</TabItem>
<TabItem value="uri">

```yaml
type Module {
  tryResolveUri(
    authority: String!
    path: String!
  ): MaybeUriOrManifest

  getFile(
    path: String!
  ): Bytes
}

type MaybeUriOrManifest {
  uri: String
  manifest: Bytes
}
```

</TabItem>
</Tabs>
