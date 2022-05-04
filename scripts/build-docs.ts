import * as SnippetsInject from "./snippets-inject";

import rimraf from "rimraf";
import path from "path";
import * as fse from "fs-extra";
import fs from "fs";

async function main() {
  const destDocsDir = path.resolve(path.join(__dirname, "../docs"));
  const sourceDocsDir = path.resolve(path.join(__dirname, "../src/docs"));

  console.log("- Remove ./docs");
  rimraf.sync(
    path.join(__dirname, "../docs")
  );

  console.log("- Copy ./src/docs to ./docs");
  if (!fs.existsSync(destDocsDir)) {
    fs.mkdirSync(destDocsDir);
  }

  fse.copySync(
    sourceDocsDir,
    destDocsDir,
    {  overwrite: true  }
  );

  console.log("- Inject ./snippets into ./docs");
  await SnippetsInject.run();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
