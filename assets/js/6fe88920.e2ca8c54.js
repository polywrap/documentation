(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return O}));var r=n(3),a=n(8),c=(n(0),n(162)),o=["components"],i={id:"constants",title:"Constants"},l={unversionedId:"demos/uniswapv3/queries/constants",id:"demos/uniswapv3/queries/constants",isDocsHomePage:!1,title:"Constants",description:"FACTORY_ADDRESS",source:"@site/docs/demos/uniswapv3/queries/constants.md",slug:"/demos/uniswapv3/queries/constants",permalink:"/demos/uniswapv3/queries/constants",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/constants.md",version:"current"},p=[{value:"FACTORY_ADDRESS",id:"factory_address",children:[]},{value:"POOL_INIT_CODE_HASH",id:"pool_init_code_hash",children:[]},{value:"POOL_INIT_CODE_HASH_OPTIMISM",id:"pool_init_code_hash_optimism",children:[]},{value:"POOL_INIT_CODE_HASH_OPTIMISM_KOVAN",id:"pool_init_code_hash_optimism_kovan",children:[]},{value:"MIN_TICK",id:"min_tick",children:[]},{value:"MAX_TICK",id:"max_tick",children:[]},{value:"MIN_SQRT_RATIO",id:"min_sqrt_ratio",children:[]},{value:"MAX_SQRT_RATIO",id:"max_sqrt_ratio",children:[]}],s={toc:p};function O(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"factory_address"},"FACTORY_ADDRESS"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"The address of Uniswap's pool factory contract")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"FACTORY_ADDRESS(\n): String!\n")),Object(c.b)("h3",{id:"pool_init_code_hash"},"POOL_INIT_CODE_HASH"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"POOL_INIT_CODE_HASH(\n): String!\n")),Object(c.b)("h3",{id:"pool_init_code_hash_optimism"},"POOL_INIT_CODE_HASH_OPTIMISM"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"POOL_INIT_CODE_HASH_OPTIMISM(\n): String!\n")),Object(c.b)("h3",{id:"pool_init_code_hash_optimism_kovan"},"POOL_INIT_CODE_HASH_OPTIMISM_KOVAN"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"A historical artifact due to small compiler mismatch")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"POOL_INIT_CODE_HASH_OPTIMISM_KOVAN(\n): String!\n")),Object(c.b)("h3",{id:"min_tick"},"MIN_TICK"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Smallest valid tick index in a pool")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"MIN_TICK(\n): Int32!\n")),Object(c.b)("h3",{id:"max_tick"},"MAX_TICK"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Largest valid tick index in a pool")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"MAX_TICK(\n): Int32!\n")),Object(c.b)("h3",{id:"min_sqrt_ratio"},"MIN_SQRT_RATIO"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Smallest valid sqrtRatioX96 in a pool")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"MIN_SQRT_RATIO(\n): BigInt!\n")),Object(c.b)("h3",{id:"max_sqrt_ratio"},"MAX_SQRT_RATIO"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Largest valid sqrtRatioX96 in a pool")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"MAX_SQRT_RATIO(\n): BigInt!\n")))}O.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return _}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),O=s(n),b=r,_=O["".concat(o,".").concat(b)]||O[b]||u[b]||c;return n?a.a.createElement(_,i(i({ref:t},p),{},{components:n})):a.a.createElement(_,i({ref:t},p))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);