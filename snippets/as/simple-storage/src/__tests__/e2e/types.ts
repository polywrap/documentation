// THIS FILE IS FOR DEMONSTRATION PURPOSES ONLY!

// @ts-ignore
import * as Types from "./";

// $start: js-e2e-test-types
export type String = string;
export type Boolean = boolean;

export interface SetIpfsDataOptions {
  address: Types.String;
  data: Types.String;
}

export interface SetIpfsDataResult {
  ipfsHash: Types.String;
  txReceipt: Types.String;
}

/// Imported Objects START ///

/* URI: "w3://ens/ethereum.web3api.eth" */
export interface Ethereum_Connection {
  node?: Types.String | null;
  networkNameOrChainId?: Types.String | null;
}
// $end