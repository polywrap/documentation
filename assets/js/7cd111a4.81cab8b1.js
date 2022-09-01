(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),o=(a(0),a(180)),u=["components"],c={id:"trade",title:"Trade"},i={unversionedId:"demos/uniswapv3/queries/trade",id:"demos/uniswapv3/queries/trade",isDocsHomePage:!1,title:"Trade",description:"createTradeExactIn",source:"@site/docs/demos/uniswapv3/queries/trade.md",slug:"/demos/uniswapv3/queries/trade",permalink:"/demos/uniswapv3/queries/trade",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/demos/uniswapv3/queries/trade.md",version:"current"},d=[{value:"createTradeExactIn",id:"createtradeexactin",children:[]},{value:"createTradeExactOut",id:"createtradeexactout",children:[]},{value:"createTradeFromRoute",id:"createtradefromroute",children:[]},{value:"createTradeFromRoutes",id:"createtradefromroutes",children:[]},{value:"createUncheckedTrade",id:"createuncheckedtrade",children:[]},{value:"createUncheckedTradeWithMultipleRoutes",id:"createuncheckedtradewithmultipleroutes",children:[]},{value:"tradeInputAmount",id:"tradeinputamount",children:[]},{value:"tradeOutputAmount",id:"tradeoutputamount",children:[]},{value:"tradeExecutionPrice",id:"tradeexecutionprice",children:[]},{value:"tradePriceImpact",id:"tradepriceimpact",children:[]},{value:"tradeMinimumAmountOut",id:"trademinimumamountout",children:[]},{value:"tradeMaximumAmountIn",id:"trademaximumamountin",children:[]},{value:"tradeWorstExecutionPrice",id:"tradeworstexecutionprice",children:[]},{value:"bestTradeExactIn",id:"besttradeexactin",children:[]},{value:"bestTradeExactOut",id:"besttradeexactout",children:[]}],p={toc:d};function s(e){var t=e.components,a=Object(r.a)(e,u);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"createtradeexactin"},"createTradeExactIn"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Constructs an exact in trade with the given amount in and route")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createTradeExactIn(\n  tradeRoute: TradeRoute! # The route of the exact in trade and the amount being passed in\n): Trade!\n")),Object(o.b)("h3",{id:"createtradeexactout"},"createTradeExactOut"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Constructs an exact out trade with the given amount out and route")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createTradeExactOut(\n  tradeRoute: TradeRoute! # The route of the exact out trade and the amount returned\n): Trade!\n")),Object(o.b)("h3",{id:"createtradefromroute"},"createTradeFromRoute"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Constructs a trade by simulating swaps through the given route")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createTradeFromRoute(\n  tradeRoute: TradeRoute! # The route to swap through and the amount specified, either input or output, depending on the trade type\n  tradeType: TradeType! # Whether the trade is an exact input or exact output swap\n): Trade!\n")),Object(o.b)("h3",{id:"createtradefromroutes"},"createTradeFromRoutes"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Constructs a trade by simulating swaps through the given routes")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createTradeFromRoutes(\n  tradeRoutes: TradeRoute[]! # The routes to swap through and how much of the amount should be routed through each\n  tradeType: TradeType! # Whether the trade is an exact input or exact output swap\n): Trade!\n")),Object(o.b)("h3",{id:"createuncheckedtrade"},"createUncheckedTrade"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Creates a trade without computing the result of swapping through the route. Useful when you have simulated the trade elsewhere and do not have any tick data")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createUncheckedTrade(\n  swap: TradeSwap! # The route to swap through, the amount being passed in, and the amount returned when the trade is executed\n  tradeType: TradeType! # The type of the trade, either exact in or exact out\n): Trade!\n")),Object(o.b)("h3",{id:"createuncheckedtradewithmultipleroutes"},"createUncheckedTradeWithMultipleRoutes"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Creates a trade without computing the result of swapping through the routes. Useful when you have simulated the trade elsewhere and do not have any tick data")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createUncheckedTradeWithMultipleRoutes(\n  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed\n  tradeType: TradeType! # The type of the trade, either exact in or exact out\n): Trade!\n")),Object(o.b)("h3",{id:"tradeinputamount"},"tradeInputAmount"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The input amount for the trade assuming no slippage")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeInputAmount(\n  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed\n): TokenAmount!\n")),Object(o.b)("h3",{id:"tradeoutputamount"},"tradeOutputAmount"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The output amount for the trade assuming no slippage")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeOutputAmount(\n  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed\n): TokenAmount!\n")),Object(o.b)("h3",{id:"tradeexecutionprice"},"tradeExecutionPrice"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The price expressed in terms of output amount/input amount")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeExecutionPrice(\n  inputAmount: TokenAmount! # The trade input amount, e.g. from Trade object or tradeInputAmount(...)\n  outputAmount: TokenAmount! # The trade output amount, e.g. from Trade object or tradeOutputAmount(...)\n): Price!\n")),Object(o.b)("h3",{id:"tradepriceimpact"},"tradePriceImpact"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Returns the percent difference between the route's mid price and the price impact")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradePriceImpact(\n  swaps: TradeSwap[]! # The routes to swap through, the amounts being passed in, and the amounts returned when the trade is executed\n  outputAmount: TokenAmount! # The trade output amount, e.g. from Trade object or tradeOutputAmount(...)\n): Fraction!\n")),Object(o.b)("h3",{id:"trademinimumamountout"},"tradeMinimumAmountOut"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Get the minimum amount that must be received from the trade for the given slippage tolerance")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeMinimumAmountOut(\n  slippageTolerance: String! # The tolerance of unfavorable slippage from the execution price of this trade; a decimal number between 0 and 1 (e.g. '0.03') that represents a percentage\n  amountOut: TokenAmount! # The output amount of the trade, before slippage, e.g. from Trade object or tradeOutputAmount(...)\n  tradeType: TradeType! # The type of the trade, either exact in or exact out\n): TokenAmount!\n")),Object(o.b)("h3",{id:"trademaximumamountin"},"tradeMaximumAmountIn"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Get the maximum amount in that can be spent via the trade for the given slippage tolerance")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeMaximumAmountIn(\n  slippageTolerance: String! # The tolerance of unfavorable slippage from the execution price of this trade; a decimal number between 0 and 1 (e.g. '0.03') that represents a percentage\n  amountIn: TokenAmount! # The input amount of the trade, before slippage, e.g. from Trade object or tradeInputAmount(...)\n  tradeType: TradeType! # The type of the trade, either exact in or exact out\n): TokenAmount!\n")),Object(o.b)("h3",{id:"tradeworstexecutionprice"},"tradeWorstExecutionPrice"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Return the execution price after accounting for slippage tolerance")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"tradeWorstExecutionPrice(\n  trade: Trade! # Trade for which to calculate execution price\n  slippageTolerance: String! # The allowed tolerated slippage\n): Price!\n")),Object(o.b)("h3",{id:"besttradeexactin"},"bestTradeExactIn"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Given a list of pools, and a fixed amount in, returns the top ",Object(o.b)("inlineCode",{parentName:"em"},"maxNumResults")," trades that go from an input token\namount to an output token, making at most ",Object(o.b)("inlineCode",{parentName:"em"},"maxHops")," hops.\nNote this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting\nthe amount in among multiple routes.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"bestTradeExactIn(\n  pools: Pool[]! # The pools to consider in finding the best trade\n  amountIn: TokenAmount! # Exact amount of input currency to spend\n  tokenOut: Token! # The desired currency out\n  options: BestTradeOptions # Options used when determining the best trade\n): Trade[]!\n")),Object(o.b)("h3",{id:"besttradeexactout"},"bestTradeExactOut"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"similar to bestTradeExactIn(...) but instead targets a fixed output amount\ngiven a list of pools, and a fixed amount out, returns the top ",Object(o.b)("inlineCode",{parentName:"em"},"maxNumResults")," trades that go from an input token\nto an output token amount, making at most ",Object(o.b)("inlineCode",{parentName:"em"},"maxHops")," hops\nnote this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting\nthe amount in among multiple routes.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"bestTradeExactOut(\n  pools: Pool[]! # The pools to consider in finding the best trade\n  tokenIn: Token! # The currency to spend\n  amountOut: TokenAmount! # The desired currency amount out\n  options: BestTradeOptions # Options used when determining the best trade\n): Trade[]!\n")))}s.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(a),l=n,b=s["".concat(u,".").concat(l)]||s[l]||m[l]||o;return a?r.a.createElement(b,c(c({ref:t},d),{},{components:a})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,u=new Array(o);u[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var d=2;d<o;d++)u[d]=a[d];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);