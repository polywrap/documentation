import path from "path";
import fs from "fs";

export async function generateSnippetsFile(snippetsDir: string, snippetsFile: string) {
  const snippets: Record<string, string> = {};

  // Extract all snippets found
  await extractSnippets(
    snippets,
    snippetsDir
  );

  fs.writeFileSync(
    snippetsFile,
    JSON.stringify(snippets, null, 2),
    "utf-8"
  );
}

async function extractSnippets(
  snippets: Record<string, string>,
  dir: string
) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  // Only search specific types of files
  const exts = [".ts", ".json", ".yaml", ".txt", ".md", ".graphql", ".cue"];

  // Ignore specific directories
  const filter = ["node_modules"];

  const match = (str: string, tests: string[]) => {
    for (const test of tests) {
      if (str.indexOf(test) > -1) {
        return true;
      }
    }
    return false;
  }

  for (const dirent of dirents) {
    const direntPath = path.join(dir, dirent.name);

    if (dirent.isFile() && match(dirent.name, exts)) {
      await extractSnippetsFromFile(snippets, direntPath);
    } else if (dirent.isDirectory() && !match(dirent.name, filter)) {
      await extractSnippets(snippets, direntPath)
    }
  }
}

async function extractSnippetsFromFile(
  snippets: Record<string, string>,
  filePath: string
) {
  const contents = fs.readFileSync(filePath, "utf-8");
  let index = 0;

  while (index < contents.length) {
    const start = "$start: ";
    const end = "$end";
    const startIdx = contents.indexOf(start, index);

    if (startIdx < 0) {
      index = contents.length;
      continue;
    }

    const nameStartIdx = startIdx + start.length;
    const nameEndIdx = contents.indexOf("\n", nameStartIdx);
    const name = contents.substr(nameStartIdx, nameEndIdx - nameStartIdx);

    const snippetStartIdx = nameEndIdx + 1;
    let snippetEndIdx = contents.indexOf(end, snippetStartIdx);

    // Walk back from the $end until we hit the first \n
    while (true) {
      if (contents[snippetEndIdx] === "\n") {
        break;
      }
      snippetEndIdx -= 1;
    }

    const snippet = contents.substr(snippetStartIdx, snippetEndIdx - snippetStartIdx);

    console.log("- Extract Snippet", name);

    if (snippets[name]) {
      throw Error(`Duplicate Snippet Definition: ${name}`);
    }

    snippets[name] = snippet;

    index = snippetEndIdx + end.length;
  }
}
