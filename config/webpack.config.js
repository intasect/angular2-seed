'use strict'

var webpack = require("webpack");
var env = process.env.ENV;

var config = {
    entry: {
        app: './app/main.ts'
    },
    output: {
        filename: './js/app.bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules|test/,
                loader: "tslint"
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules|test/,
                loader: 'ts-loader'
            }
        ]
    },
    
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

if (env === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    config.devtool = 'source-map';
} else {
    config.devtool = 'cheap-eval-source-map';
}

module.exports = config;