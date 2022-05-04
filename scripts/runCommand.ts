import { exec, ExecException } from "child_process";

export async function runCommand(
  command: string,
  cwd: string = __dirname
): Promise<{
  stdout: string,
  stderr: string,
  err?: ExecException
}> {
  return new Promise((resolve, reject) => {
    const callback = (err: ExecException | null, stdout: string, stderr: string) => {
      if (err !== null) {
        resolve({
          stdout: stdout,
          stderr: stderr,
          err
        });
      } else {
        resolve({
          stdout: stdout,
          stderr: stderr,
        });
      }
    }

    exec(command, { cwd }, callback)
  });
}
