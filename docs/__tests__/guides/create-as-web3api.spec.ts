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

  it('step 3 & 4: adding new mutation and query functions', async () => {
    {
      const { stdout } = await runCommand('ls', projectFolder);
      expect(stdout).toContain('build');
    }

    {
      // Update the mutation schema.
      await runCommand(
        'cp ../../../src/create-as-web3api/mutation/schema.graphql src/mutation/',
        projectFolder
      );

      // Implement the setIpfsData mutation.
      await runCommand(
        'cp ../../../src/create-as-web3api/mutation/index.ts src/mutation/',
        projectFolder
      );

      // Update the query schema.
      await runCommand(
        'cp ../../../src/create-as-web3api/query/schema.graphql src/query/',
        projectFolder
      );

      // Implement the getIpfsData query.
      await runCommand(
        'cp ../../../src/create-as-web3api/query/index.ts src/query/',
        projectFolder
      );
    }
  });

  it('step 5: build and deploy updated project', async () => {
    {
      await runCommand(
        'cp ../../../src/create-as-web3api/recipes/setIpfs.graphql recipes',
        projectFolder
      );
    }

    {
      await runCommand(
        'cp ../../../src/create-as-web3api/recipes/getIpfs.graphql recipes',
        projectFolder
      );
    }

    {
      await runCommand(
        'cp ../../../src/create-as-web3api/recipes/e2e.json recipes',
        projectFolder
      );
    }

    {
      await runCommand('yarn build', projectFolder);
    }

    {
      await runCommand('yarn deploy', projectFolder);
      const { stdout } = await runCommand('yarn test', projectFolder);
      expect(stdout).toContain('Hello from IPFS!');
    }
  });
});
