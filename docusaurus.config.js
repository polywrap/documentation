/** @type {import('@docusaurus/types').DocusaurusConfig} */

const customFields = {
  githubUrl: `https://github.com/polywrap/monorepo`,
  discordUrl: `https://discord.gg/Z5m88a5qWu`,
  twitterUrl: 'https://twitter.com/polywrap_io',
  forumUrl: 'https://forum.polywrap.io',
  daoUrl: 'https://github.com/polywrap/dao',
  blogUrl: 'https://blog.polywrap.io/',
  gitcoinUrl: 'https://gitcoin.co/grants/1252/web3api',
};

module.exports = {
  title: 'Polywrap (Pre-alpha)',
  tagline: 'The Universal Web3 Integration Standard',
  url: 'https://docs.polywrap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'polywrap',
  projectName: 'documentation',
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Polywrap (Pre-alpha)',
      logo: {
        alt: 'Polywrap Icon',
        src: 'img/polywrap.png',
        href: '/',
      },
      items: [
        {
          label: 'Website',
          href: 'https://polywrap.io',
        },
        {
          label: 'Social',
          position: 'left',
          items: [
            {
              label: 'Blog',
              href: customFields.blogUrl,
              className: 'blog-logo',
              'aria-label': 'Polywrap Blog',
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
              className: 'twitter-logo',
              'aria-label': 'twitter account',
            },
            {
              label: 'Donate',
              href: customFields.gitcoinUrl,
              className: 'gitcoin-logo',
              'aria-label': 'gitcoin grant',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Code',
              href: customFields.githubUrl,
              className: 'github-logo',
              'aria-label': 'GitHub repository',
            },
            // Add back in once the forum is used
            /*{
              label: 'Discuss',
              href: customFields.forumUrl,
              className: 'forum-logo',
              'aria-label': 'Forum'
            },*/
            {
              label: 'Chat',
              href: customFields.discordUrl,
              className: 'discord-logo',
              'aria-label': 'Discord server',
            },
            {
              label: 'Govern',
              href: customFields.daoUrl,
              className: 'dao-logo',
              'aria-label': 'dao repo',
            },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/web3-api/documentation/tree/main',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./style.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
