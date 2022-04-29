---
id: create-interface
title:  Create an Interface
---

## **Introduction**

In this guide, we'll walk you through creating your own interface

* what an interface is
* why you would want to use one (what use-cases would be good for using an interface)

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
|  ├── README.md
|  ├── meta
|   |     ├── icon.png	
|   |     ├──link.svg	
|   |     ├──test.graphql	
|   |     └──test.json
|  ├──  yarn.lock
|  ├── node_modules		
|  ├── package.json
|   |── query.graphql   
|   |── web3api.meta.yaml
|   └──  web3api.yaml    
```


## **Installation**

Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:

- `nvm install && nvm use`
- `yarn`

## Start Test Environment
`yarn test:env:up`  

## Build & Deploy Web3API
`yarn deploy` 

