---
id: 'writing-tests-with-workflows'
title: 'Writing tests with workflows'
---

### **Testing**

In order to test this new functionality, we'll update the existing `./workflows/e2e.yaml` workflow file to include the new methods we've added (`setIpfsData`, and `getIpfsData`).

Add the following case to the `e2e.yaml` workflow in the `./workflows` folder.

```yaml title="./workflows/e2e.yaml"
$snippet: yaml-simple-storage-ipfs-workflow
```

Once our workflow has been defined, we may want to be able to validate our actual results against our expectations.
Workflow validation uses [CUE](https://cuelang.org/), a flexible and expressive data validation language. 
CUE must be installed to complete this step. 

If you don't want to install anything right now, don't worry! 
Our results will be easy to verify with manually.

To continue with automated testing, let's add our expected output to a new file in the workflows folder. We will call
the file `validator.cue`.

```cue title="./workflows/validator.cue"
$snippet: cue-simple-storage-workflow-validator
```

With our workflow complete, we'll deploy and test our Wasm wrapper locally in the next section!
