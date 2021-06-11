import {
  setData,
  deployContract,
  setIpfsData
} from "../../index";
import {
  deserializesetDataArgs,
  serializesetDataResult,
  deserializedeployContractArgs,
  serializedeployContractResult,
  deserializesetIpfsDataArgs,
  serializesetIpfsDataResult
} from "./serialization";

export function setDataWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesetDataArgs(argsBuf);
  const result = setData({
    address: args.address,
    value: args.value,
    connection: args.connection
  });
  return serializesetDataResult(result);
}

export function deployContractWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializedeployContractArgs(argsBuf);
  const result = deployContract({
    connection: args.connection
  });
  return serializedeployContractResult(result);
}

export function setIpfsDataWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesetIpfsDataArgs(argsBuf);
  const result = setIpfsData({
    options: args.options,
    connection: args.connection
  });
  return serializesetIpfsDataResult(result);
}
