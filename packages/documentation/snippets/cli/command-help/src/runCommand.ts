import { exec, ExecException } from "child_process";

function clearStyle(styled: string): string {
  return styled.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );
}

export async function runCommand(command: string): Promise<{
  stdout: string,
  stderr: string,
}> {
  return new Promise((resolve, reject) => {
    const callback = (err: ExecException | null, stdout: string, stderr: string) => {
      if (err !== null) {
        reject({
          stdout: clearStyle(stdout),
          stderr: clearStyle(stderr),
          err
        });
      } else {
        resolve({
          stdout: clearStyle(stdout),
          stderr: clearStyle(stderr),
        });
      }
    }

    exec(command, { cwd: __dirname }, callback)
  });
}
