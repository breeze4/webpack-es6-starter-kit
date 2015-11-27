var path = require("path");

module.exports = {
    entry: "./es6/main.js",
    output: {
        path: path.join(__dirname, "dist" ),
        filename: "bundle.js",
    },
    watch: true,
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
    stats: {
        colors: true,
    },
    devtool: "source-map",
};
