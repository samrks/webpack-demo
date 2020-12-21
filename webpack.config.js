const base = require("./webpack.config.base.js")

// 开发环境 start
module.exports = {
  ...base, // 添加共有配置
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,  // 添加共有规则
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"] // 开发环境，在head中生成style标签，提升加载速率
        // style-loader ： 有几个css文件，就生成几个 style 标签
        // css-loader ： 把css代码转换为JS字符串（实现在JS文件中 import "xxx.css"）
      }, {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", {
          loader: "sass-loader",
          options: {implementation: require("dart-sass")}
        }]
      }, {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      }, {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  }
}
