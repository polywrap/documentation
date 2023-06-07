"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[7767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"uris",title:"URIs"},i=void 0,l={unversionedId:"concepts/uris",id:"concepts/uris",title:"URIs",description:"Deployed wrappers are identified using custom URIs (Uniform Resource Identifier) called WRAP URIs. For example:",source:"@site/docs/concepts/uris.md",sourceDirName:"concepts",slug:"/concepts/uris",permalink:"/concepts/uris",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/uris.md",tags:[],version:"current",frontMatter:{id:"uris",title:"URIs"},sidebar:"docs",previous:{title:"ABI",permalink:"/concepts/abi"},next:{title:"Wrap Schema",permalink:"/concepts/wrap-schema"}},p={},s=[{value:"Scheme",id:"scheme",level:4},{value:"Authority",id:"authority",level:4},{value:"Path",id:"path",level:4}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deployed wrappers are identified using custom URIs (",(0,o.kt)("a",{parentName:"p",href:"http://www.ltg.ed.ac.uk/~ht/WhatAreURIs/"},"Uniform Resource Identifier"),") called WRAP URIs. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wrap://ens/api.helloworld.polywrap.eth\n")),(0,o.kt)("p",null,"WRAP URIs follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polywrap/specification/blob/main/standards/01_URI.md"},"WRAP URI Standard"),"."),(0,o.kt)("p",null,"WRAP URIs have 3 parts: a protocol, an authority, and a path."),(0,o.kt)("h4",{id:"scheme"},"Scheme"),(0,o.kt)("p",null,"WRAP URIs use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," scheme. Including ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap://")," in your URI is optional in practice."),(0,o.kt)("h4",{id:"authority"},"Authority"),(0,o.kt)("p",null,"The Authority is used to denote which underlying protocol/standard the URI is part of. Usually, during URI resolution, the Polywrap Client will have at least one URI Resolver for each Authority used."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ens/")," for resolving ENS domains"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ipfs/")," for resolving IPFS content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fs/")," for resolving content on the local filesystem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http/")," for resolving content via HTTP")),(0,o.kt)("h4",{id:"path"},"Path"),(0,o.kt)("p",null,"This is simply everything that comes after the Authority, and defines the unique resource we are trying to resolve."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.domain.eth")," for an ENS domain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QmaLbZnnnHbcRRo3wNBQ2MhugmBGL9R2YYeBvj6Nk2QumP")," for an IPFS file/directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./build")," for a local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"example.com/my-wrapper.wasm")," for a Wrap downloadable over HTTP")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ens/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs/")," URI resolution is supported in all Polywrap clients by default. Adding custom URI resolvers is possible. More documentation on how to do this will be released soon.")))}d.isMDXComponent=!0}}]);