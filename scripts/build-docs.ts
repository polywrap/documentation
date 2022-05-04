import * as SnippetsBuild from "./snippets-build";
import * as SnippetsExtract from "./snippets-extract";
import * as SnippetsInject from "./snippets-inject";

import rimraf from "rimraf";
import path from "path";
import * as fse from "fs-extra";
import fs from "fs";

async function main() {
  const destDocsDir = path.resolve(path.join(__dirname, "../docs"));
  const sourceDocsDir = path.resolve(path.join(__dirname, "../src/docs"));

  // 1. Clear the "docs/" folder
  console.log("- Remove ./docs");
  rimraf.sync(
    path.join(__dirname, "../docs")
  );

  // 2. Copy "src/docs/" to "docs/"
  console.log("- Copy ./src/docs to ./docs");
  if (!fs.existsSync(destDocsDir)) {
    fs.mkdirSync(destDocsDir);
  }

  fse.copySync(
    sourceDocsDir,
    destDocsDir,
    {  overwrite: true  }
  );

  // 3. Run snippets-build
  console.log("- Build ./snippets");
  await SnippetsBuild.run();

  // 4. Run snippets-extract
  console.log("- Extract ./snippets");
  await SnippetsExtract.run();

  // 5. Run snippets-inject
  console.log("- Inject ./snippets into ./docs");
  await SnippetsInject.run();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
