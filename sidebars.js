module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Getting started',
      items: [
        'getting-started/what-is-polywrap',
        'getting-started/polywrap-vs-javascript-sdks',
        'getting-started/understanding-uris',
        'getting-started/understanding-plugins',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Creating a wrapper',
          items: [
            'guides/create-as-wrapper/project-setup',
            'guides/create-as-wrapper/project-folder',
            'guides/create-as-wrapper/build-deploy-test',
            'guides/create-as-wrapper/mutation-functions',
            'guides/create-as-wrapper/adding-query-functions',
            'guides/create-as-wrapper/writing-tests-with-recipes-file',
            'guides/create-as-wrapper/deploying-locally',
          ],
        },
        {
          type: 'category',
          label: 'Integrate into a JS dapp',
          items: [
            'guides/create-js-dapp/install-client',
            'guides/create-js-dapp/create-client-instance',
            'guides/create-js-dapp/react-integration',
          ],
        },
        {
          type: "category",
          label: "Deployment",
          items: [
            'guides/deployment/deployment-overview',
            'guides/deployment/deploy-cli',
            'guides/deployment/deploy-pinata',
            'guides/deployment/deploy-fleek',
            'guides/deployment/deploy-crust'
          ]
        },
        'guides/create-js-plugin',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/build-pipeline', 'advanced/uri-redirects'],
    },
    {
      type: 'category',
      label: 'Developer tools',
      items: [
        'devtools/polywrap-cli',
        'devtools/polywrap-clientjs',
        'devtools/polywrap-react',
      ],
    },
    {
      type: 'category',
      label: 'Uniswap v2 Polywrap',
      items: [
        'uniswapv2/uniswapv2-polywrap-intro',
        'uniswapv2/common-types',
        {
          type: 'category',
          label: 'Queries',
          items: [
            'uniswapv2/queries/token',
            'uniswapv2/queries/trade',
            'uniswapv2/queries/fetch',
            'uniswapv2/queries/pair',
            'uniswapv2/queries/route',
            'uniswapv2/queries/router',
          ],
        },
        {
          type: 'category',
          label: 'Mutations',
          items: ['uniswapv2/mutations/swap'],
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
  ],
};
