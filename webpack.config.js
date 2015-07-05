var path = require('path');
var webpack = require('webpack');

module.exports = {
      context: path.join(__dirname, 'frontend'),
      resolve: {
        modulesDirectories: ["node_modules", "scripts"],
        extensions: ["", ".js"],
    },
    entry: {
        app: ["./scripts/app.js"],
    },
    devtool: "#inline-source-map",
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
    plugins: [ new webpack.HotModuleReplacementPlugin()]
};