/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    `faq`,
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quick-start/javascript',
        'quick-start/rust',
        'quick-start/python',
        'quick-start/kotlin',
        'quick-start/swift',
      ]
    },
    'clients',
    'cli',
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/web3',
        'use-cases/ai'
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/wraps',
        'concepts/wasm',
        'concepts/abi',
        'concepts/uris',
        'concepts/wrap-schema',
        'concepts/env-variables',
        'concepts/plugins',
        'concepts/uri-redirects',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Use Wraps',
          items: [
            'tutorials/use-wraps/install-client',
            'tutorials/use-wraps/create-client-instance',
            'tutorials/use-wraps/configure-client',
            'tutorials/use-wraps/types-for-app',
            'tutorials/use-wraps/react-integration',
          ],
        },
        {
          type: 'category',
          label: 'Create Wraps',
          items: [
            'tutorials/create-wraps/introduction',
            {
              type: 'category',
              label: 'Part One',
              items: [
                'tutorials/create-wraps/part-one/project-setup',
                'tutorials/create-wraps/part-one/project-manifest',
                'tutorials/create-wraps/part-one/schema-and-codegen',
                'tutorials/create-wraps/part-one/first-method',
                'tutorials/create-wraps/part-one/import-and-subinvoke',
                'tutorials/create-wraps/part-one/interfaces-and-plugins',
                'tutorials/create-wraps/part-one/integration-testing',
                'tutorials/create-wraps/part-one/deployment'
              ]
            },
            {
              type: 'category',
              label: 'Part Two',
              items: [
                'tutorials/create-wraps/part-two/polywrap-manifest',
                'tutorials/create-wraps/part-two/default-plugins',
                'tutorials/create-wraps/part-two/writing-tests-with-workflows'
              ]
            }
          ],
        },
        {
          type: 'category',
          label: 'Test Wraps',
          items: [
            'tutorials/test-wraps/in-typescript',
            'tutorials/test-wraps/infra-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Build & Deploy Wraps',
          items: [
            'tutorials/build-and-deploy-wraps/build-pipeline',
            'tutorials/build-and-deploy-wraps/deploy-to-ipfs',
            'tutorials/build-and-deploy-wraps/publish-to-ens',
            'tutorials/build-and-deploy-wraps/deploy-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            {
              type: 'category',
              label: 'Create Plugins',
              items: [
                'tutorials/advanced/create-plugins/create-js-plugin',
                'tutorials/advanced/create-plugins/plugin-manifest',
                'tutorials/advanced/create-plugins/plugin-architecture'
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                'tutorials/advanced/interfaces/client-config-interfaces',
                'tutorials/advanced/interfaces/define-implement-interfaces',
                'tutorials/advanced/interfaces/interface-instances'
              ],
            },
            {
              type: 'category',
              label: 'Workflows',
              items: [
                'tutorials/advanced/workflows/running-workflows',
                'tutorials/advanced/workflows/workflow-validation',
              ],
            },
          ]
        },
      ]
    },
    {
      type: 'link',
      href: 'https://github.com/polywrap/awesome-polywrap',
      label: 'Resources'
    },
  ],
};

module.exports = sidebars;
