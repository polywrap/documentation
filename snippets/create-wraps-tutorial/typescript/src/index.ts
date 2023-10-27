import { ModuleBase, Args_obscure } from './wrap';

export class Module extends ModuleBase {
  obscure(args: Args_obscure): string {
    // handle default values
    const chaosLevel = args.chaosLevel || 1;

    // obscure the data with chaos
    let obscured: string = "";
    for (let i = 0; i < args.data.length; ++i) {
      const data = args.data[i];
      // shift each character by the chaos level
      obscured += data
        .split("")
        .map((char: string) => char.charCodeAt(0) + chaosLevel)
        .map((charCode: number) => String.fromCharCode(charCode))
        .join("")
    }
    return obscured;
  }
}