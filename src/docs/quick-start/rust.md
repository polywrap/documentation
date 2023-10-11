---
id: rust
title: 'Rust'
---

## The Polywrap Client

To use [Wraps](/concepts/wraps) in your app, all you need is the [Polywrap Client](/clients)!

### Rust application boilerplate

We'll be using a simple console application boilerplate for this guide.

Using `cargo init` within a directory, initialize a Rust project.

### Adding Polywrap to your application

Within `cargo.toml`, add dependencies for `polywrap` and `serde`:

```toml title="cargo.toml"
[dependencies]
polywrap = "0.1.9-beta.2"
serde = { version = "1.0.188", features = ["derive"] }
```

### Invoking your first Wrap

In order to invoke a Wrap, we first need to instantiate the Polywrap Client:

At the top of your `main.rs` file, import `polywrap`:

```rust title="main.rs"
$snippet: quickstart-rust-use-client
```

Now, before invoking wraps, we need to define `struct`s that describe the arguments we're passing to the invocation, and, if applicable, the invocation return types.

In our first example, we will be invoking the `sha3_256` function of the SHA3 Wrap, so we will define the following struct:

```rust title="main.rs"
$snippet: quickstart-rust-invoke-structs
```

Within our `main` function, we now want to initialize the Polywrap Client:
```rust title="main.rs"
$snippet: quickstart-rust-init-client
```

At this point, you can invoke Wraps! In the example below, we will invoke the SHA3 wrap within our `main` function:

```rust title="main.rs"
$snippet: quickstart-rust-invoke-client
```

Running the application using `cargo run`, you should now see the following appear in your console:

```
ba5a5d5fb7674f5975f0ecd0cd9a2f4bcadc9c04f5ac2ab3a887d8f10355fc38
```

This is the return value of our invocation.

#### What's going on here?

Using the Polywrap Client, we are invoking the `sha3_256` method of a Wrap found under the [WRAP URI](/concepts/uris) `wrapscan.io/polywrap/sha3@1.0` called the SHA3 Wrap.

Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage.

The `PolywrapClient` comes pre-configured with everything you need for most Web2 and Web3 use-cases by default.

#### The invocation result

The `invoke` function returns a `Result` enum, from which you can:

- Extract the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc.
- A failed Wrap invocation returns an `Err()` describing the reason for invocation failure.

### Universal SDKs

Now that we know how a Wrap is invoked, let's see Polywrap's true power: **universal SDKs**!

One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!

Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase.

Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap.

We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors.

Again, before invoking, we want to define the `struct`s we'll be using:
```rust title="main.rs"
$snippet: quickstart-rust-uniswap-structs
```

After that, we can start using the Uniswap V3 Wrap within our `main` function:
```rust title="main.rs"
$snippet: quickstart-rust-uniswap
```

You can see more examples on how to use the Uniswap V3 Wrap in its [docs page](https://uniswap.docs.wrappers.io/).

### Compose everything

So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK.

Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality.

Visit [Wrapscan](https://www.wrapscan.io/) and the [awesome-polywrap](https://github.com/polywrap/awesome-polywrap) repository to find a curated list of Wraps we and our community have developed.