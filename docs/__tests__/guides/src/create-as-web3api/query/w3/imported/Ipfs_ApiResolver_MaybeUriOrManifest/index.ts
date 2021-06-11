import {
  Read,
  Write,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeIpfs_ApiResolver_MaybeUriOrManifest,
  deserializeIpfs_ApiResolver_MaybeUriOrManifest,
  writeIpfs_ApiResolver_MaybeUriOrManifest,
  readIpfs_ApiResolver_MaybeUriOrManifest
} from "./serialization";
import * as Types from "../..";

export class Ipfs_ApiResolver_MaybeUriOrManifest {

  public static uri: string = "w3://ens/ipfs.web3api.eth";

  uri: string | null;
  manifest: string | null;

  static toBuffer(type: Ipfs_ApiResolver_MaybeUriOrManifest): ArrayBuffer {
    return serializeIpfs_ApiResolver_MaybeUriOrManifest(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Ipfs_ApiResolver_MaybeUriOrManifest {
    return deserializeIpfs_ApiResolver_MaybeUriOrManifest(buffer);
  }

  static write(writer: Write, type: Ipfs_ApiResolver_MaybeUriOrManifest): void {
    writeIpfs_ApiResolver_MaybeUriOrManifest(writer, type);
  }

  static read(reader: Read): Ipfs_ApiResolver_MaybeUriOrManifest {
    return readIpfs_ApiResolver_MaybeUriOrManifest(reader);
  }
}
