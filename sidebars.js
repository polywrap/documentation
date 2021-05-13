module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        // 'guides/start-here',
        'guides/create-as-web3api',
        'guides/create-js-dapp',
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
