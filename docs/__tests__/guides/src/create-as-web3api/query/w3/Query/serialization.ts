import {
  Read,
  ReadDecoder,
  WriteSizer,
  WriteEncoder,
  Write,
  Nullable
} from "@web3api/wasm-as";
import * as Types from "..";

export class Input_getData {
  address: string;
  connection: Types.Ethereum_Connection | null;
}

export function deserializegetDataArgs(argsBuf: ArrayBuffer): Input_getData {
  const reader = new ReadDecoder(argsBuf);
  var numFields = reader.readMapLength();

  var _address: string = "";
  var _addressSet: bool = false;
  var _connection: Types.Ethereum_Connection | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "address") {
      _address = reader.readString();
      _addressSet = true;
    }
    else if (field == "connection") {
      var object: Types.Ethereum_Connection | null = null;
      if (!reader.isNextNil()) {
        object = Types.Ethereum_Connection.read(reader);
      }
      _connection = object;
    }
  }

  if (!_addressSet) {
    throw new Error("Missing required argument: 'address: String'");
  }

  return {
    address: _address,
    connection: _connection
  };
}

export function serializegetDataResult(result: i32): ArrayBuffer {
  const sizer = new WriteSizer();
  writegetDataResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writegetDataResult(encoder, result);
  return buffer;
}

export function writegetDataResult(writer: Write, result: i32): void {
  writer.writeInt32(result);
}

export class Input_getIpfsData {
  address: string;
  connection: Types.Ethereum_Connection | null;
}

export function deserializegetIpfsDataArgs(argsBuf: ArrayBuffer): Input_getIpfsData {
  const reader = new ReadDecoder(argsBuf);
  var numFields = reader.readMapLength();

  var _address: string = "";
  var _addressSet: bool = false;
  var _connection: Types.Ethereum_Connection | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "address") {
      _address = reader.readString();
      _addressSet = true;
    }
    else if (field == "connection") {
      var object: Types.Ethereum_Connection | null = null;
      if (!reader.isNextNil()) {
        object = Types.Ethereum_Connection.read(reader);
      }
      _connection = object;
    }
  }

  if (!_addressSet) {
    throw new Error("Missing required argument: 'address: String'");
  }

  return {
    address: _address,
    connection: _connection
  };
}

export function serializegetIpfsDataResult(result: string): ArrayBuffer {
  const sizer = new WriteSizer();
  writegetIpfsDataResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writegetIpfsDataResult(encoder, result);
  return buffer;
}

export function writegetIpfsDataResult(writer: Write, result: string): void {
  writer.writeString(result);
}
