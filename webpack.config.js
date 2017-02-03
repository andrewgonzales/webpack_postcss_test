const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader?importLoaders=1',
                'postcss-loader']
          },
      ]
    }
};
