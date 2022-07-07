(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{162:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(o),b=n,h=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return o?r.a.createElement(h,i(i({ref:t},c),{},{components:o})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},91:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return s}));var n=o(3),r=o(8),a=(o(0),o(162)),l=["components"],i={id:"pool",title:"Pool"},p={unversionedId:"demos/uniswapv3/queries/pool",id:"demos/uniswapv3/queries/pool",isDocsHomePage:!1,title:"Pool",description:"createPool",source:"@site/docs/demos/uniswapv3/queries/pool.md",slug:"/demos/uniswapv3/queries/pool",permalink:"/demos/uniswapv3/queries/pool",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/pool.md",version:"current"},c=[{value:"createPool",id:"createpool",children:[]},{value:"getPoolAddress",id:"getpooladdress",children:[]},{value:"poolInvolvesToken",id:"poolinvolvestoken",children:[]},{value:"poolToken0Price",id:"pooltoken0price",children:[]},{value:"poolToken1Price",id:"pooltoken1price",children:[]},{value:"poolPriceOf",id:"poolpriceof",children:[]},{value:"poolChainId",id:"poolchainid",children:[]},{value:"getPoolOutputAmount",id:"getpooloutputamount",children:[]},{value:"getPoolInputAmount",id:"getpoolinputamount",children:[]},{value:"getPoolTickSpacing",id:"getpooltickspacing",children:[]}],u={toc:c};function s(e){var t=e.components,o=Object(r.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"createpool"},"createPool"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Constructs and validates a Pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"createPool(\n  tokenA: Token! # The first token of the pool, irrespective of sort order\n  tokenB: Token! # The second token of the pool, irrespective of sort order\n  fee: FeeAmount! # Fee amount for swaps through the pool\n  sqrtRatioX96: BigInt! # Encoded representation of current swap price\n  liquidity: BigInt! # The total liquidity available in the pool\n  tickCurrent: Int32! # Current pool tick\n  ticks: Tick[] # A validated list of all ticks in the pool\n): Pool!\n")),Object(a.b)("h3",{id:"getpooladdress"},"getPoolAddress"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the Ethereum address of the Pool contract")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"getPoolAddress(\n  tokenA: Token! # The first token of the pool, irrespective of sort order\n  tokenB: Token! # The second token of the pool, irrespective of sort order\n  fee: FeeAmount! # The fee tier of the pool\n  initCodeHashManualOverride: String # Override the init code hash used to compute the pool address if necessary\n): String!\n")),Object(a.b)("h3",{id:"poolinvolvestoken"},"poolInvolvesToken"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns true if the token is in the Pool (i.e. pool.token0 or pool.token1)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"poolInvolvesToken(\n  pool: Pool! \n  token: Token! \n): Boolean!\n")),Object(a.b)("h3",{id:"pooltoken0price"},"poolToken0Price"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"poolToken0Price(\n  token0: Token! # The first token of the pool, i.e. pool.token0\n  token1: Token! # The second token of the pool, i.e. pool.token1\n  sqrtRatioX96: BigInt! # Encoded representation of the current price in the pool, i.e. pool.sqrtRatioX96\n): Price!\n")),Object(a.b)("h3",{id:"pooltoken1price"},"poolToken1Price"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"poolToken1Price(\n  token0: Token! # The first token of the pool, i.e. pool.token0\n  token1: Token! # The second token of the pool, i.e. pool.token1\n  sqrtRatioX96: BigInt! # Encoded representation of the current price in the pool, i.e. pool.sqrtRatioX96\n): Price!\n")),Object(a.b)("h3",{id:"poolpriceof"},"poolPriceOf"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the price of the given token in terms of the other token in the pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"poolPriceOf(\n  pool: Pool! # Pool that involves the token\n  token: Token! # The token to return the price of\n): Price!\n")),Object(a.b)("h3",{id:"poolchainid"},"poolChainId"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the chain ID of the tokens in the pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"poolChainId(\n  pool: Pool! \n): ChainId!\n")),Object(a.b)("h3",{id:"getpooloutputamount"},"getPoolOutputAmount"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"getPoolOutputAmount(\n  pool: Pool! # Pool that involves input and output tokens\n  inputAmount: TokenAmount! # The input amount for which to quote the output amount\n  sqrtPriceLimitX96: BigInt # The Q64.96 sqrt price limit\n): PoolChangeResult!\n")),Object(a.b)("h3",{id:"getpoolinputamount"},"getPoolInputAmount"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"getPoolInputAmount(\n  pool: Pool! # Pool that involves input and output tokens\n  outputAmount: TokenAmount! # The output amount for which to quote the input amount\n  sqrtPriceLimitX96: BigInt # The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap.\n): PoolChangeResult!\n")),Object(a.b)("h3",{id:"getpooltickspacing"},"getPoolTickSpacing"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Returns the tick spacing of ticks in the pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"getPoolTickSpacing(\n  pool: Pool! \n): Int32!\n")))}s.isMDXComponent=!0}}]);