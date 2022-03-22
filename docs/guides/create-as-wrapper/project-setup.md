---
id: 'project-setup'
title: 'Project setup'
---

If you're looking to find out what it takes to build a Polywrap wrapper, you've come to the right place! This guide will help you understand Polywrap's core concepts. If you haven't checked out our [Start Here](../../../getting-started/what-is-polywrap) section yet, we recommend visiting that section first.

In this guide, we'll walk you through the process of creating our template project using our CLI. We'll then look at the different folders and files that make up a Polywrap wrapper such as the GraphQL schema and WebAssembly implementations. Then, we'll dive in and add more code to these existing files to expand the functionality of our wrapper. Finally, we'll learn about the different ways you can build and deploy your wrapper so that other devs can integrate your wrapper into their own dapps!

:::tip
This guide will make use of a simple smart contract written in Solidity. We'll be adding a few functions to it and then use a script to deploy the contract to a test environment where we'll interact with it using our Polywrap wrapper.

No prerequisite Solidity or smart contract knowledge is required to use the guide!

If you want to skip ahead to see the resulting code of this guide, visit our [Demos repository](https://github.com/polywrap/demos/tree/main/simple-storage/wrapper-completed).
:::

If at any time in this process you get stuck or have questions, please don't hesitate to reach out on [Discord](https://discord.com/invite/Z5m88a5qWu).

## **Prerequisites**

You'll need the following installed before building your wrapper:

- `nvm`
- `yarn`
- `docker`
- `docker-compose`

You'll be using [AssemblyScript](https://www.assemblyscript.org/) to implement your wrapper's logic. AssemblyScript compiles to [WebAssembly](https://webassembly.org/).

:::tip
For now, AssemblyScript is the only language that you can implement your wrapper with. In the future, it'll be one of many supported languages that compile to WebAssembly, such as Rust or Go.

If you have experience programming in TypeScript, you'll feel at home with AssemblyScript. The language's syntax is very similar.

👋 This guide is meant for those who want to build and deploy their own wrappers. If you're interested in integrating deployed wrappers into your own dapp, see our [Integrate into a JS dapp](../create-js-dapp/install-client) guide.
:::

## **Create your project**

Let's begin by creating a template project by running the following command:

```bash
npx @web3api/cli create api assemblyscript <project-name>
```

Where `<project-name>` is replaced with a custom name of your choice. For example `my-wrapper`.

Once complete, you'll see a new folder appear, named after the custom name you've chosen. Please navigate into this new directory (using `cd` for example).

## **Installation**

Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:

- `nvm install && nvm use`
- `yarn`

The Polywrap CLI is now installed locally to your project's directory. Going forward we'll use this local installation by running `npx w3`.

We recommend avoiding installing the `@web3api/cli` package globally to avoid future version conflicts, and maximize reproducibility for the other developers you're working with.

Let's head over to the next section to see what's in this new directory!
