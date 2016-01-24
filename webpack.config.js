var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: './es6/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //watch: true,
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    //stats: {
    //    colors: true
    //},
    //devtool: 'source-map'
};
