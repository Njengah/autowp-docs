import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "AutoWP MCP Server",
  description: "Documentation",
  base: '/autowp-docs/',
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {
    logo: {
      light: '/logo-light.png',  
      dark: '/logo-dark.png'     
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
          { text: 'Authentication', link: '/authentication' },
          { text: 'Configuration', link: '/configuration' }
        ]
      },
      {
          text: 'Core Tools',
          items: [
            { text: 'Content Management', link: '/content-management' },
            { text: 'Draft Management', link: '/draft-management' },
            { text: 'Media Management', link: '/media-management' },
            { text: 'Taxonomy Management', link: '/taxonomy-management' },
            { text: 'User Management', link: '/user-management' }
          ]
        },

        {
        text: 'Site & Advanced',
        items: [
          { text: 'Plugin & Theme Settings', link: '/plugin-theme-settings' },
          { text: 'Site Health & Maintenance', link: '/site-health' }
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'FAQ', link: '/index#frequently-asked-questions-faq' },
          { text: 'Contribution', link: '/contribution' }
        ]
      }


    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Njengah/autowpmcp' }
    ]
  }
})
