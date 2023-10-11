"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[7872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||n;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={id:"web3",title:"Use case: Web3"},s=void 0,l={unversionedId:"use-cases/web3",id:"use-cases/web3",title:"Use case: Web3",description:"Polywrap enables the easy integration of Web3 protocols into any application, including both read and write capabilities.",source:"@site/docs/use-cases/web3.md",sourceDirName:"use-cases",slug:"/use-cases/web3",permalink:"/use-cases/web3",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/use-cases/web3.md",tags:[],version:"current",frontMatter:{id:"web3",title:"Use case: Web3"},sidebar:"docs",previous:{title:"The Polywrap CLI",permalink:"/cli"},next:{title:"AI",permalink:"/use-cases/ai"}},i={},p=[{value:"Web3&#39;s Problem",id:"web3s-problem",level:2},{value:"<strong>Difficult to compose.</strong>",id:"difficult-to-compose",level:3},{value:"<strong>Not portable.</strong>",id:"not-portable",level:3},{value:"<strong>Not upgradable.</strong>",id:"not-upgradable",level:3},{value:"Polywrap&#39;s Solution \u2728",id:"polywraps-solution-",level:2},{value:"<strong>Composable.</strong>",id:"composable",level:3},{value:"<strong>Portable.</strong>",id:"portable",level:3},{value:"<strong>Updatable.</strong>",id:"updatable",level:3},{value:"Web3 Hosting",id:"web3-hosting",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polywrap enables the ",(0,r.kt)("strong",{parentName:"p"},"easy integration of Web3 protocols into any application"),", including both read and write capabilities."),(0,r.kt)("h2",{id:"web3s-problem"},"Web3's Problem"),(0,r.kt)("p",null,"We see traditional SDKs as a fundamental bottleneck for web3's adoption, let us explain..."),(0,r.kt)("p",null,"In web3, any application ",(0,r.kt)("em",{parentName:"p"},"should")," be able to interact with smart contract protocols such as Uniswap or Aave. To do this, application developers utilize software development kits (SDKs) to simplify this process."),(0,r.kt)("p",null,"However, traditional SDKs come with a number of issues:"),(0,r.kt)("h3",{id:"difficult-to-compose"},(0,r.kt)("strong",{parentName:"h3"},"Difficult to compose.")),(0,r.kt)("p",null,"A lack of standards makes traditional SDKs difficult to mix-and-match."),(0,r.kt)("img",{src:"/img/docs/introduction/01-composable-v2.png",width:"600"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Today, protocol SDKs like Uniswap, Safe and Ethers aren't standardized. This means that a lot of complex, custom code needs to be written to compose them in dApps.")),(0,r.kt)("h3",{id:"not-portable"},(0,r.kt)("strong",{parentName:"h3"},"Not portable.")),(0,r.kt)("p",null,"SDKs are language-specific, but the modern landscape of applications is more varied than ever: web, mobile, server, games, etc."),(0,r.kt)("img",{src:"/img/docs/introduction/02-portable-v2.png",width:"600"}),(0,r.kt)("h3",{id:"not-upgradable"},(0,r.kt)("strong",{parentName:"h3"},"Not upgradable.")),(0,r.kt)("p",null,"When traditional SDKs undergo patch updates, the entire application needs to be rebuilt and redeployed, which doesn't scale to large web3 ecosystems."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"polywraps-solution-"},"Polywrap's Solution \u2728"),(0,r.kt)("p",null,"Wraps offer a much better strategy for code reuse and composability than traditional SDKs. Wraps are:"),(0,r.kt)("h3",{id:"composable"},(0,r.kt)("strong",{parentName:"h3"},"Composable.")),(0,r.kt)("p",null,"Wraps are developed in a standardized way. Standardization means Wraps can be easily composed, resulting in even more sophisticated Wraps."),(0,r.kt)("img",{src:"/img/docs/introduction/03-composable-v2.png",width:"600"}),(0,r.kt)("h3",{id:"portable"},(0,r.kt)("strong",{parentName:"h3"},"Portable.")),(0,r.kt)("p",null,"Wraps can run on any platform that has the Polywrap client installed. Now, web3 dev teams can build their SDKs as Wraps, and application developers can integrate these Wraps across all platforms."),(0,r.kt)("img",{src:"/img/docs/introduction/04-portable-v2.png",width:"600"}),(0,r.kt)("h3",{id:"updatable"},(0,r.kt)("strong",{parentName:"h3"},"Updatable.")),(0,r.kt)("p",null,"Wraps do not have to be bundled into applications. Instead they can be safely fetched and run at runtime. This allows applications to stay in-sync with web3 protocol upgrades."),(0,r.kt)("h2",{id:"web3-hosting"},"Web3 Hosting"),(0,r.kt)("p",null,"Wraps can be easily deployed to the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/build-and-deploy-wraps/deploy-to-ipfs"},"InterPlanetary File System (IPFS)"),", and published to a decentralized domain like the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/build-and-deploy-wraps/publish-to-ens"},"Ethereum Name Service (ENS)"),"."))}u.isMDXComponent=!0}}]);