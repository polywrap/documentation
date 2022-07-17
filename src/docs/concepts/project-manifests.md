---
id: project-manifests
title: 'Project Manifests'
---

Polywrap projects use manifest files to configure various parts of the project. 
Every Wasm wrapper project has a [Polywrap Manifest](../quick-start/create-wasm-wrappers/polylwrap-manifest), 
and every plugin wrapper project has a [Plugin Manifest](../quick-start/create-plugin-wrappers/plugin-manifest).

## **The YAML format**

Polywrap project manifests are formatted in YAML.
The YAML format was chosen because of its easy of human readability.
If you're not familiar with the YAML syntax, you can learn the basics at [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).

## **Manifest Types**

 - [Polywrap Manifest](../quick-start/create-wasm-wrappers/polylwrap-manifest) - Orchestrates a Wasm wrapper project
 - [Plugin Manifest](../quick-start/create-plugin-wrappers/plugin-manifest) - Orchestrates a Plugin wrapper project
 - [Infra Manifest](../quick-start/test-wasm-wrappers/infra-pipeline) - Manage local test environment infrastructure
 - [Build Manifest](../quick-start/build-and-deploy-wasm-wrappers/build-pipeline) - Customize the build process
 - [Meta Manifest](../quick-start/create-wasm-wrappers/add-metadata) - Add metadata to your Wasm wrapper
 - [Deploy Manifest](../quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline) - Automate a deployment pipeline