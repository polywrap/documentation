(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(162)),u=["components"],c={id:"token",title:"Token"},l={unversionedId:"demos/uniswapv3/queries/token",id:"demos/uniswapv3/queries/token",isDocsHomePage:!1,title:"Token",description:"currencyEquals",source:"@site/docs/demos/uniswapv3/queries/token.md",slug:"/demos/uniswapv3/queries/token",permalink:"/demos/uniswapv3/queries/token",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/token.md",version:"current"},i=[{value:"currencyEquals",id:"currencyequals",children:[]},{value:"tokenEquals",id:"tokenequals",children:[]},{value:"tokenAmountEquals",id:"tokenamountequals",children:[]},{value:"tokenSortsBefore",id:"tokensortsbefore",children:[]},{value:"getEther",id:"getether",children:[]},{value:"getWETH",id:"getweth",children:[]},{value:"isNative",id:"isnative",children:[]},{value:"wrapToken",id:"wraptoken",children:[]},{value:"wrapAmount",id:"wrapamount",children:[]}],p={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,u);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"currencyequals"},"currencyEquals"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns true if the currencies are equivalent, false otherwise")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"currencyEquals(\n  currencyA: Currency! \n  currencyB: Currency! \n): Boolean!\n")),Object(o.b)("h3",{id:"tokenequals"},"tokenEquals"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns true if the tokens are equivalent, false otherwise")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tokenEquals(\n  tokenA: Token! \n  tokenB: Token! \n): Boolean!\n")),Object(o.b)("h3",{id:"tokenamountequals"},"tokenAmountEquals"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns true if the token amounts are equivalent, false otherwise")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tokenAmountEquals(\n  tokenAmountA: TokenAmount! \n  tokenAmountB: TokenAmount! \n): Boolean!\n")),Object(o.b)("h3",{id:"tokensortsbefore"},"tokenSortsBefore"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns true if the address of tokenA would precede the address of token B when sorted alphabetically")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tokenSortsBefore(\n  tokenA: Token! \n  tokenB: Token! \n): Boolean!\n")),Object(o.b)("h3",{id:"getether"},"getEther"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns a native token (e.g. Ether) on the specified chain")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"getNative(\n  chainId: ChainId! \n): Token!\n")),Object(o.b)("h3",{id:"getweth"},"getWETH"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns a Wrapped Ether token on the specified chain")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"getWETH(\n  chainId: ChainId! \n): Token!\n")),Object(o.b)("h3",{id:"isnative"},"isNative"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns true if the token is native (e.g. Ether), false otherwise. A token representing Ether must have an empty string in its address field.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"isNative(\n  token: Token! \n): Boolean!\n")),Object(o.b)("h3",{id:"wraptoken"},"wrapToken"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If the input token is Ether, the return value is Wrapped Ether; otherwise, the return value is the same as the input value.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"wrapToken(\n  token: Token! \n): Token!\n")),Object(o.b)("h3",{id:"wrapamount"},"wrapAmount"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If the input token amount represents an amount of Ether, the return value represents the same amount in Wrapped Ether; otherwise, the return value is the same as the input value.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"wrapAmount(\n  amount: TokenAmount! \n): TokenAmount!\n")))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var i=2;i<o;i++)u[i]=n[i];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);