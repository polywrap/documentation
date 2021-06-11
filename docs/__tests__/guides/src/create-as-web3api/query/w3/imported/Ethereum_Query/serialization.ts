import {
  Nullable,
  Write,
  WriteSizer,
  WriteEncoder,
  ReadDecoder
} from "@web3api/wasm-as";
import * as Types from "../..";

export class Input_callView {
  address: string;
  method: string;
  args: Array<string> | null;
  connection: Types.Ethereum_Connection | null;
}

export function serializecallViewArgs(input: Input_callView): ArrayBuffer {
  const sizer = new WriteSizer();
  writecallViewArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writecallViewArgs(encoder, input);
  return buffer;
}

export function writecallViewArgs(
  writer: Write,
  input: Input_callView
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

export function deserializecallViewResult(buffer: ArrayBuffer): string {
  const reader = new ReadDecoder(buffer);
  return reader.readString();
}
