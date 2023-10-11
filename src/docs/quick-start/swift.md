---
id: swift
title: 'Swift'
---

## The Polywrap Client

To use [Wraps](/concepts/wraps) in your app, all you need is the [Polywrap Client](/clients)!

### Swift Project setup

We'll use a basic iOS App project as our template/boilerplate.

Within `ContentView.swift`, add a button that will invoke a `run` function within its action and print any errors that may occur when executed:

```swift title="ContentView.swift"
$snippet: quickstart-swift-boilerplate
```

### Install the Polywrap Client

The Polywrap Client package is available via Swift Package Manager and Cocoapods.

For detailed instructions on how to install the Polywrap Swift Client see the [client's readme](https://github.com/polywrap/swift-client).

We will install the Polywrap Client directly through XCode.

Navigate to **File -> Add Package Dependency** and enter `https://github.com/polywrap/swift-client` into the URL field.

### Invoking your first Wrap

In order to invoke a Wrap, we first need to instantiate the Polywrap Client:

Inside `ContentView.swift`, import the `PolywrapClient` package at the top of your file:

```swift title="ContentView.swift"
$snippet: quickstart-swift-import-client
```

After this, inside the `run` function, initialize the Polywrap client:

```swift title="ContentView.swift"
$snippet: quickstart-swift-init-client
```

At this point, you can already invoke Wraps! In the simple example below, we will invoke the SHA3 Wrap within our `run` function:

```swift title="ContentView.swift"
$snippet: quickstart-swift-init-client
```

By clicking on the "Run example" button in the preview pane, you should now see the following appear in your console:

```
ba5a5d5fb7674f5975f0ecd0cd9a2f4bcadc9c04f5ac2ab3a887d8f10355fc38
```

This is the return value of our invocation.

#### What's going on here?

Using the Polywrap Client, we are invoking the `sha3_256` method of a Wrap found under the [WRAP URI](/concepts/uris) `wrapscan.io/polywrap/sha3@1.0` called the SHA3 Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

#### Invocation return value

Invoking a wrap can result in one of two scenarios:

- A successful Wrap invocation returns the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc.
- A failed Wrap invocation throws an error describing the reason for invocation failure.

### Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true power: **universal SDKs**!

One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!

Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase.

Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors.

```swift
$snippet: quickstart-swift-uniswap
```

You can see more examples on how to use the Uniswap V3 Wrap in its [docs page](https://uniswap.docs.wrappers.io/).

### Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

Visit [Wrapscan](https://www.wrapscan.io/) and the [awesome-polywrap](https://github.com/polywrap/awesome-polywrap) repository to find a curated list of Wraps we and our community have developed.