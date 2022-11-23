import * as fse from 'fs-extra';
import fs from 'fs';
import { extractSnippets } from './extract';
import { injectSnippets } from './inject';

export async function combineDocsAndSnippets(
  snippetsDir: string,
  docsDir: string,
  outputDir: string
) {
  console.log(`- Copy ${docsDir} to ${outputDir}`);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fse.copySync(docsDir, outputDir, { overwrite: true });

  console.log('- Extract Snippets');
  const snippets = await extractSnippets(snippetsDir);

  console.log('- Inject Snippets');
  await injectSnippets(snippets, outputDir);

  console.log(
    `Successfully combined documentation and snippets into ${outputDir}`
  );
}
