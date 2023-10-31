"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),w=r,h=c["".concat(s,".").concat(w)]||c[w]||d[w]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}w.displayName="MDXCreateElement"},1321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"swift",title:"Swift"},o=void 0,l={unversionedId:"quick-start/swift",id:"quick-start/swift",title:"Swift",description:"The Polywrap Client",source:"@site/docs/quick-start/swift.md",sourceDirName:"quick-start",slug:"/quick-start/swift",permalink:"/quick-start/swift",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/swift.md",tags:[],version:"current",frontMatter:{id:"swift",title:"Swift"},sidebar:"docs",previous:{title:"Kotlin",permalink:"/quick-start/kotlin"},next:{title:"Available Clients",permalink:"/clients"}},s={},p=[{value:"The Polywrap Client",id:"the-polywrap-client",level:2},{value:"Swift Project setup",id:"swift-project-setup",level:3},{value:"Install the Polywrap Client",id:"install-the-polywrap-client",level:3},{value:"Invoking your first Wrap",id:"invoking-your-first-wrap",level:3},{value:"What&#39;s going on here?",id:"whats-going-on-here",level:4},{value:"Invocation return value",id:"invocation-return-value",level:4},{value:"Universal SDKs",id:"universal-sdks",level:3},{value:"Compose everything",id:"compose-everything",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-polywrap-client"},"The Polywrap Client"),(0,r.kt)("p",null,"To use ",(0,r.kt)("a",{parentName:"p",href:"/concepts/wraps"},"Wraps")," in your app, all you need is the ",(0,r.kt)("a",{parentName:"p",href:"/clients"},"Polywrap Client"),"."),(0,r.kt)("h3",{id:"swift-project-setup"},"Swift Project setup"),(0,r.kt)("p",null,"We'll use a basic iOS App project as our template/boilerplate."),(0,r.kt)("p",null,"Within ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentView.swift"),", add a button that will invoke a ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," function within its action and print any errors that may occur when executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ContentView.swift"',title:'"ContentView.swift"'},'import SwiftUI\n\nfunc run() throws -> Void {\n    print("Running...")\n \n    // Your code will go here\n \n    print("Done running!")\n}\n\nstruct ContentView: View {\n    var body: some View {\n        VStack {\n            Button("Run example", action: {\n                do {\n                    try run()\n                }\n                catch {\n                    print("\\(error)")\n                }\n            })\n        }\n        .padding()\n    }\n}\n')),(0,r.kt)("h3",{id:"install-the-polywrap-client"},"Install the Polywrap Client"),(0,r.kt)("p",null,"The Polywrap Client package is available via Swift Package Manager and Cocoapods."),(0,r.kt)("p",null,"For detailed instructions on how to install the Polywrap Swift Client see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polywrap/swift-client"},"client's readme"),"."),(0,r.kt)("p",null,"We will install the Polywrap Client directly through XCode."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"File -> Add Package Dependency")," and enter ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/polywrap/swift-client")," into the URL field."),(0,r.kt)("h3",{id:"invoking-your-first-wrap"},"Invoking your first Wrap"),(0,r.kt)("p",null,"In order to invoke a Wrap, we first need to instantiate the Polywrap Client:"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentView.swift"),", import the ",(0,r.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," package at the top of your file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ContentView.swift"',title:'"ContentView.swift"'},"import SwiftUI\nimport PolywrapClient\n")),(0,r.kt)("p",null,"After this, inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," function, initialize the Polywrap client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ContentView.swift"',title:'"ContentView.swift"'},"    let client = BuilderConfig()\n        .addSystemDefault()\n        .addWeb3Default()\n        .build()\n")),(0,r.kt)("p",null,"At this point, you can already invoke Wraps! In the simple example below, we will invoke the SHA3 Wrap within our ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ContentView.swift"',title:'"ContentView.swift"'},"    let client = BuilderConfig()\n        .addSystemDefault()\n        .addWeb3Default()\n        .build()\n")),(0,r.kt)("p",null,'By clicking on the "Run example" button in the preview pane, you should now see the following appear in your console:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ba5a5d5fb7674f5975f0ecd0cd9a2f4bcadc9c04f5ac2ab3a887d8f10355fc38\n")),(0,r.kt)("p",null,"This is the return value of our invocation."),(0,r.kt)("h4",{id:"whats-going-on-here"},"What's going on here?"),(0,r.kt)("p",null,"Using the Polywrap Client, we are invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"sha3_256")," method of a Wrap found under the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/uris"},"WRAP URI")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapscan.io/polywrap/sha3@1.0")," called the SHA3 Wrap."),(0,r.kt)("p",null,"Under the hood, through a process we call URI Resolution, the Polywrap Client knows how to fetch and execute the Wrap from decentralized storage."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PolywrapClient")," comes pre-configured with everything you need for most Web2 and Web3 use-cases by default."),(0,r.kt)("h4",{id:"invocation-return-value"},"Invocation return value"),(0,r.kt)("p",null,"Invoking a wrap can result in one of two scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A successful Wrap invocation returns the return value of the Wrap invocation. This can be anything - a boolean value, a string, an object, etc."),(0,r.kt)("li",{parentName:"ul"},"A failed Wrap invocation throws an error describing the reason for invocation failure.")),(0,r.kt)("h3",{id:"universal-sdks"},"Universal SDKs"),(0,r.kt)("p",null,"Now that we know how a Wrap is invoked, let's see Polywrap's true power: ",(0,r.kt)("strong",{parentName:"p"},"universal SDKs"),"!"),(0,r.kt)("p",null,"One of the greatest benefits of Polywrap for the end-user (you!) lies in the fact that you can use the Polywrap Client to invoke the same Wrap from a variety of platforms and languages. If there's a Polywrap Client for your language, you can invoke any Wrap. This means that you can use the same SDK across multiple languages!"),(0,r.kt)("p",null,"Another important benefit of using Polywrap is that, since Wraps are downloaded from various sources, you can automatically receive patches and updates to your SDKs without having to update your codebase."),(0,r.kt)("p",null,"Now we'll invoke the Uniswap V3 Wrap which is a port of the Uniswap SDK, but written as a Wrap."),(0,r.kt)("p",null,"We can use the Uniswap Wrap to fetch Uniswap's basic data related to the WETH and USDC tokes, find the address of the pool for those two tokens. We are also checking each result for errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'    // First we need to define our argument and return types for the fetchToken call\n    struct FetchToken_Args : Codable {\n        var address: String\n        var chainId: String\n    }\n    \n    struct Currency: Codable {\n        var decimals: Int\n        var symbol: String\n        var name: String\n    }\n    \n    struct Token: Codable {\n        var address: String\n        var chainId: Int\n        var currency: Currency\n    }\n    \n    // Fetch information about WETH\n    let weth: Token = try client.invoke(\n        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),\n        method: "fetchToken",\n        args: FetchToken_Args(\n            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",\n            chainId: "MAINNET"\n        )\n    )\n    \n    print("WETH: \\(weth)")\n    \n    let usdc: Token = try client.invoke(\n        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),\n        method: "fetchToken",\n        args: FetchToken_Args(\n            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",\n            chainId: "MAINNET"\n        )\n    )\n    \n    print("USDC: \\(usdc)")\n    \n    // Define our argument types for getPoolAddress\n    struct GetPoolAddress_Args: Codable {\n        var tokenA: Token\n        var tokenB: Token\n        var fee: String\n    }\n    \n    let poolAddress: String = try client.invoke(\n        uri: try Uri("wrapscan.io/polywrap/uniswap-v3@1.0"),\n        method: "getPoolAddress",\n        args: GetPoolAddress_Args(\n            tokenA: weth,\n            tokenB: usdc,\n            fee: "MEDIUM"\n        )\n    )\n    \n    print("Pool address: \\(poolAddress)")\n')),(0,r.kt)("p",null,"You can see more examples on how to use the Uniswap V3 Wrap in its ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.docs.wrappers.io/"},"docs page"),"."),(0,r.kt)("h3",{id:"compose-everything"},"Compose everything"),(0,r.kt)("p",null,"So far, we've only invoked a single Wrap, essentially using Polywrap to access a single SDK."),(0,r.kt)("p",null,"Using the Polywrap Client, we can invoke any number of SDKs, allowing us to build infinitely composable applications. If there's a Wrap for it, we can invoke it and use its functionality."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.wrapscan.io/"},"Wrapscan")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polywrap/awesome-polywrap"},"awesome-polywrap")," repository to find a curated list of Wraps we and our community have developed."))}d.isMDXComponent=!0}}]);