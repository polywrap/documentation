// $start: as-simple-storage-index-imports
import {
  Ethereum_Module,
  Args_deployContract,
  Args_setData,
  Args_getData,
  Ipfs_Module,
  Args_getIpfsData,
  Args_setIpfsData,
  SetIpfsDataResult,
} from "./wrap";
// $end
import { abi, bytecode } from "./contracts/SimpleStorage";

export function getData(args: Args_getData): u32 {
  const res = Ethereum_Module.callContractView({
    address: args.address,
    method: "function get() view returns (uint256)",
    args: null,
    connection: args.connection,
  }).unwrap();

  return U32.parseInt(res);
}

export function setData(args: Args_setData): string {
  const res = Ethereum_Module.callContractMethod({
    address: args.address,
    method: "function set(uint256 value)",
    args: [args.value.toString()],
    connection: args.connection,
    txOverrides: null,
  }).unwrap();

  return res.hash;
}

export function deployContract(args: Args_deployContract): string {
  return Ethereum_Module.deployContract({
    abi,
    bytecode,
    args: null,
    connection: args.connection,
  }).unwrap();
}

// $start: as-simple-storage-getIpfs-method
export function getIpfsData(args: Args_getIpfsData): string {
  const hash = Ethereum_Module.callContractView({
    address: args.address,
    method: 'function getHash() view returns (string)',
    args: null,
    connection: args.connection
  }).unwrap();

  return String.UTF8.decode(
    Ipfs_Module.cat({ cid: hash, options: null }).unwrap()
  );
}
// $end

// $start: as-simple-storage-setIpfs-method
export function setIpfsData(args: Args_setIpfsData): SetIpfsDataResult {
  // 1. Upload the data to IPFS
  const ipfsHash = Ipfs_Module.addFile({
    data: String.UTF8.encode(args.options.data),
  }).unwrap();

  // 2. Add the data's IPFS hash to SimpleStorage using `setHash(...)`
  const txReceipt = Ethereum_Module.callContractMethodAndWait({
    address: args.options.address,
    method: 'function setHash(string value)',
    args: [ipfsHash],
    connection: args.connection,
    txOverrides: null,
  }).unwrap();

  // 3. Return the result
  return {
    ipfsHash,
    txReceipt: txReceipt.transactionHash,
  };
}
// $end