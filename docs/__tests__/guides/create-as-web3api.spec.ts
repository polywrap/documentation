import { runCommand } from './utils';

import * as fs from 'fs';
import * as rimraf from 'rimraf';

jest.setTimeout(120000);

describe('create-as-web3api', () => {
  const tmpFolder = __dirname + '/tmp/create-as-web3api/';
  const projectName = 'test-project';
  const projectFolder = tmpFolder + '/' + projectName;

  beforeAll(() => {
    if (fs.existsSync(tmpFolder)) {
      rimraf.sync(tmpFolder);
    }

    fs.mkdirSync(tmpFolder, { recursive: true });
  });

  afterAll(() => {
    rimraf.sync(tmpFolder);
  });

  it('step 1: project setup', async () => {
    {
      const { stdout } = await runCommand(
        `npx @web3api/cli create api assemblyscript ${projectName}`,
        tmpFolder
      );

      expect(stdout).toContain('You are ready');
    }

    {
      const { stdout } = await runCommand(
        '. ~/.nvm/nvm.sh install && nvm use',
        projectFolder
      );
      expect(stdout).toContain('Now using node');
    }

    {
      const { stdout } = await runCommand('yarn', projectFolder);

      expect(stdout).toContain('Resolving packages...');
    }
  });

  it('step 2: build, deploy and test', async () => {
    {
      const { stdout } = await runCommand('yarn build', projectFolder);
      expect(stdout).toContain('Compile Web3API');
    }

    {
      const { stdout } = await runCommand('yarn test:env:up', projectFolder);
      expect(stdout).toContain('Starting test environment...');
    }

    {
      const { stdout } = await runCommand('yarn deploy', projectFolder);
      expect(stdout).toContain('Compile Web3API');
    }

    {
      const { stdout } = await runCommand('yarn test', projectFolder);
      expect(stdout).toContain('getData": 569');
    }
  });
});
