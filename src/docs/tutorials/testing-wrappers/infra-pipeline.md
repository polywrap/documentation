---
id: infra-pipeline
title: 'Configure Polywrap infrastructure pipeline'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Polywrap CLI [`infra`](../../reference/cli/commands/infra) command interacts with an Infra Manfiest 
`polywrap.infra.yaml` file to to help users manage local infrastructure for their wrappers.
The Infra Manifest declares environmental variables and infrastructure modules that describe the locations of 
local, remote, or default [docker-compose](https://docs.docker.com/compose/compose-file/) files. 
The Polywrap CLI [`infra`](../../reference/cli/commands/infra) command reads the manifest and launches or halts
modules as directed by the user.

## Declaration

Unlike some manifests, the Infra Manifest does not need to be declared in your Polywrap manifest.

## Content

The Infra Manifest consists of environmental variable declarations and one or more infrastructure modules. 
Each module points to a local, remote, or default docker-compose file.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
env: # Declare environmental variables here
modules:
  myRemote: # A remote package with a docker-compose file
    package: # Package name
    version: # Package version
    registry: # Package registry name
    dockerComposePath: # (Optional) Path to docker-compose file in the package directory
  myLocal: # A local package with a docker-compose file
    path: # Path to the package
  eth-ens-ipfs: default # A module available by default
```

</TabItem>
<TabItem value="example">

```yaml
format: 0.1.0
env:
  IPFS_PORT: $ENV_IPFS_PORT
  DEV_SERVER_PORT: 4040
  DEV_SERVER_ETH_TESTNET_PORT: 8545
modules:
  ipfs:
    package: "@namestys/ipfs-infra"
    version: "0.0.1"
    registry: npm
  dev-server:
    path: ../local-packages/dev-server
```
</TabItem>
</Tabs>

## Infrastructure Modules

An Infra Manifest can declare any number of infrastructure modules. 
Polywrap currently supports three types of infrastructure modules: 
- A local module exists on your local filesystem.
- A remote module is a package hosted by a package registry.
- The default module is included with the CLI.

### Local

A local infrastructure module is a path from the Infra Manifest to a local folder with a docker-compose file.

```yaml title="Example: local module configuration"
format: 0.1.0
modules:
  myLocal:
    path: ../local-packages/myLocal
```

### Remote

A remote infrastructure module is a package hosted at a package registry. 
The package must contain a docker-compose file. 
The path to the docker-compose file must be declared in the Infra Manifest if the file is not located in the package root.

Remote packages can be shared. 
Users can add remote packages to their manifest to replicate the infrastructure modules defined by other users or projects.

```yaml title="Example: remote module configuration"
format: 0.1.0
modules:
  myIpfsNode:
    package: "@namestys/ipfs-node"
    version: "1.0.2"
    registry: npm
    dockerComposePath: ./config/docker-compose.yaml
```

### Default

A default infrastructure module is included with the [`polywrap`](../../reference/cli/polywrap-cli) CLI. 
It is declared in the Infra Manifest as a module named *eth-ens-ipfs* and the value *default*.

If an Infra Manifest is not found, the Polywrap CLI [`infra`](../../reference/cli/commands/infra) command can still use
this module. 
To use the default module without an Infra Manifest, pass `eth-ens-ipfs` as an argument to the [`infra`](../../reference/cli/commands/infra) command's `modules` option:

```bash
npx polywrap infra up --modules=eth-ens-ipfs
```

The default infrastructure module defines a docker container with:
- A test server at http://localhost:**4040**
- A Ganache Ethereum test network at http://localhost:**8545**
- An IPFS node at http://localhost:**5001**

It also sets up ENS smart contracts at initialization, so you can build wrappers and deploy them to an ENS registry 
on your locally hosted testnet. The Ethereum address of the ENS registry is 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab.

```yaml title="Example: local module configuration"
format: 0.1.0
modules:
  eth-ens-ipfs: default
```