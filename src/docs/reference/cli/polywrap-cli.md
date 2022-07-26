---
id: polywrap-cli
title: 'Polywrap CLI'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<a href="https://www.npmjs.com/package/polywrap" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/npm/v/polywrap.svg" alt="npm"/>
</a>

<br/>
<br/>

Command line interface for building with Polywrap.

## Prerequisites

[Docker](https://www.docker.com/) is required to perform some tasks, including to [`build`](./commands/build) Wasm wrappers.
Linux users will also need to install [Docker Compose](https://docs.docker.com/compose/install/).
Docker is free for personal use. Once Docker is installed and enabled, you're ready to go!

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
]}>
  <TabItem value="npm">

  ```bash
  npm install polywrap
  ```
  </TabItem>
  <TabItem value="yarn">

  ```bash
  yarn add polywrap
  ```
  </TabItem>
</Tabs>

:::tip
Node v16 and above is recommended.
:::

## Usage

To list available commands, run the `help` command:

```bash
polywrap --help
```

The following menu will appear in your terminal window:

```sh
$snippet: cli-command-help-
```

To learn about each command, simply add `--help` after the command name to be given a full description of the options available:
```bash
polywrap build --help
```
