---
id: define-implement-interfaces
title: Define and Implement Interfaces
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A special type of Polywrap project can be used to define an abstract interface without providing a concrete implementation.
Like other wrappers, the interface is defined using a [Wrapper Schema](./wrapper-schema).
Once an interface is written and deployed, other projects can import and implement it.

For example, the [URI Resolver](https://github.com/polywrap/monorepo/tree/origin/packages/interfaces/uri-resolver) 
interface is used to standardize the interface of URI resolvers. 
It is implemented by multiple plugin wrappers to help the Polywrap client query different types of URIs.

## Declaring an Interface Project

Interface projects are declared using a [Polywrap Manifest](./create-wasm-wrappers/polylwrap-manifest).
To indicate that a project is an abstract interface, set the project language to `interface`.

Interface projects do not have a module. Only a [schema](./wrapper-schema) path is declared.

```yaml
format: 0.1.0
name: UriResolver
deploy: ./polywrap.deploy.yaml
language: interface
schema: ./src/schema.graphql
```

## Defining an Interface

Defining an interface is as simple as writing the [Wrapper Schema](./wrapper-schema). 
Once the schema is complete, you are ready to deploy the interface wrapper.

## Implementing an interface

As described in [Wrapper Schema](../wrapper-schema#interfaces), 
an interface can be imported and then implemented with the `implements` keyword. 
When a module `implements` an interface module, it inherits all of its method declarations.

The [ENS Resolver](https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/uri-resolvers/ens-resolver) plugin
implements the [URI Resolver](https://github.com/polywrap/monorepo/tree/origin/packages/interfaces/uri-resolver) interface
and inherits its methods.

<Tabs
defaultValue="ens"
values={[
{label: 'ENS Resolver Schema', value: 'ens'},
{label: 'URI Resolver Schema', value: 'uri'},
]}>
<TabItem value="ens">

```yaml
#import { Module, MaybeUriOrManifest } into UriResolver from "ens/uri-resolver.core.polywrap.eth"
#import { Module } into Ethereum from "ens/ethereum.polywrap.eth"

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
