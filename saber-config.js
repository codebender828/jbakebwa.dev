const dotenv = require('dotenv-defaults')

// Configuring dotenv variables.
dotenv.config({
  path: './config/env/.env',
  defaults: './config/env/.env.defaults'
})

module.exports = {
  siteConfig: {
    title: 'Jonathan Bakebwa',
    description: 'Jonathan Bakebwa\'s personal development blog.'
  },
  plugins: [
    { resolve: 'saber-plugin-prismjs' },
    { resolve: 'saber-plugin-query-posts' },
    { resolve: 'saber-plugin-search' },
    { resolve: 'saber-plugin-netlify-redirect' }
  ],
  markdown: {
    headings: {
      markdownHeadings: true,
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '🔗'
    }
  },
  build: { lazy: true, extractCSS: true }
}
