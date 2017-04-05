'use strict';

const path = require('path'),
      webpack = require('webpack');

let config = {
  entry: {
    app: './src/js/entry.js'
  },
  output: {
    filename: 'app.js'
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.webpack.js', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: {
    // new webpack.optimize.UglifyJsPlugin()
  }
};

module.exports = config;