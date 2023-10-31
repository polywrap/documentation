---
id: 'add-metadata'
title: 'Add Metadata'
---

Developers can add content, such as a `README.md`, to their wrap packages. The location of this content must be defined in the [project manifest](polywrap-manifest) under the `resources` key. 

```yaml
resources: "./resources"
```

By convention, the `resources` directory should be located at the root of the project.

```
polywrap.yaml                  # Project Manifest
resources/                     # Resources directory
src/                           # Source code
```
