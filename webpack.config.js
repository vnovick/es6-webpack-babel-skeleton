var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('core-js');

module.exports = {
      context: path.join(__dirname, 'frontend'),
      resolve: {
        modulesDirectories: ["node_modules", "scripts", "stylesheets"],
        extensions: ["", ".js", ".scss"],
    },
    entry: {
        app: ["./scripts/app.js"],
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "bundle.js",
        sourceMapFilename: "[file].map"
    },
    devServer: {
      contentBase: ".",
      inline: true,
      watch: true,
      hot: true
    },
    module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              optional: 'runtime',
              nonStandard: 'false',
            },
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true')
          }
      ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin(), new ExtractTextPlugin('styles.css')]
};