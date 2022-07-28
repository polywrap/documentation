(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(8),a=(n(0),n(178)),i=["components"],p={id:"common-types",title:"Common Types"},c={unversionedId:"demos/uniswapv3/types/common-types",id:"demos/uniswapv3/types/common-types",isDocsHomePage:!1,title:"Common Types",description:"BestTradeOptions",source:"@site/docs/demos/uniswapv3/types/commonTypes.md",slug:"/demos/uniswapv3/types/common-types",permalink:"/demos/uniswapv3/types/common-types",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/types/commonTypes.md",version:"current"},u=[{value:"BestTradeOptions",id:"besttradeoptions",children:[]},{value:"Currency",id:"currency",children:[]},{value:"FeeOptions",id:"feeoptions",children:[]},{value:"Fraction",id:"fraction",children:[]},{value:"MethodParameters",id:"methodparameters",children:[]},{value:"MintAmounts",id:"mintamounts",children:[]},{value:"PermitOptions",id:"permitoptions",children:[]},{value:"Pool",id:"pool",children:[]},{value:"Position",id:"position",children:[]},{value:"Price",id:"price",children:[]},{value:"Route",id:"route",children:[]},{value:"SwapOptions",id:"swapoptions",children:[]},{value:"Tick",id:"tick",children:[]},{value:"Token",id:"token",children:[]},{value:"TokenAmount",id:"tokenamount",children:[]},{value:"Trade",id:"trade",children:[]},{value:"TradeSwap",id:"tradeswap",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"besttradeoptions"},"BestTradeOptions"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Options used when determining the best trade in bestTradeExactIn(...) and bestTradeExactOut(...)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type BestTradeOptions {\n  maxNumResults: UInt32 # Maximum number of results to return\n  maxHops: UInt32 # Maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pool\n}\n")),Object(a.b)("h3",{id:"currency"},"Currency"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Describes a token")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Currency {\n  decimals: UInt8! # Token decimals\n  symbol: String # Token symbol\n  name: String # Token name\n}\n")),Object(a.b)("h3",{id:"feeoptions"},"FeeOptions"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Fee configuration for encodeUnwrapWETH9(...) and encodeSweepToken(...)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type FeeOptions {\n  fee: String! # The percent of the output that will be taken as a fee.\n  recipient: String! # The recipient of the fee.\n}\n")),Object(a.b)("h3",{id:"fraction"},"Fraction"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Represents fraction, typically a percent.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Fraction {\n  numerator: BigInt! # Numerator of fraction\n  denominator: BigInt! # Denominator of fraction\n  quotient: String! # A decimal string representation of the fraction\n}\n")),Object(a.b)("h3",{id:"methodparameters"},"MethodParameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Transaction calldata and an ether value to be sent with the transaction")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type MethodParameters {\n  calldata: String! # The hex encoded calldata to perform the given operation\n  value: String! # The amount of ether (wei) to send in hex.\n}\n")),Object(a.b)("h3",{id:"mintamounts"},"MintAmounts"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"The minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type MintAmounts {\n  amount0: BigInt! # Amount of the first token in the pool\n  amount1: BigInt! # Amount of the second token in the pool\n}\n")),Object(a.b)("h3",{id:"permitoptions"},"PermitOptions"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Parameters for a permit allowing the transfer of tokens. Either amount and deadline OR nonce and expiry are required.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type PermitOptions {\n  v: PermitV! \n  r: String! \n  s: String! \n  amount: BigInt \n  deadline: BigInt \n  nonce: BigInt \n  expiry: BigInt \n}\n")),Object(a.b)("h3",{id:"pool"},"Pool"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A liquidity pool involving two tokens which can be exchanged for a price determined by a price curve and market dynamics")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Pool {\n  token0: Token! # The first token of the pool\n  token1: Token! # The second token of the pool\n  fee: FeeAmount! # The fee amount liquidity providers receive as a share of swaps made in the pool\n  sqrtRatioX96: BigInt! # An encoded representation of the current swap price\n  liquidity: BigInt! # The total liquidity available in the pool\n  tickCurrent: Int32! # The current tick\n  tickDataProvider: Tick[]! # A list of all ticks in the pool\n  token0Price: Price! # The current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0\n  token1Price: Price! # The current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1\n}\n")),Object(a.b)("h3",{id:"position"},"Position"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A liquidity position between two ticks in a pool")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Position {\n  pool: Pool! # The pool on which the position is held\n  tickLower: Int32! # The lower tick, marking the lower boundary of the position\n  tickUpper: Int32! # The upper tick, marking the upper boundary of the position\n  liquidity: BigInt! # The maximum amount of liquidity received for a given amount of token0, token1, and the prices at the tick boundaries\n  token0Amount: TokenAmount! # The amount in this position of the first token of the pool\n  token1Amount: TokenAmount! # The amount in this position of the second token of the pool\n  mintAmounts: MintAmounts! # The minimum amounts that must be sent in order to mint the amount of liquidity held by the position at the current price for the pool\n  token0PriceLower: Price! # The price of token0 at the lower tick\n  token0PriceUpper: Price! # The price of token0 at the upper tick\n}\n")),Object(a.b)("h3",{id:"price"},"Price"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Represents price of a token in terms of another token. When used as a function argument, the 'price' property is ignored.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Price {\n  baseToken: Token! # The base token of the price\n  quoteToken: Token! # The quote token of the price\n  denominator: BigInt! # Amount of base token used to calculate price\n  numerator: BigInt! # Amount of quote token used to calculate price\n  price: String! # A decimal string representation of the price\n}\n")),Object(a.b)("h3",{id:"route"},"Route"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"An ordered path of pools through which a swap can occur")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Route {\n  pools: Pool[]! # A list of pools, wherein each pool in the list has a token in common with its adjacent pool(s)\n  path: Token[]! # The path of tokens that are swapped through the pools\n  input: Token! # The input token, where the route begins\n  output: Token! # The output token, where the route ends\n  midPrice: Price! # The mid price of the output token, in terms of the input token, for this route\n}\n")),Object(a.b)("h3",{id:"swapoptions"},"SwapOptions"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Configuration for creating swap transaction calldata using swapCallParameters(...)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type SwapOptions {\n  slippageTolerance: String! # How much the execution price is allowed to move unfavorably from the trade execution price.\n  recipient: String! # The account that should receive the output.\n  deadline: BigInt! # When the transaction expires, in epoch seconds.\n  inputTokenPermit: PermitOptions # The optional permit parameters for spending the input.\n  sqrtPriceLimitX96: BigInt # The optional price limit for the trade.\n  fee: FeeOptions # Optional information for taking a fee on output.\n}\n")),Object(a.b)("h3",{id:"tick"},"Tick"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A pool tick marks a section of the price curve. A liquidity provider may hold a position on a tick, rather than the full curve.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Tick {\n  index: Int32! # Tick index\n  liquidityGross: BigInt! # Gross liquidity in Pool at tick position\n  liquidityNet: BigInt! # Net liquidity in Pool at tick position\n}\n")),Object(a.b)("h3",{id:"token"},"Token"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ERC20-compliant token or Ether")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Token {\n  chainId: ChainId! # Id of chain where token exists\n  address: String! # Address of token's ERC20 contract\n  currency: Currency! # Token description\n}\n")),Object(a.b)("h3",{id:"tokenamount"},"TokenAmount"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"An amount of a token")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type TokenAmount {\n  token: Token! # Token\n  amount: BigInt! # Raw amount of the token, not adjusted for the token's decimals\n}\n")),Object(a.b)("h3",{id:"trade"},"Trade"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A trade contains the information necessary to create an on-chain exchange of tokens")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type Trade {\n  swaps: TradeSwap[]! # A list of swaps to be executed atomically, all of which must have the same input and output tokens\n  tradeType: TradeType! # Type of trade, either exact input or exact output\n  inputAmount: TokenAmount! # The total input amount (sum of input amounts in swaps)\n  outputAmount: TokenAmount! # The total output amount (sum of output amounts in swaps)\n  executionPrice: Price! # The price of the trade, in terms of the input token\n  priceImpact: Fraction! # The percent difference between the route's mid price and the price impact\n}\n")),Object(a.b)("h3",{id:"tradeswap"},"TradeSwap"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"A route, input, and output amount that compose the core elements of a trade")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type TradeSwap {\n  route: Route! # The route of the trade\n  inputAmount: TokenAmount! # The amount being passed in\n  outputAmount: TokenAmount! # The amount returned by the trade when executed\n}\n")))}s.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,h=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return n?r.a.createElement(h,p(p({ref:t},u),{},{components:n})):r.a.createElement(h,p({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);