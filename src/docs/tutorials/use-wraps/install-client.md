---
id: 'install-client'
title: 'Installing the Polywrap JS client'
---

## **Introduction**

If you're a JavaScript developer building Browser, Node.js, or React based apps, this guide is for you.

:::tip
In the future, JavaScript will be one of many supported languages. Our goal is to enable the use of Polywrap in every major programming language.
:::

By the end of this document, you'll gain the following skills:

- How to instantiate the Polywrap client in your JavaScript App
- Invoke any wrapper using the Polywrap client
- Configure the Polywrap client
- Build React apps with ease

If you get stuck during this guide, send us a message on our [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

As prerequisites for this guide, we recommend having familiarity with [TypeScript](https://www.typescriptlang.org/). [React](https://reactjs.org/) will also be used in the latter sections.

## **Installation**

To use wrappers in your app, all you need is the Polywrap Client!

```
npm install --save @polywrap/client-js
```

The Polywrap JavaScript Client works in both Node.js, and browser applications.

## **Examples**
Some example projects that integrate the JS client can be found [here](https://github.com/polywrap/demos/tree/main/hello-world/app).

> The next section assumes that you're integrating Polywrap into an existing app project. If you want a quick start with our template project, simply run:
>
> ```bash
> npx polywrap create app typescript <project-name>
> ```
>
> Where `<project-name>` is replaced with a custom name of your choosing. For example `my-app`.
>
> This command will create a new project folder with a "Hello World" app that
> lets you interact with two simple Wasm wrappers at `wrap://ens/wraps.eth:logging@1.0.0` and `wrap://ens/wraps.eth:ethereum@1.0.0`.
