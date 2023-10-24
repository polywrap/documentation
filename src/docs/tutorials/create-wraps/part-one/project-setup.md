---
id: 'project-setup'
title: 'Project Setup'
---

:::tip
You're reading Part One of the [Create a Wrap](../introduction) tutorial, where we learn everything you need to know to productively develop Polywrap wraps.
:::


## **Create the Project**

Let's first generate our project scaffolding using the Polywrap CLI. The `create` command of the Polywrap CLI uses the syntax `polywrap create <project type> <language> <name>`. This tutorial is about building Wasm wraps, so let's create a `wasm` project and name it `oracle`

<Tabs groupId="project">
  <TabItem value="rust" label="Rust">

  ```shell-session
  polywrap create wasm rust my-wrap
  ```

  </TabItem>

  <TabItem value="golang" label="Go">

  ```shell-session
  polywrap create wasm golang my-wrap
  ```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

  ```shell-session
  polywrap create wasm typescript my-wrap
  ```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

  ```shell-session
  polywrap create wasm assemblyscript my-wrap
  ```

  </TabItem>
</Tabs>


After running this command, you'll see a new folder appear with the project name.

## Project Contents

Let's take a look at the contents of the project we just created. Then, in the next section, we'll review the project manifest file and learn how to configure it.

<Tabs groupId="project">
  <TabItem value="rust" label="Rust">

```
polywrap.yaml                  # Project manifest File
polywrap.build.yaml            # Build manifest File
polywrap.graphql               # Wrap Schema
src/
│   └── lib.rs                 # Entry point; exports module defined in schema
tests/                         # Integration tests
Cargo.toml                     # Dependency management
package.json                   # Build scripts
tsconfig.json                  # TypeScript configuration (for integration tests)
```

  </TabItem>

  <TabItem value="golang" label="Go">

```
polywrap.yaml                  # Project manifest File
polywrap.build.yaml            # Build manifest File
polywrap.graphql               # Wrap Schema
module/
│   ├── module.go              # Entry point; exports module defined in schema
|   └── __tests__/             # Integration tests
build-staging/                 # Required boilerplate; don't modify
go.mod                         # Dependency management
package.json                   # Build scripts
tsconfig.json                  # TypeScript configuration (for integration tests)
```

  </TabItem>

  <TabItem value="typescript" label="TypeScript">

```
polywrap.yaml                  # Project manifest File
polywrap.build.yaml            # Build manifest File
polywrap.graphql               # Wrap Schema
src/
│   ├── index.ts               # Entry point; exports module defined in schema
|   └── __tests__/             # Integration tests
package.json                   # Dependency management and build scripts
rollup.config.mjs              # Bundler configuration
shims.js                       # Shims that provide a more native TypeScript experience
tsconfig.json                  # TypeScript configuration
```

  </TabItem>

  <TabItem value="assemblyscript" label="AssemblyScript">

```
polywrap.yaml                  # Project manifest File
polywrap.build.yaml            # Build manifest File
polywrap.graphql               # Wrap Schema
src/
│   ├── index.ts               # Entry point; exports module defined in schema
|   └── __tests__/             # Integration tests
package.json                   # Dependency management and build scripts
tsconfig.json                  # TypeScript configuration (for integration tests)
tsconfig.build.json            # AssemblyScript configuration (for build)
```

  </TabItem>
</Tabs>

### **`polywrap.yaml`**
The `polywrap.yaml` project manifest is a high-level configuration file describing a Polywrap project.

// TODO: link to build manifest customization in part 2 of tutorial
### **`polywrap.build.yaml`**
The `polywrap.build.yaml` build manifest enables build process customization. We won't need to modify this file, but we will learn how to do so anyway in Part Two of the tutorial. The file is not needed in most projects and can in fact be deleted.

### **`polywrap.graphql`**
Each wrap project has a [Wrap Schema](/concepts/wrap-schema). The schema defines the wrap's interface, including dependencies, methods, and custom types. Polywrap uses the schema to generate the wrap's serialization bindings and validate the wrap's implementation. In this tutorial, we'll learn how to write a Wrap Schema. It's easy!

### **Entry point**
The entry point file differs by language, but in all cases it exports the wrap module implementation.

### **Tests folder**
The location of the tests folder differs by language, but in all cases it contains integration tests for the wrap. In addition, the tests folder contains a `types` folder with configuration files used to generate TypeScript bindings for the tests. The TypeScript bindings are based on your wrap's schema and can be used to write tests for your wrap with type safety. The bindings are optional, but we recommend using them.

// TODO: link to advanced testing section
### **`package.json`**
We include a `package.json` file with pre-written build scripts and developer dependencies for testing, even if your wrap is not written in TypeScript or AssemblyScript. We understand that not every user wants to install NodeJS to build with Polywrap. Don't worry! In Part Two of the tutorial, we will learn how to write language-agnostic tests without any JavaScript dependencies. 

If you're building a Rust wrap, the `package.json` file is used only for build scripts and is not required for testing. Feel free to delete it or use it only as a reference.

### **`tsconfig.json`**
Used to configure TypeScript for integration tests.

### **`tsconfig.build.json`**
AssemblyScript only: used to configure AssemblyScript for wrap development.

### **`rollup.config.mjs`**
TypeScript only: used to configure bundling for the wrap.

### **`shims.js`**
TypeScript only: used to provide a more native TypeScript experience.

### **`build-staging`**
Go only: required boilerplate; don't modify.