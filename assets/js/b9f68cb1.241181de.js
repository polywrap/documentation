"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"adding-new-methods",title:"Adding new Methods"},o=void 0,s={unversionedId:"tutorials/create-wraps/tutorial/adding-new-methods",id:"tutorials/create-wraps/tutorial/adding-new-methods",title:"Adding new Methods",description:"Custom functionality: IPFS SimpleStorage",source:"@site/docs/tutorials/create-wraps/tutorial/adding-new-methods.md",sourceDirName:"tutorials/create-wraps/tutorial",slug:"/tutorials/create-wraps/tutorial/adding-new-methods",permalink:"/tutorials/create-wraps/tutorial/adding-new-methods",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wraps/tutorial/adding-new-methods.md",tags:[],version:"current",frontMatter:{id:"adding-new-methods",title:"Adding new Methods"},sidebar:"docs",previous:{title:"Build, deploy and test",permalink:"/tutorials/create-wraps/tutorial/build-deploy-test"},next:{title:"Writing tests with workflows",permalink:"/tutorials/create-wraps/tutorial/writing-tests-with-workflows"}},l={},p=[{value:"<strong>Custom functionality: IPFS SimpleStorage</strong>",id:"custom-functionality-ipfs-simplestorage",level:2},{value:"<strong>Update the schema</strong>",id:"update-the-schema",level:3},{value:"<strong>Implement the <code>setIpfsData</code> method</strong>",id:"implement-the-setipfsdata-method",level:3},{value:"<strong>Adding more methods</strong>",id:"adding-more-methods",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"custom-functionality-ipfs-simplestorage"},(0,r.kt)("strong",{parentName:"h2"},"Custom functionality: IPFS SimpleStorage")),(0,r.kt)("p",null,"It's time to build and customize your own Polywrap wrap! We'll be adding IPFS support to the SimpleStorage API."),(0,r.kt)("h3",{id:"update-the-schema"},(0,r.kt)("strong",{parentName:"h3"},"Update the schema")),(0,r.kt)("p",null,"The first step to adding new wrap functionality is defining the method we want our users to invoke. Add the following method & custom data types to your ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/schema.graphql")," schema file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="./src/schema.graphql"',title:'"./src/schema.graphql"'},"type Module {\n...\n    setIpfsData(\n        options: SetIpfsDataOptions!\n        ipfsProvider: String!\n        connection: Ethereum_Connection\n    ): SetIpfsDataResult!\n}\n\ntype SetIpfsDataOptions {\n    address: String!\n    data: String!\n}\n\ntype SetIpfsDataResult {\n    ipfsHash: String!\n    txReceipt: String!\n}\n")),(0,r.kt)("h3",{id:"implement-the-setipfsdata-method"},(0,r.kt)("strong",{parentName:"h3"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"strong"},"setIpfsData")," method")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.ts")," file, import the new types we've defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},"import {\n  Ethereum_Module,\n  Args_deployContract,\n  Args_setData,\n  Args_getData,\n  Ipfs_Module,\n  Args_getIpfsData,\n  Args_setIpfsData,\n  SetIpfsDataResult, ModuleBase\n} from './wrap';\n")),(0,r.kt)("p",null,"These new types will not exist yet, but don't worry, they'll be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/wrap/*")," folder once the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," command is run."),(0,r.kt)("p",null,"Next, we'll implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"setIpfsData")," method. Add this function to the bottom of your ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},"  setIpfsData(args: Args_setIpfsData): SetIpfsDataResult {\n    // 1. Upload the data to IPFS\n    const ipfsAddResult = Ipfs_Module.addFile({\n      data: {\n        name: \"data\",\n        data: String.UTF8.encode(args.options.data)\n      },\n      ipfsProvider: args.ipfsProvider,\n      timeout: null,\n      addOptions: null,\n    }).unwrap();\n    const ipfsHash = ipfsAddResult.hash;\n\n    // 2. Add the data's IPFS hash to SimpleStorage using `setHash(...)`\n    const txReceipt = Ethereum_Module.callContractMethodAndWait({\n      address: args.options.address,\n      method: 'function setHash(string value)',\n      args: [ipfsHash],\n      connection: args.connection,\n      options: null,\n    }).unwrap();\n\n    // 3. Return the result\n    return {\n      ipfsHash,\n      txReceipt: txReceipt.transactionHash,\n    };\n  }\n")),(0,r.kt)("p",null,"As you can see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," smart contract already exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"setHash()")," method."),(0,r.kt)("p",null,"In steps ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),', our SimpleStorage wrap is sending a "sub-invocation" to the IPFS and Ethereum plugin wraps we imported in our schema. Wraps can be implemented as a WebAssembly-based wrap, or a plugin wrap in the client\'s language (ex: JavaScript). For more information on plugins, see the ',(0,r.kt)("a",{parentName:"p",href:"/tutorials/advanced/create-plugins/create-js-plugin"},'"Plugin an Existing JS SDK"')," documentation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Ethereum_Module.callContractMethodAndWait")," function also accepts an optional argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),". This option allows you to select the network which you're transacting with, by specifying a node's endpoint, or a network (name or chain ID) (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"rinkeby"'),")."),(0,r.kt)("p",null,"To verify everything is implemented correctly, try running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," and see if the Polywrap build succeeds."),(0,r.kt)("h3",{id:"adding-more-methods"},(0,r.kt)("strong",{parentName:"h3"},"Adding more methods")),(0,r.kt)("p",null,"With our first method implementation complete, it's now time to add more. The steps are the same as above."),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/schema.graphql")," file like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="./src/schema.graphql"',title:'"./src/schema.graphql"'},"type Module {\n...\n    getIpfsData(\n        address: String!\n        ipfsProvider: String!\n        connection: Ethereum_Connection\n    ): String!\n...\n}\n")),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"getIpfsData(...)")," method like so in ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/index.ts"',title:'"./src/index.ts"'},"  getIpfsData(args: Args_getIpfsData): string {\n    const hash = Ethereum_Module.callContractView({\n      address: args.address,\n      method: 'function getHash() view returns (string)',\n      args: null,\n      connection: args.connection\n    }).unwrap();\n\n    return String.UTF8.decode(\n      Ipfs_Module.cat({\n        cid: hash,\n        ipfsProvider: args.ipfsProvider,\n        timeout: null,\n        catOptions: null\n      }).unwrap()\n    );\n  }\n")),(0,r.kt)("p",null,"To verify everything is implemented correctly, try running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," and see if the Polywrap build succeeds."))}u.isMDXComponent=!0}}]);