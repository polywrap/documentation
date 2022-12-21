import { exec, ExecException } from 'child_process';
import path from 'path';
import fs from 'fs';

type Repo = {
  org?: string; // defaults to "polywrap"
  name: string;
  branch: string;
}

const repos: Repo[] = [
  {
    name: "toolchain",
    branch: "origin"
  }
]

const clonesRoot = path.resolve(path.join(__dirname, "..", "clones"));

async function main() {
  if (!fs.existsSync(clonesRoot)) {
    fs.mkdirSync(clonesRoot);
  }

  const promises = repos.map(cloneRepo);
  const results = await Promise.allSettled(promises);

  let err = false;
  for (const result of results) {
    if (result.status === "rejected") {
      err = true;
      console.log(result.reason);
    }
  }

  if (!err) {
    console.log("Successfully cloned repos");
  }
}

// clone a repo, keeping only the latest commit on a single specific branch
// also removes the .git folder
async function cloneRepo(repo: Repo): Promise<{ stdout?: string; stderr?: string }> {
  const { name, branch } = repo;
  const org = repo.org ?? "polywrap";
  
  // make sure org dir exists
  const orgRoot = path.join(clonesRoot, org);
  if (!fs.existsSync(orgRoot)) {
    fs.mkdirSync(orgRoot);
  }

  // clone repo
  const uri = `https://github.com/${org}/${name}.git`;
  const result = await runCommand(
    "git clone",
    ["-b", branch, "--depth", "1", "--single-branch", uri],
    undefined,
    orgRoot
  );

  // remove .git data
  const dotGitPath = path.join(orgRoot, name, "/.git/");
  await fs.promises.rm(dotGitPath, { recursive: true, force: true });

  return result;
}

async function runCommand(
  command: string,
  args: string[],
  env: Record<string, string> | undefined = undefined,
  cwd: string | undefined = undefined,
): Promise<{ stdout: string; stderr: string }> {

  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    const callback = (
      err: ExecException | null,
      stdout: string,
      stderr: string
    ) => {
      if (err) {
        reject({ stdout, stderr });
      } else {
        resolve({ stdout, stderr });
      }
    };

    exec(
      [command, ...args].join(" "),
      {
        cwd: cwd ?? __dirname,
        env: {
          ...process.env,
          ...env,
        },
      },
      callback
    );
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
