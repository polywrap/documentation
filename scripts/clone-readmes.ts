import path from 'path';
import fs from 'fs';

const clonesDir: string = path.resolve(path.join(__dirname, "../clones"));
const referenceDir: string = path.resolve(path.join(__dirname, "../src/docs/reference"));

// paths are relative to clone and reference doc dirs
const repoToPaths: Record<string, string> = {
  "./polywrap/toolchain/packages/js/client/README.md": "./clients/js/client-js.md",
  "./polywrap/toolchain/packages/cli/README.md": "./cli/polywrap-cli.md"
}

async function main() {
  for (const [relReadmePath, relDocPath] of Object.entries(repoToPaths)) {
    const readmePath = path.resolve(path.join(clonesDir, relReadmePath));
    const docPath = path.resolve(path.join(referenceDir, relDocPath));

    if (!fs.existsSync(readmePath)) {
      throw Error(`Path does not exist: ${readmePath}`);
    }

    const readme = fs.readFileSync(readmePath, 'utf-8');
    writeReadmeAsDoc(docPath, readme);
  }

  console.log("Successfully copied readmes to reference dir");
  process.exit(0);
}

function writeReadmeAsDoc(docPath: string, readme: string): void {
  const dir = path.dirname(docPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const id = path.basename(docPath, ".md");
  const title = id.replace(/-/g, " ");

  const doc = `---
id: ${id}
title: ${title}
---

` + readme;

  fs.writeFileSync(docPath, doc);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
