import {
  Nullable,
  Write,
  WriteSizer,
  WriteEncoder,
  ReadDecoder
} from "@web3api/wasm-as";
import * as Types from "../..";

export class Input_addFile {
  data: ArrayBuffer;
}

export function serializeaddFileArgs(input: Input_addFile): ArrayBuffer {
  const sizer = new WriteSizer();
  writeaddFileArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeaddFileArgs(encoder, input);
  return buffer;
}

export function writeaddFileArgs(
  writer: Write,
  input: Input_addFile
): void {
  writer.writeMapLength(1);
  writer.writeString("data");
  writer.writeBytes(input.data);
}

export function deserializeaddFileResult(buffer: ArrayBuffer): string {
  const reader = new ReadDecoder(buffer);
  return reader.readString();
}
