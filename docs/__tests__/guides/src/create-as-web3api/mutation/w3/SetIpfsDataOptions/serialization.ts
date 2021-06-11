import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable
} from "@web3api/wasm-as";
import { SetIpfsDataOptions } from "./";
import * as Types from "..";

export function serializeSetIpfsDataOptions(type: SetIpfsDataOptions): ArrayBuffer {
  const sizer = new WriteSizer();
  writeSetIpfsDataOptions(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeSetIpfsDataOptions(encoder, type);
  return buffer;
}

export function writeSetIpfsDataOptions(writer: Write, type: SetIpfsDataOptions): void {
  writer.writeMapLength(2);
  writer.writeString("address");
  writer.writeString(type.address);
  writer.writeString("data");
  writer.writeString(type.data);
}

export function deserializeSetIpfsDataOptions(buffer: ArrayBuffer): SetIpfsDataOptions {
  const reader = new ReadDecoder(buffer);
  return readSetIpfsDataOptions(reader);
}

export function readSetIpfsDataOptions(reader: Read): SetIpfsDataOptions {
  var numFields = reader.readMapLength();

  var _address: string = "";
  var _addressSet: bool = false;
  var _data: string = "";
  var _dataSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "address") {
      _address = reader.readString();
      _addressSet = true;
    }
    else if (field == "data") {
      _data = reader.readString();
      _dataSet = true;
    }
  }

  if (!_addressSet) {
    throw new Error("Missing required property: 'address: String'");
  }
  if (!_dataSet) {
    throw new Error("Missing required property: 'data: String'");
  }

  return {
    address: _address,
    data: _data
  };
}
