---
id: 'adding-metadata'
title: 'Adding Metadata'
---

Wrapper developers can add metadata to their wrappers by writing a Meta Manifest file named `web3api.meta.yaml`.
Metadata makes it easier for application developers to display a wrapper, make it searchable, and integrate complex
query recipes.

## Declaration

Its location must be referenced in the `web3api.yaml` manifest with a field labeled *meta*.

```yaml title="Declaration of Meta Manifest location in web3api.yaml"
meta: ./web3api.meta.yaml
```

## Content

The content of a Meta Manifest can be represented in pseudocode as an object or class with the fields that can 
(or must) be populated in the manifest file. Here we represent the manifest as a TypeScript object, with explanatory 
comments next to each property.

```typescript title="Meta Manifest represented as TypeScript object"
interface MetaManifest {
  format: "0.0.1-prealpha.3"; // determines which fields are expected or required.
  displayName?: string; // name of wrapper that users should use for presentation
  subtext?: string; // subtext of display name; brief description of wrapper
  description?: string; // full description of wrapper
  repository?: string; // repository URL
  tags?: string[]; // terms that can help find your wrapper in search
  icon?: string; // path to wrapper icon or logo
  links?: { // links relevant to your wrapper
    name: string; // name of link
    icon?: string; // icon associated with link
    url: string; // link URL
  }[];
  queries?: { // query recipes that can be integrated into applications
    name: string; // recipe name
    description?: string; // recipe description
    query: string; // path to recipe graphql schema
    vars?: string; // path to recipe variables json
  }[];
}
```

Most fields of the Meta Manifest are optional. 
The required fields (indicated in the TypeScript example above with *?* symbols) are as follows:
* format
* If a link is specified, the name of the link and its URL are required
* If a query is specified, the name of the query and the query path are required

## Example

```yaml title="Fully configured Meta Manifest"
$snippet: yaml-simple-storage-meta-manifest
```