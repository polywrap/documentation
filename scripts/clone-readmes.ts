import path from 'path';
import fs from 'fs';

const clonesDir: string = path.resolve(path.join(__dirname, "../clones"));
const referenceDir: string = path.resolve(path.join(__dirname, "../src/docs/reference"));

// paths are relative to clone and reference doc dirs
const readmeToDocPaths: Record<string, string | Record<string, string>> = {
  toolchain: {
    "./polywrap/toolchain/packages/cli/README.md": "./cli/polywrap-cli.md",
    "./polywrap/toolchain/packages/js/asyncify/README.md": "./clients/js/libraries/asyncify-js.md",
    "./polywrap/toolchain/packages/js/client/README.md": "./clients/js/client-js.md",
    "./polywrap/toolchain/packages/js/client-config-builder/README.md": "./clients/js/client-config-builder-js.md",
    "./polywrap/toolchain/packages/js/core/README.md": "./clients/js/libraries/core-js.md",
    "./polywrap/toolchain/packages/js/manifests/wrap/README.md": "./clients/js/libraries/wrap-manifest-types-js.md",
    "./polywrap/toolchain/packages/js/manifests/polywrap/README.md": "./clients/js/libraries/polywrap-manifest-types-js.md",
    "./polywrap/toolchain/packages/js/msgpack/README.md": "./clients/js/libraries/msgpack-js.md",
    "./polywrap/toolchain/packages/js/os/README.md": "./clients/js/libraries/os-js.md",
    "./polywrap/toolchain/packages/js/result/README.md": "./clients/js/libraries/result.md",
    "./polywrap/toolchain/packages/js/test-env/README.md": "./clients/js/libraries/test-env-js.md",
    "./polywrap/toolchain/packages/js/tracing/README.md": "./clients/js/libraries/tracing-js.md",
    "./polywrap/toolchain/packages/js/uri-resolver-extensions/README.md": "./clients/js/libraries/uri-resolver-extensions-js.md",
    "./polywrap/toolchain/packages/js/uri-resolvers/README.md": "./clients/js/libraries/uri-resolvers-js.md",
    "./polywrap/toolchain/packages/js/validation/README.md": "./clients/js/libraries/package-validation.md",
    "./polywrap/toolchain/packages/js/wasm/README.md": "./clients/js/libraries/wasm-js.md",
  }
}

async function main() {
  traverseReadmeToDocMap(readmeToDocPaths);
  console.log("Successfully copied readmes to reference dir");
  process.exit(0);
}

function traverseReadmeToDocMap(readmeToDocPaths: Record<string, string | Record<string, string>>): void {
  for (const [key, val] of Object.entries(readmeToDocPaths)) {
    if (typeof val === "object") {
      traverseReadmeToDocMap(val);
    } else {
      const [relReadmePath, relDocPath] = [key, val];
      const readmePath = path.resolve(path.join(clonesDir, relReadmePath));
      const docPath = path.resolve(path.join(referenceDir, relDocPath));

      if (!fs.existsSync(readmePath)) {
        throw Error(`Path does not exist: ${readmePath}`);
      }

      const readme = fs.readFileSync(readmePath, 'utf-8');
      writeReadmeAsDoc(docPath, readme);
    }
  }
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
