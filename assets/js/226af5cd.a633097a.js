(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(180)),c=["components"],i={id:"build",title:"Build"},l={unversionedId:"reference/cli/commands/build",id:"reference/cli/commands/build",isDocsHomePage:!1,title:"Build",description:"`",source:"@site/docs/reference/cli/commands/build.md",slug:"/reference/cli/commands/build",permalink:"/reference/cli/commands/build",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/reference/cli/commands/build.md",version:"current",sidebar:"docs",previous:{title:"Codegen",permalink:"/reference/cli/commands/codegen"},next:{title:"Test",permalink:"/reference/cli/commands/test"}},u=[],p={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'Usage: polywrap build|b [options]\n\nBuild Polywrap Projects (type: interface, wasm)\n\nOptions:\n  -m, --manifest-file <path>         Path to the Polywrap Build manifest file\n                                     (default: polywrap.yaml | polywrap.yml)\n  -o, --output-dir <path>            Output directory for build results\n                                     (default: ./build)\n  -c, --client-config <config-path>  Add custom configuration to the\n                                     PolywrapClient\n  -n, --no-codegen                   Skip code generation\n  -s, --strategy <strategy>          Strategy to use for building the wrapper\n                                     (default: "vm")\n  -w, --watch                        Automatically rebuild when changes are\n                                     made (default: false)\n  -v, --verbose                      Verbose output (default: false)\n  -q, --quiet                        Suppress output (default: false)\n  -h, --help                         display help for command\n')))}s.isMDXComponent=!0}}]);