module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/what-is-polywrap',
        'concepts/polywrap-vs-javascript-sdks',
        'concepts/understanding-uris',
        'concepts/understanding-plugins',
        'concepts/understanding-uri-redirects',
        'concepts/plugin-vs-wasm-wrapper',
        'concepts/faq',
      ],
    },
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        {
          type: 'category',
          label: 'Integrate Wrappers',
          items: [
            'quick-start/create-js-app/install-client',
            'quick-start/create-js-app/create-client-instance',
            'quick-start/create-js-app/react-integration',
            'quick-start/create-js-app/get-wrapper-metadata',
          ],
        },
        {
          type: 'category',
          label: 'Create Wasm Wrappers',
          items: [
            'quick-start/create-wasm-wrappers/project-setup',
            'quick-start/create-wasm-wrappers/project-folder',
            'quick-start/create-wasm-wrappers/build-deploy-test',
            'quick-start/create-wasm-wrappers/adding-new-functions',
            'quick-start/create-wasm-wrappers/writing-tests-with-workflows',
            'quick-start/create-wasm-wrappers/deploy-locally-and-test',
            'quick-start/create-wasm-wrappers/default-plugins',
            'quick-start/create-wasm-wrappers/adding-metadata',
            'quick-start/create-wasm-wrappers/uniswapv3-to-polywrap',
          ],
        },
        {
          type: 'category',
          label: 'Test Wasm Wrappers',
          items: [
            'quick-start/test-wasm-wrappers/end-to-end-test',
            'quick-start/test-wasm-wrappers/infra-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Build & Deploy Wasm Wrappers',
          items: [
            'quick-start/build-and-deploy-wasm-wrappers/build-pipeline',
            'quick-start/build-and-deploy-wasm-wrappers/deploy-to-ipfs',
            'quick-start/build-and-deploy-wasm-wrappers/publish-to-ens',
            'quick-start/build-and-deploy-wasm-wrappers/deploy-pipeline',
          ],
        },
        {
          type: 'category',
          label: 'Create Plugin Wrappers',
          items: [
            'quick-start/create-plugin-wrappers/create-js-plugin',
          ],
        },
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
                'reference/cli/commands/app',
                'reference/cli/commands/build',
                'reference/cli/commands/codegen',
                'reference/cli/commands/create',
                'reference/cli/commands/deploy',
                'reference/cli/commands/plugin',
                'reference/cli/commands/infra',
                'reference/cli/commands/run',
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
                {
                  type: 'category',
                  label: 'Libraries',
                  items: [
                    'reference/clients/js/libraries/react',
                    'reference/clients/js/libraries/test-env-js'
                  ]
                }
              ]
            }
          ]
        },
      ]
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
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/talks-podcasts-and-videos',
        'resources/ecosystem-tooling',
        'resources/the-polywrap-technical-standard'
      ],
    },
  ],
};
