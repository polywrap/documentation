// $start: testing-in-typescript-build-import
import { Commands } from "@polywrap/cli-js";
// $end
// $start: testing-in-typescript-config-client-import
import {
  ClientConfigBuilder,
  PolywrapClient
} from "@polywrap/client-js";
// $end
// $start: testing-in-typescript-package-embed-import
import { WasmPackage } from "@polywrap/wasm-js";
import fs from "fs";
// $end
// $start: testing-in-typescript-test-case-typesafe-import
import { Wrapper_Module } from "./types/wrap";
// $end

jest.setTimeout(50000);

describe("e2e Wrapper Tests", () => {
  // $start: testing-in-typescript-config-client
  const config = new ClientConfigBuilder()
  .addDefaults()
  .build();

  const client = new PolywrapClient(config);
  // $end

// $start: testing-in-typescript-file-system-uri
const buildDir = `${__dirname}/../../build`;
const uri = `wrap://file/${buildDir}`;
// $end

  beforeAll(async () => {
    // $start: testing-in-typescript-build
    const result = await Commands.build({}, {
      cwd: `${__dirname}/../../`
    });

    if (result.exitCode !== 0) {
      console.log(result.stdout);
      console.error(result.stderr);
      fail("Failed to build wrapper.");
    }
    // $end

// $start: testing-in-typescript-package-embed
const buildDir = `${__dirname}/../../build`;
const embedPackage = WasmPackage.from(
  fs.readFileSync(`${buildDir}/wrap.info`),
  fs.readFileSync(`${buildDir}/wrap.wasm`)
);

const uri = "wrap://embed/test-wrapper";

const config = new ClientConfigBuilder()
  .addPackage(uri, embedPackage)
  .build();
// $end
  });

// $start: testing-in-typescript-test-case-generic
  test("Test Case", async () => {
    const result = await client.invoke({
      uri,
      method: "sampleMethod",
      args: {
        arg: "foo bar baz"
      }
    });

    expect(result.ok).toBe(true);
    if (!result.ok) fail(result.error);

    expect(result.value).toMatchObject({
      result: "foo bar baz"
    });
  });
// $end

// $start: testing-in-typescript-test-case-typesafe
  test("Test Case", async () => {
    const result = await Wrapper_Module.sampleMethod({
      arg: "foo bar baz"
    }, client, uri);

    expect(result.ok).toBe(true);
    if (!result.ok) fail(result.error);

    expect(result.value.result).toBe("foo bar baz");
  });
// $end
});
