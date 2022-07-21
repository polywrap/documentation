---
id: 'get-wrapper-metadata'
title: 'Get Wrapper Metadata'
---

Some application developers may be interested adding or retrieving wrapper metadata.
Wrapper developers can add metadata to their wrappers by writing a Meta Manifest file.
Application developers can obtain the Meta Manifest as an object or class in the client's native language.

More information about the contents of the Meta Manifest can be found in [Add Metadata](../create-wasm-wrappers/add-metadata).

The client's `getFile` method can be used to retrieve a file from a wrapper. It uses the wrapper URI as the root path.

```typescript
$snippet: js-client-getManifest-meta
```

To obtain icons from paths listed in a wrapper's Meta Manifest, use `getFile` again.
The return type of `getFile` will be a string if the `encoding` option is used, and an ArrayBuffer otherwise.

```typescript
$snippet: js-client-getFile-icon
```

We wrote a React app to demo fetching and displaying wrapper metadata.
[You can view the source code here](https://github.com/polywrap/demos/tree/main/fetch-metadata).