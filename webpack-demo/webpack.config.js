const webpack = require('webpack'); //引入内置插件
const path = require('path');
// const UglifyPlugin = require('uglifyjs-webpack-plugin') //4.6弃用，使用optimizaion中minimize:true
//外部插件
const HtmlWebpackPlugin =  require('html-webpack-plugin'); //复制一个新的index.html到public中，并且引用打包后的文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //打包之前自动删除上一次结果，文件名hash，在output里设置
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //分离js和css文件,未成功
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离css和js文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩分离后的css
const CompressionPlugin = require('compression-webpack-plugin'); //开启gzip
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); //打包优化
module.exports = {
  mode: "development", //开发模式或者 production 模式
  // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry: __dirname + "/app/main.js", //唯一入口文件
  output: {
    path: __dirname + "/public", //打包后的文件存放的地方
    filename: "bundle-[hash].js", //打包后输出文件的文件名
  },
  devtool:
    process.env.NODE_ENV === "production"
      ? "cheap-module-source-map"
      : "eval-source-map",
  // devtool: process.env.NODE_ENV ==='production' ? 'cheap-module-source-map' : 'cheap-module-eval-source-map'

  devServer: {
    contentBase: "./public", //本地服务器加载的页面所在的目录
    port: 8080, //监听端口
    open: true, //自动打开浏览器
    // inline: true, //自动实时刷新，页面整个刷新

    hot: true, //热更新，只更新修改的部分，会自动导入webpack.HotModuleReplacementPlugin插件
    hotOnly: true, // 编译错误，重新编译，浏览器不会刷新
    historyApiFallback: true, //spa中，所有跳转指向index.html,不跳转
  },

  //loader配置在module里
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          // 这部分可以单独配置
          // options: {
          //   presets: [
          //     "env", "react",
          //   ]
          // }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader", 
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true, //指定启用 css modules
                localIdentName: '[name]__[local]__[hash:base64:5]', //指定css类名格式，避免全局污染
              }
            }
          },
          "postcss-loader"
        ]
      }
    ],
  },

  // plugins 里面配置插件
  plugins: [
    new webpack.BannerPlugin('版权所有，违者必究'), //版权申明，内部插件
    new HtmlWebpackPlugin({
      title: '开发环境的webpack', //title名字，index.html需要<%= htmlWebpackPlugin.options.title %>
      filename: __dirname + '/public/index.html', //配置输出文件名和路径
      template: __dirname + '/app/index.teml.html',
      minify: { //压缩html代码的配置
        minifyCSS: true, //压缩 html 中的 css
        minifyJS: true, //压缩 html 中的 js
        collapseWhitespace: true, //标签之间的空白格
      }
    }),
    new webpack.HotModuleReplacementPlugin(), //为组件分配id，webpack可以分析和优先考虑使用最多的模块
    // new webpack.UglifyJsPlugin(), // 压缩js代码，4内置插件已弃用，需要自己npm安装引入
    // new UglifyPlugin(), //npm安装引入,4.6弃用，用optimization
    new ExtractTextPlugin('[name].css'), //分离js和css，不支持webpack4：安装@next,无效
    new MiniCssExtractPlugin({
      filename: './css/[name]-[hash].css' //把css从js中分离
    }),
    new OptimizeCssAssetsPlugin(), //压缩分离后的css，style-loader替换为OptimizeCssAssetsPlugin.loader
    new CleanWebpackPlugin(), //打包之前自动删除上一次打包结果
    new CompressionPlugin({
      filename: '[path].gz[query]', //目标资产文件
      test: /(\.js|\.html|\.css)$/, //匹配文件名
      algorithm: 'gzip', //压缩算法
      threshold: 10240, //对超过10240KB的文件进行压缩
      minRatio: 0.8, //仅处理压缩率高于此比例的文件
      deleteOriginalAssets: false, //是否删除源文件
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的文件
          priority: -10 // 优先级配置项
        },
        default: {
          minChunks: 2,
          priority: -20, // 优先级配置项
          reuseExistingChunk: true
        }
       }
    },
    minimize: true, //4.6后开启js压
  }
};
