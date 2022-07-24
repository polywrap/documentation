---
id: interface-instances
title: Interface instances
---

Interface modules can be instantiated in a Wasm wrapper, agnostic to any concrete implementation.

## Declaring getImplementations

In addition to importing the interface module, you must declare that an interface will be instantiated with the 
`use { getImplementations }` keywords.

```graphql
#import { Module } into MyInterface from "wrap://ens/interface.eth"
#use { getImplementations } for MyInterface
```

## Instantiating an interface

After an interface is imported and the use of `getImplementations` is declared, 
you can update the generated classes with the Polywrap CLI's [`codegen`](../../reference/cli/commands/codegen) command.
You will then be able to import the interface module in your wrapper.

To instantiate the interface module, you must provide a URI that resolves to a wrapper that implements the interface.
To use the interface with an agnostic implementation, you can accept the implementation URI as a function argument
or environmental variable.

```typescript
import { MyInterface_Module, Args_foo } from "./wrap";

export function foo(args: Args_foo): boolean {
  const instance = new MyInterface_Module(args.implementationUri);
  ...
}
```