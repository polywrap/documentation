---
id: 'project-folder'
title: 'The Polywrap project folder'
---

Once you have your project set up, the folder tree should look something like this:

```
polywrap.yaml                  # Manifest File
src/
│   ├── index.ts              # Entry point, exports methods defined in schema
│   |── schema.graphql/       # Schema
|   └── contracts/            # Smart Contracts
|
workflows/                    # Job definitions (described below)
|
scripts/                      # Smart Contract Build/Deploy
```

### **`polywrap.yaml`**
The `polywrap.yaml` is a manifest file describing the layout of a Polywrap Wasm wrapper.

### **`schema.graphql`**
Each wrapper project has a [Wrapper Schema](../../wrapper-schema). 
The schema defines the wrapper's dependencies, methods, and custom types. 
In short, it's an interface describing how to use the wrapper.

### **`src/index.ts`**
The `index.ts` file exports the wrapper's method's implementations, which contain the wrapper's logic.

### **`src/contracts/*`**
The `src/contracts` directory contains our protocol's Ethereum-based smart contracts.

### **`workflows/*`**
[Workflows](../../workflows/running-workflows) provide a simple way to test your Polywrap without having to write custom testing logic (with JavaScript and Jest, for example).

We'll be using this functionality further down in this guide with the `polywrap run` command, allowing us to easily send test queries against our API.

### **`scripts/*`**
We've defined some simple build & deployment scripts for our Solidity smart contracts. These are basic utilities, and can be replaced entirely by a [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/) project.

In the next section, we'll build this example Wasm wrapper and see what gets outputted in the build folder!
