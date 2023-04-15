---
id: in-typescript
title: Testing Wrappers In TypeScript
---

## **Introduction**

In this tutorial we'll learn how to develop custom end to end (e2e) tests for your wrapper in TypeScript. These tests will be make calls into your wrapper using the [JavaScript / TypeScript Polywrap Client](../../reference/clients/js/client-js).

## **Prerequisites**

You'll need the following NPM packages installed before testing your wrapper:

- [`@polywrap/client-js`](../../reference/clients/js/client-js)
- [`@polywrap/cli-js`](https://www.npmjs.com/package/@polywrap/cli-js)
- [`jest`](https://www.npmjs.com/package/jest)

## **Project Setup**

The tests we'll be developing will live next to your wrapper's source-code. Polywrap has published pre-configured projects for both [`wasm/rust`](https://github.com/polywrap/toolchain/tree/origin-0.10/packages/templates/wasm/rust) and [`wasm/assemblyscript`](https://github.com/polywrap/toolchain/tree/origin-0.10/packages/templates/wasm/assemblyscript) wrappers. You can use & reference these when configuring your own project.  

In this tutorial we'll assume a fresh `wasm/assemblyscript` project has been created via the `polywrap create wasm assemblyscript ...` CLI command.

## **Build The Wrapper**

Before any tests can be run, we must ensure the wrapper has been freshly built. This will ensure we test against the latest version of the wrapper's source-code.  

When using `jest`, we leverage the `beforeAll` function to do this. Additionally, the `@polywrap/cli-js` package makes it easy to invoke the `polywrap build` CLI command to build your wrapper.

```typescript
$snippet: testing-in-typescript-build-import

describe("e2e Wrapper Tests", () => {
  beforeAll(async () => {
    $snippet: testing-in-typescript-build
  });
});
```

This should result in a wrapper package being emitted to the `build/` directory.

## **Configure a Polywrap Client**

Before we create a new Polywrap client, we must create a configuration for it to use. This can be done through use of the [`ClientConfigBuilder`](../../reference/clients/js/client-config-builder-js.md). In the case of this example we'll be using the [default configuration](../understanding-plugins.md#default-plugin-wrappers) bundle. If your wrapper requires any custom integration dependencies like [plugins](../../concepts/plugin-wraps.md) or [environment variables](../../concepts/envs.md), then now would be the time to configure this.

```typescript
$snippet: testing-in-typescript-config-client-import

describe("e2e Wrapper Tests", () => {
  $snippet: testing-in-typescript-config-client
  ...
});
```

## **Load The Wrapper**

We'll be loading our wrapper directly from the `build/` directory in the file-system. This can be accomplished in 1 of 2 ways:
1. Package Embedding
```typescript
$snippet: testing-in-typescript-package-embed-import
...
$snippet: testing-in-typescript-package-embed
```

2. File-System URIs
```typescript
$snippet: testing-in-typescript-file-system-uri
```

In both cases, you end up with a `uri` which can be used to invoke your wrapper through the client.

## **Test Your Wrapper**

Now that we have a `client` invoke wrappers, and a `uri` to reference our wrapper, we're ready to write some tests.

```typescript
$snippet: testing-in-typescript-test-case-generic
```

## **Type Safety**

In the example above, it shows the use of the `client.invoke(...)
In the example above, it shows the use of the `client.invoke(...)` method, which is generic. This means that if your wrapper's schema changes, and (for example) the method being called no longer exists or its types change, the test will fail.

In order to help ensure this can be caught sooner, and easier to debug, we suggest generating TypeScript types for your wrapper's schema. All you need is an `app/typescript` `polywrap.yaml` manifest like so:
```yaml
$snippet: testing-in-typescript-types-manifest
```

And an import schema like so:
```graphql
$snippet: testing-in-typescript-types-schema
```

We suggest putting these files in a folder next to your tests, for example `src/__tests__/types/`. Once here, you can generate types by simply running the following command:
```
polywrap codegen -m ./src/__tests__/types/polywrap.yaml -g ./src/__tests__/types/wrap
```

With this done, you can now rewrite the test above in a type-safe way.
```typescript
$snippet: testing-in-typescript-test-case-typesafe
```
debug, we suggest generating TypeScript types for your wrapper's schema. All you need is an `app/typescript` `polywrap.yaml` manifest like so:
```yaml
$snippet: testing-in-typescript-types-manifest
```

We suggesting putting this `polywrap.yaml` manifest in a folder next to your tests like `src/__tests__/types/`. Once here, you can generate types by simply running the following command:
```
polywrap codegen -m ./src/__tests__/types/polywrap.yaml -g ./src/__tests__/types/wrap
```

With this done, you can now rewrite the test above in a type-safe way.
```typescript
$snippet: testing-in-typescript-test-case-typesafe-import
...
$snippet: testing-in-typescript-test-case-typesafe
```

## **Conclusion**

And that's a wrap!
```typescript
$snippet: testing-in-typescript-final
```

If you'd like to see an in-production wrapper w/ tests in TypeScript, checkout the ethereum wrapper's tests [here](https://github.com/polywrap/ethereum/blob/main/wrapper/tests/e2e.spec.ts).
