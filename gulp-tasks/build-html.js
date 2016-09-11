'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/pages/**/*.html'],
    target: './www/pages'
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(gulp.dest(options.target));
    }
};