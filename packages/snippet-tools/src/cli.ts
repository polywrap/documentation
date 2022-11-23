import { program } from 'commander';
import { combineDocsAndSnippets } from './lib/combine';

export const run = async (argv: string[]): Promise<void> => {
  program
    .name('polywrap-snippet-tools')
    .description('Tools for Polywrap Documentation snippets.');

  program
    .command('combine')
    .description(
      'Extracts snippets from the snippets directory and outputs a copy of the documentation directory with snippets injected into it'
    )
    .argument('<snippetsDir>', 'The snippets directory')
    .argument('<docsDir>', 'The documentation directory')
    .argument('<outputDir>', 'The output directory')
    .action(async (snippetsDir: string, docsDir: string, outputDir: string) => {
      await combineDocsAndSnippets(snippetsDir, docsDir, outputDir);
    });

  await program.parseAsync(argv);
};
