---
id: 'project-setup'
title: 'Project Setup'
---

:::tip
You're reading Part One of the [Create a Wrap](../introduction) tutorial, where we learn everything you need to know to productively develop Polywrap wraps.
:::


## **Create the Project**

Let's first generate our project scaffolding using the Polywrap CLI. The `create` command of the Polywrap CLI uses the syntax `polywrap create <project type> <language> <name>`. This tutorial is about building Wasm wraps, so let's create a `wasm` project and name it `my-wrap`

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

...