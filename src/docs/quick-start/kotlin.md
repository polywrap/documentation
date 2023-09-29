---
id: kotlin
title: 'Kotlin'
---

## The Polywrap Client

To use [Wraps](/concepts/wraps) in your app, all you need is the [Polywrap Client](/clients)!

### Kotlin application boilerplate

We'll be using a simple console application written in Kotlin for this guide.

You can either set up a new application through an IDE of your choice, or use `gradle` to initialize a project.

If using `gradle`, all you need to do is run `gradle init` within your project folder.

Make sure to:

- Select `kotlin` as your implementation language
- Use `Kotlin` as your build script DSL
- Use a minimum target Java version of 17

Inside `build.gradle.kts`, you need to update your `plugins` and `dependencies` sections:

```kotlin title="build.gradle.kts"
$snippet: quickstart-kt-gradle-plugins

//...

dependencies {
  $snippet: quickstart-kt-gradle-dependencies
}
```

Now you can use the Polywrap Client inside your Kotlin app!

### Invoking your first Wrap

In order to invoke a Wrap, we first need to instantiate the Polywrap Client:

At the top of your app's main file (usually `App.kt`), import the Polywrap Client:

```kotlin title="App.kt"
$snippet: quickstart-kt-import-client
```

You can now instantiate the Polywrap Client with a default configuration within your `main` function:

```kotlin title="App.kt"
$snippet: quickstart-kt-init-client
```

At this point, you can already invoke Wraps! In the simple example below, we will invoke the SHA3 Wrap within our `main` function:

```kotlin title="App.kt"
$snippet: quickstart-kt-invoke-client
```

Running the application using `./gradlew run` or through your IDE, you should now see the following appear in your console:

```
Success(ba5a5d5fb7674f5975f0ecd0cd9a2f4bcadc9c04f5ac2ab3a887d8f10355fc38)
```

This is the `InvokeResult` object. It's `isSuccess` and `isFailure` properties denote whether the Wrap's invocation was successful, and we will see how to get the return value of the invocation in the next section.

#### What's going on here?

Using the Polywrap Client, we are invoking the `sha3_256` method of a Wrap found under the [WRAP URI](/concepts/uris) `wrapscan.io/polywrap/sha3@1.0` called the SHA3 Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

#### The `InvokeResult` object

The `InvokeResult` is an alias of the stdlib [`Result`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) object.

On successful invocations, you can extract the return value of the invocation, while on errors you can extract the underlying wrap execution exception.

### Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true power: **universal SDKs**!

One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!

Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase.

Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors.

```kotlin title="App.kt"
$snippet: quickstart-kt-uniswap
```

You can see more examples on how to use the Uniswap V3 Wrap in its [docs page](https://uniswap.docs.wrappers.io/).

### Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

Visit [Wrapscan](https://www.wrapscan.io/) and the [awesome-polywrap](https://github.com/polywrap/awesome-polywrap) repository to find a curated list of Wraps we and our community have developed.