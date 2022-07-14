---
id: 'adding-metadata'
title: 'Adding Metadata'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Developers can add metadata to their wrappers by writing a Meta Manifest `polywrap.meta.yaml` file.
Metadata makes it easier for application developers to display a wrapper, make it searchable, and find helpful links.

## Declaration

Its location must be referenced in the `polywrap.yaml` manifest with a field labeled *meta*.

```yaml"
meta: ./polywrap.meta.yaml
```

## Content

The Meta Manifest contains titles, descriptions, images, tags, and links that application developers can display
when presenting or discussing your wrapper.

<Tabs
defaultValue="schema"
values={[
{label: 'Schema', value: 'schema'},
{label: 'Example', value: 'example'},
]}>
<TabItem value="schema">

```yaml
format: # The manifest format version
displayName: # (Optional) Name of the wrapper that users should use for presentation
subtext: # (Optional) Subtext of display name; brief description of the wrapper
description: # (Optional) Detailed description
repository: # (Optional) Repository URL
icon: # (Optional) Path to wrapper icon or log
tags: # (Optional) Array of terms that can help find your wrapper in search
links: # (Optional) Array of links relevant to your wrapper
  - name: # Name of link
    icon: # (Optional) Icon associated with link
    url: # (Optional) Link URL
```

</TabItem>
<TabItem value="example">

```yaml title="Fully configured Meta Manifest"
$snippet: yaml-simple-storage-meta-manifest
```
</TabItem>
</Tabs>