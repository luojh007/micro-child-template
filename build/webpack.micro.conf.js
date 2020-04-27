const path = require('path');
const webpack = require('webpack');
const baseWebpack = require('./webpack.base.conf')
const merge = require('webpack-merge')
var config = require('../config')
var utils = require('./utils')
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var projectConfig = require('./project.json')

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = merge(baseWebpack, {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js'),
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]/[chunkhash].js', // [name] bundle-loader 的name配置值
    // publicPath: projectConfig.prefix, //在output中指定模块配置好的 publicPath
    libraryTarget: 'system',
    library: projectConfig.name + '_[name]', //模块的名称
  },
  //压缩js,css
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  module: {
    rules: [
      {
        /* 自定义的组件，样式 css-modules 化？？如果需要使用其他的 css 预编译程序，则可以去除以下两条配置 */
        test: /(\.css|\.less)$/,
        include: [
          resolve("src/components"),
          resolve("src/view"),
        ],
        use: [
          // MiniCssExtractPlugin.loader,  //微服务化不可用
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // localIdentName: "[name]__[local]___[hash:base64:5]"
                localIdentName: projectConfig.name + "[name]__[local]___[hash:base64:5]"
              },
              sourceMap: config.build.productionSourceMap
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins:
                process.env.NODE_ENV === "production"
                  ? loader => [
                    require("postcss-import")({ root: loader.resourcePath }), //合并css，减少http请求
                    require("autoprefixer")() //为不同浏览器加上前缀
                  ]
                  : []
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      //以下是对全局样式对打包
      {
        test: /(\.css|\.less)$/,
        exclude: [
          resolve("src/components"),
          resolve("src/view"),
        ],
        use: [
          'style-loadr',
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: config.build.productionSourceMap
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: {} // 使用了 antd 的全局样式配置时，.babelrc 仅支持 import 导入 "style": true
              // ["import", { "libraryName": "antd", "style": true, "comment": "true for .less, css for .css"}]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.build.assetsSubDirectory,
        ignore: [".*"]
      }
    ])
  ],
}
)

