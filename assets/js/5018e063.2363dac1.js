(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(173)),o=["components"],p={id:"end-to-end-test",title:"Writing tests with TypeScript"},s={unversionedId:"quick-start/test-wasm-wrappers/end-to-end-test",id:"quick-start/test-wasm-wrappers/end-to-end-test",isDocsHomePage:!1,title:"Writing tests with TypeScript",description:"Introduction",source:"@site/docs/quick-start/test-wasm-wrappers/end-to-end-test.md",slug:"/quick-start/test-wasm-wrappers/end-to-end-test",permalink:"/quick-start/test-wasm-wrappers/end-to-end-test",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/test-wasm-wrappers/end-to-end-test.md",version:"current",sidebar:"docs",previous:{title:"Add Metadata",permalink:"/quick-start/create-wasm-wrappers/add-metadata"},next:{title:"Configure Polywrap infrastructure pipeline",permalink:"/quick-start/test-wasm-wrappers/infra-pipeline"}},l=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Prerequisites</strong>",id:"prerequisites",children:[]},{value:"<strong>The Polywrap Test Environment</strong>",id:"the-polywrap-test-environment",children:[]},{value:"<strong>Starting and stopping a Polywrap Test environment with @polywrap/test-env-js</strong>",id:"starting-and-stopping-a-polywrap-test-environment-with-polywraptest-env-js",children:[]},{value:"<strong>Building and deploying a Wasm wrapper for testing with @polywrap/test-env-js</strong>",id:"building-and-deploying-a-wasm-wrapper-for-testing-with-polywraptest-env-js",children:[]},{value:"<strong>Setting up a Polywrap Client</strong>",id:"setting-up-a-polywrap-client",children:[{value:"<strong>Configure the IPFS Resolver Plugin</strong>",id:"configure-the-ipfs-resolver-plugin",children:[]},{value:"<strong>Configure the Ethereum Plugin</strong>",id:"configure-the-ethereum-plugin",children:[]},{value:"<strong>Create the Polywrap Client Instance</strong>",id:"create-the-polywrap-client-instance",children:[]}]},{value:"<strong>Deploy the Smart Contract</strong>",id:"deploy-the-smart-contract",children:[]},{value:"<strong>Generate TypeScript Types</strong>",id:"generate-typescript-types",children:[]},{value:"<strong>Testing a Wrapper Method</strong>",id:"testing-a-wrapper-method",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},Object(i.b)("strong",{parentName:"h2"},"Introduction")),Object(i.b)("p",null,"Here we discuss the process of writing end to end (e2e) tests for your Wasm wrapper using TypeScript.\nBy end-to-end, we mean tests that make calls to the wrapper through a Polywrap Client.\nE2e testing is both necessary and useful.\nIt is necessary because calls between wrappers depend on the Polywrap Client, and therefore cannot always be made in a\nWasm wrapper's native language.\nIt is useful because such tests can more accurately represent the user experience of your wrapper when it is integrated\ninto an application."),Object(i.b)("p",null,"We will focus on setting up a test environment and a Polywrap Client. Once these tasks are completed, testing\na Wasm wrapper is similar to testing a traditional SDK."),Object(i.b)("h2",{id:"prerequisites"},Object(i.b)("strong",{parentName:"h2"},"Prerequisites")),Object(i.b)("p",null,"This guide uses ",Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," to implement the Polywrap test environment. We will also\nuse the ",Object(i.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," testing framework, though you can use any framework and follow without difficulty."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In the future, TypeScript will be one of many supported languages with a Polywrap client.\nAs more Polywrap Clients are released in various languages, implementing plugin wrappers in those languages will be supported as well."))),Object(i.b)("p",null,"You'll need the following installed as developer dependencies before testing your wrapper:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../../reference/cli/polywrap-cli"},Object(i.b)("inlineCode",{parentName:"a"},"polywrap"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../../reference/clients/js/libraries/test-env-js"},Object(i.b)("inlineCode",{parentName:"a"},"@polywrap/test-env-js"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../../reference/clients/js/client-js"},Object(i.b)("inlineCode",{parentName:"a"},"@polywrap/client-js"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jest")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@types/jest"))),Object(i.b)("p",null,"These can be added to your TypeScript project using the npm or yarn package managers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save-dev polywrap @polywrap/test-env-js @polywrap/client-js jest @types/jest\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn add -D polywrap @polywrap/test-env-js @polywrap/client-js jest @types/jest\n")),Object(i.b)("h2",{id:"the-polywrap-test-environment"},Object(i.b)("strong",{parentName:"h2"},"The Polywrap Test Environment")),Object(i.b)("p",null,"An ideal Polywrap test environment will integrate everything you need to test your wrapper.\nIn the case of this guide, we will need an IPFS node and an Ethereum test network."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Polywrap makes it easy to create a custom test environment that you can start and stop with the Polywrap CLI.\nSee ",Object(i.b)("a",{parentName:"p",href:"./infra-pipeline"},"Configure Polywrap infrastructure pipeline")," for more information."))),Object(i.b)("p",null,"This guide will use the ",Object(i.b)("a",{parentName:"p",href:"../../reference/clients/js/libraries/test-env-js"},Object(i.b)("inlineCode",{parentName:"a"},"@polywrap/test-env-js"))," package.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"@polywrap/test-env-js")," package uses the default infrastructure module included with the ",Object(i.b)("a",{parentName:"p",href:"../../reference/cli/polywrap-cli"},Object(i.b)("inlineCode",{parentName:"a"},"polywrap"))," CLI.\nWe can use ",Object(i.b)("inlineCode",{parentName:"p"},"@polywrap/test-env-js")," to start and stop the test environment programmatically.\nThe package also exports the ethereum provider, ipfs provider, and ens addresses used by the default infrastructure module."),Object(i.b)("h2",{id:"starting-and-stopping-a-polywrap-test-environment-with-polywraptest-env-js"},Object(i.b)("strong",{parentName:"h2"},"Starting and stopping a Polywrap Test environment with @polywrap/test-env-js")),Object(i.b)("p",null,"If you're unfamiliar with ",Object(i.b)("a",{parentName:"p",href:"../../reference/clients/js/libraries/test-env-js"},Object(i.b)("inlineCode",{parentName:"a"},"@polywrap/test-env-js")),", feel free to check\nout the reference documentation before we continue."),Object(i.b)("p",null,"Let's start a new file where we will write our first test. "),Object(i.b)("p",null,"Like many testing frameworks in JavaScript, the Jest framework includes hooks that run before and after all tests.\nI've added a call to ",Object(i.b)("inlineCode",{parentName:"p"},"initTestEnvironment")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"beforeAll")," hook, so we can start our test environment before running our tests.\nI added a call to ",Object(i.b)("inlineCode",{parentName:"p"},"stopTestEnvironment")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"afterAll")," hook to make sure the test environment does not continue running\non our system after we finish testing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { initTestEnvironment, stopTestEnvironment } from "@polywrap/test-env-js";\n\njest.setTimeout(360000);\n\ndescribe(\'Wrapper Test\', () => {\n\n  beforeAll(async () => {\n    // initialize test environment\n    await initTestEnvironment();\n  });\n\n  afterAll(async () => {\n    // stop test environment\n    await stopTestEnvironment();\n  });\n\n  test("", async () => { });\n});\n')),Object(i.b)("h2",{id:"building-and-deploying-a-wasm-wrapper-for-testing-with-polywraptest-env-js"},Object(i.b)("strong",{parentName:"h2"},"Building and deploying a Wasm wrapper for testing with @polywrap/test-env-js")),Object(i.b)("p",null,"To invoke a Wasm wrapper in a test, we first need to build it. In this guide, we will do this with\n",Object(i.b)("inlineCode",{parentName:"p"},"@polywrap/test-env-js")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"buildWrapper")," function."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Alternatively, we could have used the ",Object(i.b)("inlineCode",{parentName:"p"},"@polywrap/test-env-js")," function ",Object(i.b)("inlineCode",{parentName:"p"},"buildAndDeployWrapper"),".\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"buildAndDeployWrapper")," function will build a wrapper, deploy it to IPFS, point an ENS domain to it.\nIt returns both the IPFS content hash and the ENS domain, either of which could be used to invoke the wrapper."))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"buildWrapper")," function requires an absolute path to the directory containing the wrapper's polywrap manifest.\nWe will obtain the absolute path to our wrapper project in three steps. First we get the directory of the folder containing\nour test script, using the node.js ",Object(i.b)("inlineCode",{parentName:"p"},"__dirname")," global variable. We then append the path from our test script file to the\nmanifest directory. Finally, we import the node.js feature ",Object(i.b)("inlineCode",{parentName:"p"},"path"),", and use ",Object(i.b)("inlineCode",{parentName:"p"},"path.resolve")," to get direct absolute path to\nour wrapper project."),Object(i.b)("p",null,"We will invoke our wrapper using the path to our build folder.\nWe prefix the path with ",Object(i.b)("inlineCode",{parentName:"p"},"wrap://fs/")," to conform to the WRAP URI standard, though prefixing the path with ",Object(i.b)("inlineCode",{parentName:"p"},"fs/")," alone would\nwork just as well. See ",Object(i.b)("a",{parentName:"p",href:"../../concepts/understanding-uris"},"Understanding URIs")," to learn more."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'// highlight-start\nimport { buildWrapper, initTestEnvironment, stopTestEnvironment } from "@polywrap/test-env-js";\nimport path from "path";\n// highlight-end\n\njest.setTimeout(360000);\n\ndescribe(\'Wrapper Test\', () => {\n\n  // path to the wrapper\'s build folder\n  let wrapperPath: string;\n\n  beforeAll(async () => {\n    // initialize test environment\n    await initTestEnvironment();\n\n    // highlight-start\n    // absolute path to directory with polywrap.yaml\n    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");\n    // build the wrapper\n    await buildWrapper(wrapperDirectory);\n    wrapperPath = `wrap://fs/${wrapperDirectory}/build`\n    // highlight-end\n  });\n\n  afterAll(async () => {\n    // stop test environment\n    await stopTestEnvironment();\n  });\n\n  test("", async () => { });\n});\n')),Object(i.b)("h2",{id:"setting-up-a-polywrap-client"},Object(i.b)("strong",{parentName:"h2"},"Setting up a Polywrap Client")),Object(i.b)("p",null,"Now that we have deployed our Wasm wrapper to a local test environment, we need to set up a Polywrap Client that can\ninvoke it. We can make sure our client is ready to invoke the wrapper by configuring two of the default plugin wrappers."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"ipfsResolverPlugin")," can be configured using the test environment's local IPFS node."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"ethereumPlugin")," can be configured with an Ethereum provider for the Ganache Ethereum test network.")),Object(i.b)("h3",{id:"configure-the-ipfs-resolver-plugin"},Object(i.b)("strong",{parentName:"h3"},"Configure the IPFS Resolver Plugin")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ipfsResolverPlugin")," can be configured with a default IPFS provider and an array of fallback providers that will be tried if\nthe default provider fails."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";\n\nconst ipfsConfig: IpfsPluginConfig = {\n  provider: providers.ipfs,\n  fallbackProviders: undefined,\n};\n')),Object(i.b)("h3",{id:"configure-the-ethereum-plugin"},Object(i.b)("strong",{parentName:"h3"},"Configure the Ethereum Plugin")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ethereumPlugin")," can be configured with Ethereum providers and signers. It accepts JSON RPC provider strings,\nProviders from the ethers.js package, and providers from the web3.js package."),Object(i.b)("p",null,"To configure the plugin, we need to provide it with an object containing network names along with a provider. We can\noptionally provide a signer as well, but by default the plugin will attempt to obtain a signer from the provider if it\nis needed."),Object(i.b)("p",null,'We can give networks any name we want in our configuration. We can later use these names to choose which network to\nquery. Here we will use the name "testnet" for our local Ethereum test network.'),Object(i.b)("p",null,"We also need to tell the Ethereum plugin which network should be used when a network is not specified. We do this by\nsetting the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"defaultNetwork")," property to one of our network names."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";\n\nconst ethereumConfig: EthereumPluginConfig = {\n  networks: {\n    testnet: {\n      provider: providers.ethereum // Ganache test network\n    },\n  },\n  defaultNetwork: "testnet",\n};\n')),Object(i.b)("h3",{id:"create-the-polywrap-client-instance"},Object(i.b)("strong",{parentName:"h3"},"Create the Polywrap Client Instance")),Object(i.b)("p",null,"Now we are ready to add the plugins to our Polywrap Client configuration and create the client. The URI's we assign in\nour client configuration will redirect to the plugin instances when queried."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'// highlight-start\nimport { ClientConfig, PolywrapClient } from "@polywrap/client-js";\nimport { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";\nimport { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";\nimport { buildWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";\n// highlight-end\nimport path from "path";\n\njest.setTimeout(360000);\n\ndescribe(\'Wrapper Test\', () => {\n\n  // path to the wrapper\'s build folder\n  let wrapperPath: string;\n\n  // highlight-start\n  // an instance of the Polywrap Client\n  let client: PolywrapClient;\n  // highlight-end\n\n  beforeAll(async () => {\n    // initialize test environment\n    await initTestEnvironment();\n\n    // absolute path to directory with polywrap.yaml\n    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");\n    // build the wrapper\n    await buildWrapper(wrapperDirectory);\n    wrapperPath = `wrap://fs/${wrapperDirectory}/build`\n\n    // highlight-start\n    // configure the ipfs plugin\n    const ipfsConfig: IpfsPluginConfig = {\n      provider: providers.ipfs,\n      fallbackProviders: undefined,\n    };\n\n    // configure the ethereum plugin\n    const ethereumConfig: EthereumPluginConfig = {\n      networks: {\n        testnet: {\n          provider: providers.ethereum // Ganache test network\n        },\n      },\n      defaultNetwork: "testnet",\n    };\n\n    // configure the client\n    const clientConfig: Partial<ClientConfig> = {\n      plugins: [\n        {\n          uri: "wrap://ens/ipfs.polywrap.eth",\n          plugin: ipfsPlugin(ipfsConfig),\n        },\n        {\n          uri: "wrap://ens/ethereum.polywrap.eth",\n          plugin: ethereumPlugin(ethereumConfig),\n        },\n      ],\n    };\n\n    // create client\n    client = new PolywrapClient(clientConfig);\n    // highlight-end\n  });\n\n  afterAll(async () => {\n    // stop test environment\n    await stopTestEnvironment();\n  });\n\n  test("", async () => { });\n});\n')),Object(i.b)("h2",{id:"deploy-the-smart-contract"},Object(i.b)("strong",{parentName:"h2"},"Deploy the Smart Contract")),Object(i.b)("p",null,"The SimpleStorage wrapper is designed to interact with a SimpleStorage smart contract. We need to deploy an\ninstance of the contract to work with. While there are many tools developers can use to deploy a smart contract on a\nlocal network, the SimpleStorage API has a method ",Object(i.b)("inlineCode",{parentName:"p"},"deployContract")," we can use to get the job done. We'll call it before\nrunning our test to make sure the contract is ready."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import { ClientConfig, PolywrapClient } from "@polywrap/client-js";\nimport { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";\nimport { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";\nimport { buildWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";\nimport path from "path";\n\njest.setTimeout(360000);\n\ndescribe(\'Wrapper Test\', () => {\n\n  // the Ethereum address of the SimpleStorage smart contract\n  // highlight-start\n  let simpleStorageAddress: string;\n  // highlight-end\n\n  // path to the wrapper\'s build folder\n  let wrapperPath: string;\n\n  // an instance of the Polywrap Client\n  let client: PolywrapClient;\n\n  beforeAll(async () => {\n    // initialize test environment\n    await initTestEnvironment();\n\n    // absolute path to directory with polywrap.yaml\n    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");\n    // build the wrapper\n    await buildWrapper(wrapperDirectory);\n    wrapperPath = `wrap://fs/${wrapperDirectory}/build`\n\n    // configure the ipfs plugin\n    const ipfsConfig: IpfsPluginConfig = {\n      provider: providers.ipfs,\n      fallbackProviders: undefined,\n    };\n\n    // configure the ethereum plugin\n    const ethereumConfig: EthereumPluginConfig = {\n      networks: {\n        testnet: {\n          provider: providers.ethereum // Ganache test network\n        },\n      },\n      defaultNetwork: "testnet",\n    };\n\n    // configure the client\n    const clientConfig: Partial<ClientConfig> = {\n      plugins: [\n        {\n          uri: "wrap://ens/ipfs.polywrap.eth",\n          plugin: ipfsPlugin(ipfsConfig),\n        },\n        {\n          uri: "wrap://ens/ethereum.polywrap.eth",\n          plugin: ethereumPlugin(ethereumConfig),\n        },\n      ],\n    };\n\n    // create client\n    client = new PolywrapClient(clientConfig);\n\n    // deploy simple storage contract\n    // highlight-start\n    const { data, error } = await client.invoke<string>({\n      uri: wrapperPath,\n      method: "deployContract",\n    });\n    if (error) throw error;\n    simpleStorageAddress = data as string;\n    // highlight-end\n  });\n\n  afterAll(async () => {\n    // stop test environment\n    await stopTestEnvironment();\n  });\n\n  test("", async () => { });\n});\n')),Object(i.b)("h2",{id:"generate-typescript-types"},Object(i.b)("strong",{parentName:"h2"},"Generate TypeScript Types")),Object(i.b)("p",null,"Since we are using TypeScript, we will want types to work with. It is possible to automatically generate TypeScript\ntypes from a GraphQL schema using the Polywrap CLI's ",Object(i.b)("inlineCode",{parentName:"p"},"app")," command. "),Object(i.b)("p",null,"Let's set up a ",Object(i.b)("inlineCode",{parentName:"p"},"polywrap.app.yaml")," manifest in a new folder called ",Object(i.b)("inlineCode",{parentName:"p"},"types"),".\nWe will provide the manifest with the path to the composed schema in our build folder."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="polywrap.app.yaml"',title:'"polywrap.app.yaml"'},"format: 0.1.0\nname: generate-typescript-types\nlanguage: app/typescript\nschema: ../../../build/schema.graphql\n")),Object(i.b)("p",null,"We can then call the ",Object(i.b)("inlineCode",{parentName:"p"},"app")," command of the Polywrap CLI."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn polywrap app codegen -m ./src/__tests__/types/polywrap.app.yaml -g ./src/__tests__/types/wrap\n")),Object(i.b)("p",null,"The generated output includes TypeScript types for the SimpleStorage wrapper and its imports."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="types.ts"',title:'"types.ts"'},'...\nexport type String = string;\nexport type Boolean = boolean;\n\nexport interface SetIpfsDataOptions {\n  address: Types.String;\n  data: Types.String;\n}\n\nexport interface SetIpfsDataResult {\n  ipfsHash: Types.String;\n  txReceipt: Types.String;\n}\n\n/// Imported Objects START ///\n\n/* URI: "wrap://ens/ethereum.polywrap.eth" */\nexport interface Ethereum_Connection {\n  node?: Types.String | null;\n  networkNameOrChainId?: Types.String | null;\n}\n...\n')),Object(i.b)("h2",{id:"testing-a-wrapper-method"},Object(i.b)("strong",{parentName:"h2"},"Testing a Wrapper Method")),Object(i.b)("p",null,"From this point, testing a function in your wrapper is no different from testing a traditional SDK. Instead of calling\na method in a traditional SDK, you will invoke your wrapper."),Object(i.b)("p",null,"We will test the ",Object(i.b)("inlineCode",{parentName:"p"},"setIpfsData")," method we added to the SimpleStorage API in ",Object(i.b)("a",{parentName:"p",href:"../create-wasm-wrappers/tutorial/adding-new-methods"},"Adding new functions"),".\nFor arguments, the ",Object(i.b)("inlineCode",{parentName:"p"},"setIpfsData")," method takes the Ethereum address of a deployed SimpleStorage contract and the data\nthe user wants to add to IPFS. It returns the IPFS hash of the data."),Object(i.b)("p",null,"We will test the ",Object(i.b)("inlineCode",{parentName:"p"},"setIpfsData")," method using the string ",Object(i.b)("inlineCode",{parentName:"p"},'"Hello from IPFS!"')," as the data for our test case. To be sure\nour method returns the correct IPFS hash, we can compare the method's return value to the value we get from the free\n",Object(i.b)("a",{parentName:"p",href:"https://app.pinata.cloud/cidchecker"},Object(i.b)("em",{parentName:"a"},"File CID Checker"))," service provided by ",Object(i.b)("a",{parentName:"p",href:"https://www.pinata.cloud/"},"Pinata"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Final test file"',title:'"Final',test:!0,'file"':!0},'import { ClientConfig, PolywrapClient } from "@polywrap/client-js";\nimport { ethereumPlugin, EthereumPluginConfig } from "@polywrap/ethereum-plugin-js";\nimport { ipfsPlugin, IpfsPluginConfig } from "@polywrap/ipfs-plugin-js";\nimport { buildWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";\nimport path from "path";\n// highlight-next-line\nimport { SetIpfsDataResult } from \'../types/wrap\';\n\njest.setTimeout(360000);\n\ndescribe(\'Wrapper Test\', () => {\n\n  // the Ethereum address of the SimpleStorage smart contract\n  let simpleStorageAddress: string;\n\n  // path to the wrapper\'s build folder\n  let wrapperPath: string;\n\n  // an instance of the Polywrap Client\n  let client: PolywrapClient;\n\n  beforeAll(async () => {\n    // initialize test environment\n    await initTestEnvironment();\n\n    // absolute path to directory with polywrap.yaml\n    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");\n    // build the wrapper\n    await buildWrapper(wrapperDirectory);\n    wrapperPath = `wrap://fs/${wrapperDirectory}/build`\n    console.log(wrapperPath);\n\n    // configure the ipfs plugin\n    const ipfsConfig: IpfsPluginConfig = {\n      provider: providers.ipfs,\n      fallbackProviders: undefined,\n    };\n\n    // configure the ethereum plugin\n    const ethereumConfig: EthereumPluginConfig = {\n      networks: {\n        testnet: {\n          provider: providers.ethereum // Ganache test network\n        },\n      },\n      defaultNetwork: "testnet",\n    };\n\n    // configure the client\n    const clientConfig: Partial<ClientConfig> = {\n      plugins: [\n        {\n          uri: "wrap://ens/ipfs.polywrap.eth",\n          plugin: ipfsPlugin(ipfsConfig),\n        },\n        {\n          uri: "wrap://ens/ethereum.polywrap.eth",\n          plugin: ethereumPlugin(ethereumConfig),\n        },\n      ],\n    };\n\n    // create client\n    client = new PolywrapClient(clientConfig);\n\n    // deploy simple storage contract\n    const { data, error } = await client.invoke<string>({\n      uri: wrapperPath,\n      method: "deployContract",\n    });\n    if (error) throw error;\n    simpleStorageAddress = data as string;\n    console.log(simpleStorageAddress);\n  });\n\n  afterAll(async () => {\n    // stop test environment\n    await stopTestEnvironment();\n  });\n\n  // highlight-start\n  test("setIpfsData", async () => {\n    // invoke setIpfs method\n    const { data, error } = await client.invoke<SetIpfsDataResult>({\n      uri: wrapperPath,\n      method: "setIpfsData",\n      args: {\n        options: {\n          address: simpleStorageAddress,\n          data: "Hello from IPFS!",\n        },\n      }\n    });\n\n    // check for errors\n    expect(error).toBeFalsy(); // will be undefined if no exception is thrown in the wrapper\n    expect(data).toBeTruthy(); // will be undefined if an exception is thrown in the wrapper\n\n    // compare results\n    expect(data?.ipfsHash).toEqual("QmPhAJz5QbidN3LgT2eDiu6Z3nCFs2gYQMbjgEAncrGsis");\n  });\n  // highlight-end\n});\n')))}u.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);