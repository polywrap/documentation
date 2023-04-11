// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const customFields = {
  githubUrl: `https://github.com/polywrap/monorepo`,
  discordUrl: `https://discord.gg/Z5m88a5qWu`,
  handbookUrl: `https://handbook.polywrap.io`,
  twitterUrl: 'https://twitter.com/polywrap_io',
  forumUrl: 'https://forum.polywrap.io',
  daoUrl: 'https://snapshot.org/#/polywrap.eth',
  blogUrl: 'https://blog.polywrap.io/',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polywrap (Origin)',
  tagline: 'The Universal Web3 Integration Standard',
  favicon: 'img/favicon.png',
  url: 'https://docs.polywrap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'polywrap',
  projectName: 'documentation',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/polywrap/documentation/tree/main/src',
          sidebarCollapsible: true,
          routeBasePath: "/"
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-160302501-1',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'UA-160302501-1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: 'Origin',
        logo: {
          alt: 'Polywrap Icon',
          src: 'img/polywrap-logo-light.png',
          srcDark: 'img/polywrap-logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            position: 'left',
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
              {
                label: 'Handbook',
                href: customFields.handbookUrl,
                className: 'handbook-logo',
                'aria-label': 'handbook',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [require.resolve('docusaurus-lunr-search')]
};

module.exports = config;
