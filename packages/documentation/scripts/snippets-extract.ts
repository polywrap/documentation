import path from "path";
import { generateSnippetsFile } from "@polywrap/docs-snippet-tools";

export async function run() {
  const snippetsDir = path.resolve(path.join(__dirname, "../snippets"));
  const snippetsFile = path.join(snippetsDir, "snippets.json");

  await generateSnippetsFile(snippetsDir, snippetsFile);

  console.log("- Snippets Extracted", snippetsFile);
}
