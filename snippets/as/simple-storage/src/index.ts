// $start: as-simple-storage-index-imports
import {
  Ethereum_Module,
  Args_deployContract,
  Args_setData,
  Args_getData,
  Ipfs_Module,
  Args_getIpfsData,
  Args_setIpfsData,
  SetIpfsDataResult, ModuleBase
} from './wrap';
// $end
import { abi, bytecode } from "./contracts/SimpleStorage";

export class Module extends ModuleBase {

  getData(args: Args_getData): u32 {
    const res = Ethereum_Module.callContractView({
      address: args.address,
      method: "function get() view returns (uint256)",
      args: null,
      connection: args.connection,
    }).unwrap();

    return U32.parseInt(res);
  }

  setData(args: Args_setData): string {
    const res = Ethereum_Module.callContractMethod({
      address: args.address,
      method: "function set(uint256 value)",
      args: [args.value.toString()],
      connection: args.connection,
      options: null,
    }).unwrap();

    return res.hash;
  }

  deployContract(args: Args_deployContract): string {
    return Ethereum_Module.deployContract({
      abi,
      bytecode,
      args: null,
      connection: args.connection,
      options: null,
    }).unwrap();
  }

// $start: as-simple-storage-getIpfs-method
  getIpfsData(args: Args_getIpfsData): string {
    const hash = Ethereum_Module.callContractView({
      address: args.address,
      method: 'function getHash() view returns (string)',
      args: null,
      connection: args.connection
    }).unwrap();

    return String.UTF8.decode(
      Ipfs_Module.cat({
        cid: hash,
        ipfsProvider: args.ipfsProvider,
        timeout: null,
        catOptions: null
      }).unwrap()
    );
  }
// $end

// $start: as-simple-storage-setIpfs-method
  setIpfsData(args: Args_setIpfsData): SetIpfsDataResult {
    // 1. Upload the data to IPFS
    const ipfsAddResult = Ipfs_Module.addFile({
      data: {
        name: "data",
        data: String.UTF8.encode(args.options.data)
      },
      ipfsProvider: args.ipfsProvider,
      timeout: null,
      addOptions: null,
    }).unwrap();
    const ipfsHash = ipfsAddResult.hash;

    // 2. Add the data's IPFS hash to SimpleStorage using `setHash(...)`
    const txReceipt = Ethereum_Module.callContractMethodAndWait({
      address: args.options.address,
      method: 'function setHash(string value)',
      args: [ipfsHash],
      connection: args.connection,
      options: null,
    }).unwrap();

    // 3. Return the result
    return {
      ipfsHash,
      txReceipt: txReceipt.transactionHash,
    };
  }
// $end
}