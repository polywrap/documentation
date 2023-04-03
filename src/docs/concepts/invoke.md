---
id: invoke
title: Invoke
---

The term "invoke" (or "invocation") refers to the act of executing a method exposed by a [Wrap](./wraps). This can be done by using a client library that supports the [WRAP Standard](https://github.com/polywrap/specification/blob/main/standards/00_WRAP.md).

Essentially, "Invoke" refers to any call to a method exposed by a Wrap, be it a [WASM Wrap](./wasm-wraps), a [Plugin Wrap](./plugin-wraps) or an [Interface Wrap](./interface-wraps), by a [WRAP-compliant](./wrap-standard) client such as the [Polywrap Client](/reference/clients/js/client-js).

Any WRAP-compatible client can perform an Invocation with the following information:

- the [WRAP URI](./uris) of the Wrap being invoked
- the name of the method being invoked
- the method arguments

For more information, refer to the [Invocation standard](https://github.com/polywrap/specification/blob/main/standards/02_Invocation.md).
