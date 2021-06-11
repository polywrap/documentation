import {
  w3_subinvoke,
  Nullable
} from "@web3api/wasm-as";
import {
  serializecallViewArgs,
  deserializecallViewResult,
  Input_callView
} from "./serialization";
import * as Types from "../..";

export class Ethereum_Query {

  public static uri: string = "w3://ens/ethereum.web3api.eth";

  public static callView(input: Input_callView): string {
    const args = serializecallViewArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ethereum.web3api.eth",
      "query",
      "callView",
      args
    );
    return deserializecallViewResult(result);
  }
}
