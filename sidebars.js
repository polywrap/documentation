module.exports = {
  docs: [
    'polywrap-overview',
    {
      type: "category",
      label: "Introduction",
      items: [
        'getting-started/what-is-polywrap',

      ]
    },
    {
      type: "category",
      label: "Integrating Wrappers",
      items: [
        "integrating-wrappers/setup-client",
        "integrating-wrappers/configure-plugins",
        "integrating-wrappers/import-dependencies",
        "integrating-wrappers/invoke-wrappers",
        "integrating-wrappers/using-interfaces"
      ]
    },
    {
      type: "category",
      label: "Building Wrappers",
      items: [
        "building-wrappers/schema",
        "building-wrappers/implementation",
        "building-wrappers/build",
        "building-wrappers/test",
        "building-wrappers/metadata",
        "building-wrappers/deploy",
        "building-wrappers/publish"
      ]
    },
    {
      type: 'category',
      label: "Defining Wrapper Interfaces",
      items: [
        "wrapper-interfaces/description",
        "wrapper-interfaces/interface-schema",
        "wrapper-interfaces/build",
        "wrapper-interfaces/deploy",
        "wrapper-interfaces/publish",
        "wrapper-interfaces/implement",
        "wrapper-interfaces/integrate-interface-wrappers"
      ]
    },
    {
      type: 'category',
      label: "Building Plugins",
      items: [
        "building-plugins/schema",
        "building-plugins/generate-types",
        "building-plugins/implementation"
      ]
    },
    {
      type: 'category',
      label: "Main Concepts",
      items: [
        "main-concepts/polywrap",
        "main-concepts/uri",
        "main-concepts/client",
        "main-concepts/plugin"
      ]
    },
    {
      type: 'category',
      label: "Advanced Concepts",
      items: [
        "advanced/interface",
        'advanced/build-pipeline', 
        'advanced/uri-resolvers',
        'advanced/uri-redirects',
        "advanced/json-handling",
        "advanced/consuming-other-wrappers",
        "advanced/data-types",
        "advanced/graphql-generated-types"
      ]
    },
    {
      type: 'category',
      label: 'Uniswap v3 Polywrap',
      items: [
        'uniswapv3/intro',
        {
          type: 'category',
          label: 'Types',
          items: [
            'uniswapv3/types/common-types',
            'uniswapv3/types/query-types',
            'uniswapv3/types/mutation-types',
            'uniswapv3/types/enum-types',
          ],
        },
        {
          type: 'category',
          label: 'Queries',
          items: [
            'uniswapv3/queries/token',
            'uniswapv3/queries/tickProvider',
            'uniswapv3/queries/pool',
            'uniswapv3/queries/route',
            'uniswapv3/queries/trade',
            'uniswapv3/queries/position',
            'uniswapv3/queries/router',
            'uniswapv3/queries/quoter',
            'uniswapv3/queries/nfpm',
            'uniswapv3/queries/staker',
            'uniswapv3/queries/tickUtils',
            'uniswapv3/queries/poolUtils',
            'uniswapv3/queries/positionUtils',
            'uniswapv3/queries/encodeUtils',
            'uniswapv3/queries/mathUtils',
            'uniswapv3/queries/enumUtils',
            'uniswapv3/queries/fetch',
            'uniswapv3/queries/constants',
          ],
        },
        {
          type: 'category',
          label: 'Mutations',
          items: [
            'uniswapv3/mutations/call',
            'uniswapv3/mutations/swap',
            'uniswapv3/mutations/deploy',
          ],
        },
      ],
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
  ]
};


  //   {
  //     type: 'category',
  //     label: '👋 Getting started',
  //     items: [
  //       'getting-started/what-is-polywrap',
  //       'getting-started/polywrap-vs-javascript-sdks',
  //       'getting-started/understanding-uris',
  //       'getting-started/understanding-plugins',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Guides',
  //     items: [
  //       {
  //         type: 'category',
  //         label: 'Creating a wrapper',
  //         items: [
  //           'guides/create-as-wrapper/project-setup',
  //           'guides/create-as-wrapper/project-folder',
  //           'guides/create-as-wrapper/build-deploy-test',
  //           'guides/create-as-wrapper/mutation-functions',
  //           'guides/create-as-wrapper/adding-query-functions',
  //           'guides/create-as-wrapper/writing-tests-with-recipes-file',
  //           'guides/create-as-wrapper/deploying-locally',
  //         ],
  //       },
  //       {
  //         type: 'category',
  //         label: 'Integrate into a JS dapp',
  //         items: [
  //           'guides/create-js-dapp/install-client',
  //           'guides/create-js-dapp/create-client-instance',
  //           'guides/create-js-dapp/react-integration',
  //         ],
  //       },
  //       'guides/create-js-plugin',
  //       'guides/deploy-fleek',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Advanced',
  //     items: ['advanced/build-pipeline', 'advanced/uri-redirects'],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Developer tools',
  //     items: [
  //       'devtools/polywrap-cli',
  //       'devtools/polywrap-clientjs',
  //       'devtools/polywrap-react',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Uniswap v2 Polywrap',
  //     items: [
  //       'uniswapv2/uniswapv2-polywrap-intro',
  //       'uniswapv2/common-types',
  //       {
  //         type: 'category',
  //         label: 'Queries',
  //         items: [
  //           'uniswapv2/queries/token',
  //           'uniswapv2/queries/trade',
  //           'uniswapv2/queries/fetch',
  //           'uniswapv2/queries/pair',
  //           'uniswapv2/queries/route',
  //           'uniswapv2/queries/router',
  //         ],
  //       },
  //       {
  //         type: 'category',
  //         label: 'Mutations',
  //         items: ['uniswapv2/mutations/swap'],
  //       },
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Resources',
  //     items: [
  //       'resources/talks-podcasts-and-videos',
  //       'resources/ecosystem-tooling',
  //       'resources/the-polywrap-technical-standard'
  //     ],
  //   },
  // ],
