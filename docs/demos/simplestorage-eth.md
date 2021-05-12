---
id: simplestorage-eth
title: SimpleStorage dApp
---

## **Introduction**

We believe in learning by doing so we've put together a simple tutorial that should only take a few minutes of your time.

Get an firsthand look at how Web3API integrates with a decentralized application (dApp).

## **Prerequisites**

> _If you're an experienced Web3 dev, chances are you've already done this and can skip to the [dApp Overview](#dapp-overview)._

1. Install the MetaMask Chrome extension [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) and set up your wallet.<br/>

   - **MetaMask** is a crypto wallet and gateway to blockchain apps. We'll be using it to connect to our demo. Learn more about MetaMask on their [homepage](https://metamask.io/).

2. Get some test ETH.<br/>

   - Log into MetaMask and switch your network to the **Rinkeby Test Network**.
   - We can get test ETH at a faucet like this [one](http://rinkeby-faucet.com/).
   - Copy your Rinkeby address from MetaMask and paste it into the website then click the "Submit" button.

And that's it 🎉! You're ready to use the Web3API SimpleStorage website demo.

## **dApp Overview**

🏁 To begin, visit our SimpleStorage dApp that's deployed at the link below. Be sure to set your MetaMask's network to Rinkeby.<br/>

👉 [**SimpleStorage Demo Website**](https://demo.simplestorage.web3api.dev)

## **Here's an overview of our demo:**

<img
src={require('../assets/demo_01.png').default}
alt="Demo Screenshot"
width="650"
/>

1. ENS Domain: `api.simplestorage.eth`
   - This is the ENS domain name that will be resolved to the underlying IPFS content identifier.
   - If you're unfamiliar with ENS and IPFS, this article does a great job explaining how they work: [A Guide to ENS Domains + IPFS by Fleek](https://medium.com/fleek/guide-ens-domains-ipfs-ethereum-name-service-26d6092cfadf).
2. IPFS
   - This is where the SimpleStorage Web3API is stored. Feel free to click the "IPFS" link to see the package's contents. It should show the following files: `web3api.yaml`, `schema.graphql`, `query.wasm`, and `mutation.wasm`.
   - We'll cover these files in detail in the [_For: Developers_](/#for-developers) section. These files are the core of Web3API -- enabling dApps that can use any blockchain, from _any_ programming language.
3. Deploy `SimpleStorage.sol`
   - Clicking this button will cause the Web3API client to fetch the Web3API package. It will first send a request to the ENS domain which resolves to the IPFS content identifier. At that point, our dApp will download the Web3API from IPFS. Now we're ready to execute some API logic inside of our dApp.
4. GraphQL query
   - We've added a codeblock to help you see the GraphQL query that will be fired off when you click the deploy button.
   - [GraphQL](https://graphql.org/) is a query language for APIs. Using GraphQL is one of the reasons that Web3API is so easy to use, as GraphQL is very popular amongst existing Web2 developers.

### **Deploy The SimpleStorage Contract**

By clicking the deploy button, you'll be prompted by MetaMask to send a transaction using your test ether.

After a few moments, an Ethereum address will appear to let you know that the `SimpleStorage.sol` smart contract has been deployed.

### **Set Storage Values**

Now that your smart contract has been deployed and your application has downloaded the Web3API, your app has access to a new query to set the storage value on the smart contract.

Press the up or down arrow on the value input and then click the "Set Value" button to send a GraphQL "mutation" which modifies the storage value.

### **Conclusion**

We hope this demo gave you an idea of the simplicity that Web3API introduces to your dev team. By hosting the Web3API package on IPFS, we're able to reduce the size of your dApp, improve security, and enable Web3 queries using GraphQL. If you have any comments or feedback on what you saw, feel free to message our team on Discord.
