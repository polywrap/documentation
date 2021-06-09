import { runCommand } from "./utils";

import * as fs from "fs";
import * as rimraf from "rimraf";

jest.setTimeout(120000)

describe("create-as-web3api", () => {
  const tmpFolder = __dirname + "/tmp/create-as-web3api/";
  const projectName = "test-project";
  const projectFolder = tmpFolder + "/" + projectName;

  beforeAll(() => {
    if (fs.existsSync(tmpFolder)) {
      rimraf.sync(tmpFolder);
    }

    fs.mkdirSync(tmpFolder, { recursive: true });
  });

  afterAll(() => {
    rimraf.sync(tmpFolder);
  });

  it("step 1", async () => {
    {
      const { stdout } = await runCommand(
        `npx @web3api/cli create api assemblyscript ${projectName}`,
        tmpFolder
      );

      expect(stdout).toContain("You are ready");
    }

    {
      const { stdout } = await runCommand(
        "~/.nvm/nvm install && nvm use",
        projectFolder
      );

      expect(stdout).toContain("Now using node");
    }

    {
      const { stdout } = await runCommand(
        "yarn",
        projectFolder
      );

      expect(stdout).toContain("Done");
    }
  });
});
