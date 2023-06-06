---
id: 'build-deploy-test'
title: 'Build, deploy and test'
---

### **Build**

Let's start building our project! Simply run:

```bash
yarn build
```

In the output window, you'll see that our smart contract was compiled, and our Polywrap wrap was built and output to the `./build/*` folder. It contains the following files:

```
build/
    |── wrap.wasm          # Wrap Logic
    └── wrap.info          # Wrap Manifest
```

This directory's contents will be uploaded to decentralized storage, and enable any Polywrap Client to download, and execute your wrap's functionality within the application.

The `wrap.wasm` file is the WebAssembly file that was compiled from AssemblyScript.

Lastly, the `wrap.info` file describes the layout of the package, as well as its methods and custom types.

### **Deploy**

To deploy our Polywrap wrap and associated smart contracts for testing, let's first setup a test environment. Simply run:

```bash
yarn test:env:up
```

This will stand-up an Ethereum node, as well as an IPFS node.

:::tip
In the future, test environments will be easily configurable to include any nodes your Polywrap wrap requires.
:::

Next, let's deploy the `SimpleStorage.sol` smart contract, and the `simplestorage.eth` wrap URI by running:

```bash
yarn deploy
```

### **Test**

With our Polywrap wrap live at `simplestorage.eth` on our test network, it's now time to test it out!

This is where our workflows come in handy. Run `yarn test` to see this in action.

In the output window, you'll see a combination of jobs and returned results from the Polywrap wrap. In this workflow, we send a combination of `setData` and `getData` queries which modify the `SimpleStorage.sol` contract's stored value.

Now that we've built the SimpleStorage wrap, let's add custom functionality to it in the next section!
