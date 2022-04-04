const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false,
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载容器
            loader: "babel-loader",
            // 设置babel
            options:
              // 设置预定义环境
              {
                presets: [
                  [
                    // 制定环境插件
                    "@babel/preset-env",
                    // 配置信息
                    {
                      targets: {
                        chrome: "88",
                      },
                      corejs: "3",
                      useBuiltIns: "usage",
                    },
                  ],
                ],
              },
          },

          "ts-loader",
        ],
        exclude: /node-modules/,
      },
      // 指定less文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      //   title:"project01"
      template:"./src/index.html"
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
