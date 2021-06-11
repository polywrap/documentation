import {
  w3_subinvoke,
  Nullable
} from "@web3api/wasm-as";
import {
  serializeaddFileArgs,
  deserializeaddFileResult,
  Input_addFile
} from "./serialization";
import * as Types from "../..";

export class Ipfs_Mutation {

  public static uri: string = "w3://ens/ipfs.web3api.eth";

  public static addFile(input: Input_addFile): string {
    const args = serializeaddFileArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ipfs.web3api.eth",
      "mutation",
      "addFile",
      args
    );
    return deserializeaddFileResult(result);
  }
}
