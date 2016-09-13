'use strict';

var merge = require('merge');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/index.html'],
    target: './www/',
    injectSource: [
        './www/lib/**.js',
        './www/js/**.js',
        './www/css/**.css',
    ]
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(plugins.inject(gulp.src(options.injectSource, {
                read: false
            }), {
                    ignorePath: 'www',
                    addRootSlash: false
                }))
            .pipe(gulp.dest(options.target));
    }
};