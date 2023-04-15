---
id: deploy-pipeline
title: 'Configure Polywrap deployment pipeline'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Polywrap makes it easy to create an automated wrapper deployment pipeline using a Deploy Manifest `polywrap.deploy.yaml` file and the Polywrap CLI's [`deploy`](../../reference/cli/commands/deploy) command.
This section helps you configure a Deploy Manifest, which defines the stages of your deployment pipeline. 
Once you've configured the manifest, you can use the Polywrap CLI's [`deploy`](../../reference/cli/commands/deploy) command to execute the pipeline.

## Declaration

The location of the deployment manifest should be declared in your Polywrap Manifest `polywrap.yaml` with a field labeled *deploy*.

```yaml
deploy: ./polywrap.deploy.yaml
```

## Content

The concents of a Deploy Manifest consists of one or more jobs with their steps, each of which has some common fields and a set of configuration options particular to the step's module. All jobs run in parallel, while steps of each job run in series.

The result of a step can be passed as input to a later step using `$$step_name`.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
primaryJobName: # Name of the job that runs the primary deployment sequence.
jobs: # Each job describes series of events in the pipeline
  [name]: # Name of the job
    config: # configuration for all deployment modules, can be overridden within each step
    steps: # Each step describes an event in the pipeline
      - name: # The name of the step
        package: # Deployment module
        uri: # The wrap URI of source content
        depends_on: # (Optional) Use prior step's output
        config: # Configuration for the deployment module
```

</TabItem>
<TabItem value="example">

```yaml
format: 0.3.0
primaryJobName: ipfs_deploy
jobs:
  ipfs_deploy:
    config:
      gatewayUri: ipfs.wrappers.io
    steps:
      - name: ipfs_deploy
        package: ipfs
        uri: fs/./build
        config:
          gatewayUri: ipfs.wrappers.io
      - name: ens_deploy
        package: ens
        uri: $$ipfs_deploy
        config:
          domainName: uniswapv3.eth
          provider: https://rinkeby.infura.io/v3/d119148113c047ca90f0311ed729c467
          ensRegistryAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
          privateKey: 0xNeverShareYourPrivateKey
```
</TabItem>
</Tabs>

## Deployment Modules

Polywrap currently supports three types of deployment modules: 
 - **ipfs**: pins a folder's contents to IPFS and returns the content hash (CID)
 - **ens**: points an ENS domain to an IPFS content hash
 - **local-dev-ens**: registers a domain on a local test environment and points the domain to an IPFS content hash

### IPFS

The IPFS module pins a folder's contents to IPFS and returns the content hash (CID). 
It can be used to deploy a wrapper by [pinning](https://docs.ipfs.io/how-to/pin-files/) the contents of your project's build folder to the IPFS network. 

The IPFS module's custom configuration requires an IPFS gateway URI so the CLI knows where to send the files.

```yaml title="Example: ipfs configuration"
config:
  gatewayUri: 'ipfs.wrappers.io' # IPFS gateway URI
```

### ENS

The ENS module accepts an IPFS content hash (CID) as input and points an ENS domain name to it.

The ENS module's custom configuration requires three arguments and accepts an optional fourth:
 - domainName: the ENS domain name owned by your Ethereum account
 - provider: an Ethereum JSON RPC provider
 - ensRegistryAddress: the Ethereum address of the ENS Registry smart contract
 - privateKey: (optional) your Ethereum account's private key, used when the Ethereum provider cannot produce an account signer

```yaml title="Example: ens configuration"
config:
  domainName: 'wrapper.eth' # ENS domain name
  provider: 'http://localhost:4545' # an Ethereum JSON RPC provider URI
  ensRegistryAddress: '0x...' # The ENS Registry contract address
  privateKey: '' # a private key may be required to sign ethereum transactions
```

### Local Dev ENS

The Local Dev ENS module accepts an IPFS content hash (CID) as input, registers an ENS domain name, and points the domain name to the IPFS CID.

The Local Dev ENS module was created with Polywrap's default test environment infrastructure in mind. 

:::tip
Polywrap's default test environment can be started with the `polywrap infra up eth-ens-ipfs` CLI command and stopped with the `polywrap infra down eth-ens-ipfs` CLI command.
:::

The module assumes ENS infrastructure is set up on a local Ethereum network with the ENS smart contracts deployed at the following addresses:

 - ENS Registry: 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab
 - ENS Resolver: 0x5b1869D9A4C187F2EAa108f3062412ecf0526b24
 - ENS Registrar: 0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb
 - ENS Reverse Lookup: 0xe982E462b094850F12AF94d21D470e21bE9D0E9C

The Local Dev ENS module's custom configuration requires two arguments:
 - domainName: the desired ENS domain name to be registered
 - ports: contains the port of the local Ethereum test network

```yaml title="Example: local-dev-ens configuration"
config:
  domainName: 'wrapper.eth' # ENS domain name
  ports:
    ethereum: 4545
```