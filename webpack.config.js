const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
  })],
};