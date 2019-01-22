const path = require('path')

module.exports = {
  baseUrl: '/admin/',
  outputDir: path.resolve(__dirname, '../admin-site/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081'
      }
    }
  }
}
/* */
