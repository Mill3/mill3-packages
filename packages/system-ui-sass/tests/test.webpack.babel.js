import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const TEST_PATH = path.join(__dirname, `./`);
export const ROOT_PATH = path.join(__dirname, `../`);
export const SRC_PATH = path.join(__dirname, `../src`);

export const PATHS = {
  src: SRC_PATH,
  theme: path.resolve(ROOT_PATH, `./theme.js`),
  scss: path.resolve(TEST_PATH, `./test.scss`),
  dist: path.resolve(TEST_PATH, `./output`),
};

const config = {
  mode: "production",
  // main entries
  entry: {
    test: PATHS.scss,
  },
  output: {
    path: PATHS.dist,
    filename: `[name].test-bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: `babel-loader`,
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          ...([`css-loader`, `sass-loader`]),
          {
            loader: "sass-json-loader",
            options: { path: PATHS["theme"] },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ]
};

export default config;
