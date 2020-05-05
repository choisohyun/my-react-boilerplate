const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
    }),
  ],
};
