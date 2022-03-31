---
id: polywrap-cli
title: '@web3api/cli'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<a href="https://www.npmjs.com/package/@web3api/cli" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/npm/v/@web3api/cli.svg" alt="npm"/>
</a>

<br/>
<br/>
Command line interface for Polywrap.

## **Table of Contents**
<details>
  <summary>Click to expand</summary>

  * [Installation](#installation)
  * [test-env (t)](#test-env-t)
    * [test-env up](#test-env-up)
    * [test-env down](#test-env-down)
  * [query (q)](#query-q)
  * [plugin (p)](#plugin-p)
  * [create (c)](#create-c)
    * [create api](#w3-create-api)
    * [create app](#w3-create-app)
  * [codegen (g)](#codegen-g)
  * [build (b)](#build-b)
  * [app (a)](#app-a)
  

</details>

## Installation

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm install @web3api/cli
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @web3api/cli
```

</TabItem>
</Tabs>

## Usage

Install it and then in your project directory, see the list of available CLI commands by using the command:

```bash
w3 help
```

The following menu will appear in your terminal window:

```sh
w3 version 0.0.1-prealpha.69

  w3             🔥 Web3API CLI 🔥                                      
  help (h)       -                                                    
  test-env (t)   Manage a test environment for Web3API                
  query (q)      Query Web3APIs using recipe scripts                  
  plugin (p)     Build/generate types for the plugin                  
  create (c)     Create a new project with w3 CLI                     
  codegen (g)    Auto-generate API Types                              
  build (b)      Builds a Web3API and (optionally) uploads it to IPFS 
  app (a)        Build/generate types for your app
```



Let's take a look at each of these options individually.

### `test-env (t)`

This command allows you to manage a test environment for Web3API.

```sh
w3 test-env command

Commands:
  up    Startup the test env
  down  Shutdown the test env
```

When the Web3API CLI starts or shuts down a test environment, it uses [Docker Compose](https://docs.docker.com/compose/). 

Compose is a tool for defining and running multi-container Docker applications. In this case, it will create an environment for Ethereum using [Ganache](https://www.trufflesuite.com/ganache) and IPFS using `localhost:5001`.

![Docker Compose](../../static/img/polywrap-cli-docker-compose.png)

###  `test-env (t)` sub-commands 
#### `test-env up`

Startup the test environment 

Output: 
```
w3 test-env up
✔ Starting test environment...
```

#### `test-env down`

Shut down the test environment 

Output: 
```
w3 test-env down
✔ Shutting down test environment...
```

### `query (q)`

This command queries Web3APIs using recipe scripts, typically for testing purposes.

```sh
w3 query [options] <recipe-script>

Options:
  -t, --test-ens  Use the development server's ENS instance
  -c, --client-config <config-path> Add custom configuration to the Web3ApiClient
```

### Example: 
You can be specific in your recipe path, for example, with:
```sh
w3 query ./recipes/e2e.json
```

A simple `e2e.json` recipe file looks like the following:

```json title="./recipes/e2e.json"
[
  {
    "api": "ens/testnet/simplestorage.eth",
    "constants": "./constants.json"
  },
  {
    "query": "./get.graphql",
    "variables": {
      "address": "$SimpleStorageAddr",
      "network": "testnet"
    }
  },
  {
    "query": "./set.graphql",
    "variables": {
      "address": "$SimpleStorageAddr",
      "value": 5,
      "network": "testnet"
    }
  }
]
```

In the above example, the `constants.json` file could include the following:

```json
{
  "SimpleStorageAddr": "0x0E696947A06550DEf604e82C26fd9E493e576337"
}
```

### `create (c)`

This command creates a new project using the Web3API CLI.

```sh
w3 create command <project-name> [options]

Commands:
  api <lang>     Create a Web3API project
    langs: assemblyscript, interface
  app <lang>     Create a Web3API application
    langs: typescript-node, typescript-react
  plugin <lang>  Create a Web3API plugin
    langs: typescript

Options:
  -h, --help               Show usage information
  -o, --output-dir <path>  Output directory for the new project
```

### `create (c)` sub-commands 

### w3 create api 
#### `w3 create api <lang> <project-name>`

### Example: 
 `w3 create api assemblyscript <project-name>`

Create a Web3API project in assemblyscript:

Running the command should create a project, and your terminal should 
look like this: 

```sh
Setting everything up...
yarn add v1.22.10
warning package.json: No license field
info No lockfile found.
warning template: No license field
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
Warning template: No license field
success. Saved 1 new dependency.
info Direct dependencies
└─ @web3api/templates@0.0.1-prealpha.68
info All dependencies
└─ @web3api/templates@0.0.1-prealpha.68
✨  Done in 0.78s.

🔥 You are ready to turn your protocol into a Web3API 🔥
```
and the project created should have a folder structure like this:

```
node_modules
package.json
README.md
recipes/
|
scripts/
|          
src/
|   ├── query/                
|   |── mutation/             
|   └── contracts/           
web3api.build.yaml               
web3api.yaml                
```

* `w3 create api interface <project-name>` 
Create a Web3API project in interface

### w3 create app
#### `w3 create app <lang> <project-name>`



### w3 create plugin
#### `w3 create plugin <lang> <project-name>`



### `codegen (g)`
This command  auto-generate API Types 

```sh
w3 codegen [options]

Options:
  -h, --help                              Show usage information
  -m, --manifest-file <path>              Path to the Web3API manifest file (default: web3api.yaml | web3api.yml)
  -c, --codegen-dir <path>                Output directory for the generated code (default: ./w3)
  -s, --script <path>                     Path to a custom generation script (JavaScript | TypeScript)
  -i, --ipfs [<node>]                     IPFS node to load external schemas (default: ipfs.io & localhost)
  -e, --ens [<address>]                   ENS address to lookup external schemas (default: 0x0000...2e1e)
```

### `build (b)`

This command builds a Web3API and (optionally) uploads it to IPFS.

```sh
w3 build [options]

Options:
  -h, --help                         Show usage information
  -m, --manifest-file <path>         Path to the Web3API Build manifest file (default: web3api.yaml | web3api.yml)
  -i, --ipfs [<node>]                Upload build results to an IPFS node (default: dev-server's node)
  -o, --output-dir <path>            Output directory for build results (default: build/)
  -e, --test-ens <[address,]domain>  Publish the package to a test ENS domain locally (requires --ipfs)
  -w, --watch                        Automatically rebuild when changes are made (default: false)
  -v, --verbose                      Verbose output (default: false)
```

If you want to deploy to IPFS, use `-ipfs <ipfs uri>.`


### `app (a)`
 This command  build/generate types for your app   

```sh
w3 app command [options]

Commands:
  codegen   Generate code for the app

Options:
  -h, --help                              Show usage information
  -m, --manifest-file <path>              Path to the Web3API App manifest file (default: web3api.app.yaml | web3api.app.yml)
  -c, --codegen-dir <path>                 Output directory for the generated code (default: ./src/w3)
  -i, --ipfs [<node>]                     IPFS node to load external schemas (default: ipfs.io & localhost)
  -e, --ens [<address>]                   ENS address to lookup external schemas (default: 0x0000...2e1e)
```
