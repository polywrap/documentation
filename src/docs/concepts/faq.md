---
id: 'faq'
title: FAQ
---

Here we've listed some questions that we receive from time to time. 
If you can't find an answer to your question here or elsewhere in the documentation, we encourage you to 
[join our discord](https://discord.com/invite/Z5m88a5qWu) and ask us there.

## Technology

### **What are URIs?**
A URI is a Uniform Resource Identifier. URIs are used to identify resources on the internet. In the context of the Polywrap, URIs are used to identify wrappers.

### **How does Polywrap use GraphQL?**
Every wrapper has a schema that defines all methods and types used by the wrapper. GraphQL is used as the Schema Definition Language (SDL).

### **How does Polywrap use Docker?**
Docker is used by the Polywrap CLI in order to provide reproducible build and test environments.

### **What is Wasm?**
As described by W3C via [https://webassembly.org/](https://webassembly.org/):
> WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

### **Why is a Wasm wrapper more secure than a JavaScript SDK?**
A Wasm module is executed inside a sandboxed environment with a virtual memory space.
It is not possible for a nefarious actor to write Wasm code capable of accessing memory address space intended for the operating system or other applications.
Likewise, Wasm does not allow system calls. Wasm modules cannot access the file system, make network requests, or interact with the browser.

### **How does a Wasm wrapper interact with a blockchain wallet?**
Polywrap created [plugin wrappers](./understanding-plugins) to securely complete tasks that are not otherwise possible
in Wasm. The Ethereum Plugin package can be configured to make Ethereum transactions with any standard Ethereum provider.

## Building Wrappers

### **What are Base Schema Types?**
Base Schema Types are default types that can be used by wrapper developers in their wrapper schemas.
Some are primitive types, while others are objects with implementations that may differ between wrapper development languages.

Each language has has type mappings that correspond to the Base Schema Types. These are used when invoking wrappers, and correctly serialize to the corresponding Base Schema Types.

### **What schema types are supported by Polywrap?**
| Schema Type | TypeScript Type | Description |
|-|-|-|
| UInt | number | 32-bit unsigned integer. |
| UInt8 | number | 8-bit unsigned integer. |
| UInt16 | number | 16-bit unsigned integer. |
| UInt32 | number | 32-bit unsigned integer. |
| Int | number | 32-bit signed integer. |
| Int8 | number | 8-bit signed integer. |
| Int16 | number | 16-bit signed integer. |
| Int32 | number | 32-bit signed integer. |
| String | string | UTF-8 string. |
| Boolean | boolean | True or false stored as 1 byte. |
| Bytes | ArrayBuffer | Array of 8-bit unsigned integers. |
| BigInt | string | Multiple precision integer. |
| BigNumber | string | Multiple precision float. |
| JSON | string | JSON object. |
| [Type] | Array<Type\> | Array of elements. |
| Map | Map<K,V\> | Map of key-value pairs. |
| type CustomObject {<br/>&nbsp;&nbsp;prop: Type<br/>} | object | Structured object. |

### **How can I create Polywrap "schema types"?**
Polywrap schemas use a subset of [GraphQL syntax](https://graphql.org/learn/).

## Testing Wrappers

### **How can I run a polywrap test environment locally?**
The Polywrap CLI can be used to start and stop a local test environment you can use to deploy and invoke wrappers.

## Deploying Wrappers

### **How can I pin my Wasm wrapper to IPFS?**
Several third-party services exist to help users pin files to IPFS. 
They are described in our section on [Deploying to IPFS](../quick-start/build-and-deploy-wasm-wrappers/deploy-to-ipfs).
You can learn more about IFPS and "pinning" at [https://docs.ipfs.io/how-to/pin-files](https://docs.ipfs.io/how-to/pin-files)

### **How can I deploy my Wasm wrapper?**
Wasm wrappers can be deployed using Polywrap's deployment pipeline or pinned to IPFS using the tools described in
[Deploying to IPFS](../quick-start/build-and-deploy-wasm-wrappers/deploy-to-ipfs).

## App Integration

### **Do I need to know AssemblyScript to use a wrapper?**
No, AssemblyScript is one of the languages used to build wrappers. 
Once this wrapper is built and published, you can invoke it using a Polywrap Client.

## Polywrap DAO

### **Does polywrap have any grant programs or sponsorships available for building on the ecosystem?**
We do not have a formal grant program, but we have given grants in extraordinary cases in the past. 
[Join our discord](https://discord.com/invite/Z5m88a5qWu) and tell us about your idea!

### **How can I join the Polywrap DAO?**
You can learn more about joining and contributing to the Polywrap DAO in [our handbook](https://handbook.polywrap.io/).

### **What are Polywrap mini-hacks?**
The community hackathons are a way for you to earn rewards and learn more about the project. 
Our hackathons aren't limited to just developers — in the past, we've had technical submissions like dApps and wrappers as well as non-technical ones like articles, memes, and more. 
In short, the only requirement is that your hackathon provides some kind of benefit to the Polywrap ecosystem.

Our hackathons are ongoing. 
To get started, simply [join our Discord](https://discord.com/invite/bGsqQrNhqd) and visit the #mini-hacks channel to let us know what you're working on. 
Our team is happy to give feedback and support on your project when we can.

### **Are there any job opportunities available in polywrap?**
Polywrap is always looking for talent. [Check out our available positions](https://jobs.ashbyhq.com/polywrap).

### **I have a proposal for potential partnership / opportunity, who should I contact?**
Please include all details on an email to hello@polywrap.io. Be as descriptive as possible, add links and validation for the DAO to consider your proposal.

### **How can I join the Polywrap DAO?**
The Polywrap DAO is open to anyone who wishes to join. There is no membership fee.