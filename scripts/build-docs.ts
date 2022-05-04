import copyfiles from "copyfiles";
import rimraf from "rimraf";
import path from "path";

async function main() {
  const destDocsDir = path.join(__dirname, "../docs");
  const sourceDocsDir = path.join(__dirname, "../src/docs");

  // 1. Clear the "docs/" folder
  rimraf.sync(
    path.join(__dirname, "../docs")
  );

  // 2. Copy "src/docs/" to "docs/"
  await new Promise<void>((resolve, reject) => {
    copyfiles(
      [sourceDocsDir, destDocsDir],
      {
        up: true,
      },
      (error: Error | undefined) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });

  // 3. Run snippets-build

  // 4. Run snippets-inject
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
