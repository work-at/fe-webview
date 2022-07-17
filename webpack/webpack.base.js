const path = require("path");
const Dotenv = require("dotenv-webpack");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_PATH = path.resolve(PROJECT_ROOT, "dist");
const SRC_PATH = path.resolve(PROJECT_ROOT, "src");

module.exports = {
  entry: path.resolve(SRC_PATH, "index.tsx"),
  output: {
    path: DIST_PATH,
    filename: "[name].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": SRC_PATH,
    },
    modules: ["node_modules"],
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
