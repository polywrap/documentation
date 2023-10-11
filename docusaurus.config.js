// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('./src/theme/syntax');
const darkCodeTheme = require('./src/theme/syntax')

const customFields = {
  githubUrl: `https://github.com/polywrap`,
  discordUrl: `https://discord.polywrap.io`,
  handbookUrl: `https://handbook.polywrap.io`,
  twitterUrl: 'https://twitter.com/polywrap_io',
  forumUrl: 'https://forum.polywrap.io',
  daoUrl: 'https://snapshot.org/#/polywrap.eth',
  blogUrl: 'https://blog.polywrap.io/',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polywrap',
  tagline: 'Enter The Composable Future',
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
        logo: {
          alt: 'Polywrap Icon',
          src: 'img/polywrap-logo-light.png',
          srcDark: 'img/polywrap-logo.png',
          href: '/',
          className: 'navbar-logo'
        },
        items: [
          {
            position: 'right',
            label: 'Website',
            href: 'https://polywrap.io',
          },
          {
            position: 'right',
            label: 'Twitter',
            href: customFields.twitterUrl,
          },
          {
            position: 'right',
            label: 'Discord',
            href: customFields.discordUrl,
          },
          {
            position: 'right',
            label: 'Github',
            href: customFields.githubUrl,
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
        additionalLanguages: [
          "toml",
          "rust",
          "python",
          "kotlin",
          "swift",
          "rust",
          "shell-session"
        ]
      },
    }),

  plugins: [require.resolve('docusaurus-lunr-search')]
};

module.exports = config;
