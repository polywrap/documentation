import path from "path";
import fs from "fs";
import { injectSnippets } from "@polywrap/docs-snippet-tools";

export async function run() {
  // Load the snippets.json file
  const snippetsFilePath = path.resolve(
    path.join(__dirname, "../snippets/snippets.json")
  );
  const snippetsFile = fs.readFileSync(snippetsFilePath, "utf-8");
  const snippets: Record<string, string> = JSON.parse(snippetsFile);

  // Inject snippets into docs
  const docsDir = path.resolve(
    path.join(__dirname, "../docs")
  );
  await injectSnippets(
    snippets,
    docsDir
  );
}