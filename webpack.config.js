var path = require("path");
var webpack = require("webpack");
var LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
    entry: "./es6/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: path.join(__dirname, "es6"),
                query: {
                    presets: "es2015",
                },
            },
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new LiveReloadPlugin(),
    ],
    stats: {
        colors: true,
    },
    devtool: "source-map",
};
