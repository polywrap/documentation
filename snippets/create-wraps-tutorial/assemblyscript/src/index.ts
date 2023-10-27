import { ModuleBase, Args_obscure } from './wrap';

export class Module extends ModuleBase {
  obscure(args: Args_obscure): string {
    // handle default values
    const chaosLevel: i32 = (args.chaosLevel == null || args.chaosLevel!!.unwrap() < 1)
      ? 1
      : args.chaosLevel!!.unwrap();

    let obscured: string = "";
    for (let i = 0; i < args.data.length; ++i) {
      const data = args.data[i];
      // shift each character by the chaos level
      for (let j = 0; j < data.length; ++j) {
        const charCode = data.charCodeAt(j) + chaosLevel;
        obscured += String.fromCharCode(charCode);
      }
    }
    return obscured;
  }
}
