import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '页析',
  titleTemplate: '页析',
  description: "一个浏览器扩展，分析网页内容",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
          { text: 'gitee', link: 'https://gitee.com/qwe12345678/web-page-analysis' },
          { text: 'github', link: 'https://github.com/183600/web-page-analysis' }
    ],

    sidebar: [
      {
        text: '开源地址',
        items: [
          { text: 'gitee', link: 'https://gitee.com/qwe12345678/web-page-analysis' },
          { text: 'github', link: 'https://github.com/183600/web-page-analysis' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/qwe12345678/web-page-analysis' }
    ]
  }
})