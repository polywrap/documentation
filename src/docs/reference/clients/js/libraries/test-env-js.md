---
id: test-env-js
title: '@polywrap/test-env-js'
---

The `@polywrap/test-env-js` package is a library of functions that facilitate end-to-end testing in JavaScript.
The package is based on the default infrastructure module described in 
[Configure Polywrap infrastructure pipeline](./../../../../quick-start/test-wasm-wrappers/infra-pipeline).

## Constants

### providers

```typescript
export const providers = {
  ipfs: "http://localhost:5001",
  ethereum: "http://localhost:8545",
};
```

The `providers` object contains the URIs for the default infrastructure module's local Ethereum network provider and IPFS provider.

### ensAddresses

```typescript
export const ensAddresses = {
  ensAddress: "0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab", // ENS Registry
  resolverAddress: "0x5b1869D9A4C187F2EAa108f3062412ecf0526b24", // ENS Resolver
  registrarAddress: "0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb", // ENS Registrar
  reverseAddress: "0xe982E462b094850F12AF94d21D470e21bE9D0E9C", // ENS Reverse Lookup
} as const;
```

The `ensAddresses` object contains the Ethereum addresses of the default infrastructure module's locally-deployed ENS smart contracts.

## Methods

### initTestEnvironment

```typescript
export const initTestEnvironment = async (cli?: string): Promise<void>
```

The `initTestEnvironment` function starts a local test environment using the default infrastructure module. 
It optionally accepts a path to a [`polywrap`](./../../../cli/polywrap-cli) CLI binary.

### stopTestEnvironment

```typescript
export const stopTestEnvironment = async (cli?: string): Promise<void>
```

The `stopTestEnvironment` function tears down the local test environment (default infrastructure module) if one is running.
It optionally accepts a path to a [`polywrap`](./../../../cli/polywrap-cli) CLI binary.

### buildWrapper

```typescript
export async function buildWrapper(wrapperAbsPath: string): Promise<void>
```

The `buildWrapper` function builds the wrapper located at the given path `wrapperAbsPath`.

### buildAndDeployWrapper

```typescript
export async function buildAndDeployWrapper({
  wrapperAbsPath,
  ipfsProvider,
  ethereumProvider,
  ensName,
}: {
  wrapperAbsPath: string; // Absolute path of folder containing wrapper's Polywrap Manifest (polywrap.yaml)
  ipfsProvider: string; // IPFS provider
  ethereumProvider: string; // Ethereum provider
  ensName?: string; // (Optional) ENS domain name
}): Promise<{
  ensDomain: string; // ENS domain for invoking wrapper
  ipfsCid: string; // IPFS content hash for invoking wrapper
}>
```

Like `buildWrapper`, the `buildAndDeployWrapper` function builds the wrapper located at the given path `wrapperAbsPath`.
After building the wrapper, `buildAndDeployWrapper` deploys it to IPFS using the given provider `ipfsProvider`. 
It next registers the ENS domain `ensName` and points the domain to the IPFS deployment using the Ethereum provider `ethereumProvider`. 
If an ENS domain is not provided, a randomly selected human-readable ENS domain name is used. 
The `buildAndDeployWrapper` function returns a Promise containing the ENS domain and IPFS content hash of the wrapper deployment,
either of which can be used to invoke the wrapper.

```typescript title="Example: buildAndDeployWrapper with default infrastructure module"
import { buildAndDeployWrapper, providers } from "@polywrap/test-env-js";

const api = await buildAndDeployWrapper({
  wrapperAbsPath: "...",
  ipfsProvider: providers.ipfs,
  ethereumProvider: providers.ethereum,
});
const ensUri = `ens/testnet/${api.ensDomain}`;
```

### runCLI

```typescript
export const runCLI = async (options: {
  args: string[]; // Command and arguments
  cwd?: string; // (Optional) Current working directory
  cli?: string; // (Optional) Path to CLI binary
  env?: Record<string, string>; // (Optional) Environmental variables to set
}): Promise<{
  exitCode: number; // CLI exit code
  stdout: string; // CLI standard output
  stderr: string; // CLI standard error
}>
```

The `runCLI` function can be used to run the [`polywrap`](./../../../cli/polywrap-cli) CLI programmatically. 
It requires an array of command line arguments `args`, which should include the CLI command to be run.
An alternative current working directory `cwd` can be provided to change the context from which the CLI is invoked.
It also optionally accepts a path to a [`polywrap`](./../../../cli/polywrap-cli) CLI binary.
The optional map of environmental variables `env` will be set before running the CLI.

```typescript title="Example: runCLI calling the 'infra' command"
const { exitCode, stderr, stdout } = await runCLI({
  args: ["infra", "up", "--modules=eth-ens-ipfs", "--verbose"]
});
```

