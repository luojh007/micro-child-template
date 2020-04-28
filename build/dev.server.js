const webpack = require('webpack');
var history = require('connect-history-api-fallback');
var path = require("path");

const webpackConfig = require('./webpack.dev.conf')
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const config = require('../config/index')
const port = config.dev.port
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  // stats: "none"
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  hot: true,

})
app.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "X-Requested-With");
  res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.use(history({
  rewrites: [
    { from: /\w+\.html/, to: '/' },
  ]
}));

app.use(devMiddleware)

app.use(hotMiddleware)
var staticPath = path.posix.join(
  config.dev.assetsPublicPath,
  config.dev.assetsSubDirectory
);
app.use(staticPath, express.static("./static"));

app.listen(port, () => {
  console.log("成功启动：localhost:" + port)
})