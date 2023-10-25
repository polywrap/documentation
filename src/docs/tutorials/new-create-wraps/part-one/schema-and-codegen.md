---
id: 'schema-and-codegen'
title: 'Schema and Codegen'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
You're reading Part One of the [Create Wraps](../introduction) tutorial, where we learn everything you need to know to productively develop Polywrap wraps.
:::

Every wrap, plugin, and "interface wrap" has a `polywrap.graphql` schema that defines its public interface. The schema is parsed and composed into a `wrap.info` ABI file that is included in the wrap package along with the `wrap.wasm` bytecode module (the code).

Polywrap uses the schema to generate bindings for your wrap. The bindings handle serialization logic--so that data can pass between the Wasm module and the Polywrap Client--and provide a lightweight structure to validate the wrap's content.

Wrap schemas use a simplified version of GraphQL schema syntax. We provide detailed reference documentation in [Wrap Schema](/concepts/wrap-schema), but you'll learn most of it just by following along in this guide.

Since the schema's primary purpose is to communicate which code bindings should be generated, we'll learn a bit about the generated bindings as well.

## **Initial Schema**

Okay, first we should take a look at the `polywrap.graphql` schema we generated when we initialized our project with the Polywrap CLI. It's located in the project root.

```graphql
type Module {
    sampleMethod(arg: String!): SampleResult!
}

type SampleResult {
    result: String!
}
```

We have a `Module` and a custom type named `SampleResult`. 

Every wrap has exactly one declaration of `type Module` that defines the wrap's methods. Without a module, there would be nothing to invoke. If we want two or more modules, we can simply create more wraps and our wrap can invoke them. When one wrap invokes another, we call it a "subinvocation".

The sample module has one method, `sampleMethod(arg: String!): SampleResult!`, that accepts a single argument named `arg` of type `String!` and returns a `SampleResult!`.

Following GraphQL syntax, a `!` means a type cannot be `null`. The absence of a `!` would mean a property or argument is optional, and it's okay for users to pass in `null`.

Also, primitive types start with capital letters.

## **Codegen**

To generate the code bindings, change your current working directory to the project root and run `polywrap codegen` using the Polywrap CLI. A new directory called `wrap` will be generated next to your entry file.

<Tabs groupId="codegen-dir">
  <TabItem value="rust" label="Rust">

```
src/
├── lib.rs                  # Entry point; exports module defined in schema
└── wrap                    # Generated types
```

  </TabItem>

  <TabItem value="golang" label="Go">

```
module/
├── module.go              # Entry point; exports module defined in schema
├── __tests__/             # Integration tests
└── wrap                   # Generated types
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```
src/
├── index.ts               # Entry point; exports module defined in schema
├── __tests__/             # Integration tests
└── wrap                   # Generated types
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```
src/
├── index.ts               # Entry point; exports module defined in schema
├── __tests__/             # Integration tests
└── wrap                   # Generated types
```

  </TabItem>
</Tabs>

By default, codegen is automatically run before you build your project with `polywrap build`.

## **Wrap Directory**

The bindings contain generated types that we must use to implement the wrap module, as well as additional logic related to serialization and interaction with the Polywrap Client.

<Tabs groupId="wrap-dir">
  <TabItem value="rust" label="Rust">

```
wrap/
├── module/   
│   ├── mod.rs
│   ├── module.rs       # Module Trait
│   └── wrapped.rs      # Args types and method wrappers
├── sample_result/ 
│   └── mod.rs          # Custom type implementation
├── mod.rs 
├── entry.rs            # Entry file
└── prelude.rs  
```

  </TabItem>

  <TabItem value="golang" label="Go">

```
wrap/
├── main/   
│   └── main.go                                 # Entry file
├── module_wrapped/ 
│   ├── module_serialization.go                 # Module serialization logic
│   └── module_wrapped.go                       # Method wrappers
├── types/ 
│   ├── module_args.go                          # Module interface and Args types
│   ├── object_sample_result.go                 # Custom type impelmentation
│   └── object_sample_result_serialization.go   # Custom type serialization logic
└── wrap.go
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```
wrap/    
├── common.ts           # Core types available in every wrap
├── entry.ts            # Entry file
├── globals.d.ts        # Wrap binding method declarations
├── index.ts
├── module.ts           # Module base class and Arg types
└── types.ts            # Implementations for custom types defined in the wrap schema
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```
wrap/
├── Module/   
│   ├── index.ts
│   ├── module.ts            # Module base class
│   ├── serialization.ts     # Arg types and Module serialization logic
│   └── wrapped.ts           # Method wrappers
├── SampleResult/ 
│   ├── index.ts             # Custom type implementation
│   └── serialization.ts     # Custom type serialization logic  
├── entry.ts                 # Entry file
└── index.ts  
```

  </TabItem>
</Tabs>

We're only going to focus on the parts that you need to be aware of:
- The Module base class
- Argument containers generated for each module method
- The `SampleResult` custom type

### **Module Base Class**

### **Args**

### **Custom Type**

## **Initial Module**

The entry point file of the project contains an implementation of the `type Module` that was defined in the schema. From the schema, an abstract class or interface ("Trait" in Rust) has been generated. The module implementation extends the abstract class, implementing the abstract members. The implementation is expected and the wrap won't compile without it.

<Tabs groupId="initial-module">
  <TabItem value="rust" label="Rust">

```rust
pub mod wrap;
pub use wrap::prelude::*;

impl ModuleTrait for Module {
    fn sample_method(args: ArgsSampleMethod) -> Result<SampleResult, String> {
        return Ok(SampleResult {
            result: format!("{} from sample_method", args.arg),
        });
    }
}
```

  </TabItem>

  <TabItem value="golang" label="Go">

```golang
package module

import (
	"example.com/template-wasm-go/module/wrap/types"
)

func SampleMethod(args *types.ArgsSampleMethod) types.SampleResult {
	return types.SampleResult{
		Result: args.Arg,
	}
}
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```typescript
import { Args_sampleMethod, SampleResult, ModuleBase } from "./wrap";

export class Module extends ModuleBase {
  sampleMethod(args: Args_sampleMethod): SampleResult {
    return {
      result: args.arg,
    };
  }
}
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```assemblyscript
import { Args_sampleMethod, SampleResult, ModuleBase } from "./wrap";

export class Module extends ModuleBase {
  sampleMethod(args: Args_sampleMethod): SampleResult {
    return {
      result: args.arg,
    };
  }
}
```

  </TabItem>
</Tabs>