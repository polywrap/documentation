---
id: create-interface
title:  Create an Interface
---

## **Introduction**

In this guide, we'll walk you through creating your own interface

As always, if you need any help, message us on [Discord](https://discord.com/invite/Z5m88a5qWu)!

## **Prerequisites**

You'll need the following installed before building your plugin:

- `nvm`
- `yarn`

## **Getting started**

Use the following command to spin up a project folder for your plugin to get started.

```
npx @web3api/cli create api interface <project-name>
```

## **Overview of project files**

Your project should look something like this:

```
src/
|   ├── package.json
|    |── query.graphql   
|    └──  web3api.yaml           
```


## **Installation**

Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:

- `nvm install && nvm use`
- `yarn`

## Start Test Environment
`yarn test:env:up`  

## Build & Deploy Web3API
`yarn deploy` 




## **Example Plugins**

For inspiration, please refer to these existing JavaScript plugins:
* [Wrap Utilities](https://github.com/nerfZael/wrap-utilities)
* [wrap-fs-interface](https://github.com/nerfZael/wrap-utilities/tree/main/src/wrap-fs/wrap-fs-interface)
* [wrap-metadata-interface](https://github.com/nerfZael/wrap-utilities/tree/main/src/wrap-metadata/wrap-meatadata-interface)
* [wrap-mustache-interface](https://github.com/nerfZael/wrap-utilities/tree/main/src/wrap-mustache/wrap-mustache-interface)
* [wrap-regex-interface](https://github.com/nerfZael/wrap-utilities/tree/main/src/wrap-regex/wrap-regex-interface)
