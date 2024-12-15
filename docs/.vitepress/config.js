// export default {
//   base: '/web-page-analysis_1/'
// }
// export default {
//   lang: 'en-US',
//   title: 'VitePress',
//   description: 'Vite & Vue powered static site generator.',
//
//   // 主题相关配置
//   themeConfig: {
//     logo: '/logo.svg',
//     nav: [...],
//     sidebar: { ... }
//   }
// }
export default {
  base: '/web-page-analysis_1/',
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
}
