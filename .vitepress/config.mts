import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoWP MCP Server",
  description: "Documentation",
  base: '/autowp-docs/',
  themeConfig: {
    logo: {
      light: '/logo-light.png',  
      dark: '/logo-dark.png'     
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Njengah/autowpmcp' }
    ]
  }
})
