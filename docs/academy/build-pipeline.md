---
id: build-pipeline
title: 'Configure Polywrap Build Pipeline'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section, we'll explore the Polywrap's build pipeline and how to configure it. This guide will help you understand the follow concepts:

- Polywrap build pipeline
- The YAML format
- Minimal required schema for the Polywrap YAML file
- Customizing the build YAML file
- Customizing the Dockerfile

## **Polywrap build pipeline**

The build process begins by running `yarn build`. The command will execute a series of functions that will search for the default manifest, graphql schemas, and Polywrap implementations, and then compile these files into a Docker image. While Polywrap's default is usable for many projects, the toolchain offers a highly configurable build pipeline for those who need more customization.

## **The YAML format**

Polywrap package manifests are formatted in YAML. The YAML format was chosen because of its easy of human readability. If you're not familiar with the YAML syntax, you can learn the basics at [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).

## **Minimal required schema**

A package manifest must include a set of required items. This is represented by the minimal required schema shown below as well as an example showing the "default" manifest.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yml
format:				# Polywrap YAML format version
repository:			# URL of Core toolchain repository
language: 			# Language that will be compiled to wasm
modules:			# Modules of Polywrap schema and implementation
  query:			# Modules can be for either query or mutations
    schema:	 		# Path to graphql schema
    module: 		# Path to Polywrap implementation
import_redirects:	# Redirects enabling the import of plugins
  - uri: 			# URI resolving to the plugin schema
    schema:		 	# Graphql schema for imported plugin
```

</TabItem>
<TabItem value="example">

```yml
format: 0.0.1-prealpha.2
repository: https://github.com/web3-api/monorepo
language: wasm/assemblyscript
modules:
  query:
    schema: ./src/query/schema.graphql
    module: ./src/query/index.ts
import_redirects:
  - uri: w3://w3/logger
    schema: ../../core-apis/logger/schema.graphql
```

</TabItem>
</Tabs>

## **Customizing the YAML build file**

The manifest shown above does not require configuring the build process. When you run `yarn build`, the following default build YAML file is used:

```yml
format: 0.0.1-prealpha.2
docker:
  name: build-env
config:
  node_version: 14.16.0
  include:
    - ./src
    - ./package.json
```

To customize the build, first create a new YAML file in the project's root directory and name it `web3api.build.yaml`. Then, in the original YAML file, add a key called `build` with the path of the custom build YAML as the value.

```yml
format: 0.0.1-prealpha.2
repository: https://github.com/web3-api/monorepo
language: wasm/assemblyscript
//highlight-next-line
build: ./web3api.build.yaml
modules:
  query:
    schema: ./src/query/schema.graphql
    module: ./src/query/index.ts
import_redirects:
  - uri: w3://w3/logger
    schema: ../../core-apis/logger/schema.graphql
```

In the `web3api.build.yaml` file, you could then customize your build. In the code below, you can see the schema as well as an example custom build YAML:

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yml
format:				# Polywrap YAML Format version
docker:				# Configure the name of Docker image
  name:				# Name of the Docker image
config:				# Build configuration
  node_version: 	# Node version
  include:			# Files to include in build
```

</TabItem>
<TabItem value="example">

```yml
format: 0.0.1-prealpha.2
docker:
  name: build-env
config:
  node_version: '14.16.0'
  include:
    - ./package.json
    - ./src/utils
```

</TabItem>
</Tabs>

## **Customizing the Dockerfile**

For those who need even more customization of the build pipeline, Polywrap allows for customizing the Dockerfile. The Dockerfile is a text file containing instructions for Docker to build images. You can learn more about it at [Docker's documentation](https://docs.docker.com/engine/reference/builder/).

In the context of Polywrap, it allows you to fully customize your Docker image build steps. To customize your Dockerfile, first, either copy the default Dockerfile from the `/build` folder or create your own.

Then, in the `web3api.build.yaml` file, add a key called `dockerfile` with the path of the newly created Dockerfile as the value. That's it! Now, you can customize the Dockerfile to your heart's content.

```yml
format: 0.0.1-prealpha.2
docker:
  name: build-env
  dockerfile: ./Dockerfile
```

You can also name your custom Dockerfile with a mustache file extension like so `Dockerfile.mustache`, which would enable Mustache capabilities for your Dockerfile. Mustache is a logic-less template sysetm that can be used for HTML, config files, and more. Learn more about Mustache [here](https://www.npmjs.com/package/mustache).

With Mustache, your Dockerfile will be able to recognize variable tags set by the `web3api.build.yaml` file. For example, in your `web3api.build.yaml` file, you could have a key such as `foo` with the value `hey` like so:

```yml
format: 0.0.1-prealpha.2
docker:
  name: build-env
  dockerfile: ./Dockerfile.mustache
config:
  foo: hey
```

To use this variable in your Mustache-enabled Dockerfile, simply use curly braces like so:

```dockerfile
{{ foo }}
```
