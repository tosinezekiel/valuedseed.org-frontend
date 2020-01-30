 // vue.config.js
module.exports = {
  devServer: {
        proxy: 'http://valuedseed.org/',
    }
}
module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}