// $start: js-e2e-test-build
// highlight-start
import { Commands } from '@polywrap/cli-js';
import path from "path";
// highlight-end

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // path to the wrapper's build folder
  let wrapperPath: string;

  beforeAll(async () => {
    // initialize test environment
    await Commands.infra("up", {
      modules: ["eth-ens-ipfs"],
    });

    // highlight-start
    // absolute path to directory with polywrap.yaml
    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");
    // build the wrapper
    await Commands.build({ cwd: wrapperDirectory });
    wrapperPath = `wrap://fs/${wrapperDirectory}/build`
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await Commands.infra("down", {
      modules: ["eth-ens-ipfs"],
    });
  });

  test("", async () => { });
});
// $end