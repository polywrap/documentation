---
id: 'deploy-locally-and-test'
title: 'Deploy locally & run tests'
---

### **Deploy**

With our recipe complete, let's test the Polywrapper on our local environment! First, let's set up our test environment with the following command in your terminal:

```bash
yarn test:env:up
```

:::tip
This command starts up a test environment using [Ganache](https://www.trufflesuite.com/ganache).

To close the test environment, simply run:

```bash
yarn test:env:down
```

:::

Next, we will deploy our both our `SimpleStorage.sol` smart contract as well as our Polywrapper with the following command:

```bash
yarn deploy
```

:::tip
Behind the scenes, `yarn deploy` will run the following commands:

```bash
yarn deploy:contract && yarn deploy:web3api
```

Let's break down each of these commands, starting with `yarn deploy:contract`, which itself runs this command:

```bash
node ./scripts/deploy-contract.js
```

In the above command, we are executing a custom script, `deploy-contract.js` that deploys Simple Storage smart contract at a specific address on our test network. We'll be interacting with this deployed smart contract using our Polywrapper.

Next, our command will build and deploy the Polywrapper:

```bash
npx w3 build --ipfs http://localhost:5001 --test-ens simplestorage.eth
```

This will deploy the Polywrapper on an Ethereum Name Service (ENS) domain registered in the test environment that is set to resolve to a local IPFS node.
:::

### **Test**

Now, we'll use the following command to check whether our Polywrapper and smart contract are working properly:

```bash
yarn test
```

This command uses our custom `query` CLI command, which will execute a series of Polywrap queries and mutations and return the result to you.

### **Conclusion**

🎉 **Congratulations! You've create a custom Polywrap!**

Hopefully this article has given you a clear understanding of the Polywrap toolchain's primary features. If at any time in this process you get stuck or have questions, please don't hesitate to reach out on [Discord](https://discord.com/invite/Z5m88a5qWu).
