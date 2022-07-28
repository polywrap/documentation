---
id: wasm-languages
title: Supported Wasm Languages
---

Polywrap aims to support many languages for Wasm wrapper development.

A Wasm wrapper can seamlessly interact with any other Wasm wrapper, regardless of their source languages.
This fact leads to many exciting possibilities.
For example, Wasm wrappers can be treated as individual modules in a multi-wrapper project.
In such a project, each wrapper module could be written in a different language and the other wrappers wouldn't know the difference.

## Demos
| | Language | Hello World | Simple Storage | JSON RPC | Subgraph Query |
|-|-|-|-|-|-|
| ![as logo] | **AssemblyScript** | [GitHub][as hello-world] | [GitHub][as json-rpc] | [GitHub][as simple-storage] | [GitHub][as subgraph-query] |
| ![rust logo] | **Rust** | [GitHub][rust hello-world] | [GitHub][rust json-rpc] | [GitHub][rust simple-storage] | [GitHub][rust subgraph-query] |

[as logo]: /img/lang-logos/as.svg
[as link]: #assemblyscript
[as hello-world]: https://github.com/polywrap/demos/tree/main/hello-world/wrapper/assemblyscript
[as json-rpc]: https://github.com/polywrap/demos/tree/main/json-rpc/wrapper/assemblyscript
[as simple-storage]: https://github.com/polywrap/demos/tree/main/simple-storage/wrapper/assemblyscript
[as subgraph-query]: https://github.com/polywrap/demos/tree/main/subgraph-query/wrapper/assemblyscript
[as docs]: https://www.assemblyscript.org/introduction.html

[rust logo]: /img/lang-logos/rust.svg
[rust link]: #rust
[rust hello-world]: https://github.com/polywrap/demos/tree/main/hello-world/wrapper/rust
[rust json-rpc]: https://github.com/polywrap/demos/tree/main/json-rpc/wrapper/rust
[rust simple-storage]: https://github.com/polywrap/demos/tree/main/simple-storage/wrapper/rust
[rust subgraph-query]: https://github.com/polywrap/demos/tree/main/subgraph-query/wrapper/rust
[rust docs]: https://www.rust-lang.org/learn

[Defiwrapper]: https://github.com/defiwrapper/defiwrapper
[Uniswap v3]: https://github.com/polywrap/integrations/tree/main/protocol/ethereum/uniswapv3/wrapper
[ENS Wrapper]: https://github.com/polywrap/integrations/tree/main/protocol/ethereum/ens/wrapper

## Choosing a language

The choice of language(s) for your project may depend on a variety of factors. 
Here we provide a brief description of each supported language to aid you in your decision.

:::tip
Each supported wasm development language may have its own quirks when compiling to WebAssembly.
Please reference the documentation available for your language of choice.
:::

### AssemblyScript

[AssemblyScript](https://www.assemblyscript.org/) is an easy-to-learn language with syntax similar to TypeScript.
It is a relatively new language designed for WebAssembly. 
AssemblyScript is a garbage-collected language, simplifying the developer experience.
Due to its newness, it has a comparatively small ecosystem and lacks some features found in more mature languages.

#### Featured Wrappers

 - [Defiwrapper][Defiwrapper] - A cross-chain portfolio aggregator
 - [Uniswap v3][Uniswap v3] - A port of the Uniswap v3 SDK
 - [ENS Wrapper][ENS Wrapper] - Interact with ENS

### Rust

[Rust](https://www.rust-lang.org/) is a systems programming language with modern features. 
In 2021, it was rated the #1 most loved language in StackOverflow's annual Developer Survey for the sixth year in a row.
Rust implements a new kind of memory management that eliminates most errors related to memory and concurrency without
manual memory allocation or garbage collection.