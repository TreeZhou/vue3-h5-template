const webpack = require('webpack');
const cdn = '';
const path = '';

let pages;
pages = {
  app: {
    entry: 'src/main.js',
    template: 'public/index.html',
    filename: './index.html',
    title: 'windowTitle',
    chunks: ['chunk-vendors', 'chunk-common', 'app']
  }
};

module.exports = {
  transpileDependencies: [/.*vf-modal.*/],
  outputDir: 'dist',
  pages,
  publicPath: process.env.VUE_APP_STATUS === 'prod' ? cdn + path : './',
  devServer: {
    // host: 'localhost.rabbitpre.com',
    open: true,
    openPage: '?debug=1&mock=true',
    port: 5060,
    hot: true,
    quiet: true
    // proxy: {
    //   '/api': {
    //     target: 'https://testzudui.chajian.rabbitpre.com',
    //     changeOrigin: true,
    //   }
    // }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `
          @import "@/styles/mixin.scss";
        `
      }
    }
  },
  productionSourceMap: process.env.VUE_APP_STATUS === 'prod' ? false : true,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  }
};
