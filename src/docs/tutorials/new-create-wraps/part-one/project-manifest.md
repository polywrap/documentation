---
id: 'project-manifest'
title: 'Project Manifest'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
You're reading Part One of the [Create Wraps](../introduction) tutorial, where we learn everything you need to know to productively develop Polywrap wraps.
:::

Each wrap package is described by a `polywrap.yaml` project manifest file. The project manifest provides the Polywrap CLI with basic information it needs to [`build`](https://github.com/polywrap/cli/tree/origin-dev/packages/cli#build--b) the wrap, such as where to find the `polywrap.graphql` schema that we'll review in the next section.

## Manifest Content

Let's open the `polywrap.yaml` manifest, located in the root of our new project folder. The only item you need to change for now is the project name, but we'll briefly discuss each manifest property here since we'll make more changes later on.

```yaml title="Project Manifest v0.6.0"
format: 0.6.0   # The manifest format version
project:
  name:         # Name of wrap
  type:         # Type/language of project
source:
  schema:       # Path to wrap schema
  module:       # (Optional) Path to module entry file; absent for interface wraps
  import_abis:  # (Optional) Array of URI redirects used to resolve imports in the schema
    - uri:      # One of the schema's import URI
      abi:      # Path to a local ABI or schema. Supported file formats: [*.graphql, *.info, *.json, *.yaml]
extensions:
  build:        # (Optional) Path to Build Manifest file
  docs:         # (Optional) Path to Docs Manifest file
resources:      # (Optional) Path to Resources directory
```

### **Project**

As previously suggested, let's `name` our project "oracle-wrap".

The project `type` is used to determine how to generate code and build the project. It follows the syntax: `(wasm|app|plugin)/language`. So a Rust wrap will have the type `wasm/rust`, and a Rust plugin would have the type `plugin/rust`. The languages that can be used for a `wasm` wrap project are different from the languages used in `plugin` and `app` projects.

<Tabs groupId="project-manifest-project">
  <TabItem value="rust" label="Rust">

```yaml
format: 0.6.0
project:
  name: oracle-wrap
  type: wasm/rust
```

  </TabItem>

  <TabItem value="golang" label="Go">

```yaml
format: 0.6.0
project:
  name: oracle-wrap
  type: wasm/golang
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```yaml
format: 0.6.0
project:
  name: oracle-wrap
  type: wasm/typescript
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```yaml
format: 0.6.0
project:
  name: oracle-wrap
  type: wasm/assemblyscript
```

  </TabItem>
</Tabs>

// TODO: link to interface docs
There is one additional type of project called an "interface wrap" (with type `interface`), which is used to define a wrap interface that can be implemented by other wraps or plugins. We'll discuss interface wraps in greater detail later on in the tutorial.

### **Source**

The project source tells the Polywrap CLI where to find:
- The project schema--i.e. the module and types the wrap exports
- The module entry file that implements the Wrap Schema in code and exports its module
- The location of a locally-stored Wrap Schema or `wrap.info` ABI file, and an arbitrary URI you'd like to point to it

<Tabs groupId="project-manifest-source">
  <TabItem value="rust" label="Rust">

```yaml
source:
  module: ./Cargo.toml
  schema: ./polywrap.graphql
```

  </TabItem>

  <TabItem value="golang" label="Go">

```yaml
source:
  schema: ./polywrap.graphql
  module: ./go.mod
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```yaml
source:
  schema: ./polywrap.graphql
  module: ./bundled/wrap.js
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```yaml
source:
  module: ./src/index.ts
  schema: ./polywrap.graphql
```

  </TabItem>
</Tabs>

:::tip
The `import_abis` item is useful during wrap development. Let's say you need to import another wrap, "interface wrap", or plugin. All the relevant information is captured in its schema or `wrap.info` ABI. You need the `wrap.wasm` web assembly module to invoke the wrap's methods at runtime, but not to import its module or types at build time. This means you can start building your new wrap without first deploying its dependency.

For example, the `import_abis` feature can be used in a monorepo that contains one "interface wrap" and a set of Wasm wraps or plugins that implement the interface. Each Wasm wrap project might contain an `import_abis` entry with a temporary URI that points to the interface `polywrap.graphql` schema. The wrap projects would use the temporary URI to import the interface in their own `polywrap.graphql` schemas, as though the interface were already published.
:::

### **Extensions**

// TODO: link to build manifest and docs manifest documentation
There are two types of manifest extensions you can register in the project manifest: `build` and `docs`. The `polywrap.build.yaml` build manifest enables developers to customize the wrap build process. The `polywrap.docs.yaml` manifest allows you to provide metadata for package registries and include common documentation files such as a `README.md`.

```yaml
extensions:
  build: ./polywrap.build.yaml
```

We will use the `docs` manifest extensions later on to include a `README.md` file in our package. We won't be using the `build` extension in Part One of this tutorial, but we'll dive into it in Part Two . If you'd like, you can remove the `build` extension property and delete the `polywrap.build.yaml` file.

### **Resources**
The `resources` attribute allows you to provide a path to a directory that contains arbitrary files you'd like included in the wrap package when deploying the wrap.