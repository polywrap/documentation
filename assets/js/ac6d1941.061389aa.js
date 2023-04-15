"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[2585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"default-plugins",title:"Default plugins"},i=void 0,o={unversionedId:"tutorials/create-wasm-wrappers/default-plugins",id:"tutorials/create-wasm-wrappers/default-plugins",title:"Default plugins",description:"Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:",source:"@site/docs/tutorials/create-wasm-wrappers/default-plugins.md",sourceDirName:"tutorials/create-wasm-wrappers",slug:"/tutorials/create-wasm-wrappers/default-plugins",permalink:"/tutorials/create-wasm-wrappers/default-plugins",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/create-wasm-wrappers/default-plugins.md",tags:[],version:"current",frontMatter:{id:"default-plugins",title:"Default plugins"},sidebar:"docs",previous:{title:"Configure a Polywrap Manifest",permalink:"/tutorials/create-wasm-wrappers/polywrap-manifest"},next:{title:"Testing Wrappers In TypeScript",permalink:"/tutorials/testing-wrappers/in-typescript"}},p={},s=[{value:"Import to schema",id:"import-to-schema",level:2},{value:"Use in Wasm Wrapper",id:"use-in-wasm-wrapper",level:2},{value:"Commonly used default plugins",id:"commonly-used-default-plugins",level:2},{value:"Ethereum Provider",id:"ethereum-provider",level:3},{value:"FileSystem",id:"filesystem",level:3},{value:"HTTP",id:"http",level:3},{value:"Example Implementation",id:"example-implementation",level:4},{value:"Logger",id:"logger",level:3},{value:"Concurrent",id:"concurrent",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ethereum Provider"),(0,a.kt)("li",{parentName:"ul"},"Filesystem"),(0,a.kt)("li",{parentName:"ul"},"HTTP"),(0,a.kt)("li",{parentName:"ul"},"Logger"),(0,a.kt)("li",{parentName:"ul"},"Concurrent")),(0,a.kt)("p",null,"In this guide, we'll show you what it's like to import these default plugins into your wrapper, and explain what some commonly used plugins do."),(0,a.kt)("h2",{id:"import-to-schema"},"Import to schema"),(0,a.kt)("p",null,"We'll use one of the default plugins, HTTP, to show how you can import its modules into your wrapper's schema (",(0,a.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file). We typically import plugins into a schema by importing the interface they implement and letting users of the wrapper decide which plugin to use."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'#import { Module, Request } into Http from "wrap://ens/wraps.eth:http@1.1.0"')),(0,a.kt)("p",null,"Below, we explain what each part of this code means."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"#import")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Imports specific modules from a deployed or local plugin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"{ Module, Request }")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"These are specific modules that we're unpacking from the one of Polywrap's default plugins, HTTP."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"into Http")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is a namespace, enabling you to use the modules in your schema e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"Http_Module")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Http_Request")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'from "wrap://ens/wraps.eth:http@1.1.0"')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wrap://")," is the Polywrap URI schema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ens")," is the URI authority. It tells the Polywrap client what kind of URI it needs to resolve. See ",(0,a.kt)("a",{parentName:"li",href:"/concepts/uris"},"URIs")," for more information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wraps.eth:http@1.1.0")," is the URI path, which in this case is an ENS address.")))),(0,a.kt)("h2",{id:"use-in-wasm-wrapper"},"Use in Wasm Wrapper"),(0,a.kt)("p",null,"Once types have been imported, the functionality of these imported modules can be used in wrapper development."),(0,a.kt)("p",null,"Upon ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build"),", the imported types and modules will be made available to you in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/wrap")," folder.  To use them, you simply need to import the specific modules that you'd like to use."),(0,a.kt)("p",null,"If you're building an AssemblyScript-based wrapper, the import might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Http_Module, Http_Request } from './wrap';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Http_Module")," will contain the methods shown ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/http/blob/main/interface/src/schema.graphql"},"here"),", under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," type."),(0,a.kt)("p",null,"Once imported, you can access methods like so:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Http_Module.get({ ... })")),(0,a.kt)("h2",{id:"commonly-used-default-plugins"},"Commonly used default plugins"),(0,a.kt)("p",null,"This section contains brief guides on the default plugins: EthereumProvider, FileSystem, HTTP, Logger, Concurrent."),(0,a.kt)("h3",{id:"ethereum-provider"},"Ethereum Provider"),(0,a.kt)("p",null,"The Ethereum Provider plugin can send RPC requests to Ethereum-compatible (EVM) blockchains."),(0,a.kt)("p",null,"Schema: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/ethereum/blob/main/provider/interface/src/schema.graphql"},"Link")),(0,a.kt)("p",null,"Importing the Ethereum Provider plugin into your wrapper's schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into Provider from "plugin/ethereum-provider@2.0.0"\n')),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/ethereum/blob/main/wrapper/src/polywrap_provider/provider.rs#L50"},"Link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn request_sync<T: Serialize + Send + Sync, R: DeserializeOwned>(\n  &self,\n  method: &str,\n  params: T,\n) -> Result<R, ProviderError> {\n  let params_v = JSON::to_value(&params).unwrap();\n  let res = ProviderModule::request(&ArgsRequest {\n    method: method.to_string(),\n    params: Some(params_v),\n    connection: self.connection.clone(),\n  }).map_err(|err| ClientError::Error(err))?;\n  let res = JSON::from_value(res).map_err(|err| ClientError::SerdeJson {\n    err,\n    text: "from str failed".to_string(),\n  })?;\n  Ok(res)\n}\n')),(0,a.kt)("h3",{id:"filesystem"},"FileSystem"),(0,a.kt)("p",null,"The FileSystem plugin can interact with the host filesystem."),(0,a.kt)("p",null,"Schema: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/file-system/blob/main/interface/src/schema.graphql"},"Link")),(0,a.kt)("p",null,"Importing the FileSystem plugin into your wrapper's schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into FileSystem from "ens/wraps.eth:file-system@1.0.0"\n')),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/uri-resolver-extensions/blob/master/implementations/file-system/src/lib.rs#L60"},"Link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_file(args: ArgsGetFile, _env: Option<Env>) -> Option<Vec<u8>> {\n  let res = FileSystemModule::read_file(&ArgsReadFile {\n    path: args.path\n  });\n\n  res.ok()\n}\n")),(0,a.kt)("h3",{id:"http"},"HTTP"),(0,a.kt)("p",null,"The HTTP plugin can send HTTP requests."),(0,a.kt)("p",null,"Schema: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/http/blob/main/interface/src/schema.graphql"},"Link")),(0,a.kt)("h4",{id:"example-implementation"},"Example Implementation"),(0,a.kt)("p",null,"In this example, we will implement a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," method which pings CoinGecko to see their server status using an HTTP Get request from your wrapper."),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/schema.graphql file"),", we\u2019ll write the schema for our wrapper."),(0,a.kt)("p",null,"At the top of this file, import the HTTP module into your wrapper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, Request, Response } into HTTP from "wrap://ens/wraps.eth:http@1.1.0"\n')),(0,a.kt)("p",null,"Then, define the types and fields on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," method.  First, add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," type at the bottom of the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Ping {\n  gecko_says: String!\n}\n")),(0,a.kt)("p",null,"Then, add an argument-less method called ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," that returns a non-nullable ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," type.\nOur completed schema looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module, Request, Response } into HTTP from "wrap://ens/wraps.eth:http@1.1.0"\ntype Module {\n  ping: Ping!\n}\n\ntype Ping {\n  gecko_says: String!\n}\n')),(0,a.kt)("p",null,"Now, we'll implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/index.ts")),(0,a.kt)("p",null,"At the top of the file, we'll import the HTTP/Ping methods and types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript="},"import {\n  HTTP_Module,\n  HTTP_ResponseType,\n  Ping,\n} from './wrap';\n")),(0,a.kt)("p",null,"Then, implement Ping function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export function ping(): Ping {\n    \n  // Writing the HTTP request / response\n  const response = HTTP_Module.get({\n    url: 'https://api.coingecko.com/api/v3/ping',\n    request: {\n      headers: [],\n      urlParams: [],\n      body: '',\n      responseType: HTTP_ResponseType.TEXT,\n    },\n  }).unwrap();\n    \n  // Error handling for the response\n  if (!response || response.status !== 200 || !response.body) {\n    const errorMsg =\n      response && response.statusText\n        ? (response.statusText as string)\n        : 'An error occurred while fetching data from Coingecko API';\n    throw new Error(errorMsg);\n  }  \n    \n  const json = <JSON.Obj>JSON.parse(response.body);\n    \n // Response from Coingecko with field `geckoSays`\n  const geckoSays = json.getString('gecko_says');\n  if (geckoSays) {\n    return {\n      gecko_says: geckoSays.valueOf(),\n    };\n  }\n  throw new Error('Invalid response body!');\n}\n")),(0,a.kt)("h3",{id:"logger"},"Logger"),(0,a.kt)("p",null,"The Logger plugin enables logging in a Wasm wrapper, which can be useful for debugging."),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/schema.graphql file"),", import the Logger module into your wrapper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into Logger from "ens/wraps.eth:logger@1.0.0"\n')),(0,a.kt)("p",null,"Then in your implementation file ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/index.ts"),", import the Logger function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Logger_Module,\n  Logger_Logger_LogLevel,\n} from './wrap';\n")),(0,a.kt)("p",null,"And use it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," Logger_Module.log({\n    level: Logger_Logger_LogLevel.INFO,\n    message: `Insert useful log message here`,\n  });\n")),(0,a.kt)("p",null,"When you run your test e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn test:e2e"),", you will see the logged message in the console."),(0,a.kt)("h3",{id:"concurrent"},"Concurrent"),(0,a.kt)("p",null,'The Concurrent plugin enables concurrent execution of Wasm wrapper sub-invocations. The meaning of "concurrent" depends\non the plugin implementation, which varies by language.'),(0,a.kt)("p",null,"Schema: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/concurrent/blob/main/interface/src/schema.graphql"},"Link")),(0,a.kt)("p",null,"Importing the Concurrent plugin into your wrapper's schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'#import { Module } into Concurrent from "ens/wraps.eth:concurrent@1.0.0"\n')),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polywrap/uri-resolver-extensions/blob/master/implementations/ipfs/async-resolver/src/util/exec.rs#L34"},"Link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn cat_task(ipfs_provider: &str, cid: &str, timeout: u32, client_uri: &str) -> ConcurrentTask {\n  ConcurrentTask {\n    uri: client_uri.to_string(),\n    method: String::from("cat"),\n    args: serialize_cat_args(&ClientArgsCat {\n      cid: cid.to_string(),\n      ipfs_provider: ipfs_provider.to_string(),\n      timeout: Some(timeout),\n      cat_options: None,\n    }).unwrap()\n  }\n}\n\npub fn cat_task_result(task_result: &ConcurrentTaskResult) -> Result<Vec<u8>, String> {\n  if matches!(task_result.status, ConcurrentTaskStatus::COMPLETED) {\n    return match &task_result.result {\n      Some(result) => Ok(deserialize_cat_result(result.as_ref()).unwrap()),\n      None => Err(String::from("Received empty result from concurrent task"))\n    };\n  }\n  return match &task_result.error {\n    Some(error) => Err(error.to_string()),\n    None => Err(String::from("Received empty result from concurrent task"))\n  };\n}\n\npub fn exec_parallel(\n  providers: &Vec<&str>,\n  cid: &str,\n  timeout: u32,\n) -> Result<Vec<u8>, String> {\n  // get ipfs http client uri\n  let client_uri: String = get_ipfs_http_client_uri()?;\n\n  // get Concurrent implementation\n  let impls = Concurrent::get_implementations();\n  if impls.len() < 1 {\n    println!("Parallel execution is not available. Executing sequentially instead. \\\n        Parallel execution requires an implementation of the Concurrent interface. \\\n        You can declare an interface implementation in your Polywrap Client configuration.");\n    return exec_sequential(providers, cid, timeout);\n  }\n  let concurrent_module = ConcurrentModule::new(impls[0].clone());\n\n  // schedule tasks\n  let mut tasks: Vec<ConcurrentTask> = Vec::new();\n  for &provider in providers {\n    tasks.push(cat_task(provider, cid, timeout, &client_uri));\n  }\n  let task_ids: Vec<i32> = concurrent_module.schedule(&ArgsSchedule { tasks })?;\n\n  // request task results\n  let return_when = ConcurrentReturnWhen::ANY_COMPLETED;\n  let result_args = &ArgsResult { task_ids: task_ids.clone(), return_when };\n  let results: Vec<ConcurrentTaskResult> = concurrent_module.result(result_args)?;\n\n  // return completed result value or panic\n  let mut errors: Vec<String> = Vec::new();\n  for i in 0..results.len() {\n    let result = cat_task_result(&results[i]);\n    if result.is_ok() {\n      return result;\n    }\n    let error = build_exec_error(providers[i], timeout, result.unwrap_err().as_str());\n    errors.push(error);\n  }\n  return Err(errors.join("\\n"));\n}\n')))}c.isMDXComponent=!0}}]);