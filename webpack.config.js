'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    //filename: '[name].[contenthash].css',
    filename: '[name].css'
});

const BabelPlugin = require('babel-webpack-plugin');

const babel = new BabelPlugin({
    test: /\.js$/,
    presets: ['es2015'],
    sourceMaps: false,
    compact: true
});

const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {

    const devMode = argv.mode !== 'production';

    let webpackConfig = {

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

    if (!devMode) {

        webpackConfig.optimization = {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            // we want terser to parse ecma 8 code. However, we don't want it
                            // to apply any minfication steps that turns valid ecma 5 code
                            // into invalid ecma 5 code. This is why the 'compress' and 'output'
                            // sections only apply transformations that are ecma 5 safe
                            // https://github.com/facebook/create-react-app/pull/4234
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            //ecma: 8,
                            warnings: false,
                            // Disabled because of an issue with Uglify breaking seemingly valid code:
                            // https://github.com/facebook/create-react-app/issues/2376
                            // Pending further investigation:
                            // https://github.com/mishoo/UglifyJS2/issues/2011
                            comparisons: false,
                            // Disabled because of an issue with Terser breaking valid code:
                            // https://github.com/facebook/create-react-app/issues/5250
                            // Pending futher investigation:
                            // https://github.com/terser-js/terser/issues/120
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            ecma: 5,
                            //ecma: 8,
                            comments: false,
                            // Turned on because emoji and regex is not minified properly using default
                            // https://github.com/facebook/create-react-app/issues/2488
                            ascii_only: true,
                        },
                    },
                    // Use multi-process parallel running to improve the build speed
                    // Default number of concurrent runs: os.cpus().length - 1
                    parallel: true,
                    // Enable file caching
                    cache: true,
                    sourceMap: false
                })
            ]
        };
    }

    return webpackConfig;
}
