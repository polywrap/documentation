import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { Ipfs_ResolveResult } from "./";
import * as Types from "../..";

export function serializeIpfs_ResolveResult(type: Ipfs_ResolveResult): ArrayBuffer {
  const sizer = new WriteSizer();
  writeIpfs_ResolveResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeIpfs_ResolveResult(encoder, type);
  return buffer;
}

export function writeIpfs_ResolveResult(writer: Write, type: Ipfs_ResolveResult): void {
  writer.writeMapLength(2);
  writer.writeString("cid");
  writer.writeString(type.cid);
  writer.writeString("provider");
  writer.writeString(type.provider);
}

export function deserializeIpfs_ResolveResult(buffer: ArrayBuffer): Ipfs_ResolveResult {
  const reader = new ReadDecoder(buffer);
  return readIpfs_ResolveResult(reader);
}

export function readIpfs_ResolveResult(reader: Read): Ipfs_ResolveResult {
  var numFields = reader.readMapLength();

  var _cid: string = "";
  var _cidSet: bool = false;
  var _provider: string = "";
  var _providerSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "cid") {
      _cid = reader.readString();
      _cidSet = true;
    }
    else if (field == "provider") {
      _provider = reader.readString();
      _providerSet = true;
    }
  }

  if (!_cidSet) {
    throw new Error("Missing required property: 'cid: String'");
  }
  if (!_providerSet) {
    throw new Error("Missing required property: 'provider: String'");
  }

  return {
    cid: _cid,
    provider: _provider
  };
}
