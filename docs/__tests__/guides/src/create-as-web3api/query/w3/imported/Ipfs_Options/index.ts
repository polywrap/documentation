import {
  Read,
  Write,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeIpfs_Options,
  deserializeIpfs_Options,
  writeIpfs_Options,
  readIpfs_Options
} from "./serialization";
import * as Types from "../..";

export class Ipfs_Options {

  public static uri: string = "w3://ens/ipfs.web3api.eth";

  timeout: Nullable<u64>;
  provider: string | null;

  static toBuffer(type: Ipfs_Options): ArrayBuffer {
    return serializeIpfs_Options(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Ipfs_Options {
    return deserializeIpfs_Options(buffer);
  }

  static write(writer: Write, type: Ipfs_Options): void {
    writeIpfs_Options(writer, type);
  }

  static read(reader: Read): Ipfs_Options {
    return readIpfs_Options(reader);
  }
}
