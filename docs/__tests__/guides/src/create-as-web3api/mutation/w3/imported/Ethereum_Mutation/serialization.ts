import {
  Nullable,
  Write,
  WriteSizer,
  WriteEncoder,
  ReadDecoder
} from "@web3api/wasm-as";
import * as Types from "../..";

export class Input_sendTransaction {
  address: string;
  method: string;
  args: Array<string> | null;
  connection: Types.Ethereum_Connection | null;
}

export function serializesendTransactionArgs(input: Input_sendTransaction): ArrayBuffer {
  const sizer = new WriteSizer();
  writesendTransactionArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writesendTransactionArgs(encoder, input);
  return buffer;
}

export function writesendTransactionArgs(
  writer: Write,
  input: Input_sendTransaction
): void {
  writer.writeMapLength(4);
  writer.writeString("address");
  writer.writeString(input.address);
  writer.writeString("method");
  writer.writeString(input.method);
  writer.writeString("args");
  writer.writeNullableArray(input.args, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.writeString("connection");
  if (input.connection) {
    Types.Ethereum_Connection.write(writer, input.connection as Types.Ethereum_Connection);
  } else {
    writer.writeNil();
  }
}

export function deserializesendTransactionResult(buffer: ArrayBuffer): string {
  const reader = new ReadDecoder(buffer);
  return reader.readString();
}

export class Input_deployContract {
  abi: string;
  bytecode: string;
  args: Array<string> | null;
  connection: Types.Ethereum_Connection | null;
}

export function serializedeployContractArgs(input: Input_deployContract): ArrayBuffer {
  const sizer = new WriteSizer();
  writedeployContractArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writedeployContractArgs(encoder, input);
  return buffer;
}

export function writedeployContractArgs(
  writer: Write,
  input: Input_deployContract
): void {
  writer.writeMapLength(4);
  writer.writeString("abi");
  writer.writeString(input.abi);
  writer.writeString("bytecode");
  writer.writeString(input.bytecode);
  writer.writeString("args");
  writer.writeNullableArray(input.args, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.writeString("connection");
  if (input.connection) {
    Types.Ethereum_Connection.write(writer, input.connection as Types.Ethereum_Connection);
  } else {
    writer.writeNil();
  }
}

export function deserializedeployContractResult(buffer: ArrayBuffer): string {
  const reader = new ReadDecoder(buffer);
  return reader.readString();
}
