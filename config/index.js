const path = require('path');
//项目名字
var repository = require("../package.json").name;
//配置静态资源服务器的地址（例如cdn）,页面上请求任何的资源都会加上这个前缀
const assetsPublicPathConfig = process.env.RUN_ENV == 'micro' ?  `/${repository}/` :' /static/'
module.exports = {
  build: {
    env: 'prod',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/static/'),
    assetsSubDirectory: 'assets',// static
    assetsPublicPath: assetsPublicPathConfig, 
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: 'dev',
    port: 3001,
    autoOpenBrowser: false,
    assetsSubDirectory: '/static/',
    // assetsPublicPath: '/',
    assetsPublicPath: 'http://localhost:3001/', // /static/
    proxyTable: {},
    cssSourceMap: false
  },
}