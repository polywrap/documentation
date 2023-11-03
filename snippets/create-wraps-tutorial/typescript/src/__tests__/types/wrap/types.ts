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

/// Imported Modules START ///

/* URI: "wrap://ens/sample.eth" */
export interface Oracle_Module_Args_obscure {
  data: Array<Types.String>;
  chaosLevel?: Types.Int | null;
}

/* URI: "wrap://ens/sample.eth" */
export interface Oracle_Module_Args_enlighten {
  question: Types.String;
  apiKey: Types.String;
}

/* URI: "wrap://ens/sample.eth" */
export class Oracle {
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
    return "wrap://ens/sample.eth";
  }
  protected _getDefaultEnv(): Record<string, unknown> | undefined {
    return undefined;
  }

  async obscure(
    args: Oracle_Module_Args_obscure,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "obscure",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };

  async enlighten(
    args: Oracle_Module_Args_enlighten,
    client?: CoreClient,
    env?: Record<string, unknown>,
    uri?: string,
  ): Promise<InvokeResult<Types.String>> {
    const _client = this._getClient(client);
    const _env = this._getEnv(env);
    const _uri = this._getUri(uri);

    return _client.invoke<Types.String>({
      uri: Uri.from(_uri),
      method: "enlighten",
      args: (args as unknown) as Record<string, unknown>,
      env: _env,
    });
  };
};

/// Imported Modules END ///
