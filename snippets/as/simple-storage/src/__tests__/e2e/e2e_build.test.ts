// $start: js-e2e-test-build
// highlight-start
import { buildAndDeployWrapper, initTestEnvironment, stopTestEnvironment, providers } from "@polywrap/test-env-js";
import path from "path";
// highlight-end

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  // highlight-start
  // the ENS URI that will be used to query  the wrapper
  let ensUri: string;
  // highlight-end

  beforeAll(async () => {
    // initialize test environment
    await initTestEnvironment();

    // highlight-start
    // deploy api
    const apiPath: string = path.resolve(__dirname + "/../../../"); // absolute path to directory with polywrap.yaml
    const api = await buildAndDeployWrapper({
      wrapperAbsPath: apiPath,
      ipfsProvider: providers.ipfs,
      ethereumProvider: providers.ethereum,
    });
    ensUri = `ens/testnet/${api.ensDomain}`; // we will call our Ethereum test network "testnet"
    // highlight-end
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end