var path = require('path');

module.exports = {
      context: path.join(__dirname,'frontend'),
      resolve: {
        modulesDirectories: ["node_modules","scripts"],
        extensions: ["", ".js"],
    },
    entry: {
        app: ["./scripts/app.js"],
    },
    output: {
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',
        filename: "bundle.js",
    },
    devServer: {
      contentBase: ".",
    }
};