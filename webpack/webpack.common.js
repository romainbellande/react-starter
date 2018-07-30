const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const EnvPlugin = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.svg', '.png'],
    alias: {
      src: path.resolve('./src'),
      app: path.resolve('./src/app'),
      'babel-core': path.resolve(
        path.resolve('./node_modules/@babel/core'),
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader',
        ],
        exclude: path.resolve('node_modules'),
        include: [
          path.resolve('src')
        ],
      },
      /**
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },

      /* File loader for supporting fonts, for example, in CSS files.
      */
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: process.env.NODE_ENV === 'production' ? 'index.html' : 'index.html'
    }),
    new EnvPlugin({
      safe: path.resolve('.env.dist')
    }),
  ]
}
