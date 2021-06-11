import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { SetIpfsDataResult } from "./";
import * as Types from "..";

export function serializeSetIpfsDataResult(type: SetIpfsDataResult): ArrayBuffer {
  const sizer = new WriteSizer();
  writeSetIpfsDataResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeSetIpfsDataResult(encoder, type);
  return buffer;
}

export function writeSetIpfsDataResult(writer: Write, type: SetIpfsDataResult): void {
  writer.writeMapLength(2);
  writer.writeString("ipfsHash");
  writer.writeString(type.ipfsHash);
  writer.writeString("txReceipt");
  writer.writeString(type.txReceipt);
}

export function deserializeSetIpfsDataResult(buffer: ArrayBuffer): SetIpfsDataResult {
  const reader = new ReadDecoder(buffer);
  return readSetIpfsDataResult(reader);
}

export function readSetIpfsDataResult(reader: Read): SetIpfsDataResult {
  var numFields = reader.readMapLength();

  var _ipfsHash: string = "";
  var _ipfsHashSet: bool = false;
  var _txReceipt: string = "";
  var _txReceiptSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "ipfsHash") {
      _ipfsHash = reader.readString();
      _ipfsHashSet = true;
    }
    else if (field == "txReceipt") {
      _txReceipt = reader.readString();
      _txReceiptSet = true;
    }
  }

  if (!_ipfsHashSet) {
    throw new Error("Missing required property: 'ipfsHash: String'");
  }
  if (!_txReceiptSet) {
    throw new Error("Missing required property: 'txReceipt: String'");
  }

  return {
    ipfsHash: _ipfsHash,
    txReceipt: _txReceipt
  };
}
