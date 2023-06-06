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
    'quick-start',
    'clients',
    'cli',
    'what-is-polywrap',
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
          label: 'Integrate Wraps',
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
          label: 'Create Wasm Wraps',
          items: [
            {
              type: 'category',
              label: 'Tutorial',
              items: [
                'tutorials/create-wasm-wraps/tutorial/project-setup',
                'tutorials/create-wasm-wraps/tutorial/project-folder',
                'tutorials/create-wasm-wraps/tutorial/build-deploy-test',
                'tutorials/create-wasm-wraps/tutorial/adding-new-methods',
                'tutorials/create-wasm-wraps/tutorial/writing-tests-with-workflows',
                'tutorials/create-wasm-wraps/tutorial/deploy-locally-and-test',
              ]
            },
            'tutorials/create-wasm-wraps/polywrap-manifest',
            'tutorials/create-wasm-wraps/default-plugins'
          ],
        },
        {
          type: 'category',
          label: 'Testing Wraps',
          items: [
            'tutorials/testing-wraps/in-typescript',
            'tutorials/testing-wraps/infra-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Build & Deploy Wasm Wraps',
          items: [
            'tutorials/build-and-deploy-wasm-wraps/build-pipeline',
            'tutorials/build-and-deploy-wasm-wraps/deploy-to-ipfs',
            'tutorials/build-and-deploy-wasm-wraps/publish-to-ens',
            'tutorials/build-and-deploy-wasm-wraps/deploy-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Create Plugin Wraps',
          items: [
            'tutorials/create-plugin-wraps/create-js-plugin',
            'tutorials/create-plugin-wraps/plugin-manifest',
            'tutorials/create-plugin-wraps/plugin-architecture'
          ],
        },
        {
          type: 'category',
          label: 'Interfaces',
          items: [
            'tutorials/interfaces/client-config-interfaces',
            'tutorials/interfaces/define-implement-interfaces',
            'tutorials/interfaces/interface-instances'
          ],
        },
        {
          type: 'category',
          label: 'Workflows',
          items: [
            'tutorials/workflows/running-workflows',
            'tutorials/workflows/workflow-validation',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/talks-podcasts-and-videos',
        'resources/ecosystem-tooling',
      ],
    },
  ],
};

module.exports = sidebars;
