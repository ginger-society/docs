import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Ginger Socierty Documentation',
  tagline: 'We maintain mission critical open source softwares',
  favicon: 'img/ginger_mascot.ico',

  // Set the production url of your site here
  url: 'https://gingersociety.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ginger Society', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ginger Society Docs',
      logo: {
        alt: 'Ginger Society Logo',
        src: 'img/ginger_icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gingerSidebar',
          position: 'left',
          label: 'GingerDJ',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'gingerBookSidebar',
        //   position: 'left',
        //   label: 'GingerBook',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'gingerJSSidebar',
        //   position: 'left',
        //   label: 'GingerJS',
        // },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ginger Society`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
