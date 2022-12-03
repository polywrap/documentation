(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),o=(r(0),r(180)),c=["components"],i={id:"create",title:"Create"},p={unversionedId:"reference/cli/commands/create",id:"reference/cli/commands/create",isDocsHomePage:!1,title:"Create",description:"`",source:"@site/docs/reference/cli/commands/create.md",slug:"/reference/cli/commands/create",permalink:"/reference/cli/commands/create",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/reference/cli/commands/create.md",version:"current",sidebar:"docs",previous:{title:"Polywrap CLI",permalink:"/reference/cli/polywrap-cli"},next:{title:"Codegen",permalink:"/reference/cli/commands/codegen"}},l=[],s={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Usage: polywrap create|c [options] [command]\n\nCreate New Projects\n\nOptions:\n  -h, --help                          display help for command\n\nCommands:\n  wasm [options] <language> <name>    Create a Polywrap wasm wrapper langs:\n                                      assemblyscript, rust, interface\n  app [options] <language> <name>     Create a Polywrap application langs:\n                                      typescript-node, typescript-react\n  plugin [options] <language> <name>  Create a Polywrap plugin langs:\n                                      typescript\n  help [command]                      display help for command\n")))}u.isMDXComponent=!0},180:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?a.a.createElement(d,i(i({ref:n},l),{},{components:r})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);