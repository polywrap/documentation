import * as SnippetsBuild from "./snippets-build";
import * as SnippetsExtract from "./snippets-extract";

async function main() {

  console.log("- Build ./snippets");
  await SnippetsBuild.run();

  console.log("- Extract ./snippets");
  await SnippetsExtract.run();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
