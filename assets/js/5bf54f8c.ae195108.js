(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(162)),o=["components"],s={id:"adding-new-functions",title:"Adding new functions"},p={unversionedId:"quick-start/create-wasm-wrappers/adding-new-functions",id:"quick-start/create-wasm-wrappers/adding-new-functions",isDocsHomePage:!1,title:"Adding new functions",description:"Custom functionality: IPFS SimpleStorage",source:"@site/docs/quick-start/create-wasm-wrappers/adding-new-functions.md",slug:"/quick-start/create-wasm-wrappers/adding-new-functions",permalink:"/quick-start/create-wasm-wrappers/adding-new-functions",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-wasm-wrappers/adding-new-functions.md",version:"current",sidebar:"docs",previous:{title:"Build, deploy and test",permalink:"/quick-start/create-wasm-wrappers/build-deploy-test"},next:{title:"Writing tests with workflows",permalink:"/quick-start/create-wasm-wrappers/writing-tests-with-workflows"}},c=[{value:"<strong>Custom functionality: IPFS SimpleStorage</strong>",id:"custom-functionality-ipfs-simplestorage",children:[{value:"<strong>Update the schema</strong>",id:"update-the-schema",children:[]},{value:"<strong>Import IPFS&#39; Polywrap wrapper</strong>",id:"import-ipfs-polywrap-wrapper",children:[]},{value:"<strong>Implement the <code>setIpfsData</code> method</strong>",id:"implement-the-setipfsdata-method",children:[]},{value:"<strong>Adding more methods</strong>",id:"adding-more-methods",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"custom-functionality-ipfs-simplestorage"},Object(i.b)("strong",{parentName:"h2"},"Custom functionality: IPFS SimpleStorage")),Object(i.b)("p",null,"It's time to build and customize your own Polywrap Wasm wrapper! We'll be adding IPFS support to the SimpleStorage API."),Object(i.b)("h3",{id:"update-the-schema"},Object(i.b)("strong",{parentName:"h3"},"Update the schema")),Object(i.b)("p",null,"The first step to adding new wrapper functionality is defining the method we want our users to invoke. Add the following method & custom data types to your ",Object(i.b)("inlineCode",{parentName:"p"},"./src/schema.graphql")," schema file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="./src/schema.graphql"',title:'"./src/schema.graphql"'},"type Module {\n...\n    setIpfsData(\n        options: SetIpfsDataOptions!\n        connection: Ethereum_Connection\n    ): SetIpfsDataResult!\n}\n\ntype SetIpfsDataOptions {\n    address: String!\n    data: String!\n}\n\ntype SetIpfsDataResult {\n    ipfsHash: String!\n    txReceipt: String!\n}\n")),Object(i.b)("h3",{id:"import-ipfs-polywrap-wrapper"},Object(i.b)("strong",{parentName:"h3"},"Import IPFS' Polywrap wrapper")),Object(i.b)("p",null,"Since we'll be making use of IPFS in our Wasm wrapper, let's import the IPFS plugin wrapper. Then we will be able to call its methods from our code, allowing us to upload content:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="./src/schema.graphql"',title:'"./src/schema.graphql"'},'#import { Module } into Ipfs from "wrap://ens/ipfs.polywrap.eth"\n\ntype Module {\n  ...\n')),Object(i.b)("h3",{id:"implement-the-setipfsdata-method"},Object(i.b)("strong",{parentName:"h3"},"Implement the ",Object(i.b)("inlineCode",{parentName:"strong"},"setIpfsData")," method")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"./src/index.ts")," file, import the new types we've defined:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},'import {\n  Ethereum_Module,\n  Args_deployContract,\n  Args_setData,\n  Args_getData,\n  Ipfs_Module,\n  Args_getIpfsData,\n  Args_setIpfsData,\n  SetIpfsDataResult,\n} from "./wrap";\n')),Object(i.b)("p",null,"These new types will not exist yet, but don't worry, they'll be generated in the ",Object(i.b)("inlineCode",{parentName:"p"},"./src/wrap/*")," folder once the ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," command is run."),Object(i.b)("p",null,"Next, we'll implement the ",Object(i.b)("inlineCode",{parentName:"p"},"setIpfsData")," method. Add this function to the bottom of your ",Object(i.b)("inlineCode",{parentName:"p"},"./src/index.ts")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},"export function setIpfsData(args: Args_setIpfsData): SetIpfsDataResult {\n  // 1. Upload the data to IPFS\n  const ipfsHash = Ipfs_Module.addFile({\n    data: String.UTF8.encode(args.options.data),\n  }).unwrap();\n\n  // 2. Add the data's IPFS hash to SimpleStorage using `setHash(...)`\n  const txReceipt = Ethereum_Module.callContractMethodAndWait({\n    address: args.options.address,\n    method: 'function setHash(string value)',\n    args: [ipfsHash],\n    connection: args.connection,\n    txOverrides: null,\n  }).unwrap();\n\n  // 3. Return the result\n  return {\n    ipfsHash,\n    txReceipt: txReceipt.transactionHash,\n  };\n}\n")),Object(i.b)("p",null,"As you can see, the ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," smart contract already exposes a ",Object(i.b)("inlineCode",{parentName:"p"},"setHash()")," method."),Object(i.b)("p",null,"In steps ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"2"),', our SimpleStorage Wasm wrapper is sending a "sub-invocation" to the IPFS and Ethereum plugin wrappers we imported in our schema. Wrappers can be implemented as a WebAssembly-based wrapper, or a plugin wrapper in the client\'s language (ex: JavaScript). For more information on plugins, see the ',Object(i.b)("a",{parentName:"p",href:"/quick-start/create-plugin-wrappers/create-js-plugin"},'"Plugin an Existing JS SDK"')," documentation."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Ethereum_Module.callContractMethodAndWait")," function also accepts an optional argument, ",Object(i.b)("inlineCode",{parentName:"p"},"connection"),". This option allows you to select the network which you're transacting with, by specifying a node's endpoint, or a network (name or chain ID) (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'"rinkeby"'),")."),Object(i.b)("p",null,"To verify everything is implemented correctly, try running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," and see if the Polywrap build succeeds."),Object(i.b)("h3",{id:"adding-more-methods"},Object(i.b)("strong",{parentName:"h3"},"Adding more methods")),Object(i.b)("p",null,"With our first method implementation complete, it's now time to add more. The steps are the same as above."),Object(i.b)("p",null,"Update the ",Object(i.b)("inlineCode",{parentName:"p"},"./src/schema.graphql")," file like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql",metastring:'title="./src/schema.graphql"',title:'"./src/schema.graphql"'},"type Module {\n...\n    getIpfsData(\n        address: String!\n        connection: Ethereum_Connection\n    ): String!\n...\n}\n")),Object(i.b)("p",null,"Implement the ",Object(i.b)("inlineCode",{parentName:"p"},"getIpfsData(...)")," method like so in ",Object(i.b)("inlineCode",{parentName:"p"},"./src/index.ts"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},"export function getIpfsData(args: Args_getIpfsData): string {\n  const hash = Ethereum_Module.callContractView({\n    address: args.address,\n    method: 'function getHash() view returns (string)',\n    args: null,\n    connection: args.connection\n  }).unwrap();\n\n  return String.UTF8.decode(\n    Ipfs_Module.cat({ cid: hash, options: null }).unwrap()\n  );\n}\n")),Object(i.b)("p",null,"To verify everything is implemented correctly, try running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," and see if the Polywrap build succeeds."))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(b,s(s({ref:t},c),{},{components:n})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);