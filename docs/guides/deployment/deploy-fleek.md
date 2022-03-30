---
id: deploy-fleek
title: Deploying to Fleek
---

## **Introduction**

In this guide, we'll walk you how to deploy your Polywrapper to [Fleek](https://fleek.co/) so that other dapps could integrate it into their dapps!

For this guide, we'll be using the [Polywrap Demos](https://github.com/polywrap/demos) repo. 

## **Table of Contents**
<details>
    <summary>Click to expand</summary>

  * [What you need to get started](#what-you-need-to-get-started)
  * [Step 1. Clone the polywrap demo project](#step-1-clone-the-polywrap-demo-project)

</details>


### What you need to get started:
* 💚 [Node. js](https://nodejs.org/en/) 
* 🧶[Yarn](https://classic.yarnpkg.com/en/)
    * `node >=10.0.0` or `yarn >=1.0.0`
* 🔸 [Git](https://git-scm.com/downloads)


### Step 1. Clone the polywrap demo project  

```bash
git clone https://github.com/polywrap/demos.git
```

### Step 2.
Then, we will check out the demo branch with the meta files already set up:

```bash
git pull origin polywrap-metadata
```

### Step 3.
Now, we can build the sample Polywrapper with the following commands:

```bash
nvm use
yarn
yarn build
```

Your `build` folder should be generated now. Copy and paste the `./web3api.meta.yaml` and `./meta` files into the `build` folder.

### Step 4.  **Uploading the build folder to Fleek**

On the left hand menu of your Fleek account page, click on the "Storage" link.

Then, click "Create Folder" and name it anything that you'd like.

After that, click "Upload" to begin uploading contents of your `build` folder onto Fleek.

### Step 5.  **Verifying the package on IPFS**

Simply click the "Verify on IPFS" button. This will provide you with the IPFS hash! 

For an example of what you should see, visit this [IPFS link](https://ipfs.fleek.co/ipfs/QmQLsx7sxkLrXwh8dPmF2MTWJmgB5C2FmWYth11i7oL3vN).

Now that you have the IPFS hash, you can use it as a value in the URI property of your Polywrap queries to access the mutation and query functions on this Polywrapper. You can also register an ENS domain and have it resolve to this IPFS content.
