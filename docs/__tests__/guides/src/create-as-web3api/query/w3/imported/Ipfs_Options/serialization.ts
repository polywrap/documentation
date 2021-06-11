import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { Ipfs_Options } from "./";
import * as Types from "../..";

export function serializeIpfs_Options(type: Ipfs_Options): ArrayBuffer {
  const sizer = new WriteSizer();
  writeIpfs_Options(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeIpfs_Options(encoder, type);
  return buffer;
}

export function writeIpfs_Options(writer: Write, type: Ipfs_Options): void {
  writer.writeMapLength(2);
  writer.writeString("timeout");
  writer.writeNullableUInt64(type.timeout);
  writer.writeString("provider");
  writer.writeNullableString(type.provider);
}

export function deserializeIpfs_Options(buffer: ArrayBuffer): Ipfs_Options {
  const reader = new ReadDecoder(buffer);
  return readIpfs_Options(reader);
}

export function readIpfs_Options(reader: Read): Ipfs_Options {
  var numFields = reader.readMapLength();

  var _timeout: Nullable<u64> = new Nullable<u64>();
  var _provider: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "timeout") {
      _timeout = reader.readNullableUInt64();
    }
    else if (field == "provider") {
      _provider = reader.readNullableString();
    }
  }


  return {
    timeout: _timeout,
    provider: _provider
  };
}
