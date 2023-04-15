"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[5223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"create-js-plugin",title:"Plugin an existing JS SDK"},l=void 0,o={unversionedId:"tutorials/create-plugin-wrappers/create-js-plugin",id:"tutorials/create-plugin-wrappers/create-js-plugin",title:"Plugin an existing JS SDK",description:"Introduction",source:"@site/docs/tutorials/create-plugin-wrappers/create-js-plugin.md",sourceDirName:"tutorials/create-plugin-wrappers",slug:"/tutorials/create-plugin-wrappers/create-js-plugin",permalink:"/tutorials/create-plugin-wrappers/create-js-plugin",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-plugin-wrappers/create-js-plugin.md",tags:[],version:"current",frontMatter:{id:"create-js-plugin",title:"Plugin an existing JS SDK"},sidebar:"docs",previous:{title:"Configure Polywrap deployment pipeline",permalink:"/tutorials/build-and-deploy-wasm-wrappers/deploy-pipeline"},next:{title:"Configure a Plugin Manifest",permalink:"/tutorials/create-plugin-wrappers/plugin-manifest"}},p={},s=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"<strong>Getting started</strong>",id:"getting-started",level:2},{value:"<strong>Installation</strong>",id:"installation",level:2},{value:"<strong>Overview of project files</strong>",id:"overview-of-project-files",level:2},{value:"<strong><code>polywrap.yaml</code></strong>",id:"polywrapyaml",level:3},{value:"<strong><code>schema.graphql</code></strong>",id:"schemagraphql",level:3},{value:"<strong><code>src/index.ts</code></strong>",id:"srcindexts",level:3},{value:"<strong>Building the plugin</strong>",id:"building-the-plugin",level:2},{value:"<strong>Example Plugins</strong>",id:"example-plugins",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},(0,a.kt)("strong",{parentName:"h2"},"Introduction")),(0,a.kt)("p",null,"In this guide, we'll walk you through creating your own JavaScript-based plugin wrapper that can be added to the JavaScript Polywrap Client."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Plugins do not retain all of Polywrap's benefits. We recommend re-writing your existing JavaScript SDKs as Wasm wrappers if possible.")),(0,a.kt)("p",null,"As always, if you need any help, message us on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/Z5m88a5qWu"},"Discord"),"!"),(0,a.kt)("h2",{id:"prerequisites"},(0,a.kt)("strong",{parentName:"h2"},"Prerequisites")),(0,a.kt)("p",null,"You'll need the following installed before building your plugin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nvm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,a.kt)("p",null,"You'll be using ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," to implement your Polywrap plugin."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the future, TypeScript will be one of many supported languages for implementing plugins. As more Polywrap Clients are released in various languages, implementing plugins in those languages will be supported as well.")),(0,a.kt)("h2",{id:"getting-started"},(0,a.kt)("strong",{parentName:"h2"},"Getting started")),(0,a.kt)("p",null,"To get started, use the following command to spin up a project folder for your plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx polywrap create plugin typescript <project-name>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<project-name>")," is replaced with a custom name of your choosing. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"my-plugin"),"."),(0,a.kt)("p",null,"Once complete, you'll see a new folder appear, named after the custom name you've chosen. Please navigate into this new directory (using ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," for example)."),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("strong",{parentName:"h2"},"Installation")),(0,a.kt)("p",null,"Let's ensure all of your project's dependencies are installed. From inside your project's directory, simply run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nvm install && nvm use")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,a.kt)("h2",{id:"overview-of-project-files"},(0,a.kt)("strong",{parentName:"h2"},"Overview of project files")),(0,a.kt)("p",null,"Your project should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"polywrap.yaml           # Plugin Manifest\nsrc/\n|   index.ts            # Entry File\n\u2502   schema.graphql      # Schema\n")),(0,a.kt)("h3",{id:"polywrapyaml"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"polywrap.yaml"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"./plugin-manifest"},"Plugin Project Manifest")," describes the layout of a plugin."),(0,a.kt)("h3",{id:"schemagraphql"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"schema.graphql"))),(0,a.kt)("p",null,"Each wrapper project has a ",(0,a.kt)("a",{parentName:"p",href:"../wrapper-schema"},"Wrapper Schema"),".\nThe schema defines the wrapper's dependencies, methods, and custom types.\nIn short, it's an interface describing how to use the wrapper."),(0,a.kt)("h3",{id:"srcindexts"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"src/index.ts"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file exports the wrapper's method's implementations, which contain the plugin's logic.\nLearn more about the plugin's code architecture by reading ",(0,a.kt)("a",{parentName:"p",href:"./plugin-architecture"},"Plugin Architecture")),(0,a.kt)("h2",{id:"building-the-plugin"},(0,a.kt)("strong",{parentName:"h2"},"Building the plugin")),(0,a.kt)("p",null,"To build your plugin, all you need is the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yarn build # alias for "npx polywrap build"\n')),(0,a.kt)("h2",{id:"example-plugins"},(0,a.kt)("strong",{parentName:"h2"},"Example Plugins")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/understanding-plugins"},"Understanding Plugins")," for some examples of Plugins used within the default configuration of the Polywrap Client."))}d.isMDXComponent=!0}}]);