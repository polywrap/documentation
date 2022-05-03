---
id: cli
title: 'Polywrap CLI'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<a href="https://www.npmjs.com/package/@web3api/cli" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/npm/v/@web3api/cli.svg" alt="npm"/>
</a>

<br/>
<br/>

Command line interface for building with Polywrap.

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
]}>
  <TabItem value="npm">

  ```bash
  npm install @web3api/cli
  ```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add @web3api/cli
  ```
  </TabItem>
</Tabs>

:::tip
Node v16 and above is recommended.
:::

## Usage

To list available commands, run the `help` command:

```bash
w3 help
```

The following menu will appear in your terminal window:

```sh
  w3             🔥 Web3API CLI 🔥
  help (h)       -
  test-env (t)   Manage a test environment for Web3API
  query (q)      Query Web3APIs using recipe scripts
  plugin (p)     Build/generate types for the plugin
  deploy (b)     Deploys/Publishes a Web3API
  create (c)     Create a new project with w3 CLI
  codegen (g)    Auto-generate API Types
  build (b)      Builds a Web3API
  app (a)        Build/generate types for your app
```

To learn about each command, simply add `--help` after the command name to be given a full description of the options available:
```bash
w3 build --help
```
