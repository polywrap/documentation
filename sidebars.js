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
          label: 'Integrate into a JS dapp',
          items: [
            'guides/create-js-dapp/01',
            'guides/create-js-dapp/02',
            'guides/create-js-dapp/03',
          ],
        },
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
        'devtools/polywrap-cli',
        'devtools/polywrap-clientjs',
        'devtools/polywrap-react',
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
