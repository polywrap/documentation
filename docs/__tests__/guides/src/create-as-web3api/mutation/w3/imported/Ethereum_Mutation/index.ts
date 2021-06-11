import {
  w3_subinvoke,
  Nullable
} from "@web3api/wasm-as";
import {
  serializesendTransactionArgs,
  deserializesendTransactionResult,
  Input_sendTransaction,
  serializedeployContractArgs,
  deserializedeployContractResult,
  Input_deployContract
} from "./serialization";
import * as Types from "../..";

export class Ethereum_Mutation {

  public static uri: string = "w3://ens/ethereum.web3api.eth";

  public static sendTransaction(input: Input_sendTransaction): string {
    const args = serializesendTransactionArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ethereum.web3api.eth",
      "mutation",
      "sendTransaction",
      args
    );
    return deserializesendTransactionResult(result);
  }

  public static deployContract(input: Input_deployContract): string {
    const args = serializedeployContractArgs(input);
    const result = w3_subinvoke(
      "w3://ens/ethereum.web3api.eth",
      "mutation",
      "deployContract",
      args
    );
    return deserializedeployContractResult(result);
  }
}
