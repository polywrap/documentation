import { ModuleBase, Args_obscure, Sha3_Module } from './wrap';

export class Module extends ModuleBase {
  obscure(args: Args_obscure): string {
    // handle default values
    const chaosLevel: i32 = (args.chaosLevel == null || args.chaosLevel!!.unwrap() < 1)
      ? 1
      : args.chaosLevel!!.unwrap();

    let obscured: string = "";
    for (let i = 0; i < args.data.length; ++i) {
      let data = args.data[i];
      for (let j = 0; j < chaosLevel; ++j) {
        data = Sha3_Module.keccak_256({ message: data }).expect("hash failed");
      }
      obscured += data;
    }
    return obscured;
  }
}
