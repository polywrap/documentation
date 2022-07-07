// $start: js-e2e-test-init
import { initTestEnvironment, stopTestEnvironment } from "@polywrap/test-env-js";

jest.setTimeout(360000);

describe('Wrapper Test', () => {

  beforeAll(async () => {
    // initialize test environment
    await initTestEnvironment();
  });

  afterAll(async () => {
    // stop test environment
    await stopTestEnvironment();
  });

  test("", async () => { });
});
// $end