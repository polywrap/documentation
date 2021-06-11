import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { Ethereum_Connection } from "./";
import * as Types from "../..";

export function serializeEthereum_Connection(type: Ethereum_Connection): ArrayBuffer {
  const sizer = new WriteSizer();
  writeEthereum_Connection(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeEthereum_Connection(encoder, type);
  return buffer;
}

export function writeEthereum_Connection(writer: Write, type: Ethereum_Connection): void {
  writer.writeMapLength(2);
  writer.writeString("node");
  writer.writeNullableString(type.node);
  writer.writeString("networkNameOrChainId");
  writer.writeNullableString(type.networkNameOrChainId);
}

export function deserializeEthereum_Connection(buffer: ArrayBuffer): Ethereum_Connection {
  const reader = new ReadDecoder(buffer);
  return readEthereum_Connection(reader);
}

export function readEthereum_Connection(reader: Read): Ethereum_Connection {
  var numFields = reader.readMapLength();

  var _node: string | null = null;
  var _networkNameOrChainId: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "node") {
      _node = reader.readNullableString();
    }
    else if (field == "networkNameOrChainId") {
      _networkNameOrChainId = reader.readNullableString();
    }
  }


  return {
    node: _node,
    networkNameOrChainId: _networkNameOrChainId
  };
}
