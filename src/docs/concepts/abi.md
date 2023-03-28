---
id: abi
title: ABI
---

In computer software, an application binary interface (ABI) is an interface between two binary program modules. Often, one of these modules is a library or operating system facility, and the other is a program that is being run by a user.

In the context of Polywrap, an ABI refers to the interface a [Wrap](./wraps) provides. It defines [invokable](./invoke) methods and types found within the Wrap.

The Wrap Manifest file (`wrap.info`) contains, among other things, the Wrap's ABI, which comes as a msgpack-encoded schema of the Wrap.