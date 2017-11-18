/* eslint-disable */

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: ['./src/index.js'],
    vendors: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader?' + 'presets[]=es2015,' + 'presets[]=stage-0,' + 'presets[]=react'
      },
      {
        test: /.jsx?$/,
        loader: 'eslint-loader?' + 'emitWarning=true,' + 'exclude[]=build/*.js',
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
  ],
  devtool: '#source-map'
};
