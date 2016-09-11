'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();
var webpack = require("webpack");
var webpackConfig = require("../config/webpack.config");
var env = process.env.NODE_ENV;

var defaultOptions = {
    source: [
        './typings/**/*.ts',
        '!./typings/**/*-spec.ts',
        './src/**/*.ts'
    ],
    target: './www/',
    webpack: webpackConfig
};

if (env === 'production') {
    defaultOptions.webpack.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
} else {
    defaultOptions.webpack.devtool = 'source-map';
}

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(plugins.webpack(options.webpack))
            .pipe(gulp.dest(options.target));
    }
};