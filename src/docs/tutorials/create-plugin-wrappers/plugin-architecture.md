---
id: plugin-architecture
title: 'Plugin Architecture'
---

The architecture of a plugin wrapper's code is flexible.
Still, there are some simple requirements and best practices that may guide its code structure.

## Required Exports

A plugin must export a `PluginFactory` to be used by the Polywrap Client.
A `PluginFactory` is a function that returns a `PluginPackageManifest` and a `factory` method that generates an instance of the plugin.

## TypeScript Support

The Polywrap CLI's [`codegen`](../../reference/cli/commands/codegen) and [`build`](../../reference/cli/commands/build) commands will generate a `wrap` folder containing useful types.
The generated types will save you time and energy.
You won't have to manually create or update your types every time you change your schema, and your code will have fewer bugs.
You can forget about boilerplate code and focus on your plugin's logic.
While the types are not strictly required, we recommend them as a best practice.

The generated types include:
 - `Module` - An interface containing the methods declared in the plugin's schema
 - `Args_*` - An interface for each method, containing the method arguments declared in the schema
 - Custom Types - An interface for each custom type declared in the schema
 - `manifest` - A `PluginPackageManifest` for the plugin (also useful for JavaScript developers!)

## Example

```typescript title="Example: plugin template
import { Module, Args_sampleMethod, manifest } from "./wrap"; // imports from generated "wrap" folder

import { PluginFactory, PluginPackage } from "@polywrap/plugin-js"; // plugin must export a PluginFactory

export interface SamplePluginConfig {
  defaultValue: string;
}

export class SamplePlugin extends Module<SamplePluginConfig> { // Plugin inherits from Module
  constructor(config: SamplePluginConfig) {
    super(config);
  }
  public sampleMethod(args: Args_sampleMethod): string { // Plugin method accepts Args_* as sole argument
    return args.data + this.config.defaultValue;
  }
}

export const samplePlugin: PluginFactory<SamplePluginConfig> = ( // exported PluginFactory is used by Polywrap client
  config: SamplePluginConfig
) => {
  return new PluginPackage(
    new SamplePlugin(config), // factory method produces a Module
    manifest // imported from ./wrap
  );
};

export const plugin = samplePlugin; // PluginFactory is exported with name "plugin"
```