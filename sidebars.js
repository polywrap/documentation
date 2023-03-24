module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quick-start/the-polywrap-client',
        'quick-start/introducing-the-polywrap-cli',
        'quick-start/what-wraps-are-available',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/wraps',
        'concepts/wasm-wraps',
        'concepts/plugin-wraps',
        'concepts/interface-wraps',
        'concepts/wrap-standards',
        'concepts/wasm',
        'concepts/abi',
        'concepts/uris',
        'concepts/client',
        'concepts/invoke',
        'concepts/envs',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        {
          type: 'category',
          label: 'CLI',
          items: [
            'reference/cli/polywrap-cli',
            {
              type: 'category',
              label: 'Commands',
              items: [
                'reference/cli/commands/create',
                'reference/cli/commands/codegen',
                'reference/cli/commands/build',
                'reference/cli/commands/test',
                'reference/cli/commands/deploy',
                'reference/cli/commands/manifest',
                'reference/cli/commands/docgen',
                'reference/cli/commands/infra',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Clients',
          items: [
            {
              type: 'category',
              label: 'JavaScript',
              items: [
                'reference/clients/js/client-js',
                'reference/clients/js/client-config-builder-js',
                'reference/clients/js/client-config',
                {
                  type: 'category',
                  label: 'Libraries',
                  items: [
                    'reference/clients/js/libraries/asyncify-js',
                    'reference/clients/js/libraries/core-js',
                    'reference/clients/js/libraries/msgpack-js',
                    'reference/clients/js/libraries/os-js',
                    'reference/clients/js/libraries/package-validation',
                    'reference/clients/js/libraries/polywrap-manifest-types-js',
                    'reference/clients/js/libraries/react',
                    'reference/clients/js/libraries/result',
                    'reference/clients/js/libraries/test-env-js',
                    'reference/clients/js/libraries/tracing-js',
                    'reference/clients/js/libraries/uri-resolver-extensions-js',
                    'reference/clients/js/libraries/uri-resolvers-js',
                    'reference/clients/js/libraries/wasm-js',
                    'reference/clients/js/libraries/wrap-manifest-types-js',
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Schema',
          items: [
            'reference/schema/schema-parse',
            'reference/schema/schema-compose',
            'reference/schema/schema-bind',
          ],
        },
      ]
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
            'tutorials/integrate-wrappers/get-wrapper-metadata'
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
            'tutorials/create-wasm-wrappers/default-plugins',
            'tutorials/create-wasm-wrappers/add-metadata',
            // 'tutorials/create-wasm-wrappers/uniswapv3-to-polywrap',
          ],
        },
        {
          type: 'category',
          label: 'Test Wasm Wrappers',
          items: [
            'tutorials/test-wasm-wrappers/end-to-end-test',
            'tutorials/test-wasm-wrappers/infra-pipeline',
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
        'resources/the-polywrap-technical-standard'
      ],
    },
    /*{
      type: 'category',
      label: 'Demos',
      items: [
        {
          type: 'category',
          label: 'Uniswap v2 Polywrap',
          items: [
            'demos/uniswapv2/uniswapv2-polywrap-intro',
            'demos/uniswapv2/common-types',
            {
              type: 'category',
              label: 'Queries',
              items: [
                'demos/uniswapv2/queries/token',
                'demos/uniswapv2/queries/trade',
                'demos/uniswapv2/queries/fetch',
                'demos/uniswapv2/queries/pair',
                'demos/uniswapv2/queries/route',
                'demos/uniswapv2/queries/router',
              ],
            },
            {
              type: 'category',
              label: 'Mutations',
              items: ['demos/uniswapv2/mutations/swap'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Uniswap v3 Polywrap',
          items: [
            'demos/uniswapv3/intro',
            {
              type: 'category',
              label: 'Types',
              items: [
                'demos/uniswapv3/types/common-types',
                'demos/uniswapv3/types/query-types',
                'demos/uniswapv3/types/mutation-types',
                'demos/uniswapv3/types/enum-types',
              ],
            },
            {
              type: 'category',
              label: 'Queries',
              items: [
                'demos/uniswapv3/queries/token',
                'demos/uniswapv3/queries/tickProvider',
                'demos/uniswapv3/queries/pool',
                'demos/uniswapv3/queries/route',
                'demos/uniswapv3/queries/trade',
                'demos/uniswapv3/queries/position',
                'demos/uniswapv3/queries/router',
                'demos/uniswapv3/queries/quoter',
                'demos/uniswapv3/queries/nfpm',
                'demos/uniswapv3/queries/staker',
                'demos/uniswapv3/queries/tickUtils',
                'demos/uniswapv3/queries/poolUtils',
                'demos/uniswapv3/queries/positionUtils',
                'demos/uniswapv3/queries/encodeUtils',
                'demos/uniswapv3/queries/mathUtils',
                'demos/uniswapv3/queries/enumUtils',
                'demos/uniswapv3/queries/fetch',
                'demos/uniswapv3/queries/constants',
              ],
            },
            {
              type: 'category',
              label: 'Mutations',
              items: [
                'demos/uniswapv3/mutations/call',
                'demos/uniswapv3/mutations/swap',
                'demos/uniswapv3/mutations/deploy',
              ],
            },
          ],
        },
      ]
    },*/
  ],
};
