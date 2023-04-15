// $start: testing-in-typescript-final
import { Commands } from "@polywrap/cli-js";
import {
  ClientConfigBuilder,
  PolywrapClient
} from "@polywrap/client-js";
import { Wrapper_Module } from "./types/wrap";

jest.setTimeout(50000);

describe("e2e Wrapper Tests", () => {
  const config = new ClientConfigBuilder()
  .addDefaults()
  .build();

  const client = new PolywrapClient(config);

  const buildDir = `${__dirname}/../../build`;
  const uri = `wrap://file/${buildDir}`;

  beforeAll(async () => {
    const result = await Commands.build({}, {
      cwd: `${__dirname}/../../`
    });

    if (result.exitCode !== 0) {
      console.log(result.stdout);
      console.error(result.stderr);
      fail("Failed to build wrapper.");
    }
  });

  test("Test Case", async () => {
    const result = await Wrapper_Module.sampleMethod({
      arg: "foo bar baz"
    }, client, uri);

    expect(result.ok).toBe(true);
    if (!result.ok) fail(result.error);

    expect(result.value.result).toBe("foo bar baz");
  });
});
// $end
