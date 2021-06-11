import {
  w3_subinvoke,
  Nullable
} from "@web3api/wasm-as";
import {
  serializecatFileArgs,
  deserializecatFileResult,
  Input_catFile,
  serializeresolveArgs,
  deserializeresolveResult,
  Input_resolve,
  serializetryResolveUriArgs,
  deserializetryResolveUriResult,
  Input_tryResolveUri,
  serializegetFileArgs,
  deserializegetFileResult,
  Input_getFile
} from "./serialization";
import * as Types from "../..";

export class Ipfs_Query {

  public static uri: string = "w3://ens/ipfs.web3api.eth";

  public static catFile(input: Input_catFile): ArrayBuffer {
    const args = serializecatFileArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ipfs.web3api.eth",
      "query",
      "catFile",
      args
    );
    return deserializecatFileResult(result);
  }

  public static resolve(input: Input_resolve): Types.Ipfs_ResolveResult | null {
    const args = serializeresolveArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ipfs.web3api.eth",
      "query",
      "resolve",
      args
    );
    return deserializeresolveResult(result);
  }

  public static tryResolveUri(input: Input_tryResolveUri): Types.Ipfs_ApiResolver_MaybeUriOrManifest | null {
    const args = serializetryResolveUriArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ipfs.web3api.eth",
      "query",
      "tryResolveUri",
      args
    );
    return deserializetryResolveUriResult(result);
  }

  public static getFile(input: Input_getFile): ArrayBuffer | null {
    const args = serializegetFileArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ipfs.web3api.eth",
      "query",
      "getFile",
      args
    );
    return deserializegetFileResult(result);
  }
}
