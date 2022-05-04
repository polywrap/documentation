---
id: build
title: Build
---

Builds a Web3API and (optionally) uploads it to IPFS.

```sh
w3 build [options]

Options:
  -h, --help                         Show usage information
  -m, --manifest-file <path>         Path to the Web3API Build manifest file (default: web3api.yaml | web3api.yml)
  -i, --ipfs [<node>]                Upload build results to an IPFS node (default: dev-server's node)
  -o, --output-dir <path>            Output directory for build results (default: build/)
  -e, --test-ens <[address,]domain>  Publish the package to a test ENS domain locally (requires --ipfs)
  -w, --watch                        Automatically rebuild when changes are made (default: false)
  -v, --verbose                      Verbose output (default: false)
```

If you want to deploy to IPFS, use `-ipfs <ipfs uri>.`
