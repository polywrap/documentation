// $start: js-e2e-test-init
import { Commands } from "@polywrap/cli-js";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  beforeAll(async () => {
    // initialize test environment
    await Commands.infra("up", {
      modules: ["eth-ens-ipfs"],
    });
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