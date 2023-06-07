---
id: wraps
title: Wraps
---

Wraps are at the core of Polywrap - they are the portable, executable modules that can be called by any Polywrap Client.

They are [WASM](./wasm.md) modules accompanied by a manifest file which describes said module.

A Wrap consists of at least the following files:

- A Wasm module containing the protocol's business logic functions (e.g. Uniswap's swap functions) - `wrap.wasm`
- A Wrap Manifest file that orchestrates the wrapper, and provides types and parameters for the module functions (it's ABI) - `wrap.info`

Additional files can be present in a Wrap (e.g. metadata files), but these are not required for a Wrap to be valid.
