---
id: wrapper-schema
title: Wrapper Schema
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Every wrapper project has a schema. 
The schema defines the wrapper's dependencies, methods, and custom types. 
In short, it's an interface describing how to use the wrapper.

The schema is a sort of contract between a wrapper's developers and its users.
A Wasm wrapper will not compile unless it implements and exports all of the methods declared in the schema.
A Wasm wrapper's users can be certain that all of the methods declared in a schema are callable using the declared method signatures.
Plugin wrappers do not have this same guarantee.
However, the client will throw an exception if a user attempts to invoke a method and the method is not found.

## Declaration

A wrapper project's schema must be declared in the project manifest (Polywrap Manifest or [Plugin Manifest](./create-plugin-wrappers/plugin-manifest)).

```yaml
$snippet: project-manifest-schema-example
```

## Codegen

The wrapper schema tells the Polywrap compiler which types and serialization logic to generate. 
Generated types are updated every time you [`build`](../reference/cli/commands/codegen) the wrapper.
The [`polywrap`](../reference/cli/polywrap-cli) CLI also provides a [`codegen`](../reference/cli/commands/codegen) command to
quickly update the generated `wrap` folder where generated types are stored.

The Polywrap compiler generates types for method arguments and custom schema types. 
Wrapper developers must use the generated method arguments for methods declared in the schema, 
and generated types for method return values when the return value is of a custom type.
The generated types come with serialization logic that allows Wrappers to communicate with the client.

The following example demonstrates this practice.

<Tabs
defaultValue="declaration"
values={[
{label: 'Declaration', value: 'declaration'},
{label: 'Implementation', value: 'implementation'},
]}>
<TabItem value="declaration">

```graphql
$snippet: wasm-project-schema-graphql
```
</TabItem>
<TabItem value="implementation">

```typescript
$snippet: wasm-project-index-ts
```

</TabItem>
</Tabs>

## Language Syntax

Wrapper schemas are written in Polywrap's variant of the [GraphQL](https://graphql.org/learn/) schema definition language (SDL).
Polywrap's GraphQL variant is simpler than standard GraphQL and easy to learn.

### Custom Types

Custom types are declared with the `type` keyword. They can be given any number of properties. Properties can be of
any supported type, including other custom types.

```graphql
type CustomType {
  myString: String!
  myObject: AnotherType!
}

type AnotherType {
  myInt: Int!
}
```

### Nullability

As in standard GraphQL, properties, method arguments, and method return values are declared non-nullable by appending 
a `!` at the end of the type name.
The absence of a `!` indicates that a value is nullable.

```graphql
type CustomType {
  nullable: String # can be String or null
  nonNullable: String! # must be String
}
```

### Methods

Methods are declared within the `Module` type. Methods must return a value.

```graphql
type Module {
  foo(
    arg: CustomType!
    bar: CustomType
  ): ReturnType!
}
```

Custom types and modules can be imported from other wrappers by placing an import statement at the top of the schema.
Imports become available in the schema immediately and in the wrapper following codegen.

### Imports

Imported types and modules must be assigned a namespace. References to them are prepended with the namespace.

```graphql
#import { Module, CustomType } into Namespace from "wrap://authority/path"

type CustomType {
  prop: Namespace_CustomType!
}
```

### Example

The following example uses all of the elements we've discussed so far.

```graphql
$snippet: example-graphql-schema
```

## Default Types

Polywrap's schema definition language supports three kinds of default types:
 - **Basic types** like integers and strings
 - **Complex types** like BigInt and JSON
 - **Generic types** like Array and Map

These types may be implemented differently in different programming languages.
The language-specific implementations are clarified in each of the following sections.

### Basic Types

Basic types include primitive types like integers and boolean values, as well as Strings and Bytes.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Client', value: 'client'},
{label: 'Wasm wrapper', value: 'wasm'},
]}>
<TabItem value="schema">

| Schema Type | Description |
|-|-|
| UInt | 32-bit unsigned integer |
| UInt8 | 8-bit unsigned integer |
| UInt16 | 16-bit unsigned integer |
| UInt32 | 32-bit unsigned integer |
| Int | 32-bit signed integer |
| Int8 | 8-bit signed integer |
| Int16 | 16-bit signed integer |
| Int32 | 32-bit signed integer |
| String | UTF-8 string |
| Boolean | True or false stored as 1 byte |
| Bytes | Array of 8-bit unsigned integers |

</TabItem>
<TabItem value="client">

| Schema Type | TypeScript | Rust | Python |
|-|-|-|-|
| UInt | number | Coming soon... | Coming soon... |
| UInt8 | number | Coming soon... | Coming soon... |
| UInt16 | number | Coming soon... | Coming soon... |
| UInt32 | number | Coming soon... | Coming soon... |
| Int | number | Coming soon... | Coming soon... |
| Int8 | number | Coming soon... | Coming soon... |
| Int16 | number | Coming soon... | Coming soon... |
| Int32 | number | Coming soon... | Coming soon... |
| String | string | Coming soon... | Coming soon... |
| Boolean | boolean | Coming soon... | Coming soon... |
| Bytes | [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | Coming soon... | Coming soon... |

</TabItem>
<TabItem value="wasm">

| Schema Type | AssemblyScript | Rust | Go |
|-|-|-|-|
| UInt | u32 | u32 | Coming soon... |
| UInt8 | u8 | u8 | Coming soon... |
| UInt16 | u16 | u16 | Coming soon... |
| UInt32 | u32 | u32 | Coming soon... |
| Int | i32 | i32 | Coming soon... |
| Int8 | i8 | i8 | Coming soon... |
| Int16 | i16 | i16 | Coming soon... |
| Int32 | i32 | i32 | Coming soon... |
| String | string | String | Coming soon... |
| Boolean | bool | bool | Coming soon... |
| Bytes | [ArrayBuffer](https://www.assemblyscript.org/stdlib/arraybuffer.html) | [Vec<u8\>](https://doc.rust-lang.org/std/vec/struct.Vec.html) | Coming soon... |

</TabItem>
</Tabs>

### Complex Types

Complex types are represented as basic types to the Polywrap client and plugin wrappers.
Within Wasm wrappers, they are implemented as classes or structs with behavior.

For example, consider an application developer invoking a Wasm wrapper with the JavaScript client.
If the invoked method requires an argument of type `BigInt`, the application developer will provide a `string`
representation of an integer number to satisfy the argument. 
Within the wrapper, the `string` is deserialized into an instantion of the wrapper language's implementation of a `BigInt`.
If the invoked method returns a `BigInt`, the wrapper will serialize the returned `BigInt`, 
which the client will then deserialize into a `string` before returning it to the application developer.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Client', value: 'client'},
{label: 'Wasm wrapper', value: 'wasm'},
]}>
<TabItem value="schema">

| Schema Type | Description |
|-|-|
| BigInt | Multiple precision integer |
| BigNumber | Multiple precision float |
| JSON | JSON object |

</TabItem>
<TabItem value="client">

| Schema Type | TypeScript | Rust | Python |
|-|-|-|-|
| BigInt | string | Coming soon... | Coming soon... |
| BigNumber | string | Coming soon... | Coming soon... |
| JSON | string | Coming soon... | Coming soon... |

</TabItem>
<TabItem value="wasm">

| Schema Type | AssemblyScript | Rust | Go |
|-|-|-|-|
| BigInt | [BigInt](https://github.com/polywrap/as-bigint) | [num_bigint::BigInt](https://docs.rs/num-bigint/latest/num_bigint/) | Coming soon... |
| BigNumber | [BigNumber](https://github.com/polywrap/as-bignumber) | [bigdecimal::BigDecimal as BigNumber](https://docs.rs/bigdecimal/latest/bigdecimal/) | Coming soon... |
| JSON | [JSON.Value](https://github.com/polywrap/assemblyscript-json) | [serde_json::Value as JSON::Value](https://docs.serde.rs/serde_json/) | Coming soon... |

</TabItem>
</Tabs>

### Generic Types

When using a generic type, with the exception of arrays, 
schema writers must add a [directive](https://graphql.org/learn/queries/#directives) annotation declaring its subtype(s).

The directive takes the form `@annotate(type: "TypeName<T\>")`, where `T` is the type of the subtype.
The generic type and its subtype(s) can be independently nullable or non-nullable. 
The following example illustrates use of the generic type directive with the `Map` type.

```graphql
type Module {
  getKey(
    key: String!
    map: Map! @annotate(type: "Map<String!, Int!>!")
  ): Int!

  returnMap(
    map: Map! @annotate(type: "Map<String!, Int!>!")
  ): Map! @annotate(type: "Map<String!, Int!>!")
}
```

Like complex types, the implementation of generic types can differ by language.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Client', value: 'client'},
{label: 'Wasm wrapper', value: 'wasm'},
]}>
<TabItem value="schema">

| Schema Type | Description |
|-|-|
| [Type] | Array of elements. |
| Map | Map of key-value pairs. |

</TabItem>
<TabItem value="client">

| Schema Type | TypeScript | Rust | Python |
|-|-|-|-|
| [Type] | [Array<Type\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | Coming soon... | Coming soon... |
| Map | [Map<K,V\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  | Coming soon... | Coming soon... |

</TabItem>
<TabItem value="wasm">

| Schema Type | AssemblyScript | Rust | Go |
|-|-|-|-|
| [Type] | [Array<T\>](https://www.assemblyscript.org/stdlib/array.html) | [Vec<T\>](https://doc.rust-lang.org/std/vec/struct.Vec.html) | Coming soon... |
| Map | [Map<K, V\>](https://www.assemblyscript.org/stdlib/map.html) | [BTreeMap<K, V\>](https://doc.rust-lang.org/std/collections/struct.BTreeMap.html) | Coming soon... |

</TabItem>
</Tabs>

## Interfaces

A module can inherit the method declarations of any other module by using the `implements` keyword.
A module that implements an interface in this manner is required to implement and export the interface module's declared methods.

Similarly, a type can inherit the property declarations of any other type by using the `implements` keyword.
If a type implements an interface, it inherits the interface type's property declarations as though the properties 
were declared explicitly.

```graphql
#import { Module, InterfaceType } into Interface from "wrap://ens/interface.eth"

type Module implements Interface_Module {
  # declares methods of Interface_Module
}

type ImplementationType implements Interface_InterfaceType {
  # declares properties of Interface_InterfaceType
}
```

## Environmental Variables

Wrapper developers can declare a map of environmental variables for application developers to provide. To use environmental variables, declare an `Env` type and add a directive to each schema method that will use it. 

You can learn how to access environmental variables in code by reading the [Access Env in the module](./env-variables#access-env-in-the-module) section of our [Environmental Variables](./env-variables) documentation for wrapper developers.

### Declare the Env object

Environmental variables are declared in a custom type named `Env`.

```graphql
type Env {
  str: String!
  number: Int!
  bool: Boolean!
}
```

### Add the `@env` directive

To access an `Env` object during a method invocation, add the `@env` directive to a method. The `@env` directive has one attribute that indicates whether the `Env` is required or optional.

```graphql
type Module {
  # App developers are required to provide Env to invoke this method
  methodRequireEnv(
    arg: String!
  ): String! @env(required: true)

  # Env is optional when invoking this method
  methodOptionalEnv(
    arg: String!
  ): String! @env(required: false)
}
```