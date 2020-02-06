// webpack.config.js
var path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "BreakpointsObserver",
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
  plugins: [new EsmWebpackPlugin()]
};
