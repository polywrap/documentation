module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/understanding-integration',
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
            'guides/create-as-wrapper/pt1',
            'guides/create-as-wrapper/pt2',
            'guides/create-as-wrapper/pt3',
            'guides/create-as-wrapper/pt4',
            'guides/create-as-wrapper/pt5',
            'guides/create-as-wrapper/pt6',
          ],
        },
        {
          type: 'category',
          label: 'Integrate into a JS dapp',
          items: [
            'guides/create-js-dapp/01',
            'guides/create-js-dapp/02',
            'guides/create-js-dapp/03',
          ],
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
        'resources/talks-and-videos',
        'resources/the-polywrap-technical-standard',
      ],
    },
  ],
};
