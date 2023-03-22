---
id: interface-instances
title: Interface instances
---

Interface modules can be instantiated in a Wasm wrapper, agnostic to any concrete implementation.

## Instantiating an interface

After an interface is imported in your [Wrapper Schema](../wrapper-schema), you can update the generated classes with the
Polywrap CLI's [`codegen`](../../reference/cli/commands/codegen) command.
You will then be able to import the interface module in your wrapper.

To instantiate an interface module, you must provide a URI that resolves to a wrapper that implements the interface.

```typescript
import { MyInterface_Module, Args_foo } from "./wrap";

export function foo(args: Args_foo): boolean {
  const instance = new MyInterface_Module("wrap://...");
  ...
}
```

## Getting Interface Implementations

To instantiate an interface agnostic to the implementation, 
you can use `getImplementations` to obtain a list of interface implementations registered in the Polywrap Client.

### Declaring getImplementations

In addition to importing the interface module in the [Wrapper Schema](../wrapper-schema), 
you must declare that `getImplementations` will be used for the interface with the `use { getImplementations }` keywords.

```graphql
#import { Module } into MyInterface from "wrap://ens/interface.eth"
#use { getImplementations } for MyInterface
```

### Using getImplementations

Now you can import the interface namespace and call its `getImplementations` method. 
The `getImplementations` method returns an array of URI strings that can be used to instantiate the interface module.

```typescript
import { MyInterface, MyInterface_Module, Args_foo } from "./wrap";

export function foo(args: Args_foo): boolean {
  const impls = MyInterface.getImplementations();
  if (impls.length < 1) {
    throw new Error("...")
  }
  const instance = new MyInterface_Module(impls[0]);
...
}
```