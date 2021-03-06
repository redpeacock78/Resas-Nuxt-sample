require('dotenv').config()
const { API_KEY } = process.env
module.exports = {
  head: {
    title: 'resas-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    API_KEY,
  },
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/axios', { src: '~/plugins/VueLoading', ssr: false }],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
