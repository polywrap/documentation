import {
  getData,
  getIpfsData
} from "../../index";
import {
  deserializegetDataArgs,
  serializegetDataResult,
  deserializegetIpfsDataArgs,
  serializegetIpfsDataResult
} from "./serialization";

export function getDataWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetDataArgs(argsBuf);
  const result = getData({
    address: args.address,
    connection: args.connection
  });
  return serializegetDataResult(result);
}

export function getIpfsDataWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetIpfsDataArgs(argsBuf);
  const result = getIpfsData({
    address: args.address,
    connection: args.connection
  });
  return serializegetIpfsDataResult(result);
}
