const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".webpack.js", ".web.js"]
    },

    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }]
    }
}
