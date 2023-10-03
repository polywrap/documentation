// @ts-ignore
import * as Types from "./";

// @ts-ignore
import {
  CoreClient,
  InvokeResult,
  Uri,
} from "@polywrap/core-js";
import { PolywrapClient } from "@polywrap/client-js";

export type UInt = number;
export type UInt8 = number;
export type UInt16 = number;
export type UInt32 = number;
export type Int = number;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Bytes = Uint8Array;
export type BigInt = string;
export type BigNumber = string;
export type Json = string;
export type String = string;
export type Boolean = boolean;

/// Imported Objects START ///

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Connection {
  node?: Types.String | null;
  networkNameOrChainId?: Types.String | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_TxRequest {
  to?: Types.String | null;
  from?: Types.String | null;
  data?: Types.String | null;
  type?: Types.UInt32 | null;
  chainId?: Types.BigInt | null;
  accessList?: Array<Types.Ethers_AccessItem> | null;
  gasLimit?: Types.BigInt | null;
  maxFeePerGas?: Types.BigInt | null;
  maxPriorityFeePerGas?: Types.BigInt | null;
  gasPrice?: Types.BigInt | null;
  value?: Types.BigInt | null;
  nonce?: Types.UInt32 | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_AccessItem {
  address: Types.String;
  storageKeys: Array<Types.String>;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_TxResponse {
  hash: Types.String;
  to?: Types.String | null;
  from: Types.String;
  nonce: Types.UInt32;
  gasLimit: Types.BigInt;
  maxFeePerGas?: Types.BigInt | null;
  maxPriorityFeePerGas?: Types.BigInt | null;
  gasPrice?: Types.BigInt | null;
  value: Types.BigInt;
  chainId: Types.BigInt;
  blockNumber?: Types.BigInt | null;
  blockHash?: Types.String | null;
  timestamp?: Types.UInt32 | null;
  r?: Types.String | null;
  s?: Types.String | null;
  v?: Types.UInt32 | null;
  type?: Types.UInt32 | null;
  accessList?: Array<Types.Ethers_AccessItem> | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Log {
  blockNumber: Types.BigInt;
  blockHash: Types.String;
  transactionIndex: Types.UInt32;
  removed: Types.Boolean;
  address: Types.String;
  data: Types.String;
  topics: Array<Types.String>;
  transactionHash: Types.String;
  logIndex: Types.UInt32;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_TxReceipt {
  to: Types.String;
  from: Types.String;
  contractAddress: Types.String;
  transactionIndex: Types.UInt32;
  root?: Types.String | null;
  gasUsed: Types.BigInt;
  logsBloom: Types.String;
  transactionHash: Types.String;
  logs: Array<Types.Ethers_Log>;
  blockNumber: Types.BigInt;
  blockHash: Types.String;
  confirmations: Types.UInt32;
  cumulativeGasUsed: Types.BigInt;
  effectiveGasPrice: Types.BigInt;
  type: Types.UInt32;
  status?: Types.UInt32 | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_TxOptions {
  gasLimit?: Types.BigInt | null;
  maxFeePerGas?: Types.BigInt | null;
  maxPriorityFeePerGas?: Types.BigInt | null;
  gasPrice?: Types.BigInt | null;
  value?: Types.BigInt | null;
  nonce?: Types.UInt32 | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_StaticTxResult {
  result: Types.String;
  error: Types.Boolean;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Eip1559FeesEstimate {
  maxFeePerGas: Types.BigInt;
  maxPriorityFeePerGas: Types.BigInt;
}

/// Imported Objects END ///

/// Imported Modules START ///

/* URI: "wrapscan.io/polywrap/logging@1" */
export interface Logging_Module_Args_debug {
  message: Types.String;
}

/* URI: "wrapscan.io/polywrap/logging@1" */
export interface Logging_Module_Args_info {
  message: Types.String;
}

/* URI: "wrapscan.io/polywrap/logging@1" */
export interface Logging_Module_Args_warn {
  message: Types.String;
}

/* URI: "wrapscan.io/polywrap/logging@1" */
export interface Logging_Module_Args_error {
  message: Types.String;
}

/* URI: "wrapscan.io/polywrap/logging@1" */
export interface Logging_Module_Args_loggers {
}

/* URI: "wrapscan.io/polywrap/logging@1" */
export class Logging {
  protected _defaultClient: CoreClient;
  protected _defaultUri: string;
  protected _defaultEnv?: Record<string, unknown>;

  constructor(
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ) {
    this._defaultClient = this._getClient(client);
    this._defaultEnv = this._getEnv(env);
    this._defaultUri = this._getUri(uri);
  }

  public get client(): CoreClient {
    return this._defaultClient;
  }

  public get uri(): string {
    return this._defaultUri;
  }

  public get env(): Record<string, unknown> | undefined {
    return this._defaultEnv;
  }

  private _getClient(client?: CoreClient): CoreClient {
    return client || this._defaultClient || this._getDefaultClient();
  }

  private _getUri(uri?: string): string {
    return uri || this._defaultUri || this._getDefaultUri();
  }

  private _getEnv(env?: Record<string, unknown>): Record<string, unknown> | undefined {
    return env || this._defaultEnv || this._getDefaultEnv();
  }

  protected _getDefaultClient(): CoreClient {
    return new PolywrapClient();
  }
  protected _getDefaultUri(): string {
    return "wrapscan.io/polywrap/logging@1";
  }
  protected _getDefaultEnv(): Record<string, unknown> | undefined {
    return undefined;
  }

  async debug(
    args: Logging_Module_Args_debug,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Boolean>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Boolean>({
      uri: Uri.from(_uri),
      method: "debug",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async info(
    args: Logging_Module_Args_info,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Boolean>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Boolean>({
      uri: Uri.from(_uri),
      method: "info",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async warn(
    args: Logging_Module_Args_warn,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Boolean>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Boolean>({
      uri: Uri.from(_uri),
      method: "warn",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async error(
    args: Logging_Module_Args_error,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Boolean>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Boolean>({
      uri: Uri.from(_uri),
      method: "error",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async loggers(
    args: Logging_Module_Args_loggers,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Array<Types.String>>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Array<Types.String>>({
      uri: Uri.from(_uri),
      method: "loggers",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };
};

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getChainId {
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getSignerAddress {
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getSignerBalance {
  blockTag?: Types.BigInt | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getGasPrice {
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_estimateEip1559Fees {
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getSignerTransactionCount {
  blockTag?: Types.BigInt | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_checkAddress {
  address: Types.String;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_callContractView {
  address: Types.String;
  method: Types.String;
  args?: Array<Types.String> | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_callContractStatic {
  address: Types.String;
  method: Types.String;
  args?: Array<Types.String> | null;
  options?: Types.Ethers_TxOptions | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_getBalance {
  address: Types.String;
  blockTag?: Types.BigInt | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_sendRpc {
  method: Types.String;
  params: Array<Types.String>;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_estimateTransactionGas {
  tx: Types.Ethers_TxRequest;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_awaitTransaction {
  txHash: Types.String;
  confirmations: Types.UInt32;
  timeout?: Types.UInt32 | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_sendTransaction {
  tx: Types.Ethers_TxRequest;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_sendTransactionAndWait {
  tx: Types.Ethers_TxRequest;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_deployContract {
  abi: Types.String;
  bytecode: Types.String;
  args?: Array<Types.String> | null;
  options?: Types.Ethers_TxOptions | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_estimateContractCallGas {
  address: Types.String;
  method: Types.String;
  args?: Array<Types.String> | null;
  options?: Types.Ethers_TxOptions | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_callContractMethod {
  address: Types.String;
  method: Types.String;
  args?: Array<Types.String> | null;
  options?: Types.Ethers_TxOptions | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_callContractMethodAndWait {
  address: Types.String;
  method: Types.String;
  args?: Array<Types.String> | null;
  options?: Types.Ethers_TxOptions | null;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_signMessage {
  message: Types.String;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_signMessageBytes {
  bytes: Types.Bytes;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_signTransaction {
  tx: Types.Ethers_TxRequest;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_signTypedData {
  payload: Types.Json;
  connection?: Types.Ethers_Connection | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_generateCreate2Address {
  address: Types.String;
  salt: Types.String;
  initCode: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_keccak256BytesEncodePacked {
  value: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_keccak256 {
  value: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_encodeMetaTransaction {
  operation?: Types.BigInt | null;
  to: Types.String;
  value: Types.BigInt;
  data: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_encodeParams {
  types: Array<Types.String>;
  values: Array<Types.String>;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_encodeFunction {
  method: Types.String;
  args?: Array<Types.String> | null;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_toWei {
  eth: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_toEth {
  wei: Types.String;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export interface Ethers_Module_Args_solidityPack {
  types: Array<Types.String>;
  values: Array<Types.String>;
}

/* URI: "wrapscan.io/polywrap/ethers@1.0" */
export class Ethers {
  protected _defaultClient: CoreClient;
  protected _defaultUri: string;
  protected _defaultEnv?: Record<string, unknown>;

  constructor(
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ) {
    this._defaultClient = this._getClient(client);
    this._defaultEnv = this._getEnv(env);
    this._defaultUri = this._getUri(uri);
  }

  public get client(): CoreClient {
    return this._defaultClient;
  }

  public get uri(): string {
    return this._defaultUri;
  }

  public get env(): Record<string, unknown> | undefined {
    return this._defaultEnv;
  }

  private _getClient(client?: CoreClient): CoreClient {
    return client || this._defaultClient || this._getDefaultClient();
  }

  private _getUri(uri?: string): string {
    return uri || this._defaultUri || this._getDefaultUri();
  }

  private _getEnv(env?: Record<string, unknown>): Record<string, unknown> | undefined {
    return env || this._defaultEnv || this._getDefaultEnv();
  }

  protected _getDefaultClient(): CoreClient {
    return new PolywrapClient();
  }
  protected _getDefaultUri(): string {
    return "wrapscan.io/polywrap/ethers@1.0";
  }
  protected _getDefaultEnv(): Record<string, unknown> | undefined {
    return undefined;
  }

  async getChainId(
    args: Ethers_Module_Args_getChainId,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "getChainId",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async getSignerAddress(
    args: Ethers_Module_Args_getSignerAddress,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "getSignerAddress",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async getSignerBalance(
    args: Ethers_Module_Args_getSignerBalance,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "getSignerBalance",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async getGasPrice(
    args: Ethers_Module_Args_getGasPrice,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "getGasPrice",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async estimateEip1559Fees(
    args: Ethers_Module_Args_estimateEip1559Fees,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_Eip1559FeesEstimate>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_Eip1559FeesEstimate>({
      uri: Uri.from(_uri),
      method: "estimateEip1559Fees",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async getSignerTransactionCount(
    args: Ethers_Module_Args_getSignerTransactionCount,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "getSignerTransactionCount",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async checkAddress(
    args: Ethers_Module_Args_checkAddress,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Boolean>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Boolean>({
      uri: Uri.from(_uri),
      method: "checkAddress",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async callContractView(
    args: Ethers_Module_Args_callContractView,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "callContractView",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async callContractStatic(
    args: Ethers_Module_Args_callContractStatic,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_StaticTxResult>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_StaticTxResult>({
      uri: Uri.from(_uri),
      method: "callContractStatic",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async getBalance(
    args: Ethers_Module_Args_getBalance,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "getBalance",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async sendRpc(
    args: Ethers_Module_Args_sendRpc,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "sendRpc",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async estimateTransactionGas(
    args: Ethers_Module_Args_estimateTransactionGas,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "estimateTransactionGas",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async awaitTransaction(
    args: Ethers_Module_Args_awaitTransaction,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_TxReceipt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_TxReceipt>({
      uri: Uri.from(_uri),
      method: "awaitTransaction",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async sendTransaction(
    args: Ethers_Module_Args_sendTransaction,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_TxResponse>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_TxResponse>({
      uri: Uri.from(_uri),
      method: "sendTransaction",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async sendTransactionAndWait(
    args: Ethers_Module_Args_sendTransactionAndWait,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_TxReceipt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_TxReceipt>({
      uri: Uri.from(_uri),
      method: "sendTransactionAndWait",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async deployContract(
    args: Ethers_Module_Args_deployContract,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "deployContract",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async estimateContractCallGas(
    args: Ethers_Module_Args_estimateContractCallGas,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.BigInt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.BigInt>({
      uri: Uri.from(_uri),
      method: "estimateContractCallGas",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async callContractMethod(
    args: Ethers_Module_Args_callContractMethod,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_TxResponse>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_TxResponse>({
      uri: Uri.from(_uri),
      method: "callContractMethod",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async callContractMethodAndWait(
    args: Ethers_Module_Args_callContractMethodAndWait,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.Ethers_TxReceipt>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.Ethers_TxReceipt>({
      uri: Uri.from(_uri),
      method: "callContractMethodAndWait",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async signMessage(
    args: Ethers_Module_Args_signMessage,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "signMessage",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async signMessageBytes(
    args: Ethers_Module_Args_signMessageBytes,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "signMessageBytes",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async signTransaction(
    args: Ethers_Module_Args_signTransaction,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "signTransaction",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async signTypedData(
    args: Ethers_Module_Args_signTypedData,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "signTypedData",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async generateCreate2Address(
    args: Ethers_Module_Args_generateCreate2Address,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "generateCreate2Address",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async keccak256BytesEncodePacked(
    args: Ethers_Module_Args_keccak256BytesEncodePacked,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "keccak256BytesEncodePacked",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async keccak256(
    args: Ethers_Module_Args_keccak256,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "keccak256",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async encodeMetaTransaction(
    args: Ethers_Module_Args_encodeMetaTransaction,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "encodeMetaTransaction",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async encodeParams(
    args: Ethers_Module_Args_encodeParams,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "encodeParams",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async encodeFunction(
    args: Ethers_Module_Args_encodeFunction,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "encodeFunction",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async toWei(
    args: Ethers_Module_Args_toWei,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "toWei",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async toEth(
    args: Ethers_Module_Args_toEth,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "toEth",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async solidityPack(
    args: Ethers_Module_Args_solidityPack,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "solidityPack",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };
};

/// Imported Modules END ///
