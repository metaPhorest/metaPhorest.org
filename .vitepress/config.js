import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { imagetools } from 'vite-imagetools'

export default defineConfig ({
  lang: 'jp',
  title: 'metaPhorest',
  base: '/',
  cleanUrls: true,
  vite: { 
    plugins: [                          // vite plugins
      imagetools()
    ],
    /*
    resolve: {
      alias: [
        {
          find: /^.*\/VPTeamMembersItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPTeamMembersItem.vue', import.meta.url)
          )
        }
      ]
    }
    */
  }, 
  outDir: './dist',                     // distribtion folder
  ignoreDeadLinks: true,                // no build error when dead links
  srcExclude: ['**/README.md'],         // exclude files
  themeConfig: {
    externalLinkIcon: true,
    logo: { /* small logo navbar */
      light: '/images/metaphorest-logo.png',
      dark: '/images/metaphorest-logo-dark.png',
      alt: "metaPhorest"
    },
    lastUpdated: true,
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/metaphorest.net' },
      { icon: 'instagram', link: 'https://www.instagram.com/metaphorest_bioaesthetics/' },
      { icon: 'github', link: 'https://github.com/metaPhorest/metaPhorest.org/' },
    ],
    /*
    search: {
      provider: 'local'
    }
    */
  },
  locales: {
    root: {
      title: "metaPhorest",
      description: 'metaPhorest',
      label: '日本語',
      lang: 'jp', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        nav: [
          { text:'について', link:'/about/'},
          { text:'メンバー', link:'/members/'},
          { text:'セミナー', link:'/seminars/'},
          { text:'コンタクト', link:'/contact/'},
        ],
        editLink: {
          pattern: 'https://github.com/metaPhorest/metaPhorest.org/edit/main/:path',
          text: 'ページを編集する'
        },
        lastUpdated: {
          text: '最終更新日',
        },
        footer: {
          message: '',
          copyright: `Copyright ©${new Date().getFullYear()} metaPhorest`
        }
      }
    },
    en: {
      title: 'metaPhorest',
      description: 'metaPhorest',
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/',
      themeConfig: {
        nav: [
          { text:'About', link:'/en/about'},
          { text:'Members', link:'/en/members/'},
          { text:'Seminars', link:'/en/seminars/'},
          { text:'Contact', link:'/en/contact/'},
        ],
        editLink: {
          pattern: 'https://github.com/metaPhorest/metaPhorest.org/edit/main/:path',
          text: 'Edit this page'
        },
        lastUpdated: {
          text: 'Last updated at',
        },
        footer: {
          message: '',
          copyright: `Copyright ©${new Date().getFullYear()} metaPhorest`,
        }
      }
    }
  }
})