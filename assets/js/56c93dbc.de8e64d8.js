(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(179)),c=["components"],o={id:"plugin-architecture",title:"Plugin Architecture"},l={unversionedId:"quick-start/create-plugin-wrappers/plugin-architecture",id:"quick-start/create-plugin-wrappers/plugin-architecture",isDocsHomePage:!1,title:"Plugin Architecture",description:"The architecture of a plugin wrapper's code is flexible.",source:"@site/docs/quick-start/create-plugin-wrappers/plugin-architecture.md",slug:"/quick-start/create-plugin-wrappers/plugin-architecture",permalink:"/quick-start/create-plugin-wrappers/plugin-architecture",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/create-plugin-wrappers/plugin-architecture.md",version:"current",sidebar:"docs",previous:{title:"Configure a Plugin Manifest",permalink:"/quick-start/create-plugin-wrappers/plugin-manifest"},next:{title:"Configure interfaces in the client",permalink:"/quick-start/interfaces/client-config-interfaces"}},p=[{value:"Required Exports",id:"required-exports",children:[]},{value:"TypeScript Support",id:"typescript-support",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The architecture of a plugin wrapper's code is flexible.\nStill, there are some simple requirements and best practices that may guide its code structure."),Object(i.b)("h2",{id:"required-exports"},"Required Exports"),Object(i.b)("p",null,"A plugin must export a ",Object(i.b)("inlineCode",{parentName:"p"},"PluginFactory")," to be used by the Polywrap Client.\nA ",Object(i.b)("inlineCode",{parentName:"p"},"PluginFactory")," is a function that returns a ",Object(i.b)("inlineCode",{parentName:"p"},"PluginPackageManifest")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"factory")," method that generates an instance of the plugin."),Object(i.b)("h2",{id:"typescript-support"},"TypeScript Support"),Object(i.b)("p",null,"The Polywrap CLI's ",Object(i.b)("a",{parentName:"p",href:"../../reference/cli/commands/codegen"},Object(i.b)("inlineCode",{parentName:"a"},"codegen"))," and ",Object(i.b)("a",{parentName:"p",href:"../../reference/cli/commands/build"},Object(i.b)("inlineCode",{parentName:"a"},"build"))," commands will generate a ",Object(i.b)("inlineCode",{parentName:"p"},"wrap")," folder containing useful types.\nThe generated types will save you time and energy.\nYou won't have to manually create or update your types every time you change your schema, and your code will have fewer bugs.\nYou can forget about boilerplate code and focus on your plugin's logic.\nWhile the types are not strictly required, we recommend them as a best practice."),Object(i.b)("p",null,"The generated types include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Module")," - An interface containing the methods declared in the plugin's schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Args_*")," - An interface for each method, containing the method arguments declared in the schema"),Object(i.b)("li",{parentName:"ul"},"Custom Types - An interface for each custom type declared in the schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"manifest")," - A ",Object(i.b)("inlineCode",{parentName:"li"},"PluginPackageManifest")," for the plugin (also useful for JavaScript developers!)")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example: plugin template',title:'"Example:',plugin:!0,template:!0},'import { Module, Args_sampleMethod, manifest } from "./wrap"; // imports from generated "wrap" folder\n\nimport { PluginFactory } from "@polywrap/core-js"; // plugin must export a PluginFactory\n\nexport interface SamplePluginConfig {\n  defaultValue: string;\n}\n\nexport class SamplePlugin extends Module<SamplePluginConfig> { // Plugin inherits from Module\n  constructor(config: SamplePluginConfig) {\n    super(config);\n  }\n  public sampleMethod(args: Args_sampleMethod): string { // Plugin method accepts Args_* as sole argument\n    return args.data + this.config.defaultValue;\n  }\n}\n\nexport const samplePlugin: PluginFactory<SamplePluginConfig> = ( // exported PluginFactory is used by Polywrap client\n  config: SamplePluginConfig\n) => {\n  return {\n    factory: () => new SamplePlugin(config), // factory method produces a Module\n    manifest, // imported from ./wrap\n  };\n};\n\nexport const plugin = samplePlugin; // PluginFactory is exported with name "plugin"\n')))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(g,o(o({ref:t},p),{},{components:n})):a.a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);