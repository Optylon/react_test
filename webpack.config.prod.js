/* eslint-disable */

let path = require('path');
let config = require('./webpack.config.dev');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const uglifyOptions = {
  sourceMap: true,
  beautify: false,
  comments: false,
  compress: {
    collapse_vars: true,
    drop_console: true,
    screw_ie8: true,
    warnings: false
  },
  mangle: {
    screw_ie8: true,
    except: ['$super', '$', 'exports', 'require']
  },
  output: {
    screw_ie8: true,
    comments: false
  }
};

config = Object.assign({}, config);

delete config.devtool;

config.output = {
  path: path.resolve('./buildRelease'),
  filename: '[name].js',
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new ExtractTextPlugin('style.css', { allChunks: true }),
  new OptimizeCssAssetsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
  new webpack.optimize.UglifyJsPlugin(uglifyOptions)
];

module.exports = config;
