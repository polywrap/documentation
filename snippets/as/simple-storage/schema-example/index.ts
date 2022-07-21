import {
  Ethereum_Module,
  Ipfs_Module,
  Args_getIpfsData,
  Args_setIpfsData,
  SetIpfsDataResult,
} from "./wrap";

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