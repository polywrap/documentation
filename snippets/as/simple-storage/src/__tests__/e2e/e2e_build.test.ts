// $start: js-e2e-test-build
// highlight-start
import { buildWrapper, initTestEnvironment, stopTestEnvironment } from "@polywrap/test-env-js";
import path from "path";
// highlight-end

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // path to the wrapper's build folder
  let wrapperPath: string;

  beforeAll(async () => {
    // initialize test environment
    await initTestEnvironment();

    // highlight-start
    // absolute path to directory with polywrap.yaml
    const wrapperDirectory: string = path.resolve(__dirname + "/../../../");
    // build the wrapper
    await buildWrapper(wrapperDirectory);
    wrapperPath = `wrap://fs/${wrapperDirectory}/build`
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end