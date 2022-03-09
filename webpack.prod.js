const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minSize: 10000,
          maxSize: 250000,
        },
      },
    },
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true,
        loader: 'tsx',
      }),
    ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env.production'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        hash: true,
      },
    }),
  ],

  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
});
