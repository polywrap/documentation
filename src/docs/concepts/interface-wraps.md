---
id: interface-wraps
title: Interface Wraps
---

An Interface Wrap (or Wrap Interface), unlike a WASM Wrap, consists only of an [ABI](./abi). Wrap Interfaces are still Wraps in the sense that they have are identified by a [URI](./uris).

Consisting only of an ABI, an Interface Wrap cannot be [invoked](./invoke). Instead, it is used as an interface that can be implemented by multiple different Wraps. These Wraps can then be registered within the [Client](./client) as Interface Implementations. During Invocation, you can invoke the method of an Interface, and if there is an Interface Implementation for the URI, the Wrap implementing the interface will be resolved during URI resolution and the implementing Wrap's method will be invoked.

This is mostly used to ensure that, accross different Clients, their Plugin Wraps adhere to the same Interface Wraps.

For example, all `http` Plugins need to have `get` and `post` methods with specific signatures and clearly defined `Request` and `Response` type structures.