import {
  Read,
  Write,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeIpfs_ResolveResult,
  deserializeIpfs_ResolveResult,
  writeIpfs_ResolveResult,
  readIpfs_ResolveResult
} from "./serialization";
import * as Types from "../..";

export class Ipfs_ResolveResult {

  public static uri: string = "w3://ens/ipfs.web3api.eth";

  cid: string;
  provider: string;

  static toBuffer(type: Ipfs_ResolveResult): ArrayBuffer {
    return serializeIpfs_ResolveResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Ipfs_ResolveResult {
    return deserializeIpfs_ResolveResult(buffer);
  }

  static write(writer: Write, type: Ipfs_ResolveResult): void {
    writeIpfs_ResolveResult(writer, type);
  }

  static read(reader: Read): Ipfs_ResolveResult {
    return readIpfs_ResolveResult(reader);
  }
}
