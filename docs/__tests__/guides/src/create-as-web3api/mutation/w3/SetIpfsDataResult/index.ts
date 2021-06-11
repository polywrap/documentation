import {
  Read,
  Write,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeSetIpfsDataResult,
  deserializeSetIpfsDataResult,
  writeSetIpfsDataResult,
  readSetIpfsDataResult
} from "./serialization";
import * as Types from "..";

export class SetIpfsDataResult {
  ipfsHash: string;
  txReceipt: string;

  static toBuffer(type: SetIpfsDataResult): ArrayBuffer {
    return serializeSetIpfsDataResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): SetIpfsDataResult {
    return deserializeSetIpfsDataResult(buffer);
  }

  static write(writer: Write, type: SetIpfsDataResult): void {
    writeSetIpfsDataResult(writer, type);
  }

  static read(reader: Read): SetIpfsDataResult {
    return readSetIpfsDataResult(reader);
  }
}
