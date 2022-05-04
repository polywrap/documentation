import { runCommand } from "./runCommand";

import path from "path";
import fs from "fs";

export async function run() {
  const snippetsDir = path.resolve(path.join(__dirname, "../snippets"));

  // Build all snippets found
  await buildSnippets(snippetsDir);
}

async function buildSnippets(dir: string) {

  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  // Check for the existence of the "run.sh" root file
  const runShIdx = dirents.findIndex(
    (dirent) => dirent.name === "run.sh" && !dirent.isDirectory()
  );

  if (runShIdx > -1) {
    await buildSnippetProject(
      path.join(dir, dirents[runShIdx].name)
    );
    return;
  }

  // Otherwise, keep iterating through the directories
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      const subDir = path.join(dir, dirent.name);

      await buildSnippets(subDir);
    }
  }
}

async function buildSnippetProject(runShFile: string) {

  console.log("- Build Snippet", runShFile);
  const wd = path.dirname(runShFile);
  const result = await runCommand(runShFile, wd);

  if (result.err) {
    const error = JSON.stringify({
      stdout: result.stdout,
      stderr: result.stderr,
      error: result.err
    }, null, 2);

    fs.writeFileSync(
      path.join(wd, "build-error.log"),
      error
    );

    throw new Error(error);
  }
}
