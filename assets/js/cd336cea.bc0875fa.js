"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[4444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),v=a,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||l;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function v(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,u]=m({queryString:t,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),h=(()=>{const e=s??p;return v({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==i&&(p(n),s(r))},v=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:v,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function E(e){const n=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function k(e){const n=(0,h.Z)();return a.createElement(E,(0,r.Z)({key:String(n)},e))}},299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(4866),o=t(5162);const i={id:"env-variables",title:"Environmental variables"},s=void 0,u={unversionedId:"concepts/env-variables",id:"concepts/env-variables",title:"Environmental variables",description:"Wrapper developers can declare a map of environmental variables for application developers to provide.",source:"@site/docs/concepts/env-variables.md",sourceDirName:"concepts",slug:"/concepts/env-variables",permalink:"/concepts/env-variables",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/concepts/env-variables.md",tags:[],version:"current",frontMatter:{id:"env-variables",title:"Environmental variables"},sidebar:"docs",previous:{title:"Wrap Schema",permalink:"/concepts/wrap-schema"},next:{title:"Plugins",permalink:"/concepts/plugins"}},c={},p=[{value:"Schema declaration",id:"schema-declaration",level:2},{value:"Access Env in the module",id:"access-env-in-the-module",level:2},{value:"Env in plugin wrappers",id:"env-in-plugin-wrappers",level:3},{value:"Env in wasm wrappers",id:"env-in-wasm-wrappers",level:3}],d={toc:p},v="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(v,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wrapper developers can declare a map of environmental variables for application developers to provide."),(0,a.kt)("p",null,"If you're an application developer, check out ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/use-wraps/configure-client#envs"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientConfig")),". If you're a wrapper developer, keep reading!"),(0,a.kt)("h2",{id:"schema-declaration"},"Schema declaration"),(0,a.kt)("p",null,"To use environmental variables, wrapper developers must first declare an ",(0,a.kt)("inlineCode",{parentName:"p"},"Env")," type and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@env")," directive to methods in the ",(0,a.kt)("a",{parentName:"p",href:"/concepts/wrap-schema"},"Wrapper Schema"),". You can learn more about the schema declarations in the ",(0,a.kt)("a",{parentName:"p",href:"/concepts/wrap-schema#environmental-variables"},"Environmental Variables")," section of the Wrapper Schema documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Env {\n  str: String!\n}\n\ntype Module {\n  foo(\n    arg: String!\n  ): String! @env(required: true)\n}\n")),(0,a.kt)("h2",{id:"access-env-in-the-module"},"Access Env in the module"),(0,a.kt)("p",null,"Environmental variables can be used in both plugin wrappers and Wasm wrappers."),(0,a.kt)("h3",{id:"env-in-plugin-wrappers"},"Env in plugin wrappers"),(0,a.kt)("p",null,"Plugin wrapper developers can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env")," instance as a class property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const env: Env = this.env;\n")),(0,a.kt)("h3",{id:"env-in-wasm-wrappers"},"Env in wasm wrappers"),(0,a.kt)("p",null,"Wasm wrapper developers can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env")," instance by accepting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env")," as a second argument in their module's methods. When an application developer invokes the method, the environmental variables they set in their ",(0,a.kt)("a",{parentName:"p",href:"/tutorials/use-wraps/configure-client#envs"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientConfig"))," will be provided."),(0,a.kt)(l.Z,{defaultValue:"as",values:[{label:"AssemblyScript",value:"as"},{label:"Rust",value:"rs"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"as",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Module extends ModuleBase {\n  // App developers are required to provide Env to invoke this method\n  methodRequireEnv(_: Args_methodRequireEnv, env: Env): Env {\n    return env;\n  }\n\n  // Env is optional when invoking this method\n  methodOptionalEnv(_: Args_methodOptionalEnv, env: Env | null): Env | null {\n    return env ? (env as Env) : null;\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"rs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl ModuleTrait for Module {\n  // App developers are required to provide Env to invoke this method\n  fn method_require_env(_: ArgsMethodRequireEnv, env: Env) -> Env {\n    env\n  }\n\n  // Env is optional when invoking this method\n  fn method_optional_env(args: ArgsMethodOptionalEnv, env: Option<Env>) -> Option<Env> {\n    env\n  }\n}\n")))))}m.isMDXComponent=!0}}]);