---
id: 'get-wrapper-metadata'
title: 'Get Wrapper Metadata'
---

Some application developers may be interested in wrapper meta data.
Wrapper developers can add metadata to their wrappers by writing a Meta Manifest file.
Application developers can obtain the Meta Manifest as an object or class in the client's native language.

```typescript
// returns a 'MetaManifest | undefined'
const manifest = await client.getManifest(uri, { type: "meta" });
```

More information about the contents of the Meta Manifest can be found in [Adding Metadata](../create-wasm-wrappers/adding-metadata).

To obtain icons from paths listed in a wrapper's Meta Manifest, use `getFile`.
The return type of `getFile` will be a string if the `encoding` option is used, and an ArrayBuffer otherwise.

```typescript
// returns an ArrayBuffer
const isBuffer = await client.getFile(uri, { path: manifest.icon });
// returns a string
const isString = await client.getFile(uri, { path: manifest.icon, encoding: "utf-8" });
```

We wrote a React app to demo fetching and displaying wrapper metadata.
[You can view the source code here](https://github.com/polywrap/demos/tree/main/fetch-metadata).

The following function was pulled directly from the demo. The function fetches wrapper metadata from a URI that is
declared and assigned in a higher scope. The wrapper Meta Manifest is used as input to the setManifest function to
update the application's state. A similar approach is used for images that are fetched from the URI based on paths
referenced in the Meta Manifest.
```typescript title="Example: fetching a Meta Manifest in TypeScript"
  const fetchHandler = async (event: FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault();
    if (!uri) {
      return;
    }
    if (!Uri.isValidUri(uri)) {
      setManifest({
        format: "0.0.1-prealpha.3",
        displayName: "Invalid URI",
        subtext: "Need help? Check out our docs using the link in the header.",
        __type: "MetaManifest",
      })
      return;
    }

    let manifest: MetaManifest | undefined;
    try {
      manifest = await client.getManifest(uri, {type: "meta"});
      setManifest(manifest);
    } catch (e: any) {
      if (e.message.includes("WasmWeb3Api: File was not found.")) {
        setManifest({
          format: "0.0.1-prealpha.3",
          displayName: "File not found",
          subtext: "Metadata is optional. Does the wrapper declare a Meta Manifest?",
          __type: "MetaManifest",
        })
      } else {
        setManifest({
          format: "0.0.1-prealpha.3",
          displayName: "Failed to resolve URI",
          subtext: "We didn't find a wrapper at that URI, or didn't receive a response from the host.",
          __type: "MetaManifest",
        })
      }
      setIcons({});
      return;
    }

    const icons: Record<string, string> = {};
    if (manifest.icon) {
      try {
        const imageBuffer: ArrayBuffer = await client.getFile(uri, {path: manifest.icon}) as ArrayBuffer;
        icons[manifest.icon] = Buffer.from(imageBuffer).toString("base64");
      } catch (e: any) {
        console.log(e.message);
      }
    }

    if (manifest.links) {
      for (const link of manifest.links) {
        if (link.icon) {
          try {
            const imageBuffer: ArrayBuffer = await client.getFile(uri, {path: link.icon}) as ArrayBuffer;
            icons[link.icon] = Buffer.from(imageBuffer).toString("base64");
          } catch (e: any) {
            console.log(e.message);
          }
        }
      }
    }
    setIcons(icons);
  };
```