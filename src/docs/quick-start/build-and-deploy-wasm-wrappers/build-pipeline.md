---
id: build-pipeline
title: 'Configure Polywrap build pipeline'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section, we'll explore the Polywrap's build pipeline and how to configure it. 
This article will help you understand the follow concepts:

- Polywrap's build pipeline
- Customizing the Build Manifest file
- Customizing the Dockerfile

## Build pipeline

The build process begins by running the [`build`](../../reference/cli/commands/build) command from the [`polywrap`](../polywrap-cli) CLI. 
The command will first search for the [Polywrap Manifest](../create-wasm-wrappers/polywrap-manifest), find the wrapper schema and implementation, and move these files into a Docker image. 

Within the docker image, the wrapper schema is parsed and its contents are extracted into an ABI.
The ABI is used to generate binding code for the wrapper.
The wrapper is then compiled into a Wasm module.
The ABI and the Polywrap Manifest are merged into a Wrap Manifest file called `wrap.info`.

While the default build settings work well for many projects, the toolchain offers a highly configurable build pipeline for those who need more customization.

## Build Manifest

The Build Manifest `polywrap.build.yaml` file is the entry point to build pipeline configuration.

### Declaration

The location of the Build Manifest must be declared in your [Polywrap Manifest](../create-wasm-wrappers/polywrap-manifest) with a field labeled *build*.
If a custom build manifest is not declared, the default build configuration will be used.

```yml
build: ./polywrap.build.yaml
```

### Content

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
{label: 'Default Configuration', value: 'default'},
]}>
<TabItem value="schema">

```yml
format:	# Polywrap YAML Format version
docker: # (Optional) Custom Docker configuration
  name: # (Optional) Docker image name
  dockerfile: # (Optional) Docker image file name
  buildx: # (Optional) Configuration options for Docker Buildx, set to true for default value.
    cache: # (Optional) Path to cache directory, set to true for default value, set to false to disable caching
    remove builder: # (Optional) Remove the builder instance
  removeImage: # (Optional) Remove the image
config: # (Optional) Custom build image configurations
  node_version: # (Optional) Node version
  include: # (Optional) Files to include in build
linked_packages: # (Optional) Array of locally linked packages into docker build image
  - name: # Package name
    path: # Path to linked package directory
    filter: # (Optional) Ignore files matching this regex in linked package directory
```

</TabItem>
<TabItem value="example">

```yml
format: 0.1.0
docker:
  name: build-env
config:
  node_version: '14.16.0'
  include:
    - ./package.json
```

</TabItem>
<TabItem value="default">

```yml
format: 0.1.0
docker:
  name: polywrap-build-env
  dockerfile: ./Dockerfile.mustache # uses default Dockerfile
config:
  node_version: 16.13.0
  include: # module folder and project manifests are always included
    - ./package.json
```

</TabItem>
</Tabs>

## Customizing the Dockerfile

Those who need to fully customize the Docker image build steps can customize the Dockerfile. 
The Dockerfile is a text file containing instructions for Docker to build images. 
You can learn more about it at Docker's [Dockerfile documentation](https://docs.docker.com/engine/reference/builder/).

To begin, either copy the default Dockerfile from the `.polywrap/wasm/build/image` folder or create your own.

Then, in the `polywrap.build.yaml` file, add a key called `dockerfile` with the path of the newly created Dockerfile as the value. 
That's it! Now, you can customize the Dockerfile to your heart's content.

```yml
format: 0.1.0
docker:
  name: build-env
  dockerfile: ./Dockerfile
```

### Mustache support

[Mustache](https://mustache.github.io/) is a logic-less template system that can be used for HTML, config files, and more.
You can learn more about writing Mustache templates [here](https://mustache.github.io/mustache.5.html).

To enable Mustache capabilities for your Dockerfile, name your custom Dockerfile with a `.mustache` file extension:

```yaml
dockerfile: ./Dockerfile.mustache
```

With Mustache, your Dockerfile will be able to recognize variable tags set within the `config` field of the Build Manifest. 
For example, in your Build Manifest file, you could have a key such as `foo` with the value `hey` like so:

```yml
format: 0.1.0
docker:
  name: build-env
  dockerfile: ./Dockerfile.mustache
config:
  foo: hey
```

To use this variable in your Mustache-enabled Dockerfile, simply reference the variable with curly braces like so:

```dockerfile
{{ foo }}
```