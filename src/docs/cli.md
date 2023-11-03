---
id: cli
title: The Polywrap CLI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Now that we have a basic understanding of the Polywrap Client, it's time to see how we can use the Polywrap CLI to create an amazing experience when working with Wraps.

## Installation

:::info
For all possible ways to install the Polywrap CLI, please refer to its [README](https://github.com/polywrap/cli/blob/origin-dev/packages/cli/README.md#the-polywrap-cli-polywrap).
:::

There are two main ways to install the Polywrap CLI:

If you're developing in Javascript/Typescript and using Node, you can install the CLI globally:

```shell-sesssion
npm i -g polywrap
```

Alternatively, you can use the standalone version by downloading and running its install script:

```shell-session
$ sh <(curl https://raw.githubusercontent.com/polywrap/cli/origin-dev/install.sh)

# Installs to `~/.polywrap`
# If polywrap is already installed, the script instead checks for updates
```

## Overview

The Polywrap CLI allows us not only to build, test, and deploy Wraps, but also generate types for our applications which use the Polywrap Client.

This tutorial assumes that you installed `polywrap` globally.

You can see all available commands by running:

```
polywrap help
```

## Create a Polywrap-powered application

Polywrap allows you to integrate wraps into your app in a type-safe manner for supported languages.

Currently, Polywrap has type-safety support for:

- Typescript
- Rust
- Python
- Kotlin
- Swift

The Polywrap CLI allows you to create a template project in any of these languages with type safety built in.

Let's start with creating a new project using the Polywrap CLI:

<Tabs groupId="project">
<TabItem value="typescript" label="Typescript">

```shell-session
polywrap create app typescript my-app
```

</TabItem>

<TabItem value="rust" label="Rust">

```shell-session
polywrap create app rust my-app
```

</TabItem>

<TabItem value="python" label="Python">

```shell-session
polywrap create app python my-app
```

</TabItem>

<TabItem value="kotlin" label="Kotlin/Android">

```shell-session
polywrap create app android my-app
```

</TabItem>

<TabItem value="swift" label="Swift/iOS">

```shell-session
polywrap create app ios my-app
```

</TabItem>
</Tabs>

This will create a basic application in the language of your choice.
There are two key files we want to take a look at, which define our Polywrap-powered project and allow us to perform code generation for type-safety. Let's take a look at them:

### The Polywrap Manifest (`polywrap.yaml`)

In order for the Polywrap CLI to know what kind of project it's working with, it needs a Polywrap Manifest file to obtain some basic information about your project. This is the `polywrap.yaml` file.

It has a structure similar to this:

<Tabs groupId="project">
<TabItem value="typescript" label="Typescript">

```yaml title="polywrap.yaml"
$snippet: cli-ts-app-manifest
```

</TabItem>

<TabItem value="rust" label="Rust">

```yaml title="polywrap.yaml"
$snippet: cli-rust-app-manifest
```

</TabItem>

<TabItem value="python" label="Python">

```yaml title="polywrap.yaml"
$snippet: cli-py-app-manifest
```

</TabItem>

<TabItem value="kotlin" label="Kotlin/Android">

```yaml title="polywrap.yaml"
$snippet: cli-kt-app-manifest
```

</TabItem>

<TabItem value="swift" label="Swift/iOS">

```yaml title="polywrap.yaml"
$snippet: cli-swift-app-manifest
```

</TabItem>
</Tabs>

The `format` property denotes the version of the Polywrap Manifest format. Under `project`, you can set the `name` field to the name of your application, while the `type` field describes the project type, thus letting the CLI know how to interact with the application code.

Under the `source` section, we have a `schema` field with a path that leads to a Schema file.

### The Schema File (`polywrap.graphql`)

Every Polywrap project has a Schema file - it defines the types found within the project, what Wraps the project imports, and, in the context of a Wrap project, the methods that Wrap exposes.

In the context of an application project, the Schema file defines which Wraps our application imports and is used by the CLI to generate code with which we can invoke our Wraps in a type-safe manner.

Taking a look at the file, we can see `import` statements:

<Tabs groupId="project">
  <TabItem value="typescript" label="Typescript">

  ```yaml title="polywrap.graphql"
  $snippet: cli-ts-app-schema
  ```

  </TabItem>

  <TabItem value="rust" label="Rust">

  ```yaml title="polywrap.graphql"
  $snippet: cli-rust-app-schema
  ```

  </TabItem>

  <TabItem value="python" label="Python">

  ```yaml title="polywrap.graphql"
  $snippet: cli-py-app-schema
  ```

  </TabItem>

  <TabItem value="kotlin" label="Kotlin/Android">

  ```yaml title="polywrap.graphql"
  $snippet: cli-kt-app-schema
  ```

  </TabItem>

  <TabItem value="swift" label="Swift/iOS">

  ```yaml title="polywrap.graphql"
  $snippet: cli-swift-app-schema
  ```

  </TabItem>
</Tabs>

An `import` statement defines which Wraps we are importing, therefore using within our application.

### Generating types (`codegen`)

Now that we know how we can "import" Wraps into our application, we can use the `codegen` command inside the Polywrap CLI to generate types that represent our Wraps which we can use within our application.

To generate types, all we need to do is run the `codegen` command inside our project's root directory:

```shell-session
polywrap codegen
```

This will generate types inside a `wrap` directory which you will be able to import within your application.

## Introduce type-safety into your code

Now that we have our types generated, we can take a look at our sample application's main file.

Let's first take a look at some of the imports:

<Tabs groupId="project">
  <TabItem value="typescript" label="Typescript">

  ```typescript title="index.ts"
  $snippet: cli-ts-app-imports
  ```

  </TabItem>

  <TabItem value="rust" label="Rust">

  ```rust title="lib.rs"
  $snippet: cli-rust-app-imports
  ```

  </TabItem>

  <TabItem value="python" label="Python">

  ```python title="__main__.py"
  $snippet: cli-py-app-imports
  ```

  </TabItem>

  <TabItem value="kotlin" label="Kotlin/Android">

  ```kotlin title="PolywrapDemoViewModel.kt"
  $snippet: cli-kt-app-imports
  ```

  </TabItem>

  <TabItem value="swift" label="Swift/iOS">

  ```swift title="PolywrapDemo.swift"
  // There is no need for imports in Swift, as all classes are in the app's namespace
  ```

  </TabItem>
</Tabs>

Here we can see that we've imported Module types that represent our Wraps, according to their specified namespace. Using these types, we can invoke our Wraps in a type-safe manner, without having to repeatedly specify the Wrap URI or do any guesswork regarding invoke argument/return types:


<Tabs groupId="project">
<TabItem value="typescript" label="Typescript">

```typescript title="index.ts"
$snippet: cli-ts-app-typesafe
```

</TabItem>

<TabItem value="rust" label="Rust">

```rust title="lib.rs"
$snippet: cli-rust-app-typesafe
```

</TabItem>

<TabItem value="python" label="Python">

```python title="__main__.py"
$snippet: cli-py-app-typesafe
```

</TabItem>

<TabItem value="kotlin" label="Kotlin/Android">

```kotlin title="PolywrapDemoViewModel.kt"
$snippet: cli-kt-app-typesafe
```

</TabItem>

<TabItem value="swift" label="Swift/iOS">

```swift title="PolywrapDemo.swift"
$snippet: cli-swift-app-typesafe
```

</TabItem>
</Tabs>


This allows us to write all of our code in a type-safe manner, and allows for IDEs like VS Code to give us autocompletion suggestions via IntelliSense. Now we can explore our Wraps by simply importing them and trying them out!
