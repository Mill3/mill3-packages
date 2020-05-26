// webpack.config.js
var path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "BarbaScripts",
    libraryTarget: "var"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: `babel-loader`,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    new EsmWebpackPlugin(),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
