const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./source/app.js",
    output: {
      filename: "./build/app.js",
    },
    sourceMap: true,
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  }
  plugins: [
    
    
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]

  