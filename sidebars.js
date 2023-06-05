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
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/wrapper-schema',
        'tutorials/understanding-plugins',
        'tutorials/understanding-uri-redirects',
        'tutorials/env-variables',
        {
          type: 'category',
          label: 'Integrate Wrappers',
          items: [
            'tutorials/integrate-wrappers/install-client',
            'tutorials/integrate-wrappers/create-client-instance',
            'tutorials/integrate-wrappers/configure-client',
            'tutorials/integrate-wrappers/types-for-app',
            'tutorials/integrate-wrappers/react-integration',
          ],
        },
        {
          type: 'category',
          label: 'Create Wasm Wrappers',
          items: [
            {
              type: 'category',
              label: 'Tutorial',
              items: [
                'tutorials/create-wasm-wrappers/tutorial/project-setup',
                'tutorials/create-wasm-wrappers/tutorial/project-folder',
                'tutorials/create-wasm-wrappers/tutorial/build-deploy-test',
                'tutorials/create-wasm-wrappers/tutorial/adding-new-methods',
                'tutorials/create-wasm-wrappers/tutorial/writing-tests-with-workflows',
                'tutorials/create-wasm-wrappers/tutorial/deploy-locally-and-test',
              ]
            },
            'tutorials/create-wasm-wrappers/polywrap-manifest',
            'tutorials/create-wasm-wrappers/default-plugins'
          ],
        },
        {
          type: 'category',
          label: 'Testing Wrappers',
          items: [
            'tutorials/testing-wrappers/in-typescript',
            'tutorials/testing-wrappers/infra-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Build & Deploy Wasm Wrappers',
          items: [
            'tutorials/build-and-deploy-wasm-wrappers/build-pipeline',
            'tutorials/build-and-deploy-wasm-wrappers/deploy-to-ipfs',
            'tutorials/build-and-deploy-wasm-wrappers/publish-to-ens',
            'tutorials/build-and-deploy-wasm-wrappers/deploy-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Create Plugin Wrappers',
          items: [
            'tutorials/create-plugin-wrappers/create-js-plugin',
            'tutorials/create-plugin-wrappers/plugin-manifest',
            'tutorials/create-plugin-wrappers/plugin-architecture'
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

    // {
    //   type: 'category',
    //   label: 'Reference',
    //   items: [
    //     'reference/glossary',
    //     {
    //       type: 'category',
    //       label: 'CLI',
    //       items: [
    //         'reference/cli/polywrap-cli',
    //         {
    //           type: 'category',
    //           label: 'Commands',
    //           items: [
    //             'reference/cli/commands/create',
    //             'reference/cli/commands/codegen',
    //             'reference/cli/commands/build',
    //             'reference/cli/commands/test',
    //             'reference/cli/commands/deploy',
    //             'reference/cli/commands/manifest',
    //             'reference/cli/commands/docgen',
    //             'reference/cli/commands/infra',
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Clients',
    //       items: [
    //         {
    //           type: 'category',
    //           label: 'JavaScript',
    //           items: [
    //             'reference/clients/js/client-js',
    //             'reference/clients/js/client-config-builder-js',
    //             {
    //               type: 'category',
    //               label: 'Libraries',
    //               items: [
    //                 'reference/clients/js/libraries/asyncify-js',
    //                 'reference/clients/js/libraries/core-js',
    //                 'reference/clients/js/libraries/msgpack-js',
    //                 'reference/clients/js/libraries/result',
    //                 'reference/clients/js/libraries/tracing-js',
    //                 'reference/clients/js/libraries/uri-resolver-extensions-js',
    //                 'reference/clients/js/libraries/uri-resolvers-js',
    //                 'reference/clients/js/libraries/wasm-js',
    //                 'reference/clients/js/libraries/wrap-manifest-types-js',
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       type: 'category',
    //       label: 'Schema',
    //       items: [
    //         'reference/schema/schema-parse',
    //         'reference/schema/schema-compose',
    //         'reference/schema/schema-bind',
    //       ],
    //     },
    //   ]
    // },
  ],
};

module.exports = sidebars;
