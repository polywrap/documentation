---
id: wrappers-cli
title: Deployment using the "wrappers" CLI
---

## **Introduction**

In this 5 step guide,  we'll walk you how to deploy your Polywrap wrapper using the `CLI`.
so that other apps could integrate it into their apps!

## **Table of Contents**
<details>
    <summary>Click to expand</summary>

  * [Introduction](#introduction)
  * [What you need to get started](#what-you-need-to-get-started)
  * [Step 1. Clone the polywrap demo project](#step-1-clone-the-polywrap-demo-project)
  * [Step 2. Pull the polywrap metadata](#step-2-git-pull-metadata)
  * [Step 3. Build the wrapper ](#step-3-build-the-wrapper)
  * [Step 4. Upload the build folder to CLI](#step-4-upload-the-build-folder-to-fleek)
  * [Step 5. Verifying the package on IPFS ](#step-5-verifying-the-package-on-ipfs)


</details>


### What you need to get started:
* We'll be using the [Polywrap Demos](https://github.com/polywrap/demos) repo for this guide. 
* 💚 [Node. js](https://nodejs.org/en/) 
* 🖥️📦 [CLI](https://www.npmjs.com/package/polywrap)
* 🐳 [Docker](https://www.docker.com/)
* 🧶[Yarn](https://classic.yarnpkg.com/en/)
    * Versions:  `node >=10.0.0` or `yarn >=1.0.0`
* 🔸 [Git](https://git-scm.com/downloads)


### Step 1. Clone the polywrap demo project  

```bash
git clone https://github.com/polywrap/demos.git
```

### Step 2. Git pull metadata
Then, we will check out the demo branch with the metafiles already set up:

```bash
git pull origin polywrap-metadata
```

### Step 3. Build the wrapper
Now, we can build the sample wrapper with the following commands:

```bash
nvm use
yarn
yarn build
```

### Step 4.  **Upload the build folder to CLI**

Upload build results to an IPFS node (default: dev-server's node)

```bash
npx polywrap build --ipfs http://localhost:5001
```

### Step 5.

 🎉 Congratulations 🎉 on deploying using the Polywrap CLI!  