---
id: 'project-setup'
title: 'Project setup'
---

If you're looking to find out what it takes to build a Polywrap wrapper, you've come to the right place! This guide will help you understand Polywrap's core concepts. If you haven't checked out our [Start Here](../../../getting-started/what-is-polywrap) section yet, we recommend visiting that section first.

<<<<<<< HEAD
This guide will walk you through creating our template project using our CLI. Then, we'll look at the different folders and files that make up a Polywrap wrapper, such as the GraphQL schema and WebAssembly implementations. Next, we'll dive in and add more code to these existing files to expand the functionality of our wrapper. Finally, we'll learn about how you can build and deploy your wrapper so that other devs can integrate your wrapper into their dapps!
=======
In this guide, we'll walk you through the process of creating our template project using our CLI. Then, we'll look at the different folders and files that make up a Polywrap wrapper such as the GraphQL schema and WebAssembly implementations. Next, we'll dive in and add more code to these existing files to expand the functionality of our wrapper. Finally, we'll learn about the different ways you can build and deploy your wrapper so that other devs can integrate your wrapper into their own apps!
>>>>>>> main

:::tip
This guide will use a simple, smart contract written in Solidity. We'll be adding a few functions to it and then use a script to deploy the contract to a test environment where we'll interact with it using our Polywrap wrapper.

NB: No Solidity or smart contract knowledge is required to use the guide!

If you want to skip ahead to see the resulting code of this guide, visit our [Demos repository](https://github.com/polywrap/demos/tree/main/simple-storage/wrapper-completed).
:::

If you get stuck or have questions in this process, please reach out to us on [Discord](https://discord.com/invite/Z5m88a5qWu).

## **Prerequisites**

You'll need the following installed before building your wrapper:

- `nvm`
- `yarn`
- `docker`
- `docker-compose`

You'll be using [AssemblyScript](https://www.assemblyscript.org/) to implement your wrapper's logic. AssemblyScript compiles to [WebAssembly](https://webassembly.org/).

:::tip
For now, AssemblyScript is the only language you can implement your wrapper. In the future, it'll be one of many supported languages that compile to WebAssembly, such as Rust or Go.

If you have experience programming in TypeScript, you'll feel at home with AssemblyScript since the language's syntax is very similar.

👋 This guide is meant for those who want to build and deploy their own wrappers. If you're interested in integrating deployed wrappers into your own app, see our [Integrate into a JS App](../create-js-app/install-client) guide.
:::

## **Create your project**

Let's begin by creating a template project by running the following command:

```bash
npx @web3api/cli create api assemblyscript <project-name>
```

Where `<project-name>` is replaced with a custom name of your choice. For example, `my-wrapper.`

Once complete, you'll see a new folder appear, named after your chosen custom name. Please navigate this new directory (using `cd,` for example).

## **Installation**

Let's ensure all of your projects have all dependencies installed. From inside your project's directory, run:

- `nvm install && nvm use`
- `yarn`

The Polywrap CLI is now installed locally in your project's directory. We'll use this local installation by running `npx w3` as we advance.

We recommend not installing the `@web3api/cli` package globally to avoid future version conflicts and maximize reproducibility for the other developers.

Let's head over to the next section to see what's in this new directory!
