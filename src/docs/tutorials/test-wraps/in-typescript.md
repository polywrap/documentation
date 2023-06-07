---
id: in-typescript
title: Test Wraps In TypeScript
---

## **Introduction**

In this tutorial we'll learn how to develop custom end to end (e2e) tests for your wrap in TypeScript. These tests will be make calls into your wrap using the [JavaScript / TypeScript Polywrap Client](https://github.com/polywrap/javascript-client).

## **Prerequisites**

You'll need the following NPM packages installed before testing your wrap:

- [`@polywrap/client-js`](https://www.npmjs.com/package/@polywrap/client-js)
- [`@polywrap/cli-js`](https://www.npmjs.com/package/@polywrap/cli-js)
- [`jest`](https://www.npmjs.com/package/jest)

## **Project Setup**

The tests we'll be developing will live next to your wrap's source-code. Polywrap has published pre-configured projects for both [`wasm/rust`](https://github.com/polywrap/toolchain/tree/origin-0.10/packages/templates/wasm/rust) and [`wasm/assemblyscript`](https://github.com/polywrap/toolchain/tree/origin-0.10/packages/templates/wasm/assemblyscript) wraps. You can use & reference these when configuring your own project.  

In this tutorial we'll assume a fresh `wasm/assemblyscript` project has been created via the `polywrap create wasm assemblyscript ...` CLI command.

## **Build The Wrap**

Before any tests can be run, we must ensure the wrap has been freshly built. This will ensure we test against the latest version of the wrap's source-code.  

When using `jest`, we leverage the `beforeAll` function to do this. Additionally, the `@polywrap/cli-js` package makes it easy to invoke the `polywrap build` CLI command to build your wrap.

```typescript
$snippet: testing-in-typescript-build-import

describe("e2e Wrap Tests", () => {
  beforeAll(async () => {
    $snippet: testing-in-typescript-build
  });
});
```

This should result in a wrap package being emitted to the `build/` directory.

## **Configure a Polywrap Client**

Before we create a new Polywrap client, we must create a configuration for it to use. This can be done through use of the [`ClientConfigBuilder`](https://github.com/polywrap/javascript-client/tree/origin-dev/packages/client-config-builder). In the case of this example we'll be using the [default configuration](/concepts/plugins.md#default-plugin-wraps) bundle. If your wrap requires any custom integration dependencies like plugins or [environment variables](/concepts/env-variables.md), then now would be the time to configure this.

```typescript
$snippet: testing-in-typescript-config-client-import

describe("e2e Wrap Tests", () => {
  $snippet: testing-in-typescript-config-client
  ...
});
```

## **Load The Wrap**

We'll be loading our wrap directly from the `build/` directory in the file-system. This can be accomplished in 1 of 2 ways:
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

In both cases, you end up with a `uri` which can be used to invoke your wrap through the client.

## **Test Your Wrap**

Now that we have a `client` invoke wraps, and a `uri` to reference our wrap, we're ready to write some tests.

```typescript
$snippet: testing-in-typescript-test-case-generic
```

## **Type Safety**

In the example above, it shows the use of the `client.invoke(...)
In the example above, it shows the use of the `client.invoke(...)` method, which is generic. This means that if your wrap's schema changes, and (for example) the method being called no longer exists or its types change, the test will fail.

In order to help ensure this can be caught sooner, and easier to debug, we suggest generating TypeScript types for your wrap's schema. All you need is an `app/typescript` `polywrap.yaml` manifest like so:
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
debug, we suggest generating TypeScript types for your wrap's schema. All you need is an `app/typescript` `polywrap.yaml` manifest like so:
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

If you'd like to see an in-production wrap w/ tests in TypeScript, checkout the ethereum wrap's tests [here](https://github.com/polywrap/ethereum/blob/main/wrap/tests/e2e.spec.ts).
