'use strict';

var merge = require('merge');
var runSequence = require('run-sequence');
var webpack = require("webpack");
var webpackConfig = require("../config/webpack.dll.config.js");
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    externalSource: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/core-js/client/shim.min.js.map',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/zone.js.map',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/reflect-metadata/Reflect.js.map',
        'node_modules/reflect-metadata/Reflect.js.map',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/jsbarcode/dist/JsBarcode.all.min.js',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],
    externalTarget: './www/lib/',
    webpack: webpackConfig
};

module.exports = function (gulp, options) {
    return function (callback) {
        options = merge(defaultOptions, options);
        gulp.src(options.externalSource)
            .pipe(gulp.dest(options.externalTarget));
        // return gulp.src(options.externalSource)
        //     .pipe(plugins.webpack(options.webpack))
        //     .pipe(gulp.dest(options.externalTarget));
        webpack(options.webpack, function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            callback();
        });
    }
};