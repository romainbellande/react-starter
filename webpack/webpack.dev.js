const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');
// const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:9000'
  ],
  devServer: {
    port: 9000,
    hot: true,
    // historyApiFallback: true,
    // proxy: {
    //   '/api/v1': `http://${ process.env.SERVER_HOST || 'localhost' }:${process.env.SERVER_PORT || 3000}`
    // },
    host: process.env.HOST || '127.0.0.1',
    contentBase: path.resolve('src/assets')
  },
  module: {
    rules: [
      {
        test: /\.s?css?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 2 versions']
              },
              plugins: () => [
                autoprefixer
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('src/scss')],
              sourceMap: true,
              precision: 8,
              data: '$ENV: ' + 'DEVELOPMENT' + ';'
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new TypedocWebpackPlugin({
    //   name: 'My App',
    //   mode: 'file',
    //   includeDeclarations: false,
    //   ignoreCompilerErrors: true,
    //   tsconfig: path.resolve('tsconfig.json'),
    //   excludeExternal: true,
    //   out: path.resolve('docs'),
    // })
  ]
});
