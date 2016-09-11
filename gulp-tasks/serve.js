'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    server: "./www",
    browser: "google chrome",
    startPath: "/"
};

module.exports = function (gulp, browserSync, options) {
    return function() {
        options = merge(defaultOptions, options);
        browserSync.init(options);
    }
}