(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),o=(r(0),r(166)),i=["components"],p={id:"project-setup",title:"Project setup"},c={unversionedId:"quick-start/create-wasm-wrappers/tutorial/project-setup",id:"quick-start/create-wasm-wrappers/tutorial/project-setup",isDocsHomePage:!1,title:"Project setup",description:"If you're looking to find out what it takes to build a Polywrap Wasm wrapper, you've come to the right place! This guide will help you understand Polywrap's core concepts. If you haven't checked out our Start Here section yet, we recommend visiting that section first.",source:"@site/docs/quick-start/create-wasm-wrappers/tutorial/project-setup.md",slug:"/quick-start/create-wasm-wrappers/tutorial/project-setup",permalink:"/quick-start/create-wasm-wrappers/tutorial/project-setup",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-wasm-wrappers/tutorial/project-setup.md",version:"current",sidebar:"docs",previous:{title:"Get Wrapper Metadata",permalink:"/quick-start/create-js-app/get-wrapper-metadata"},next:{title:"The Polywrap project folder",permalink:"/quick-start/create-wasm-wrappers/tutorial/project-folder"}},s=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",children:[]},{value:"<strong>Create your project</strong>",id:"create-your-project",children:[]},{value:"<strong>Installation</strong>",id:"installation",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you're looking to find out what it takes to build a Polywrap Wasm wrapper, you've come to the right place! This guide will help you understand Polywrap's core concepts. If you haven't checked out our ",Object(o.b)("a",{parentName:"p",href:"../../../concepts/what-is-polywrap"},"Start Here")," section yet, we recommend visiting that section first."),Object(o.b)("p",null,"In this guide, we'll download a simple but complete project to help us get started. We'll look at the different folders and files that make up a Polywrap wrapper, such as the GraphQL schema and WebAssembly implementations. Then, we'll dive in and add more code to these existing files to expand the functionality of our wrapper. Finally, we'll learn about the different ways you can build and deploy your wrapper so that other devs can integrate your wrapper into their own apps!"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This guide will make use of a simple smart contract written in Solidity. We'll be adding a few functions to it and then use a script to deploy the contract to a test environment where we'll interact with it using our Polywrap wrapper."),Object(o.b)("p",{parentName:"div"},"NB: No Solidity or smart contract knowledge is required to use the guide!"),Object(o.b)("p",{parentName:"div"},"If you want to skip ahead to see the resulting code of this guide, visit our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/polywrap/demos/tree/main/simple-storage/wrapper-completed"},"Demos repository"),"."))),Object(o.b)("p",null,"If at any time in this process you get stuck or have questions, please reach out to us on ",Object(o.b)("a",{parentName:"p",href:"https://discord.com/invite/Z5m88a5qWu"},"Discord"),"."),Object(o.b)("h2",{id:"prerequisites"},Object(o.b)("strong",{parentName:"h2"},"Prerequisites")),Object(o.b)("p",null,"You'll need the following installed before building your wrapper:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nvm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docker-compose"))),Object(o.b)("p",null,"You'll be using ",Object(o.b)("a",{parentName:"p",href:"https://www.assemblyscript.org/"},"AssemblyScript")," to implement your wrapper's logic. AssemblyScript compiles to ",Object(o.b)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For now, AssemblyScript and Rust are the only languages with which you can implement your wrapper. In the future, we will support additional languages that compile to WebAssembly, such as Go."),Object(o.b)("p",{parentName:"div"},"If you have experience programming in TypeScript, you'll feel at home with AssemblyScript since the language's syntax is very similar."),Object(o.b)("p",{parentName:"div"},"\ud83d\udc4b This guide is meant for those who want to build and deploy their own wrappers. If you're interested in integrating deployed wrappers into your own app, see our ",Object(o.b)("a",{parentName:"p",href:"../../create-js-app/install-client"},"Integrate into a JS App")," guide."))),Object(o.b)("h2",{id:"create-your-project"},Object(o.b)("strong",{parentName:"h2"},"Create your project")),Object(o.b)("p",null,"Let's begin by downloading the Polywrap demos repository, which contains the SimpleStorage Wasm wrapper we will be using in this guide:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/polywrap/demos.git\n")),Object(o.b)("p",null,"From the root of this new directory, navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"simple-storage/wrapper/assemblyscript"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The best way to start a new wrapper project is with a project template generated using our CLI."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npx polywrap create api assemblyscript <project-name>\n")),Object(o.b)("p",{parentName:"div"},"Where ",Object(o.b)("inlineCode",{parentName:"p"},"<project-name>")," is replaced with a custom name of your choice. For example ",Object(o.b)("inlineCode",{parentName:"p"},"my-wrapper"),"."),Object(o.b)("p",{parentName:"div"},"After running this command, you'll see a new folder appear with the custom name you've chosen. The folder will contain everything you need to get started!"))),Object(o.b)("h2",{id:"installation"},Object(o.b)("strong",{parentName:"h2"},"Installation")),Object(o.b)("p",null,"Let's ensure all of your project's dependencies are installed. From inside the project's directory, simply run:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nvm install && nvm use")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn"))),Object(o.b)("p",null,"The Polywrap CLI is now installed locally to your project's directory. Going forward we'll use this local installation by running ",Object(o.b)("inlineCode",{parentName:"p"},"npx polywrap"),"."),Object(o.b)("p",null,"We recommend not installing the ",Object(o.b)("inlineCode",{parentName:"p"},"polywrap")," package globally to avoid future version conflicts, and maximize reproducibility for the other developers you're working with."),Object(o.b)("p",null,"Let's head over to the next section to see what's in this new directory!"))}u.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(m,p(p({ref:t},s),{},{components:r})):n.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);