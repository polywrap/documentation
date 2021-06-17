module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'doc',
      id: 'whatis',
    },
    {
      type: 'category',
      label: 'Academy',
      items: [
        'academy/academy',
        'academy/benefits',
        'academy/understanding-uris',
        'academy/understanding-plugins',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Integrate into a JS dApp',
          items: [
            'guides/create-js-dapp/01',
            'guides/create-js-dapp/02',
            'guides/create-js-dapp/03',
          ],
        },
        {
          type: 'category',
          label: 'Creating a Web3API',
          items: [
            'guides/create-as-web3api/pt1',
            'guides/create-as-web3api/pt2',
            'guides/create-as-web3api/pt3',
            'guides/create-as-web3api/pt4',
            'guides/create-as-web3api/pt5',
            'guides/create-as-web3api/pt6',
          ],
        },
        'guides/create-js-plugin',
      ],
    },
    {
      type: 'category',
      label: 'Demos',
      items: ['demos/simplestorage-eth'],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        'devtools/web3api-cli',
        'devtools/web3api-clientjs',
        'devtools/web3api-react',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/talks-and-videos',
        'resources/the-web3api-technical-standard',
      ],
    },
  ],
};
