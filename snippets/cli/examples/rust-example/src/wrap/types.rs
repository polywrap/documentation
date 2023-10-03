#![allow(unused_imports)]
#![allow(non_camel_case_types)]

// NOTE: This is an auto-generated file.
//       All modifications will be overwritten.
use polywrap::*;
use std::result::Result;
use std::collections::BTreeMap;
use serde::{Serialize, Deserialize};
use std::sync::Arc;

pub type BigInt = String;

#[derive(Clone)]
pub struct InvokeOptions {
    pub uri: Option<Uri>,
    pub client: Option<Arc<dyn Invoker>>,
    pub env: Option<Vec<u8>> 
}

fn get_default_client() -> Arc<PolywrapClient> {
    let mut config = PolywrapClientConfig::new();
    config.add(SystemClientConfig::default().into());
    config.add(Web3ClientConfig::default().into());
    let client = PolywrapClient::new(config.build());
    Arc::new(client)
}

// Env START //

// Env END //

// Objects START //

// Objects END //

// Enums START //

// Enums END //

// Imported objects START //

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsCatOptions {
    pub offset: Option<i32>,
    pub length: Option<i32>,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsAddOptions {
    pub pin: Option<bool>,
    #[serde(rename = "onlyHash")]
    pub only_hash: Option<bool>,
    #[serde(rename = "wrapWithDirectory")]
    pub wrap_with_directory: Option<bool>,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsResolveOptions {
    pub recursive: Option<bool>,
    #[serde(rename = "dhtRecordCount")]
    pub dht_record_count: Option<i32>,
    #[serde(rename = "dhtTimeout")]
    pub dht_timeout: Option<String>,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsResolveResult {
    pub cid: String,
    pub provider: String,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsAddResult {
    pub name: String,
    pub hash: String,
    pub size: String,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsFileEntry {
    pub name: String,
    pub data: ByteBuf,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsDirectoryEntry {
    pub name: String,
    pub directories: Option<Vec<IpfsDirectoryEntry>>,
    pub files: Option<Vec<IpfsFileEntry>>,
}
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsBlob {
    pub directories: Option<Vec<IpfsDirectoryEntry>>,
    pub files: Option<Vec<IpfsFileEntry>>,
}
// Imported objects END //

// Imported envs START //

// Imported envs END //

// Imported enums START //

// Imported enums END //

// Imported Modules START //

// URI: "wrapscan.io/polywrap/ipfs-http-client@1.0" //
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsArgsCat {
    pub cid: String,
    #[serde(rename = "ipfsProvider")]
    pub ipfs_provider: String,
    pub timeout: Option<u32>,
    #[serde(rename = "catOptions")]
    pub cat_options: Option<IpfsCatOptions>,
}

// URI: "wrapscan.io/polywrap/ipfs-http-client@1.0" //
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsArgsResolve {
    pub cid: String,
    #[serde(rename = "ipfsProvider")]
    pub ipfs_provider: String,
    pub timeout: Option<u32>,
    #[serde(rename = "resolveOptions")]
    pub resolve_options: Option<IpfsResolveOptions>,
}

// URI: "wrapscan.io/polywrap/ipfs-http-client@1.0" //
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsArgsAddFile {
    pub data: IpfsFileEntry,
    #[serde(rename = "ipfsProvider")]
    pub ipfs_provider: String,
    pub timeout: Option<u32>,
    #[serde(rename = "addOptions")]
    pub add_options: Option<IpfsAddOptions>,
}

// URI: "wrapscan.io/polywrap/ipfs-http-client@1.0" //
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsArgsAddDir {
    pub data: IpfsDirectoryEntry,
    #[serde(rename = "ipfsProvider")]
    pub ipfs_provider: String,
    pub timeout: Option<u32>,
    #[serde(rename = "addOptions")]
    pub add_options: Option<IpfsAddOptions>,
}

// URI: "wrapscan.io/polywrap/ipfs-http-client@1.0" //
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct IpfsArgsAddBlob {
    pub data: IpfsBlob,
    #[serde(rename = "ipfsProvider")]
    pub ipfs_provider: String,
    pub timeout: Option<u32>,
    #[serde(rename = "addOptions")]
    pub add_options: Option<IpfsAddOptions>,
}

#[derive(Clone)]
pub struct Ipfs {
    pub uri: Uri,
    pub invoker: Arc<dyn Invoker>,
    pub env: Option<Vec<u8>>
}

impl Ipfs {
    pub fn new(invoke_options: Option<InvokeOptions>) -> Ipfs {
        let default_uri = uri!("wrapscan.io/polywrap/ipfs-http-client@1.0");
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let _uri = if let Some(uri) = invoke_option.uri {
                uri
            } else {
                default_uri
            };

            let _invoker = if let Some(invoker) = invoke_option.client {
                invoker
            } else {
                get_default_client()
            };

            (_uri, _invoker, invoke_option.env)
        } else {
            (default_uri, get_default_client() as Arc<dyn Invoker>, None)
        };

        Ipfs {
            uri: _uri,
            invoker: _invoker,
            env: _env,
        }
    }

    pub fn default_uri() -> Uri {
        uri!("wrapscan.io/polywrap/ipfs-http-client@1.0")
    }

    pub fn cat(&self, args: &IpfsArgsCat, invoke_options: Option<InvokeOptions>) -> Result<ByteBuf, Error> {
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let uri = invoke_option.uri.clone().unwrap_or_else(|| self.uri.clone());
            let invoker = invoke_option.client.clone().unwrap_or_else(|| self.invoker.clone());
            let env = invoke_option.env.clone().or_else(|| self.env.clone());
            (uri, invoker, env)
        } else {
            (self.uri.clone(), self.invoker.clone(), self.env.clone())
        };

        let serialized_args = to_vec(&args).unwrap();
        let opt_args = Some(serialized_args.as_slice());
        let result = _invoker.invoke_raw(
            &_uri,
            "cat",
            opt_args,
            _env.as_ref().map(|v| v.as_slice()),
            None
        )?;

        from_slice(result.as_slice()).map_err(Error::MsgpackError)
    }

    pub fn resolve(&self, args: &IpfsArgsResolve, invoke_options: Option<InvokeOptions>) -> Result<IpfsResolveResult, Error> {
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let uri = invoke_option.uri.clone().unwrap_or_else(|| self.uri.clone());
            let invoker = invoke_option.client.clone().unwrap_or_else(|| self.invoker.clone());
            let env = invoke_option.env.clone().or_else(|| self.env.clone());
            (uri, invoker, env)
        } else {
            (self.uri.clone(), self.invoker.clone(), self.env.clone())
        };

        let serialized_args = to_vec(&args).unwrap();
        let opt_args = Some(serialized_args.as_slice());
        let result = _invoker.invoke_raw(
            &_uri,
            "resolve",
            opt_args,
            _env.as_ref().map(|v| v.as_slice()),
            None
        )?;

        from_slice(result.as_slice()).map_err(Error::MsgpackError)
    }

    pub fn add_file(&self, args: &IpfsArgsAddFile, invoke_options: Option<InvokeOptions>) -> Result<IpfsAddResult, Error> {
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let uri = invoke_option.uri.clone().unwrap_or_else(|| self.uri.clone());
            let invoker = invoke_option.client.clone().unwrap_or_else(|| self.invoker.clone());
            let env = invoke_option.env.clone().or_else(|| self.env.clone());
            (uri, invoker, env)
        } else {
            (self.uri.clone(), self.invoker.clone(), self.env.clone())
        };

        let serialized_args = to_vec(&args).unwrap();
        let opt_args = Some(serialized_args.as_slice());
        let result = _invoker.invoke_raw(
            &_uri,
            "addFile",
            opt_args,
            _env.as_ref().map(|v| v.as_slice()),
            None
        )?;

        from_slice(result.as_slice()).map_err(Error::MsgpackError)
    }

    pub fn add_dir(&self, args: &IpfsArgsAddDir, invoke_options: Option<InvokeOptions>) -> Result<Vec<IpfsAddResult>, Error> {
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let uri = invoke_option.uri.clone().unwrap_or_else(|| self.uri.clone());
            let invoker = invoke_option.client.clone().unwrap_or_else(|| self.invoker.clone());
            let env = invoke_option.env.clone().or_else(|| self.env.clone());
            (uri, invoker, env)
        } else {
            (self.uri.clone(), self.invoker.clone(), self.env.clone())
        };

        let serialized_args = to_vec(&args).unwrap();
        let opt_args = Some(serialized_args.as_slice());
        let result = _invoker.invoke_raw(
            &_uri,
            "addDir",
            opt_args,
            _env.as_ref().map(|v| v.as_slice()),
            None
        )?;

        from_slice(result.as_slice()).map_err(Error::MsgpackError)
    }

    pub fn add_blob(&self, args: &IpfsArgsAddBlob, invoke_options: Option<InvokeOptions>) -> Result<Vec<IpfsAddResult>, Error> {
        let (_uri, _invoker, _env) = if let Some(invoke_option) = invoke_options {
            let uri = invoke_option.uri.clone().unwrap_or_else(|| self.uri.clone());
            let invoker = invoke_option.client.clone().unwrap_or_else(|| self.invoker.clone());
            let env = invoke_option.env.clone().or_else(|| self.env.clone());
            (uri, invoker, env)
        } else {
            (self.uri.clone(), self.invoker.clone(), self.env.clone())
        };

        let serialized_args = to_vec(&args).unwrap();
        let opt_args = Some(serialized_args.as_slice());
        let result = _invoker.invoke_raw(
            &_uri,
            "addBlob",
            opt_args,
            _env.as_ref().map(|v| v.as_slice()),
            None
        )?;

        from_slice(result.as_slice()).map_err(Error::MsgpackError)
    }
}
// Imported Modules END //
