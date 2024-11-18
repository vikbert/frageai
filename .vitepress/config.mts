import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FrageAI',
  description: 'AI prompt guide',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  themeConfig: {
    logo: '/logo.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Xun Zhou',
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
