// $start: js-e2e-test-types
export type UInt8 = number;
export type String = string;

export enum ChainId {
  MAINNET,
  ROPSTEN,
  RINKEBY,
  GOERLI,
  KOVAN,
}

export interface Currency {
  decimals: UInt8;
  symbol?: String | null;
  name?: String | null;
}

export interface Token {
  chainId: ChainId;
  address: String;
  currency: Currency;
}
// $end