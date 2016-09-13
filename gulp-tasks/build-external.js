'use strict';

var merge = require('merge');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

var defaultOptions = {
    externalSource: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/core-js/client/shim.min.js.map',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/zone.js.map',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/reflect-metadata/Reflect.js.map'
    ],
    externalTarget: './www/lib/'
};

module.exports = function (gulp, options) {
    return function () {
        options = merge(defaultOptions, options);
        return gulp.src(options.externalSource)
            .pipe(gulp.dest(options.externalTarget));
    }
};