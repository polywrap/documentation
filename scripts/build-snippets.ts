import * as SnippetsBuild from "./snippets-build";

async function main() {

  console.log("- Build ./snippets");
  await SnippetsBuild.run();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
