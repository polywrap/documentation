import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { Ipfs_ApiResolver_MaybeUriOrManifest } from "./";
import * as Types from "../..";

export function serializeIpfs_ApiResolver_MaybeUriOrManifest(type: Ipfs_ApiResolver_MaybeUriOrManifest): ArrayBuffer {
  const sizer = new WriteSizer();
  writeIpfs_ApiResolver_MaybeUriOrManifest(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeIpfs_ApiResolver_MaybeUriOrManifest(encoder, type);
  return buffer;
}

export function writeIpfs_ApiResolver_MaybeUriOrManifest(writer: Write, type: Ipfs_ApiResolver_MaybeUriOrManifest): void {
  writer.writeMapLength(2);
  writer.writeString("uri");
  writer.writeNullableString(type.uri);
  writer.writeString("manifest");
  writer.writeNullableString(type.manifest);
}

export function deserializeIpfs_ApiResolver_MaybeUriOrManifest(buffer: ArrayBuffer): Ipfs_ApiResolver_MaybeUriOrManifest {
  const reader = new ReadDecoder(buffer);
  return readIpfs_ApiResolver_MaybeUriOrManifest(reader);
}

export function readIpfs_ApiResolver_MaybeUriOrManifest(reader: Read): Ipfs_ApiResolver_MaybeUriOrManifest {
  var numFields = reader.readMapLength();

  var _uri: string | null = null;
  var _manifest: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "uri") {
      _uri = reader.readNullableString();
    }
    else if (field == "manifest") {
      _manifest = reader.readNullableString();
    }
  }


  return {
    uri: _uri,
    manifest: _manifest
  };
}
