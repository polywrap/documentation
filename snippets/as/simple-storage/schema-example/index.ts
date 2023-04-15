import {
  Ethereum_Module,
  Ipfs_Module,
  Args_getIpfsData,
  Args_setIpfsData,
  SetIpfsDataResult,
  ModuleBase,
} from "./wrap";

export class Module extends ModuleBase {

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

  setIpfsData(args: Args_setIpfsData): SetIpfsDataResult {
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

    const txReceipt = Ethereum_Module.callContractMethodAndWait({
      address: args.options.address,
      method: 'function setHash(string value)',
      args: [ipfsHash],
      connection: args.connection,
      options: null,
    }).unwrap();

    return {
      ipfsHash,
      txReceipt: txReceipt.transactionHash,
    };
  }
}