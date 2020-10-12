/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'production',
  // mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'script'),
    publicPath: 'script/',
  },
  // devServer: {
  //   contentBase: './',
  // },
  devtool: 'cheap-source-map',
};
