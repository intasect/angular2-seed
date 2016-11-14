'use strict';

var merge = require('merge');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    source: ['./src/index.html'],
    target: './www/',
    importantSource: ['./www/lib/jquery.min.js', './www/lib/tether.min.js'],
    injectSource: [
        './www/lib/**.js',
        '!./www/lib/jquery.min.js',
        '!./www/lib/tether.min.js',
        './www/lib/**.css',
        './www/js/**.js',
        './www/css/**.css',
        './www/shared/assets/js/*/**.js'
    ]
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.source)
            .pipe(plugins.inject(gulp.src(options.importantSource, { read: false }), { ignorePath: 'www', addRootSlash: false, starttag: '<!-- inject:head:{{ext}} -->' }))
            .pipe(plugins.inject(gulp.src(options.injectSource, { read: false }), { ignorePath: 'www', addRootSlash: false}))
            .pipe(gulp.dest(options.target));
    }
};