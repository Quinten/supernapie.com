'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    //filename: "[name].[contenthash].css",
    filename: "[name].css"
});

const BabelPlugin = require("babel-webpack-plugin");

const babel = new BabelPlugin({
    test: /\.js$/,
    presets: ['es2015'],
    sourceMaps: false,
    compact: false
});

module.exports = {

    entry: ['babel-polyfill', 'whatwg-fetch', './src/index.js'],

    output: {
        path: path.resolve(__dirname, 'pub/build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        extractLess,
        babel
    ],

    devServer: {
        inline: true,
        contentBase: "./pub",
        historyApiFallback: {
            index: 'index.html'
        },
        port: 8009
    }

};
