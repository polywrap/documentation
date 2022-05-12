// $start: js-e2e-test-init
import { initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";

jest.setTimeout(120000);

describe('Wrapper Test', () => {

  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end