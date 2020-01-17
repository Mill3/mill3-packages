/* eslint-disable no-undef */
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// import

export const SRC_PATH = path.join(__dirname, `./src`);
export const DIST_PATH = path.join(__dirname, `./dist`);

export const PATHS = {
  "system-ui": path.resolve(SRC_PATH, `system-ui.scss`),
  "theme": path.resolve(`theme.js`),
  "dist": DIST_PATH
};

const config = {
  mode: process.env.NODE_ENV,

  // main entries
  entry: {
    "system-ui": PATHS["system-ui"],
  },

  // output
  output: {
    path: PATHS.dist,
  },

  module:{
    rules : [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          `sass-loader`,
          {
            loader: 'sass-json-loader',
            options: { path: PATHS['theme'] }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css?hash=[hash]`,
      chunkFilename: `[id].css?hash=[hash]`
    })
  ]

}

export default config;
