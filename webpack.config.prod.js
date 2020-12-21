const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const base = require("./webpack.config.base")

// 生产环境 build
module.exports = {
  ...base, // 获取到共有配置的添加进来
  mode: "production",
  devServer: {
    contentBase: "./dist"  // 生成的 dist 目录，就是用来给用户下载的
  },
  plugins: [
    ...base.plugins, // 相当于追加下面插件 MiniCssExtractPlugin
    new MiniCssExtractPlugin({  // 插件功能：将多个css文件合并成一个css文件
      filename: "[name].[contenthash].css" // 生产环境，为了提升用户访问速度，需实现http缓存（引入hash命名的css文件）
    })
  ],
  module: {
    rules: [
      ...base.module.rules,  // 添加共有规则
      {
        test: /\.css$/i, // $ 表示结束。以【.css】结尾的文件
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }, {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", {
          loader: "sass-loader", // compiles SASS to CSS
          options: {implementation: require("dart-sass")}
        }]
      }, {
        test: /\.less$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"/*compiles LESS to CSS*/]
      }, {
        test: /\.styl$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"/*compiles Stylus to CSS*/]
      }
    ]
  }
}
