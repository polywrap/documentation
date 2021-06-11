import {
  Read,
  Write,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeSetIpfsDataOptions,
  deserializeSetIpfsDataOptions,
  writeSetIpfsDataOptions,
  readSetIpfsDataOptions
} from "./serialization";
import * as Types from "..";

export class SetIpfsDataOptions {
  address: string;
  data: string;

  static toBuffer(type: SetIpfsDataOptions): ArrayBuffer {
    return serializeSetIpfsDataOptions(type);
  }

  static fromBuffer(buffer: ArrayBuffer): SetIpfsDataOptions {
    return deserializeSetIpfsDataOptions(buffer);
  }

  static write(writer: Write, type: SetIpfsDataOptions): void {
    writeSetIpfsDataOptions(writer, type);
  }

  static read(reader: Read): SetIpfsDataOptions {
    return readSetIpfsDataOptions(reader);
  }
}
