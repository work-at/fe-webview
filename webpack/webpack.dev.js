const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.base");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, "public");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    port: "5050",
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, "index.html"),
      favicon: "src/assets/images/favicon.png",
      minify: {
        removeComments: true,
      },
    }),
  ],
});
