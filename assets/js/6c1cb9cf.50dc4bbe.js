(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),i=(a(0),a(180)),p=["components"],o={id:"plugin-vs-wasm-wrapper",title:"Should you build a Wasm or Plugin Wrapper?"},s={unversionedId:"concepts/plugin-vs-wasm-wrapper",id:"concepts/plugin-vs-wasm-wrapper",isDocsHomePage:!1,title:"Should you build a Wasm or Plugin Wrapper?",description:'Everything created via the Polywrap development platform is a "wrapper". Developers can invoke WebAssembly (Wasm) wrappers and plugin wrappers in the same way, without concern for how a particular bit of functionality has been implemented.',source:"@site/docs/concepts/plugin-vs-wasm-wrapper.md",slug:"/concepts/plugin-vs-wasm-wrapper",permalink:"/concepts/plugin-vs-wasm-wrapper",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/plugin-vs-wasm-wrapper.md",version:"current",sidebar:"docs",previous:{title:"URI redirects",permalink:"/concepts/understanding-uri-redirects"},next:{title:"Supported Wasm Languages",permalink:"/concepts/wasm-languages"}},l=[{value:"Shared benefits",id:"shared-benefits",children:[]},{value:"Benefits of building Wasm wrappers",id:"benefits-of-building-wasm-wrappers",children:[]},{value:"Benefits of building plugin wrappers",id:"benefits-of-building-plugin-wrappers",children:[]},{value:"A hybrid approach",id:"a-hybrid-approach",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,p);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Everything created via the Polywrap development platform is a "wrapper". Developers can invoke WebAssembly (Wasm) wrappers and plugin wrappers in the same way, without concern for how a particular bit of functionality has been implemented.'),Object(i.b)("p",null,"However, Wasm and plugin wrappers each have their strengths and a set of use cases for which they are ideally suited. This page offers some guidance for recognizing when to build a Wasm wrapper, when you need to build a plugin wrapper, and how you can combine both in new projects."),Object(i.b)("h3",{id:"shared-benefits"},"Shared benefits"),Object(i.b)("p",null,"Both Wasm and plugin wrappers are interoperable and endlessly composable. When working with interfaces, the invoking wrapper may not even know which type of wrapper will be invoked at runtime."),Object(i.b)("h3",{id:"benefits-of-building-wasm-wrappers"},"Benefits of building Wasm wrappers"),Object(i.b)("p",null,"It is ideal to encapsulate as much business logic as possible in a Wasm wrapper. You get to take advantage of all the benefits of Wasm wrappers, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cross-language support"),Object(i.b)("li",{parentName:"ul"},"Enhanced security"),Object(i.b)("li",{parentName:"ul"},"Smaller app sizes"),Object(i.b)("li",{parentName:"ul"},"Increased performance"),Object(i.b)("li",{parentName:"ul"},"Runtime package updates")),Object(i.b)("h3",{id:"benefits-of-building-plugin-wrappers"},"Benefits of building plugin wrappers"),Object(i.b)("p",null,"Plugin wrappers are sometimes necessary because Wasm modules cannot access system-level capabilities. For example, as explained in the ",Object(i.b)("a",{parentName:"p",href:"https://webassembly.github.io/spec/core/intro/introduction.html#security-considerations"},"WebAssembly documentation"),", Wasm does not support network access, filesystem access, browser interaction, or operating system calls. This limitation keeps Wasm modules incredibly secure! Plugins operate in a standard code environment where access to some or all system-level capabilities is typically allowed."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Plugins can implement interfaces. If your Wasm wrapper requires system-level capabilities, it is always better for it to depend on an interface. Plugins are written in a Polywrap Client's native language. A Wasm wrapper that directly depends on a specific plugin may also implicitly depend on a client written in the plugin's language, while a Wasm wrapper that depends on a standard interface is language-agnostic. As we work to develop standard interfaces for core plugins, we encourage Wasm wrapper developers to use them!"))),Object(i.b)("p",null,"Polywrap has developed several plugins that wrapper builders may find useful:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/http"},"HTTP Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/file-system"},"FileSystem Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/monorepo/tree/origin/packages/js/plugins/logger"},"Logger Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/integrations/tree/main/system/concurrency"},"DateTime Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/integrations/tree/main/system/cache"},"Cache Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/polywrap/integrations/tree/main/system/concurrency"},"Concurrency Plugin"))),Object(i.b)("p",null,"If you develop a new plugin, be sure to let us know!"),Object(i.b)("h3",{id:"a-hybrid-approach"},"A hybrid approach"),Object(i.b)("p",null,'If you are starting a new project, you can take a "Wasm wrapper-first" approach by following our guide to ',Object(i.b)("a",{parentName:"p",href:"https://docs.polywrap.io/guides/create-wasm-wrappers/project-setup"},'"Creating a Wasm wrapper"')),Object(i.b)("p",null,'If you have an existing SDK, you can consider an approach of first "wrapping" the SDK as a plugin wrapper and then gradually moving each interface that your SDK provides to a Wasm wrapper. The example of ',Object(i.b)("a",{parentName:"p",href:"https://github.com/polywrap/integrations/tree/main/uniswapv3/wrapper"},"migrating the Uniswap v3 SDK to a wrapper")," demonstrates how to think about this migration process while preserving feature parity and code quality."),Object(i.b)("p",null,"If you have any questions about the best approach to take for your project, you are welcome to ask a question in the ",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/bGsqQrNhqd"},"Polywrap Discord"),"."))}u.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||i;return a?n.a.createElement(d,o(o({ref:t},l),{},{components:a})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);