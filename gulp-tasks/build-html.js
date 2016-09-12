'use strict';

var merge = require('merge');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/components/**/*.html'],
    target: './www/components'
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(gulp.dest(options.target));
    }
};