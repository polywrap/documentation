import { ModuleBase, Args_obscure, Sha3_Module } from './wrap';

export class Module extends ModuleBase {
  obscure(args: Args_obscure): string {
    // handle default values
    const chaosLevel = args.chaosLevel || 1;

    // obscure the data with chaos
    let obscured: string = "";
    for (let i = 0; i < args.data.length; ++i) {
      let data = args.data[i];
      for (let j = 0; j < chaosLevel; ++j) {
        const result = Sha3_Module.keccak_256({ message: data })
        if (!result.ok) throw Error("hash failed");
        data = result.value!!;
      }
      obscured += data;
    }
    return obscured;
  }
}