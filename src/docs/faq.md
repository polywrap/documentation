---
id: faq
title: FAQ
---

## What is Polywrap?

Polywrap is a framework for porable and composable SDKs. Polywrap calls these SDKs “wraps”. Wraps are essentially WebAssembly-based modules.

## What are wraps?

Wraps are simply WebAssembly binaries built with Polywrap and packaged with specific metadata that allows clients to run them.

## How are wraps run?

Wraps are run by clients. Clients will fetch a wrap and execute it locally in the context of the application. Clients exist in a variety of languages: JavaScript, Rust, Python, etc.

## How does this execution happen?

In a nutshell, wrap execution follows these steps:

- The application requests the execution of a wrap
- Internally, the client:
  - Fetches the requested wrap
  - Executes the wrap's function inside a WebAssembly runtime
- The client returns the result of the wrap's function call back to the application

Or, if you prefer diagrams:

![Client fetches wrap](/img/docs/faq/1-load.png)
![Client executes wrap and returns execution result](/img/docs/faq/2-exec.png)
## Where do wraps come from?

Wraps can be bundled with the application, or loaded from external sources: file storage, the Internet, you name it. Clients allows developers to configure this.

## Who/what can use wraps?

Wraps are used within apps and other wraps. They are defined via their metadata, which allows apps to integrate wraps, and wraps to import other wraps.

## Why wraps?

- Wraps can run and live anywhere:
  - Clients exist in [many languages](/clients).
  - Wraps can be bundled with apps or downloaded when needed.
- Wraps can call other wraps:
  - Wrap metadata is imported at built-time.
  - Wrap code is executed at run-time.
- Wraps help secure your app:
  - They execute in a secure WebAssembly environment.
  - They don't have direct access to their host environment.

## How do I access host capabilities?

Wraps can import host functions defined by the application developer. These native functions allow wraps to access host capabilities. Polywrap packages these capabilities as “plugins”.

## Can I write my own plugins?

Yes, you can write any host capabilities you need as plugins in your application’s language. Polywrap also provides a set of basic plugins out-of-the-box:

- Filesystem
- HTTP/S
- Ethereum wallet connection
- Logging

## How should I get started?

To execute your first wrap, follow one of our Quick Start guides:
- [Javascript/Typescript](/quick-start/javascript)
- [Rust](/quick-start/rust)
- [Python](/quick-start/python)
- [Kotlin](/quick-start/kotlin)
- [Swift](/quick-start/swift)
