---
id: 'deploy-locally-and-test'
title: 'Deploy locally & run tests'
---

### **Deploy**

With our workflow complete, let's test the Wasm wrapper on our local environment! First, let's set up our test environment with the following command in your terminal:

```bash
yarn test:env:up
```

:::tip
This command starts up a test environment with a local Ethereum network using [Ganache](https://www.trufflesuite.com/ganache), an ENS smart contract, and a local IPFS node.

To close the test environment, simply run:

```bash
yarn test:env:down
```
:::

Next, we will deploy our both our `SimpleStorage.sol` smart contract as well as our wrapper with the following command:

```bash
yarn deploy
```

:::tip
Behind the scenes, `yarn deploy` will run the following commands:

```bash
yarn deploy:api && yarn deploy:contract
```

Let's break down each of these commands, starting with `yarn deploy:api`, which itself runs this command:

```bash
npx polywrap deploy
```

The polywrap CLI's deploy command executes a deployment pipeline defined in a `polywrap.deploy.yaml` manifest. 
Our deployment pipeline builds and deploys our wrapper to our local test environment. 
The wrapper is assigned to an Ethereum Name Service (ENS) domain registered in the test environment that is set to resolve to our local IPFS node.

We next deploy the SimpleStorage smart contract to the Ethereum test network using a script we've written for you:

```bash
node ./scripts/deploy-contract.js
```

We'll be interacting with this deployed smart contract using our Wasm wrapper.
:::

### **Test**

Now, we'll use the following command to check whether our wrapper and smart contract are working properly:

```bash
yarn test:workflow
```

This command uses the Polywrap CLI's `run` command, which will execute a series of Polywrap invocations and return the result to you.

### **Conclusion**

🎉 **Congratulations! You've create a custom Wasm wrapper!**

Hopefully this article has given you a clear understanding of the Polywrap toolchain's primary features. If at any time in this process you get stuck or have questions, please don't hesitate to reach out on [Discord](https://discord.com/invite/Z5m88a5qWu).
