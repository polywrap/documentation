// $start: js-e2e-test-init
import { initTestEnvironment, stopTestEnvironment } from "@web3api/test-env-js";

describe('Wrapper Test', () => {

  beforeAll(async () => {
    // initialize test environment
    const { ipfs, ethereum, ensAddress, registrarAddress, resolverAddress } = await initTestEnvironment();
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });
});
// $end