// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.gltf$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
};