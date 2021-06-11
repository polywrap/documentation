import {
  Nullable,
  Write,
  WriteSizer,
  WriteEncoder,
  ReadDecoder
} from "@web3api/wasm-as";
import * as Types from "../..";

export class Input_catFile {
  cid: string;
  options: Types.Ipfs_Options | null;
}

export function serializecatFileArgs(input: Input_catFile): ArrayBuffer {
  const sizer = new WriteSizer();
  writecatFileArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writecatFileArgs(encoder, input);
  return buffer;
}

export function writecatFileArgs(
  writer: Write,
  input: Input_catFile
): void {
  writer.writeMapLength(2);
  writer.writeString("cid");
  writer.writeString(input.cid);
  writer.writeString("options");
  if (input.options) {
    Types.Ipfs_Options.write(writer, input.options as Types.Ipfs_Options);
  } else {
    writer.writeNil();
  }
}

export function deserializecatFileResult(buffer: ArrayBuffer): ArrayBuffer {
  const reader = new ReadDecoder(buffer);
  return reader.readBytes();
}

export class Input_resolve {
  cid: string;
  options: Types.Ipfs_Options | null;
}

export function serializeresolveArgs(input: Input_resolve): ArrayBuffer {
  const sizer = new WriteSizer();
  writeresolveArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writeresolveArgs(encoder, input);
  return buffer;
}

export function writeresolveArgs(
  writer: Write,
  input: Input_resolve
): void {
  writer.writeMapLength(2);
  writer.writeString("cid");
  writer.writeString(input.cid);
  writer.writeString("options");
  if (input.options) {
    Types.Ipfs_Options.write(writer, input.options as Types.Ipfs_Options);
  } else {
    writer.writeNil();
  }
}

export function deserializeresolveResult(buffer: ArrayBuffer): Types.Ipfs_ResolveResult | null {
  const reader = new ReadDecoder(buffer);
  var object: Types.Ipfs_ResolveResult | null = null;
  if (!reader.isNextNil()) {
    object = Types.Ipfs_ResolveResult.read(reader);
  }
  return object;
}

export class Input_tryResolveUri {
  authority: string;
  path: string;
}

export function serializetryResolveUriArgs(input: Input_tryResolveUri): ArrayBuffer {
  const sizer = new WriteSizer();
  writetryResolveUriArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writetryResolveUriArgs(encoder, input);
  return buffer;
}

export function writetryResolveUriArgs(
  writer: Write,
  input: Input_tryResolveUri
): void {
  writer.writeMapLength(2);
  writer.writeString("authority");
  writer.writeString(input.authority);
  writer.writeString("path");
  writer.writeString(input.path);
}

export function deserializetryResolveUriResult(buffer: ArrayBuffer): Types.Ipfs_ApiResolver_MaybeUriOrManifest | null {
  const reader = new ReadDecoder(buffer);
  var object: Types.Ipfs_ApiResolver_MaybeUriOrManifest | null = null;
  if (!reader.isNextNil()) {
    object = Types.Ipfs_ApiResolver_MaybeUriOrManifest.read(reader);
  }
  return object;
}

export class Input_getFile {
  path: string;
}

export function serializegetFileArgs(input: Input_getFile): ArrayBuffer {
  const sizer = new WriteSizer();
  writegetFileArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoder = new WriteEncoder(buffer);
  writegetFileArgs(encoder, input);
  return buffer;
}

export function writegetFileArgs(
  writer: Write,
  input: Input_getFile
): void {
  writer.writeMapLength(1);
  writer.writeString("path");
  writer.writeString(input.path);
}

export function deserializegetFileResult(buffer: ArrayBuffer): ArrayBuffer | null {
  const reader = new ReadDecoder(buffer);
  return reader.readNullableBytes();
}
