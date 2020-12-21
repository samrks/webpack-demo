const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// 共有配置
module.exports = { // .exports 表示导出这个对象
  entry: "./src/index.js",  // 默认入口文件，写不写都行
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XDML - 写代码啦",
      template: "src/assets/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{loader: "file-loader"}]
      }
    ]
  }
}