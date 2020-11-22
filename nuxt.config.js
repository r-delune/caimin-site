export default {
  /*
  ** Headers of the page
  */
 target: "static",
 mode: "universal",
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },
  // generate: {
  //   async routes () {
  //     // next comment to make VSCode ignore the "error"
  //     // @ts-ignore
  //     const { $content } = require('@nuxt/content')
  //     const pages = await $content().only(['path']).fetch()
  //     // const posts = await $content('pages').only(['path']).fetch()
      
  //     const files = [...pages]

  //     return files.map(file => file.path === '/index' ? '/' : file.path)
  //   }
  // },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',
        "@nuxt/components"
 
  ],

 
  components: true,
  
  // /*
  //  ** Nuxt content renderer
  //  */
  // content: {
  //   apiPrefix: 'pages',
  //   dir: 'content/pages',
  //   liveEdit: false,
  // },
  /*
   ** Allow parsing of markdown files
   */
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxtjs-mdi-font',

  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isClient }) {
      if (isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
          },
          {
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true
            }
        })
      }
    }
  }
}
