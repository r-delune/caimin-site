export default {
  /*
   ** Headers of the page
   */
  target: 'static',
  ssr: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },
  
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@mdi/font/css/materialdesignicons.css',
    { src: '~assets/styles/fonts.scss', lang: 'scss' },
    { src: '~assets/fonts/Alte Haas Grotesk.css', lang: 'css' },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/expandable-image.js', ssr: false },
    { src: '@/plugins/youtube.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
    '@nuxt/components',
  ],
  components: true,
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
    // 'nuxt-netlify-cms',
  ],
  // You can optionally use global options instead of inline form
  // netlifyCms: {
  //   adminPath: "secure"
  // },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true,
            },
          },
          {
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
            options: {
              fix: true,
            },
          }
        )
      }
    },
  },
}
