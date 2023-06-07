"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,i=A(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||p;return a?r.createElement(f,o(o({ref:t},i),{},{components:a})):r.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=h;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A[d]="string"==typeof e?e:n,o[1]=A;for(var s=2;s<p;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>A,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const p={id:"what-is-polywrap",title:"What is Polywrap"},o=void 0,A={unversionedId:"what-is-polywrap",id:"what-is-polywrap",title:"What is Polywrap",description:"Polywrap is a framework that enables easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols.",source:"@site/docs/what-is-polywrap.md",sourceDirName:".",slug:"/what-is-polywrap",permalink:"/what-is-polywrap",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/what-is-polywrap.md",tags:[],version:"current",frontMatter:{id:"what-is-polywrap",title:"What is Polywrap"},sidebar:"docs",previous:{title:"CLI",permalink:"/cli"},next:{title:"Wraps",permalink:"/concepts/wraps"}},l={},s=[{value:"The problem with current Web3 SDKs",id:"the-problem-with-current-web3-sdks",level:2},{value:"Polywrap: Composable web3 Wrappers",id:"polywrap-composable-web3-wrappers",level:2},{value:"What&#39;s inside a Polywrap Wasm Wrap?",id:"whats-inside-a-polywrap-wasm-wrap",level:2},{value:"Where is it deployed?",id:"where-is-it-deployed",level:2},{value:"How can apps integrate this deployed Wrap?",id:"how-can-apps-integrate-this-deployed-wrap",level:2}],i={toc:s},d="wrapper";function u(e){let{components:t,...p}=e;return(0,n.kt)(d,(0,r.Z)({},i,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Polywrap")," is a framework that enables easy integration of Web3 protocols into any application. It makes it possible for applications on any platform, written in any language, to read and write data to Web3 protocols."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Have questions or want to get involved? Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.polywrap.io/"},"Discord")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/polywrap/toolchain/issues/new/choose"},"open an issue")," on our GitHub repo.")),(0,n.kt)("h2",{id:"the-problem-with-current-web3-sdks"},"The problem with current Web3 SDKs"),(0,n.kt)("p",null,"We see traditional SDKs as the primary bottleneck to web3's potential for composable, cross-platform dApps."),(0,n.kt)("p",null,"Web3 promises a new depth of composability in software development.  Any application can interact with smart contract protocols like Uniswap or Aave.  For web3 developers, software development kits (SDKs) simplify this integration process."),(0,n.kt)("p",null,"However, traditional SDKs come with a number of issues for web3 developers, namely they are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"difficult to compose."),"  Due to the lack of SDK standards, the SDK for one web3 protocol may be difficult to mix-and-match with that of another.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8752).Z,width:"710",height:"167"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"not portable."),"  SDKs are language-specific.  Today's deployment platforms are more varied than ever (web, mobile, server, etc.).  Thus, SDK codebases need to be duplicated and translated for each of these environments, leading to more chances for bugs to appear and higher maintenance costs.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1747).Z,width:"682",height:"287"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"not upgradable.")," When traditional SDKs undergo a patch update, the entire application needs to be rebuilt and redeployed.")),(0,n.kt)("h2",{id:"polywrap-composable-web3-wrappers"},"Polywrap: Composable web3 Wrappers"),(0,n.kt)("p",null,"Presenting Polywrap - a framework for building \u201cwrappers\u201d: composable, portable, and dynamically upgradeable SDKs.\u2728"),(0,n.kt)("p",null,"Polywrap's wrappers offer a much better strategy for code reuse and composability than traditional SDKs. Wrappers are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"easily composable."),"  Wrappers are developed in a standardized way, and all dApps powered by the Polywrap client library can communicate with wrappers with a familiar graphQL-esque querying.  Standardization means wrappers can be easily composed, resulting in even more sophisticated wrappers.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8727).Z,width:"339",height:"299"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"portable.")," Wrappers can execute in any host environment that has the Polywrap client installed (web, mobile, IoT, servers, and more).  Instead of maintaining multiple language-specific SDKs, web3 dev teams can write their wrappers in one language that works seamlessly across all deployment platforms.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1748).Z,width:"682",height:"340"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"updatable on the fly.")," Wrappers aren't bundled into applications.  Instead, they're fetched at runtime and any patch updates are done on the fly, without the need to rebuild the entire app.")),(0,n.kt)("h2",{id:"whats-inside-a-polywrap-wasm-wrap"},"What's inside a Polywrap Wasm Wrap?"),(0,n.kt)("p",null,'A Polywrap Wasm "Wrap" consists of the following files:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A Wasm module")," containing the protocol's business logic functions (e.g. Uniswap's swap functions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wrap Manifest")," file that orchestrates the Wrap, and provides types and parameters for the module functions")),(0,n.kt)("h2",{id:"where-is-it-deployed"},"Where is it deployed?"),(0,n.kt)("p",null,"We currently support deploying Wraps to decentralized endpoints, ",(0,n.kt)("a",{parentName:"p",href:"https://ens.domains/"},"Ethereum Name Service (ENS)"),", a decentralized Ethereum-based naming system and ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System (IPFS)"),", a distributed P2P file system."),(0,n.kt)("p",null,"You can see a list of all deployed Wraps here:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://wrappers.io/all"},"https://wrappers.io/all")),(0,n.kt)("h2",{id:"how-can-apps-integrate-this-deployed-wrap"},"How can apps integrate this deployed Wrap?"),(0,n.kt)("p",null,"In a JavaScript application, a developer would first install the Polywrap JavaScript client. At that point, a Polywrap-enabled app will be able to download and use the protocol's functions. These functions are exported from WebAssembly (Wasm) modules, and can be used in any environment that can execute Wasm functions (like your web browser!)."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The Polywrap JavaScript client allows the app to use ",(0,n.kt)("strong",{parentName:"p"},"any")," deployed Wrap. After instantiating the client, the app can call queries to the Wrap using familiar GraphQL or our streamlined invocation syntax. All that is needed is:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"The URI specifying the ENS or IPFS resolving to content containing the Wrap"),(0,n.kt)("li",{parentName:"ol"},"Specifying the function and arguments provided by that Wrap")),(0,n.kt)("p",{parentName:"admonition"},"For detailed information on how to integrate in apps, take a look at our ",(0,n.kt)("a",{parentName:"p",href:"quick-start"},"Quick Start")," guide."),(0,n.kt)("p",{parentName:"admonition"},"For a guide on how to build your own Polywrap and deploy it for other developers to integrate into their own app, see our ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/create-wraps/tutorial/project-setup"},"Creating a Wasm Wrap guide"),".")))}u.isMDXComponent=!0},8752:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1747:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02-portable-957c2a098a819191104e8e60d7dc0dc6.png"},8727:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1748:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04-portable-e7b4bb6f0cf538b1ca40b3e93f34c837.png"}}]);