---
id: default-plugins
title: Default plugins
---

Polywrap plugin wrappers extend the capabilities of Wasm wrappers. Some plugin wrappers come included in the Polywrap client by default:

- Ethereum Provider
- Filesystem
- HTTP
- Logger
- Concurrent

In this guide, we'll show you what it's like to import these default plugins into your wrapper, and explain what some commonly used plugins do.

## Import to schema
We'll use one of the default plugins, HTTP, to show how you can import its modules into your wrapper's schema (`schema.graphql` file). We typically import plugins into a schema by importing the interface they implement and letting users of the wrapper decide which plugin to use.

`#import { Module, Request } into Http from "wrap://ens/wraps.eth:http@1.1.0"`

Below, we explain what each part of this code means.

- `#import`
    - Imports specific modules from a deployed or local plugin

- `{ Module, Request }`
    - These are specific modules that we're unpacking from the one of Polywrap's default plugins, HTTP.

- `into Http`
    - This is a namespace, enabling you to use the modules in your schema e.g. `Http_Module` or `Http_Request`

- `from "wrap://ens/wraps.eth:http@1.1.0"`
    - `wrap://` is the Polywrap URI schema.
    - `ens` is the URI authority. It tells the Polywrap client what kind of URI it needs to resolve. See [URIs](/concepts/uris) for more information.
    - `wraps.eth:http@1.1.0` is the URI path, which in this case is an ENS address.

## Use in Wasm Wrapper
Once types have been imported, the functionality of these imported modules can be used in wrapper development.

Upon `yarn build`, the imported types and modules will be made available to you in the `src/wrap` folder.  To use them, you simply need to import the specific modules that you'd like to use.

If you're building an AssemblyScript-based wrapper, the import might look like this:

```typescript
import { Http_Module, Http_Request } from './wrap';
```

The `Http_Module` will contain the methods shown [here](https://github.com/polywrap/http/blob/main/interface/src/schema.graphql), under the `Module` type.

Once imported, you can access methods like so:

`Http_Module.get({ ... })`

## Commonly used default plugins
This section contains brief guides on the default plugins: EthereumProvider, FileSystem, HTTP, Logger, Concurrent.

### Ethereum Provider
The Ethereum Provider plugin can send RPC requests to Ethereum-compatible (EVM) blockchains.

Schema: [Link](https://github.com/polywrap/ethereum/blob/main/provider/interface/src/schema.graphql)

Importing the Ethereum Provider plugin into your wrapper's schema:
```graphql
#import { Module } into Provider from "plugin/ethereum-provider@2.0.0"
```

Example: [Link](https://github.com/polywrap/ethereum/blob/main/wrapper/src/polywrap_provider/provider.rs#L50)

```rust
pub fn request_sync<T: Serialize + Send + Sync, R: DeserializeOwned>(
  &self,
  method: &str,
  params: T,
) -> Result<R, ProviderError> {
  let params_v = JSON::to_value(&params).unwrap();
  let res = ProviderModule::request(&ArgsRequest {
    method: method.to_string(),
    params: Some(params_v),
    connection: self.connection.clone(),
  }).map_err(|err| ClientError::Error(err))?;
  let res = JSON::from_value(res).map_err(|err| ClientError::SerdeJson {
    err,
    text: "from str failed".to_string(),
  })?;
  Ok(res)
}
```

### FileSystem
The FileSystem plugin can interact with the host filesystem.

Schema: [Link](https://github.com/polywrap/file-system/blob/main/interface/src/schema.graphql)

Importing the FileSystem plugin into your wrapper's schema:
```graphql
#import { Module } into FileSystem from "ens/wraps.eth:file-system@1.0.0"
```

Example: [Link](https://github.com/polywrap/uri-resolver-extensions/blob/master/implementations/file-system/src/lib.rs#L60)

```rust
pub fn get_file(args: ArgsGetFile, _env: Option<Env>) -> Option<Vec<u8>> {
  let res = FileSystemModule::read_file(&ArgsReadFile {
    path: args.path
  });

  res.ok()
}
```

### HTTP
The HTTP plugin can send HTTP requests.

Schema: [Link](https://github.com/polywrap/http/blob/main/interface/src/schema.graphql)

#### Example Implementation
In this example, we will implement a simple `Ping` method which pings CoinGecko to see their server status using an HTTP Get request from your wrapper.

In our `./src/schema.graphql file`, we’ll write the schema for our wrapper.

At the top of this file, import the HTTP module into your wrapper:

```graphql
#import { Module, Request, Response } into HTTP from "wrap://ens/wraps.eth:http@1.1.0"
```

Then, define the types and fields on the `Ping` method.  First, add a new `Ping` type at the bottom of the schema.

```graphql
type Ping {
  gecko_says: String!
}
```

Then, add an argument-less method called `ping` that returns a non-nullable `Ping` to the `Module` type. 
Our completed schema looks like this:

```graphql
#import { Module, Request, Response } into HTTP from "wrap://ens/wraps.eth:http@1.1.0"
type Module {
  ping: Ping!
}

type Ping {
  gecko_says: String!
}
```

Now, we'll implement the `ping` method in `./src/index.ts`

At the top of the file, we'll import the HTTP/Ping methods and types.

```typescript=
import {
  HTTP_Module,
  HTTP_ResponseType,
  Ping,
} from './wrap';
```

Then, implement Ping function:

```typescript
export function ping(): Ping {
    
  // Writing the HTTP request / response
  const response = HTTP_Module.get({
    url: 'https://api.coingecko.com/api/v3/ping',
    request: {
      headers: [],
      urlParams: [],
      body: '',
      responseType: HTTP_ResponseType.TEXT,
    },
  }).unwrap();
    
  // Error handling for the response
  if (!response || response.status !== 200 || !response.body) {
    const errorMsg =
      response && response.statusText
        ? (response.statusText as string)
        : 'An error occurred while fetching data from Coingecko API';
    throw new Error(errorMsg);
  }  
    
  const json = <JSON.Obj>JSON.parse(response.body);
    
 // Response from Coingecko with field `geckoSays`
  const geckoSays = json.getString('gecko_says');
  if (geckoSays) {
    return {
      gecko_says: geckoSays.valueOf(),
    };
  }
  throw new Error('Invalid response body!');
}
```

### Logger
The Logger plugin enables logging in a Wasm wrapper, which can be useful for debugging.

In our `./src/schema.graphql file`, import the Logger module into your wrapper:

```graphql
#import { Module } into Logger from "ens/wraps.eth:logger@1.0.0"
```

Then in your implementation file `./src/index.ts`, import the Logger function:

```typescript
import {
  Logger_Module,
  Logger_Logger_LogLevel,
} from './wrap';
```

And use it like so:

```typescript
 Logger_Module.log({
    level: Logger_Logger_LogLevel.INFO,
    message: `Insert useful log message here`,
  });
```

When you run your test e.g. `yarn test:e2e`, you will see the logged message in the console.

### Concurrent
The Concurrent plugin enables concurrent execution of Wasm wrapper sub-invocations. The meaning of "concurrent" depends
on the plugin implementation, which varies by language.

Schema: [Link](https://github.com/polywrap/concurrent/blob/main/interface/src/schema.graphql)

Importing the Concurrent plugin into your wrapper's schema:
```graphql
#import { Module } into Concurrent from "ens/wraps.eth:concurrent@1.0.0"
```

Example: [Link](https://github.com/polywrap/uri-resolver-extensions/blob/master/implementations/ipfs/async-resolver/src/util/exec.rs#L34)

```rust
pub fn cat_task(ipfs_provider: &str, cid: &str, timeout: u32, client_uri: &str) -> ConcurrentTask {
  ConcurrentTask {
    uri: client_uri.to_string(),
    method: String::from("cat"),
    args: serialize_cat_args(&ClientArgsCat {
      cid: cid.to_string(),
      ipfs_provider: ipfs_provider.to_string(),
      timeout: Some(timeout),
      cat_options: None,
    }).unwrap()
  }
}

pub fn cat_task_result(task_result: &ConcurrentTaskResult) -> Result<Vec<u8>, String> {
  if matches!(task_result.status, ConcurrentTaskStatus::COMPLETED) {
    return match &task_result.result {
      Some(result) => Ok(deserialize_cat_result(result.as_ref()).unwrap()),
      None => Err(String::from("Received empty result from concurrent task"))
    };
  }
  return match &task_result.error {
    Some(error) => Err(error.to_string()),
    None => Err(String::from("Received empty result from concurrent task"))
  };
}

pub fn exec_parallel(
  providers: &Vec<&str>,
  cid: &str,
  timeout: u32,
) -> Result<Vec<u8>, String> {
  // get ipfs http client uri
  let client_uri: String = get_ipfs_http_client_uri()?;

  // get Concurrent implementation
  let impls = Concurrent::get_implementations();
  if impls.len() < 1 {
    println!("Parallel execution is not available. Executing sequentially instead. \
        Parallel execution requires an implementation of the Concurrent interface. \
        You can declare an interface implementation in your Polywrap Client configuration.");
    return exec_sequential(providers, cid, timeout);
  }
  let concurrent_module = ConcurrentModule::new(impls[0].clone());

  // schedule tasks
  let mut tasks: Vec<ConcurrentTask> = Vec::new();
  for &provider in providers {
    tasks.push(cat_task(provider, cid, timeout, &client_uri));
  }
  let task_ids: Vec<i32> = concurrent_module.schedule(&ArgsSchedule { tasks })?;

  // request task results
  let return_when = ConcurrentReturnWhen::ANY_COMPLETED;
  let result_args = &ArgsResult { task_ids: task_ids.clone(), return_when };
  let results: Vec<ConcurrentTaskResult> = concurrent_module.result(result_args)?;

  // return completed result value or panic
  let mut errors: Vec<String> = Vec::new();
  for i in 0..results.len() {
    let result = cat_task_result(&results[i]);
    if result.is_ok() {
      return result;
    }
    let error = build_exec_error(providers[i], timeout, result.unwrap_err().as_str());
    errors.push(error);
  }
  return Err(errors.join("\n"));
}
```