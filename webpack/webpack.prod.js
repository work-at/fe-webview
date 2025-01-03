/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.base");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const TEMPLATE_PATH = path.resolve(PROJECT_ROOT, "public");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, "index.html"),
      favicon: "src/assets/images/favicon.png",
      minify: true,
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(TEMPLATE_PATH, "deploy.html"),
      filename: "deploy.html",
      chunks: ["deploy"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(PROJECT_ROOT, "public/", "assets"),
          to: path.resolve(PROJECT_ROOT, "dist/", "assets"),
        },
      ],
    }),
  ],
});
