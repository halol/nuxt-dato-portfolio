export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'ZVrdHo7PwTskvXn-_AjN3_t-V6T09CX6JoKAJV3Ovfg'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/datocms', '~/plugins/filters'],
  /*
   ** Nuxt.js dev-modules
   */

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@netsells/nuxt-hotjar',
      {
        id: '2335280',
        sv: 6
      }
    ]
  ],
  googleAnalytics: {
    id: 'UA-6874650-30'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics']
  // build: {
  //   postcss: {
  //     preset: {
  //       features: {
  //         customProperties: false
  //       }
  //     }
  //   },
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config, ctx) {}
  // }
}
