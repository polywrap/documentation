import { runCommand } from "./runCommand";
import { writeFileSync } from "@web3api/os-js";
import path from "path";

const commands = [
  //"app",
  "build",
  "codegen",
  //"create",
  "deploy",
  //"plugin",
  "query",
  "test-env"
];

async function main() {
  const cli = "../node_modules/.bin/w3";
  let snippets = "";

  for (const command of commands) {
    const output = await runCommand(`${cli} ${command} --help`);
    snippets += "$" + `start: cli-command-help-${command}\n${output.stdout}\n$end\n`;
  }

  writeFileSync(
    path.join(__dirname, "../output.txt"),
    snippets,
    "utf-8"
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
