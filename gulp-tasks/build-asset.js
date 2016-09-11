'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/assets/**'],
    target: './www/assets'
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(gulp.dest(options.target));
    }
};