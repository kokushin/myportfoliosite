const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            process.env.NODE_ENV === 'production'
            ? 'css-loader?importLoaders=1&minimize=1'
            : 'css-loader?importLoaders=1'
            , 'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin()
      : new webpack.HotModuleReplacementPlugin()
  ]
}
