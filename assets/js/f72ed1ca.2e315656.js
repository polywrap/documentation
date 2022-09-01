(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(181)),o=t(186),c=t(187),l=["components"],s={id:"env-variables",title:"Environmental variables"},p={unversionedId:"quick-start/env-variables",id:"quick-start/env-variables",isDocsHomePage:!1,title:"Environmental variables",description:"Wrapper developers can declare a map of environmental variables for application developers to provide.",source:"@site/docs/quick-start/env-variables.md",slug:"/quick-start/env-variables",permalink:"/quick-start/env-variables",editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/quick-start/env-variables.md",version:"current",sidebar:"docs",previous:{title:"Wrapper Schema",permalink:"/quick-start/wrapper-schema"},next:{title:"Reference Documentation",permalink:"/reference/glossary"}},u=[{value:"Schema declaration",id:"schema-declaration",children:[]},{value:"Access Env in the module",id:"access-env-in-the-module",children:[{value:"Env in plugin wrappers",id:"env-in-plugin-wrappers",children:[]},{value:"Env in wasm wrappers",id:"env-in-wasm-wrappers",children:[]}]}],v={toc:u};function b(e){var n=e.components,t=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Wrapper developers can declare a map of environmental variables for application developers to provide."),Object(i.b)("p",null,"If you're an application developer, check out ",Object(i.b)("a",{parentName:"p",href:"./integrate-wrappers/configure-client#envs"},Object(i.b)("inlineCode",{parentName:"a"},"ClientConfig")),". If you're a wrapper developer, keep reading!"),Object(i.b)("h2",{id:"schema-declaration"},"Schema declaration"),Object(i.b)("p",null,"To use environmental variables, wrapper developers must first declare an ",Object(i.b)("inlineCode",{parentName:"p"},"Env")," type and add the ",Object(i.b)("inlineCode",{parentName:"p"},"@env")," directive to methods in the ",Object(i.b)("a",{parentName:"p",href:"./wrapper-schema"},"Wrapper Schema"),". You can learn more about the schema declarations in the ",Object(i.b)("a",{parentName:"p",href:"./wrapper-schema#environmental-variables"},"Environmental Variables")," section of the Wrapper Schema documentation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Env {\n    str: String!\n}\n\ntype Module {\n    foo(\n        arg: String!\n    ): String! @env(required: true)\n}\n")),Object(i.b)("h2",{id:"access-env-in-the-module"},"Access Env in the module"),Object(i.b)("p",null,"Environmental variables can be used in both plugin wrappers and Wasm wrappers."),Object(i.b)("h3",{id:"env-in-plugin-wrappers"},"Env in plugin wrappers"),Object(i.b)("p",null,"Plugin wrapper developers can access the ",Object(i.b)("inlineCode",{parentName:"p"},"Env")," instance as a class property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const env: Env = this.env;\n")),Object(i.b)("h3",{id:"env-in-wasm-wrappers"},"Env in wasm wrappers"),Object(i.b)("p",null,"Wasm wrapper developers can access the ",Object(i.b)("inlineCode",{parentName:"p"},"Env")," instance by accepting the ",Object(i.b)("inlineCode",{parentName:"p"},"Env")," as a second argument in their module's methods. When an application developer invokes the method, the environmental variables they set in their ",Object(i.b)("a",{parentName:"p",href:"./integrate-wrappers/configure-client#envs"},Object(i.b)("inlineCode",{parentName:"a"},"ClientConfig"))," will be provided."),Object(i.b)(o.a,{defaultValue:"as",values:[{label:"AssemblyScript",value:"as"},{label:"Rust",value:"rs"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"as",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// App developers are required to provide Env to invoke this method\nexport function methodRequireEnv(_: Args_methodRequireEnv, env: Env): Env {\n  return env;\n}\n\n// Env is optional when invoking this method\nexport function methodOptionalEnv(_: Args_methodOptionalEnv, env: Env | null): Env | null {\n  return env ? (env as Env) : null;\n}\n"))),Object(i.b)(c.a,{value:"rs",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rust"},"// App developers are required to provide Env to invoke this method\npub fn method_require_env(_: ArgsMethodRequireEnv, env: Env) -> Env {\n  env\n}\n\n// Env is optional when invoking this method\npub fn method_optional_env(args: ArgsMethodOptionalEnv, env: Option<Env>) -> Option<Env> {\n  env\n}\n")))))}b.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,d=u["".concat(o,".").concat(b)]||u[b]||v[b]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},182:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},184:function(e,n,t){"use strict";var r=t(0),a=t(185);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},185:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},186:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(184),o=t(182),c=t(58),l=t.n(c);var s=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,u=e.values,v=e.groupId,b=e.className,d=Object(i.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,h=Object(r.useState)(c),O=h[0],g=h[1],y=r.Children.toArray(e.children),j=[];if(null!=v){var w=m[v];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&g(w)}var E=function(e){var n=e.target,t=j.indexOf(n),r=y[t].props.value;g(r),null!=v&&(f(v,r),setTimeout((function(){var e,t,r,a,i,o,c,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&a<=c&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case p:var r=j.indexOf(e.target)+1;t=j[r]||j[0];break;case s:var a=j.indexOf(e.target)-1;t=j[a]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:E,onClick:E},t)}))),n?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},187:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);