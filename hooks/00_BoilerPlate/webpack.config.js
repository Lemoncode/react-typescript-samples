var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");
var path = require("path");

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: ["@babel/polyfill", "./main.ts"],
    output: {
        path: path.join(basePath, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        // inline: true, // Enable watch and live reload
        // host: "localhost",
        // port: 8080,
        // stats: "errors-only",
        static: {
            directory: "./dist",
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]"
                }
            }
        ]
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist/
            template: "index.html", //Name of template in ./src
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};