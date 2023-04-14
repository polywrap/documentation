---
id: 'add-metadata'
title: 'Add Metadata'
---

Developers can add content, such as a `README.md`, to their wrap packages. The location of this content must be defined in the `polywrap.yaml` manifest file under the `resources` key. 

```yaml title="polywrap.yaml"
resources: "./resources"
```

By convention, the `resources` directory should be located at the root of the project.

``` title="Project Folder"
polywrap.yaml                  # Project Manifest
resources/                     # Resources directory
src/                           # Source code
```
