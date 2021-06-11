import {
  Read,
  ReadDecoder,
  WriteSizer,
  WriteEncoder,
  Write,
  Nullable
} from "@web3api/wasm-as";
import * as Types from "..";

export class Input_setData {
  address: string;
  value: u32;
  connection: Types.Ethereum_Connection | null;
}

export function deserializesetDataArgs(argsBuf: ArrayBuffer): Input_setData {
  const reader = new ReadDecoder(argsBuf);
  var numFields = reader.readMapLength();

  var _address: string = "";
  var _addressSet: bool = false;
  var _value: u32 = 0;
  var _valueSet: bool = false;
  var _connection: Types.Ethereum_Connection | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "address") {
      _address = reader.readString();
      _addressSet = true;
    }
    else if (field == "value") {
      _value = reader.readUInt32();
      _valueSet = true;
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
  if (!_valueSet) {
    throw new Error("Missing required argument: 'value: UInt32'");
  }

  return {
    address: _address,
    value: _value,
    connection: _connection
  };
}

export function serializesetDataResult(result: string): ArrayBuffer {
  const sizer = new WriteSizer();
  writesetDataResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writesetDataResult(encoder, result);
  return buffer;
}

export function writesetDataResult(writer: Write, result: string): void {
  writer.writeString(result);
}

export class Input_deployContract {
  connection: Types.Ethereum_Connection | null;
}

export function deserializedeployContractArgs(argsBuf: ArrayBuffer): Input_deployContract {
  const reader = new ReadDecoder(argsBuf);
  var numFields = reader.readMapLength();

  var _connection: Types.Ethereum_Connection | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "connection") {
      var object: Types.Ethereum_Connection | null = null;
      if (!reader.isNextNil()) {
        object = Types.Ethereum_Connection.read(reader);
      }
      _connection = object;
    }
  }


  return {
    connection: _connection
  };
}

export function serializedeployContractResult(result: string): ArrayBuffer {
  const sizer = new WriteSizer();
  writedeployContractResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writedeployContractResult(encoder, result);
  return buffer;
}

export function writedeployContractResult(writer: Write, result: string): void {
  writer.writeString(result);
}

export class Input_setIpfsData {
  options: Types.SetIpfsDataOptions;
  connection: Types.Ethereum_Connection | null;
}

export function deserializesetIpfsDataArgs(argsBuf: ArrayBuffer): Input_setIpfsData {
  const reader = new ReadDecoder(argsBuf);
  var numFields = reader.readMapLength();

  var _options: Types.SetIpfsDataOptions | null = null;
  var _optionsSet: bool = false;
  var _connection: Types.Ethereum_Connection | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    if (field == "options") {
      const object = Types.SetIpfsDataOptions.read(reader);
      _options = object;
      _optionsSet = true;
    }
    else if (field == "connection") {
      var object: Types.Ethereum_Connection | null = null;
      if (!reader.isNextNil()) {
        object = Types.Ethereum_Connection.read(reader);
      }
      _connection = object;
    }
  }

  if (!_options || !_optionsSet) {
    throw new Error("Missing required argument: 'options: SetIpfsDataOptions'");
  }

  return {
    options: _options,
    connection: _connection
  };
}

export function serializesetIpfsDataResult(result: Types.SetIpfsDataResult): ArrayBuffer {
  const sizer = new WriteSizer();
  writesetIpfsDataResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writesetIpfsDataResult(encoder, result);
  return buffer;
}

export function writesetIpfsDataResult(writer: Write, result: Types.SetIpfsDataResult): void {
  Types.SetIpfsDataResult.write(writer, result);
}
